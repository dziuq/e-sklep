import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { CartContext } from "../../contexts/cart.context";
import { useParams, useNavigate } from "react-router-dom";

import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";
import Popup from "../../components/pop-up/pop-up.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const { shouldShowPopup, setShouldShowPopup } = useContext(CartContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  const handleConfirm = () => {
    setShouldShowPopup(false);
  };

  const handleCancel = () => {
    setShouldShowPopup(false);
    navigate('/checkout')
  };

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
        {shouldShowPopup && (
          <Popup
            isOpen={shouldShowPopup}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
      </div>
    </Fragment>
  );
};

export default Category;
