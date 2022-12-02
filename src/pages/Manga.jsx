import { useEffect,useState } from "react";
import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const options = {
    method: 'GET',
    url: 'https://best-manga-anime-wallpapers.p.rapidapi.com/categories/popular',
    headers: {
      'X-RapidAPI-Key': 'cf60a4fee3msh82dbeaac59ac9ddp1db735jsnd2758878f648',
      'X-RapidAPI-Host': 'best-manga-anime-wallpapers.p.rapidapi.com'
    }
  };

const Manga =() =>{
  const [Anime,setAnime]=useState([]);
useEffect (()=>{
  axios.request(options).then(function (response) {
    console.log(response.data);
    setAnime(response.data);
  }).catch(function (error) {
    console.error(error);
  });

},[])

const arr =Anime.map((Anime,index)=>{
  return(
    <Card style={{ width: '15rem',background:'rgb(23, 23, 40)' }} className="text-light">
      <Card.Img variant="top" src={Anime.thumbnail} />
      <Card.Body>
        <Card.Title>{Anime.title}</Card.Title>
        <Card.Text>
        <p>Manga Link Not Available</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
})

  return (
    <div>
    <h2 className="text-center mt-5 text-light">Most Popular Manga</h2>
    <div className="grid1">
      {arr}
  
   </div>
   </div>
 
  )
};


export default Manga;