import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { Routes, Route } from "react-router-dom";

import "./shop.styles.scss";
import Popup from "../../components/pop-up/pop-up.component";
import { Fragment } from "react/jsx-runtime";

const Shop = () => {
  return (
    <Fragment>
      <Popup></Popup>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </Fragment>
  );
};
export default Shop;
