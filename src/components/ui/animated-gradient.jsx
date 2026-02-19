/*
    🐺 LXR Whitelist - Animated Gradient Component
    
    21st.dev-style animated gradient mesh background for premium visuals.
    
    © 2026 iBoss21 / The Lux Empire | wolves.land | All Rights Reserved
*/

export function AnimatedGradient({ className = "" }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-wolves-accent/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-wolves-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-wolves-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b451308_1px,transparent_1px),linear-gradient(to_bottom,#8b451308_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    </div>
  );
}
