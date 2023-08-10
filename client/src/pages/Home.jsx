import React, { useEffect, useState } from 'react'
import {Link, useLocation} from "react-router-dom"
import axios from "axios"

const Home = () => {
  const [posts,setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await axios.get(`/posts${cat}`)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  },[cat]);

  // const posts = [
  //   {
  //     id:1,
  //     title:"This is title one",
  //     desc:"this is description one",
  //     img:"https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/red-butterfly-on-plum-blossom-branch-garry-gay.jpg",
  //   },
  //   {
  //     id:2,
  //     title:"Springday is coming!",
  //     desc:"this is description one",
  //     img:"https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/mt-fuji-with-fall-colors-in-japan-sean-pavone.jpg"
  //   },
  //   {
  //     id:3,
  //     title:"Kill or be Kill!",
  //     desc:"this is description three",
  //     img:"https://c4.wallpaperflare.com/wallpaper/444/238/332/enma-ai-anime-girls-anime-jigoku-shoujo-wallpaper-preview.jpg"
  //   }
  // ]


const getText = (html) =>{
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post)=>(
          <div className='post' key={post.id}>
            <div className='img'>
            <img src={`../upload/${post.img}`} alt=""/>
            </div>
            <div className='content'>
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
                <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home