import React from "react";
import { Container, Navbar, Image } from "react-bootstrap";

import android from "../assets/black.png";
import apple from "../assets/white.png";

const Head = () => {
  return (
    <Navbar style={{ backgroundColor: "#FCF3F4" }} className="pt-3 pb-3">
      <Navbar.Brand style={{ color: "#B5153A" }} className="fs-2 fw-bold">
        Srenaسرينا
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Image src={apple} className="pe-1" style={{ width: "30px" }} />
        <Navbar.Text
          className="border-end border-3 border-dark text-dark pe-2"
          style={{ fontSize: "12px" }}
        >
          on app store
        </Navbar.Text>

        <Image src={android} className="pe-1 ps-2" style={{ width: "39px" }} />
        <Navbar.Text className="text-dark" style={{ fontSize: "12px" }}>
          on play store
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Head;
