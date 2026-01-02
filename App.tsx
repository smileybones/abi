import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';

const App: React.FC = () => {
  const width = window.innerWidth;
  // Optimized for all phones (< 600px) and tablets (600-1024px)
  const cameraZ = width < 600 ? 23 : width < 1024 ? 18 : 15;
  const cameraFov = width < 600 ? 58 : width < 1024 ? 50 : 35;
  
  const [isAtSteps, setIsAtSteps] = useState(false);
  const [isAtWhyABI, setIsAtWhyABI] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Find the drei scroll container
      let scrollContainer = document.querySelector('div[style*="overflow-y"]') as HTMLElement;
      
      if (!scrollContainer) {
        // Fallback: find all divs and look for one with scrollable content
        const allDivs = document.querySelectorAll('div');
        for (const div of allDivs) {
          const style = window.getComputedStyle(div);
          if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
            scrollContainer = div as HTMLElement;
            break;
          }
        }
      }
      
      if (!scrollContainer) return;
      
      const scrollPercent = scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight);
      // Steps are at pages 53-56 out of 58 (0.912 to 0.965)
      setIsAtSteps(scrollPercent >= 0.90 && scrollPercent <= 0.97);
      // Why ABI section is at pages 58 out of 58 (0.982 to 1.0)
      setIsAtWhyABI(scrollPercent >= 0.98);
    };
    
    // Use a small delay to ensure the scroll container is created
    const timeout = setTimeout(() => {
      let scrollContainer = document.querySelector('div[style*="overflow-y"]') as HTMLElement;
      
      if (!scrollContainer) {
        // Fallback: find all divs and look for one with scrollable content
        const allDivs = document.querySelectorAll('div');
        for (const div of allDivs) {
          const style = window.getComputedStyle(div);
          if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
            scrollContainer = div as HTMLElement;
            break;
          }
        }
      }
      
      if (scrollContainer) {
        console.log('Found scroll container:', scrollContainer);
        scrollContainer.addEventListener('scroll', handleScroll);
      }
    }, 500);
    
    return () => {
      clearTimeout(timeout);
      let scrollContainer = document.querySelector('div[style*="overflow-y"]') as HTMLElement;
      
      if (!scrollContainer) {
        const allDivs = document.querySelectorAll('div');
        for (const div of allDivs) {
          const style = window.getComputedStyle(div);
          if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
            scrollContainer = div as HTMLElement;
            break;
          }
        }
      }
      
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
  const scrollToSteps = () => {
    console.log('Button clicked - searching for scroll container...');
    
    // Try multiple selectors to find the scroll container
    let scrollContainer = document.querySelector('div[style*="overflow-y"]') as HTMLElement;
    
    if (!scrollContainer) {
      // Fallback: find all divs and look for one with scrollable content
      const allDivs = document.querySelectorAll('div');
      console.log('Total divs found:', allDivs.length);
      
      for (const div of allDivs) {
        const style = window.getComputedStyle(div);
        if ((style.overflowY === 'auto' || style.overflowY === 'scroll') && div.scrollHeight > div.clientHeight) {
          scrollContainer = div as HTMLElement;
          console.log('Found scrollable container:', div);
          break;
        }
      }
    }
    
    if (!scrollContainer) {
      console.log('Scroll container not found - trying window scroll');
      // Last resort: try window scroll
      const viewportHeight = window.innerHeight;
      const targetPage = 44;
      window.scrollTo({ top: targetPage * viewportHeight, behavior: 'smooth' });
      return;
    }
    
    console.log('Scrolling to steps', {
      scrollContainer,
      scrollHeight: scrollContainer.scrollHeight,
      clientHeight: scrollContainer.clientHeight,
      currentScrollTop: scrollContainer.scrollTop
    });
    
    // Step 1 ("What we do") is at page 53 out of 58 pages (52/57 = 0.912)
    const targetScroll = 0.912 * (scrollContainer.scrollHeight - scrollContainer.clientHeight);
    console.log('Target scroll position:', targetScroll);
    scrollContainer.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };
  
  const scrollToWhyABI = () => {
    console.log('Why ABI button clicked - searching for scroll container...');
    
    // Try multiple selectors to find the scroll container
    let scrollContainer = document.querySelector('div[style*="overflow-y"]') as HTMLElement;
    
    if (!scrollContainer) {
      // Fallback: find all divs and look for one with scrollable content
      const allDivs = document.querySelectorAll('div');
      for (const div of allDivs) {
        const style = window.getComputedStyle(div);
        if ((style.overflowY === 'auto' || style.overflowY === 'scroll') && div.scrollHeight > div.clientHeight) {
          scrollContainer = div as HTMLElement;
          console.log('Found scrollable container:', div);
          break;
        }
      }
    }
    
    if (!scrollContainer) {
      console.log('Scroll container not found - trying window scroll');
      // Last resort: try window scroll
      const viewportHeight = window.innerHeight;
      const targetPage = 48;
      window.scrollTo({ top: targetPage * viewportHeight, behavior: 'smooth' });
      return;
    }
    
    console.log('Scrolling to Why ABI', {
      scrollContainer,
      scrollHeight: scrollContainer.scrollHeight,
      clientHeight: scrollContainer.clientHeight,
      currentScrollTop: scrollContainer.scrollTop
    });
    
    // Why ABI section is at page 58 out of 58 pages (57/57 = 1.0, targeting 0.982)
    const targetScroll = 0.982 * (scrollContainer.scrollHeight - scrollContainer.clientHeight);
    console.log('Target scroll position:', targetScroll);
    scrollContainer.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };
  
  return (
    <div className="w-full h-screen bg-black relative">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, cameraZ], fov: cameraFov }}
        gl={{ antialias: true }}
      >
        <Experience />
      </Canvas>
      
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 pointer-events-auto flex gap-2 sm:gap-3">
        <button 
          onClick={scrollToSteps}
          className={`px-4 py-2 sm:px-6 backdrop-blur-md border rounded-full text-[9px] sm:text-[10px] text-white font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl ${
            isAtSteps 
              ? 'bg-cyan-400/30 border-cyan-400 shadow-cyan-400/50' 
              : 'bg-white/5 border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400'
          }`}
        >
          What we do
        </button>
        <button 
          onClick={scrollToWhyABI}
          className={`px-4 py-2 sm:px-6 backdrop-blur-md border rounded-full text-[9px] sm:text-[10px] text-white font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl ${
            isAtWhyABI 
              ? 'bg-cyan-400/30 border-cyan-400 shadow-cyan-400/50' 
              : 'bg-white/5 border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400'
          }`}
        >
          Why ABI
        </button>
        <button className="px-4 py-2 sm:px-6 bg-white/5 backdrop-blur-md border border-white/20 rounded-full text-[9px] sm:text-[10px] text-white font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all duration-500 hover:bg-blue-600/30 hover:border-blue-400 hover:scale-105 active:scale-95 shadow-2xl">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default App;