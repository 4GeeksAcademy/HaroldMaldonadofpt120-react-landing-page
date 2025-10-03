// IMPORTS de subcomponentes locales (usar rutas relativas con ./)
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="container py-5">
        <Jumbotron
          title="Construye cosas hermosas con React"
          subtitle="Landing page con componentes funcionales"
          ctaText="Comenzar ahora"
          ctaLink="#cards"
        />

        <section id="cards" className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <Card
              title="Plan Starter"
              text="Perfecto para comenzar"
              img="https://picsum.photos/300/200"
              btnText="Empezar"
              btnLink="#"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <Card
              title="Plan Pro"
              text="Para proyectos más grandes"
              img="https://picsum.photos/300/201"
              btnText="Saber más"
              btnLink="#"
            />
          </div>
		  <div className="col-12 col-md-6 col-lg-3">
            <Card
              title="Plan Pro"
              text="Para proyectos más grandes"
              img="https://picsum.photos/300/201"
              btnText="Saber más"
              btnLink="#"
            />
          </div>
		  <div className="col-12 col-md-6 col-lg-3">
            <Card
              title="Plan Pro"
              text="Para proyectos más grandes"
              img="https://picsum.photos/300/201"
              btnText="Saber más"
              btnLink="#"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
