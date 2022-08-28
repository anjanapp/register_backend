const db=require('./db')


const register=(uname,uid,pswd)=>{

    return db.Customer.findOne({
        uid
    }).then(customer=>{
        console.log(customer);
        if(customer){
            return{
                status:false,
                message:'already registered',
                statusCode:401
            }

        }
        else{
            const newUser=new db.Customer({
                uname,
                uid,
                pswd

            })
            newUser.save()
            return{
                status:true,
                message:'registered successfully',
                statusCode:200
            }
        }
    })
}













module.exports={
    register
}
