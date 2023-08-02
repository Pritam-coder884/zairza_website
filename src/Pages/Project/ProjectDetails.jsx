import React from "react";
import Card from "../../Components/Card/Card";
import "../../styles/blog_project_details.scss";
import projectDetailsImg from "../../Assets/images/project-details.png";
import projectDetailsCardImg from "../../Assets/images/blogs-details-img-1.png";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

const ProjectDetails = () => {
  const projectData = [
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
  const paragraphText = {
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi totam voluptates autem, corporis ea ipsum debitis repudiandae impedit hic! Reiciendis quo quia perspiciatis ipsam natus velit, aliquam inventore laborum delectus nemo architecto explicabo saepe ullam expedita eveniet accusantium vel similique dolor dolorum? Optio, officiis similique! Expedita nihil libero eaque sit magnam cupiditate, ex minima corporis necessitatibus. Exercitationem ea voluptas aliquam maiores ullam tenetur facere debitis laudantium ex dolor architecto, officia blanditiis neque tempora a eaque quos earum nisi perspiciatis.",

    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi totam voluptates autem, corporis ea ipsum debitis repudiandae impedit hic! Reiciendis quo quia perspiciatis ipsam natus velit, aliquam inventore laborum delectus nemo architecto explicabo saepe ullam expedita eveniet accusantium vel similique dolor dolorum? Optio, officiis similique! Expedita nihil libero eaque sit magnam cupiditate, ex minima corporis necessitatibus. Exercitationem ea voluptas aliquam maiores ullam tenetur facere debitis laudantium ex dolor architecto, officia blanditiis neque tempora a eaque quos earum nisi perspiciatis.",

    p3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi totam voluptates autem, corporis ea ipsum debitis repudiandae impedit hic! Reiciendis quo quia perspiciatis ipsam natus velit, aliquam inventore laborum delectus nemo architecto explicabo saepe ullam expedita eveniet accusantium vel similique dolor dolorum? Optio, officiis similique! Expedita nihil libero eaque sit magnam cupiditate, ex minima corporis necessitatibus. Exercitationem ea voluptas aliquam maiores ullam tenetur facere debitis laudantium ex dolor architecto, officia blanditiis neque tempora a eaque quos earum nisi perspiciatis.",

    p4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi totam voluptates autem, corporis ea ipsum debitis repudiandae impedit hic! Reiciendis quo quia perspiciatis ipsam natus velit, aliquam inventore laborum delectus nemo architecto explicabo saepe ullam expedita eveniet accusantium vel similique dolor dolorum? Optio, officiis similique! Expedita nihil libero eaque sit magnam cupiditate, ex minima corporis necessitatibus. Exercitationem ea voluptas aliquam maiores ullam tenetur facere debitis laudantium ex dolor architecto, officia blanditiis neque tempora a eaque quos earum nisi perspiciatis.",

    p5: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi totam voluptates autem, corporis ea ipsum debitis repudiandae impedit hic! Reiciendis quo quia perspiciatis ipsam natus velit, aliquam inventore laborum delectus nemo architecto explicabo saepe ullam expedita eveniet accusantium vel similique dolor dolorum? Optio, officiis similique! Expedita nihil libero eaque sit magnam cupiditate, ex minima corporis necessitatibus. Exercitationem ea voluptas aliquam maiores ullam tenetur facere debitis laudantium ex dolor architecto, officia blanditiis neque tempora a eaque quos earum nisi perspiciatis.",

    p6: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi totam voluptates autem, corporis ea ipsum debitis repudiandae impedit hic! Reiciendis quo quia perspiciatis ipsam natus velit, aliquam inventore laborum delectus nemo architecto explicabo saepe ullam expedita eveniet accusantium vel similique dolor dolorum? Optio, officiis similique! Expedita nihil libero eaque sit magnam cupiditate, ex minima corporis necessitatibus. Exercitationem ea voluptas aliquam maiores ullam tenetur facere debitis laudantium ex dolor architecto, officia blanditiis neque tempora a eaque quos earum nisi perspiciatis.",
  };
  return (
    <div className="Details__container">
      <div className="projectDetails__top">
        <div className="blogDetails__title">
          <div>
            <p className="blogDetails__tilte_text">Project Name</p>
          </div>
          <div>
            <p className="projectDetails__para_text">
              20 March 2023, 1 day ago
            </p>
          </div>
        </div>
      </div>
      <div className="projectdetails_text_card_box">
        <div className="details__text_1">
          <p className="details_para">{paragraphText.p1}</p>
          <br />
          <p className="details_para">{paragraphText.p2}</p>
        </div>
        <div className="details__text_card">
          <div className="project_details_card_title">
            <h1>Project done by</h1>
          </div>
          <div className="project_details_card_box">
            <div className="project_details_card">
              <div className="project_details_card_img">
                <img src={projectDetailsCardImg} alt="" />
              </div>
              <div style={{ padding:"1rem 0.5rem" }}>
                <div>
                  <p style={{ fontSize: "14px" }}>Gunjan Giri</p>
                </div>
                <div className="project_card_icon_text_wrapper">
                  <div>
                    <p style={{ fontSize: "12px" }}>Coordinator</p>
                  </div>
                  <button className="project_card__desc_icon">
                    <MailOutlineRoundedIcon
                      style={{ fontSize: "1rem", color: "white" }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="project_details_card">
            <div className="project_details_card_img">
                <img src={projectDetailsCardImg} alt="" />
              </div>
              <div style={{ padding:"1rem 0.5rem" }}>
                <div>
                  <p style={{ fontSize: "14px" }}>Gunjan Giri</p>
                </div>
                <div className="project_card_icon_text_wrapper">
                  <div>
                    <p style={{ fontSize: "12px" }}>Coordinator</p>
                  </div>
                  <button className="project_card__desc_icon">
                    <MailOutlineRoundedIcon
                      style={{ fontSize: "1rem", color: "white" }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="project_details_card">
            <div className="project_details_card_img">
                <img src={projectDetailsCardImg} alt="" />
              </div>
              <div style={{ padding:"1rem 0.5rem" }}>
                <div>
                  <p style={{ fontSize: "14px" }}>Gunjan Giri</p>
                </div>
                <div className="project_card_icon_text_wrapper">
                  <div>
                    <p style={{ fontSize: "12px" }}>Coordinator</p>
                  </div>
                  <button className="project_card__desc_icon">
                    <MailOutlineRoundedIcon
                      style={{ fontSize: "1rem", color: "white" }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="project_details_card">
            <div className="project_details_card_img">
                <img src={projectDetailsCardImg} alt="" />
              </div>
              <div style={{ padding:"1rem 0.5rem" }}>
                <div>
                  <p style={{ fontSize: "14px" }}>Gunjan Giri</p>
                </div>
                <div className="project_card_icon_text_wrapper">
                  <div>
                    <p style={{ fontSize: "12px" }}>Coordinator</p>
                  </div>
                  <button className="project_card__desc_icon">
                    <MailOutlineRoundedIcon
                      style={{ fontSize: "1rem", color: "white" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projectdetails_mid_img">
        <img src={projectDetailsImg} alt="" />
      </div>
      <div className="details__text">
        <p className="details_para">{paragraphText.p3}</p>
        <br />
        <p className="details_para">{paragraphText.p4}</p>
        <br />
        <p className="details_para">{paragraphText.p5}</p>
        <br />
        <p className="details_para">{paragraphText.p6}</p>
      </div>
      <div className="details_heading_box">
        <h1 className="details_heading">Other Similar Projects</h1>
      </div>
      <div className="Details_card" style={{ marginBottom: "1rem" }}>
        {projectData.map((data, id) => {
          return <Card data={data} key={id} width="360px" />;
        })}
      </div>
    </div>
  );
};

export default ProjectDetails;
