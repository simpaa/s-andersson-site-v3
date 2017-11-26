import React from 'react';

const style = {
  maxWidth: '700px',
  margin: '20px auto',
  color: '#4c4c4c',
  padding: '15px',
}

const TextCard = ({ children }) => (
    <article style={style}>
        {children}
    </article>
);

export default TextCard;