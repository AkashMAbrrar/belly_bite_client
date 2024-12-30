import React from "react";
import { Parallax } from "react-parallax";

const Covered = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}>
      <div className="hero min-h-[calc(100vh-250px)]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className="bg-black text-white opacity-70 min-w-96 h-[200px]">
              <h1 className="mb-5 text-white text-5xl font-bold uppercase">
                {title}
              </h1>
              <p className="mb-5 ">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Covered;
