import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for getting started",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      price: "29",
      description: "Best for professionals",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "99",
      description: "For teams and businesses",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                plan.isPopular 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl scale-105 z-10" 
                : "bg-white text-slate-900 border border-slate-100 shadow-sm"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFEDD5] text-[#9A3412] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm ${plan.isPopular ? "text-purple-100" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className={`text-lg ${plan.isPopular ? "text-purple-200" : "text-slate-400"}`}>/Month</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <svg className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? "text-purple-200" : "text-green-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className={`w-full py-4 rounded-4xl font-bold transition-all ${
                plan.isPopular 
                ? "bg-white text-[#7C3AED] hover:bg-purple-50" 
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-purple-700"
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;