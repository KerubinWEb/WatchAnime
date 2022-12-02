import { useEffect,useState } from "react";
import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const options = {
    method: 'GET',
    url: 'https://gogoanime2.p.rapidapi.com/anime-movies',
    params: {aph: 'A', page: '3'},
    headers: {
      'X-RapidAPI-Key': 'cf60a4fee3msh82dbeaac59ac9ddp1db735jsnd2758878f648',
      'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
    }
  };

const Movie =() =>{
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

    <Card style={{ width: '20rem',height:'35rem',background:'rgb(23, 23, 40)' }} className='text-light mb-3'>
    <Card.Img variant="top" src={Anime.animeImg} className="w-100" style={{height:'20rem'}} />
    <Card.Body>
      <Card.Title>{Anime.animeTitle}</Card.Title>
      <Card.Text>
      <p>Release Date: {Anime.releasedDate}</p>
      </Card.Text>
      <a href={Anime.animeUrl}><Button variant="danger">Watch</Button></a>
    </Card.Body>
  </Card>

  )
})

  return (
    <div>
    <h2 className="text-center mt-5 text-light">Anime Movie</h2>
    <div className="grid">
      {arr}
  
   </div>
   </div>
 
  )
};


export default Movie;