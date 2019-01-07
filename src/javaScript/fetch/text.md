## fetch
#### 使用方法

    fetch('http://xxx/xxx.json？a=123').then(res => {
        res.json().then((r)=>{//或者res.text()           
           console.log(r)//这里就是处理完的后台返回的json数据   
        })
    })



## axios
#### 使用方法

    axios({
        method: 'post',
        url: '/user/12345',
        data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })