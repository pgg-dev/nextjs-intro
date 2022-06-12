import type { NextPage } from "next";
import Seo from "../components/Seo";

const Home: NextPage = () => {
  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello</h1>
    </div>
  );
};

export default Home;
