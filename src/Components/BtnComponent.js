import React from 'react';

const BtnComponent = (props) => {
  return (
    <div>
      <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.start}>START</button>
    </div>
  );
}

export default BtnComponent;
