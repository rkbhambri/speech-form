(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/voice.36487195.svg"},function(e,t,a){e.exports=a(15)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),s=(a(11),function(e){return c.a.createElement("div",{className:"alert alert-danger text-center col-md-6 offset-3 mt-5"},c.a.createElement("h3",{className:!0},"It looks like your browser doesn't support speech recognition."))}),o=function(e){return c.a.createElement("h2",{className:"mt-1"},e.heading)},i=a(1),m=a(4),u=a.n(m),p=(a(12),function(e){return c.a.createElement("span",{className:"loading-dots"},c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"}))}),d=function(e){return c.a.createElement("div",{className:"note w-100"},c.a.createElement("h5",null,"Start recording voice by clicking on",c.a.createElement("span",{className:"pl-1"},c.a.createElement("img",{src:u.a,alt:"Not available",style:{width:"30px",height:"20px"},onClick:function(t){return e.startRecognition(t)}}),e.disableStart&&c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null),c.a.createElement("span",{className:"close-icon ml-2",style:{fontSize:"22px",cursor:"pointer"},onClick:function(t){return e.pauseRecognition(t)}},"\xd7")))))},f=function(e){return c.a.createElement("form",{className:"controls-form mt-4 pt-2 row"},c.a.createElement("input",{type:"text",name:"firstname",placeholder:"Say Firstname",defaultValue:e.firstName,className:"form-control mt-3"}),c.a.createElement("input",{type:"text",name:"lastname",placeholder:"Say Lastname",defaultValue:e.lastName,className:"form-control mt-3"}),c.a.createElement("input",{type:"email",name:"email",placeholder:"Say Email",defaultValue:e.email,className:"form-control mt-3"}),c.a.createElement("input",{type:"number",name:"mobile",placeholder:"Say Contact",defaultValue:e.contact,className:"form-control mt-3"}),c.a.createElement("div",{className:"controls mt-4"},c.a.createElement("p",{className:"text-left"},"Submit your form by saying ",c.a.createElement("b",null,"'Submit Form'")),c.a.createElement("p",{className:"text-left"},"Reset your form by saying ",c.a.createElement("b",null,"'Reset'")),c.a.createElement("p",null,"You can stop recording by saying ",c.a.createElement("b",null,"'Stop or Pause'"))),e.isSubmit&&c.a.createElement("div",{className:"alert alert-success w-100 mt-4"},"Thanks for submitting details !"))},b=function(e){var t=new(window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition),a=Object(n.useState)(t),r=Object(i.a)(a,1)[0],l=Object(n.useState)(!1),s=Object(i.a)(l,2),o=s[0],m=s[1],u=Object(n.useState)(!1),p=Object(i.a)(u,2),b=p[0],E=p[1],g=Object(n.useState)(),w=Object(i.a)(g,2),N=w[0],h=w[1],v=Object(n.useState)(""),S=Object(i.a)(v,2),y=S[0],O=S[1],j=Object(n.useState)(""),x=Object(i.a)(j,2),k=x[0],R=x[1],C=Object(n.useState)(""),F=Object(i.a)(C,2),I=F[0],V=F[1],P=Object(n.useState)(""),T=Object(i.a)(P,2),z=T[0],B=T[1],D=Object(n.useState)(!1),J=Object(i.a)(D,2),L=J[0],W=J[1],Y=function(e){return"first name"===e||"last name"===e||"email"===e||"contact"===e},$=function(){O(""),R(""),V(""),B(""),o&&m(!1),r.stop()};r.onresult=function(e){for(var t=e.results.length,a=e.resultIndex;a<t;a++){var n=e.results[a][0].transcript.trim();N=N?N.concat(n):n,h(N),void 0!==e.results[a-1]&&!Y(n)&&e.results[a-1][0].transcript.includes("first name")&&O(n),void 0!==e.results[a-1]&&!Y(n)&&e.results[a-1][0].transcript.includes("last name")&&R(n),void 0!==e.results[a-1]&&!Y(n)&&e.results[a-1][0].transcript.includes("email")&&V(n.replace(/ +/g,"").toLowerCase()),void 0!==e.results[a-1]&&!Y(n)&&e.results[a-1][0].transcript.includes("contact")&&(isNaN(Number(n.replace(/ +/g,"")))?alert("Please enter valid number"):B(Number(n.replace(/ +/g,"")))),void 0!==e.results[a-1]&&n.includes("reset")&&$(),void 0!==e.results[a-1]&&n.includes("submit form")&&($(),W(!0),setTimeout(function(){W(!1)},8e3)),"pause"!==n&&"stop"!==n||(r.stop(),o&&m(!1))}};return c.a.createElement("div",{className:"controls w-100 mt-4"},c.a.createElement(d,{startRecognition:function(e){return function(e){e.preventDefault(),o||L||(r.lang="en-IN",r.continuous=!0,m(!0),b&&E(!1),r.start())}(e)},pauseRecognition:function(e){return function(e){e.preventDefault(),E(!0),o&&m(!1),r.stop()}(e)},disableStart:o,speechText:N}),c.a.createElement(f,{firstName:y,lastName:k,email:I,contact:z,isSubmit:L}))},E=function(e){return c.a.createElement("div",{className:"layout col-md-10 offset-1 pt-5 text-center"},c.a.createElement("div",{className:"message-controls col-md-6 offset-3"},c.a.createElement(o,{heading:"Fill your form with speech recognition"}),c.a.createElement(b,null)))};a(13);var g=function(){var e=!1;return window.hasOwnProperty("webkitSpeechRecognition")||(e=!0),c.a.createElement("div",{className:"app"},e?c.a.createElement(s,null):c.a.createElement(E,null))};a(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.67de12dd.chunk.js.map