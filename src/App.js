import "./App.css";
import Footer from "./comoponent/footer/footer";
import Header from "./comoponent/header/header";
import Hero from "./comoponent/hero/hero";
import Product from "./comoponent/product/product";
import Slider from "./comoponent/slider/slider";
import Testimonial from "./comoponent/testimonials/testimonial";
import Virtual from "./comoponent/virtual/virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Product />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
