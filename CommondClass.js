
function requestMethod(par1,par2,method,callback) {
    var xhr = new XMLHttpRequest();

    //第二步：建立与服务器的连接（get/post）
    xhr.open(method, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + par1);

    //设置头信息，让数据以表单的形式传递给服务器
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    //第三步：发送请求
    xhr.send(par2);

    //接收数据服务器返回的数据

    xhr.onreadystatechange = function () {

        //xhr.readyState == 4 代表ajax数据请求已经完成
        //xhr.readyState == 200 代表数据成功返回
        if (xhr.readyState == 4 && xhr.status == 200) {
            //response.Text表示服务器返回的数据
            var res = JSON.parse(xhr.responseText);
            var str = res.data;

            callback(str);
        }
    }
}