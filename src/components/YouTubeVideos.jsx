import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "YOUR_YOUTUBE_API_KEY"; // Replace with your YouTube API key
const CHANNEL_ID = "UC5CWaXF6Vk7_2v0k9F0TOZw"; // Replace with an agriculture-related channel ID
const MAX_RESULTS = 12; // Number of videos per request

const YoutubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchVideos = async (pageToken = "") => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            key: API_KEY,
            channelId: CHANNEL_ID,
            part: "snippet,id",
            order: "date",
            maxResults: MAX_RESULTS,
            q: "agriculture",
            pageToken: pageToken,
          },
        }
      );

      setVideos((prevVideos) => [...prevVideos, ...response.data.items]);
      setNextPageToken(response.data.nextPageToken);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🌱 Agriculture Videos</h2>

      {/* Grid Layout for Multiple Rows */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <div key={index} className="bg-white p-2 rounded-lg shadow-md">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full rounded-lg"
              />
            </a>
            <p className="mt-2 text-sm font-semibold">{video.snippet.title}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {nextPageToken && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => fetchVideos(nextPageToken)}
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More Videos"}
          </button>
        </div>
      )}
    </div>
  );
};

export default YoutubeVideos;
