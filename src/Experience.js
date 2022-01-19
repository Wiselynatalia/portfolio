import jpm from "./Img/jpm.png";
import aws from "./Img/aws.png";
import bear from "./Img/bear.png";
import hkie from "./Img/hkie.png";
import toast from "./Img/toast.png";
import ccn from "./Img/ccn.png";
import dsc from "./Img/dsc.png";

function Experience() {
  return (
    <div className="Experience">
      <a id="work">
        <div className="head"> My Experience</div>
      </a>
      <div className="box"> </div>
      <i class="arrow up"></i>
      <div className="vl"></div>
      <div className="Exp-content">
        <div className="grid-container">
          {/* JPM */}
          <div className="logo">
            {" "}
            <img src={jpm} alt="JPM" />
          </div>

          <div className="dot">
            {" "}
            <div className="idot"> </div>
          </div>

          <div className="lright">
            <div className="duration">
              <p>03/2022 - present</p>
              <div className="hl"> </div>
            </div>

            <div className="sdot"> </div>
          </div>

          <div className="role">
            <b>J.P.Morgan Chase, Hong Kong </b>
            <br />
            Software Engineer Associate
          </div>

          {/* AWS */}
          <div className="logo">
            {" "}
            <img src={aws} alt="AWS" style={{ width: "90px" }} />
          </div>

          <div className="dot">
            {" "}
            <div className="idot"> </div>
          </div>

          <div className="lright">
            <div className="duration">
              <p>05/2021 - 08/2021</p>
              <div className="hl"> </div>
            </div>

            <div className="sdot"> </div>
          </div>
          <div className="role">
            <b> Amazon Web Services, Indonesia </b>
            <br />
            Solutions Architect Intern
          </div>

          {/* Right */}
          <div className="logo">
            {" "}
            <img src={hkie} alt="HKIE" style={{ width: "200px" }} />
          </div>

          <div className="dot">
            {" "}
            <div className="idot"> </div>
          </div>

          <div className="lright">
            <div className="duration">
              <p>09/2020 - 06/2021</p>
              <div className="hl"> </div>
            </div>

            <div className="sdot"> </div>
          </div>
          <div className="role">
            <b> Hong Kong Institute of Engineers </b>
            <br />
            Deputy Chairman of CUHK Student Chapters
          </div>

          {/* Right */}
          <div className="logo">
            {" "}
            <img src={toast} alt="NATM" style={{ width: "100px" }} />
          </div>

          <div className="dot">
            {" "}
            <div className="idot"> </div>
          </div>

          <div className="lright">
            <div className="duration">
              <p>09/2020 - 03/2021</p>
              <div className="hl"> </div>
            </div>

            <div className="sdot"> </div>
          </div>
          <div className="role">
            <b> New Asia Toastmasters Club </b>
            <br />
            Vice President of Education, CUHK
          </div>

          {/* Right */}
          <div className="logo">
            {" "}
            <img src={bear} alt="Bearlyfe" style={{ width: "130px" }} />
          </div>

          <div className="dot">
            {" "}
            <div className="idot"> </div>
          </div>

          <div className="lright">
            <div className="duration">
              <p>06/2020 - 09/2020</p>
              <div className="hl"> </div>
            </div>

            <div className="sdot"> </div>
          </div>
          <div className="role">
            <b> BearLyfe, Hong Kong </b>
            <br />
            Operations and Technology Intern
          </div>

          {/* Right */}
          <div className="logo">
            {" "}
            <img src={ccn} alt="CCN" style={{ width: "90px" }} />
          </div>

          <div className="dot">
            {" "}
            <div className="idot"> </div>
          </div>

          <div className="lright">
            <div className="duration">
              <p>01/2020 - 06/2020</p>
              <div className="hl"> </div>
            </div>

            <div className="sdot"> </div>
          </div>
          <div className="role">
            <b> Cambridge Consulting Network </b>
            <br />
            Student Consultant at CUHK
          </div>

          {/* Right */}
          <div className="logo">
            {" "}
            <img src={dsc} alt="DSC" style={{ width: "90px" }} />
          </div>

          <div className="dot">
            {" "}
            <div className="idot"> </div>
          </div>

          <div className="lright">
            <div className="duration">
              <p>09/2019 - 05/2020</p>
              <div className="hl"> </div>
            </div>

            <div className="sdot"> </div>
          </div>
          <div className="role">
            <b> Google Developer Student Club </b>
            <br />
            Committee and designer
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
