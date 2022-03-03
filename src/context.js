import React, { useContext, useState } from "react";
import axios from "axios";
const appContext = React.createContext();

const url = "http://localhost:5000/user";
const searchUrl = "http://localhost:5000/search";
const Provider = ({ children }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [customer, setCustomer] = useState({});
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [showPage, setShowPage] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(true);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setLat(coords.latitude);
      setLong(coords.longitude);
      console.log(coords);
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchData = await axios.post(searchUrl, {
      name: search,
    });
    setShowSearch(true);
    setProducts(searchData.data);
    console.log(searchData.data);
    setSearch("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !location) {
      return window.alert("please enter rigth values");
    } else {
      const postData = await axios.post(url, {
        name: name,
        direction: location,
      });
      const postdata = await postData.data;
      console.log(postdata);
      localStorage.setItem("cstm_id", postdata._id);
      setName("");
      setLocation("");
      setCustomer(postdata);
      setShowPage(true);
    }
  };

  const logOut = async () => {
    try {
      const deleteUser = await axios.delete(`${url}/${customer._id}`);
      const data = await deleteUser.data;
      localStorage.removeItem("cstm_id");
      setCustomer({});
      setShowPage(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <appContext.Provider
      value={{
        showCart,
        setShowCart,
        showSearch,
        logOut,
        products,
        setLoading,
        handleSearch,
        showPage,
        search,
        setSearch,
        setShowPage,
        long,
        lat,
        getLocation,
        name,
        setName,
        location,
        setLocation,
        handleSubmit,
        setCustomer,
        customer,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(appContext);
};
export { Provider, useGlobalContext };
