import React from "react";
import "./Map.css";

function Map() {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.836839897439!2d-122.41941508468102!3d37.77492977975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d18ef0d1%3A0x9ed33e77ffb55a26!2sMid%20Market%20-%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1594665159515!5m2!1sen!2sus"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
}

export default Map;
