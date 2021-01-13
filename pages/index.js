import About from "../components/About";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <Layout title="Dine Restaurant">
      <Landing />
      <About />
      <Menu />
      <Events />
      <Footer />
    </Layout>
  );
}
