const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../model/user');
const List = require('../../model/list');
const key = require('../../config/keys').secret;



router.post('/register',(req,res)=>{
    console.log(req.body);
    let {
        username,
        password,
        email
    } = req.body;

    console.log("username:"+username);
    console.log("password:"+password);
    console.log("confirm_password:"+email);


    //Проверяем наличие username в БД
    User.findOne({
        username: username
    }).then(user=>{
        if (user){
                return res.status(200).json({
                success:false,
                msg:'Пользователь с таким именем уже существует'
            });
        }else{
            //проверяем наличие email
            User.findOne({
                email: email
            }).then(user=>{
                if (user){
                    return res.status(200).json({
                        success:false,
                        msg:'Пользователь с таким email уже существует'
                    });
                } else{
                    //Добаляем нового пользоватя в БД
                    let newUser= new User({
                        username:username,
                        password:password,
                        email:email
                    });
                    //Хешируем пароль
                    bcrypt.genSalt(10,(err,salt)=>{
                        bcrypt.hash(newUser.password,salt,(err,hash)=>{
                            newUser.password = hash;
                            newUser.save().then(user => {

                                return res.status(201).json({
                                    success:'true',
                                    msg:"Регистрация прошла успешно"
                                });
                            })
                                .catch(err=>{
                                    console.log(err);
                                });
                        });

                    });
                }

            })

        }

    })


});


router.post('/login',(req,res)=>{
    User.findOne({email:req.body.email})
        .then(user=>{
            if (!user){
                res.json({
                    msg:'Такого пользователя не существует',
                    success:false
                });
            }
            bcrypt.compare(req.body.password,user.password)
                .then(isMatch => {
                    if (isMatch){

                        jwt.sign({userId:user._id},key,{expiresIn: 604800},(err,token)=>{
                            res.json({
                                success:true,
                                token:token,
                                msg:''
                            });
                        })
                        //авторизация прошла успешно

                    }else{
                        res.json({
                            msg:"Неверная пара логин/пароль",
                            success:false
                        });
                    }
                })
        });

});


router.get('/getlist',(req,res)=>{
let token = req.headers.token;
    let userId;
    jwt.verify(token,key,(err,decoded)=>{
        if (err){
            console.log(err);
        }
        userId = decoded.userId;

    });
    List.find({userId:userId},'name latitude longitude',(err, lists) => {
        res.status(200).json({
            success:true,
            lists:lists,
            msg:'Список элементов был успешно получен'
        })
        console.log('result', err, lists)
    })
});



router.post('/addelem',(req,res)=>{
    let {
        name,
        latitude,
        longitude,
        token
    } = req.body;

    let userId;
    jwt.verify(token,key,(err,decoded)=>{
        if (err){
            console.log(err);
        }
        userId = decoded.userId;

    });

    let newListItem= new List({
        name:name,
        latitude:latitude,
        longitude:longitude,
        userId:userId
    });

    newListItem.save().then(list => {

        return res.status(201).json({
            success:'true',
            msg:"Элемент успешно добавлен"
        });
    })
        .catch(err=>{
            console.log(err);
        });
});


router.post('/removeelem',(req,res)=>{
    console.log('Проверка');
    console.log(req.body);
    let elemToDelete = req.body.id;
    console.log(elemToDelete);
    List.findByIdAndDelete(elemToDelete,null,(error,result)=>{
        if (error){
            console.log(error);
        };
        console.log('Элеменс с id '+req.body.id+' удален')
        return res.status(201).json({
            success:'true',
            msg:"Элемент успешно удален"
        });
    })
});

router.post('/updateelem',(req,res)=> {
    console.log('Редактирование элемента');
    let {
        name,
        latitude,
        longitude,
        id,
        token
    } = req.body;

    List.updateOne({_id: id}, {name: name, latitude: latitude, longitude: longitude}, (error, result) => {
        if (error) {
            console.log(error);
        }

        console.log('Элеменс с id ' + id + ' был изменен');
        return res.status(201).json({
            success: 'true',
            msg: "Элемент успешно изменен"
        });
    });
});


module.exports = router;