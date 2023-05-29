import React from "react";
import { Container, Image, Button } from "react-bootstrap";

import hi from "../assets/hi.png";
import android from "../assets/android.png";
import apple from "../assets/apple.png";

const Hello = () => {
  return (
    <div className="text-light hello__section">
      <div className="d-flex mt-5">
        <p className="pt-5  pe-2 fs-1 fw-bold">Say</p>
        <img src={hi} style={{ width: "5rem", height: "5.3rem" }} />
        <p className="pt-5  pe-2 fs-1 fw-bold">to Srena</p>
      </div>
      <div>
        <p className=" fs-5">
          The single app that's revolutionizing <br /> internal transportation
          with <br /> environmentally-friendly electric <br /> vehicles (EVs)!{" "}
        </p>
        <p className=" fs-3">Get App</p>
      </div>
      <div>
        <Button variant="dark" className=" pt-0 pt-0  mb-0 mt-0">
          <Image src={apple} className="pe-1 pe-3 d-inline-block" />
          <p className="text-light pt-2 pb-2 mb-0 mt-0 pe-2 d-inline-block">
            on app store
          </p>
        </Button>
        <Button
          variant="dark"
          style={{ marginLeft: "9px" }}
          className="pt-0 pt-0 mb-0 mt-0"
        >
          <Image src={android} className="pe-1  pe-3 d-inline-block" />
          <p className="pt-2 pb-2 mb-0 mt-0 text-light d-inline-block ">
            on play store
          </p>
        </Button>
      </div>
    </div>
  );
};

export default Hello;
