import React, { useState } from "react";
import { withProtected } from "../../lib/protectRoute.hoc";

const Page = () => (
  <div>
    <img src="https://okdiario.com/img/2019/09/05/mejores-frases-de-homer-simpson-655x368.jpg" />
  </div>
);

// Redirect to /auth/login if user is not present
//export const PrivatePage = withProtected(Page);

// Redirect to / if user is not present
//export const PrivatePage = withProtected(Page, { redirectTo: "/" });

// Do not redirect, but show protected page
export const PrivatePage = withProtected(Page, { redirect: false });
