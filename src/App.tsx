import sedan from "../public/images/icon-sedans.svg";
import suvs from "../public/images/icon-suvs.svg";
import luxury from "../public/images/icon-luxury.svg";

import CardComponent from "./component/CardComponent";

const App = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center py-20 items-center">
      <CardComponent
        auto={sedan}
        title="Sedans"
        paragraph="  Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip."
        background="bg-Bright-orange "
        border="rounded-t-lg"
        button="Bright-orange"
      />
      <CardComponent
        auto={suvs}
        title="suvs"
        paragraph="SUVs Take an SUV
    for its spacious interior, power, and versatility. Perfect for your next
    family vacation and off-road adventures."
        background="bg-Dark-cyan"
        border=" "
        button="Dark-cyan"
      />
      <CardComponent
        auto={luxury}
        title="luxury"
        paragraph="Luxury Cruise in the best car
        brands without the bloated prices. Enjoy the enhanced comfort of a luxury
        rental and arrive in style."
        background="bg-Very-dark-cyan"
        border="rounded-b-lg"
        button="Very-dark-cyan"
      />
    </main>
  );
};

export default App;
