<template>
    <div>
<!--        Логин<input type="text" v-model="username"><br/>-->
<!--        Email<input type="text" v-model="email"><br/>-->
<!--        Пароль<input type="password" v-model="password"><br/>-->
<!--        <button @click="signUp">Регистрация</button>-->
<!--        <div>{{error}}</div>-->
        <div class="container " style="margin-top: 200px">
            <div class="row justify-content-center h-100">

                <div class="col-md-offset-3 col-md-6">
                    <form class="form-horizontal">
                        <span class="heading">РЕГИСТРАЦИЯ</span>
                        <div class="form-group">
                            <input type="email" class="form-control" id="inputEmail" placeholder="E-mail" v-model="email">
                        </div>

                        <div class="form-group">
                            <input type="text" class="form-control" id="inputLogin" placeholder="Логин" v-model="username">
                        </div>

                        <div class="form-group">
                            <input type="password" class="form-control" id="inputPassword" placeholder="Пароль" v-model="password">

                        </div>

                        <button class="btn" @click.prevent="signUp">Регистрация</button>
                        <div><router-link to="Login">Авторизация</router-link></div><br/>
                        <div v-if="error==''"><br/></div>
                        <div v-else style="color:red">{{error}}<br/></div>
                    </form>

                </div>

            </div><!-- /.row -->
        </div><!-- /.container -->
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'Signup',
        data(){
            return{
                username:'',
                email:'',
                password:'',
                error:''
            }
        },
        methods:{
           signUp(){
               const myModule = require('../../RegestrationValidation');
               var result = myModule.isEmpty(this.email,this.password,this.username);
               let isEmpty  = result[0];

               if (!isEmpty){
                   this.error = result[1];
                   return;
               }

               result = myModule.isEmailValid(this.email);
               var isValid = result[0];

               if (!isValid){
                   this.error = result[1];
                   return;
               }

               result = myModule.isValidLoginLength(this.username);
               isValid = result[0];
               if (!isValid){
                   this.error = result[1];
                   return;
               }

               result = myModule.isValidPasswordLength(this.password);
               isValid = result[0];
               if (!isValid){
                   this.error = result[1];
                   return;
               }

               //Регистрация нового пользователя
               let newUser = {
                   username:this.username,
                   password:this.password,
                   email:this.email
               }

                axios.post('http://localhost:3000/api/users/register',newUser)
                    .then(res=>{
                       console.log(res);
                        this.error = res.data.msg;
                        if (res.data.success){
                            setTimeout(()=>{
                                this.$router.push('/');
                            }, 1000);

                        }
                    });
           }
        }
    }
</script>

<style scoped>

    .form-horizontal{
        background: rgba(0, 0, 0, 0.69);
        padding-bottom: 40px;
        border-radius: 15px;
        text-align: center;
    }
    .form-horizontal .heading{
        display: block;
        font-size: 35px;
        font-weight: 700;
        padding: 35px 0;
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: 30px;
    }
    .form-horizontal .form-group{
        padding: 0 40px;
        margin: 0 0 25px 0;
        position: relative;
    }
    .form-horizontal .form-control{
        background: #f0f0f0;
        border: none;
        border-radius: 20px;
        box-shadow: none;
        padding: 0 20px 0 45px;
        height: 40px;
        transition: all 0.3s ease 0s;
    }

    .form-horizontal .btn{
        margin-bottom: 20px;
        font-size: 14px;
        color: #fff;
        background: #00b4ef;
        border-radius: 30px;
        padding: 10px 25px;
        border: none;
        text-transform: capitalize;
        transition: all 0.5s ease 0s;
    }

</style>