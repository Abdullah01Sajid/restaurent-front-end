import "./App.css";
import Nav from "./Components/Nav/Nav";
import Info from "./Components/Info/Info";
import Header from "./Components/Header/Header";
import Categories from "./Components/Categories/Categories";
import ContactInfo from "./Components/ContactInfo/ContactInfo";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="top-section">
        <Header />
      </div>
      <div className="second-section">
        <Info />
      </div>
      <div className="Third-section">
        <Categories />
      </div>
      <div className="last-section">
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
