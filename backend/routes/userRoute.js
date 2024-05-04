import express from 'express';
import dotenv from "dotenv";
import { User } from "../models/userModel.js"

const router = express.Router();

dotenv.config();
const previewUrl= process.env.previewUrl;

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name || 
            !request.body.email ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'Send all required fields: name , email , password',
            });
        }
        const newUser = {
            name: request.body.name,
            email: request.body.email,
            phone: request.body.phone,
            password: request.body.password,
        };
        const user = await User.create(newUser);

        return response.status(201).send(user);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get('/:id', async(request, response) => {
    try {
        
        const { id } = request.params;

        const user = await User.findById(id);
        return response.status(200).json(user);
    } 
    catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }

});

export default router;