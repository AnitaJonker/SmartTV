import React, { useState, useEffect } from "react"
import Image from "./Image"
import Options from "../Options/Options"

const people = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ted Fox",
    email: "ted.fox@example.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]

const Home = () => {
  const [images, setImages] = useState([])
  const [allData, setAllData] = useState([])
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("http://localhost:8000/")
      const data = await response.json()
      setImages(data)

      const imageLinks = data.map((image) => image.links)
      const userLinks = data.map((image) => image.user)

      const unsplashImages = imageLinks.reduce((acc, cur) => {
        return acc.concat(cur)
      }, [])
      const unsplashUsers = userLinks.reduce((acc, cur) => {
        return acc.concat(cur)
      }, [])
      const allDataVar = [unsplashImages, unsplashUsers]
      console.log("allDataVar: ", allDataVar)

      setAllData([unsplashImages, unsplashUsers])
      // setImages(unsplashImages)
    }
    fetchImages()
  }, [])

  return (
    <>
      <div className=' container mx-auto px-5 2xl:px-0'>
        <h1 className='text-black font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14'>
          Recommended For You
        </h1>
        <Options />
      </div>
      {!images ? (
        <h2>Loading...</h2>
      ) : (
        <div className='p-8 '>
          <div class=' grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-4  lg:gap-0 m-20'>
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
