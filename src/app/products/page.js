"use client";
import { useEffect, useState } from "react";


const mainProduct = () => {
  const [data,setData] = useState();
  useEffect(() => {
    fetchData()
  }, [])

const fetchData = async () => {
  try {
    const result = await fetch("https://dummyjson.com/carts");
    const data = await result.json();
    setData(data);
  }catch(err){
    console.log(err);
  }
}
  return (
    <p>mainProduct</p>
      );
}
 
export default mainProduct;