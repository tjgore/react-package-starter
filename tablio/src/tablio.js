import React, { useState } from 'react';
import './app.css';

const Tablio = () => {

  const [show, setShow] = useState({ text: 'Hide', state: true});

  const handleClick = () => {
    setShow({
      text: !show.state ? 'Hide' : 'Show',
      state: !show.state
    })
  }

  return (
    <div className="background">
      {show.state && <h1>Tablio Test21</h1>}
      <button onClick={handleClick} type="button">{show.text}</button>
    </div>
  );
}

export default Tablio; 