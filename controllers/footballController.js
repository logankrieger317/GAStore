const { Football } = require('../models');

module.exports={
    getAllFootball,
    getFootballById,
    createFootball,
    updateFootball,
    deleteFootball
}

async function getAllFootball(req,res){
    try{
        const football = await Football.find();
        res.json(football);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

async function getFootballById (req,res){
    try{
        const {id} = req.params;
        const football = await Football.findById(id);
        if(football){
            return res.json(football);
        }
        res.status(404).json({message:'Football not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function createFootball (req, res) {
    try {
        const football = await new Football(req.body)
        await football.save()
        return res.staus(201).json({
            football,
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function updateFootball (req, res) {
    try {
        const { id } = req.params
        let football = await Football.findByIdAndUpdate(id)
        if (football) {
            return req.status(200).json(football)
        }
        throw new Error('Football products not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteFootball (req, res) {
    try {
        const id = req.params
        let football = await Football.findByIdAndDelete(id)
        if (football) {
            return res.status(200).json(football)
        }
        throw new Error('Football products')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}