import Circle from "../assets/Circle.png"
 const home = () => {
    return (
      <div className="home">
        <div className="name">
          <h1>&#60;Prashant Singh/&#62;</h1>
          <span>Web Designer</span>
        </div>
        <div className="mandal">
          <img src={Circle} className="outerpiece" />
        </div>
      </div>
    );
};

export default home;