import { useState } from "react";
import { setUrlShortenerList } from "../features/urlShortenerSlice";
import { useDispatch } from "react-redux";

type UrlShortenResponse = {
  result_url: string;
};

const backgroundImage = {
  backgroundImage: "url('bg-image.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const shortenTheUrl = () => {
    if (url.trim() === "") {
      alert("Please enter a valid URL.");
      return;
    }

    // Call the API to shorten the URL
    shortenApiCall(url)
      .then((data) => {
        // Handle the response from the API
        console.log(data);
        const response = data as UrlShortenResponse;
        dispatch(setUrlShortenerList(response.result_url));
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error(error);
      });
  };

  const shortenApiCall = (urlToBeShorten: string) => {
    return new Promise((resolve, reject) => {
      fetch(`https://cleanuri.com/api/v1/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ url: urlToBeShorten }),
      })
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

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
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
          onClick={() => shortenTheUrl()}
        >
          Shorten It
        </button>
      </div>
    </div>
  );
};

export default UrlShortener;
