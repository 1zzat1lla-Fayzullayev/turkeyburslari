/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../language";
import { LanguageContext } from "../context/LanguageContext";

function About() {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  return (
    <div
      className="pt-[150px] transition-colors duration-300"
      style={{ minHeight: "calc(100vh - 22.8rem)" }}
    >
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 lg:w-2/5 px-4">
            <h2 className="text-4xl md:text-5xl  text-mainBlue dark:text-white mb-6">
              <span className="font-[700]">{getText("aboutTitleSpan")}</span> <br /> <span className="font-[500]">{getText("aboutTitle")}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {getText("aboutParagraph")}
            </p>
            <button className="mt-4 bg-mainBlue text-white py-2 px-6 rounded-full hover:bg-blue-700 transition">
              {getText("learnMore")}
            </button>
          </div>
          <div className="md:w-1/2 lg:w-3/5">
            <img
              src="https://media.istockphoto.com/id/546171270/photo/question-do-you-speak-turkish-written-in-turkish.jpg?b=1&s=170667a&w=0&k=20&c=ks-gITsS_8OnnmRPOfaic0UpCi5n7ugcp7_bCVCHYaE="
              alt="Language banner"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default About;
