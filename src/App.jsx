import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className="w-full relative min-h-screen text-white font-helvetica">
        {data[0].map((canvasdets, index) => (
          <Canvas details={canvasdets} />
        ))}
        <div className="w-full relative z-[1] h-screen text-white">
          <nav className="w-full p-4 flex justify-between z-50">
            <div className="brand text-2xl font-regular">thirtysixstudios</div>
            <div className="links flex gap-10">
              {["Home", "About", "Projects", "Contact"].map((link, index) => (
                <a
                  key={index}
                  href="{`#${link.toLowerCase()}`}"
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-2xl leading-[1]">
                At Thirtysixstudio, we build and immersive digital experiences
                for brands with a purpose.
              </h3>
              <p className="text-sm w-[80%] mt-10 font-large">
                We're a boutique production studio focused on design, animation,
                and technology, constantly rethinking what digital craft can do
                for present-day ads and campaigns.
              </p>
              <p className="text-md mt-4">scroll</p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1 className="text-[10rem] font-normal tracking-tight z-[-10] text-center">
              Thirtysixstudios
            </h1>
          </div>
        </div>
      </div>

<div className="w-full min-h-screen relative text-white bg-black border-b border-white/10">
  {/* Logic Preserved */}
  {data[1].map((canvasdets, index) => (
    <Canvas key={index} details={canvasdets} />
  ))}

  <div className="relative z-10 px-6 md:px-16 py-20 flex flex-col justify-between min-h-screen">
    <div className="mt-10">
      <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none text-white mix-blend-difference">
        We Are <br />
        <span className="text-[#fd2c2a] drop-shadow-[0_0_15px_rgba(253,44,42,0.6)]">
          Thirtysix
        </span>
      </h1>
      
      <div className="mt-12 w-full md:w-[50%] border-l-2 border-[#fd2c2a] pl-8">
        <p className="text-2xl font-light text-gray-300 leading-relaxed">
          We don't just build websites; we engineer <span className="text-white font-bold">digital ecosystems</span>. 
          A collective of radical thinkers creating experiences that define the next era of the web.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-end">
      <div>
        <h2 className="text-sm font-mono text-[#fd2c2a] mb-4 tracking-widest uppercase">Our Mission</h2>
        <p className="text-lg text-gray-400 w-[90%]">
          To dismantle the ordinary. We push pixels to their limit and code beyond boundaries, ensuring your brand doesn't just survive the future—it dictates it.
        </p>
      </div>
      
      <div className="flex flex-col items-start md:items-end">
        <p className="text-xl font-medium mb-6 text-right hidden md:block">
          Ready to disrupt the market?
        </p>
        <button className="group relative px-10 py-5 bg-white text-black hover:bg-[#fd2c2a] hover:text-white transition-colors duration-300 font-bold uppercase tracking-wide overflow-hidden">
          <span className="relative z-10">Initiate Project</span>
        </button>
      </div>
    </div>
  </div>
</div>


<div className="w-full min-h-screen relative text-white bg-[#0a0a0a] overflow-hidden">
  {/* Logic Preserved */}
  {data[2]?.map((canvasdets, index) => (
    <Canvas key={index} details={canvasdets} />
  ))}

  <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
    {/* Left Side */}
    <div className="w-full md:w-1/2 px-10 py-32 flex flex-col justify-center border-r border-white/10">
      <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-10">
        Who We <br/> <span className="text-[#fd2c2a]">Empower</span>
      </h1>
      <p className="text-xl text-gray-400 leading-relaxed w-[90%]">
        We partner with the rebels, the visionaries, and the ambitious startups who refuse to settle for templates. If you are looking to leave a dent in the universe, we are your digital architects.
      </p>
      
      <button className="mt-12 w-fit px-8 py-3 border border-[#fd2c2a] text-[#fd2c2a] hover:bg-[#fd2c2a] hover:text-white transition-all duration-300 rounded-full uppercase text-sm font-bold tracking-widest">
        View Client Roster
      </button>
    </div>

    {/* Right Side */}
    <div className="w-full md:w-1/2 px-10 py-32 bg-[#111] flex flex-col justify-center">
      <div className="bg-black border border-[#fd2c2a]/20 p-10 hover:border-[#fd2c2a] transition-colors duration-500 group">
        <h2 className="text-3xl font-bold text-white mb-6 group-hover:text-[#fd2c2a] transition-colors">
          The Strategy
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          Every pixel has a purpose. We strip away the noise to reveal the core of your brand, then amplify it with cutting-edge technology and immersive motion design.
        </p>
      </div>
    </div>
  </div>
</div>



<div className="w-full min-h-screen relative text-white px-6 py-32 bg-black flex items-center justify-center">
  {/* Logic Preserved */}
  {data[3].map((canvasdets, index) => (
    <Canvas key={index} details={canvasdets} />
  ))}

  <div className="relative z-10 max-w-5xl w-full">
    <h1 className="text-center text-6xl md:text-8xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mb-20 opacity-30 select-none">
      Philosophy
    </h1>

    <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#fd2c2a] opacity-20 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 text-center">
        <p className="text-2xl md:text-3xl font-light text-gray-200 leading-normal mb-10">
          "We are a collective of creators aiming to bridge the gap between human emotion and digital interface."
        </p>

        <div className="w-20 h-1 bg-[#fd2c2a] mx-auto mb-10"></div>

        <h2 className="text-xl font-bold text-[#fd2c2a] uppercase tracking-widest mb-4">Our Core Belief</h2>
        <p className="text-lg text-gray-400 w-full md:w-2/3 mx-auto leading-relaxed">
          Design is not just what it looks like and feels like. Design is how it works. We push boundaries to create seamless narratives that guide users to conversion.
        </p>
        
        <button className="mt-12 px-12 py-4 bg-[#fd2c2a] hover:scale-105 transition-transform duration-300 rounded-full text-white font-semibold shadow-[0_0_20px_rgba(253,44,42,0.4)]">
          Collaborate With Us
        </button>
      </div>
    </div>
  </div>
</div>


<div className="w-full min-h-screen relative text-white px-8 py-32 bg-gradient-to-br from-black via-[#0f0f0f] to-black">
  {/* Logic Preserved */}
  {data[4].map((canvasdets, index) => (
    <Canvas key={index} details={canvasdets} />
  ))}

  <div className="max-w-7xl mx-auto relative z-10">
    
    <div className="flex flex-col md:flex-row gap-16 mb-24">
      <div className="w-full md:w-1/3">
        <h1 className="text-6xl font-bold uppercase border-l-4 pl-6 border-[#fd2c2a] sticky top-10">
          Our <br/> Origin
        </h1>
      </div>
      
      <div className="w-full md:w-2/3 space-y-8 text-lg text-gray-300 leading-relaxed font-light">
        <p>
          <strong className="text-white">It started in a garage, like all good stories.</strong> What began as a passion project has evolved into a global innovation hub. We realized early on that the web was becoming cluttered with noise. We wanted to bring clarity.
        </p>
        <p>
          We combine the precision of engineering with the chaos of art. Every project is fueled by curiosity and built with intention. We don't just create products; we build memories.
        </p>
      </div>
    </div>

    <div className="border-t border-white/10 pt-20">
      <h2 className="text-4xl font-bold text-white mb-12 text-center uppercase tracking-wider">
        The <span className="text-[#fd2c2a]">Code</span> We Live By
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Clarity", desc: "Design that tells a story, not just decorates." },
          { title: "Emotion", desc: "People ignore design that ignores people." },
          { title: "Innovation", desc: "Constantly evolving, never stagnant." },
          { title: "Purpose", desc: "Building for meaning, not just for clicks." }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white/5 border border-white/5 hover:border-[#fd2c2a] transition-all duration-300 rounded-xl group hover:-translate-y-2">
            <h3 className="text-xl font-bold text-[#fd2c2a] mb-3 group-hover:text-white transition-colors">0{i+1}. {item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-24 text-center">
      <button className="px-12 py-4 border-b-2 border-[#fd2c2a] hover:bg-[#fd2c2a] hover:text-white transition-all text-xl uppercase tracking-widest font-bold">
        Join The Journey
      </button>
    </div>

  </div>
</div>


<div className="w-full min-h-screen relative text-black px-6 py-32 bg-[#fd2c2a]">
  {/* Logic Preserved */}
  {data[5].map((canvasdets, index) => (
    <Canvas key={index} details={canvasdets} />
  ))}

  <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
    
    <div className="flex flex-col justify-center">
      <h1 className="text-7xl md:text-8xl font-black uppercase mb-8 leading-[0.85] tracking-tighter">
        Brand <br/> Identity
      </h1>
      <p className="text-2xl font-medium leading-tight mb-8">
        We don't just design visuals — we forge personalities.
      </p>
      <button className="w-fit px-10 py-4 bg-black text-white rounded-full font-bold shadow-2xl hover:scale-105 transition-transform duration-300">
        Start Your Transformation
      </button>
    </div>

    <div className="space-y-10">
      <div className="border-b-2 border-black pb-8">
        <h2 className="text-3xl font-bold mb-4 uppercase">Our Promise</h2>
        <p className="text-lg font-medium opacity-80">
          To make your brand unforgettable. In an era of infinite scroll, we make the user stop. We shape experiences that are not just aesthetic, but functional and future-proof.
        </p>
      </div>

      <div className="border-b-2 border-black pb-8">
        <h2 className="text-3xl font-bold mb-4 uppercase">The Deliverables</h2>
        <div className="flex flex-wrap gap-3 text-sm font-bold uppercase tracking-wide">
          {["Brand Positioning", "Visual Identity", "UI/UX Design", "Motion", "Strategy", "Content"].map((tag, i) => (
            <span key={i} className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-[#fd2c2a] transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

  </div>
</div>

    </>
  );
}

export default App;
