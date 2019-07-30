// let data = new Data();

const BASEURL = 'https://route.showapi.com';
const TYPE_PATH = '/109-35';
const NEWS_PATH = '/109-34';



function news(vue) {

    var param = new URLSearchParams();
    param.append("showapi_appid", "100961");
    param.append("showapi_sign", "3436efd8c7304e8d9265a17599b7f8f2");
    return vue.$axios.post(BASEURL+NEWS_PATH,param)
}

function Allnews(vue,id) {
    var myid = id
    console.log(myid)
    var param = new URLSearchParams();
    param.append("showapi_appid", "100961");
    param.append("showapi_sign", "3436efd8c7304e8d9265a17599b7f8f2");
    param.append("page", "1");
    param.append("needContent", 1);
    param.append("channelId", myid);
    return  vue.$axios.post(BASEURL+TYPE_PATH,param)
}


function type(vue,title,) {
    console.title
    var param = new URLSearchParams();
    param.append("showapi_appid", "100961");
    param.append("showapi_sign", "3436efd8c7304e8d9265a17599b7f8f2");
    param.append("page", "1");
    param.append("title", title);
    param.append("needContent", 1);
    return  vue.$axios.post(BASEURL+TYPE_PATH,param)
}


function details(vue,id) {
    console.log(id)
    var myid = id
    var param = new URLSearchParams();
    param.append("showapi_appid", "100961");
    param.append("showapi_sign", "3436efd8c7304e8d9265a17599b7f8f2");
    param.append("page", "1");
    param.append("needContent", 1);
    param.append("id", myid);
    return  vue.$axios.post(BASEURL+TYPE_PATH,param)
}

export default {
    news,type,Allnews,details,
}
