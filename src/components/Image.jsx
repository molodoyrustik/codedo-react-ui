import React from 'react';

function Image({ src }) {
  const style = {background: `url(${src})`, backgroundPosition: 'center', backgroundSize: 'cover'};
  return (
    <div className="image" style={style}></div>
  )
}

export default Image;
