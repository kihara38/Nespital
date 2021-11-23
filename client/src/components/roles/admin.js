import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
const Admin = () => {
  useEffect(() => {
    const user = getCurrentUser();
    if (user && user.role === "admin") {
      setIsAdmin(user);
    } else if (user) {
      setIsAdmin(null);
    } else {
      setRedirect("/login");
    }
  }, []);

  const admin_component = (
    <div>
      <h1>Admin Page</h1>
      <AddPostForm />
    </div>
  );
  const $403_component = (
    <div>
      <h1>403 Not ALLOWED </h1>
    </div>
  );

  return isAdmin ? (
    admin_component
  ) : redirect ? (
    <Redirect to={redirect} />
  ) : (
    $403_component
  );
};
export default Admin;
