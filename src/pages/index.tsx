const highlights = [
  {
    label: 'Tech Stack',
    value: 'React 19 · TypeScript · Vite',
  },
  {
    label: 'Styling',
    value: 'Tailwind CSS + PostCSS',
  },
  {
    label: 'Build Ready',
    value: 'pnpm / npm / yarn',
  },
]

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16">
        <header className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.5em] text-emerald-300">
            トップページ
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            React + Tailwind スターターテンプレート
          </h1>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            この画面は <code className="rounded bg-slate-900 px-2 py-1 text-sm">src/pages/index.tsx</code> で管理されています。
            pages 直下にファイルを追加することで簡単に画面を増やすことができます。
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40 backdrop-blur"
            >
              <p className="text-sm uppercase tracking-wide text-slate-300">{item.label}</p>
              <p className="mt-3 text-xl font-semibold text-white">{item.value}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}
