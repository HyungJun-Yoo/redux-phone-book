import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm()
  const fileInputRef = useRef(null)
  const { ref, ...rest } = register('image')
  const [imagePreview, setImagePreview] = useState(null)
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    const { name, phoneNumber } = data

    if (name === '' || phoneNumber === '') {
      reset()
      return
    }

    dispatch({
      type: 'ADD_CONTACT',
      payload: { name, phoneNumber, image: imagePreview },
    })
    setImagePreview(null)
    reset()
  }

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className='w-[400px] sm:w-[250px] h-[550px] p-6 border rounded-2xl shadow-xl bg-white flex-shrink-0'>
      <h2 className='flex text-2xl font-bold mb-6 text-gray-600'>
        <p className='mr-2'>📱</p>
        연락처 등록
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-center rounded-full mt-4'>
          <div onClick={() => handleFileClick()}>
            <input
              type='file'
              {...rest}
              ref={(e) => {
                ref(e)
                fileInputRef.current = e
              }}
              onChange={handleFileChange}
              className='hidden'
            />

            <div className='w-[100px] h-[100px] rounded-full border border-gray-500 flex justify-center items-center mt-4 cursor-pointer'>
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt='Preview'
                  className='w-[100px] h-[100px] rounded-full object-cover'
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPlus}
                  className='text-gray-400 w-[100px] h-[100px] rounded-full'
                />
              )}
            </div>
          </div>
        </div>

        <div className='mt-4 text-lg'>
          <label className='mb-2 flex items-center text-gray-500 mt-4'>
            <FontAwesomeIcon icon={faUser} className='mr-2' />
            이름
          </label>
          <input
            type='text'
            {...register('name')}
            className='border rounded-2xl w-full p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 mt-2'
          />
        </div>

        <div className='mt-4 text-lg'>
          <label className='mt-4 flex items-center text-gray-500 '>
            <FontAwesomeIcon icon={faPhone} className='mr-2' />
            핸드폰 번호
          </label>
          <input
            type='tel'
            {...register('phoneNumber')}
            placeholder=''
            className='border rounded-2xl w-full p-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 mt-4'
          />
        </div>

        <button
          type='submit'
          className='bg-gray-500 text-white rounded-2xl px-4 py-2 w-full hover:bg-gray-600 transition mt-8 text-lg'
        >
          제출하기
        </button>
      </form>
    </div>
  )
}

export default ContactForm
