"use strict";!function(){window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n,e,i,h,t=.05,s=document.getElementById("universe"),o=!0,a="226,225,224",r=[];function c(){n=window.innerWidth,e=window.innerHeight,i=.216*n,s.setAttribute("width",n),s.setAttribute("height",e)}function d(){h.clearRect(0,0,n,e);for(var t=r.length,i=0;i<t;i++){var s=r[i];s.move(),s.fadeIn(),s.fadeOut(),s.draw()}}function f(){this.reset=function(){this.giant=u(3),this.comet=!this.giant&&!o&&u(10),this.x=y(0,n-10),this.y=y(0,e),this.r=y(1.1,2.6),this.dx=y(t,6*t)+(this.comet+1-1)*t*y(50,120)+.1,this.dy=-y(t,6*t)-(this.comet+1-1)*t*y(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=y(.2,1-.4*(this.comet+1-1)),this.do=y(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba(180,184,240,"+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)h.fillStyle="rgba("+a+","+(this.opacity-this.opacity/20*t)+")",h.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),h.fill()}else h.fillStyle="rgba(226,225,142,"+this.opacity+")",h.rect(this.x,this.y,this.r,this.r);h.closePath(),h.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){o=!1},50)}function u(t){return Math.floor(1e3*Math.random())+1<10*t}function y(t,i){return Math.random()*(i-t)+t}c(),window.addEventListener("resize",c,!1),function(){h=s.getContext("2d");for(var t=0;t<i;t++)r[t]=new f,r[t].reset();d()}(),function t(){document.body.classList.contains("night")&&d(),window.requestAnimationFrame(t)}()}();