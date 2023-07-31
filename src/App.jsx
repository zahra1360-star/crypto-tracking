
import NavbarComponent from "./components/UI/Navbar.component";
import FooterComponent from "./components/UI/Footer.component";
import HomePage from './pages/Home.page';
import FAQPage from './pages/FAQ.pages';
import AboutUsPage from './pages/AboutUs.pages';
import ContactUsPage from "./pages/ContactUs.pages";
import {Route , Routes} from 'react-router-dom';

function App() {
  return (
    <div >
     {/* Navbar  */}
     <NavbarComponent/>

     {/* Wrapper  */}
     <div className="wrapper">
      
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/faq" element={<FAQPage/>}/>
        <Route path="/about us" element={<AboutUsPage/>}/>
        <Route path="/contact us" element={<ContactUsPage/>}/>
      </Routes>
     </div>

     {/* Footer  */}
     <FooterComponent/>
    </div>
  );
}

export default App;


//Routes
// /
// /faq
// /about us
// /contact us