import React from "react"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const Fireship = () => {
  return (
    <div className='p-8 bg-gray-300'>
      <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
        {numbers.map((i) => (
          <div className='"p-4 bg-cyan-400 rounded-md flex items-center justify-center"'>
            {i}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fireship

//  <div class='"p-4 bg-cyan-400 rounded-md flex items-center justify-center"'>
//             img
//           </div>
