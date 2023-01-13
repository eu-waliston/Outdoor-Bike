import React from "react";
import "./content.css";

const Content = () => {
  return (
    <div className="blue__circle">
      <h1 className="content__h1">
        outdor <span>sport</span>
      </h1>
      <p className="content__p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut
        ex, quam laboriosam veritatis modi nihil possimus omnis ducimus rerum,
        placeat, consequuntur quibusdam maiores natus neque asperiores sint
        magnam optio!
      </p>

      <button className="content__btn">
          join now
      </button>
    </div>
  );
};
export default Content;
