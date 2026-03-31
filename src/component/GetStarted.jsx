import createAccImg from '../assets/user.png'; 
import chooseProductImg from '../assets/package.png';
import startCreatingImg from '../assets/rocket.png';

const GetStarted = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      image: createAccImg,
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      image: chooseProductImg,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      image: startCreatingImg,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-slate-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="relative bg-white border border-slate-100 rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Step Number Badge */}
              <div className="absolute top-6 right-6 bg-[#7C3AED] text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-lg shadow-purple-200">
                {step.id}
              </div>

              {/* Icon/Image Section */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-15 h-15 object-contain"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;