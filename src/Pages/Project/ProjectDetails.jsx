import React from "react";
// import Card from "../../Components/Card/Card";
// import projectDetailsImg from "../../Assets/images/project-details.png";
// import projectDetailsCardImg from "../../Assets/images/blogs-details-img-1.png";
import "../../styles/blog_project_details.scss";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { useParams } from "react-router-dom";

const Creator = ({img,name,role}) => (<div className="project_details_card">
  <div className="project_details_card_img">
    <img src={img} alt="" />
  </div>
  <div style={{ padding: "1rem 0.5rem" }}>
    <div>
      <p style={{ fontSize: "14px" }}>{name}</p>
    </div>
    <div className="project_card_icon_text_wrapper">
      <div>
        <p style={{ fontSize: "12px" }}>{role}</p>
      </div>
      <button className="project_card__desc_icon">
        <MailOutlineRoundedIcon
          style={{ fontSize: "1rem", color: "white" }}
        />
      </button>
    </div>
  </div>
</div>)

const ProjectDetails = () => {
//   const creatorData = [
//     {
//         img: projectDetailsCardImg,
//         name: "Gunjan Giri",
//         role: "Leader",
//     },
//     {
//         img: projectDetailsCardImg,
//         name: "Gunjan Giri",
//         role: "Leader",
//     },
//     {
//         img: projectDetailsCardImg,
//         name: "Gunjan Giri",
//         role: "Leader",
//     },
//     {
//         img: projectDetailsCardImg,
//         name: "Gunjan Giri",
//         role: "Leader",
//     },
// ]
// const paragraphText = {
//     p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi totam voluptates autem, corporis ea ipsum debitis repudiandae impedit hic! Reiciendis quo quia perspiciatis ipsam natus velit, aliquam inventore laborum delectus nemo architecto explicabo saepe ullam expedita eveniet accusantium vel similique dolor dolorum? Optio, officiis similique! Expedita nihil libero eaque sit magnam cupiditate, ex minima corporis necessitatibus. Exercitationem ea voluptas aliquam maiores ullam tenetur facere debitis laudantium ex dolor architecto, officia blanditiis neque tempora a eaque quos earum nisi perspiciatis.",

//     p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi totam voluptates autem, corporis ea ipsum debitis repudiandae impedit hic! Reiciendis quo quia perspiciatis ipsam natus velit, aliquam inventore laborum delectus nemo architecto explicabo saepe ullam expedita eveniet accusantium vel similique dolor dolorum? Optio, officiis similique! Expedita nihil libero eaque sit magnam cupiditate, ex minima corporis necessitatibus. Exercitationem ea voluptas aliquam maiores ullam tenetur facere debitis laudantium ex dolor architecto, officia blanditiis neque tempora a eaque quos earum nisi perspiciatis.",

//     p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi totam voluptates autem, corporis ea ipsum debitis repudiandae impedit hic! Reiciendis quo quia perspiciatis ipsam natus velit, aliquam inventore laborum delectus nemo architecto explicabo saepe ullam expedita eveniet accusantium vel similique dolor dolorum? Optio, officiis similique! Expedita nihil libero eaque sit magnam cupiditate, ex minima corporis necessitatibus. Exercitationem ea voluptas aliquam maiores ullam tenetur facere debitis laudantium ex dolor architecto, officia blanditiis neque tempora a eaque quos earum nisi perspiciatis.",

//     p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi totam voluptates autem, corporis ea ipsum debitis repudiandae impedit hic! Reiciendis quo quia perspiciatis ipsam natus velit, aliquam inventore laborum delectus nemo architecto explicabo saepe ullam expedita eveniet accusantium vel similique dolor dolorum? Optio, officiis similique! Expedita nihil libero eaque sit magnam cupiditate, ex minima corporis necessitatibus. Exercitationem ea voluptas aliquam maiores ullam tenetur facere debitis laudantium ex dolor architecto, officia blanditiis neque tempora a eaque quos earum nisi perspiciatis.",

//     p5: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi totam voluptates autem, corporis ea ipsum debitis repudiandae impedit hic! Reiciendis quo quia perspiciatis ipsam natus velit, aliquam inventore laborum delectus nemo architecto explicabo saepe ullam expedita eveniet accusantium vel similique dolor dolorum? Optio, officiis similique! Expedita nihil libero eaque sit magnam cupiditate, ex minima corporis necessitatibus. Exercitationem ea voluptas aliquam maiores ullam tenetur facere debitis laudantium ex dolor architecto, officia blanditiis neque tempora a eaque quos earum nisi perspiciatis.",

//     p6: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi totam voluptates autem, corporis ea ipsum debitis repudiandae impedit hic! Reiciendis quo quia perspiciatis ipsam natus velit, aliquam inventore laborum delectus nemo architecto explicabo saepe ullam expedita eveniet accusantium vel similique dolor dolorum? Optio, officiis similique! Expedita nihil libero eaque sit magnam cupiditate, ex minima corporis necessitatibus. Exercitationem ea voluptas aliquam maiores ullam tenetur facere debitis laudantium ex dolor architecto, officia blanditiis neque tempora a eaque quos earum nisi perspiciatis.",
// };
  // const projectData = [
  //   {
  //     img: require("../../Assets/images/card/c-1.png"),
  //     title: "Lorem ipsum dolor sit amet.",
  //     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
  //   },
  //   {
  //     img: require("../../Assets/images/card/c-2.png"),
  //     title: "Lorem ipsum dolor sit amet.",
  //     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
  //   },
  //   {
  //     img: require("../../Assets/images/card/c-3.png"),
  //     title: "Lorem ipsum dolor sit amet.",
  //     desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, fugased. Aliquam.",
  //   },
  // ];

  const params = useParams()
  const {projectdata} = require(`../../Assets/data/${params.name}`) 

  return (
    <div className="Details__container">
      <div className="projectDetails__top">
        <div className="blogDetails__title">
          <div>
            <p className="blogDetails__tilte_text">{projectdata.name}</p>
          </div>
          <div>
            <p className="projectDetails__para_text">
              {projectdata.date}
            </p>
          </div>
        </div>
      </div>
      <div className="projectdetails_text_card_box">
        <div className="details__text_1">
          <p className="details_para">{projectdata.paragraphText.p1}</p>
          <br />
          <p className="details_para">{projectdata.paragraphText.p2}</p>
        </div>
        <div className="details__text_card">
          <div className="project_details_card_title">
            <h1>Project done by</h1>
          </div>
          <div className="project_details_card_box">
              {projectdata.creatorData.map((data,index) => (
                <Creator img={data.img} name={data.name} role={data.role}/>
              ))}
          </div>
        </div>
      </div>
      <div className="projectdetails_mid_img">
        <img src={projectdata.projectDetailsImg} alt="" />
      </div>
      <div className="details__text">
        <p className="details_para">{projectdata.paragraphText.p3}</p>
        <br />
        <p className="details_para">{projectdata.paragraphText.p4}</p>
        <br />
        <p className="details_para">{projectdata.paragraphText.p5}</p>
        <br />
        <p className="details_para">{projectdata.paragraphText.p6}</p>
      </div>
      {/* <div className="details_heading_box">
        <h1 className="details_heading">Other Similar Projects</h1>
      </div>
      <div className="Details_card" style={{ marginBottom: "1rem" }}>
        {projectData.map((data, id) => {
          return <Card data={data} key={id} width="360px" height="360px"/>;
        })}
      </div> */}
    </div>
  );
};

export default ProjectDetails;
