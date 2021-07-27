'use strict'


const axios=require('axios')
const { response } = require('express')

const ApiAxios=(req,res)=>{
    axios.get(`https://coffeepedias.herokuapp.com/coffee-list/`).then(response=>{
        res.send(response.data)
    }).catch(error=>res.send(error.message))
}
module.exports=ApiAxios;

