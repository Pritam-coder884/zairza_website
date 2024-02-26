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
            img:require("../../Assets/images/teams/random.webp"),
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
            img:require("../../Assets/images/teams/random.webp"),
            title: "Mukti Priyadarshi Ray",
            desc: "ME (2024)",
        },
        {
            detailNo:14,
            img:require("../../Assets/images/teams/random.webp"),
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
            img:require("../../Assets/images/teams/random.webp"),
            title: "Sameer Dash",
            desc: "IT (2024)",
        },
        {
            detailNo:19,
            img:require("../../Assets/images/teams/random.webp"),
            title: "Suprasanna Das ",
            desc: "EE (2024)",
        },
        {
            detailNo:20,
            img:require("../../Assets/images/teams/random.webp"),
            title: "Tamanna Swain",
            desc: "EIE (2024)",
        },







    ]       
    return (
        <div className='event__container'>
            <div className="alumni_top_box">
                <h1 className="alumni_heading">Lets Meet Our Teams</h1>
                <p className='alumni_para'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi officiis laboriosam quaerat explicabo repellendus dolores vero laudantium at aliquid velit voluptas iusto optio repudiandae nemo reprehenderit, corrupti asperiores doloribus illo soluta dolore? Illo libero ipsa illum voluptate, exercitationem eum harum nesciunt praesentium, odit modi, recusandae fugiat possimus error. Autem fuga mollitia quia a omnis nihil maxime aperiam assumenda aspernatur ullam impedit rem, voluptas esse molestiae, ab ea culpa praesentium unde. Quidem magni quibusdam et quasi consectetur dolor hic quaerat beatae!
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