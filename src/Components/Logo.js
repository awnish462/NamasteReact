import {LOGO_URL} from "../../utils/constants";

const Logo = () => {
    return (
      <div className="logo">
        <img
          className="w-44"
          src={LOGO_URL}
        />
      </div>
    );
  };

  export default Logo;