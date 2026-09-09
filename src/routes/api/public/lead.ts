import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const leadSchema = z.object({
  telegram: z.string().min(2).max(64),
  country: z.string().min(1).max(64),
  hours: z.string().min(1).max(64),
  goal: z.string().min(1).max(64),
});

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "access-control-allow-headers": "content-type",
      "access-control-allow-methods": "POST, OPTIONS",
    },
  });

export const Route = createFileRoute("/api/public/lead")({
  server: {
    handlers: {
      OPTIONS: () =>
        new Response(null, {
          status: 204,
          headers: {
            "access-control-allow-origin": "*",
            "access-control-allow-headers": "content-type",
            "access-control-allow-methods": "POST, OPTIONS",
          },
        }),
      POST: async ({ request }) => {
        const token = process.env["TELEGRAM_BOT_TOKEN"];
        const chatId = process.env["TELEGRAM_CHAT_ID"] ?? "609868094";
        if (!token) return json({ ok: false, error: "TELEGRAM_BOT_TOKEN is not configured" }, 500);

        let parsedInput;
        try {
          parsedInput = leadSchema.parse(await request.json());
        } catch {
          return json({ ok: false, error: "Invalid payload" }, 400);
        }

        const nick = parsedInput.telegram.startsWith("@")
          ? parsedInput.telegram
          : `@${parsedInput.telegram}`;
        const text = [
          "🎓 <b>Новая заявка — Override University</b>",
          "",
          `<b>Telegram:</b> ${nick}`,
          `<b>Страна:</b> ${parsedInput.country}`,
          `<b>Часов в день:</b> ${parsedInput.hours}`,
          `<b>Цель:</b> ${parsedInput.goal}`,
        ].join("\n");

        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
        });

        const body = await res.text();
        if (!res.ok) {
          console.error(`Telegram sendMessage failed [${res.status}]: ${body}`);
          return json({ ok: false, error: `Telegram request failed [${res.status}]` }, 502);
        }
        const parsed = JSON.parse(body) as { ok?: boolean; description?: string };
        if (!parsed.ok) {
          console.error(`Telegram error: ${body}`);
          return json({ ok: false, error: parsed.description ?? "Telegram error" }, 502);
        }

        return json({ ok: true });
      },
    },
  },
});
