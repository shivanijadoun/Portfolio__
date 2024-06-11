import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import download from '../assets/img/Download.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center justify-content-center">
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline text-center">Welcome to my Portfolio</span>
                <h1 className="text-center">
                  {`Hi! I'm Shivani`} 
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer", "Web Designer", "UI/UX Designer"]'>
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p className="text-center">A creative individual with a passion for crafting extraordinary digital experiences. With an insatiable curiosity and a relentless drive to learn, I constantly explore new technologies and techniques to elevate my projects.Together, let's turn imagination into innovation!</p>
              </div>
            }
          </TrackVisibility>
        </Row>
        <div className="banner-txt">
          <a href="https://drive.google.com/file/d/1bqWMweWjekRkDdxOd9CHawnrROX1RIiz/view" target="_blank" rel="noopener noreferrer">
            <button className="bann vvd1">
              <div>My Resume</div>
              <div><img src={download} alt="Download" /></div>
            </button>
          </a>
          <a href="mailto:shivanirana0080@gmail.com" target="_blank" rel="noopener noreferrer">
            <button className="bann vvd2">
              <div>Contact me</div>
            </button>
          </a>
        </div>
      </Container>
    </section>
  );
}
