import React from 'react'
import "../../styles/common.style.scss";
import Card from '../../Components/Card/Card'

const Teams = () => {
    const alumniData=[
        {
            detailNo:1,
            img:require("../../Assets/images/teams/1.webp"),
            title: "Jyoti Nanda",
            desc: "Coordinator",
        },
        {
            detailNo:2,
            img:require("../../Assets/images/teams/2.webp"),
            title: "Ashutosh Panda",
            desc: "Convenor",
        },
        {
            detailNo:3,
            img:require("../../Assets/images/teams/3.webp"),
            title: "Subhasmita Pradhan",
            desc: "Design Mentor",
        },
        {
            detailNo:4,
            img:require("../../Assets/images/teams/random.webp"),
            title: "Adarsh Lal",
            desc: "ME (2024)",
        },
        {
            detailNo:5,
            img:require("../../Assets/images/teams/akanksha.webp"),
            title: "Akanksha Panda",
            desc: "EIE (2024)",
        },
        {
            detailNo:6,
            img:require("../../Assets/images/teams/random.webp"),
            title: "Ashish Mohapatra",
            desc: "IT (2024)",
        },

        {
            detailNo:7,
            img:require("../../Assets/images/teams/random.webp"),
            title: "Ashutosh Mohanty",
            desc: "IT (2024)",
        },
        {
            detailNo:8,
            img:require("../../Assets/images/teams/random.webp"),
            title: "Ayush Acharya",
            desc: "IT (2024)",
        },
        {
            detailNo:9,
            img:require("../../Assets/images/teams/binaya.webp"),
            title: "Binay Parida",
            desc: "EIE (2024)",
        },
        {
            detailNo:10,
            img:require("../../Assets/images/teams/random.webp"),
            title: "Biswakiran Das",
            desc: "IT (2024)",
        },
        {
            detailNo:11,
            img:require("../../Assets/images/teams/gourav.webp"),
            title: "Gourav Sahoo",
            desc: "ME (2024)",
        },
        {
            detailNo:12,
            img:require("../../Assets/images/teams/random.webp"),
            title: "Jyoti Prakash Sahu",
            desc: "IT (2024)",
        },
        {
            detailNo:13,
            img:require("../../Assets/images/teams/mukti.webp"),
            title: "Mukti Priyadarshi Ray",
            desc: "ME (2024)",
        },
        {
            detailNo:14,
            img:require("../../Assets/images/teams/pankaj.webp"),
            title: "Pankaj Agarwal",
            desc: "IT (2024)",
        },
        {
            detailNo:15,
            img:require("../../Assets/images/teams/random.webp"),
            title: "Pratik Agarwal",
            desc: "CSE (2024)",
        },


        {
            detailNo:16,
            img:require("../../Assets/images/teams/pritam.webp"),
            title: "Pritam Kumar Dash",
            desc: "CSE (2024)",
        },

        {
            detailNo:17,
            img:require("../../Assets/images/teams/sai.webp"),
            title: "Sai Soumyak Nanda",
            desc: "IT (2024)",
        },
        {
            detailNo:18,
            img:require("../../Assets/images/teams/sameer.webp"),
            title: "Sameer Dash",
            desc: "IT (2024)",
        },
        {
            detailNo:17,
            img:require("../../Assets/images/teams/random.webp"),
            title: "SSiddharth Mohanty",
            desc: "CSE (2024)",
        },
        {
            detailNo:20,
            img:require("../../Assets/images/teams/random.webp"),
            title: "Suprasanna Das ",
            desc: "EE (2024)",
        },
        {
            detailNo:21,
            img:require("../../Assets/images/teams/tamana.webp"),
            title: "Tamanna Swain",
            desc: "EIE (2024)",
        },
        {
            detailNo:21,
            img:require("../../Assets/images/teams/vivek.webp"),
            title: "Vivek Parida",
            desc: "IT (2024)",
        }

    ]       
    return (
        <div className='event__container'>
            <div className="alumni_top_box">
                <h1 className="alumni_heading">Lets Meet Our Teams</h1>
                <p className='alumni_para'>
                Welcome to the heart of our organization—our incredible team! Behind every success story and every milestone achieved, there's a group of passionate individuals working together, bringing diverse skills, creativity, and dedication to the table. We take great pride in introducing you to the dynamic personalities that form the backbone of our company.
Whether you're a valued client, a prospective partner, or simply someone curious about the people who drive our success, this page serves as a window into the talent, passion, and commitment that define our team. Join us on this virtual journey as we introduce you to the individuals who make up the fabric of our organization, shaping its character and contributing to its success.
                </p>     
            </div>
            <div className="alumni_card">
            {alumniData.map((details,id)=>{
                return <Card data={details} key={id} width="270px" alumniBackground="#00255C" borderBottomLeft="none" borderBottomRight="none" alumniColor="white" />
            })}
            </div>
        </div>
      )
}

export default Teams