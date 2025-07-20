import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";
import { Fragment } from "react/jsx-runtime";

const categories = [
  {
    id: 1,
    title: "Znaki ostrzegawcze",
    imageSrc: "/images/ostrzegawcze.png",
    route: "shop/znaki-ostrzegawcze",
  },
  {
    id: 2,
    title: "Znaki zakazu",
    imageSrc: "/images/zakazu.png",
    route: "shop/znaki-zakazu",
  },
  {
    id: 3,
    title: "Znaki nakazu",
    imageSrc: "/images/nakazu.png",
    route: "shop/znaki-nakazu",
  },
  {
    id: 4,
    title: "Znaki informacyjne",
    imageSrc: "/images/znaki-informacyjne-drogowe.jpg",
    route: "shop/znaki-informacyjne",
  },
  {
    id: 5,
    title: "Znaki kierunku i miejscowości",
    imageSrc: "/images/znaki-miejscowosci-kierunku-drogowe.jpg",
    route: "shop/znaki-kierunku-i-miejscowości",
  },
  {
    id: 6,
    title: "Znaki uzupełniające",
    imageSrc: "/images/znaki-uzupelniajace.jpg",
    route: "shop/znaki-uzupełniajace",
  },
  {
    id: 7,
    title: "Znaki dodatkowe",
    imageSrc: "/images/znaki-dodatkowe.jpg",
    route: "shop/znaki-dodatkowe",
  },
];

const Directory = () => {
  return (
    <Fragment>
      <div className ='directory-title'>Kategorie</div>
      <div className="directory-container">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </Fragment>
  );
};

export default Directory;
