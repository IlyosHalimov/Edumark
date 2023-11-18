// import logo from './logo.svg';
import './App.css';
import Navbar from './companents/navbar';
import Slider from './companents/slider';
import About from './companent/about';
import Popular from './companents/popular';
import Testimonial from './companents/testimonial';
import Our from './companents/our';
import Subscribe from './companents/subscribe';
import Blog from './companents/blog';
import Form1 from './companents/form1';
import Form2 from './companents/form2';
import Aboutarea from './companent/about_area';
import Ourteam from './companent/ourTeam';
import Testimonialarea from './companent/testimonialarea';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <About />
      <Popular />
      <Testimonial />
      <Our />
      <Subscribe />
      <Blog />
      <Form1 />
      <Form2 />
    </div>
  );
}

export default App;
// rafce