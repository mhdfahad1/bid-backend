const express=require('express')
const { getCategories } = require('../controller/categoryController')
const { getAssembles } = require('../controller/assemblyController')
const router=new express.Router()


router.get('/get/categories',getCategories)

router.get('/get/assemblies',getAssembles)

module.exports=router
