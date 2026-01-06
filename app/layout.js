import './globals.css';

export const metadata = {
  title: 'YUNOW',
  description: 'City-style forum',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white no-scrollbar">
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
      </body>
    </html>
  );
}
