const initialState = {
  contactList: [],
  keyword: '',
}
const contactReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
            image: payload.image,
          },
        ],
      }

    case 'DEL_CONTACT':
      return {
        ...state,
        contactList: state.contactList.filter(
          (contact) =>
            !(
              contact.phoneNumber === payload.phoneNumber &&
              contact.name === payload.name &&
              contact.image === payload.image
            )
        ),
      }

    case 'SEARCH_BY_USERNAME':
      return { ...state, keyword: payload.keyword }
    default:
      return { ...state }
  }
}

export default contactReducer
