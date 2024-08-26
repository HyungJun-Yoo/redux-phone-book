import React from 'react'
import person from '/src/assets/person.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

const ContactItem = ({ image, name, phoneNumber }) => {
  const dispatch = useDispatch()

  const handleCancel = () => {
    dispatch({ type: 'DEL_CONTACT', payload: { name, phoneNumber, image } })
  }

  return (
    <div className='w-[200px] h-[200px] flex flex-col justify-center items-center p-2 border border-gray-300 rounded-xl relative'>
      <div className='absolute top-2 right-2'>
        <button
          onClick={handleCancel}
          className='w-[20px] h-[20px] flex justify-center items-center bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition duration-200'
        >
          <FontAwesomeIcon icon={faTimes} className='w-[12px] h-[12px]' />
        </button>
      </div>
      <div className='flex flex-col justify-center items-center gap-4'>
        <img
          src={image ? image : person}
          alt={name}
          className='w-[100px] h-[100px] border border-gray-100 rounded-full'
        />
        <div className=''>{name}</div>
        <div className=''>{phoneNumber}</div>
      </div>
    </div>
  )
}

export default ContactItem
