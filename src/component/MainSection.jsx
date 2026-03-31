import Models from "./Models";
import CartContainer from "./CartContainer";

const MainSection = ({ isActive, handleToggle, models, carts, setCarts, handleRemove }) => {
  return (
    <div id="main-content" className="scroll-mt-20">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 my-12">
        <div className="bg-white border border-zinc-200 p-1.5 rounded-full shadow-sm inline-flex">
          <button
            onClick={() => handleToggle("products")}
            className={`px-10 py-3 rounded-full font-bold transition-all duration-300 ${
              !isActive.cart
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105"
                : "text-zinc-500 hover:bg-zinc-50"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => handleToggle("cart")}
            className={`px-10 py-3 rounded-full font-bold transition-all duration-300 ${
              isActive.cart
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105"
                : "text-zinc-500 hover:bg-zinc-50"
            }`}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>

      {/* Conditional Rendering Logic */}
      <div className="min-h-[500px]">
        {!isActive.cart ? (
          <Models 
            models={models} 
            carts={carts} 
            setCarts={setCarts} 
          />
        ) : (
          <CartContainer 
            carts={carts} 
            handleRemove={handleRemove} 
            setCarts={setCarts} 
          />
        )}
      </div>
    </div>
  );
};

export default MainSection;