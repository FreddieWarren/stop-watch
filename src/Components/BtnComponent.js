import React from 'react';

const BtnComponent = (props) => {
  return (
    <div>
      {(props.status === 0) ?
        <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.start}>START</button> : ""
      }

      {(props.status === 1) ?
        <div>
          <button className="stopwatch-btn stopwatch-btn-red" onClick={props.stop}>STOP</button>
          <button className="stopwatch-btn stopwatch-btn-yel" onClick={props.reset}>Reset</button>
        </div> : ""
      }
      {(props.status === 2) ?
        <div>
          <button className="stopwatch-btn stopwatch-btn-gre" onClick={props.resume}>Resume</button>
          <button className="stopwatch-btn stopwatch-btn-yel" onClick={props.reset}>Reset</button>
        </div> : ""
      }


    </div>
  );
}

export default BtnComponent;
