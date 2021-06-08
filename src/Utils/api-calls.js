export const checkForError = (response) => {
  if(!response.ok) {
    return 'Oops! Something went wrong! Please try again later.'
  } else {
    return response.json()
  }
}

export const fetchAllTech = () => {
  return fetch(`/api/techs/all`)
  .then(checkForError)
}
