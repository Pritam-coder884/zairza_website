import React from 'react'
import "../../styles/common.style.scss";
import Card from '../../Components/Card/Card'

const Teams = () => {
    const alumniData = [
        {
            detailNo: 1,
            img: require("../../Assets/images/teams/1.webp"),
            title: "Jyoti Nanda",
            desc: "Convener",
        },
        {
            detailNo: 2,
            img: require("../../Assets/images/teams/2.webp"),
            title: "Ashutosh Panda",
            desc: "Coordinator",
        },
        {
            detailNo: 3,
            img: require("../../Assets/images/teams/3.webp"),
            title: "Subhasmita Pradhan",
            desc: "Design Mentor",
        },
    ]
    return (
        <div className='event__container'>
            <div className="alumni_top_box">
                <h1 className="alumni_heading">Lets Meet Our Team</h1>
                <p className='alumni_para'>
                    Welcome to the heart of our organization—our incredible team! Behind every success story and every milestone achieved, there's a group of passionate individuals working together, bringing diverse skills, creativity, and dedication to the table. We take great pride in introducing you to the dynamic personalities that form the backbone of our company.
                    <br />
                    Whether you're a valued client, a prospective partner, or simply someone curious about the people who drive our success, this page serves as a window into the talent, passion, and commitment that define our team. Join us on this virtual journey as we introduce you to the individuals who make up the fabric of our organization, shaping its character and contributing to its success.
                </p>
            </div>
            <div className="alumni_card">
                {alumniData.map((details, id) => {
                    return <Card data={details} key={id} width="270px" alumniBackground="#00255C" borderBottomLeft="none" borderBottomRight="none" alumniColor="white" />
                })}
            </div>
        </div>
    )
}

export default Teams