import React from 'react'
import person from '/src/assets/person.jpg'

const ContactItem = ({ image, name, phoneNumber }) => {
  return (
    <div className='w-[200px] h-[200px] flex flex-col justify-center items-center p-2 border border-gray-300 rounded-xl'>
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
