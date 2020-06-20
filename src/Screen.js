import React from "react";

import Header from "./Header";
import { UserContext } from "./Context";

//export default ({ user }) => {
export default () => {
  const { user, makeLogIn, setUser } = React.useContext(UserContext);

  return (
    <>
      {/*<Header user={user} />
      <h1>Hello, {user.user_name}!</h1>*/}
      <Header />
      <h1>Hello, {user.isLoggedIn ? user.userName : "anonymous!"}!</h1>
      <button onClick={makeLogIn}>Log in</button>
      <button
        onClick={() => {
          setUser({ ...user, isLoggedIn: false });
        }}
      >
        Log Out
      </button>
    </>
  );
};
