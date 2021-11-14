import React from "react";

const SocialDistance = () => {
  return (
    <div className="mt-5 container">
      <h1>Travel with confidence</h1>
      <p>
        Many properties have updated us about their enhanced health and safety
        measures. So, during your search, you may find details like:
      </p>
      <div>
        <div className="row mt-4">
          <div className="col">
            <div className="pb-2  me-2 fs-3 ">
              <i className="fas fa-shield-virus"></i>
            </div>
            <h5>Official health standards</h5>
            <p>
              Properties adhering to corporate/organisational sanitisation
              guidelines.
            </p>
          </div>
          <div className="col">
            <div className="pb-2  me-2 fs-3 ">
              <i className="fas fa-people-arrows"></i>
            </div>
            <h5>Social distancing</h5>
            <p>
              Contactless check-in and check-out along with other social
              distancing measures.
            </p>
          </div>
          <div className="col">
            <div className="pb-2  me-2 fs-3 ">
              <i className="fas fa-pump-medical"></i>
            </div>
            <h5>Hygiene and sanitisation</h5>
            <p>
              The use of disinfectant and whether properties enforce a gap
              period between stays.
            </p>
          </div>
          <div className="col">
            <div className="pb-2  me-2 fs-3 ">
              <i className="fas fa-hands-wash"></i>
            </div>
            <h5>Essentials at the property</h5>
            <p>
              Free hand sanitiser for guests and individually wrapped food
              options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialDistance;
