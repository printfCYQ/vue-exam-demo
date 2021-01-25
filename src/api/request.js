import axios from 'axios'
// 这里request根据你自己项目写
export function request(url, data = {}, method = 'post', download) {
    let token =  sessionStorage.getItem('token');
    let service;
    service = axios.create({
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization':token?token:'',
      },
      timeout: 60000
    })
    return new Promise((resolve, reject) => {
      const options = {
        url,
        method
      };
      if(download){
        options.responseType="blob"
      }
      if (method.toLowerCase() === 'get') {
        options.params = data
      } else {
        options.data = data
      }
      service(options)
        .then(res => {//成功回调
          if(download){
            resolve(res);
          }else {
            resolve(res.data)
          }
        })
        .catch(error => {// 失败回调
          reject(error);
          if (error.response) {
            errorHandle(error.response);
          }else {

          }
        })
    })
}


export default { // 暴露htto_mock方法，即后面页面中用到的方法
    http_mock(url, params) {
        return request(url, params)
    }
}

