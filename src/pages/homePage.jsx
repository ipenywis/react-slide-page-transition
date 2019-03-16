import React from "react";

import "./homePageStyle.scss";

import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="page-container page">
        <div className="home-page inner-container">
          <div className="welcome-container">Hello From the Home Page</div>
          <div className="navigate">
            <Link to="/about">
              <button className="btn">Translate to Next Page</button>
            </Link>
          </div>
          <div className="our-story">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea
            dictumst quisque sagittis purus sit amet volutpat. Est ultricies
            integer quis auctor elit sed vulputate mi. Venenatis cras sed felis
            eget. Dolor sit amet consectetur adipiscing elit duis tristique
            sollicitudin nibh. Sit amet luctus venenatis lectus magna. Risus nec
            feugiat in fermentum posuere urna nec tincidunt praesent. Risus sed
            vulputate odio ut enim blandit volutpat maecenas volutpat. Purus sit
            amet luctus venenatis lectus magna fringilla urna. Non consectetur a
            erat nam at lectus urna duis convallis. Et netus et malesuada fames
            ac. Ac feugiat sed lectus vestibulum mattis ullamcorper. Amet cursus
            sit amet dictum sit amet justo donec enim. Pellentesque massa
            placerat duis ultricies lacus. Sagittis id consectetur purus ut
            faucibus pulvinar elementum. Leo in vitae turpis massa. Blandit
            massa enim nec dui nunc mattis enim. Nullam ac tortor vitae purus
            faucibus. Pharetra pharetra massa massa ultricies mi quis hendrerit.
            Mus mauris vitae ultricies leo integer malesuada nunc vel. Pretium
            fusce id velit ut tortor pretium viverra suspendisse. Vestibulum
            lorem sed risus ultricies tristique nulla aliquet enim tortor.
            Pretium quam vulputate dignissim suspendisse in est ante in. Neque
            vitae tempus quam pellentesque nec nam aliquam. Morbi quis commodo
            odio aenean sed adipiscing diam donec. Viverra accumsan in nisl nisi
            scelerisque eu. Condimentum lacinia quis vel eros donec ac. Dolor
            morbi non arcu risus quis varius.
          </div>
          <h2 />
        </div>
      </div>
    );
  }
}
