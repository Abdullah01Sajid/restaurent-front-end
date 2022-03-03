import "./App.css";
import Products from "./pages/Products/Products";
import Nav from "./Components/Nav/Nav";
import Info from "./Components/Info/Info";
import Header from "./Components/Header/Header";
import Categories from "./Components/Categories/Categories";
import ContactInfo from "./Components/ContactInfo/ContactInfo";
import { useEffect } from "react";
import Loading from "./Components/Loading/Loading";
import { useGlobalContext } from "./context";
import axios from "axios";

function App() {
  useEffect(() => {
    getLocation();
    getcostumer();
  }, []);
  const { getLocation, setCustomer, setShowPage, showPage, loading } =
    useGlobalContext();
  const getcostumer = async () => {
    const id_exist = localStorage.getItem("cstm_id");
    if (!id_exist) {
      return;
    } else {
      const user = await axios.get(`/user/${id_exist}`);
      const userData = await user.data;
      setCustomer(userData);
      setShowPage(true);
      console.log(userData);
    }
  };

  return (
    <>
      <div className="App">
        <Nav />
        {showPage ? (
          <Products />
        ) : (
          <div className="test">
            {loading ? (
              <Loading />
            ) : (
              <>
                <div className="top-section">
                  <Header />
                </div>
                <div className="second-section">
                  <Info />
                </div>
                <div className="Third-section">
                  <Categories />
                </div>
                <div id="last-sec" className="last-section">
                  <ContactInfo />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
