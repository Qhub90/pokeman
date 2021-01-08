import React from "react";

const Card = ({name, type, summary}) => {
  return (
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-3'>
      <div className='name-type'>
       <h2>{name}</h2>
       <p>{type}</p>
      </div>
      <div className='image'>
      <img alt='robots' src='https://robohash.org/test' />
      </div>
      <div className='fav-move'>
        <h3>Ember</h3>
      </div>
      <div className='summary'>        
        <p>{summary}</p>
      </div>
      <div className= 'evolution-line'>
        <p>
          Evolution tree may be images
        </p>
      </div>
    </div>
  );
}

export default Card;