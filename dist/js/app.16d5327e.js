(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],d=0,m=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"042f":function(t,e,a){},2117:function(t,e){t.exports={isEmpty:function(t,e,a){var n="";return""===t||""===e||""===a?(n="Все поля должны быть заполнены",[!1,n]):[!0,n]},isEmailValid:function(t){var e=/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,a="",n=e.test(t);return n?[!0,a]:(a="Введите корректный E-mail",[!1,a])},isValidLoginLength:function(t){var e="";return t.length<5?(e="Длина логина должна быть не менее 5 символов",[!1,e]):[!0,e]},isValidPasswordLength:function(t){var e="";return t.length<5?(e="Длина пароля должна быть не менее 5 символов",[!1,e]):[!0,e]}}},"52c9":function(t,e,a){"use strict";var n=a("da26"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],s={name:"app"},r=s,l=a("2877"),c=Object(l["a"])(r,i,o,!1,null,null,null),u=c.exports,d=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}}),a("span",{staticClass:"navbar-brand navbar-right output-button",on:{click:t.logout}},[t._v("Выйти")])]),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("form",{staticStyle:{display:"flex"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Название"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.longitude,expression:"longitude"}],attrs:{type:"text",placeholder:"Долгота"},domProps:{value:t.longitude},on:{input:function(e){e.target.composing||(t.longitude=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.latitude,expression:"latitude"}],attrs:{type:"text",placeholder:"Широта"},domProps:{value:t.latitude},on:{input:function(e){e.target.composing||(t.latitude=e.target.value)}}}),a("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.addElem(e)}}},[t._v("Добавить")])]),""==t.error?a("h4",{staticStyle:{"text-align":"center"}},[a("br")]):a("h4",{staticStyle:{color:"red","text-align":"center"}},[t._v(t._s(t.error)),a("br")]),0!=t.lists.length?a("table",{staticClass:"table table-light"},[t._m(1),a("tbody",t._l(t.lists,(function(e,n){return a("MapList",{attrs:{list:e,index:n},on:{removeElement:t.removeElement,changeElement:t.changeElement,changeState:t.changeState}})})),1)]):a("h4",{staticStyle:{"text-align":"Center"}},[t._v("Список пуст")])]),t._m(2)])]),a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(3),a("div",{staticClass:"modal-body"},[""==t.errorForChanging?a("h6",{staticStyle:{"text-align":"center"}},[a("br")]):a("h6",{staticStyle:{color:"red","text-align":"center"}},[t._v(t._s(t.errorForChanging)),a("br")]),a("div",{staticClass:"text-center"},[t._v("Название")]),a("div",{staticClass:"text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.nameToChange,expression:"nameToChange"}],attrs:{type:"text"},domProps:{value:t.nameToChange},on:{input:function(e){e.target.composing||(t.nameToChange=e.target.value)}}}),a("br")]),a("div",{staticClass:"text-center"},[t._v("Долгота")]),a("div",{staticClass:"text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.longitudeToChange,expression:"longitudeToChange"}],attrs:{type:"text"},domProps:{value:t.longitudeToChange},on:{input:function(e){e.target.composing||(t.longitudeToChange=e.target.value)}}}),a("br")]),a("div",{staticClass:"text-center"},[t._v("Широта")]),a("div",{staticClass:"text-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.latitudeToChange,expression:"latitudeToChange"}],attrs:{type:"text"},domProps:{value:t.latitudeToChange},on:{input:function(e){e.target.composing||(t.latitudeToChange=e.target.value)}}}),a("br")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Отменить")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.saveChanges}},[t._v("Сохранить")])])])])])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("№")]),a("th",{attrs:{scope:"col"}},[t._v("Название")]),a("th",{attrs:{scope:"col"}},[t._v("Долгота")]),a("th",{attrs:{scope:"col"}},[t._v("Широта")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col"},[a("div",{staticStyle:{width:"500px",height:"400px","margin-top":"50px"},attrs:{id:"map"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Редактирование")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],g=(a("ac6a"),a("7f7f"),a("bc3a")),h=a.n(g),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticClass:"align-middle",attrs:{scope:"row"},on:{click:function(e){return e.preventDefault(),t.changeState(e)}}},[t._v(t._s(t.index+1))]),a("td",{staticClass:"align-middle",on:{click:function(e){return e.preventDefault(),t.changeState(e)}}},[t._v(t._s(t.list["name"]))]),a("td",{staticClass:"align-middle",on:{click:function(e){return e.preventDefault(),t.changeState(e)}}},[t._v(t._s(t.list["longitude"]))]),a("td",{staticClass:"align-middle",on:{click:function(e){return e.preventDefault(),t.changeState(e)}}},[t._v(t._s(t.list["latitude"]))]),a("td",{staticStyle:{width:"33%"}},[a("button",{staticClass:" btn btn-outline-info",staticStyle:{"margin-right":"10px"},attrs:{"data-toggle":"modal","data-target":"#exampleModal"},on:{click:function(e){return e.preventDefault(),t.$emit("changeElement",t.index)}}},[t._v("Изменить")]),a("button",{staticClass:"btn btn-outline-danger",on:{click:function(e){return e.preventDefault(),t.$emit("removeElement",t.index)}}},[t._v("Удалить")])])])},f=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    Проверка2\n")])},b=[],y={name:"MapListItem"},_=y,x=Object(l["a"])(_,C,b,!1,null,null,null),w=x.exports,k={name:"MapList",props:["list","index","marks"],components:{MapListItem:w},methods:{changeState:function(){this.$emit("changeState",this.index)}}},T=k,E=(a("aae3"),Object(l["a"])(T,v,f,!1,null,"1b761131",null)),S=E.exports,j={name:"Langind",components:{MapList:S},data:function(){return{lists:[],marks:[],error:"",name:"",latitude:"",longitude:"",nameToChange:"",latitudeToChange:"",longitudeToChange:"",errorForChanging:"",idForChange:"",myMap:ymaps}},created:function(){null===localStorage.getItem("token")&&this.$router.push("/login")},methods:{changeState:function(t){this.myMap.setCenter([this.lists[t].latitude,this.lists[t].longitude],6,{})},logout:function(){localStorage.clear(),this.$router.push("/login")},addElem:function(){var t=this,e=a("fc94"),n=e.isEmpty(this.name,this.longitude,this.latitude),i=n[0];if(i){n=e.isLongitudeValid(this.longitude);var o=n[0];if(o){n=e.isLatitudeValid(this.latitude);o=n[0];if(o){var s={name:this.name,latitude:this.latitude,longitude:this.longitude,token:localStorage.getItem("token")};h.a.post("http://localhost:3000/api/users/addelem",s).then((function(e){var a=new ymaps.Placemark([t.latitude,t.longitude],{balloonContent:t.name},{preset:"islands#circleIcon",iconColor:"#3caa3c"}),n={placemark:a,state:!1};t.marks.push(n),t.myMap.geoObjects.add(a),t.lists.push(s),t.error="",console.log(e)})).catch((function(t){console.log(t)}))}else this.error=n[1]}else this.error=n[1]}else this.error=n[1]},removeElement:function(t){var e=this,a={id:this.lists[t]._id,name:this.lists[t].name,latitdude:this.lists[t].latitude,longitude:this.lists[t].longitude,token:localStorage.getItem("token")};h.a.post("http://localhost:3000/api/users/removeelem",a).then((function(a){var n=e.marks[t].placemark;e.myMap.geoObjects.remove(n),e.marks.splice(t,1),e.lists.splice(t,1),e.error="",console.log(a)})).catch((function(t){console.log(t)}))},changeElement:function(t){this.nameToChange=this.lists[t].name,this.latitudeToChange=this.lists[t].latitude,this.longitudeToChange=this.lists[t].longitude,this.idForChange=t,this.errorForChanging=""},saveChanges:function(){var t=this;console.log(this.nameToChange),console.log(this.longitudeToChange),console.log(this.latitudeToChange);var e=a("fc94"),n=e.isEmpty(this.nameToChange,this.longitudeToChange,this.latitudeToChange),i=n[0];if(i){n=e.isLongitudeValid(this.longitudeToChange);var o=n[0];if(o){n=e.isLatitudeValid(this.latitudeToChange);o=n[0];if(o){var s={id:this.lists[this.idForChange]._id,name:this.nameToChange,latitude:this.latitudeToChange,longitude:this.longitudeToChange,token:localStorage.getItem("token")};h.a.post("http://localhost:3000/api/users/updateelem",s).then((function(e){t.lists[t.idForChange].name=t.nameToChange,t.lists[t.idForChange].latitude=t.latitudeToChange,t.lists[t.idForChange].longitude=t.longitudeToChange;var a=t.marks[t.idForChange].placemark;t.myMap.geoObjects.remove(a);var n=new ymaps.Placemark([t.latitudeToChange,t.longitudeToChange],{balloonContent:t.nameToChange},{preset:"islands#circleIcon",iconColor:"#3caa3c"}),i={placemark:n,state:!1};t.marks[t.idForChange]=i,t.myMap.geoObjects.add(n),$(".modal").modal("hide"),t.error="",console.log(e)})).catch((function(t){console.log(t)}))}else this.errorForChanging=n[1]}else this.errorForChanging=n[1]}else this.errorForChanging=n[1]}},mounted:function(){var t=this;h.a.get("http://localhost:3000/api/users/getlist",{headers:{token:localStorage.getItem("token")}}).then((function(e){t.lists=e.data.lists,console.log(e),ymaps.ready((function(){var e=ymaps.geolocation;t.myMap=new ymaps.Map("map",{center:[55.76,37.64],zoom:7},{searchControlProvider:"yandex#search"});var a=t.myMap,n=t.lists,i=t;n.forEach((function(t,e,n){var o=new ymaps.Placemark([t.latitude,t.longitude],{balloonContent:t.name},{preset:"islands#circleIcon",iconColor:"#3caa3c"}),s={placemark:o,state:!1};i.marks.push(s),a.geoObjects.add(o)})),e.get({mapStateAutoApply:!0}).then((function(t){var e=t.geoObjects.get(0).properties.get("text"),n=t.geoObjects.get(0).geometry.getCoordinates();t.geoObjects.get(0).properties.set({balloonContentBody:"Адрес: "+e+"<br/>Координаты:"+n}),a.geoObjects.add(t.geoObjects)}),(function(t){alert("ошибка"),console.log("Ошибка: "+t)}))}))}))}},O=j,P=(a("d5b0"),Object(l["a"])(O,m,p,!1,null,"17916196",null)),L=P.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container ",staticStyle:{"margin-top":"200px"}},[a("div",{staticClass:"row justify-content-center h-100"},[a("div",{staticClass:"col-md-offset-3 col-md-6"},[a("form",{staticClass:"form-horizontal"},[a("span",{staticClass:"heading"},[t._v("АВТОРИЗАЦИЯ")]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"E-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Пароль"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Войти")]),a("div",[a("router-link",{attrs:{to:"Signup"}},[t._v("Регистрация")])],1),a("br"),""==t.error?a("div",[a("br")]):a("div",{staticStyle:{color:"red"}},[t._v(t._s(t.error)),a("br")])])])])])])},F=[],N={name:"Login",data:function(){return{email:"",password:"",error:""}},methods:{login:function(){var t=this,e=a("fe92"),n=e.isEmpty(this.email,this.password),i=n[0];if(i){n=e.isEmailValid(this.email);var o=n[0];if(o){var s={email:this.email,password:this.password};h.a.post("http://localhost:3000/api/users/login",s).then((function(e){console.log(e),t.error=e.data.msg,e.data.success&&(localStorage.setItem("token",e.data.token),t.$router.push("/"))}))}else this.error=n[1]}else this.error=n[1]}}},V=N,D=(a("52c9"),Object(l["a"])(V,M,F,!1,null,"47eacc9a",null)),I=D.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container ",staticStyle:{"margin-top":"200px"}},[a("div",{staticClass:"row justify-content-center h-100"},[a("div",{staticClass:"col-md-offset-3 col-md-6"},[a("form",{staticClass:"form-horizontal"},[a("span",{staticClass:"heading"},[t._v("РЕГИСТРАЦИЯ")]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"E-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"inputLogin",placeholder:"Логин"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Пароль"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.signUp(e)}}},[t._v("Регистрация")]),a("div",[a("router-link",{attrs:{to:"Login"}},[t._v("Авторизация")])],1),a("br"),""==t.error?a("div",[a("br")]):a("div",{staticStyle:{color:"red"}},[t._v(t._s(t.error)),a("br")])])])])])])},A=[],J={name:"Signup",data:function(){return{username:"",email:"",password:"",error:""}},methods:{signUp:function(){var t=this,e=a("2117"),n=e.isEmpty(this.email,this.password,this.username),i=n[0];if(i){n=e.isEmailValid(this.email);var o=n[0];if(o)if(n=e.isValidLoginLength(this.username),o=n[0],o)if(n=e.isValidPasswordLength(this.password),o=n[0],o){var s={username:this.username,password:this.password,email:this.email};h.a.post("http://localhost:3000/api/users/register",s).then((function(e){console.log(e),t.error=e.data.msg,e.data.success&&setTimeout((function(){t.$router.push("/")}),1e3)}))}else this.error=n[1];else this.error=n[1];else this.error=n[1]}else this.error=n[1]}}},U=J,B=(a("ab91"),Object(l["a"])(U,z,A,!1,null,"49490f63",null)),q=B.exports;n["a"].config.productionTip=!1,n["a"].use(d["a"]);var G=[{path:"/",component:L},{path:"/login",component:I},{path:"/signup",component:q}],H=new d["a"]({mode:"history",routes:G});new n["a"]({router:H,render:function(t){return t(u)}}).$mount("#app")},aae3:function(t,e,a){"use strict";var n=a("d031"),i=a.n(n);i.a},ab91:function(t,e,a){"use strict";var n=a("c3a0"),i=a.n(n);i.a},c3a0:function(t,e,a){},d031:function(t,e,a){},d5b0:function(t,e,a){"use strict";var n=a("042f"),i=a.n(n);i.a},da26:function(t,e,a){},fc94:function(t,e){t.exports={isEmpty:function(t,e,a){var n="";return""===t||""===e||""===a?(n="Все поля должны быть заполнены",[!1,n]):[!0,n]},isLongitudeValid:function(t){var e="";if(isNaN(parseFloat(t))||!isFinite(t))return e="Долгота должна быть числовым значением",[!1,e];var a=parseFloat(t);return a<-180||a>180?(e="Долгота может принимать значения от -180 до 180",[!1,e]):[!0,e]},isLatitudeValid:function(t){var e="";if(isNaN(parseFloat(t))||!isFinite(t))return e="Широта должна быть числовым значением",[!1,e];var a=parseFloat(t);return a<-90||a>90?(e="Широта может принимать значения от -90 до 90",[!1,e]):[!0,e]}}},fe92:function(t,e){t.exports={isEmpty:function(t,e){var a="";return""===t||""===e?(a="Все поля должны быть заполнены",[!1,a]):[!0,a]},isEmailValid:function(t){var e=/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,a="",n=e.test(t);return n?[!0,a]:(a="Введите корректный E-mail",[!1,a])}}}});
//# sourceMappingURL=app.16d5327e.js.map