import axios from "axios";
import { useGlobalContext } from "./context";
const {
  name,
  setName,
  location,
  setLocation,
  customer,
  setCustomer,
  long,
  lat,
} = useGlobalContext();

const postData = async () => {
  const postData = await axios.post(url, {
    name: name,
    direction: location,
    lat: lat,
    long: long,
  });
  const data = await postData.data;
  setCustomer(data);
};
