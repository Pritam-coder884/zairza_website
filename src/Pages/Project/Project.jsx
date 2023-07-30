import React from 'react'
import "../../styles/common.style.scss";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchBar from '../../Components/common/Search/SearchBar';
import Button from '../../Components/common/Button/Button';
import Card from '../../Components/Card/Card';

const Project = () => {
    const projectData=[
        {
            img:require("../../Assets/images/card/c-1.png"),
            title:"Lorem ipsum dolor sit amet.",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
        },
        {
            img:require("../../Assets/images/card/c-2.png"),
            title:"Lorem ipsum dolor sit amet.",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
        },
        {
            img:require("../../Assets/images/card/c-3.png"),
            title:"Lorem ipsum dolor sit amet.",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
        },
     ]
    
    
    
      return (
        <div className="event__container">
          <div className="project__top">
            <div className="project__title">
              <h1>Projects</h1>
            </div>
          </div>
          <div className="event__search__box">
            <SearchBar className="event__search" search_title="event" />
            <div className="event_btn_filter">
              <div className="event__btn">
                <Button />
              </div>
              <div className="event__filter">
                <p>Filter</p> <FilterAltOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="event_card" style={{marginBottom:"1rem"}} >
            {projectData.map((data,id)=>{
                return <Card data={data} key={id} width="360px" />
            })}
          </div>
        </div>
      );
}

export default Project