import {
  NotebookPen,
  CheckSquare,
  BarChart3,
} from "lucide-react";

function Features() {
  const features = [
    {
      title: "Smart Notes",
      description:
        "Create, organize and manage your notes in one beautiful workspace.",
      icon: <NotebookPen size={42} />,
    },
    {
      title: "Task Manager",
      description:
        "Plan your day, track your progress and never miss important work.",
      icon: <CheckSquare size={42} />,
    },
    {
      title: "Analytics",
      description:
        "Monitor your productivity with clean charts and useful insights.",
      icon: <BarChart3 size={42} />,
    },
  ];

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-4xl font-bold text-white">
          Everything You Need
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
          Everything required to manage your notes, tasks and productivity in
          one modern workspace.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex min-h-[280px] flex-col rounded-3xl border border-slate-700 bg-slate-900/70 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 transition group-hover:bg-purple-500 group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {feature.description}
              </p>

              <button className="mt-auto pt-8 text-left font-semibold text-purple-400 transition hover:text-purple-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;