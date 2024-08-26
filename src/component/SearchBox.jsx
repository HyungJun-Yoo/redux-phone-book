import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch()

  const searchByName = (event) => {
    event.preventDefault()
    dispatch({ type: 'SEARCH_BY_USERNAME', payload: { keyword } })
  }

  const handleReset = () => {
    setKeyword('')
    dispatch({ type: 'SEARCH_BY_USERNAME', payload: { keyword: '' } })
  }

  return (
    <form
      onSubmit={searchByName}
      className='w-full flex items-center bg-gray-200 p-2 rounded-md shadow-md mb-4'
    >
      <input
        type='text'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='검색할 이름을 입력하세요...'
        className='flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500'
      />
      <div className='flex gap-4'>
        <button
          type='submit'
          className='w-[80px] bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 transition duration-200'
        >
          검색
        </button>
        <button
          onClick={() => handleReset()}
          type='button'
          className='w-[80px] bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200'
        >
          검색 리셋
        </button>
      </div>
    </form>
  )
}

export default SearchBox
