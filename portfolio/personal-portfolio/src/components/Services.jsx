import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';

function Services() {
  return (
    <section className='services' id='services'>
      <h2 className='heading'>My<span>Services</span></h2>

      <div className="services-container">
        <div className="services-box">
          <FontAwesomeIcon icon={faCode} />
          <h3>Web development</h3>
          <p>I create seamless, integrated digital solutions, from front-end elegance to back-end strength, delivering a complete experience.</p>
          {/* <a href="#" className='btn'>read more</a> */}
        </div>

        <div className="services-box">
          <FontAwesomeIcon icon={faPalette} />
          <h3>UI UX designer</h3>
          <p> craft engaging UI designs that elevate user experiences, blending aesthetics with functionality for digital excellence.</p>
          {/* <a href="#" className='btn'>read more</a> */}
        </div>

        <div className="services-box">
          <FontAwesomeIcon icon={faWindowMaximize} />
          <h3>Frontend development</h3>
          <p>I create responsive, eye-catching websites for an unforgettable online presence. Let's make your vision reality.</p>
          {/* <a href="#" className='btn'>read more</a> */}
        </div>
      </div>
    </section>
  );
}

export default Services;
