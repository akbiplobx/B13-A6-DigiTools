const StatsSection = () => {
  const stats = [
    {
      value: "50K+",
      label: "Active Users",
    },
    {
      value: "200+",
      label: "Premium Tools",
    },
    {
      value: "4.9",
      label: "Rating",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 md:px-12 my-12 shadow-xl shadow-purple-100/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center w-full group">
              
              <div className="flex-1 text-center py-6 md:py-0">
                <p className="text-6xl font-bold tracking-tight mb-3">
                  {stat.value}
                </p>
                <p className="text-lg text-purple-100 font-medium">
                  {stat.label}
                </p>
              </div>

            
              {index < stats.length - 1 && (
                <div className="hidden md:block h-24 w-px bg-purple-400 opacity-50 mx-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;