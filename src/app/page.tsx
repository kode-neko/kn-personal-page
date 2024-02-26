import { Contact, MainBar, Portfolio, Skills, Welcome } from "@/components";

const Home = () => {
  return (
    <div>
      <MainBar />
      <Welcome />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home