!function(t){function n(e){if(r[e])return r[e].exports;var a=r[e]={exports:{},id:e,loaded:!1};return t[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){t.exports=r(6)},function(t,n,r){"use strict";var e=r(4),a=e(24),i=function(t){return t.getSeconds()+60*t.getMinutes()+3600*t.getHours()},o=function(t){return Math.round(3600*t)},u=function(t){return 10>t?"0"+t:""+t},s=function(t){var n=a(t),r=Math.floor(n),e=Math.floor(60*(n-r));return r+":"+u(e)};t.exports={normalizeHours:a,hoursToString:s,dateToSeconds:i,hoursToSeconds:o}},function(t,n,r){"use strict";var e=r(4),a=function(t){return t*Math.PI/180},i=function(t){return 180*t/Math.PI},o=e(360),u=function(t){var n=Math.floor(t+22.5)%360,r=Math.floor(n/45),e=["N","NE","E","SE","S","SW","W","NW"];return e[r]};t.exports={degToRad:a,radToDeg:i,normalizeAngle:o,angleToCardinal:u}},function(t,n,r){"use strict";var e=r(9),a=r(11),i=r(10),o=r(12);t.exports={Angles:e,HighLatitudes:a,Asr:i,Midnight:o}},function(t,n){"use strict";var r=function(t){return function(n){var r=n%t;return 0>r?r+t:Math.abs(r)}};t.exports=r},function(t,n,r){"use strict";var e=r(1),a=e.dateToSeconds,i=e.hoursToSeconds,o=function(t){for(var n=0,r=1;r<t.length;r++)t[r]<t[n]&&(n=r);return n},u=function(t,n){for(var r=n||new Date,e=t.length,u=a(r),s=t.map(i),f=o(s),c=0;e>c;c++){var h=(f+c)%e;if(!(u>=s[h]))return(h+e-1)%e}return(f+e-1)%e};t.exports=u},function(t,n,r){"use strict";window.Qamar=r(7)},function(t,n,r){"use strict";t.exports=r(8)},function(t,n,r){"use strict";var e=r(3),a=r(18),i=r(15),o=r(21),u=r(5),s=r(22),f=r(1),c=f.hoursToString,h=function(t){var n=o(t);return n.map(c)},g=function(t){var n=o(t),r=u(n,t.date),e=s(r),f=i(t);return{times:n.map(c),names:a.EN,current:[r,a.EN[r]],sawm:e,qibla:f}};t.exports={Methods:e,getTimes:h,getQibla:i,getInfo:g}},function(t,n){"use strict";var r={fajrAngle:18,dhuhrOffset:0,maghribOffset:0,ishaAngle:18},e={fajrAngle:16,dhuhrOffset:0,maghribAngle:4,ishaAngle:15},a={fajrAngle:18,dhuhrOffset:0,maghribOffset:0,ishaAngle:17},i={fajrAngle:15,dhuhrOffset:0,maghribOffset:0,ishaAngle:15},o={fajrAngle:19,dhuhrOffset:0,maghribOffset:0,ishaOffset:90},u={fajrAngle:19.5,dhuhrOffset:0,maghribOffset:0,ishaAngle:17.5};t.exports={KARACHI:r,JAFARI:e,WML:a,ISNA:i,MAKKAH:o,EGYPT:u}},function(t,n){"use strict";var r=1,e=2;t.exports={STANDARD:r,HANAFI:e}},function(t,n){"use strict";var r=function(){return.5},e=function(t){return t/60},a=function(){return 1/7};t.exports={MIDNIGHT:r,ANGLE_BASED:e,ONE_SEVENTH:a}},function(t,n){"use strict";var r=[4,1],e=[4,0];t.exports={STANDARD:r,SHIA:e}},function(t,n,r){"use strict";var e=r(2),a=e.degToRad,i=e.radToDeg,o=e.normalizeAngle,u=function(t,n,r,e){var u=a(t),s=a(n),f=a(r),c=a(e),h=c-s,g=Math.sin(h)*Math.cos(f),l=Math.cos(u)*Math.sin(f)-Math.sin(u)*Math.cos(f)*Math.cos(h),d=i(Math.atan2(g,l));return o(d)};t.exports=u},function(t,n,r){"use strict";var e=r(13),a={lat:21.4225,lng:39.8262},i=function(t,n){return e(t,n,a.lat,a.lng)};t.exports=i},function(t,n,r){"use strict";var e=r(14),a=r(2),i=a.angleToCardinal,o=function(t){var n=t.latitude,r=t.longitude,a=Math.round(e(n,r)),o=i(a);return[a,o]};t.exports=o},function(t,n){"use strict";var r=[];r[0]="فجر",r[1]="شروق",r[2]="ظهر",r[3]="عصر",r[4]="غروب",r[5]="مغرب",r[6]="عشاء",r[7]="ليل",t.exports=r},function(t,n){"use strict";var r=[];r[0]="Fajr",r[1]="Sunrise",r[2]="Dhuhr",r[3]="Asr",r[4]="Sundown",r[5]="Maghrib",r[6]="Isha",r[7]="Layl",t.exports=r},function(t,n,r){"use strict";var e=r(17),a=r(16);t.exports={EN:e,AR:a}},function(t,n,r){"use strict";var e=r(2),a=e.degToRad,i=e.radToDeg,o=e.normalizeAngle,u=r(1),s=u.normalizeHours,f=.833,c=180-f,h=function(t,n){var r=function(n){var r=n||0,e=t-2451545+r/24,u=o(357.529+.98560028*e),f=o(280.459+.98564736*e),c=o(f+1.915*Math.sin(a(u))+.02*Math.sin(a(2*u))),h=23.439-3.6e-7*e,g=s(i(Math.atan2(Math.cos(a(h))*Math.sin(a(c)),Math.cos(a(c))))/15),l=i(Math.asin(Math.sin(a(h))*Math.sin(a(c)))),d=f/15-g;return{declination:l,eqt:d}},e=function(t){return r(t).eqt},u=function(t){return r(t).declination},f=function(t){var n=e(t);return s(12-n)},c=function(t,n){return s(n-t)/2+t},h=function(t,r){var e=u(r),o=i(Math.acos((-Math.sin(a(t))-Math.sin(a(e))*Math.sin(a(n)))/(Math.cos(a(e))*Math.cos(a(n)))))/15;return f(r)+(t>90?-o:o)},g=function(t,r){var e=u(r);return-i(Math.atan(1/(t+Math.tan(a(Math.abs(n-e))))))},l=function(t,n){var r=g(t,n);return h(r,n)};return{computeMidday:f,computeMidnight:c,computeTime:h,computeAsr:l}};t.exports={init:h,SUNRISE_ANGLE:c,SUNSET_ANGLE:f}},function(t,n){"use strict";var r=function(t){var n=t||new Date,r=n.getDate(),e=n.getMonth()+1,a=n.getFullYear();2>=e&&(a-=1,e+=12);var i=Math.floor(a/100),o=2-i+Math.floor(i/4);return Math.floor(365.25*(a+4716))+Math.floor(30.6001*(e+1))+r+o-1524.5};t.exports=r},function(t,n,r){"use strict";var e=r(20),a=r(1),i=a.normalizeHours,o=r(19),u=r(3),s=function(t){for(var n=t.date||new Date,r=t.longitude/15,a=t.latitude,s=t.timezone||-n.getTimezoneOffset()/60,f=t.precision||3,c=t.angles,h=t.asr||u.Asr.STANDARD,g=t.midnight||u.Midnight.STANDARD,l=t.highLatitudes,d="undefined"!=typeof c.dhuhrOffset,A="undefined"!=typeof c.maghribOffset,M="undefined"!=typeof c.ishaOffset,p=e(n)-r/24,m=o.init(p,a),v=Array(8).fill(0);f-- >0;)v[0]=m.computeTime(180-c.fajrAngle,v[0]),v[1]=m.computeTime(o.SUNRISE_ANGLE,v[1]),v[2]=m.computeMidday(v[2]),v[3]=m.computeAsr(h,v[3]),v[4]=m.computeTime(o.SUNSET_ANGLE,v[4]),A||(v[5]=m.computeTime(c.maghribAngle,v[5])),M||(v[6]=m.computeTime(c.ishaAngle,v[6]));if(d&&(v[2]+=c.dhuhrOffset/60),A&&(v[5]=v[4]+c.maghribOffset/60),M&&(v[6]=v[5]+c.ishaOffset/60),"undefined"!=typeof l){var T=i(v[1]-v[4]),N=T*l(c.fajrAngle),S=T*l(M?18:c.ishaAngle),x=T*l(A?4:c.maghribAngle);(isNaN(v[0])||i(v[1]-v[0])>N)&&(v[0]=v[1]-N),(isNaN(v[5])||i(v[5]-v[4])>x)&&(v[5]=v[4]+x),(isNaN(v[6])||i(v[6]-v[4])>S)&&(v[6]=v[4]+S)}return v[7]=m.computeMidnight(v[g[0]],v[g[1]]),v=v.map(function(t){return t+s-r}),v.map(i)};t.exports=s},function(t,n,r){"use strict";var e=r(5),a=function(t,n){var r="number"==typeof t?t:e(t,n);return 5>r};t.exports=a}]);