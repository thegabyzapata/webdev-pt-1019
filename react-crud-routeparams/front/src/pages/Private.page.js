import React, { useState } from "react";
import homerFace from "../../public/homer_face.jpg";
import lisaFace from "../../public/lisa_face.png";
import { withProtected } from "../../lib/protectRoute.hoc";
import { Card } from "../components/Card";

let images = [homerFace, lisaFace];

const FaceSelector = () => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <img
      src={images[imageIndex]}
      width="100"
      onClick={() => setImageIndex((imageIndex + 1) % images.length)}
    />
  );
};

const Page = () => (
  <div>
    <Card>
      <FaceSelector />
    </Card>
    <Card center cardColor="blue">
      <img
        width="200"
        src="https://okdiario.com/img/2019/09/05/mejores-frases-de-homer-simpson-655x368.jpg"
      />
    </Card>
  </div>
);

// Redirect to /auth/login if user is not present
export const PrivatePage = withProtected(Page);

// Redirect to / if user is not present
//export const PrivatePage = withProtected(Page, { redirectTo: "/" });

// Do not redirect, but show protected page
//export const PrivatePage = withProtected(Page, { redirect: false });
