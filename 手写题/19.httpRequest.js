/**
 * 0\1\2\3\4
 * 0: 请求还未被创建
 * 1：请求被创建好 并于服务器建立链接 open send
 * 2：请求已经被接收，但是处于处理阶段
 * 3：请求在处理中，可能有部分数据已经 ready
 * 4：请求已经完成
 *
 * ajax({
 *  type: 'get',
 *  url:'/xxxx/xx',
 *  timeout: 1000,
 *  params: {},
 *  body: {},
 *  success:(data)=>{
 *    console.log(data, 'success')
 *  }
 *  error:(err)=>{
 *    console.log(err, 'error')
 *  }
 * })
 */

const getParamsStr = (params) => {
  if (!params) return "";

  params.t = new Date().getTime().toString;

  let ret = [];

  Object.keys(params).forEach((key) => {
    ret.push(`${key}=${params[key]}`);
  });

  return ret.join("&");
};

const ajax = (option) => {
  let xmlHttp, timer;

  if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
  }

  if (!xmlHttp) return;

  if (option.type.toLowerCase() === "get") {
    xmlHttp.open(
      option.type.toLowerCase(),
      `${option.url}?${getParamsStr(option.params)}`,
      true
    );
    xmlHttp.send();
  } else {
    xmlHttp.open(option.type.toLowerCase(), `${option.url}`, true);

    xmlHttp.send(getParamsStr(option.body));
  }

  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === "4") {
      clearTimeout(timer);
      if (
        (xmlHttp.status >= 200 && xmlHttp.status < 300) ||
        xmlHttp.status === 304
      ) {
        option.success(xmlHttp.responseText);
      } else {
        option.error(xmlHttp.responseText);
      }
    }
  };

  if (option.timeout) {
    timer = setTimeout(() => {
      xmlHttp.abort();
    }, option.timeout);
  }
};
