import About from "../components/About";
import Landing from "../components/Landing";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Dine Restaurant">
      <Landing />
      <About />
    </Layout>
  );
}
