import React, { useState } from "react";

const backgroundImage = {
  backgroundImage: "url('bg-image.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const UrlShortener = () => {
  const [url, setUrl] = useState("");

  const shortenTheUrl = () => {
    if (url.trim() === "") {
      alert("Please enter a valid URL.");
      return;
    }

    // Call the API to shorten the URL
    ulvisShortenApiCall(url)
      .then((data) => {
        // Handle the response from the API
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error(error);
      });
  };

  const ulvisShortenApiCall = (urlTobeShorten: string) => {
    // Make the API call to ulvis.net
    return new Promise((resolve, reject) => {
      fetch(`https://ulvis.net/api/v1/shorten`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: urlTobeShorten,
        }),
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
