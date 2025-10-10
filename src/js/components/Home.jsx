// importando componentes/)
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
          title=" Viaja con Nosotros"
          subtitle="Recorre el mundo con nuestras ofertas exclusivas."
          ctaText="Viaja Ahora"
          ctaLink="#cards"
        />

        <section id="cards" className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <Card
              title="Viaje a Irlanda"
              text="Para los amantes de lo verde y la buena cerveza"
              img="https://images.pexels.com/photos/1559821/pexels-photo-1559821.jpeg"
              btnText="Empezar"
              btnLink="#"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <Card
              title="Viaje a Arizona"
              text="Desierto, naturaleza y aventura"
              img="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg"
              btnText="Saber más"
              btnLink="#"
            />
          </div>
		  <div className="col-12 col-md-6 col-lg-3">
            <Card
              title="Viaja a Australia"
              text="Belleza natural y vida salvaje, y diseños urbanos"
              img="https://images.pexels.com/photos/2108232/pexels-photo-2108232.jpeg"
              btnText="Mas Información"
              btnLink="#"
            />
          </div>
		  <div className="col-12 col-md-6 col-lg-3">
            <Card
              title="Viaja a Marruecos"
              text="Cultura, historia y paisajes impresionantes"
              img="https://images.pexels.com/photos/34170233/pexels-photo-34170233.jpeg"
              btnText="¡en Oferta Ahora!"
              btnLink="#"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
