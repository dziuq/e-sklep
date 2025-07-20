import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
import HeroSection from "../../components/hero-section/hero-section.component";

const Home = () => {
  return (
    <div>
      <Outlet />
      <HeroSection />
      <Directory />
    </div>
  );
};

export default Home;
