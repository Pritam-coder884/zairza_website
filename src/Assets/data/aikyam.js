import projectDetailsImg from "../images/project-detail/aikyam.png";
import projectDetailsCardImg from "../../Assets/images/blogs-details-img-1.png";

export const projectdata = {
    name : "Aikyam",
    date : "20th December 2023",
    projectDetailsImg : projectDetailsImg,
    creatorData: [
        {
            img: projectDetailsCardImg,
            name: "Pritam Kumar Dash",
            role: "Leader",
        },
        {
            img: projectDetailsCardImg,
            name: "Anshuman Tripathy",
            role: "Member",
        },
        {
            img: projectDetailsCardImg,
            name: "Alok Ranjan Joshi",
            role: "Member",
        },
        {
            img: projectDetailsCardImg,
            name: "Aatish Kumar Maharana",
            role: "Member",
        },
    ],
    paragraphText: {
        p1: "Educational institutions do not have the infrastructure to track their Alumni and facilitate alumni interaction. Every year when students graduate from different institutions, some of them register as alumni, however, there is no single platform for them to register, network, and communicate among themselves as well as with their alma mater.Even if there is platform in some institutions have the platform not every institution have these portal. There is no proper communication between Alumni and students.  Institutions are unable to maintain database of Alumni and contact them on important events.",

        p2: "We have made a single platform AIKYAM in which both Alumni and students can register them connect with each other with many other unique features.It provides every institution a platform the increase interaction of Alumni, students and Institutions.The effect of our solution can me measured by number of alumni and students use our platform and how it will help them and keep them engaged to the college even after passing out of the institution.We are using MERN Stack which includes MongoDB, Express JS, React JS and Node JS. For frontend we are using React with Material UI Framework and basic HTML, CSS and for backend we have used MongoDB database and for authentication we have used Firebase.",

        p3: "As we wanted to make a web portal, we using MERN stack for the development of frontend and backend of web app. Material UI is easy to use and provides responsiveness in its components so we have used it for the frontend and MongoDB provides simple free database for storing data.Once the user registers in the platform everything will be contacted to Alumni and Students through mail. Its quite easy to use and user friendly platform which provides many features like Job posting/opportunity, Event organising, Yearly reunion meet, Newsletter, Success stories etc.",

        p4: "Students can search Alumni and can get the details about them and get connected using their social media platform or can directly chat to them using our portal. Chat features is implemented in our website using SocketIO. ",

        p5: "Students can get to know about available jobs which are posted by the alumni.Alumni and Students can get to know about the events that are being organised at the institution.Students can search alum of their field on interest and connect with them.Gallery page can be accessed where students and alums can check the images of their institutions.",

        p6: `Hosted link - https://soh-aikyam.netlify.app`,
    },
}