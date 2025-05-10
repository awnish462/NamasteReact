import { useRouteError } from "react-router";

const Error = () => {
    const routeError=useRouteError();
  return (
    <div className="error-container">
      <h1>Opps Something Went Wrong</h1>
      <h2>{routeError.status}</h2>
    </div>
  );
};

export default Error;
