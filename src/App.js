import Directory from "./components/Directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Znaki ostrzegawcze",
      imageSrc: "/images/ostrzegawcze.png",
    },
    {
      id: 2,
      title: "Znaki zakazu",
      imageSrc: "/images/zakazu.png",
    },
    {
      id: 3,
      title: "Znaki nakazu",
      imageSrc: "/images/nakazu.png",
    },
    {
      id: 4,
      title: "Znaki informacyjne",
      imageSrc: "/images/informacyjne.png",
    },
    {
      id: 5,
      title: "Znaki kierunku i miejscowości",
      imageSrc: "/images/kierunku_i_miejscowosci.png",
    },
    {
      id: 6,
      title: "Znaki uzupełniające",
      imageSrc: "/images/uzupelniajace.png",
    },
    {
      id: 7,
      title: "Tabliczki do znaków drogowych",
      imageSrc: "/images/tabliczki.png",
    },
    {
      id: 8,
      title: "Znaki kolejowe",
      imageSrc: "/images/kolejowe.jpg",
    },
    {
      id: 9,
      title: "Znaki dodatkowe",
      imageSrc: "/images/dodatkowe.png",
    },
  ];

  return (
    <Directory categories={categories}/>
  );
};

export default App;
