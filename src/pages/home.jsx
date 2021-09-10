import profile from "../assets/profile.png"
import { ReactComponent as Logo } from "../assets/mandala.svg"
 const home = () => {
    return (
      <div className="home">
        <div className="name">
          <h1>Prashant Singh</h1>
          <small>Web Designer</small>
        </div>
        <div className="mandal">
          <Logo height="30rem" fill="red" stroke="green"></Logo>
        </div>

        <img src={profile} alt="Profile pic" className="profile" />
      </div>
    );
};

export default home;