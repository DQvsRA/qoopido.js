(function(e,t,n,r){"use strict";var i="qoopido",s="support/css/transform",o=function(){return[].push.apply(arguments,[t,n,r]),t[i]=t[i]||{},t[i][s]=e.apply(null,arguments)};typeof define=="function"&&define.amd?define(["qoopido/support"],o):o(t[i].support)})(function(e,t,n,r){"use strict";return e.addTest("/css/transform",function(t){e.supportsProperty("transform")?t.resolve(e.getProperty("transform")):t.reject()}),e.test["/css/transform"]},window,document);