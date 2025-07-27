import  { useState } from 'react';
import { ArrowRight, Send, Shield, Zap } from 'lucide-react';
import { AppBar } from './subcompoents/AppBar';

const LandingPage = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <AppBar isLandingPage="true"/>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-indigo-400 rounded-full opacity-10 blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 right-32 opacity-20 animate-bounce">
        <Send className="w-8 h-8 text-blue-300" />
      </div>
      <div className="absolute bottom-32 left-32 opacity-20 animate-bounce delay-500">
        <Shield className="w-10 h-10 text-indigo-300" />
      </div>
      <div className="absolute top-1/4 left-1/4 opacity-20 animate-bounce delay-1000">
        <Zap className="w-6 h-6 text-blue-200" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Logo/Brand */}
       

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Send Money
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Instantly
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto opacity-90">
            The fastest, secure way to send and receive money with friends and family
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm font-medium">Instant Transfers</span>
            </div>
     
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Send className="w-4 h-4 text-blue-400" />
              <span className="text-white text-sm font-medium">Zero Fees</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <button
            onMouseEnter={() => setHoveredButton('signup')}
            onMouseLeave={() => setHoveredButton(null)}
            className="group relative px-12 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 min-w-[200px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-2">
              Sign Up Free
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredButton === 'signup' ? 'translate-x-1' : ''}`} />
            </div>
          </button>

          <button
            onMouseEnter={() => setHoveredButton('signin')}
            onMouseLeave={() => setHoveredButton(null)}
            className="group relative px-12 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-2xl border-2 border-white/30 shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/50 min-w-[200px]"
          >
            <div className="relative flex items-center justify-center gap-2">
              Sign In
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredButton === 'signin' ? 'translate-x-1' : ''}`} />
            </div>
          </button>
        </div>

  
        
      </div>

      
    </div>
  );
};

export default LandingPage;