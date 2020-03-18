import React, { useState } from "react";
import homerFace from "../../public/homer_face.jpg";
import lisaFace from "../../public/lisa_face.png";
import { withProtected } from "../../lib/protectRoute.hoc";

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
    <FaceSelector />
    <img src="https://okdiario.com/img/2019/09/05/mejores-frases-de-homer-simpson-655x368.jpg" />
  </div>
);

// Redirect to /auth/login if user is not present
export const PrivatePage = withProtected(Page);

// Redirect to / if user is not present
//export const PrivatePage = withProtected(Page, { redirectTo: "/" });

// Do not redirect, but show protected page
//export const PrivatePage = withProtected(Page, { redirect: false });
