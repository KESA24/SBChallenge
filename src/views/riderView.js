const express = require("express");
const riders= require("../models/rider");

const router = express.Router();

//Posting/sending a new rider to the database
router.post("/riders", async(req,res)=>{
    const riderData = req.body;
    try{
        const rider = new riders(riderData);
        await rider.save();
        return res.status(201).send(rider);
    }
     catch (error){
        return res.status(400).send(error);
    }
})
//Fetching all riders from the database
router.get("/riders", (req,res)=>{
    riders.find({})
    .then((data) =>{
        return res.status(200).send(data);

    })
    .catch((error)=>{
        return res.status(400).send(error);
    })
})
//Fetching a single rider from the database
router.get("/riders/:Name" , async(req,res)=>{
    const {id} = req.params;
    try {
        const rider = await riders.findById(id);
        if(!rider){
            return res.status(404).send ({error: "rider not found!"});
        }
        res.status(200).send(rider);
    } catch (error) {
        res.status(400).send(error);
    }
})

//updating rider info in the database
//Registration status
router.patch("/riders/:id", async(req,res)=>{
    let{id} = req.params;

    try {
        const rider = await riders.findById(id);
        if (!rider) {
            return res.status(404).send ({error: "rider is nonexistent!"});   
        }
        rider.Registered= true;
        await rider.save();
        return res.status(200).send (rider);

            } 
    catch (error) {
        res.status(400).send(error);
        
    }
})
//training status
router.patch("/riders/:id", async(req,res)=>{
    let{id} = req.params;

    try {
        const rider = await riders.findById(id);
        if (!rider) {
            return res.status(404).send ({error: "rider is nonexistent!"});   
        }
        rider.InTraining= true;
        await rider.save();
        return res.status(200).send (rider);

            } 
    catch (error) {
        res.status(400).send(error);
        
    }
})
//Activation status
router.patch("/riders/:id", async(req,res)=>{
    let{id} = req.params;

    try {
        const rider = await riders.findById(id);
        if (!rider) {
            return res.status(404).send ({error: "rider is nonexistent!"});   
        }
        rider.Activated= true;
        await rider.save();
        return res.status(200).send (rider);

            } 
    catch (error) {
        res.status(400).send(error);
        
    }
})
//Deleting a single rider from the database
router.delete("/riders/:id", async(req,res)=>{
    const {id} = req.params;
    try {
        const response = await toDo.findByIdAndDelete(id);
        
        res.status(200).send({message: "Rider deleted successfully" , data: response});

    } catch (error) {
        res.status(400).send(error);
    }
})





module.exports = router;