import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchEvents = () => axios.get(`${url}`)
export const createEvent = (newPost) => axios.post(url, newPost)