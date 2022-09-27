import express from 'express'
import CompetitionModel from '../models/CompetitionModel.js'


export const getPosts = async (req, res) => {
    try {
        const postMessages = await CompetitionModel.find()

        res.status(200).send(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res) => {

    const post = req.body
    const newPost = new CompetitionModel(post)
    
    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

