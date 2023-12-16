import projectDetailsImg from "../images/project-detail/web-based-music-app.png";
import projectDetailsCardImg from "../../Assets/images/blogs-details-img-1.png";

export const projectdata = {
    name : "Web based Music App",
    date : "20th December 2023",
    projectDetailsImg : projectDetailsImg,
    creatorData: [
        {
            img: projectDetailsCardImg,
            name: "Pritam Kumar Dash",
            role: "Owner",
        },
    ],
    paragraphText: {
        p1: "The primary purpose of the music streaming application is to play music available in the databases of the service, compose custom playlists and suggest similar songs. Everyone likes to play songs and customize songs in their own way.",

        p2: "I have listened music in different platform but mostly I have used Spotify app for listening music because it provides various features like save your own playlists, you can also share the song to your friends through social media platforms , you can connect Spotify to facebook , google accounts. I have thought to make one web based music app in which you can play songs in the website. I have used Spotify-Web-API for fetching of data from my existing Spotify account into the website. The Spotify-Web-API provides client-id, client refresh token to the user after sign in to spotify-web. I have used React js framework for this project and used React hooks , creating Routes and how to authenticate with token. At first I have created one react app and then create necessary routes for routing to each page on click on different sections. Then created the frontend part of the web page and the fetched the necessary data from Spotify-web-API.",

        p3: "",

        p4: "This website was fetched your facebook profile picture after login with the website for this you need to connect your spotify account with facebook. You can see your all saved playlists in your spotify account in the home page of the website. After clicking on the playlists section you can view all the songs and play the songs. The timer in each song will increase as the song is playing . You can play next song as your interest. ",

        p5: "This website overally gives all the features of a music app. You can redirect to any page and all actions were occurred smoothly. Music player system realized the basic function of player: play, pause, rewind and fastforward , volume adjustment is performed through the website Itself, play mode, song search, seekbar. This design of music player based on web based system requires elaborate design of the music player framework.",

        p6: "Through the development of music player on web based platform, we get a clear understanding of overall process of the system. The core part of the music player is mainly composed of main interface, file browsing and song listing, Grasping the development of the music player has had the preliminary scale small features.",
    },
}