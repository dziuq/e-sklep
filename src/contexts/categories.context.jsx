import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments, addColectionAndDocuments } from "../utils/firebase/firebase.utils.js";

import SHOP_DATA from "../shopdata.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  //DODAWANIE SHOP-DATA DO BAZY DANYCH

  // useEffect(() => {
  //   addColectionAndDocuments("categories", SHOP_DATA);
  // });

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
