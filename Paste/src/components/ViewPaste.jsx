import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state) => state.pastes.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];
  console.log(paste);

  return (
    <div>
      <div className='w-full flex flex-col gap-4 p-4 items-center'>
        <div className='flex gap-2 w-[80%]'>
          <input
            className='w-full p-0.5 pl-3 border border-black rounded-2xl'
            type="text" 
            placeholder='Enter the title: ' 
            value={paste.title}
            disabled
            // onChange={(e) => setTitle(e.target.value)}
          />

          {/* <button
            className='border border-black rounded-xl p-1'
            onClick={createPaste}>
            {
              (pasteID ? "Update my paste" : "Create my paste")
            }
          </button> */}
        </div>

        <div className='flex w-full justify-center'>
          <textarea
            className='w-[80%] p-2 border border-black rounded-2xl'
            value={paste.content}
            placeholder='Enter the content here'
            // onChange={(e) => setValue(e.target.value)}
            rows={20}
            disabled
          />
        </div>
      </div>
    </div>
  )
}

export default ViewPaste
