import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [index, setIndex] = useState(1);

  async function getData() {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserdata(response.data);
  }

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h1 className="text-gray-400 text-2x absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h1>
  );

  if (userdata.length > 0) {
    printUserData = userdata.map((elem, idx) => {
      return <Card elem={elem} key={idx} />;
    });
  }

  return (
    <div className="bg-black overflow-auto text-white h-screen p-5 flex flex-col justify-center items-center">
      <h1 className=" text-amber-400 text-2xl mb-5 font-bold">Gallery</h1>

      <div className="text-white flex flex-wrap justify-start h-[80%] p-2 gap-3 sm:justify-center ">
        {printUserData}
      </div>

      <div className="w-full  sm: fixed bottom-0 left-0 py-3">
        <Button index={index} setIndex={setIndex} setUserdata={setUserdata} />
      </div>
    </div>
  );
};

export default App;
