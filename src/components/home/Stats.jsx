function Stats() {
  const stats = [
  { number: "React", label: "Frontend" },
  { number: "Tailwind", label: "Styling" },
  { number: "Appwrite", label: "Backend (Coming Soon)" },
  { number: "v1.0", label: "Current Version" },
];

  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">

        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8 text-center backdrop-blur-md"
          >
            <h2 className="text-4xl font-bold text-purple-400">
              {item.number}
            </h2>

            <p className="mt-2 text-slate-400">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;