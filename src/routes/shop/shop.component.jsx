import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { Routes, Route } from "react-router-dom";

import "./shop.styles.scss";
import Popup from "../../components/pop-up/pop-up.component";
import { Fragment } from "react/jsx-runtime";

import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";

import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { selectShouldShowPopup } from '../../store/cart/cart.selector';

const Shop = () => {

  const dispatch = useDispatch();
  const shouldShowPopup = useSelector(selectShouldShowPopup);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Fragment>
      { shouldShowPopup &&<Popup/>}
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </Fragment>
  );
};
export default Shop;
