import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h1>The Welcome Page</h1>
      <p>
        <button
          onClick={() => {
            navigate("new-user");
          }}
        >
          New User
        </button>
      </p>
      <Outlet />
    </section>
  );
};

export default Welcome;
