import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div style={{
        display: "flex",
        position: "fixed",
        top: "50%",
        left: "50%",
    }}>

<ClipLoader loading={true} speedMultiplier="1.5"
        color="#6986ec"
        margin={2}
/>
    </div>
  );
};

export default Loading;