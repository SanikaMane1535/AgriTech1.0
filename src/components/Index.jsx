import { useState } from "react";
import { Search, Plus } from "lucide-react";
import NewTechnology from "../components/NewTechnology"; // Ensure this is the correct path and casing

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [technologies, setTechnologies] = useState([
    { name: "AI in Farming", description: "Enhancing yield prediction with AI.", imageUrl: "https://images.unsplash.com/photo-1517022812141-23620dba5c23" },
    { name: "Smart Irrigation", description: "Automated water management systems.", imageUrl: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc" },
  ]);

  const addTechnology = (newTech) => {
    setTechnologies([...technologies, newTech]); // Add new tech to the list
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Advancing Agriculture Through Technology</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover the latest agricultural technologies and connect with a community of innovative farmers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search technologies..."
              className="border pl-10 pr-4 py-2 rounded-md w-72 focus:ring-2 focus:ring-green-400 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Explore Now</button>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-green-600">Featured Technologies</h2>
          <button
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Technology
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <img src={tech.imageUrl} alt={tech.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-bold mt-2">{tech.name}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Adding Technology */}
      {isModalOpen && <NewTechnology onClose={() => setIsModalOpen(false)} onSubmit={addTechnology} />}
    </div>
  );
};

export default Index;