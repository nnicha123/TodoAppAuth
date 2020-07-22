function setToken(token){
    localStorage.setItem("ACCESS_TOKEN",token)
}
function setId(id){
    localStorage.setItem("ID",id)
}

function getToken(){
    return localStorage.getItem("ACCESS_TOKEN")
}
function getId(){
    return localStorage.getItem("ID")
}
function removeToken(){
    localStorage.removeItem("ACCESS_TOKEN")
}
function removeId(){
    localStorage.removeItem("ID")
}

export default {
    setToken,getToken,removeToken,setId,getId,removeId
}