const { Hockey } = require('../models');

module.exports={
    getAllHockey,
    getHockeyById,
    createHockey,
    updateHockey,
    deleteHockey
}

async function getAllHockey(req,res){
    try{
        const hockey = await Hockey.find();
        res.json(hockey);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

async function getHockeyById (req,res){
    try{
        const {id} = req.params;
        const hockey = await Hockey.findById(id);
        if(hockey){
            return res.json(hockey);
        }
        res.status(404).json({message:'Hockey not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function createHockey (req, res) {
    try {
        const hockey = await new Hockey(req.body)
        await hockey.save()
        return res.staus(201).json({
            hockey,
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function updateHockey (req, res) {
    try {
        const { id } = req.params
        let hockey = await Hockey.findByIdAndUpdate(id)
        if (hockey) {
            return req.status(200).json(hockey)
        }
        throw new Error('Hockey products not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteHockey (req, res) {
    try {
        const id = req.params
        let hockey = await Hockey.findByIdAndDelete(id)
        if (hockey) {
            return res.status(200).json(hockey)
        }
        throw new Error('Hockey products')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}