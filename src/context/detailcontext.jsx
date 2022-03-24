import { createContext, useState } from "react";

export const DetailContext = createContext();

export const DetailContextProvider = ({ children }) => {
  const [details, setdetails] = useState();
  const [mail, setmail] = useState("");

  const update = (e) => {
    setdetails(e);
  };

  const settingmail = (e) => {
    setmail(e);
  };

  return (
    <DetailContext.Provider value={{ details, update, mail, settingmail }}>
      {children}
    </DetailContext.Provider>
  );
};
