import { toast } from "react-toastify";

const CartContainer = ({ carts, handleRemove, setCarts }) => {
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

  // src/assets 
  const getImageUrl = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href;
  };

  const handleCheckout = () => {
    if (carts.length === 0) return;
    setCarts([]);
    toast.success("Success");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-10 text-zinc-900">Your Cart</h2>

      {carts.length === 0 ? (
        <div className="text-center py-20 bg-zinc-50 rounded-3xl border-2 border-dashed border-zinc-200">
          <i class="fa-solid fa-cart-arrow-down text-5xl mb-2 text-zinc-500"></i>
          <p className="text-zinc-500 text-xl font-medium">Your Cart is Empty</p>
        </div>
      ) : (
        <div className="space-y-6">
          {carts.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between p-6 bg-white border border-zinc-200 rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                {/* icon box */}
                <div className="w-20 h-20 bg-zinc-100 rounded-2xl flex items-center justify-center p-4">
                  {/* getImageUrl(item.icon) used */}
                  <img 
                    src={getImageUrl(item.icon)} 
                    alt={item.name} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                {/* text details */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-1">{item.name}</h3>
                  <p className="text-zinc-500 text-lg font-medium">Price: ${item.price}</p>
                </div>
              </div>

              {/* remove */}
              <button 
                onClick={() => {
                  handleRemove(item.id);
                  toast.warn("Item Removed");
                }}
                className="text-[#FF4D81] font-bold text-lg hover:scale-105 transition-transform mr-4"
              >
                Remove
              </button>
            </div>
          ))}

          {/* total calculation card */}
          <div className="mt-12 p-10 bg-white border border-zinc-200 rounded-[40px] shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <span className="text-zinc-500  text-xl">Total</span>
              <span className="text-xl font-bold text-zinc-900">${totalPrice}</span>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-2 rounded-3xl font-bold text-xl transition-all shadow-lg active:scale-[0.98]"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;