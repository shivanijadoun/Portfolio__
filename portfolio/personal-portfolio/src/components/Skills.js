import c1logo from "../assets/img/C++.png";
import python from "../assets/img/python.svg";
import c2logo from "../assets/img/C_Logo.png";
import dsa from "../assets/img/dsa.svg";
import reactjs from "../assets/img/React.svg";
import nextjs from "../assets/img/nextjs.svg";
import html from "../assets/img/html2.svg";
import css from "../assets/img/css.svg";
import mysql from "../assets/img/Mysql.svg";
import javascript from "../assets/img/javascript.svg";
import tailwind from "../assets/img/tailwind.svg";
import expressjs from "../assets/img/express.svg";
import mongodb from "../assets/img/mongodb.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Equipped with a versatile skill set, I excel in MERN and web development, breathing life into digital landscapes through HTML, CSS, and JavaScript. My proficiency extends to crafting dynamic front-end interfaces and robust back-end solutions. Together, we can turn ideas into impactful realities</p>
              <div className="items">
                <div className="item">
                  <img src={c1logo} alt="C++" />
                  <div className="item-text">C++</div>
                </div>
                <div className="item">
                  <img src={c2logo} alt="C++" />
                  <div className="item-text">C++</div>
                </div>
                <div className="item">
                  <img src={python} alt="Python" />
                  <div className="item-text">Python</div>
                </div>
                <div className="item">
                  <img src={reactjs} alt="Reactjs" />
                  <div className="item-text">Reactjs</div>
                </div>
                <div className="item">
                  <img src={mongodb} alt="MongoDb" />
                  <div className="item-text">MongoDb</div>
                </div>
                <div className="item">
                  <img src={nextjs} alt="Nextjs" />
                  <div className="item-text">Nodejs</div>
                </div>
                <div className="item">
                  <img src={html} alt="HTML" />
                  <div className="item-text">HTML</div>
                </div>
                <div className="item">
                  <img src={css} alt="CSS" />
                  <div className="item-text">CSS</div>
                </div>
                <div className="item">
                  <img src={javascript} alt="JavaScript" />
                  <div className="item-text">JavaScript</div>
                </div>
                <div className="item">
                  <img src={tailwind} alt="tailwind" />
                  <div className="item-text">Tailwind</div>
                </div>
                <div className="item">
                  <img src={mysql} alt="MySQL" />
                  <div className="item-text">MySQL</div>
                </div>
                <div className="item">
                  <img src={expressjs} alt="Express.js" />
                  <div className="item-text">Express.js</div>
                </div>
                <div className="item">
                  <img src={dsa} alt="Express.js" />
                  <div className="item-text">DSA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
