import React, { useContext } from "react";
import { UserContext } from "./Context";

//export default ({ user }) => {
export default () => {
  const {
    user: { userId, isLoggedIn },
    makeLogIn,
  } = useContext(UserContext);
  return (
    <header>
      {/*<h1>This is Header, {user.user_id}</h1>*/}
      <h1>This is Header, {isLoggedIn ? userId : " You're not logged in."}</h1>
    </header>
  );
};
