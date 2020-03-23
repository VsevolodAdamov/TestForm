buttonMessage.onclick = function senddata () {
    const url = '/Message/AddComment/addComment.php';
    const nameUser = document.querySelector('.name');
    const textUser = document.querySelector('.text');
    const imageUser = document.querySelector('.image');
    if(nameUser.value.length<1){return false;
    }else if (nameUser.value.length<1){return false;
    }else{
    const commentObjeckt = {name: nameUser.value, text: textUser.value, image: imageUser.value};
    const connect = PostConnect(url, commentObjeckt);
    return connect;
    }
};

btnGroup7.onclick =()=>{const url = '/Message/ShowData/showData7.php'; return GetConnect(url);};
btnGroup14.onclick =()=>{const url = '/Message/ShowData/showData14.php'; return GetConnect(url);};
btnGroup21.onclick =()=>{const url = '/Message/ShowData/showData21.php'; return GetConnect(url);};
btnGroup70.onclick =()=>{const url = '/Message/ShowData/showData70.php'; return GetConnect(url);};


  function GetConnect(url){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                const response = JSON.parse(xhr.responseText);
                console.log(response);
               // var arr = [3,2,5,6];
                function arraySum(response){
                    var sum = "";
                    for(var i = 0; i < response.length; i++){
                        sum += "Name: " + response[i].name + "<br>" + response[i].text + " <p><img src="+ response[i].image + "><br>";

console.log( "")

                    }
                    const element = document.getElementById("comments");
                    element.innerHTML=sum;
                }
                arraySum(response);

                return response;
                }
        }
    };
    xhr.send(null);
};


function PostConnect(url,Obj) {

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('param=' + JSON.stringify(Obj));
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                console.log('Ok')
            } else {
                console.log('ajax error');
            }
        }
    };
};
