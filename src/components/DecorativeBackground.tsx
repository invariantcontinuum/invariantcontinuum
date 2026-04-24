"use client";
export default function DecorativeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-[120px] animate-float-slow" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="geo" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="#06B6D4" strokeWidth="0.5"/><circle cx="0" cy="0" r="2" fill="#06B6D4"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#geo)" className="grid-scroll" />
      </svg>
      <svg className="absolute top-[20%] right-[10%] w-[200px] h-[200px] opacity-10 rotate-slow" viewBox="0 0 100 100">
        <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="#06B6D4" strokeWidth="1"/>
        <polygon points="50,20 80,50 50,80 20,50" fill="none" stroke="#06B6D4" strokeWidth="0.5"/>
      </svg>
    </div>
  );
}