var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  //从这里开始看，上面不要看

  if(path === '/'){  // 如果用户请求的是 / 路径
    var string = fs.readFileSync('./ajax.html')
    response.setHeader('Content-Type', 'text/html;charset=utf-8')  
    response.end(string)   
  }else if(path === '/style.css'){   
    var string = fs.readFileSync('./style.css')
    response.setHeader('Content-Type', 'text/css')
    response.end(string)
  }else if(path === '/main.js'){  
    var string = fs.readFileSync('./main.js')
    response.setHeader('Content-Type', 'application/javascript')
    response.end(string)
  }else if(path === '/ajax.html'){
      var string = fs.readFileSync('./ajax.html')
      response.setHeader('Content-Type', 'text/html;charset=utf-8')
      response.end(string)
  }else if(path==='/ajax.js'){
    var string =fs.readFileSync('./ajax.js');
    response.setHeader('Content-Type','application/javascript');
    response.end(string);
  }else if(path==="/login"){
      var searchArr=temp.search.split("?")[1].split("&");
      var username=searchArr[0].split("=")[1];
      var password=searchArr[1].split("=")[1];
      if(username==="717864916@qq.com"){
        if(password==="aipzm"){
            response.setHeader('Content-Type','text/html;charset=utf-8');
            response.end("Hello AJAX");
        }else{
            response.setHeader('Content-Type','text/html;charset=utf-8');
            response.end("密码错误");
        }
      }else{
          response.setHeader("Content-Type","text/html;charset=utf-8");
          response.end("用户名输入错误")
      }
  }else{
    response.statusCode =404;
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
      var jsonTemp=JSON.stringify(temp);
    response.end(jsonTemp+" "+"\n\r"+path+'找不到对应的路径，你需要自行修改 index.js')
  }

  // 代码结束，下面不要看
  console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 ' + port + ' 成功，请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
