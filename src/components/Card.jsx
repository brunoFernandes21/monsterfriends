import React from "react"

const Card = ({id, name, email }) => {

  return (
    <div className="bg-light-blue tc dib br3 pa3 ma2 grow bw2 shadow-5 pointer">
      <img src={`https://robohash.org/${id}?set=set2`} width={300} height={300}  alt="robots" />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
