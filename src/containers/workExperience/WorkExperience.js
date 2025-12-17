import React, {useContext, useState, useEffect} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (workExperiences.display) {
    const containerContent = (
      <div className="experience-container" id="workExperience">
        <div>
          <h1 className="experience-heading">Experiences</h1>
          <div className="experience-cards-div">
            {workExperiences.experience.map((card, i) => {
              return (
                <ExperienceCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    company: card.company,
                    desc: card.desc,
                    date: card.date,
                    companylogo: card.companylogo,
                    role: card.role,
                    descBullets: card.descBullets
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );

    return (
      <div id="experience">
        {isMobile ? (
          containerContent
        ) : (
          <Fade bottom duration={1000} distance="20px">
            {containerContent}
          </Fade>
        )}
      </div>
    );
  }
  return null;
}
