
import './About.css';
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";


const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)} } />
      </div>
      <div className="about-right">
         <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Our university is committed to providing a holistic educational
          experience that goes beyond traditional academics. We believe in
          fostering a culture of innovation, critical thinking, and social
          responsibility. 
        </p>
        <p>
          As a hub of intellectual curiosity, our university offers a wide range
          of programs that cater to various interests and aspirations. From the
          sciences to the arts, and from technology to humanities, our
          curriculum is designed to challenge and inspire. 
        </p>
        <p>
          Our campus is a vibrant community where students can engage in
          numerous extracurricular activities, including clubs, sports, and
          volunteer work. These opportunities not only enrich the student
          experience but also help develop leadership, teamwork, and
          communication skills. 
        </p>
      </div>
    </div>
  );
};

export default About;
