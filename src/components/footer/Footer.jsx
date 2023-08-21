import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Design Space</span>
            <span>Buying on Design Space</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Design Space</h2>
            <span>Design Space Business</span>
            <span>Design Space Pro</span>
            <span>Design Space Logo Maker</span>
            <span>Design Space Guides</span>
            <span>Get Inspired</span>
            <span>Design Space Select</span>
            <span>ClearVoice</span>
            <span>Design Space Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Design Space</h2>
            <span>© DESIGN AND DEVELOP BY ROHIT BHATU</span>
            <span>CONTACT ME</span>
            <a href="mailto:${bhaturohit549@gmail.com}">E-mail</a>
          </div>
          <div className="right">
            <div className="social">
              {/* <img src="/img/twitter.png" alt="" /> */}
              <Link to='https://www.linkedin.com/in/rohit-bhatu-044aa722a/' target="_blank"><img src="/img/linkedin.png" alt="" /></Link>
              <Link to='https://www.instagram.com/rohit_bhatu_76/' target="_blank" > <img src="/img/instagram.png" alt="" /></Link>
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <span>INR</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
