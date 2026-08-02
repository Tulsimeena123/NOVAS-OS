function Stats() {
  const stats = [
    { number: "React", label: "Frontend" },
    { number: "Tailwind", label: "Styling" },
    { number: "Appwrite", label: "Backend (Coming Soon)" },
    { number: "v1.0", label: "Current Version" },
  ];

  return (
    <section className="flex justify-center py-24 px-6">
      <div className="mx-auto max-w-7xl">

<div className="mx-auto grid w-full max-w-5xl justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">          {stats.map((item) => (
            <div
              key={item.label}
              className="mx-auto flex h-[190px] w-[240px] flex-col items-center justify-center rounded-3xl border border-slate-700 bg-slate-900/70 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]"
            >
              <h2 className="break-words text-4xl font-extrabold text-purple-400">
                {item.number}
              </h2>

              <p className="mt-4 max-w-[180px] break-words text-sm leading-6 text-slate-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;