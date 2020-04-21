const validator = require('validator')
const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    description:{
    type: String, 
    required:true,
    trim: true
    },
    isOnSale:{
        type:Boolean,
        fefault:false
    },
    price:{
        type: Number,
        default: 0.0,
        validate(value){
            if(value<0){
                throw new Error('age need to be valid')
            }
        } 
    },
    supermarket:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Supermarket'
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User'
    }
    },{
    timestamps:true
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