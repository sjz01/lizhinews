// let data = new Data();


const BASEURL = 'https://route.showapi.com';
const TYPE_PATH = '/109-35';
const NEWS_PATH = '/109-34';
const APID = "100961";
const SING = "3436efd8c7304e8d9265a17599b7f8f2";


const TLJYURL = 'http://123.56.195.82:9999'
const REGISTER_PATH = '/register'
const LOGIN_PATH = '/login'
const FIND_PATH = '/existUser'
const CORRCET_PATH = '/getInfo'
const PASSWORD_PATH='/updatePassword'
const FAVORITE_PATH = '/updateFavorite'
    const GFAVORITE_PATH = '/getFavorite'




function news(vue) {

    var param = new URLSearchParams();
    param.append("showapi_appid", APID);
    param.append("showapi_sign", SING);
    return vue.$axios.post(BASEURL+NEWS_PATH,param)
}

function Allnews(vue,id) {
    var myid = id
    console.log(myid)
    var param = new URLSearchParams();
    param.append("showapi_appid", APID);
    param.append("showapi_sign", SING);
    param.append("page", "1");
    param.append("needContent", 1);
    param.append("channelId", myid);
    return  vue.$axios.post(BASEURL+TYPE_PATH,param)
}


function type(vue,title,) {
    console.title
    var param = new URLSearchParams();
    param.append("showapi_appid", APID);
    param.append("showapi_sign", SING);
    param.append("page", "1");
    param.append("title", title);
    param.append("needContent", 1);
    return  vue.$axios.post(BASEURL+TYPE_PATH,param)
}


function details(vue,id) {
    var myid = id
    var param = new URLSearchParams();
    param.append("showapi_appid", APID);
    param.append("showapi_sign",SING);
    param.append("page", "1");
    param.append("needContent", 1);
    param.append("id", myid);
    return  vue.$axios.post(BASEURL+TYPE_PATH,param)
}


function register(vue,username,password,question,answer) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("question", question);
    param.append("answer", answer);
    param.append("favorite", null);
    return vue.$axios.post(TLJYURL+REGISTER_PATH,param)
}

function login(vue,username,password) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("favorite", null);
    return vue.$axios.post(TLJYURL+LOGIN_PATH,param)
}


function find(vue,username) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("favorite", null);
    return vue.$axios.post(TLJYURL+FIND_PATH,param)
}

function correct(vue,username) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("favorite", null);
    return vue.$axios.post(TLJYURL+CORRCET_PATH,param)
}


function update(vue,username,password,question,answer) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("question", question);
    param.append("answer", answer);
    param.append("favorite", null);
    return vue.$axios.post(TLJYURL+PASSWORD_PATH,param)
}

function  getFavorite(vue,username,password) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("favorite", null);
    return vue.$axios.post(TLJYURL+GFAVORITE_PATH,param)
}

function  updataFavorite(vue,username,password,question,answer,json) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("question", question);
    param.append("answer", answer);
    param.append("favorite", json);
    return vue.$axios.post(TLJYURL+FAVORITE_PATH,param)
}
export default {
    news,type,Allnews,details,register,login,find,correct,update,updataFavorite,getFavorite
}
