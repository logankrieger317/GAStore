const Sports =require('../models/index')
const Baseball = require('../models/baseball')


module.exports={
    getAllSports,
    getSportsById,
    getBaseballById,
    
}

async function getAllSports(req,res){
    try{
        const sports = await Sports.find();
        res.json(sports);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getSportsById (req,res){
    try{
        const {id} = req.params;
        const sport = await Sports.findById(id);
        if(sport){
            return res.json(sport);
        }
        res.status(404).json({message:'Sport not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getBaseballById(req,res){
    try{
        const {id} = req.params;
        const baseball = await Baseball.findById(id);
        if(baseball){
            return res.json(baseball);
        }
        res.status(404).json({message:'item not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}