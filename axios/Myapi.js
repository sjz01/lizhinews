// let data = new Data();

const BASEURL = 'https://route.showapi.com';
const TYPE_PATH = '/109-35';
const NEWS_PATH = '/109-34';
const APID = "101288";
const SING = "12898b976ad74fb5a1b1fa4330e240f5"




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
    console.log(id)
    var myid = id
    var param = new URLSearchParams();
    param.append("showapi_appid", APID);
    param.append("showapi_sign",SING);
    param.append("page", "1");
    param.append("needContent", 1);
    param.append("id", myid);
    return  vue.$axios.post(BASEURL+TYPE_PATH,param)
}

export default {
    news,type,Allnews,details,
}
