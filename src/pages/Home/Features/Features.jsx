import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import "../Features/Features.css";

const Features = () => {
  return (
    <div className="featured_item bg-fixed bg-opacity-90 my-16">
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"Features Items"}></SectionTitle>
      <div className="md:flex justify-center items-center gap-10 pb-20 pt-10 px-16">
        <div>
          <img src={featureImg} alt="" />
        </div>
        <div className="text-white text-lg font-semibold shadow-md bg-black/50 ">
          <p>December 26, {new Date().getFullYear()}</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            officiis tenetur enim fugit? Tempora facilis officiis exercitationem
            neque. Ab quos non eos earum, provident est sapiente consequatur
            aliquam odio soluta qui rerum eaque. Atque qui, dolorum odio
            repudiandae nostrum dolores?
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white mt-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
