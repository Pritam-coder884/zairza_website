import React from 'react'
import "../../styles/common.style.scss";
import Card from '../../Components/Card/Card'

const Alumni = () => {
    const pastEventData=[
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
        {
            img:require("../../Assets/images/card/c-3.png"),
            title:"Lorem ipsum dolor sit amet.",
            desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
        },
     ]
  return (
    <div className='event__container'>
        <div className="events_heading_box" style={{display : "flex", flexDirection: "row"}}>
            <h1 className="events_heading" style={{width:"25%", padding :"3rem"}}>Lets Meet Our Alumni</h1>
            <p style={{width:"75%" , padding :"3rem"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum corrupti iusto dicta quasi, necessitatibus sunt voluptates, quae minima unde, magni assumenda dolorum soluta delectus quibusdam enim incidunt reprehenderit vitae vero beatae est velit nam amet expedita? Maiores esse eligendi, optio aut libero animi eos tempora ratione, corrupti illum suscipit maxime.</p>     
        </div>
        <div className="event_card" style={{marginBottom:"1rem", padding :"0rem 6rem"}} >
        {pastEventData.map((data,id)=>{
            return <Card data={data} key={id} width="360px" />
        })}
        </div>
    </div>
  )
}

export default Alumni