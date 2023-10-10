const { Basketball } = require('../models');

module.exports={
    getAllBasketball,
    getBasketballById,
    createBasketball,
    updateBasketball,
    deleteBasketball
}

async function getAllBasketball(req,res){
    try{
        const basketball = await Basketball.find();
        res.json(basketball);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getBasketballById (req,res){
    try{
        const {id} = req.params;
        const basketball = await Basketball.findById(id);
        if(basketball){
            return res.json(basketball);
        }
        res.status(404).json({message:'Basketball not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function createBasketball (req, res) {
    try {
        const basketball = await new Basketball(req.body)
        await basketball.save()
        return res.staus(201).json({
            basketball,
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function updateBasketball (req, res) {
    try {
        const { id } = req.params
        let basketball = await Basketball.findByIdAndUpdate(id)
        if (basketball) {
            return req.status(200).json(basketball)
        }
        throw new Error('Basketball products not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteBasketball (req, res) {
    try {
        const id = req.params
        let basketball = await Basketball.findByIdAndDelete(id)
        if (basketball) {
            return res.status(200).json(basketball)
        }
        throw new Error('Basketball products')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}