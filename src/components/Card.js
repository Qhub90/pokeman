import React from "react";

const Card = ({name,weight, height, types, img}) => {
  console.log('Cards.js',name,' ', height,' ', types[0].type.name, types[1].type.name)
  const pokeType= types.map

  return (
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-3'>
      <div className='name-type'>,
       <h2>{name}</h2>
       <p>{`${types[0].type.name}/${types[1].type.name}`}</p>
      </div>
      <div className='image'>
      <img alt='robots' src={img} />
      </div>
      <div className='fav-move'>
        <h3>Ember</h3>
      </div>
      <div className='summary'>        
        <p>{height}</p>
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