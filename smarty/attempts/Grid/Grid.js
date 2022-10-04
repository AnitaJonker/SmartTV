// import ReactDOM from "react-dom"
// import React, { Fragment, useEffect, useState } from "react"
// import axios from "axios"
// // import fetch from "node-fetch"
// // import "./style.css"
// import { createApi } from "unsplash-js"

// // const api = createApi({
// //   apiUrl: "http://localhost:5000/api",
// //   //...other fetch options
// // })

// const api = new createApi({ accessKey: this.accessKey })

// const PhotoComp = ({ photo }) => {
//   const { user, urls } = photo

//   return (
//     <Fragment>
//       <img className='img' src={urls.regular} />
//       <a
//         className='credit'
//         target='_blank'
//         href={`https://unsplash.com/@${user.username}`}
//         rel='noreferrer'>
//         {user.name}
//       </a>
//     </Fragment>
//   )
// }

// const Body = () => {
//   const [data, setPhotosResponse] = useState(null)
//   const [serverKey, setKey] = useState([])

//   useEffect(() => {
//     api.search
//       .getPhotos({ query: "cat", orientation: "landscape" })
//       .then((result) => {
//         setPhotosResponse(result)
//       })
//       .catch(() => {
//         console.log("something went wrong!")
//       })
//   }, [])

//   if (data === null) {
//     return <div>Loading...</div>
//   } else if (data.errors) {
//     return (
//       <div>
//         <div>{data.errors[0]}</div>
//         <div>PS: Make sure to set your access token!</div>
//       </div>
//     )
//   } else {
//     return (
//       <div className='feed'>
//         <ul className='columnUl'>
//           {data.response.results.map((photo) => (
//             <li key={photo.id} className='li'>
//               <PhotoComp photo={photo} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// const Grid = () => {
//   return (
//     <main className='root'>
//       <Body />
//     </main>
//   )
// }
// export default Grid
// // ReactDOM.render(<Home />, document.getElementById("root"))
