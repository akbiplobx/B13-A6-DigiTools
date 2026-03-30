import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-white px-6 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Supercharge Your <br />
            <span className="text-slate-900">Digital Workflow</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.
          </p>

          <p className="text-slate-400 font-medium cursor-pointer hover:underline">
            Explore Products
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3.5 rounded-full font-semibold text-base transition-all shadow-lg shadow-purple-200">
              Explore Products
            </button>
            
            <button className="flex items-center gap-2 border border-slate-200 px-8 py-3.5 rounded-full font-semibold text-slate-700 hover:bg-slate-50 transition-all">
              <span className="text-[#7C3AED]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl">
            <img
              className="w-full h-auto object-contain rounded-2xl shadow-2xl"
              src={BannerImage}
              alt="Digital Workflow Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;