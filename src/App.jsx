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
import { AnimatedGradient } from './components/ui/animated-gradient';
import { FloatingElements } from './components/ui/floating-elements';
import { ScrollReveal } from './components/ui/scroll-reveal';

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
      <AnimatedGradient className="-z-10" />
      
      <Header />
      
      {/* Hero Section - Apple Style */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-32">
        <FloatingElements />
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          {/* Main Hero Content */}
          <div className="mb-16 space-y-8">
            <div className="relative inline-block">
              <GlowingEffect
                spread={80}
                glow={true}
                disabled={false}
                proximity={120}
                borderWidth={3}
              />
              <h1 className="western-title text-6xl md:text-8xl lg:text-9xl mb-0 relative z-10 px-12 py-6 leading-tight">
                Whitelist
                <br />
                <span className="bg-gradient-to-r from-wolves-gold via-yellow-400 to-wolves-gold-light bg-clip-text text-transparent">
                  Evaluator
                </span>
              </h1>
            </div>
            
            <p className="text-2xl md:text-4xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed">
              The most advanced AI-powered whitelist evaluation system for Georgian RP servers
            </p>
            
            <p className="text-xl md:text-2xl text-wolves-gold font-georgian">
              მგლების მიწა - რჩეულთა ადგილი!
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <button
              onClick={scrollToEvaluator}
              className="group relative px-12 py-5 bg-wolves-accent hover:bg-wolves-accent/90 text-white text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-wolves-accent/50 hover:shadow-wolves-accent/70"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-wolves-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <a
              href="https://discord.gg/CrKcWdfd3A"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-transparent border-2 border-wolves-gold text-wolves-gold hover:bg-wolves-gold hover:text-wolves-darker text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Join Discord
            </a>
          </div>
          
          {/* Stats Section - Airbnb Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '10K+', label: 'Evaluations' },
              { value: '98%', label: 'Accuracy' },
              { value: '<3s', label: 'Speed' },
              { value: '24/7', label: 'Available' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-wolves-gold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-wolves-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Scroll down">
            <title>Scroll down for more</title>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* Features Section - Nike Style Bold */}
      <section id="features" className="relative py-32 px-4 bg-gradient-to-b from-transparent to-wolves-darker/50">
        <div className="container mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Powered by <span className="text-wolves-gold">AI Excellence</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Three powerful features that revolutionize whitelist evaluation
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: '🤖', 
                title: 'AI Analytics', 
                desc: 'Multi-provider AI support with OpenAI GPT-4, Claude 3.5 Sonnet, and xAI Grok',
                highlight: 'Smart' 
              },
              { 
                icon: '📊', 
                title: '6-Category Scoring', 
                desc: 'Comprehensive character analysis across Lore, Depth, Motivation, Sustainability, Risk, and Structure',
                highlight: 'Detailed' 
              },
              { 
                icon: '⚡', 
                title: 'Real-time Results', 
                desc: 'Instant evaluation in under 3 seconds with detailed feedback and recommendations',
                highlight: 'Fast' 
              }
            ].map((feature, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className="relative group">
                  <GlowingEffect
                    spread={50}
                    glow={true}
                    disabled={false}
                    proximity={100}
                    borderWidth={2}
                  />
                  <div className="card-wolves backdrop-blur-xl bg-wolves-gray/80 hover:bg-wolves-gray/95 transition-all duration-500 h-full p-10 transform group-hover:scale-105">
                    <div className="text-7xl mb-6">{feature.icon}</div>
                    <div className="text-sm text-wolves-gold uppercase tracking-wider font-bold mb-3">{feature.highlight}</div>
                    <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Simple. <span className="text-wolves-gold">Powerful. </span>Fast.
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Three steps to evaluate your whitelist application
              </p>
            </div>
          </ScrollReveal>
          
          <div className="space-y-16">
            {[
              { 
                number: '01', 
                title: 'Submit Your Application', 
                desc: 'Paste your complete whitelist application including all required fields and character details.' 
              },
              { 
                number: '02', 
                title: 'AI Analysis', 
                desc: 'Our advanced AI evaluates your application across 6 categories with real-time feedback.' 
              },
              { 
                number: '03', 
                title: 'Get Results', 
                desc: 'Receive instant detailed results with scores, recommendations, and improvement suggestions.' 
              }
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="text-8xl font-bold text-wolves-gold/20">{step.number}</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-wolves-gold/10 border-2 border-wolves-gold flex items-center justify-center">
                        <span className="text-3xl font-bold text-wolves-gold">{i + 1}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-xl text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Evaluator Section - Professional Design */}
      <section id="evaluator-section" className="relative py-32 px-4 bg-gradient-to-b from-wolves-darker/50 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Start Your <span className="text-wolves-gold">Evaluation</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              ჩასვით თქვენი whitelist განაცხადი და მიიღეთ დეტალური AI-გენერირებული ანალიზი
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Input */}
            <div className="space-y-6 relative">
              <GlowingEffect
                spread={60}
                glow={true}
                disabled={false}
                proximity={120}
                borderWidth={3}
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
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={120}
                    borderWidth={3}
                  />
                  <ResultsDisplay evaluation={evaluation} />
                </>
              )}
              
              {!evaluation && !isEvaluating && (
                <div className="relative">
                  <GlowingEffect
                    spread={50}
                    glow={true}
                    disabled={false}
                    proximity={100}
                    borderWidth={2}
                  />
                  <div className="card-wolves backdrop-blur-xl bg-wolves-gray/70 h-full min-h-[600px] flex items-center justify-center text-center">
                    <div className="p-8">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-wolves-gold/10 flex items-center justify-center">
                        <svg className="w-16 h-16 text-wolves-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Ready for Evaluation</h3>
                      <p className="text-gray-400 text-lg">შედეგები გამოჩნდება აქ</p>
                      <p className="text-sm text-gray-500 mt-2">გთხოვთ ჩასვათ განაცხადი და დააჭიროთ შეფასების ღილაკს</p>
                    </div>
                  </div>
                </div>
              )}
              
              {isEvaluating && (
                <div className="relative">
                  <GlowingEffect
                    spread={70}
                    glow={true}
                    disabled={false}
                    proximity={120}
                    borderWidth={4}
                  />
                  <div className="card-wolves backdrop-blur-xl bg-wolves-gray/90 h-full min-h-[600px] flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="relative inline-block mb-8">
                        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-wolves-accent"></div>
                        <div className="absolute inset-0 animate-ping rounded-full h-24 w-24 border-4 border-wolves-gold opacity-20"></div>
                      </div>
                      <h3 className="text-3xl font-bold text-wolves-gold mb-4">Analyzing Application</h3>
                      <p className="text-xl text-white mb-2">AI ანალიზი მიმდინარეობს...</p>
                      <p className="text-gray-400">This may take a few seconds</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Badges Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h3 className="text-2xl font-bold text-gray-400 mb-12 uppercase tracking-wider">
            Trusted by the Community
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '🔒', label: 'Secure' },
              { icon: '⚡', label: 'Fast' },
              { icon: '🎯', label: 'Accurate' },
              { icon: '🌟', label: 'Reliable' }
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="text-5xl">{badge.icon}</div>
                <div className="text-lg font-semibold text-wolves-gold">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
