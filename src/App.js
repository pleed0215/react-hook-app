import React, { useState } from "react";
import Screen from "./Screen";
import UserContextProvider, { Lang } from "./Context";
import translations from "./translation";

function App() {
  /*const [user, setUser] = useState({
    user_id: "pleed0215",
    user_name: "Eundeok Lee",
    id: 12315123,
  });*/

  //return <Screen user={user} />;
  return (
    /*
    <UserContextProvider>
      <Screen />
    </UserContextProvider>*/
    <Lang sourceLang="en" translations={translations}>
      <Screen />
    </Lang>
  );
}

export default App;
