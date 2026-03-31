import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
  
  // src/assets 
  const getImageUrl = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href;
  };

  const handleAddToCart = () => {
    const isFound = carts.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Item Added Before");
      return;
    }

    setCarts([...carts, model]);
    toast.success("Item Added Successful");
  };

  return (
    <div className="relative bg-white shadow-sm rounded-2xl border border-zinc-200 p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
      
      {/* Tag (Popular/New/Best Seller) */}
      {model.tag && (
        <div className="absolute top-4 right-4">
          <span className={`px-4 py-1 rounded-full text-sm font-medium 
            ${model.tagType === 'popular' ? 'bg-purple-100 text-purple-600' : 
              model.tagType === 'new' ? 'bg-green-100 text-green-600' : 
              'bg-orange-100 text-orange-600'}`}>
            {model.tag}
          </span>
        </div>
      )}

      <div>
        {/* getImageUrl  */}
        <div className="mb-6">
          <img 
            className="h-6 w-6 object-contain" 
            src={getImageUrl(model.icon)} 
            alt={model.name} 
          />
        </div>

        {/* Title & Description */}
        <h2 className="text-2xl font-bold text-zinc-800 mb-3">{model.name}</h2>
        <p className="text-zinc-500 mb-6 leading-relaxed">{model.description}</p>

        {/* Price & Period */}
        <div className="mb-6">
          <span className="text-3xl font-bold text-zinc-900">${model.price}</span>
          <span className="text-zinc-500 text-lg">/{model.period}</span>
        </div>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {model.features.map((feature, index) => (
            <li key={index} className="flex items-center text-zinc-600">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Buy Now Button */}
      <button
        onClick={handleAddToCart}
        className="btn w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none rounded-xl normal-case text-lg h-14"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ModelCard;