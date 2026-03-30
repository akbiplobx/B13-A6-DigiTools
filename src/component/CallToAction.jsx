import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-6 md:px-12 my-16 shadow-2xl shadow-purple-100/50">
      <div className="max-w-[1280px] mx-auto text-center">
        {/* Main Heading */}
        <h2 className=" text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
          Ready To Transform Your Workflow?
        </h2>

        {/* Description */}
        <p className="text-purple-100 max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
          Join thousands of professionals who are already using Digitools to work
          smarter. Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-10">
          {/* Explore Products - Primary Button */}
          <button className="bg-white text-[#7C3AED] px-9 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-purple-50 transition-all duration-300">
            Explore Products
          </button>

          {/* View Pricing - Secondary/Outline Button */}
          <button className="border-2 border-purple-300 text-white px-9 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
            View Pricing
          </button>
        </div>

        {/* Footer Info */}
        <p className="text-base text-purple-100 opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CallToAction;