function Button({ children }) {
  return (
    <button
      className="
      rounded-xl
      bg-purple-600
      px-7
      py-3
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