import React from 'react';
import './Hero.css';
import { StarIcon } from './Icons';
import GradientText from './splComp/GradientText';

export default function Hero({ onNavigate }) {
  return (
    <div className="heroContainer" style={{ position: 'relative', width: '100%', overflow: 'hidden', backgroundColor: '#000' }}>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden'
      }}>

        <video
          src="/video123.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-fill md:object-cover"
          style={{
            opacity: 0.4,
            mixBlendMode: 'screen'
          }}
        />

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.95) 100%)',
          pointerEvents: 'none'
        }}></div>
      </div>

      <div style={{ width: '100%', position: 'relative', zIndex: 10 }}>
        <section className="heroSection" style={{ position: 'relative', zIndex: 10 }}>
          <div className="heroContent"
            style={{ position: 'relative', paddingTop: '120px' }} >

            <GradientText
              colors={["#ffcc00", "#7cfee4", "#a38000"]}
              animationSpeed={100}
              showBorder={false}
              className="custom-class text-4xl md:text-6xl lg:text-6xl font-Arial font-bold weight-100 mb-2 text-center mt-36"
            >
              More Qualified Leads.
            </GradientText>
            <GradientText
              colors={["#ffcc00", "#7cfee4", "#a38000"]}
              animationSpeed={100}
              showBorder={false}
              className="custom-class text-3xl md:text-5xl lg:text-5xl font-Arial italic leading-tight font-bold mb-10 lg:mb-16 text-center pr-4"
            >
              More Sales.
            </GradientText>

            <p className="subtitle italic">
              Growth infrastructure for modern businesses.
            </p>
            <div>

              <button
                type="submit"
                onClick={() => onNavigate && onNavigate('contact')}
                class="flex justify-center before:hover:backdrop-blur-sm bg-gray-500/10 gap-2 items-center mx-auto shadow-xl text-white text-lg bg-backdrop-blur-md lg:font-semibold isolation-auto 
                border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full
                 before:hover:left-0 before:rounded-full before:bg hover:text-yellow-400 before:-z-10 before:aspect-square
                before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-yellow-400 rounded-full group"
              >
                Get Started
                <svg
                  class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-yellow-400 text-white ease-linear duration-300 rounded-full border border-yellow-400 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    class="fill-white group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
