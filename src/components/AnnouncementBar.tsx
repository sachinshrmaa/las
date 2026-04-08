const AnnouncementBar = () => {
  const message = "Admissions 2025–26 Are Open  •  Little Angel Senior Secondary School, Nandok  •  English Medium  •  Science Stream (PCM/PCB)  •  ";

  return (
    <div className="bg-primary overflow-hidden">
      <div className="flex whitespace-nowrap" style={{ animation: 'ticker 20s linear infinite' }}>
        <span className="text-primary-foreground text-sm py-2 px-4">{message}{message}{message}</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
