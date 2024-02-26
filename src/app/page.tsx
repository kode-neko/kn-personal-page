import { Contact, MainMenu, Portfolio, Skills, Welcome } from "@/components";

const Home = () => {
  return (
    <div>
      <MainMenu />
      <Welcome />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home