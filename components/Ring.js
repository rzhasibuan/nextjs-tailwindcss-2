function Ring() {
  return (
    <div className="bg-white p-5 rounded-lg shadow flex justify-between">
      <button
        type="button"
        className="bg-warnaPink-400 px-5 py-2 text-white transform-all duration-300 hover:bg-warnaPink-500 hover:shadow-lg rounded-lg inline-flex focus:outline-none ring-2 ring-warnaPink-500"
      >
        Pink button
      </button>
      <button
        type="button"
        className="bg-blue-400 px-5 py-2 text-white transform-all duration-300 hover:bg-blue-500 hover:shadow-lg rounded-lg inline-flex focus:outline-none ring-2 ring-blue-500"
      >
        Blue button
      </button>
      <button
        type="button"
        className="bg-green-400 px-5 py-2 text-white transform-all duration-300 hover:bg-green-500 hover:shadow-lg rounded-lg inline-flex focus:outline-none ring-2 ring-green-500"
      >
        Green button
      </button>
    </div>
  );
}

export default Ring;
