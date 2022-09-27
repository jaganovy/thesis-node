import express from 'express'
import { getCompetitions, createCompetition } from '../controllers/competitions.js' 

const router = express.Router()

// router.get('/', getPosts)
router.get('/posts', getCompetitions)
router.post('/', createCompetition)
router.post('/new-category', createCompetition)
// router.post('/login', createPost)
// router.post('/register', createPost)



export default router