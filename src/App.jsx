import { useState, useEffect } from "react";
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import StatsSection from "./component/StatsSection";
import MainSection from "./component/MainSection";
import GetStarted from "./component/GetStarted";
import Pricing from "./component/Pricing";
import CallToAction from "./component/CallToAction";
import Footer from "./component/Footer";
import MainSectionHeader from "./component/MainSectionHeader";

function App() {
  const [models, setModels] = useState([]);
  const [carts, setCarts] = useState([]);
  const [isActive, setIsActive] = useState({
    cart: false,
    status: "products"
  });

  // JSON data load
  useEffect(() => {
    fetch("./models.json")
      .then((res) => res.json())
      .then((data) => setModels(data))
      .catch(err => console.error("Error loading models:", err));
  }, []);

  // toggle
  const handleToggle = (status) => {
    if (status === "products") {
      setIsActive({ cart: false, status: "products" });
    } else {
      setIsActive({ cart: true, status: "cart" });
    }
  };

  // Card item remove
  const handleRemove = (id) => {
    const remaining = carts.filter((item) => item.id !== id);
    setCarts(remaining);
  };

  return (
    <div className="bg-zinc-50 min-h-screen font-inter">
      <NavBar carts={carts} />
      <Banner />
      <StatsSection />
<MainSectionHeader></MainSectionHeader>
      {/* toggle */}
      <MainSection 
        isActive={isActive}
        handleToggle={handleToggle}
        models={models}
        carts={carts}
        setCarts={setCarts}
        handleRemove={handleRemove}
      />

      <GetStarted />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;