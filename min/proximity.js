(function(e,t,n,r){"use strict";var i="qoopido",s="proximity",o=function(){return[].push.apply(arguments,[t,n,r]),t[i]=t[i]||{},t[i][s]=e.apply(null,arguments)};typeof define=="function"&&define.amd?define(["qoopido/base"],o):o(t[i].base)})(function(e,t,n,r){"use strict";return e.extend({calculate:function(t,n){var i=!1;return t=typeof t=="object"&&t!==null?t:{x:r,y:r},n=typeof n=="object"&&n!==null?n:{x:r,y:r},t.x!==r&&t.y!==r&&n.x!==r&&n.y!==r&&(t.x=parseFloat(t.x),t.y=parseFloat(t.y),n.x=parseFloat(n.x),n.y=parseFloat(n.y),i={x:parseFloat(Math.abs(n.x-t.x)),y:parseFloat(Math.abs(n.y-t.y)),total:parseFloat(Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2)))}),i}})},window,document);