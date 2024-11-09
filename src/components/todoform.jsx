function Todoform() {
  return (
    <div className="flex items-center gap-2 w-[500px]">
      <input
        className="w-full px-4 py-2 border rounded border-2 outline-none"
        type="text"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        +
      </button>{" "}
    </div>
  );
}

export default Todoform;
