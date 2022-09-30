import React, { useEffect, useState } from "react"
import Article from "../Article/Article"

  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("http://localhost:8000/")
      const data = await response.json()
      console.log(data)
      setImages(data)
    }
    fetchImages()
  }, [])

  return (
    <>
      <div className='container mx-auto px-5 2xl:px-0'>
        <h1 className='text-slate-800 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14'>
          Recommended For You
        </h1>

        {!images ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container'>
            {images.map((image) => (
              <Article key={image.id} {...image} />
            ))}
          </section>
        )}
      </div>
    </>
  )
}