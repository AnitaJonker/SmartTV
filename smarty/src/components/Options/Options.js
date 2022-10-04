import React, { useState, useEffect } from "react"

const Options = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("http://localhost:8000/Topics")
      const data = await response.json()
      console.log(data)
      setImages(data)
      // const imageLinks = data.map((image) => image.links)
      // const unsplashImages = imageLinks.reduce((acc, cur) => {
      //   return acc.concat(cur)

      // unsplashImages.map((val) => console.log(val.self))

      // console.log("unsplashImages: ", unsplashImages)
    }
    fetchImages()
  }, [])
  return (
    <div className='fixed left-0 h-screen w-32 top-0 justify-center text-center shadow-lg '>
      <h1 className='sidebar-icon text-lg text-black'> Options</h1>
      {images.map((image) => (
        <ul className='sidebar-icon'>{image.title}</ul>
      ))}
    </div>
  )
}

export default Options
