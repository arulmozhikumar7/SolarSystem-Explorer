// SolarSystem.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { useState } from 'react';


function Model(props) {
  const { scene } = useGLTF(props.modelPath);
  return <primitive object={scene} {...props} />;
}

const PlanetSection = ({ id, title, facts, additionalFacts, modelPath, isLastPlanet }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div id={id} className='flex flex-col md:flex-row items-center md:items-start h-screen bg-custom'>
        <div className='md:w-1/2 sm:mb-[100px] md:mb-0 md:h-[80vh]'>
          <Canvas dpr={[1, 2]} shadows camera={{ fov: 75 }}  className="sm:h-[10vh] relative h-[80vh]">
            <color attach="background" args={["#030005"]} />
            <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
              <Stage environment={"sunset"}>
                <Model scale={0.01} modelPath={modelPath} />
              </Stage>
            </PresentationControls>
          </Canvas>
        </div>
        <div className='md:w-1/2 text-white p-4 flex flex-col items-center justify-center md:mt-[-30px] sm:mb-[150px] sm:h-screen'>
          <h2 className="font-orbitron text-3xl mb-4">{title} </h2>
          <ul className="text-center">
            {facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
          <button onClick={openModal} className="mt-4 text-teal-500 underline cursor-pointer text-sm md:text-base">
            Read More
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-black opacity-75"></div>
              <div className="bg-white p-8 rounded-md z-10">
              
                <h2 className="text-2xl font-bold mb-4 text-black">{title} Details</h2>
                <p className="text-gray-700">
                {additionalFacts}
                </p>
                <button onClick={closeModal} className="mt-4 text-teal-500 underline cursor-pointer">
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

const SolarSystem = () => {
  
  const planetsData = [
    {
      id: "mercury",
      title: "Mercury",
      facts: [
        "☀️ Closest planet to the Sun.",
        "🪨 Small, rocky planet.",
        "🌡️ Thin atmosphere, extreme temperatures.",
        "🌞 Daytime: Up to 430°C, Nighttime: -180°C.",
        "🔄 Slow rotation, orbital period: 88 days.",
        "🌑 No natural moons.",
        "🏛️ Named after the Roman messenger god."
      ],
      additionalFacts: [
        <React.Fragment key="1">
        <p><strong>Surface Features:</strong></p>
        <ul>
          <li>Mercury has a heavily cratered and scarred surface.</li>
          <li>It lacks significant atmosphere and weather, so impacts from meteoroids and comets directly affect its surface.</li>
        </ul>
      </React.Fragment>,
    
      <React.Fragment key="2">
        <p><strong>Extreme Temperatures:</strong></p>
        <ul>
          <li>Daytime temperatures on Mercury can reach up to 430°C (800°F).</li>
          <li>Nighttime temperatures drop drastically to as low as -180°C (-290°F).</li>
        </ul>
      </React.Fragment>,
    
      <React.Fragment key="3">
        <p><strong>Orbital Characteristics:</strong></p>
        <ul>
          <li>Mercury has a slow rotation, completing one rotation every 59 Earth days.</li>
          <li>Its orbital period around the Sun is approximately 88 Earth days.</li>
        </ul>
      </React.Fragment>,
    
      <React.Fragment key="4">
        <p><strong>Absence of Moons:</strong></p>
        <p>Mercury does not have any natural moons.</p>
      </React.Fragment>,
    
      <React.Fragment key="5">
        <p><strong>Named After the Messenger God:</strong></p>
        <p>Mercury is named after the Roman messenger god, known for his speed and agility.</p>
      </React.Fragment>,

<a href="https://en.wikipedia.org/wiki/Mercury_(planet)" target="_blank" rel="noopener noreferrer" className='text-teal-500'>To know Further Click Here.</a>
      ],
      modelPath: "assets/Mercury.glb"
    },
    {
      id: "venus",
      title: "Venus",
      facts: [
        "☀️ Second planet from the Sun.",
        "🌍 Similar in size and composition to Earth.",
        "🌫️ Thick, toxic atmosphere mainly composed of carbon dioxide.",
        "🔥 Surface temperatures can reach up to 467°C.",
        "⏪ Rotation is slow and retrograde.",
        "🌕 No natural moons."
      ],
      additionalFacts: [
        <React.Fragment key="1">
        <p><strong>Atmospheric Composition:</strong></p>
        <ul>
          <li>Venus has a thick, toxic atmosphere mainly composed of carbon dioxide.</li>
          <li>The surface pressure on Venus is about 92 times that of Earth's.</li>
        </ul>
      </React.Fragment>,
    
      <React.Fragment key="2">
        <p><strong>Extreme Surface Conditions:</strong></p>
        <ul>
          <li>Surface temperatures on Venus can reach up to 467°C (872°F).</li>
          <li>Venus experiences a runaway greenhouse effect due to its dense atmosphere.</li>
        </ul>
      </React.Fragment>,
    
      <React.Fragment key="3">
        <p><strong>Rotation and Retrograde Motion:</strong></p>
        <ul>
          <li>Venus has a slow rotation, taking about 243 Earth days to complete one rotation on its axis.</li>
          <li>It rotates in the opposite direction (retrograde motion) compared to most planets in the solar system.</li>
        </ul>
      </React.Fragment>,
    
      <React.Fragment key="4">
        <p><strong>Absence of Moons:</strong></p>
        <p>Venus does not have any natural moons.</p>
      </React.Fragment>,
     <a href="https://en.wikipedia.org/wiki/Venus" target="_blank" rel="noopener noreferrer" className='text-teal-500'>To know Further Click Here.</a>
      ],
      modelPath: "assets/Venus.glb"
    },
    {
      id: "earth",
      title: "Earth",
      facts: [
        "☀️ Third planet from the Sun.",
        "🌿 Home to diverse ecosystems and life forms.",
        "💧 Moderate climate suitable for liquid water.",
        "🌱 Only known celestial body with confirmed life.",
        "🌕 One natural moon: The Moon."
      ],
      additionalFacts: [
        <React.Fragment key="1">
        <p><strong>Diverse Ecosystems:</strong></p>
        <p>Earth is home to diverse ecosystems and a wide variety of life forms.</p>
      </React.Fragment>,
    
      <React.Fragment key="2">
        <p><strong>Moderate Climate:</strong></p>
        <ul>
          <li>Earth has a moderate climate suitable for liquid water.</li>
          <li>This allows for the existence of oceans, lakes, and rivers.</li>
        </ul>
      </React.Fragment>,
    
      <React.Fragment key="3">
        <p><strong>Confirmed Life:</strong></p>
        <p>Earth is the only known celestial body with confirmed life.</p>
      </React.Fragment>,
    
      <React.Fragment key="4">
        <p><strong>Natural Moon:</strong></p>
        <p>Earth has one natural moon known as "The Moon."</p>
      </React.Fragment>,
    <a href="https://en.wikipedia.org/wiki/Earth" target="_blank" rel="noopener noreferrer" className='text-teal-500'>To know Further Click Here.</a>
      ],
      modelPath: "assets/Earth.glb"
    },
    {
      id: "mars",
      title: "Mars",
      facts: [
        "☀️ Fourth planet from the Sun.",
        "🔴 Often called the 'Red Planet' due to iron oxide on its surface.",
        "🌬️ Thin atmosphere, cold temperatures.",
        "💦 Evidence suggests water existed on its surface in the past.",
        "🌑 Two small natural moons: Phobos and Deimos."
      ],
      additionalFacts: [
        <React.Fragment key="1">
        <p><strong>Red Planet:</strong></p>
        <p>Mars is often called the 'Red Planet' due to iron oxide on its surface.</p>
      </React.Fragment>,
    
      <React.Fragment key="2">
        <p><strong>Thin Atmosphere:</strong></p>
        <ul>
          <li>Mars has a thin atmosphere compared to Earth.</li>
          <li>The atmosphere is mostly composed of carbon dioxide.</li>
        </ul>
      </React.Fragment>,
    
      <React.Fragment key="3">
        <p><strong>Cold Temperatures:</strong></p>
        <p>Mars experiences cold temperatures on its surface.</p>
      </React.Fragment>,
    
      <React.Fragment key="4">
        <p><strong>Water Evidence:</strong></p>
        <p>Evidence suggests that water existed on Mars' surface in the past.</p>
      </React.Fragment>,
    
      <React.Fragment key="5">
        <p><strong>Natural Moons:</strong></p>
        <ul>
          <li>Mars has two small natural moons named Phobos and Deimos.</li>
        </ul>
      </React.Fragment>,
    <a href="https://en.wikipedia.org/wiki/Mars" target="_blank" rel="noopener noreferrer" className='text-teal-500'>To know Further Click Here.</a>  
      ],
      modelPath: "assets/Mars.glb"
    },
    {
      id: "jupiter",
      title: "Jupiter",
      facts: [
        "☀️ Fifth planet from the Sun, largest in our solar system.",
        "🌌 Primarily composed of hydrogen and helium.",
        "🎈 Strong magnetic field and numerous moons.",
        "🌪️ Great Red Spot, a massive storm, is a prominent feature."
      ],
      additionalFacts: [
        <React.Fragment key="1">
    <p><strong>Largest Planet:</strong></p>
    <p>Jupiter is the fifth planet from the Sun and is the largest planet in our solar system.</p>
  </React.Fragment>,

  <React.Fragment key="2">
    <p><strong>Composition:</strong></p>
    <ul>
      <li>Jupiter is primarily composed of hydrogen and helium.</li>
    </ul>
  </React.Fragment>,

  <React.Fragment key="3">
    <p><strong>Magnetic Field and Moons:</strong></p>
    <ul>
      <li>Jupiter has a strong magnetic field and numerous moons.</li>
    </ul>
  </React.Fragment>,

  <React.Fragment key="4">
    <p><strong>Great Red Spot:</strong></p>
    <p>The Great Red Spot is a massive storm on Jupiter and is a prominent feature of the planet.</p>
  </React.Fragment>,
  <a href="https://en.wikipedia.org/wiki/Jupiter" target="_blank" rel="noopener noreferrer" className='text-teal-500'>To know Further Click Here.</a>  
      ],
      modelPath: "assets/Jupiter.glb"
    },
    {
      id: "saturn",
      title: "Saturn",
      facts: [
        "☀️ Sixth planet from the Sun, known for its rings.",
        "🪐 Distinctive ring system made of ice particles and debris.",
        "🧊 Similar composition to Jupiter, mostly hydrogen and helium.",
        "🌕 Multiple moons, including Titan, the second-largest moon in the solar system."
      ],
      additionalFacts: [
        <React.Fragment key="1">
    <p><strong>Ring System:</strong></p>
    <p>Saturn is known for its distinctive ring system made of ice particles and debris.</p>
  </React.Fragment>,

  <React.Fragment key="2">
    <p><strong>Composition:</strong></p>
    <ul>
      <li>Saturn has a composition similar to Jupiter, consisting mostly of hydrogen and helium.</li>
    </ul>
  </React.Fragment>,

  <React.Fragment key="3">
    <p><strong>Moons:</strong></p>
    <ul>
      <li>Saturn has multiple moons, including Titan, the second-largest moon in the solar system.</li>
    </ul>
  </React.Fragment>,
  <a href="https://en.wikipedia.org/wiki/Saturn" target="_blank" rel="noopener noreferrer" className='text-teal-500'>To know Further Click Here.</a>  
      ],
      modelPath: "assets/Saturn.glb"
    },
    {
      id: "uranus",
      title: "Uranus",
      facts: [
        "☀️ Seventh planet from the Sun, rotates on its side.",
        "🔄 Ice giant composed of water, ammonia, and methane.",
        "💙 Blue-green color due to methane in its atmosphere.",
        "🪐 Ring system and numerous moons."
      ],
      additionalFacts: [
        <React.Fragment key="1">
        <p><strong>Rotates on Its Side:</strong></p>
        <p>Uranus rotates on its side, which is a unique characteristic in our solar system.</p>
      </React.Fragment>,
    
      <React.Fragment key="2">
        <p><strong>Composition:</strong></p>
        <ul>
          <li>Uranus is an ice giant composed of water, ammonia, and methane.</li>
        </ul>
      </React.Fragment>,
    
      <React.Fragment key="3">
        <p><strong>Blue-Green Color:</strong></p>
        <ul>
          <li>Uranus has a blue-green color due to methane in its atmosphere.</li>
        </ul>
      </React.Fragment>,
    
      <React.Fragment key="4">
        <p><strong>Ring System and Moons:</strong></p>
        <ul>
          <li>Uranus has a ring system and numerous moons.</li>
        </ul>
      </React.Fragment>,  
      <a href="https://en.wikipedia.org/wiki/Uranus" target="_blank" rel="noopener noreferrer" className='text-teal-500'>To know Further Click Here.</a>
      ],
      modelPath: "assets/Uranus.glb"
    },
    {
      id: "neptune",
      title: "Neptune",
      facts: [
        "☀️ Eighth and farthest planet from the Sun.",
        "❄️ Similar in composition to Uranus, an ice giant.",
        "💙 Vivid blue color due to methane in its atmosphere.",
        "🌪️ Strong winds and storms, including the Great Dark Spot."
      ],
      additionalFacts: [
        <React.Fragment key="1">
    <p><strong>Ice Giant:</strong></p>
    <p>Neptune is an ice giant similar in composition to Uranus.</p>
  </React.Fragment>,

  <React.Fragment key="2">
    <p><strong>Vivid Blue Color:</strong></p>
    <ul>
      <li>Neptune has a vivid blue color in its atmosphere due to methane.</li>
    </ul>
  </React.Fragment>,

  <React.Fragment key="3">
    <p><strong>Winds and Storms:</strong></p>
    <ul>
      <li>Neptune experiences strong winds and storms, including the Great Dark Spot.</li>
    </ul>
  </React.Fragment>,
  <a href="https://en.wikipedia.org/wiki/Neptune" target="_blank" rel="noopener noreferrer" className='text-teal-500'>To know Further Click Here.</a>  
      ],
      modelPath: "assets/Neptune.glb"
    }
  ];
  

  return (
    <div className="flex flex-col">
      {planetsData.map((planet, index) => (
        <PlanetSection key={index} {...planet} />
      ))}
    </div>
  );
};

export default SolarSystem;
