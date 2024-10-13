/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const LoreOlympusLandingPage = () => {
  const [activeCharacter, setActiveCharacter] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const characters = [
    { name: 'Persephone', description: 'Goddess of Spring' },
    { name: 'Hades', description: 'God of the Underworld' },
    { name: 'Zeus', description: 'King of the Gods' },

  ];

  const supernaturalManhwas = [
    { title: 'Solo Leveling', image: '/api/placeholder/300/200' },
    { title: 'The Gamer', image: '/api/placeholder/300/200' },
    { title: 'Tower of God', image: '/api/placeholder/300/200' },
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % supernaturalManhwas.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-purple-100">

      <nav className="bg-purple-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lore Olympus</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-purple-300">Home</a></li>
            <li><a href="#" className="hover:text-purple-300">Characters</a></li>
            <li><a href="#" className="hover:text-purple-300">About</a></li>
          </ul>
        </div>
      </nav>


      <header className="bg-cover bg-center h-96 flex items-center" style={{backgroundImage: "url('/api/placeholder/1200/400')"}}>
        <div className="container mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-4 animate-fade-in">Lore Olympus</h2>
          <p className="text-2xl mb-8 animate-slide-up">Jaw Dropping Seen on Media</p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300">
            Read Now
          </button>
        </div>
      </header>

     
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Main Characters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {characters.map((character, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
                onMouseEnter={() => setActiveCharacter(index)}
                onMouseLeave={() => setActiveCharacter(null)}
              >
                <img src={`/api/placeholder/400/300`} alt={character.name} className="w-full h-64 object-cover" />
                <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${activeCharacter === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-white text-center">
                    <h4 className="text-2xl font-bold">{character.name}</h4>
                    <p>{character.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-purple-200">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Discover More Supernatural Manhwas</h3>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {supernaturalManhwas.map((manhwa, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img src={manhwa.image} alt={manhwa.title} className="w-full h-64 object-cover rounded-lg" />
                    <h4 className="text-xl font-bold mt-4 text-center">{manhwa.title}</h4>
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={() => setActiveSlide((prevSlide) => (prevSlide - 1 + supernaturalManhwas.length) % supernaturalManhwas.length)} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={() => setActiveSlide((prevSlide) => (prevSlide + 1) % supernaturalManhwas.length)} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

    
      <section className="py-16 bg-purple-800 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Dive Into Lore Olympus?</h3>
          <p className="text-xl mb-8">Experience the captivating world of gods and mortals!</p>
          <button className="bg-white text-purple-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-200 transition duration-300">
            Start Reading Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default LoreOlympusLandingPage;