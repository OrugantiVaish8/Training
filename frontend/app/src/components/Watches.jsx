import React, { useEffect, useState } from "react";
import axios from "axios";
import "./watches.css";

const Watches = () => {
  let [watches, setWatches] = useState([]); 

  let fetchWatches = async () => { 
    try {
      let res = await axios.get("http://localhost:8000/watches");
      console.log(res.data);
      setWatches(res.data);
    } catch (error) {
      console.error("Error fetching watches:", error);
    }
  };

  useEffect(() => {
    fetchWatches();
  }, []);

  return (
    <div>
      {watches.map((value, index) => ( // ✅ Using "watches" (state) instead of function
        <div id="parent" key={index}>
          <img src={value.pimage} alt={value.pname} />
          <h3>{value.pname}</h3>
          <h3>{value.pcost}</h3>
        </div>
      ))}
    </div>
  );
};

export default Watches;
