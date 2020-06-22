import React, { useContext } from "react";
import translations from "./translations";

const LangContext = React.createContext();

export const Lang = ({ sourceLang, children }) => {
  const [lang, setLang] = React.useState(sourceLang);
  const hyperTranslate = (text) =>
    sourceLang === lang ? text : translations[lang][text];

  console.log(lang);
  return (
    <LangContext.Provider value={{ setLang, t: hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
};
// Context Object를 export하여 useContext를 하는 방식보다,
// 이런식으로 ehook 처럼 해주는 것이 더 좋다고 하네..?
export const useSetLang = (lang) => {
  const { setLang } = useContext(LangContext);
  console.log(lang);
  return setLang;
};

export const useT = () => {
  const { t } = useContext(LangContext);
  return t;
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
