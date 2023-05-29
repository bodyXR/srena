import React from "react";
import { Col, Container, Image } from "react-bootstrap";

import way from "../assets/way.png";
import box from "../assets/box.png";

const Way = () => {
  return (
    <div
      className="d-flex flex-wrap justify-content-center mt-3 position-relative "
      style={{
        backgroundImage: `url(${way})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <Image
        className="position-absolute  "
        src={box}
        style={{
          width: "102px",
          height: "99px",
          bottom: "-35px",
          right: "-20px",
        }}
      />
    </div>
  );
};

export default Way;
