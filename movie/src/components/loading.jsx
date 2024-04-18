import React from "react";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div style={{
        display: "flex",
        position: "fixed",
        top: "50%",
        left: "50%",
    }}>
    <BeatLoader
        color="#6986ec"
        margin={2}
/>
    </div>
  );
};

export default Loading;