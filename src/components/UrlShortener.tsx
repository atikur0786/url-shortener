const backgroundImage = {
  backgroundImage: "url('bg-image.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const UrlShortener = () => {
  return (
    <div
      className="max-w-[80%] min-h-[200px] flex justify-center items-center shadow-lg rounded-lg mx-auto"
      style={backgroundImage}
    >
      <div className="flex bg-white p-8 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Enter a URL"
          className="w-[800px] border-0 rounded-lg p-2 mr-2 bg-slate-200"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Shorten It
        </button>
      </div>
    </div>
  );
};

export default UrlShortener;
