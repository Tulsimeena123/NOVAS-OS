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
    <section className="flex justify-center py-24 px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
<h2 className="w-full text-center text-4xl font-extrabold text-white md:text-5xl">            Everything You Need
          </h2>

<p className="mt-5 w-full max-w-3xl text-center text-lg leading-8 text-slate-400">            Everything required to manage your notes, tasks and productivity
            inside one modern workspace.
          </p>
        </div>

        {/* Cards */}
<div className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">          {features.map((feature) => (
            <div
              key={feature.title}
              className="mx-auto flex h-[340px] w-full max-w-[350px] flex-col items-center justify-between rounded-3xl border border-slate-700 bg-slate-900/70 p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_0_45px_rgba(168,85,247,0.25)]">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {feature.description}
              </p>

              <button className="mt-8 rounded-xl border border-purple-500/30 px-5 py-2 font-semibold text-purple-400 transition hover:bg-purple-500 hover:text-white">
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