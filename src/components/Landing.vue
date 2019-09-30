<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown"></div>
            <span @click="logout" class="navbar-brand navbar-right output-button" >Выйти</span>

        </nav>

<!--        создание элемента-->
        <div class="container-fluid">
            <div class="row">
                <div class="col">
<!--                    список-->

                    <form style="display: flex;" >
                        <input type="text" placeholder="Название" v-model="name">
                        <input type="text" placeholder="Долгота" v-model="longitude">
                        <input type="text" placeholder="Широта" v-model="latitude">
                        <button class="btn btn-primary" @click.prevent="addElem">Добавить</button>
                    </form>


                    <h4 style="text-align: center" v-if="error==''"><br/></h4>
                    <h4 v-else style="color:red;text-align: center" >{{error}}<br/></h4>


                    <table class="table table-light" v-if="lists.length !=0">
                        <thead>
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Название</th>
                            <th scope="col">Долгота</th>
                            <th scope="col">Широта</th>

                        </tr>
                        </thead>

                        <tbody>
                        <MapList v-on:removeElement="removeElement"
                                 v-on:changeElement="changeElement"
                                 v-on:changeState="changeState"
                                 v-for="(list,index) of lists"
                                 v-bind:list="list"
                                 v-bind:index="index"
                        />


                        </tbody>
                    </table>
                    <h4 v-else style="text-align: Center">Список пуст</h4>


                </div>
                <div class="col">
                    <div id="map" style="width: 500px; height: 400px;margin-top: 50px"></div>
                </div>
            </div>

        </div>


        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Редактирование</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h6 v-if="errorForChanging==''" style="text-align: center"><br/></h6>
                        <h6 v-else style="color:red;text-align: center" >{{errorForChanging}}<br/></h6>
                        <div class="text-center">Название</div><div class="text-center"><input type="text" v-model="nameToChange"><br/></div>
                        <div class="text-center">Долгота</div><div class="text-center"><input type="text" v-model="longitudeToChange"><br/></div>
                        <div class="text-center">Широта</div><div class="text-center"><input type="text" v-model="latitudeToChange"><br/></div>
                    </div>


                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Отменить</button>
                        <button type="button" class="btn btn-primary"  @click="saveChanges">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>




