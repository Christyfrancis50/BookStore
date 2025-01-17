import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import {Link} from "react-router-dom";
import axios from "axios";


const Course = () => {
  const [book,setBook] = useState([])

  useEffect(() => {
    const getBook = async() => {
      try{
      const res  = await axios.get("http://localhost:4001/book");
      console.log(res.data)
      setBook(res.data)
      }catch (error){
        console.log(error)
      }
    }
    getBook();
  }, [])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you 
            <span className="text-pink-500"> Here ! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 mt-12 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className=" mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            book.map((item) => (
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Course;
