const url = require('url');

const myurl=new url.URL('https://www.youtube.com:8080/watch?v=yIiAyoLZ9U0#taree');

console.log(myurl.hash);
console.log(myurl.host);
console.log(myurl.hostname);
console.log(myurl.href);
console.log(myurl.origin);
console.log(myurl.port);
console.log(myurl.protocol);
console.log(myurl.searchParams);
console.log(myurl.search);
console.log(myurl.pathname);
console.log(myurl.toJSON());
console.log(myurl.toString())




