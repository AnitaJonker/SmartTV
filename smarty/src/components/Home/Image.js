import React from "react"
import { format } from "date-fns"
//
export default function Image(props) {
  return (
    <>
      <div className='" flex items-center justify-center p-5 "'>
        <article className=' bg-white  flex-auto   text-center shadow-md rounded-2xl p-5 hover:shadow-lg '>
          <img
            src={props.urls.full}
            alt={props.user.name}
            loading='lazy'
            className=' w-full object-cover rounded-xl md:h-80 h-52'
          />
          <div className='text-left'>
            <ul className='text-slate-700'>{props.user.name}</ul>
            <ul>{format(new Date(props.created_at), "dd MMMM yyyy")}</ul>
          </div>
        </article>
      </div>
    </>
  )
}
