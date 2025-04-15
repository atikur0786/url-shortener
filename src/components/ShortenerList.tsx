import { Copy, FileCheck2 } from "lucide-react";
import { useState } from "react";
import { useAppSelector } from "../hooks/redux";

const ShortenerList = () => {
  const [displayTickIcon, setDisplayTickIcon] = useState(false);
  const [copied, setCopied] = useState("");

  // Use the typed selector
  const shortenedUrls = useAppSelector((state) => state.url.urlShortenerList);

  const copyToClipBoard = (url: string) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("Copied to clipboard: ", url);
        setCopied(url);
        setDisplayTickIcon(true);
        setTimeout(() => {
          setDisplayTickIcon(false);
        }, 2000); // Hide the tick icon after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="w-full flex flex-col items-center mt-16">
      <h1 className="text-4xl font-bold">Shortened Links</h1>
      <div className="w-full flex flex-col items-center mt-4">
        <div className="w-[80%] bg-white shadow-lg rounded-lg p-4">
          {shortenedUrls.length === 0 ? (
            <p className="text-gray-500 text-center">No shortened links yet.</p>
          ) : (
            <table className="min-w-full table-auto bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                <tr>
                  <th className="px-6 py-3 text-left">Original URL</th>
                  <th className="px-6 py-3 text-left">Shortened URL</th>
                  <th className="px-6 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-800 text-sm divide-y divide-gray-200">
                {shortenedUrls.map((url, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 break-words max-w-xs">
                      {url.originalUrl}
                    </td>
                    <td className="px-6 py-4 text-blue-500 hover:underline">
                      <a
                        href={url.shortenedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {url.shortenedUrl}
                      </a>
                    </td>
                    <td className="px-6 py-4 flex justify-center items-center">
                      <div className="w-fit bg-gray-100 rounded-lg p-2 cursor-pointer hover:bg-gray-200">
                        <Copy
                          onClick={() => copyToClipBoard(url.shortenedUrl)}
                        />
                      </div>
                      {displayTickIcon && copied === url.shortenedUrl && (
                        <div className="w-fit bg-white rounded-lg p-2 ml-2">
                          <FileCheck2 color="green" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortenerList;
