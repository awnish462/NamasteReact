import {LOGO_URL} from "../utils/constants";

const Logo = () => {
    return (
      <div className="logo">
        <img
          className="logo-img"
          src={LOGO_URL}
        />
      </div>
    );
  };

  export default Logo;