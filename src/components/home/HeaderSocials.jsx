import React from 'react';

const HeaderSocials = () => {
  return (
    <div className="home__social">
      <a href="https://www.instagram.com/yourusername" className="home__social-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a href="https://github.com/yourusername" className="home__social-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>

      <a href="https://www.linkedin.com/in/yourusername" className="home__social-link" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
}

export default HeaderSocials;
