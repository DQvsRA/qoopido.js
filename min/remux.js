(function(e,t,n,r){"use strict";var i="qoopido",s="remux",o=function(){return[].push.apply(arguments,[t,n,r]),t[i]=t[i]||{},t[i][s]=e.apply(null,arguments)};typeof define=="function"&&define.amd?define(["qoopido/base"],o):o(t[i].base)})(function(e,t,n,r){"use strict";var i,s,o,u,a=n.getElementsByTagName("html")[0],f=n.documentElement,l={},c=[],h={layout:null,size:{base:null,current:null,last:null},ratio:{device:t.devicePixelRatio||1,size:null,total:null,image:null}};return e.extend({_constructor:function(){var n=this;t.addEventListener("resize",n.updateState,!1),t.addEventListener("orientationchange",n.updateState,!1),n.updateState()},addLayout:function(t,n){return l[t]=n,this},getState:function(){return h},updateState:function(){var p,d;i=f.offsetWidth;for(p in l)l[p].breakpoint&&i>=l[p].breakpoint&&(s=p);s!==h.layout&&(h.layout=s,h.size.base=l[s].base,n.getElementsByTagName("html")[0].setAttribute("data-layout",s),c.push("layoutchange")),h.size.current=Math.max(l[h.layout].min,Math.min(l[h.layout].max,Math.floor(h.size.base*(i/l[h.layout].width)))),h.size.current!==h.size.last&&(a.style.fontSize=h.size.current+"px",h.size.last=h.size.current,h.ratio.size=h.size.current/h.size.base,h.ratio.total=h.ratio.size*h.ratio.device,h.ratio.image=Math.round(Math.ceil(h.ratio.total/.25)*25)/100,c.push("ratiochange"));for(d=0;(o=c[d])!==r;d++)u=n.createEvent("HTMLEvents"),u.initEvent(o,!0,!0),u.state=h,t.dispatchEvent(u);return c.length=0,this}})},window,document);