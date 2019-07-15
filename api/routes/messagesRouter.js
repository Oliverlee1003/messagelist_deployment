// need to refactor!!!
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const dbRoute = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox-wrjir.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbRoute,{dbName: 'messageList'})

var messageSchema = new mongoose.Schema(
    {
        message: String,
    }
    ,{
        collection: "messages"
    }
)

var Message = mongoose.model("Message",messageSchema)

// var messageObjects = Message.find({},function(err,messageObjects){
// if(err){
//   console.log(err)
//   return res.json({success: false, data: err})
// }
// else{
//   console.log("We have all the messages")
//   // console.log(data)
//   return res.json({success: true, data: messageObjects})
// }
// })

//var messages = messageObjects.

// var messages = [
//   {
//     "message": "Oliver's first message! from API"
//   },
//   {
//     "message": "Oliver's second message! from API"
//   },
//   {
//     "message": "Oliver's third message! from API"
//   }
// ];

// [{"_id":"5d1a76b16172b1ae3b6b720e","message":"Olivers first message from mongoDB"},
// {"_id":"5d1a76f16172b1ae3b6b720f","message":"Olivers second message from mongoDB"},
// {"_id":"5d1a76f86172b1ae3b6b7210","message":"Olivers third message from mongoDB"}]

// var messages = Message.find({},function(err,messageObjects){
//   if(err){
//     console.log(err)
//     // return res.json(err)
//   }
//   else{
//     console.log("We have all the messages")
//      //console.log(data)
//      return(res.json(messageObjects))
//   }
//   })


router.get('/', function(req, res) {
  Message.find({},function(err,messageObjects){
    if(err){
      console.log(err)
      // return res.json(err)
    }
    else{
      console.log("We have all the messages")
       //console.log(data)
       return(res.json(messageObjects))
    }
    })
});



router.post('/', function (req, res, next) {
  // new_msg = req.body;
  console.log("req.body is: " +  req.body)
  new_msg = new Message({
    message: req.body.message
  })


  Message.create(new_msg, function(err, Message){
    console.log("adding starts! ")
    if (err) console.log(err);
    else {
      console.log("req.body.message is : " + req.body.message)
      console.log("Inserted one message: " + new_msg)
    }
  })
});


router.delete('/:msg', function (req, res, next) {
  delete_msg = req.params.msg; //


  Message.remove({message: delete_msg }, function(err) {
    if (err) {
      console.log(err)
    }
    else {
      console.log("Successfully Deleted: " + delete_msg);
    }
});

});

router.delete('/', function (req, res, next) {

  Message.deleteMany({}, function(err) {
    if (err) {
        console.log(err)
    } else {
        res.end('success');
    }
  })
  // deleted_messages = messages.slice();
  // for (let i = 0; i < messages.length; i++) {
  //   messages.pop();
  // }
   
});

module.exports = router;