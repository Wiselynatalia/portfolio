import "./App.css";
import bgimg from "./Img/pinkbg.png";

function Blog() {
  return (
    <div>
      <div className="Title">
        <img src={bgimg} alt="bgimg" />
        <div className="text-on-image">
          <div className="head-lg">My Blogs</div>
          <i style={{ color: "gray" }}>
            {" "}
            A glimpse of my thoughts, opinions and experiences
          </i>
        </div>
      </div>
      <div className="head" style={{ paddingTop: "3rem" }}>
        {" "}
        Technology
      </div>

      <div className="box pink"> </div>
      <div className="hrow">
        <div className="thumbnail gpink"> Design</div>
        <div className="thumbnail gpink"> Cloud</div>
        <div className="thumbnail gpink"> Web-Dev </div>
      </div>

      <div className="head" style={{ paddingTop: "3rem" }}>
        {" "}
        Travel
      </div>

      <div className="box pink"> </div>
      <div className="hrow">
        <div className="thumbnail gpink"> Food </div>
        <div className="thumbnail gpink"> Nature </div>
        <div className="thumbnail gpink"> Places </div>
      </div>
    </div>
  );
}

export default Blog;
