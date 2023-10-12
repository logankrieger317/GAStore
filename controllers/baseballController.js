const { Baseball } = require('../models');
// const Sports =require('../models/sports')

module.exports={
    getAllBaseball,
    getBaseballById,
    createBaseball,
    updateBaseball,
    deleteBaseball
}

async function getAllBaseball(req,res){
    try{
        const baseballs = await Baseball.find();
        res.json(baseballs);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getBaseballById (req,res){
    try{
        const {id} = req.params;
        const baseball = await Baseball.findById(id);
        if(baseball){
            return res.json(baseball);
        }
        res.status(404).json({message:'Baseball not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function createBaseball (req, res) {
    try {
        const baseball = await  Baseball.create(req.body)
        await baseball.save()
        return res.staus(201).json({
            baseball,
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function updateBaseball (req, res) {
    try {
        const { id } = req.params
        let baseball = await Baseball.findByIdAndUpdate(id)
        if (baseball) {
            return req.status(200).json(baseball)
        }
        throw new Error('Baseball products not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteBaseball (req, res) {
    try {
        const id = req.params
        let baseball = await Baseball.findByIdAndDelete(id)
        if (baseball) {
            return res.status(200).json(baseball)
        }
        throw new Error('Baseball products')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


