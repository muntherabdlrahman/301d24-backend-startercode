'use strict';
const axios=require('axios');
const coffeeModel=require('../models/coffee.model');

// Endpoint for testing
const home=(req,res)=>{
    res.send('Hello form backend')
// provide your logic here
}
// Call the coffee api here and return the results
// const retreiveItemsController=(req,res)=>{


//     // provide your logic here
// };


// // Get favorite coffee from MongoDB
const getFavoriteCoffee=(req,res)=>{
   coffeeModel.find({},(error,data)=>{
       if (error){
           res.send(error.message)
       }else{
           res.send(data)
       }
   })


    // provide your logic here
};


// Create new fav coffee endpoint
const createItemController=(req,res)=>{
    const {title,description,ingredients,img,id}=req.body
    coffeeModel.find({id:id},(error,data)=>{
        if (data.length>0||error){
            res.send('Data has been decleared')
        }else{
            const createNewData=new coffeeModel({
                title:title,
                description:description,
                ingredients:ingredients,
                img:img,
                id:id

            })
            createNewData.save();
            res.send(createNewData)
        }
    })
    // provide logic here
};

// update coffee from MongoDB
const updateItemController=(req,res)=>{

    const previosID= req.params.id;
    const {title,description,ingredients,img}=req.body;
    coffeeModel.findOne({id:previosID},(error,data)=>{
        if(error){
            res.send(error.message)
        }else{
            data.title=title,
            data.description=description,
            data.ingredients=ingredients,
            data.img=img
            data.save();
            res.send(data)
        }
    })


    // provide logic here
};

// delete coffee from MongoDB
const deleteItemController=(req,res)=>{
    const id=req.params.id;
    coffeeModel.deleteOne({id:id},(error,data)=>{
        if (error){
            res.send(error.message)
        }else{
            res.send(data)
        }
    })



    // provide your logic here
};

module.exports={
    home,
    getFavoriteCoffee,
    createItemController,
    updateItemController,
    deleteItemController,
    // retreiveItemsController
};