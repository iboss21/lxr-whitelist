/*
    ██╗     ██╗  ██╗██████╗        ██╗    ██╗██╗  ██╗██╗████████╗███████╗██╗     ██╗███████╗████████╗
    ██║     ╚██╗██╔╝██╔══██╗       ██║    ██║██║  ██║██║╚══██╔══╝██╔════╝██║     ██║██╔════╝╚══██╔══╝
    ██║      ╚███╔╝ ██████╔╝█████╗ ██║ █╗ ██║███████║██║   ██║   █████╗  ██║     ██║███████╗   ██║   
    ██║      ██╔██╗ ██╔══██╗╚════╝ ██║███╗██║██╔══██║██║   ██║   ██╔══╝  ██║     ██║╚════██║   ██║   
    ███████╗██╔╝ ██╗██║  ██║       ╚███╔███╔╝██║  ██║██║   ██║   ███████╗███████╗██║███████║   ██║   
    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝        ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝╚══════╝   ╚═╝   
                                                                                                       
    🐺 LXR Whitelist - Header Component
    
    Application header with wolves.land branding, navigation, and server information.
    
    © 2026 iBoss21 / The Lux Empire | wolves.land | All Rights Reserved
*/

export default function Header() {
  return (
    <header className="relative bg-wolves-dark/90 backdrop-blur-xl border-b border-wolves-accent/50 shadow-2xl">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-wolves-accent/5 via-transparent to-wolves-gold/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-4">
            <div className="text-5xl animate-pulse-3s">🐺</div>
            <div>
              <h1 className="western-title text-2xl md:text-3xl bg-gradient-to-r from-wolves-gold via-yellow-400 to-wolves-gold bg-clip-text text-transparent">
                Whitelist Evaluator
              </h1>
              <p className="text-gray-400 text-xs mt-1">
                The Land of Wolves | მგლების მიწა
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <a 
              href="https://www.wolves.land" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-wolves-gray/50 hover:bg-wolves-gray border border-wolves-border hover:border-wolves-gold text-wolves-gold hover:text-yellow-400 transition-all text-xs md:text-sm font-medium"
            >
              🌐 wolves.land
            </a>
            <a 
              href="https://discord.gg/CrKcWdfd3A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-wolves-gray/50 hover:bg-wolves-gray border border-wolves-border hover:border-wolves-gold text-wolves-gold hover:text-yellow-400 transition-all text-xs md:text-sm font-medium"
            >
              💬 Discord
            </a>
            <a 
              href="https://github.com/iboss21/lxr-whitelist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg bg-wolves-gray/50 hover:bg-wolves-gray border border-wolves-border hover:border-wolves-gold text-wolves-gold hover:text-yellow-400 transition-all text-xs md:text-sm font-medium hidden md:flex"
            >
              📦 GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
