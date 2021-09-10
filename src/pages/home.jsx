import profile from "../assets/profile.png"
 const home = () => {
    return (
      <div className="home">
        <div className="name">
          <h1>Prashant Singh</h1>
          <small>Web Designer</small>
        </div>

        <img src={profile} alt="Profile pic" className="profile" />
      </div>
    );
};

export default home;