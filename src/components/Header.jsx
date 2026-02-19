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
    <header className="bg-wolves-dark border-b-2 border-wolves-accent shadow-xl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-4">
            <div className="text-5xl">🐺</div>
            <div>
              <h1 className="western-title text-3xl md:text-4xl">
                Whitelist Evaluator
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                The Land of Wolves | მგლების მიწა
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.wolves.land" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-wolves-gold hover:text-yellow-400 transition-colors text-sm"
            >
              🌐 wolves.land
            </a>
            <a 
              href="https://discord.gg/CrKcWdfd3A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-wolves-gold hover:text-yellow-400 transition-colors text-sm"
            >
              💬 Discord
            </a>
            <a 
              href="https://github.com/iboss21/lxr-whitelist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-wolves-gold hover:text-yellow-400 transition-colors text-sm"
            >
              📦 GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-wolves-gray rounded-lg border border-wolves-border">
          <p className="text-sm text-gray-300">
            <strong className="text-wolves-gold">📋 სისტემა:</strong> ავტომატური Whitelist-ის შეფასება Georgian RP სერვერისთვის
          </p>
          <p className="text-xs text-gray-500 mt-2">
            მინიმალური ქულა მისაღებად: <span className="text-wolves-gold font-bold">8.0/10</span>
          </p>
        </div>
      </div>
    </header>
  );
}
