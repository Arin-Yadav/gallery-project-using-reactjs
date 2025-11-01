import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div>
          <div className="h-60 w-70 rounded-2xl overflow-hidden ">
            <img
              className="h-full w-full object-cover"
              src={props.elem.download_url}
              alt="images"
            />
          </div>
          <h2 className="text-xl font-bold">{props.elem.author}</h2>
        </div>
      </a>
    </div>
  );
};

export default Card;
