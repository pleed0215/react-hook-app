import React from "react";

const LangContext = React.createContext();

export const Lang = ({ sourceLang, children }) => {
  const [lang, setLang] = React.useState(sourceLang);

  return (
    <LangContext.Provider value={{ setLang }}>{children}</LangContext.Provider>
  );
};

export const changeLang = (lang) => {
  const { setLang } = React.useContext(LangContext);
  setLang(lang);
};

// context는 저장소 데이터.
export const UserContext = React.createContext();
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({
    userId: "pleed0215",
    userName: "Eundeok Lee",
    id: 12315412,
    isLoggedIn: false,
  });
  const makeLogIn = () => setUser({ ...user, isLoggedIn: true });

  return (
    <UserContext.Provider value={{ user, makeLogIn, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
