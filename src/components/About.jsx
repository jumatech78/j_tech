import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a web and mobile application developer with over 2 years
          experience. I'm passionate about what i do and aspire to create
          designs and experiences that help solve problems and communicate
          functional sense. I'm looking forward on working and learning from
          developing applications with a team of passionate developers. Some of
          the technologies i work with at the moment include the following
          React.js, React-Native, Next.js HTML, CSS, Tailwindcss, Firebase.

        </p>

        <br />

        <p className="text-xl">
          I'm a graduate of ISBAT UNIVERSITY where i pursued a Bachelor's Degree
          of Science in Applied Information Technology. I also managed to equip
          myself with inter-personal communication skills plus team work.
        </p>
      </div>
    </div>
  );
};

export default About;
