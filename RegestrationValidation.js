module.exports = {

    isEmpty(email,password,username){
        var error = '';
        if (email === '' || password === '' || username ===''){
            error = "Все поля должны быть заполнены";
            return [false,error];
        }
        return [true,error];
    },

    isEmailValid (email){
        var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        var error = '';
        var valid = re.test(email);
        if (!valid){
            error = 'Введите корректный E-mail';
            return [false,error];
        }
        return [true,error];
    },

    isValidLoginLength(login){
        var error = '';
        if (login.length<5){
            error = 'Длина логина должна быть не менее 5 символов';
            return [false,error];
        }
        return [true,error];
    },
    isValidPasswordLength(password){
        var error = '';
        if (password.length<5){
            error = 'Длина пароля должна быть не менее 5 символов';
            return [false,error];
        }
        return [true,error];
    }

}