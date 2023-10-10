const Sports =require('../models/sports')

module.exports={
    getAllSports,
    getSportsById,
    
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
