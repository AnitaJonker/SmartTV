import React, { useState, useEffect } from "react"

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

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("http://localhost:8000/")
      const data = await response.json()
      console.log(data)
      console.log("data: ", data)
      const imageLinks = data.map((image) => image.links)
      const unsplashImages = imageLinks.reduce((acc, cur) => {
        return acc.concat(cur)
      }, [])

      unsplashImages.map((val) => console.log(val.self))

      console.log("unsplashImages: ", unsplashImages)
      setImages(unsplashImages)
    }
    fetchImages()
  }, [])

  return (
    // <div classname='h-10 text-purple-800'>
    //   <h1>Hello</h1>
    // </div>
    <ul className='divide-y divide-purple-800'>
      {images.map((image) => (
        <li key={images.email} className='py-4 flex'>
          <img className='h-10 w-10 rounded-full' src={image.download} alt='' />
          <div className='ml-3'>
            <p className='text-sm font-medium text-gray-900'>{image.id}</p>
            <p className='text-sm text-gray-500'>{image.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Home
