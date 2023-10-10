const Sports =require('../models/actors')

module.exports={
    getAllSports,
    getSportsById,
    
}

async function getAllSports(req,res){
    try{
        const actors = await Sports.find();
        res.json(actors);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getSportsById (req,res){
    try{
        const {id} = req.params;
        const actor = await Sports.findById(id);
        if(actor){
            return res.json(actor);
        }
        res.status(404).json({message:'Sport not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
