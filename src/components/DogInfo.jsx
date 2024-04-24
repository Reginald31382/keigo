import React from "react";
import keigo1 from "../assets/images/keigo1.png";
import keigo2 from "../assets/images/keigo2.png";
import keigo3 from "../assets/images/keigo3.png";

const DogInfo = () => {
  return (
    <div className="container">
      <h1 className="heading">Miniature Doberman Pinscher</h1>
      <div className="content">
        <div className="text-section">
          <p>
            <strong>Name:</strong> Keigo
          </p>
          <p>
            <strong>Age:</strong> 1
          </p>
          <p>
            <strong>DOB:</strong> July 14, 2022
          </p>
          <p>
            <strong>Adopted:</strong> October 22, 2022
          </p>
          <p>
            <strong>Weight:</strong> 7.3 lbs
          </p>
          <p>
            *All shots are current until Nov 2024 and I am the 1st owner
            (Melinda)*
          </p>
          <p>
            <strong>Hobbies and personalities:</strong> Very friendly and loves
            to play. Keigo loves kids and even though he loves the outdoors,
            cuddling is #1 on his list.
          </p>
          <p>
            <strong>Misc:</strong> Cages, blankets, toys, and food will be
            provided.
          </p>
          <p>Credentials will be provided upon purchase.</p>
        </div>
        <h2
          className="askingFor"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Asking for $1,600 but willing to negotiate
        </h2>
        <div className="image-column">
          <img src={keigo1} alt="keigo1" className="dog-image" />
          <img src={keigo2} alt="keigo2" className="dog-image" />
          <img src={keigo3} alt="keigo3" className="dog-image" />
        </div>
      </div>
    </div>
  );
};

export default DogInfo;
