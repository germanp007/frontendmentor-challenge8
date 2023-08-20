import sedan from "../public/images/icon-sedans.svg";
import suvs from "../public/images/icon-suvs.svg";
import luxury from "../public/images/icon-luxury.svg";
import CardComponent from "./component/CardComponent";
import { useEffect, useState } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar el oyente de evento de cambio de tamaño de ventana
    window.addEventListener("resize", handleResize);

    // Limpieza del oyente cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]); //

  return (
    <main className="min-h-screen flex flex-col justify-center py-20 items-center lg:flex-row">
      <div>
        <CardComponent
          auto={sedan}
          title="Sedans"
          paragraph="  Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip."
          background="bg-Bright-orange "
          border={windowWidth < 1000 ? "rounded-t-lg" : "rounded-l-lg"}
          button="Bright-orange"
        />
      </div>
      <div>
        <CardComponent
          auto={suvs}
          title="suvs"
          paragraph="SUVs Take an SUV
    for its spacious interior, power, and versatility. Perfect for your next
    family vacation and off-road adventures."
          background="bg-Dark-cyan"
          border="rounded-none"
          button="Dark-cyan"
        />
      </div>
      <div>
        <CardComponent
          auto={luxury}
          title="luxury"
          paragraph="Luxury Cruise in the best car
        brands without the bloated prices. Enjoy the enhanced comfort of a luxury
        rental and arrive in style."
          background="bg-Very-dark-cyan"
          border={windowWidth < 1000 ? "rounded-b-lg" : "rounded-r-lg"}
          button="Very-dark-cyan"
        />
      </div>
    </main>
  );
};

export default App;
