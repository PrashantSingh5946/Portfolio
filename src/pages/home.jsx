import Circle from "../assets/Circle.png"
import "./home.css"
 const home = () => {
    return (
      <div className="home">
        <div className="name">
          <h1>&#60;Prashant Singh<span>/</span>&#62;</h1>
          <p>Hi, I am Prashant Singh a full stack developer and i love making websites.I have a wide range of skills along with a background in API and UI automtion.</p>
        </div>
        <div className="mandal">
          <img src={Circle} className="outerpiece" />
        </div>
      </div>
    );
};

export default home;