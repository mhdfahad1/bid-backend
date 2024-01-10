const express=require('express')
const { getCategories } = require('../controller/categoryController')
const { getAssembles } = require('../controller/assemblyController')
const { getsubCategories } = require('../controller/subCategoryController')
const { addProject, getProjects, deleteProject } = require('../controller/projectController')
const router=new express.Router()


router.get('/get/categories',getCategories)

router.get('/get/assemblies',getAssembles)

router.get('/get/subcats',getsubCategories)

router.post('/add/project',addProject)
// get project
router.get('/get/projects',getProjects)
// delete project
router.delete('/delete/project',deleteProject)

module.exports=router
