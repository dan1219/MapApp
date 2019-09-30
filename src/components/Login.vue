<template>
    <div>
<!--    Email<input type="text" v-model="email"><br/>-->
<!--    Password<input type="password" v-model="password"><br/>-->
<!--        <button @click="login">Login</button>-->
<!--        <div>{{error}}</div>-->

        <div class="container " style="margin-top: 200px">
            <div class="row justify-content-center h-100">

                <div class="col-md-offset-3 col-md-6">
                    <form class="form-horizontal">
                        <span class="heading">АВТОРИЗАЦИЯ</span>
                        <div class="form-group">
                            <input type="email" class="form-control" id="inputEmail" placeholder="E-mail" v-model="email">

                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="inputPassword" placeholder="Пароль" v-model="password">
                        </div>

                            <button class="btn" @click.prevent="login">Войти</button>
                            <div><router-link to="Signup">Регистрация</router-link></div><br/>
                        <div v-if="error==''"><br/></div>
                        <div v-else style="color:red">{{error}}<br/></div>
                    </form>

                </div>

            </div><!-- /.row -->
        </div><!-- /.container -->
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        name:'Login',
        data(){
            return{
                email:'',
                password:'',
                error:''
            }
        },

        methods:{
            login(){

                const myModule = require('../../LoginValidation');
                var result = myModule.isEmpty(this.email,this.password);
                let isEmpty  = result[0];

                if (!isEmpty){
                    this.error = result[1];
                    return;
                }

                result = myModule.isEmailValid(this.email);
                let isValid = result[0];

                if (!isValid){
                    this.error = result[1];
                    return;
                }


                let newUser = {
                    email:this.email,
                    password:this.password
                }
                axios.post('http://localhost:3000/api/users/login',newUser)
                    .then(res=>{
                        console.log(res);
                        this.error = res.data.msg;
                        if (res.data.success){
                        localStorage.setItem('token',res.data.token);
                        this.$router.push('/');
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