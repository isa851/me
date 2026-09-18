import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, telegram, message } = body;

    if (!name || !telegram || !message) {
      return NextResponse.json(
        { error: "Все поля обязательны к заполнению" },
        { status: 400 }
      );
    }

    // Hard validation to prevent spam
    const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;
    const htmlRegex = /<[^>]*>?/gm;
    
    // Validate Name
    if (name.length < 2 || name.length > 50 || urlRegex.test(name) || htmlRegex.test(name)) {
      return NextResponse.json({ error: "Некорректное имя" }, { status: 400 });
    }

    // Validate Telegram
    if (telegram.length < 3 || telegram.length > 50 || urlRegex.test(telegram)) {
      return NextResponse.json({ error: "Некорректный Telegram" }, { status: 400 });
    }

    // Validate Message (max 1000 chars, no HTML, maybe allow some URLs but let's restrict excessive links or just limit length and html)
    if (message.length < 10 || message.length > 1000 || htmlRegex.test(message)) {
      return NextResponse.json({ error: "Сообщение должно быть от 10 до 1000 символов и не содержать HTML" }, { status: 400 });
    }

    // Simple spam keyword check
    const spamKeywords = ["casino", "crypto", "bitcoin", "invest", "SEO", "viagra", "dating", "sex", "porn", "earning", "profit", "http"];
    const lowerMessage = message.toLowerCase();
    const isSpam = spamKeywords.some(keyword => lowerMessage.includes(keyword));
    
    if (isSpam) {
      return NextResponse.json({ error: "Сообщение содержит запрещенные слова" }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials are not configured in .env.local");
      return NextResponse.json(
        { error: "Внутренняя ошибка сервера" },
        { status: 500 }
      );
    }

    const text = `
📩 <b>Новая заявка с сайта-портфолио!</b>

👤 <b>Имя:</b> ${name}
✈️ <b>Telegram:</b> ${telegram}

💬 <b>Сообщение:</b>
${message}
    `;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Telegram API Error:", errorData);
      return NextResponse.json(
        { error: "Не удалось отправить сообщение" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
