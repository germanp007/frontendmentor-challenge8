import React from "react";
interface SVGComponentProps {
  auto: string;
  title: string;
  paragraph: string;
  background: string;
  border: string;
  button: string;
}

const CardComponent: React.FC<SVGComponentProps> = ({
  auto,
  title,
  paragraph,
  background,
  border,
  button,
}) => {
  return (
    <section
      className={`${background} w-[295px] h-[400px] ${border} flex flex-col justify-around px-10 py-4`}
    >
      <div>
        <img src={auto} alt="" />
      </div>
      <h1 className="font-big text-4xl text-white uppercase">{title}</h1>
      <p className="font-lexend text-[14px] text-Transparent-white">
        {paragraph}
      </p>
      <button
        className={`bg-white h-11 w-[134px] rounded-[30px]  text-[15px] font-[500] text-${button} hover:bg-transparent hover:text-white border-2 border-white`}
      >
        Learn More
      </button>
    </section>
  );
};

export default CardComponent;
