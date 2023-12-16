import projectDetailsImg from "../images/project-detail/harv.jpg";
import projectDetailsCardImg from "../../Assets/images/blogs-details-img-1.png";

export const projectdata = {
    name : "Harv",
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
            name: "Harshit Patro",
            role: "Member",
        },
        {
            img: projectDetailsCardImg,
            name: "Pratik Agarwal",
            role: "Member",
        },
        {
            img: projectDetailsCardImg,
            name: "Jyoti Nanda",
            role: "Member",
        },
    ],
    paragraphText: {
        p1: "The proposed system aims to address the issue of untimely death of saplings planted across Odisha due to lack of care and maintenance. The system will monitor the growth of the planted saplings based on different parameters obtained through sensors and maintain a database of the following to check the growth and status of the sapling regularly.",

        p2: "The system will have a threshold value range for every set of areas, which will be calculated using ideal conditions like temperature, humidity, pH, moisture content, etc that are appropriate for plant growth in the particular area. If the plants score is within the threshold value then it is growing properly, otherwise an alert is initiated and sent to the organization who planted the sapling, that the sapling is not meeting the necessary requirements and needs care.",

        p3: "The system will use Google Maps to locate the planted saplings and create a database of such saplings/trees with geo-spatial references. It will also track the real-time status of the sapling (whether they have grown, need watering, manure, etc.). When the sapling does not fall within the threshold value range of a factor(humidity, moisture, height, sunlight, pH), an alert is initiated and sends a notification to the organization who planted the sapling, that the particular sapling needs care and is not meeting the requirements.",

        p4: "The system will also have a feature for the user to view the recently planted saplings and the alerts they have received. The user will also be able to add details of a new plantation and fill a form which will automatically collect the geo-spatial data and other information entered by the user, which will be stored in the database.The system will use Kalman filters to optimally estimate the variables of interests when they can't be measured directly, but an indirect measurement is available. They are also used to find the best estimate of states by combining measurements from various sensors in the presence of noise.",

        p5: "The system will use the ESP 32 to transmit the data from the sensors to the server to update the database to monitor the various parameters that affect the growth of the plant. It will also use Flutter to develop cross-platform applications for Android from a single codebase.",

        p6: "Overall, this system will help the planters to keep a check on the status of the sapling that they have planted remotely and alert them if the plant needs attention and care in any way so that necessary actions can be taken to successfully grow plants and trees at a significant number. The saplings will get attention and protection against various biotic and abiotic factors, and the proper database regarding all the details of the plant and the geo-spatial will help to keep a record of all the locations in which saplings have been planted.",
    },
}