const validator = require('validator')
const mongoose = require('mongoose')

const Sypermarket = new mongoose.Schema({
    name:{
        type: String, 
         required:true,
         trim: true
    },
    icon:{
        type:Image,
        default:null
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User'
    }
})
    
const Item = mongoose.model('Item',ItemSchema)

/*
function createNewRendonTask(){
    const task = new Task({
        description: 'Learn the mongoose library',
        completed: false
    })
}
function saveTask(task){ 
    task.save().then(()=>{
        console.log(task)
    }).catch((error)=>{
        console.log(error)
    })
}
*/

module.exports = Item