'use strict'
const coffeeModel=require('../models/coffee.model');
// const coffeeSeed=require('../models/coffee.model')


const testController=(req,res)=>{
    const userobj=coffeeModel();
    // const userobj=coffeeSeed();

    res.json(userobj)
}
module.exports=testController;
