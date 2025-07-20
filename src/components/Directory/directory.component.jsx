import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const categories = [
    {
      id: 1,
      title: "Znaki ostrzegawcze",
      imageSrc: "/images/ostrzegawcze.png",
      route:'shop/znaki-ostrzegawcze',
    },
    {
      id: 2,
      title: "Znaki zakazu",
      imageSrc: "/images/zakazu.png",
      route:'shop/znaki-zakazu',
    },
    {
      id: 3,
      title: "Znaki nakazu",
      imageSrc: "/images/nakazu.png",
      route:'shop/znaki-nakazu',
    },
    {
      id: 4,
      title: "Znaki informacyjne",
      imageSrc: "/images/informacyjne.png",
      route:'shop/znaki-informacyjne',
    },
    {
      id: 5,
      title: "Znaki kierunku i miejscowości",
      imageSrc: "/images/kierunku_i_miejscowosci.png",
      route:'shop/znaki-kierunku-i-miejscowości',
    },
    {
      id: 6,
      title: "Znaki uzupełniające",
      imageSrc: "/images/uzupelniajace.png",
      route:'shop/znaki-uzupełniajace',
    },
    {
      id: 7,
      title: "Znaki dodatkowe",
      imageSrc: "/images/dodatkowe.png",
      route:'shop/znaki-dodatkowe',
    },
  ];

const Directory = () => {

  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
