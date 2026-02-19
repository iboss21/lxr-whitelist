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
    <header className="fixed top-0 left-0 right-0 z-50 bg-wolves-darker/80 backdrop-blur-2xl border-b border-wolves-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-4xl">🐺</div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-wolves-gold via-yellow-400 to-wolves-gold bg-clip-text text-transparent">
                LXR Whitelist
              </h1>
              <p className="text-xs text-gray-500">
                wolves.land
              </p>
            </div>
          </div>
          
          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-wolves-gold transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-300 hover:text-wolves-gold transition-colors text-sm font-medium"
            >
              How It Works
            </a>
            <a 
              href="https://www.wolves.land" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-wolves-gold transition-colors text-sm font-medium"
            >
              wolves.land
            </a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://discord.gg/CrKcWdfd3A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-transparent border border-wolves-gold/30 hover:border-wolves-gold text-wolves-gold transition-all text-sm font-medium"
            >
              Discord
            </a>
            <a 
              href="https://github.com/iboss21/lxr-whitelist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-wolves-gold hover:bg-wolves-gold-light text-wolves-darker transition-all text-sm font-bold"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
