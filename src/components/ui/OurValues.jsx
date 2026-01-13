import React from "react";

const OurValues = () => {
  const values = [
    {
      title: "Be world-class",
      desc: "We strive for excellence in everything we do, ensuring our platform provides the highest quality experience for creators globally.",
    },
    {
      title: "Share everything you know",
      desc: "Knowledge grows when shared. We encourage our community to mentor each other and foster a culture of collective growth.",
    },
    {
      title: "Always learning",
      desc: "The world of creativity is ever-evolving. We stay curious, adapt to new trends, and continuously improve our skills and platform.",
    },
    {
      title: "Be supportive",
      desc: "We prioritize a kind and inclusive environment where every contestant feels empowered to showcase their unique talents.",
    },
    {
      title: "Take responsibility",
      desc: "We are committed to transparency and accountability, ensuring a fair and trustworthy competition environment for all.",
    },
    {
      title: "Enjoy downtime",
      desc: "Great ideas come from a rested mind. We believe in maintaining a healthy work-life balance to sustain long-term creativity.",
    },
  ];

  return (
    <section className="bg-base-100">
      <div className="container mx-auto">
        {/* Header Part */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold border-l-4 border-primary pl-6 mb-6">
            Our <span className="text-primary">Values</span>
          </h2>
          <p className="text-lg text-base-content/80 mb-6 leading-relaxed mt-2">
            Our values are the foundation of our community. They guide how we
            build our platform and support the creators who make it amazing.
          </p>
        </div>

        {/* Grid Part */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-xl font-bold text-base-content mb-4">
                {value.title}
              </h3>
              <p className="text-base-content/60 leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
