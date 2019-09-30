<template>

<!--        <tr v-bind:class="{ 'wasClicked': state==true }" >-->
        <tr>

<!--    <h4 style="text-align: center" v-if="error==''"><br/></h4>-->
<!--    <h4 v-else style="color:red;text-align: center" >{{error}}<br/></h4>-->

            <th   class="align-middle" scope="row" @click.prevent="changeState">{{index+1}}</th>
            <td class="align-middle" @click.prevent="changeState">{{list['name']}}</td>
            <td class="align-middle" @click.prevent="changeState">{{list['longitude']}}</td>
            <td class="align-middle" @click.prevent="changeState">{{list['latitude']}}</td>
            <td style="width: 33%">
                <button class=" btn btn-outline-info" style="margin-right: 10px" data-toggle="modal" data-target="#exampleModal" @click.prevent="$emit('changeElement',index)">Изменить</button>
                <button class="btn btn-outline-danger"  @click.prevent="$emit('removeElement',index)">Удалить</button>
            </td>

        </tr>

<!--    v-bind:class="{ 'wasClicked': mark.state }"-->



</template>

<script>
    import MapListItem from "./MapListItem";
    export default {
        name:'MapList',
        props:
            ['list','index','marks']
        ,
        components:{
            MapListItem
        },

        methods:{
            changeState(){
                 this.$emit('changeState',this.index);
            }
        }
    }
</script>

<style scoped>
    .wasClicked{
        background-color: yellow;
    }

    tr:hover{
        background-color: #8accef;
    }
</style>