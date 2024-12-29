import React from "react";
import bannerImg from "../../assets/home/chef-service.jpg";

const MidSection = () => {
  return (
    <div className="my-24">
      <div
        className="hero "
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md bg-white text-black p-10 ">
            <h1 className="mb-5 text-5xl font-bold">Belly Bites B</h1>
            <p className="mb-5 text-xl">
              We Are Providing Best Quality Foods And Services To You. There is
              so many items and your favorite dishes are available. Your
              satisfaction is our honour
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
