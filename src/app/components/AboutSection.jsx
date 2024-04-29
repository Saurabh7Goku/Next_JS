"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Analyst</li>
        <li>Machine Learning</li>
        <li>Data Scientist</li>
        <li>SQL</li>
        <li>Large Language Model</li>
        <li>Prompt Engineering</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>Next JS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>RGPV University - 2019-23</li>
        <li>St. Joseph Senior Secondary - 2016-17</li>
        <li>Kendriya Vidyalaya Jhagrakhand - 2014-15</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Machine Learning Engineer</li>
        <li>Data Scientist ZTM Academy</li>
        <li>SQL Developer</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a passionate Data Scientist and Machine Learning enthusiast with a strong background in developing data-driven solutions and managing end-to-end projects. I specialize in MLOps, version control, and monitoring using tools such as MLFlow, Git, Docker, and more.
            Professional Journey:
            Throughout my career, I've had the privilege of working on exciting projects that have honed my skills and deepened my expertise.
            I'm on a quest to continue contributing my expertise to exciting and impactful projects in the realm of Data Science and Machine Learning. If you're looking for someone who can seamlessly bridge the gap between data and actionable insights while excelling in MLOps and end-to-end project management, let's connect and explore potential collaborations. Your next project might be the one I'm looking for! 😊.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
