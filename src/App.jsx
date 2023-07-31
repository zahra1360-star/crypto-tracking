
import NavbarComponent from "./components/UI/Navbar.component";
import FooterComponent from "./components/UI/Footer.component";

function App() {
  return (
    <div >
     {/* Navbar  */}
     <NavbarComponent/>

     {/* Wrapper  */}
     <div className="wrapper">
      <h1>Wrapper</h1>
     </div>

     {/* Footer  */}
     <FooterComponent/>
    </div>
  );
}

export default App;
