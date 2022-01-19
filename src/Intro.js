import Container from "react-bootstrap/Container";
import { useState } from "react";
import pic from "./Img/foto.png";
import "./App.css";

function Intro() {
  const extraContent = (
    <span>
      {" "}
      excites me! :D
      <br /> <br />
      During my free time, I enjoy cooking and doing outdoor activities like
      hiking and cycling. Watching movies, hanging out with friends and
      exploring different foods are also my weekend comforts. Hit me up if you
      get great recommendations for places and food to explore! <br />
    </span>
  );
  const [readMore, setReadMore] = useState(false);
  const linkName = readMore ? "Read Less ..." : " ... Read More";
  return (
    <div className="Content">
      <Container>
        {" "}
        <div className="Left">
          <div className="head-lg">
            Hi! I'm Wisely. <br /> A Software Engineer.
          </div>
          <div className="content">
            I enjoy exploring new ways to design and develop a solution that
            brings simplicity and adds color to life! Whether it is through code
            or crafting, the opportunity to experiment and be creative
            {readMore && extraContent}
            <a
              className="read-more-link"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {linkName}
            </a>
          </div>
        </div>
        <div className="profpic">
          <img src={pic} alt="My profile" />
        </div>
      </Container>
    </div>
  );
}

export default Intro;
