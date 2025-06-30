import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageSrc, title } = category;
  return(
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Zamów teraz</p>
      </div>
    </div>
  );
};

export default CategoryItem;
