var mongoose = require('mongoose')

var Shema = mongoose.Schema

mongoose.connect(' mongodb://127.0.0.1:27017/demo',{ useNewUrlParser: true })

var userShema = new Shema(
    {
        username:{
            type: String,
            required: true //must be
        },
        password:{
            type: String,
            required: true
        },
        email:{
            type: String
        }
    }
)

var User = mongoose.model('User',userShema)

// var admin = new User(
//     {
//         username: 'czk',
//         password: 'czk123456',
//         email: 'gd@qq.com'
//     }
// )
//
// admin .save(function (err,ret) {
//     if (err){
//         console.log("存储失败哦")
//     } else {
//         console.log("保存成功")
//         console.log(ret)
//     }
// })

//查询所有
User.find(function (err,ret) {
    if (err){
        console.log("查询失败哦")
    } else {
        console.log("查询成功")
        console.log(ret)
    }
})

//按条件查询所有
User.find({username:'czk'},function (err,ret) {
    if (err){
        console.log("查询失败哦")
    } else {
        console.log("查询成功")
        console.log(ret)
    }
})

//按条件查询当个
User.findOne({username:'czk'},function (errr,ret) {
    if (err){
        console.log("查询失败哦")
    } else {
        console.log("查询成功")
        console.log(ret)
    }
})

//删除
User.remove({username:'czk'},function (errr,ret) {
    if (err){
        console.log("删除失败哦")
    } else {
        console.log("删除成功")
        console.log(ret)
    }
})

//根据id更新一个
User.findByIdAndUpdate({5ebd161fddd2941840e04eeb},{password: 123456},function (errr,ret) {
    if (err){
        console.log("更新失败哦")
    } else {
        console.log("更新成功")
        console.log(ret)
    }
})