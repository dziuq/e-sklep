import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";
import Popup from "../../components/pop-up/pop-up.component";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { selectShouldShowPopup } from "../../store/cart/cart.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const shouldShowPopup = useSelector(selectShouldShowPopup);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  console.log('Popowac? ',shouldShowPopup);

  return (
    <Fragment>
      <h1 className="category-preview-title">
        {category.toUpperCase().replace("-", " ")}
      </h1>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {shouldShowPopup && <Popup />}
      </div>
    </Fragment>
  );
};

export default Category;
