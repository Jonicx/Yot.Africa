interface ArtisticBackgroundProps {
  children: React.ReactNode;
}

export default function ArtisticBackground({ children }: ArtisticBackgroundProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Artistic blurred background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main glow blobs */}
        <div className="absolute -top-40 -left-40 w-[200px] md:w-[600px] md:h-[600px] h-[200px] bg-yot-red-glow/15 rounded-full blur-3xl animate-bounce" style={{animationDuration: "4s"}}/>
        <div className="absolute -top-20 right-0 w-[450px] h-[450px] bg-yot-red-glow/12 rounded-full blur-2xl animate-slow" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yot-red-glow/10 rounded-full blur-[120px] animate-pulse" />

        {/* Accent dots */}
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-yot-red-glow/18 rounded-full blur-2xl animate-slowest" />
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-yot-red-glow/12 rounded-full blur-xl animate-slow" />

        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yot-black/30 to-yot-black/60" />
      </div>

      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}