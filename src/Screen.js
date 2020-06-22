import React from "react";

import Header from "./Header";
import { useSetLang, UserContext, useT } from "./Context";

//export default ({ user }) => {
export default () => {
  //  const { user, makeLogIn, setUser } = React.useContext(UserContext);

  /*return (
    <>
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
  );*/
  const setLang = useSetLang();
  const t = useT();
  return (
    <>
      <h1>{t("hello")}</h1>
      <button onClick={setLang("es")}>{t("Translate")}</button>
    </>
  );
};
