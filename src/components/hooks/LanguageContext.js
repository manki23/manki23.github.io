import React, { useContext, useState, useMemo, useEffect } from "react";
import i18n from "i18next";

const LanguageContext = React.createContext();

const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(`useLanguage must be used within a LanguageProvider`);
  }

  return context;
};

const LanguageProvider = (props) => {
  const [language, setLanguage] = useState(i18n.language);
  const value = useMemo(() => [language, setLanguage], [language]);

  return <LanguageContext.Provider value={value} {...props} />;
};

export {LanguageProvider, useLanguage};