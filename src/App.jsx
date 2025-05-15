import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const result = await res.json();

      setData(result.results);
    }
    getData();
  }, []);
  console.log(data);

  return (
    <>
      <div className="flex flex-col items-center p-12 gap-4">
        <p className="font-extrabold text-blue-950 text-4xl">
          Rick And Morthy API
        </p>
        <div className="grid grid-rows-3 grid-cols-3  gap-3 text-center">
          {data.map((e) => {
            return (
              <div>
                <img src={e.image} alt={e.name} />
                <p>{e.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
