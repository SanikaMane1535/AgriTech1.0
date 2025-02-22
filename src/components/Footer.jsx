const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold">AgriTech Hub</p>
          <p className="text-gray-400 mt-1">
            Empowering agriculture with cutting-edge technology.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-green-400">About Us</a>
            <a href="#" className="hover:text-green-400">Contact</a>
            <a href="#" className="hover:text-green-400">Privacy Policy</a>
            <a href="#" className="hover:text-green-400">Terms of Service</a>
          </div>
          <p className="text-gray-500 mt-4 text-sm">
            &copy; {new Date().getFullYear()} AgriTech Hub. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
export default Footer;  