<script>

    import axios from 'axios'
    import MapList from "./MapList";
    export default {
        name:'Langind',
        components:{
            MapList
        },
        data(){
            return{
                lists:[],
                marks:[],
                error:'',
                name:'',
                latitude:'',
                longitude:'',
                nameToChange:'',
                latitudeToChange:'',
                longitudeToChange:'',
                errorForChanging:'',
                idForChange:'',
                myMap:ymaps
            }
        },
        created(){
            if (localStorage.getItem('token')===null){
                this.$router.push('/login');
            }

        },

        methods:{
            changeState(id){
                this.myMap.setCenter([this.lists[id].latitude, this.lists[id].longitude], 6, {

                });

            },
            logout(){
                localStorage.clear();
                this.$router.push('/login');
            },
            addElem(){
                const InputListValidation = require('../../InputListValidation');
                var result = InputListValidation.isEmpty(this.name,this.longitude,this.latitude);
                let isEmpty  = result[0];

                if (!isEmpty){
                    this.error = result[1];
                    return;
                }
                result = InputListValidation.isLongitudeValid(this.longitude);
                var isValid = result[0];
                if (!isValid){
                    this.error = result[1];
                    return;
                }

                result = InputListValidation.isLatitudeValid(this.latitude);
                var isValid = result[0];
                if (!isValid){
                    this.error = result[1];
                    return;
                }
                let newElem = {
                    name:this.name,
                    latitude:this.latitude,
                    longitude:this.longitude,
                    token:localStorage.getItem('token')
                }





                axios.post('http://localhost:3000/api/users/addelem', newElem)
                    .then((res) => {

                        var placemark = new ymaps.Placemark([this.latitude, this.longitude], {
                            balloonContent: this.name,
                        }, {
                            preset: "islands#circleIcon",
                            iconColor: '#3caa3c'
                        });

                        var elem = {
                            placemark:placemark,
                            state:false
                        }

                        this.marks.push(elem);
                        this.myMap.geoObjects.add(placemark);


                        this.lists.push(newElem);
                        this.error ='';
                        console.log(res);
                    })
                    .catch((error) => {
                        console.log(error);
                    });




            },

            removeElement(id){
                let itemToDelete = {
                    id:this.lists[id]._id,
                    name:this.lists[id].name,
                    latitdude:this.lists[id].latitude,
                    longitude:this.lists[id].longitude,
                    token:localStorage.getItem('token')
                }

                axios.post('http://localhost:3000/api/users/removeelem', itemToDelete)
                    .then((res) => {

                        let markToDelete = this.marks[id].placemark;
                        this.myMap.geoObjects.remove(markToDelete);
                        this.marks.splice(id, 1);
                        this.lists.splice(id, 1); // Исправить
                        this.error ='';
                        console.log(res);
                    })
                    .catch((error) => {
                        console.log(error);
                    });


            },
            changeElement(id){
                this.nameToChange = this.lists[id].name;
                this.latitudeToChange = this.lists[id].latitude;
                this.longitudeToChange = this.lists[id].longitude;
                this.idForChange = id;
                this.errorForChanging = '';
            },
            saveChanges(){
                console.log(this.nameToChange);
                console.log(this.longitudeToChange);
                console.log(this.latitudeToChange);
                const InputListValidation = require('../../InputListValidation');
                var result = InputListValidation.isEmpty(this.nameToChange,this.longitudeToChange,this.latitudeToChange);
                let isEmpty  = result[0];

                if (!isEmpty){
                    this.errorForChanging = result[1];
                    return;
                }
                result = InputListValidation.isLongitudeValid(this.longitudeToChange);
                var isValid = result[0];
                if (!isValid){
                    this.errorForChanging = result[1];
                    return;
                }

                result = InputListValidation.isLatitudeValid(this.latitudeToChange);
                var isValid = result[0];
                if (!isValid){
                    this.errorForChanging = result[1];
                    return;
                }

                // редактирование в бд
                let newElemToUpdate = {
                    id:this.lists[this.idForChange]._id,
                    name:this.nameToChange,
                    latitude:this.latitudeToChange,
                    longitude:this.longitudeToChange,
                    token:localStorage.getItem('token')
                }





                axios.post('http://localhost:3000/api/users/updateelem', newElemToUpdate)
                    .then((res) => {
                        this.lists[this.idForChange].name = this.nameToChange;
                        this.lists[this.idForChange].latitude = this.latitudeToChange;
                        this.lists[this.idForChange].longitude = this.longitudeToChange;

                        let markToDelete = this.marks[this.idForChange].placemark;
                        this.myMap.geoObjects.remove(markToDelete);

                        var placemark = new ymaps.Placemark([this.latitudeToChange, this.longitudeToChange], {
                            balloonContent: this.nameToChange,
                        }, {
                            preset: "islands#circleIcon",
                            iconColor: '#3caa3c'
                        });

                        var elem = {
                            placemark:placemark,
                            state:false
                        }


                        this.marks[this.idForChange] = elem;

                        this.myMap.geoObjects.add(placemark);


                        $(".modal").modal("hide");
                        this.error ='';
                        console.log(res);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            }
        },
        mounted(){
            axios.get('http://localhost:3000/api/users/getlist',{headers:{token:localStorage.getItem('token')}})
                .then(res=>{
                    this.lists = res.data.lists;
                    console.log(res);

                    ymaps.ready(()=>{
                        // $(.map_canvas).each(init);
                        var location = ymaps.geolocation;
                        this.myMap = new ymaps.Map("map", {
                            center: [55.76, 37.64],
                            zoom: 7
                        }, {
                            searchControlProvider: 'yandex#search'
                        });
                        var myMap = this.myMap;

                        var arr = this.lists;

                        var vs = this;
                        arr.forEach(function(item, i, arr) {
                            var placemark = new ymaps.Placemark([item.latitude, item.longitude], {
                                balloonContent: item.name,
                            }, {
                                preset: "islands#circleIcon",
                                iconColor: '#3caa3c'
                            });
                            var newElem = {
                                placemark:placemark,
                                state:false
                            }
                            vs.marks.push(newElem);
                            myMap.geoObjects.add(placemark);

                        });





                        location.get({
                            mapStateAutoApply: true
                        })
                            .then(
                                result=> {

                                    var userAddress = result.geoObjects.get(0).properties.get('text');
                                    var userCoodinates = result.geoObjects.get(0).geometry.getCoordinates();

                                    result.geoObjects.get(0).properties.set({
                                        balloonContentBody: 'Адрес: ' + userAddress +
                                            '<br/>Координаты:' + userCoodinates
                                    });
                                    myMap.geoObjects.add(result.geoObjects);


                                },
                                function(err) {
                                    alert('ошибка');
                                    console.log('Ошибка: ' + err)
                                }
                            );


                    })

                });

        }

    }

</script>

<style scoped>
    .output-button:hover{
        cursor: pointer ;
    }



</style>