import ModelCard from "./ModelCard";

const Models = ({ models, carts, setCarts }) => {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {models.map((model) => (
          <ModelCard 
            key={model.id} 
            model={model} 
            carts={carts} 
            setCarts={setCarts} 
          />
        ))}
      </div>
    </div>
  );
};

export default Models;