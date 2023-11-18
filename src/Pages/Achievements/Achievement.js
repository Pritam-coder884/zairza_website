import React, { useState } from "react";
import "./Achievements.scss";
import eatm from "../../Assets/images/achievement/eatm.png";
import gsoc from "../../Assets/images/achievement/gsoc.jpg";
import ieee from "../../Assets/images/achievement/ieee.jpg";
import iitb from "../../Assets/images/achievement/IITB.png";
import sih from "../../Assets/images/achievement/sih.png";
import soh from "../../Assets/images/achievement/soh.jpg";
import umo from "../../Assets/images/achievement/UMO.png";
import openSource from "../../Assets/images/achievement/open-source.png";

const Achievement = () => {
  const achievement_data = [
    {
      img: gsoc,
      source: "Google Summer of Code",
      description:
        "Sidharth Mohanty from zairza has been selected in Google Summer of Code for his contributions in Rocket Chat",
      duration: "2021-2022",
    },
    {
      img: sih,
      source: "Smart India Hackerthon",
      description:
        "2 teams from zairza bagged first prize in Smart India Hackathon in their respective problem statements.",
      duration: "Mar 2022 Oct 2022",
    },
    {
      img: soh,
      source: "Smart Odisha Hackerthon",
      description:
        "2 Teams from zairza bagged 2nd and 3rd prize in Smart Odisha Hackathon 2022 in their respective problem statements",
      duration: "Nov 2022",
    },
    {
      img: eatm,
      source: "EATM",
      description:
        "Team Zephartemis won first prize in Robo Race at Adastra event in EATM",
      duration: "2022",
    },
    {
      img: iitb,
      source: "IIT Bhubaneswar",
      description:
        "Team Zephbotz woh second prize in Robo Race at IIT Bhubaneswar ",
      duration: "2022",
    },
    {
      img: umo,
      source: "UMO Design",
      description:
        "Team Rudhira from zairza bagged first prize in UMO contest which is an international design competition.",
      duration: "2022",
    },
    {
      img: openSource,
      source: "Open Source Community",
      description:
        "Parul Sahoo from zairza was invited to attend an open source event at Dublin for her outstanding contributions to open source community.",
      duration: "2022",
    },
    {
      img: ieee,
      source: "IEEE",
      description:
        "A research paper got published at the International Conference on Automation,Computing and Renewable Systems, IEEE.",
      duration: "2022",
    },
  ];

  const [serachAchievement, setSearchAchievement] = useState("");
  const [filteredAchievement,setFilterAchievement]=useState(achievement_data);
  const handleSearchAchievementChange = (e) => {
    setSearchAchievement(e.target.value);
  };
  const handleAchievementFilter=(e)=>{
    const newfilteredAchievement = achievement_data.filter((achi) =>
    achi.source.toLowerCase().includes(serachAchievement.toLowerCase())
  );
  setFilterAchievement(newfilteredAchievement);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAchievementFilter();
    }
  };
  

  return (
    <div className="Achievement-section">
      <div className="achievement-img">
        <h1 className="achievement-heading">Achievements</h1>
      </div>

      <div className="achievement__search__box">
        <div>
          <input
            type="text"
            className="search-bar-achieve"
            value={serachAchievement}
            onChange={handleSearchAchievementChange}
            placeholder="Search for any achievement"
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="achievement_btn_filter">
          <div className="achievement__btn">
            <button className="search-button-achieve" onClick={handleAchievementFilter}>Search</button>
          </div>
        </div>
      </div>

      {filteredAchievement.map((value, index) => (
        <div className="achievement-cards" key={index}>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            className="radio-button"
          />
          <img src={value.img} className="achievement-image" alt="" />
          <div className="achievement-details">
            <div className="achievement-name">
              <p style={{ color: "rgba(71, 84, 103, 1)" }}>{value.source}</p>
            </div>
            <p
              style={{ margin: "8px 0", fontSize: "18px" }}
              className="value_desc"
            >
              {value.description}
            </p>
            <p style={{ color: "rgba(152, 162, 179, 1)" }}>{value.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
