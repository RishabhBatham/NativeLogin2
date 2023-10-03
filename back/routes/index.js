var express = require('express');
var router = express.Router();
var pool = require('./pool');
const ULID = require('ulid')
 




router.post('/giveotp', function(req,res,next){

  var genrated =Math.floor(Math.random() * 9000 + 1000)

      return res.status(200).json({status:true,message:"otpsent",otp:genrated})
 

})



router.post('/getaccountstatus', function(req,res,next){
   
   
    try{
        pool.query("select * from users where mobileno=? and password=?",[req.body.userNumber,req.body.password],function(error,result){
             
            if(error){
                console.log(error)
                return res.status(200).json({status:false,message:"server error",data:[]})
                
            }else{
                if(result.length==1){
                return res.status(200).json({status:true,message:"yes mobileno  found registered",data:result})
                }
                else{
                    
                    return res.status(200).json({status:false,message:"incorrect username or password",data:result})

                }
            }
        })
  
    }
    catch(e){
        return res.status(200).json({status:false,message:"server not responding please contact server administrators",data:[]})
    }
  
  })


  router.post('/isvalid', function(req,res,next){
   
   try{
        pool.query("select * from users where mobileno=? and sessiontoken =?",[req.body.mobileno,req.body.sessiontoken],function(error,result){

             if(error){
                console.log('error h')
                return res.status(200).json({status:false,message:"server not responding please contact server administrators",data:[]})
             }
             else{
                if(result.length==1){
                    console.log('ha length 1 hi h')
                    return res.status(200).json({status:true,message:"verified user",data:[]})
                }
                else{
                    console.log('ni h')
                    return res.status(200).json({status:false,message:"not verified user",data:[]})
                }
             }

        })


   }
   catch(e){

   }

  })

  router.post('/register', function(req,res,next){
   
   
    try{
        pool.query('INSERT INTO users (username, mobileno, password) VALUES (?, ?, ?)',[req.body.userName,req.body.userNumber,req.body.userPass],function(error,result){
             
            if(error){
                console.log(error)
                return res.status(200).json({status:false,message:"server error",data:[]})
                
            }else{
               
                return res.status(200).json({status:true,message:"User Registered Succesfully",data:result})
            
            }
        })
  
    }
    catch(e){
        return res.status(200).json({status:false,message:"server not responding please contact server administrators",data:[]})
    }
  
  })









 


module.exports = router;
