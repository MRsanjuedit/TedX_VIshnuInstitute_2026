import logo from "../../assets/images/tedx_logo.webp";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm z-50">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <div className="absolute inset-0 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
        <img src={logo} alt="logo" className="w-10 h-10" />
      </div>
    </div>
  );
}
