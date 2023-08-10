 import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

 
 const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[cat])

    // const posts = [
    //     {
    //       id:1,
    //       title:"This is title one",
    //       desc:"this is description one",
    //       img:"https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/red-butterfly-on-plum-blossom-branch-garry-gay.jpg",
    //     },
    //     {
    //       id:2,
    //       title:"Springday is coming!",
    //       desc:"this is description one",
    //       img:"https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/mt-fuji-with-fall-colors-in-japan-sean-pavone.jpg"
    //     },
    //     {
    //       id:3,
    //       title:"Kill or be Kill!",
    //       desc:"this is description three",
    //       img:"https://c4.wallpaperflare.com/wallpaper/444/238/332/enma-ai-anime-girls-anime-jigoku-shoujo-wallpaper-preview.jpg"
    //     }
    //   ]

   return (
     <div className='menu'>
        <h1>Other posts you make like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
            <img src={`../upload/${post?.img}`} alt=""/>
            <h2>{post.title}</h2>
            <Link to="/" ><button>Read more</button></Link>
            </div>
        ))}
     </div>
   )
 }
 
 export default Menu