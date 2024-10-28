// src/App.jsx
import { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

// Import your images
import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';

const App = () => {
  // Animation for text
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });

  const messageAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1200 },
    delay: 500,
  });

  const footerAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1200 },
    delay: 1000,
  });

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 1000 },
  });

  // Falling flowers effect
  useEffect(() => {
    const flowerCount = 10; // Number of flowers
    const container = document.querySelector('.falling-flowers');

    for (let i = 0; i < flowerCount; i++) {
      const flower = document.createElement('img');
      flower.src = 'https://static.vecteezy.com/system/resources/previews/018/842/695/non_2x/red-heart-shape-icon-like-or-love-symbol-for-valentine-s-day-3d-render-illustration-free-png.png'; // Replace with the path to your small flower image
      flower.style.position = 'absolute';
      flower.style.width = '30px'; // Adjust flower size
      flower.style.opacity = '0.8';
      flower.style.left = Math.random() * 100 + 'vw';
      flower.style.animation = `fall linear infinite ${Math.random() * 3 + 5}s`;
      container?.appendChild(flower);
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: '#ffe0e6',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        overflowY: 'auto',
        padding: '20px',
        position: 'relative',
      }}
    >
      {/* Falling flowers container */}
      <div
        className="falling-flowers"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      />

      {/* Romantic Title */}
      

      {/* Romantic message */}
      <animated.div style={messageAnimation}>
        <h1 style={{ color: '#d63384', margin: '0.5rem', fontSize: '2.5rem' }}>
          I love you, Simran! 💖
        </h1>
      </animated.div>

      {/* Romantic paragraph */}
      <animated.div 
  style={{ 
    ...messageAnimation, 
    maxWidth: '600px', 
    color: '#ff69b4', // Soft pink color
    fontSize: '1.2rem', 
    marginTop: '20px', 
    lineHeight: '1.5', 
    textAlign: 'center', // Center align for a more romantic feel
    fontFamily: '"Dancing Script", cursive' // Romantic font
  }}
>
  <p>OK JAAN MEKO LAGA YE SABSE ACHA TARIKA HOGA AAPKO EK CHIZ BATANE KA.</p>
  <p>I LOVE U YAAR VERY MUCH...SORRY KABHI KABHI ME PARESHAN JAB HOTA HUN TAB IRRITATE HOJATA HUN</p>
  <p>BUT ABB ME IRRITATE HUN TO HUN BHI KISKE SAMNE...MERI JAAN TO BUS AAP HI HO NA</p>
  <p>ME AAPSE BOHOT JYADA PYAAR KRTA HUN OR JANTA BHI HUN KI AAP BHI BOHOT JYADA KRTI HO </p>
  <p>JAAN APNE BABU SE PLEASE TAB MAT GUSSA HUA KRO JAB WO THODA LOW HOTA HAI</p>
  <p>I KNOW APKA HAKK HAI GUSSA KRNA...BUT MERII PYARRI BABU JAB ME LOW FEEL KRUN TAB PLEASE NA USS SAMAY MAT GUSSA KRNA</p>
  <p>Forever grateful for you, today and every day, my heart beats only for you my SIMMMU</p>
</animated.div>



      <animated.h1
        style={{
          ...titleAnimation,
          color: '#d63384',
          fontSize: '3.5rem',
          fontFamily: '"Dancing Script", cursive',
          marginBottom: '1rem',
        }}
      >
        Moments with You
      </animated.h1>

      {/* Image section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        marginTop: '40px',
      }}>
        {[pic1, pic2, pic3, pic4].map((url, index) => (
          <animated.div key={index} style={imageAnimation}>
            <img
              src={url}
              alt={`Memory ${index + 1}`}
              style={{
                width: '250px',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                transition: 'transform 0.2s',
              }}
            />
          </animated.div>
        ))}
      </div>

      {/* Footer text */}
      <animated.h2
        style={{
          ...footerAnimation,
          color: '#ff69b4',
          fontSize: '2.5rem',
          fontFamily: '"Dancing Script", cursive',
          marginTop: '50px',
        }}
      >
        I love you infinity ♾️
      </animated.h2>
      <animated.h2
        style={{
          ...footerAnimation,
          color: '#ff69b4',
          fontSize: '2.5rem',
          fontFamily: '"Dancing Script", cursive',
          marginTop: '50px',
        }}
      >
        TRUST ME..I LOVE U...I AM JUST TRYING MY BEST FOR U.
      </animated.h2>

      {/* Falling flower animation keyframes */}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-100px) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default App;
