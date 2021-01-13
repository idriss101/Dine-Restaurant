import About from "../components/About";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <Layout title="Dine Restaurant">
      <Landing />
      <About />
      <Menu />
    </Layout>
  );
}
