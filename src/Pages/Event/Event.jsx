import React from "react";
import "../../styles/common.style.scss";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Card from "../../Components/Card/Card";

const Event = () => {
  const upcomingEventData = [
    {
      img: require("../../Assets/images/card/c-1.png"),
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
      date: "30th july 2023",
      time: "4:57 AM",
      place: "Zairza",
    },
    {
      img: require("../../Assets/images/card/c-2.png"),
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
      date: "30th july 2023",
      time: "4:57 AM",
      place: "Zairza",
    },
    {
      img: require("../../Assets/images/card/c-3.png"),
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
      date: "30th july 2023",
      time: "4:57 AM",
      place: "Zairza",
    },
  ];

  const pastEventData = [
    {
      img: require("../../Assets/images/card/c-1.png"),
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
    },
    {
      img: require("../../Assets/images/card/c-2.png"),
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
    },
    {
      img: require("../../Assets/images/card/c-3.png"),
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
    },
  ];

  return (
    <div className="event__container">
      <div className="event__top">
        <div className="event__title">
          <h1>Events</h1>
        </div>
      </div>
      <div className="event__search__box">
        <div>
          <input
            type="text"
            className="event__search"
            placeholder="Search for any event"
          />
        </div>
        <div className="event_btn_filter">
          <div className="event__btn">
            <button className="search-button-btn">Search</button>
          </div>
          <div className="event__filter">
            <p>Filter</p> <FilterAltOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="events_heading_box">
        <h1 className="events_heading">Upcoming Events</h1>
      </div>
      <div className="event_card">
        {upcomingEventData.map((data, id) => {
          return <Card data={data} key={id} width="360px" />;
        })}
      </div>
      <div className="events_heading_box" style={{ marginTop: "1rem" }}>
        <h1 className="events_heading">Past Events</h1>
      </div>
      <div className="event_card" style={{ marginBottom: "1rem" }}>
        {pastEventData.map((data, id) => {
          return <Card data={data} key={id} width="360px" />;
        })}
      </div>
    </div>
  );
};

export default Event;
