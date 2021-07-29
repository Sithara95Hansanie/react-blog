import React, { useEffect, useState } from "react";

function Effects({ query }) {
  const [item, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://www.reddit.com/r/reactjs.json");
      const fetchData = await response.json(response);
      setItems(fetchData);
    }
    fetchData();
  }, [query]);

  console.log(item);
  //   const [msg, setMsg] = useState("Hi therer");
  //   useEffect(() => {
  //     console.log("trigger useEffect");
  //     setTimeout(() => {
  //       setMsg("I am fine ");
  //     }, 3000);
  //   }, []);

  //   const [windowWidthSize, setWindowWidthSize] = useState(0);
  //   useEffect(() => {
  //     function handleResize(e) {
  //       const { width } = document.body.getBoundingClientRect();
  //       setWindowWidthSize(Math.ceil(width));
  //     }
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  //   const [counter, setCounter] = useState(0);

  //   useEffect(() => {
  //     const s = setInterval(() => {
  //       setCounter((c) => c + 1);
  //     }, [100]);
  //     return () => clearInterval(s);
  //   }, [counter]);
  return (
    <div>
      <h2>Effects</h2>
      {/* <p>{msg}</p>
      <p>{windowWidthSize}pixels</p> */}
      {/* <h1>{counter}</h1> */}
      {/* {item.data.children.map((data, i) => {
        return <div>{i}</div>;
      })} */}
    </div>
  );
}
export default Effects;
