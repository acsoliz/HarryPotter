import React from "react";
import loadingGif from "../../assets/loadingg.gif";

const Loading = () => {
  return (
    <div>
      <img src={loadingGif} alt="" className="loading-item"  />
    </div>
  );
};

export default Loading;
