var code1 = document.createElement('script');
var code2 = document.createElement('script');

code1.setAttribute('async', '');
code1.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-KB6MQ9M805");

code2.innerHTML = "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-KB6MQ9M805');";

document.querySelector('head').appendChild(code1);
document.querySelector('head').appendChild(code2);