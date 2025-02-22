import { useState, useEffect } from "react";
import { FaFilter, FaBookmark } from "react-icons/fa";

const API_KEYS = {
  youtube: "AIzaSyDNTU4asF25Nnen8ehx4arptQCXFrANLz8",
  vimeo: "12345678",
};

const SEARCH_QUERY = "agriculture technology";

const categories = ["All", "Articles", "Videos", "Tutorials", "External Videos"];
const tags = ["Crop Management", "Irrigation", "Pest Control", "Soil Health", "Sustainability"];

const ResourceLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopular, setShowPopular] = useState(false);
  const [resources, setResources] = useState([]);
  const [playingVideos, setPlayingVideos] = useState({}); // Track which video is playing

  // Fetch YouTube videos
  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${SEARCH_QUERY}&type=video&maxResults=3&key=${API_KEYS.youtube}`
        );
        const data = await res.json();
        const videos = data.items.map((video) => ({
          id: video.id.videoId,
          title: video.snippet.title,
          description: video.snippet.description,
          category: "External Videos",
          tags: ["YouTube"],
          videoType: "youtube",
          videoUrl: `https://www.youtube.com/embed/${video.id.videoId}`,
          thumbnail: video.snippet.thumbnails.high.url, // Load YouTube Thumbnail
        }));
        setResources((prev) => [...prev, ...videos]);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchYouTubeVideos();
  }, []);

  // Fetch Vimeo videos
  useEffect(() => {
    const fetchVimeoVideos = async () => {
      try {
        const res = await fetch(`https://api.vimeo.com/videos?query=${SEARCH_QUERY}&per_page=3`, {
          headers: {
            Authorization: `Bearer ${API_KEYS.vimeo}`,
          },
        });
        const data = await res.json();
        const videos = data.data.map((video) => ({
          id: video.uri.split("/").pop(),
          title: video.name,
          description: video.description || "Vimeo video on agriculture technology.",
          category: "External Videos",
          tags: ["Vimeo"],
          videoType: "vimeo",
          videoUrl: `https://player.vimeo.com/video/${video.uri.split("/").pop()}`,
          thumbnail: video.pictures.sizes[3]?.link || video.pictures.sizes[0]?.link, // Vimeo Thumbnail
        }));
        setResources((prev) => [...prev, ...videos]);
      } catch (error) {
        console.error("Error fetching Vimeo videos:", error);
      }
    };

    fetchVimeoVideos();
  }, []);

  const filteredResources = resources.filter(
    (resource) =>
      (selectedCategory === "All" || resource.category === selectedCategory) &&
      resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePlayVideo = (id) => {
    setPlayingVideos((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Resource Library</h1>

      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto mb-4">
        <input
          type="text"
          placeholder="Search resources..."
          className="w-full p-3 rounded-lg border shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
        <button
          className="relative flex items-center gap-2 bg-white p-2 rounded-lg shadow-md border"
          onClick={() => setShowPopular(!showPopular)}
        >
          <FaBookmark />
          Popular Resources
        </button>

        <button className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-md border">
          <FaFilter /> Filters
        </button>

        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Resource Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Click to Play Video Feature */}
            {resource.category === "External Videos" ? (
              <div
                className="relative cursor-pointer"
                onClick={() => handlePlayVideo(resource.id)}
              >
                {!playingVideos[resource.id] ? (
                  <>
                    <img
                      src={resource.thumbnail}
                      alt={resource.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <span className="text-white text-2xl font-bold">▶ Play</span>
                    </div>
                  </>
                ) : (
                  <iframe
                    width="100%"
                    height="200"
                    src={resource.videoUrl}
                    title={resource.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            ) : (
              <img src={resource.image} alt={resource.title} className="w-full h-40 object-cover" />
            )}

            <div className="p-4">
              <span className="px-3 py-1 text-xs bg-black text-white rounded-full">
                {resource.category}
              </span>
              <h3 className="text-lg font-bold mt-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm">{resource.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {resource.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-gray-200 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceLibrary;
