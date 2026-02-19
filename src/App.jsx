/*
    ██╗     ██╗  ██╗██████╗        ██╗    ██╗██╗  ██╗██╗████████╗███████╗██╗     ██╗███████╗████████╗
    ██║     ╚██╗██╔╝██╔══██╗       ██║    ██║██║  ██║██║╚══██╔══╝██╔════╝██║     ██║██╔════╝╚══██╔══╝
    ██║      ╚███╔╝ ██████╔╝█████╗ ██║ █╗ ██║███████║██║   ██║   █████╗  ██║     ██║███████╗   ██║   
    ██║      ██╔██╗ ██╔══██╗╚════╝ ██║███╗██║██╔══██║██║   ██║   ██╔══╝  ██║     ██║╚════██║   ██║   
    ███████╗██╔╝ ██╗██║  ██║       ╚███╔███╔╝██║  ██║██║   ██║   ███████╗███████╗██║███████║   ██║   
    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝        ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝╚══════╝   ╚═╝   
                                                                                                       
    🐺 LXR Whitelist - Main Application Component
    
    Main React application component managing whitelist evaluation workflow.
    Coordinates input form, evaluation engine, and results display.
    
    © 2026 iBoss21 / The Lux Empire | wolves.land | All Rights Reserved
*/

import { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ResultsDisplay from './components/ResultsDisplay';
import Footer from './components/Footer';
import { evaluateWhitelist } from './utils/evaluator';

function App() {
  const [evaluation, setEvaluation] = useState(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleEvaluate = (text) => {
    setIsEvaluating(true);
    
    // Simulate processing time for better UX
    setTimeout(() => {
      const result = evaluateWhitelist(text);
      setEvaluation(result);
      setIsEvaluating(false);
    }, 1500);
  };

  const handleClear = () => {
    setEvaluation(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Input */}
          <div className="space-y-6">
            <InputForm 
              onEvaluate={handleEvaluate}
              onClear={handleClear}
              isEvaluating={isEvaluating}
            />
          </div>
          
          {/* Right Column: Results */}
          <div className="space-y-6">
            {evaluation && (
              <ResultsDisplay evaluation={evaluation} />
            )}
            
            {!evaluation && !isEvaluating && (
              <div className="card-wolves h-full flex items-center justify-center text-center text-gray-500">
                <div>
                  <svg className="w-24 h-24 mx-auto mb-4 text-wolves-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-lg">შედეგები გამოჩნდება აქ</p>
                  <p className="text-sm mt-2">გთხოვთ ჩასვათ განაცხადი და დააჭიროთ შეფასების ღილაკს</p>
                </div>
              </div>
            )}
            
            {isEvaluating && (
              <div className="card-wolves h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-wolves-accent mx-auto mb-4"></div>
                  <p className="text-lg font-bold text-wolves-accent">ვაფასებთ განაცხადს...</p>
                  <p className="text-sm text-gray-400 mt-2">გთხოვთ მოითმინოთ</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
