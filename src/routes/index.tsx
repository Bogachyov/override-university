import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Override University — практические навыки за $50/мес" },
      {
        name: "description",
        content:
          "Система образования сломана. Override University: ИИ, трафик, автоматизации и e-com в твоём телефоне за $50 в месяц. Еженедельные патчи контента.",
      },
      { property: "og:title", content: "Override University" },
      {
        property: "og:description",
        content:
          "Практические навыки (ИИ, трафик, автоматизации, e-com) за $50/мес. Без кредитов и инфоцыганской воды.",
      },
    ],
  }),
  component: Landing,
});

const COUNTRY_OPTIONS = [
  "Россия",
  "Казахстан",
  "Беларусь",
  "Украина",
  "Узбекистан",
  "Кыргызстан",
  "Таджикистан / Туркменистан",
  "Грузия",
  "Азербайджан / Армения",
  "Литва / Латвия / Эстония",
  "Молдова",
  "Другая страна (Релокация / Мир)",
];

const QUESTIONS = [
  {
    key: "hours" as const,
    title: "Сколько часов в день ты готов работать ради результата?",
    options: ["1–2 часа", "3–5 часов", "6+ часов"],
  },
  {
    key: "goal" as const,
    title: "Твоя главная цель?",
    options: ["Заработок в USDT", "Свобода от системы", "Своё агентство"],
  },
];

function Landing() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 py-16 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(60%_50%_at_50%_10%,color-mix(in_oklch,var(--wine)_60%,transparent),transparent_70%)]"
        />
        <div className="relative w-full max-w-xl">
          <div className="halo mx-auto mb-9 w-36 sm:w-44">
            <img
              src={logo}
              alt="Официальный логотип Override University"
              className="w-full"
              width={1026}
              height={1024}
            />
          </div>

          <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.34em] text-gold/70">
            Override University
          </p>

          <h1 className="text-gold-gradient text-[2.15rem] leading-[1.08] font-semibold sm:text-5xl">
            Система образования сломана.
            <br />
            Мы создали Override.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
            Практические навыки (ИИ, Трафик, Автоматизации, E-com и другие) в твоем телефоне за
            $50/мес. Без кредитов, рассрочек на $1500 и инфоцыганской воды.
          </p>

          <button
            type="button"
            onClick={() => setQuizOpen(true)}
            className="glow-wine mt-10 w-full rounded-full bg-wine px-8 py-4 text-base font-semibold text-gold-bright transition-transform duration-200 active:scale-[0.98] hover:bg-wine-bright sm:w-auto"
          >
            Занять место на закрытый бета-тест
          </button>
        </div>
      </section>

      {/* Разоблачение */}
      <section className="relative px-5 py-20">
        <div className="hairline mx-auto mb-16 max-w-xs" />
        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl leading-tight font-semibold text-gold sm:text-4xl">
            Школа, вуз, курсы — одна и та же ловушка
          </h2>
          <div className="mt-7 space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground">
            <p>
              Тебе продают не знания, а отсрочку. 11 лет школы, 4 года вуза, полгода «профессии с
              нуля» — и на выходе человек, который умеет сдавать, но не умеет делать.
            </p>
            <p>
              Программу писали три года назад, записали два года назад, продают тебе сегодня. Это
              <span className="text-gold"> замороженная теория</span>: рынок уже сменил инструменты,
              алгоритмы, связки и цены, а ты учишь мёртвое.
            </p>
            <p>
              Альтернативное обучение не спасает. Те же слайды, только дороже: рассрочка на $1500,
              «наставник» в чате на 400 человек, мотивационная вода вместо механики.
            </p>
            <p className="border-l-2 border-wine-bright pl-4 text-foreground">
              Итог один: люди выходят пустыми. С сертификатом, долгом и без единого навыка, за
              который платят.
            </p>
          </div>
        </div>
      </section>

      {/* Решение */}
      <section className="relative px-5 pb-24">
        <div className="hairline mx-auto mb-16 max-w-xs" />
        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl leading-tight font-semibold text-gold sm:text-4xl">
            Наше решение — обучение без заморозки
          </h2>

          <ul className="mt-8 space-y-4">
            {[
              {
                t: "Живая программа",
                d: "Никакой замороженной теории. Только то, что работает и приносит деньги прямо сейчас.",
              },
              {
                t: "Еженедельные патчи контента",
                d: "Рынок меняется — мы выкатываем обновление. Сменился алгоритм или инструмент, и в тот же неделю у тебя новая рабочая связка.",
              },
              {
                t: "$50 в месяц. Выход в любой момент",
                d: "Без кредитов и рассрочек на $1500. Не зашло — отменил подписку одной кнопкой и ничего никому не должен.",
              },
            ].map((item) => (
              <li
                key={item.t}
                className="rounded-2xl border border-gold/20 bg-card/70 p-5 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-gold-bright">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setQuizOpen(true)}
            className="glow-wine mt-10 w-full rounded-full bg-wine px-8 py-4 text-base font-semibold text-gold-bright transition-transform duration-200 active:scale-[0.98] hover:bg-wine-bright"
          >
            Занять место на закрытый бета-тест
          </button>
          <p className="mt-10 text-center text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Override University
          </p>
        </div>
      </section>

      <QuizSheet open={quizOpen} onClose={() => setQuizOpen(false)} />
    </main>
  );
}

function QuizSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [telegram, setTelegram] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const total = 4;

  const finish = async (final: Record<string, string>) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/public/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          telegram: telegram.startsWith("@") ? telegram : `@${telegram}`,
          country: final["country"] ?? "",
          hours: final["hours"] ?? "",
          goal: final["goal"] ?? "",
        }),
      });
      if (!res.ok) throw new Error(`Request failed [${res.status}]`);
      setStatus("done");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  const pick = (key: string, value: string) => {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    if (step === total - 1) {
      void finish(next);
    } else {
      setStep(step + 1);
    }
  };

  const close = () => {
    onClose();
    setTimeout(() => {
      setStep(0);
      setTelegram("");
      setAnswers({});
      setStatus("idle");
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={close} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Анкета на бета-тест"
        className={`absolute inset-x-0 bottom-0 max-h-[92svh] overflow-y-auto rounded-t-3xl border-t border-gold/30 bg-card px-5 pt-4 pb-9 transition-transform duration-400 ease-out sm:mx-auto sm:max-w-lg sm:rounded-3xl sm:bottom-6 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-gold/40" />

        {status === "done" ? (
          <div className="py-10 text-center">
            <h2 className="text-2xl font-semibold text-gold">Твоя заявка принята.</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ожидай сообщения от нашего бота в Telegram.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-8 w-full rounded-full border border-gold/40 px-6 py-3 text-sm font-medium text-gold"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 flex gap-1.5">
              {Array.from({ length: total }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full ${i <= step ? "bg-gold" : "bg-secondary"}`}
                />
              ))}
            </div>

            {step === 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gold-bright">
                  Твой никнейм в Telegram
                </h2>
                <div className="mt-5 flex items-center rounded-xl border border-gold/25 bg-background px-4">
                  <span className="text-lg text-gold">@</span>
                  <input
                    value={telegram.replace(/^@/, "")}
                    onChange={(e) => setTelegram(e.target.value.replace(/^@/, ""))}
                    placeholder="username"
                    autoComplete="off"
                    className="w-full bg-transparent py-4 pl-1 text-base text-foreground outline-none placeholder:text-muted-foreground/60"
                  />
                </div>
                <button
                  type="button"
                  disabled={telegram.replace(/^@/, "").trim().length < 2}
                  onClick={() => setStep(1)}
                  className="glow-wine mt-6 w-full rounded-full bg-wine px-6 py-4 text-base font-semibold text-gold-bright disabled:opacity-40 disabled:shadow-none"
                >
                  Далее
                </button>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="text-xl leading-snug font-semibold text-gold-bright">
                  Из какой ты страны?
                </h2>
                <Select
                  value={answers["country"] ?? ""}
                  onValueChange={(value) => pick("country", value)}
                >
                  <SelectTrigger className="mt-5 h-auto min-h-[3.5rem] w-full rounded-xl border border-gold/25 bg-background px-4 py-4 text-base text-foreground focus:ring-1 focus:ring-gold/50 focus:ring-offset-0 [&>span]:line-clamp-none">
                    <SelectValue placeholder="Выбери страну…" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[min(24rem,var(--radix-select-content-available-height))] rounded-xl border-gold/25 bg-card text-foreground shadow-xl">
                    {COUNTRY_OPTIONS.map((opt) => (
                      <SelectItem
                        key={opt}
                        value={opt}
                        className="cursor-pointer py-3 pr-8 text-base text-foreground focus:bg-wine/30 focus:text-gold-bright data-[state=checked]:text-gold-bright"
                      >
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {step > 0 && status !== "sending" && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="mt-5 text-sm text-muted-foreground"
                  >
                    ← Назад
                  </button>
                )}
              </div>
            )}

            {QUESTIONS.map((q, i) =>
              step === i + 2 ? (
                <div key={q.key}>
                  <h2 className="text-xl leading-snug font-semibold text-gold-bright">{q.title}</h2>
                  <div className="mt-5 space-y-3">
                    {q.options.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        disabled={status === "sending"}
                        onClick={() => pick(q.key, opt)}
                        className="w-full rounded-xl border border-gold/25 bg-background px-5 py-4 text-left text-base text-foreground transition-colors hover:border-gold hover:bg-wine/25 disabled:opacity-50"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {step > 0 && status !== "sending" && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="mt-5 text-sm text-muted-foreground"
                    >
                      ← Назад
                    </button>
                  )}
                </div>
              ) : null,
            )}

            {status === "sending" && (
              <p className="mt-6 text-center text-sm text-gold">Отправляем заявку…</p>
            )}
            {status === "error" && (
              <p className="mt-6 text-center text-sm text-destructive">
                Не удалось отправить. Попробуй ещё раз.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
