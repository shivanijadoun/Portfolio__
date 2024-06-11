import React from 'react';
import { Col } from "react-bootstrap";
import codeIcon from '../assets/img/Code.svg'; // Adjust the path to your SVG file
import Live from '../assets/img/Live.svg'; // Adjust the path to your SVG file

export const ProjectCard = ({ title, description, imgUrl,liveUrl,sourceUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        <div className="navbar-txt">
          <button className="source vvd1">
            <a href={liveUrl}>Live Project</a>
            <div><img src={codeIcon} alt="Live Project" /></div>
          </button>
          <button className="source vvd2">
            <a href={sourceUrl}>Source code</a>
            <div><img src={Live} alt="Source code" /></div>
          </button>
        </div>
      </div>
    </Col>
  );
};
