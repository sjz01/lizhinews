// let data = new Data();


const BASEURL = 'https://route.showapi.com';
const TYPE_PATH = '/109-35';
const NEWS_PATH = '/109-34';
const APID = "101288";
const SING = "12898b976ad74fb5a1b1fa4330e240f5"

// const TLJYURL = 'http://123.56.195.82:9999'
const REGISTER_PATH = '/api/register'
const LOGIN_PATH = '/api/login'
const FIND_PATH = '/api/existUser'
const CORRCET_PATH = '/api/getInfo'
const PASSWORD_PATH='/api/updatePassword'
const FAVORITE_PATH = '/api/updateFavorite'
const GFAVORITE_PATH = '/api/getFavorite'




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
    return vue.$axios.post(REGISTER_PATH,param)
}

function login(vue,username,password) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("favorite", null);
    return vue.$axios.post(LOGIN_PATH,param)
}


function find(vue,username) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("favorite", null);
    return vue.$axios.post(FIND_PATH,param)
}

function correct(vue,username) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("favorite", null);
    return vue.$axios.post(CORRCET_PATH,param)
}


function update(vue,username,password,question,answer) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("question", question);
    param.append("answer", answer);
    param.append("favorite", null);
    return vue.$axios.post(PASSWORD_PATH,param)
}

function  getFavorite(vue,username,password) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("favorite", null);
    return vue.$axios.post(GFAVORITE_PATH,param)
}

function  updataFavorite(vue,username,password) {
    var param = new URLSearchParams();
    param.append("userName", username);
    param.append("password", password);
    param.append("favorite", null);
    return vue.$axios.post(GFAVORITE_PATH,param)
}
export default {
    news,type,Allnews,details,register,login,find,correct,update,updataFavorite,getFavorite
}
