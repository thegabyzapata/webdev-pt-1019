import React from "react";
import { SuperDiv } from "./SuperDiv";

let style = { display: "flex", justifyContent: "center" };

export const Card = ({ title, children, cardColor, center = false }) => (
  <SuperDiv cardColor={cardColor}>
    {title && (
      <div className="alert alert-danger">
        <p>{title}</p>
      </div>
    )}
    {center && <div style={style}>{children}</div>}
    {center || <div>{children}</div>}
  </SuperDiv>
);
