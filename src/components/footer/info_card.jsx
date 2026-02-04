import { Phone } from "lucide-react";

export default function InfoCard({
  icon: Icon = Phone,
  title = "Phone",
  value = "+91 8500401091",
  link = null,
}) {
  const content = (
    <div className="w-full bg-[#111] border border-gray-800 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:border-red-600 transition-all duration-300">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center
      bg-red-600"
      >
        <Icon className="text-white" size={22} />
      </div>

      <div className="flex flex-col">
        <span className="text-white text-lg font-medium">{title}</span>
        <span className="text-gray-400 text-md">{value}</span>
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return content;
}
