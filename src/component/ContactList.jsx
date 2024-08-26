import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList)
  const keyword = useSelector((state) => state.keyword)
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    if (keyword !== '') {
      const list = contactList.filter((item) => item.name.includes(keyword))

      setFilteredList(list)
    } else {
      setFilteredList(contactList)
    }
  }, [keyword, contactList])

  return (
    <div className='w-full flex flex-col items-center'>
      <SearchBox />
      <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6'>
        {filteredList.length > 0 &&
          filteredList.map((contact, index) => (
            <ContactItem
              key={contact.phoneNumber}
              name={contact.name}
              phoneNumber={contact.phoneNumber}
              image={contact.image}
            />
          ))}
      </div>
    </div>
  )
}

export default ContactList
