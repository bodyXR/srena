import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

import tall from "../assets/tall.png";
import car from "../assets/car.png";
import bus from "../assets/bus.png";

const Imgs = () => {
  return (
    <Stack
      className="pb-4  mt-5  imgs__section "
      direction="horizontal"
      gap={2}
      style={{ alignItems: "flex-start" }}
    >
      <div
        className="mt-3 mt-lg-5 "
        style={{ width: "40%", textAlign: "right", marginTop: "50px" }}
      >
        <Image src={car} style={{ width: "100%", marginBottom: "8px" }} />
        <Image src={bus} style={{ width: "85%" }} />
      </div>
      <div style={{ flex: 1 }}>
        <Image src={tall} style={{ width: "100%" }} className=" img" />
      </div>
    </Stack>
  );
};

export default Imgs;
