const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 bg-background overflow-hidden">
      {/* Grid lines */}
      <div className="absolute inset-0 grid-background" />

      {/* Top Left Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          left: "-10%",
          width: "70%",
          height: "70%",
          filter: "blur(80px)",
          background:
            "radial-gradient(circle at top left, rgb(var(--color-primary) / 0.20) 0%, rgb(var(--color-primary) / 0.05) 40%, transparent 70%)",
        }}
      />

      {/* Bottom Right Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%",
          right: "-10%",
          width: "70%",
          height: "70%",
          filter: "blur(80px)",
          background:
            "radial-gradient(circle at bottom right, rgb(var(--color-accent) / 0.18) 0%, rgb(var(--color-accent) / 0.04) 40%, transparent 70%)",
        }}
      />

      {/* Soft Center Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "60%",
          filter: "blur(120px)",
          background:
            "radial-gradient(circle, rgb(var(--color-primary) / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Bottom Fade (prevents hard edge) */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background/90 via-background/40 to-transparent pointer-events-none" />

    </div>
  );
};

export default Background;

