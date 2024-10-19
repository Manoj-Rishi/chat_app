import React from 'react'
import { CgSearchLoading } from "react-icons/cg";

export const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-blue-200 text-white'>
            <CgSearchLoading className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput;

// STARTER CODE
// import React from 'react'
// import { CgSearchLoading } from "react-icons/cg";

// export const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-blue-200 text-white'>
//             <CgSearchLoading className='w-6 h-6 outline-none' />
//         </button>
//     </form>
//   )
// }

// export default SearchInput;

