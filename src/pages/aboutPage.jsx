import React from "react";
import { Link } from "react-router-dom";

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="page-container page">
        <div className="about-page inner-container">
          <div className="our-story">
            I'm Islem Maboud a Full Stack Web Developer and a Tutorials Maker at
            Youtube and Ipenywis.com love exploring new things and creating Open
            source projects
            <p>
              For more info about the Open Source project like the
              ButterflyEditor or for Bussiness Inqueries I'm always welcoming
              your Emails and Messages and I will be very happy to have a chat
              with you.
            </p>
          </div>
          <div className="navigation">
            <Link to="/">
              <button className="btn">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
