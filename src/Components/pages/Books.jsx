import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
//  add required style here
display:grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: auto;
grid-gap:15px;
`;

const Books = () => {
  const [data, setData] = useState([]);
  let Bookdata;
  const getBook = async ()=>{
    
    try {
      let res = await fetch(`http://localhost:8080/books`);
       Bookdata = await res.json();
     setData(Bookdata);
      console.log(Bookdata);
    } catch (error) {
      console.log("error: ",error);
    }
  }
  
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    getBook();
  }, []);
//  const {id, title, isbn, pageCount, thumbnailUrl } = Bookdata;
  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          <BookCard />
      </Grid>
    </>
  );
};
export default Books;
