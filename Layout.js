import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black">
      <style>{`
        :root {
          --background: 0 0% 0%;
          --foreground: 0 0% 100%;
        }
        
        * {
          -webkit-tap-highlight-color: transparent;
        }
        
        body {
          background: black;
          overscroll-behavior: none;
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {children}
    </div>
  );
}
