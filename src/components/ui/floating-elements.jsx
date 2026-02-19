/*
    🐺 LXR Whitelist - Floating Elements Component
    
    21st.dev-style floating animated elements for visual interest.
    
    © 2026 iBoss21 / The Lux Empire | wolves.land | All Rights Reserved
*/

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-wolves-gold rounded-full animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }} />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-wolves-gold/50 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '10s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-wolves-accent/30 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '12s' }} />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-wolves-gold/20 rounded-full animate-float" style={{ animationDelay: '3s', animationDuration: '9s' }} />
    </div>
  );
}
