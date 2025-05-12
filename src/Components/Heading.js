import Logo from "./Logo";
import NavItem from "./NavItem";
const Heading = () => {
  return (
    <div className="flex justify-between h-16">
      <Logo />
      <NavItem />
    </div>
  );
};

export default Heading;
