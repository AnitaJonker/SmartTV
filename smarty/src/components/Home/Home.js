import React, { useState, useEffect } from "react"
import Image from "./Image"
import Options from "../Options/Options"

const Home = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("http://localhost:8000/Photos")
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
    <>
      <Options />
      {!images ? (
        <h2>Loading...</h2>
      ) : (
        <div className='p-0'>
          <div class=' grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-4  lg:gap-0 m-32'>
            {images.map((image) => (
              <Image key={image.id} {...image} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Home

/*{ // <div classname='h-10 text-purple-800'>
//   <h1>Hello</h1>
// </div>
// <ul className='divide-y divide-purple-800'>
//   {images.map((image) => (
//     <li key={images.email} className='py-4 flex'>
//       <img className='h-10 w-10 rounded-full' src={image.download} alt='' />
//       <div className='ml-3'>
//         <p className='text-sm font-medium text-gray-900'>{image.id}</p>
//         <p className='text-sm text-gray-500'>{image.email}</p>
//       </div>
//     </li>
//   ))}
// </ul> 
 {/* }*/
