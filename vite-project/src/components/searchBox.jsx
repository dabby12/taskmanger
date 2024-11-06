const SearchBox = ({ onSearch }) => {
  return (
    <div className="mb-6"> {/* Add margin-bottom to the container */}
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => onSearch(e.target.value)}
        className="border w-full p-2 rounded"
      />
    </div>
  );
};

export default SearchBox;
