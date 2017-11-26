
import React from 'react';

import './style.css';

const LinkButton = ({ link, text, target }) => (
  <div className="link-button">
    <a href={link} target={target} rel="noopener noreferrer">{text}</a>
  </div>
);

export default LinkButton;