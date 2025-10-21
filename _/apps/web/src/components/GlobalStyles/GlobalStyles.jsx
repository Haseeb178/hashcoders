export function GlobalStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      
      html {
        scroll-behavior: smooth;
        font-family: 'Poppins', 'Inter', sans-serif;
      }
      
      .font-poppins {
        font-family: 'Poppins', 'Inter', sans-serif;
      }
      
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      body {
        background: linear-gradient(135deg, #0B1220 0%, #0D0D0D 50%, #0B1220 100%);
        min-height: 100vh;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #0B1220;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #00FFFF, #A3FF00);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #A3FF00, #A020F0);
      }
      
      @keyframes neonGlow {
        0%, 100% { 
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
          filter: hue-rotate(0deg);
        }
        33% { 
          box-shadow: 0 0 30px rgba(163, 255, 0, 0.4);
          filter: hue-rotate(120deg);
        }
        66% { 
          box-shadow: 0 0 25px rgba(160, 32, 240, 0.3);
          filter: hue-rotate(240deg);
        }
      }
      
      .animate-neon-glow {
        animation: neonGlow 3s ease-in-out infinite;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotateZ(0deg); }
        33% { transform: translateY(-15px) rotateZ(1deg); }
        66% { transform: translateY(-10px) rotateZ(-1deg); }
      }
      
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      
      @keyframes pulse-glow {
        0%, 100% { 
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
          transform: scale(1);
        }
        50% { 
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
          transform: scale(1.02);
        }
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite;
      }
    `}</style>
  );
}