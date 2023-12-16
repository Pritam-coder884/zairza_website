import React from "react";
import "../../styles/blog_project_details.scss";
import Card from "../../Components/Card/Card";
import DetailsMidImg from "../../Assets/images/details_img.png"

const BlogDetails = () => {
  const DetailsCardImage = [
    {
      detailNo: 1,
      img: require("../../Assets/images/blogs-details-img-1.png"),
      title: "Gunjan Giri",
      desc: "Coordinator",
    },
  ];

  const blogData = [
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
      <div className="blogDetails__top">
        <div className="blogDetails__title">
          <div>
            <p className="blogDetails__tilte_text">A long Title of the blog</p>
          </div>
          <div>
            <p className="blogDetails__tilte_text">appears here</p>
          </div>
        </div>
      </div>
      <div className="details_text_card_box">
        <div className="details__text_1">
          <p className="details_para">{paragraphText.p1}</p>
          <br/>
          <p className="details_para">{paragraphText.p2}</p>
        </div>
        <div className="details__text_card">
          {DetailsCardImage.map((details, id) => {
            return <Card data={details} key={id} />;
          })}
        </div>
      </div>
      <div className="details_mid_img">
        <img src={DetailsMidImg} alt="" />
      </div>
      <div className="details__text">
        <p className="details_para">{paragraphText.p3}</p>
        <br/>
        <p className="details_para">{paragraphText.p4}</p>
        <br/>
        <p className="details_para">{paragraphText.p5}</p>
        <br/>
        <p className="details_para">{paragraphText.p6}</p>
      </div>
      <div className="details_heading_box">
        <h1 className="details_heading">Other Similar Blogs</h1>
      </div>
      <div className="Details_card" style={{ marginBottom: "1rem" }}>
        {blogData.map((data, id) => {
          return <Card data={data} key={id} width="360px" height="360px"/>;
        })}
      </div>
    </div>
  );
};

export default BlogDetails;
