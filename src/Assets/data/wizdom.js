import projectDetailsImg from "../images/project-detail/wizdom.jpg";
import projectDetailsCardImg from "../../Assets/images/blogs-details-img-1.png";

export const projectdata = {
    name : "Wizdom",
    date : "20th December 2023",
    projectDetailsImg : projectDetailsImg,
    creatorData: [
        {
            img: projectDetailsCardImg,
            name: "Ashish Mohapatra",
            role: "Leader",
        },
        {
            img: projectDetailsCardImg,
            name: "Aadyasha Sahoo",
            role: "Member",
        },
        {
            img: projectDetailsCardImg,
            name: "Pratik Agarwal",
            role: "Member",
        },
    ],
    paragraphText: {
        p1: "Wizdom is a new mobile application that aims to make the journey of learning and education more straightforward and user-friendly. The app is specifically designed to help school and college tutors, as well as all educators who are willing to impart knowledge.",

        p2: "With the online education market in India worth $247 million USD in 2016 and expected to reach approximately $1.96 billion USD by 2024, it's clear that the majority of education is being transmitted online and is proving to be efficient. However, we believe that we can make this process of gaining education even easier by addressing some of the complications faced by both tutors and students during online education. One of the features of Wizdom is the ability for students to ask questions at a particular time stamp, where the teacher will be notified and provide a solution. If any students cross through that time stamp later, they will be shown the doubt as well as the solution provided by the teacher. This feature eliminates the need for students to take screenshots of their online lectures and then struggle to find them later.",

        p3: "",

        p4: "Wizdom also includes a centralized database to help students find related topics and videos with ease. They can comfortably find the interconnected chapters under the related section, making it easy to find what they need. Additionally, the app includes a feature where students will be notified the day before a deadline to make sure they submit their work on time.",

        p5: "The app also includes a feature where the educator can maintain a list of students along with their name and registration number. Only students on this list will be able to access the class, making it easy for educators to keep track of who is attending their class. The educator can also import a CSV file with the names, email IDs, registration numbers, and other required details of the students.",

        p6: "Wizdom also uses Firebase Cloud Messaging to remind students about upcoming submissions and deadlines. The educator can upload an assignment on their profile and each student will be notified accordingly and reminded once before the deadline.The user interface of Wizdom is designed to be friendly and easy to operate, so users will not face any issues while using the application. This app was developed using Flutter and Firebase.",
    },
}