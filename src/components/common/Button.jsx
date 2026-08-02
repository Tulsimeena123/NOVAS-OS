function Button({ children }) {
  return (
    <button
      className="
      inline-flex
      items-center
      justify-center
      min-w-[170px]
      rounded-xl
      bg-purple-600
      px-8
      py-3
      text-base
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:bg-purple-700
      hover:shadow-lg
      hover:shadow-purple-500/40
      "
    >
      {children}
    </button>
  );
}

export default Button;