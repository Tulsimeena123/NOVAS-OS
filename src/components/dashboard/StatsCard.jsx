function StatsCard({ title, value, color }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm text-slate-400">{title}</p>

      <h2 className={`mt-3 text-4xl font-bold ${color}`}>
        {value}
      </h2>
      
    </div>
    
  );
}

export default StatsCard;