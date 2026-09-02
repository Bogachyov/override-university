import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  telegram: z.string().min(2).max(64),
  country: z.string().min(1).max(64),
  hours: z.string().min(1).max(64),
  goal: z.string().min(1).max(64),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const token = process.env["TELEGRAM_BOT_TOKEN"];
    if (!token) throw new Error("TELEGRAM_BOT_TOKEN is not configured");

    const nick = data.telegram.startsWith("@") ? data.telegram : `@${data.telegram}`;
    const text = [
      "🎓 <b>Новая заявка — Override University</b>",
      "",
      `<b>Telegram:</b> ${nick}`,
      `<b>Страна:</b> ${data.country}`,
      `<b>Часов в день:</b> ${data.hours}`,
      `<b>Цель:</b> ${data.goal}`,
    ].join("\n");

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: 609868094,
        text,
        parse_mode: "HTML",
      }),
    });

    const body = await res.text();
    if (!res.ok) {
      console.error(`Telegram sendMessage failed [${res.status}]: ${body}`);
      throw new Error(`Telegram request failed [${res.status}]: ${body}`);
    }
    const parsed = JSON.parse(body) as { ok?: boolean; description?: string };
    if (!parsed.ok) {
      console.error(`Telegram error: ${body}`);
      throw new Error(`Telegram error: ${parsed.description ?? body}`);
    }

    return { ok: true as const };
  });
