import "./App.css";
import Navigasi from "./components/Navigasi";
import Depan from "./components/Depan";
import Kartu from "./components/Kartu";
import Akordion from "./components/Akordion";
import Lis from "./components/Lis";
import Format from "./components/Format";

function App() {
  return (
    <>
      <header>
        <Navigasi />
      </header>
      <section style={{ padding: "60px" }}>
        <Depan />
      </section>
      <section className="bg-light pb-5">
        {" "}
        <Kartu />{" "}
      </section>
      <section>
        {" "}
        <Akordion />
      </section>
      <section>
        <Lis />{" "}
      </section>
      <section>
        <Format />
      </section>
    </>
  );
}

export default App;
