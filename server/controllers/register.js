import express from 'express'
import CompetitionModel from '../models/CompetitionModel.js'


export const register = async (req, res) => {

    const post = req.body
    const newPost = new CompetitionModel(post)
    
    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

