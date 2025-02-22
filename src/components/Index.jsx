import { useState } from "react"
import { Search, Plus, ChevronDown } from "lucide-react"
import NewTechnology from "../components/NewTechnology" // Ensure this is the correct path and casing

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [technologies, setTechnologies] = useState([
    {
      name: "AI in Farming",
      description: "Enhancing yield prediction with AI.",
      imageUrl: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    },
    {
      name: "Smart Irrigation",
      description: "Automated water management systems.",
      imageUrl: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    },
    {
      name: "Drone Crop Monitoring",
      description: "Real-time aerial crop health assessment.",
      imageUrl: "https://images.unsplash.com/photo-1560493676-04071c5f467b",
    },
  ])

  const addTechnology = (newTech) => {
    setTechnologies([...technologies, newTech])
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-green-700 mb-6 animate-fade-in">
          Advancing Agriculture Through Technology
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-10 animate-fade-in-delay">
          Discover the latest agricultural technologies and connect with a community of innovative farmers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search technologies..."
              className="border pl-10 pr-4 py-3 rounded-full w-full sm:w-80 focus:ring-2 focus:ring-green-400 outline-none shadow-md transition-all duration-300 ease-in-out"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-300 ease-in-out shadow-md w-full sm:w-auto">
            Explore Now
          </button>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-green-700">Featured Technologies</h2>
          <button
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 ease-in-out shadow-md"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Technology
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={tech.imageUrl || "/placeholder.svg"}
                alt={tech.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-green-700">{tech.name}</h3>
              <p className="text-gray-600">{tech.description}</p>
              <button className="mt-4 text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors duration-300 ease-in-out">
                Learn More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Adding Technology */}
      {isModalOpen && <NewTechnology onClose={() => setIsModalOpen(false)} onSubmit={addTechnology} />}
    </div>
  )
}

export default Index

