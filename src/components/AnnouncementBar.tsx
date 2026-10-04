import { Construction } from "lucide-react";

const AnnouncementBar = () => {
  const message = "🚧 This site is currently under development  •  Some features may be incomplete  •  Thank you for your patience  •  ";

  return (
    <div className="bg-[#800020] overflow-hidden">
      <div className="flex whitespace-nowrap" style={{ animation: 'ticker 20s linear infinite' }}>
        <span className="text-primary-foreground text-sm py-2 px-4 flex items-center gap-1">
          <Construction className="h-3.5 w-3.5 inline" />
          {message}{message}{message}
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
