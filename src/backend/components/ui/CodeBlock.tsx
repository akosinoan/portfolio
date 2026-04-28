import { cn } from "@/lib/cn";

const tokenClass: Record<string, string> = {
  k: "text-[#fb923c]",
  fn: "text-[#fde68a]",
  ty: "text-[#a5b4fc]",
  s: "text-[#86efac]",
  c: "text-zinc-500 italic",
  m: "text-[#7dd3fc]",
  p: "text-zinc-400",
};

type Token = { t: keyof typeof tokenClass | "x"; v: string };

const lines: Token[][] = [
  [
    { t: "k", v: "async fn" },
    { t: "x", v: " " },
    { t: "fn", v: "create_user" },
    { t: "p", v: "(" },
  ],
  [
    { t: "x", v: "    " },
    { t: "m", v: "State" },
    { t: "p", v: "(db)" },
    { t: "p", v: ": " },
    { t: "ty", v: "State" },
    { t: "p", v: "<" },
    { t: "ty", v: "PgPool" },
    { t: "p", v: ">," },
  ],
  [
    { t: "x", v: "    " },
    { t: "m", v: "Json" },
    { t: "p", v: "(req)" },
    { t: "p", v: ": " },
    { t: "ty", v: "Json" },
    { t: "p", v: "<" },
    { t: "ty", v: "NewUser" },
    { t: "p", v: ">," },
  ],
  [
    { t: "p", v: ") -> " },
    { t: "ty", v: "Result" },
    { t: "p", v: "<" },
    { t: "ty", v: "Json" },
    { t: "p", v: "<" },
    { t: "ty", v: "User" },
    { t: "p", v: ">, " },
    { t: "ty", v: "ApiError" },
    { t: "p", v: "> {" },
  ],
  [
    { t: "x", v: "    " },
    { t: "k", v: "let" },
    { t: "x", v: " user = " },
    { t: "m", v: "sqlx" },
    { t: "p", v: "::" },
    { t: "fn", v: "query_as!" },
    { t: "p", v: "(" },
    { t: "ty", v: "User" },
    { t: "p", v: ", " },
    { t: "c", v: "/* … */" },
    { t: "p", v: ")" },
  ],
  [
    { t: "x", v: "        ." },
    { t: "fn", v: "fetch_one" },
    { t: "p", v: "(&db)" },
  ],
  [
    { t: "x", v: "        ." },
    { t: "fn", v: "await" },
    { t: "p", v: "?;" },
  ],
  [{ t: "x", v: "" }],
  [
    { t: "x", v: "    " },
    { t: "m", v: "tracing" },
    { t: "p", v: "::" },
    { t: "fn", v: "info!" },
    { t: "p", v: "(" },
    { t: "x", v: "user_id = %user.id, " },
    { t: "s", v: '"user created"' },
    { t: "p", v: ");" },
  ],
  [
    { t: "x", v: "    " },
    { t: "ty", v: "Ok" },
    { t: "p", v: "(" },
    { t: "ty", v: "Json" },
    { t: "p", v: "(user))" },
  ],
  [{ t: "p", v: "}" }],
];

export function CodeBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur",
        className
      )}
      role="img"
      aria-label="Rust Axum handler code snippet"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="ml-3 font-mono text-[11px] uppercase tracking-wider text-muted">
          src/handlers/users.rs
        </span>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-relaxed text-zinc-100 sm:text-[13.5px]">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {line.length === 0 || (line.length === 1 && line[0].v === "")
                ? " "
                : line.map((tok, j) => (
                    <span
                      key={j}
                      className={
                        tok.t === "x" ? "text-zinc-100" : tokenClass[tok.t]
                      }
                    >
                      {tok.v}
                    </span>
                  ))}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
