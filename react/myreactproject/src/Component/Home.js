import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    var data = async () => {
      var data1 = await axios.get("https://dummyjson.com/products");

      setValue(data1.data.products);

      console.log(data1);
    };
    data();
  }, []);
  return (
    <div>
      {value.map((item) => (
        <div>
          <h2>id:{item.id}</h2>
          <h2>title:{item.title}</h2>
          <h2>id:{item.}</h2>
          <h3>shyam</h3>
        </div>
      ))}
    </div>
  );
}

export default Home;
