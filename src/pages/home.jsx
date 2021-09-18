import Circle from "../assets/Circle.png"
import "./home.css"
 const home = () => {
    return (
      <div className="home">
        <div className="name">
          <h1>&#60;Prashant Singh/&#62;</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro veniam repellat neque unde assumenda quam beatae voluptas doloribus labore, ipsam eos temporibus tenetur iste dolor corporis consequatur iusto dolores? Voluptate!</p>
        </div>
        <div className="mandal">
          <img src={Circle} className="outerpiece" />
        </div>
      </div>
    );
};

export default home;