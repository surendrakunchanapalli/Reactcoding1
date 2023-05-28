const element = (
  <div className="bg-container d-flex flex-column justify-content-center">
    <h1 className="heading">Super Over League</h1>
    <div className="d-flex flex-row">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
      />
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
