(function(g,f){g.JFixed||("undefined"!==typeof module&&module.exports?module.exports=f():"function"===typeof define&&define.amd?define(f):g.JFixed=f.call(g))})(this,function(){function g(){return parseInt(e.body.scrollTop?e.body.scrollTop:e.documentElement.scrollTop)||0}function f(a,c,b){window.addEventListener?a.addEventListener(c,b,!1):window.attachEvent&&a.attachEvent("on"+c,function(){b()})}var l=this,e=document,k=new Abstract({fixed:function(){},unFixed:function(){},onFixed:function(a){},onUnFixed:function(a){},
onScroll:function(a){},position:function(a,c){}}),k=new Clazz(k,{config:{carrier:null,triggerTop:null,holder:{left:null,right:null,bottom:null},isRestore:!1,position:{top:null,right:null,bottom:null,left:null}},inherit:Component},function(a){this.setConfig(a)});k.extend({__init:function(){if(!this._.init){if(!this.config.carrier)throw"carrier must be not null!";this._.ISSUPPORT=!(!+"\v1"&&!l.XMLHttpRequest);this._.ISIE=!+"\v1";this._.viewHeight=e.documentElement.clientHeight;this._.height=0;this._.width=
0;this._.flag=!0;this._.init=!1;this._.ISSUPPORT||(e.getElementsByTagName("html")[0].style.cssText="background-image:url(about:blank); background-attachment:fixed;");this.position();this.__holdCheck()}},fixed:function(){var a=this.config.carrier,c=a.style.visibility,b=a.style.display;this.__init();"none"===b&&(a.style.position="absolute",a.style.visibility="hidden",a.style.display="");this._.height=a.offsetHeight;this._.width=a.offsetWidth;"none"===b&&(a.style.visibility=c,a.style.display="none");
if(!this.config.triggerTop||this.__checkDistance())a.style.position=this._.ISSUPPORT?"fixed":"absolute",this._.onFixed&&this._.onFixed();this.__events();this._.init=!0},unFixed:function(){this._.flag=!1;this.config.isRestore&&(this.config.carrier.style.position="static");this._.onUnFixed&&this._.onUnFixed()},onFixed:function(a){this._.onFixed=a},onUnFixed:function(a){this._.onUnFixed=a},onScroll:function(a){this._.onScroll=a},__events:function(){var a=this,c=null;f(l,"scroll",function(b){a.__holdCheck();
a.config.triggerTop&&a.__checkDistance();if(a._.onScroll)a._.onScroll(b,g(),a._.viewHeight)});f(l,"resize",function(){a._.flag&&(a._.viewHeight=e.documentElement.clientHeight,!a._.ISIE||a._.ISSUPPORT||c?a.__holdCheck():c=setTimeout(function(){c=null;a.__fixedIE6Top()},200))});this.__domReady(function(){a.config.carrier.style.display="";a.__holdCheck()})},__domReady:function(a){function c(){try{document.documentElement.doScroll("left"),h()}catch(a){setTimeout(c,1)}}if("function"===typeof a){var b=
document.addEventListener?"DomContentLoaded":"onreadystatechange",d=!1,e,g,f,h=function(){d||(d=!0,a.call(window))};if("complete"===document.readyState)return h();if(document.addEventListener)f=function(){document.removeEventListener(b,f,!1);h()},document.addEventListener(b,f,!1),window.addEventListener("load",h,!1);else if(document.attachEvent){e=function(){"complete"===document.readyState&&(document.detachEvent(b,e),h())};document.attachEvent(b,e);window.attachEvent("onload",h);try{g=null==window.frameElement}catch(k){}document.documentElement.doScroll&&
g&&c()}d&&a.call(window)}},__checkDistance:function(){var a=!1,c=this.config.carrier;this.config.triggerTop&&(g()>=this.config.triggerTop&&(a=!0),a?(c.style.position=this._.ISSUPPORT?"fixed":"absolute",this._.onFixed&&this._.onFixed()):(this.config.isRestore&&(c.style.position="static"),this._.onUnFixed&&this._.onUnFixed()));return a},__fixedIE6Top:function(){var a=this.config,c=g();null!==a.position.top&&(a.carrier.style.top=c+parseInt(a.position.top,10)+"px");null!==a.position.bottom&&(a.carrier.style.top=
c+this._.viewHeight-this._.height-parseInt(a.position.bottom,10)+"px")},__holdCheck:function(){if(this._.flag){var a=this.config,c=a.holder,b=0,d=0,d=d=0;this._.ISSUPPORT||this.__fixedIE6Top();c.left&&(d=parseInt(a.position.right,10),b=e.body.clientWidth/2-this._.width-c.left,d&&!isNaN(d)&&d<=b?(a.carrier.style.left="auto",a.carrier.style.right=d+"px"):(a.carrier.style.left=e.body.clientWidth/2+c.left+"px",a.carrier.style.right="auto"));c.right&&(d=parseInt(a.position.left,10),b=e.body.clientWidth/
2-this._.width-c.right,d&&!isNaN(d)&&d<=b?a.carrier.style.left=d+"px":a.carrier.style.left=e.body.clientWidth/2-c.right-this._.width+"px");if(c.bottom){var f,d=g();f=b=e.body.clientHeight-this._.viewHeight-d;b=0>=b?0:b;if(this._.ISSUPPORT){if(0===this.config.position.top||this.config.position.top)a.carrier.style.top="auto",f=e.body.clientHeight-d-this._.height;f<=c.bottom?a.carrier.style.bottom=c.bottom-b+(null===a.position.bottom?0:parseInt(a.position.bottom,10))+"px":(a.carrier.style.top=null===
a.position.top?"auto":parseInt(a.position.top,10)+"px",a.carrier.style.bottom=null===a.position.bottom?"auto":parseInt(a.position.bottom,10)+"px")}else b<=c.bottom&&(a.carrier.style.top=d+this._.viewHeight-this._.height-(c.bottom-b)-(null===a.position.bottom?0:parseInt(a.position.bottom,10))+"px")}}},position:function(a,c){var b=a||this.config.position;if(!b)return"";c&&(this.config.holder=c);var d=this.config.carrier;b.top&&b.bottom&&(b.bottom=null);b.left&&b.right&&(b.right=null);for(var e in b)d.style[e]=
null!==b[e]?parseInt(b[e],10)+"px":"auto"}});return k});