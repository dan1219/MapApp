module.exports = {

        isEmpty(email,password){
                var error = '';
            if (email === '' || password === ''){
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
        }

    }

