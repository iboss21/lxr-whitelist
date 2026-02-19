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
import { GlowingEffect } from './components/ui/glowing-effect';

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

  const scrollToEvaluator = () => {
    document.getElementById('evaluator-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-wolves-darker via-wolves-dark to-wolves-gray -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-wolves-accent/10 via-transparent to-transparent -z-10 animate-pulse-slow" />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="relative inline-block mb-8">
            <GlowingEffect
              spread={60}
              glow={true}
              disabled={false}
              proximity={100}
              borderWidth={2}
            />
            <h1 className="western-title text-5xl md:text-7xl mb-4 relative z-10 px-8 py-4">
              🐺 Whitelist Evaluator
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            AI-Powered Whitelist Evaluation System
          </p>
          <p className="text-lg text-wolves-gold mb-8">
            მგლების მიწა - რჩეულთა ადგილი!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={scrollToEvaluator}
              className="btn-wolves btn-primary text-lg px-8 py-4 shadow-lg shadow-wolves-accent/50 hover:shadow-xl hover:shadow-wolves-accent/70 transition-all"
            >
              🚀 დაიწყე შეფასება
            </button>
            <a
              href="https://discord.gg/CrKcWdfd3A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wolves btn-secondary text-lg px-8 py-4"
            >
              💬 შემოგვიერთდი Discord-ზე
            </a>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
            {[
              { icon: '🤖', title: 'AI Analytics', desc: 'Multi-provider AI support (OpenAI, Claude, Grok)' },
              { icon: '📊', title: '6-Category Scoring', desc: 'Comprehensive character analysis' },
              { icon: '⚡', title: 'Real-time Results', desc: 'Instant evaluation in < 3 seconds' }
            ].map((feature, i) => (
              <div key={i} className="relative group">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  borderWidth={1}
                />
                <div className="card-wolves backdrop-blur-xl bg-wolves-gray/80 hover:bg-wolves-gray/90 transition-all h-full">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-wolves-gold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Evaluator Section */}
      <main id="evaluator-section" className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-wolves-gold mb-2">📝 შეფასების სისტემა</h2>
          <p className="text-gray-400">ჩასვით თქვენი whitelist განაცხადი და მიიღეთ დეტალური ანალიზი</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Input */}
          <div className="space-y-6 relative">
            <GlowingEffect
              spread={50}
              glow={true}
              disabled={false}
              proximity={100}
              borderWidth={2}
            />
            <InputForm 
              onEvaluate={handleEvaluate}
              onClear={handleClear}
              isEvaluating={isEvaluating}
            />
          </div>
          
          {/* Right Column: Results */}
          <div className="space-y-6 relative">
            {evaluation && (
              <>
                <GlowingEffect
                  spread={50}
                  glow={true}
                  disabled={false}
                  proximity={100}
                  borderWidth={2}
                />
                <ResultsDisplay evaluation={evaluation} />
              </>
            )}
            
            {!evaluation && !isEvaluating && (
              <div className="relative">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  borderWidth={1}
                />
                <div className="card-wolves backdrop-blur-xl bg-wolves-gray/70 h-full min-h-[500px] flex items-center justify-center text-center text-gray-500">
                  <div>
                    <svg className="w-24 h-24 mx-auto mb-4 text-wolves-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-lg">შედეგები გამოჩნდება აქ</p>
                    <p className="text-sm mt-2">გთხოვთ ჩასვათ განაცხადი და დააჭიროთ შეფასების ღილაკს</p>
                  </div>
                </div>
              </div>
            )}
            
            {isEvaluating && (
              <div className="relative">
                <GlowingEffect
                  spread={60}
                  glow={true}
                  disabled={false}
                  proximity={100}
                  borderWidth={3}
                />
                <div className="card-wolves backdrop-blur-xl bg-wolves-gray/80 h-full min-h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative inline-block mb-4">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-wolves-accent"></div>
                      <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-2 border-wolves-gold opacity-20"></div>
                    </div>
                    <p className="text-lg font-bold text-wolves-accent">ვაფასებთ განაცხადს...</p>
                    <p className="text-sm text-gray-400 mt-2">AI ანალიზი მიმდინარეობს</p>
                  </div>
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
