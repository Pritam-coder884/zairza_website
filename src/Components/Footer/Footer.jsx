import React from "react";
import "./Footer.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Footer_img from "../../Assets/images/footer_img.png";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
   <div className="footer-container">
     <div className="footer-container_up">
      <div className="footer_img">
      <img src={Footer_img} alt='' className='slide-1-img' />
      </div>
      <div className="footer-container__right">
        <div className="footer-container__right__top">
          <div className="footer-container__title">Something on your mind</div>
          <div className="footer-container__description">
            We will help you with your ideas and turn it into reality
          </div>
        </div>
        <div className="footer-container__right__bottom">
          <div className="footer-container__address">
          <div className="footer_address"><EmailIcon className="footer-address__icons" /><span className="footer_address_content">cet.sac.zairza@gmail.com</span></div>
          <div className="footer_address"><PhoneIcon className="footer-address__icons" /><span className="footer_address_content">+91 9556629345</span></div>
          <div className="footer_address"><LocationOnIcon className="footer-address__icons" /><span className="footer_address_content">OUTR (CET Campus), Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha</span></div>
          </div>
        </div>
      </div>
   </div>
   <hr className="hr_style"/>
      <div className="footer-container_down">
        <div className="footer-container__social_icons">
          <Link to="https://twitter.com/zairza_cetb"><TwitterIcon className="footer-container__icons" /></Link>
        </div>
        <div className="footer-container__social_icons">
          <a href="mailto:cet.sac.zairza@gmail.com"><MailOutlineIcon className="footer-container__icons" /></a>
        </div>
        <div className="footer-container__social_icons">
          <Link to="https://www.instagram.com/zairza.outr/"><InstagramIcon className="footer-container__icons" /></Link>
        </div>
        <div className="footer-container__social_icons">
          <Link to="https://github.com/zairza-cetb"><GitHubIcon className="footer-container__icons" /></Link>
        </div>
      </div>
      <p className="copy_right">@ Zairza Technical Club Pvt. Ltd. 2023. All rights reserved.</p>
    </div>
  );
};

export default Footer;
