function solve (obj) {

    let methods=['GET','POST','DELETE','CONNECT'];
    if (!methods.includes(obj.method)||!obj.method) {
        throw new Error("Invalid request header: Invalid Method");
    }
    let regex=/^[\w.]+$/;
    let test=regex.test(obj.uri);
    if ((!test&&obj.uri!=='*')||!obj.uri||obj.uri == "") {
        throw new Error("Invalid request header: Invalid URI");
    }
    let versions=['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0'];
    if (!versions.includes(obj.version)||!obj.version) {
        throw new Error("Invalid request header: Invalid Version");
    }
    let messageRegex = /^[^<>\\&'"]*$/;
    if(!messageRegex.test(obj.message) ||!obj.hasOwnProperty('message')) {
        throw new Error("Invalid request header: Invalid Message");
    }
    return obj;
}

console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }));
  console.log(solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
  }))
  console.log(solve({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }))