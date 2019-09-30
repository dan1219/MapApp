module.exports = {

    isEmpty(name,longitude,latitude){
        var error = '';
        if (name === '' || longitude === '' || latitude ===''){
            error = "Все поля должны быть заполнены";
            return [false,error];
        }
        return [true,error];
    },
    isLongitudeValid(longitude){
        var error = '';
        if (isNaN(parseFloat(longitude)) || !isFinite(longitude)){
            error = 'Долгота должна быть числовым значением';
            return [false,error];
        }
        let result = parseFloat(longitude);

        if (result<-180 || result > 180){
            error = 'Долгота может принимать значения от -180 до 180';
            return [false,error];
        }

        return [true,error];
    },

    isLatitudeValid(latutude){
        var error = '';
        if (isNaN(parseFloat(latutude)) || !isFinite(latutude)){
            error = 'Широта должна быть числовым значением';
            return [false,error];
        }
        let result = parseFloat(latutude);
        if (result<-90 || result > 90){
            error = 'Широта может принимать значения от -90 до 90';
            return [false,error];
        }
        return [true,error];
    }


}