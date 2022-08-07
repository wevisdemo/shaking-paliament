import{S as Sr,i as Ir,s as xr,l as u,u as $,a as _,x as mt,m as f,p as y,v as S,h as v,c as M,y as gt,q as g,K as Hn,r as Gt,b as Jn,J as e,z as pt,w as Dr,f as vt,t as bt,C as yt,o as Vr,P as et}from"./index-8e59a807.js";import{i as zr,a as Br}from"./transform-6b7f2bd3.js";import{R as _t}from"./RepPortrait-a320bdfc.js";import{i as Mt,a as at,s as pr}from"./animate.es-ea4cad20.js";import{s as Tr,S as Ar}from"./index.es-f850fcb9.js";function Ft(t,n){return t==null||n==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function Pr(t,n){return t==null||n==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function kr(t){let n,a,r;t.length!==2?(n=Ft,a=(o,d)=>Ft(t(o),d),r=(o,d)=>t(o)-d):(n=t===Ft||t===Pr?t:Gr,a=t,r=t);function s(o,d,c=0,w=o.length){if(c<w){if(n(d,d)!==0)return w;do{const h=c+w>>>1;a(o[h],d)<0?c=h+1:w=h}while(c<w)}return c}function i(o,d,c=0,w=o.length){if(c<w){if(n(d,d)!==0)return w;do{const h=c+w>>>1;a(o[h],d)<=0?c=h+1:w=h}while(c<w)}return c}function l(o,d,c=0,w=o.length){const h=s(o,d,c,w-1);return h>c&&r(o[h-1],d)>-r(o[h],d)?h-1:h}return{left:s,center:l,right:i}}function Gr(){return 0}function Or(t){return t===null?NaN:+t}const Fr=kr(Ft),Cr=Fr.right;kr(Or).center;const qr=Cr;var Kn=Math.sqrt(50),Un=Math.sqrt(10),Zn=Math.sqrt(2);function Lr(t,n,a){var r,s=-1,i,l,o;if(n=+n,t=+t,a=+a,t===n&&a>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),(o=Er(t,n,a))===0||!isFinite(o))return[];if(o>0){let d=Math.round(t/o),c=Math.round(n/o);for(d*o<t&&++d,c*o>n&&--c,l=new Array(i=c-d+1);++s<i;)l[s]=(d+s)*o}else{o=-o;let d=Math.round(t*o),c=Math.round(n*o);for(d/o<t&&++d,c/o>n&&--c,l=new Array(i=c-d+1);++s<i;)l[s]=(d+s)/o}return r&&l.reverse(),l}function Er(t,n,a){var r=(n-t)/Math.max(0,a),s=Math.floor(Math.log(r)/Math.LN10),i=r/Math.pow(10,s);return s>=0?(i>=Kn?10:i>=Un?5:i>=Zn?2:1)*Math.pow(10,s):-Math.pow(10,-s)/(i>=Kn?10:i>=Un?5:i>=Zn?2:1)}function Xr(t,n,a){var r=Math.abs(n-t)/Math.max(0,a),s=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),i=r/s;return i>=Kn?s*=10:i>=Un?s*=5:i>=Zn&&(s*=2),n<t?-s:s}function Yr(t,n){return t=+t,n=+n,function(a){return Math.round(t*(1-a)+n*a)}}function Hr(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function Ct(t,n){if((a=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var a,r=t.slice(0,a);return[r.length>1?r[0]+r.slice(2):r,+t.slice(a+1)]}function kt(t){return t=Ct(Math.abs(t)),t?t[1]:NaN}function Jr(t,n){return function(a,r){for(var s=a.length,i=[],l=0,o=t[0],d=0;s>0&&o>0&&(d+o+1>r&&(o=Math.max(1,r-d)),i.push(a.substring(s-=o,s+o)),!((d+=o+1)>r));)o=t[l=(l+1)%t.length];return i.reverse().join(n)}}function Kr(t){return function(n){return n.replace(/[0-9]/g,function(a){return t[+a]})}}var Ur=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function qt(t){if(!(n=Ur.exec(t)))throw new Error("invalid format: "+t);var n;return new Wn({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}qt.prototype=Wn.prototype;function Wn(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}Wn.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Zr(t){t:for(var n=t.length,a=1,r=-1,s;a<n;++a)switch(t[a]){case".":r=s=a;break;case"0":r===0&&(r=a),s=a;break;default:if(!+t[a])break t;r>0&&(r=0);break}return r>0?t.slice(0,r)+t.slice(s+1):t}var Nr;function Qr(t,n){var a=Ct(t,n);if(!a)return t+"";var r=a[0],s=a[1],i=s-(Nr=Math.max(-8,Math.min(8,Math.floor(s/3)))*3)+1,l=r.length;return i===l?r:i>l?r+new Array(i-l+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Ct(t,Math.max(0,n+i-1))[0]}function vr(t,n){var a=Ct(t,n);if(!a)return t+"";var r=a[0],s=a[1];return s<0?"0."+new Array(-s).join("0")+r:r.length>s+1?r.slice(0,s+1)+"."+r.slice(s+1):r+new Array(s-r.length+2).join("0")}const br={"%":(t,n)=>(t*100).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:Hr,e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>vr(t*100,n),r:vr,s:Qr,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function yr(t){return t}var _r=Array.prototype.map,Mr=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function Wr(t){var n=t.grouping===void 0||t.thousands===void 0?yr:Jr(_r.call(t.grouping,Number),t.thousands+""),a=t.currency===void 0?"":t.currency[0]+"",r=t.currency===void 0?"":t.currency[1]+"",s=t.decimal===void 0?".":t.decimal+"",i=t.numerals===void 0?yr:Kr(_r.call(t.numerals,String)),l=t.percent===void 0?"%":t.percent+"",o=t.minus===void 0?"\u2212":t.minus+"",d=t.nan===void 0?"NaN":t.nan+"";function c(h){h=qt(h);var b=h.fill,x=h.align,D=h.sign,P=h.symbol,V=h.zero,X=h.width,G=h.comma,p=h.precision,Et=h.trim,z=h.type;z==="n"?(G=!0,z="g"):br[z]||(p===void 0&&(p=12),Et=!0,z="g"),(V||b==="0"&&x==="=")&&(V=!0,b="0",x="=");var J=P==="$"?a:P==="#"&&/[boxX]/.test(z)?"0"+z.toLowerCase():"",Nt=P==="$"?r:/[%p]/.test(z)?l:"",Y=br[z],K=/[defgprs%]/.test(z);p=p===void 0?6:/[gprs]/.test(z)?Math.max(1,Math.min(21,p)):Math.max(0,Math.min(20,p));function it(m){var C=J,B=Nt,F,st,T;if(z==="c")B=Y(m)+B,m="";else{m=+m;var q=m<0||1/m<0;if(m=isNaN(m)?d:Y(Math.abs(m),p),Et&&(m=Zr(m)),q&&+m==0&&D!=="+"&&(q=!1),C=(q?D==="("?D:o:D==="-"||D==="("?"":D)+C,B=(z==="s"?Mr[8+Nr/3]:"")+B+(q&&D==="("?")":""),K){for(F=-1,st=m.length;++F<st;)if(T=m.charCodeAt(F),48>T||T>57){B=(T===46?s+m.slice(F+1):m.slice(F))+B,m=m.slice(0,F);break}}}G&&!V&&(m=n(m,1/0));var Q=C.length+m.length+B.length,I=Q<X?new Array(X-Q+1).join(b):"";switch(G&&V&&(m=n(I+m,I.length?X-B.length:1/0),I=""),x){case"<":m=C+m+B+I;break;case"=":m=C+I+m+B;break;case"^":m=I.slice(0,Q=I.length>>1)+C+m+B+I.slice(Q);break;default:m=I+C+m+B;break}return i(m)}return it.toString=function(){return h+""},it}function w(h,b){var x=c((h=qt(h),h.type="f",h)),D=Math.max(-8,Math.min(8,Math.floor(kt(b)/3)))*3,P=Math.pow(10,-D),V=Mr[8+D/3];return function(X){return x(P*X)+V}}return{format:c,formatPrefix:w}}var Ot,Rr,jr;te({thousands:",",grouping:[3],currency:["$",""]});function te(t){return Ot=Wr(t),Rr=Ot.format,jr=Ot.formatPrefix,Ot}function ne(t){return Math.max(0,-kt(Math.abs(t)))}function re(t,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(kt(n)/3)))*3-kt(Math.abs(t)))}function ee(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,kt(n)-kt(t))+1}function ae(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t);break}return this}function ie(t){return function(){return t}}function se(t){return+t}var wr=[0,1];function wt(t){return t}function Qn(t,n){return(n-=t=+t)?function(a){return(a-t)/n}:ie(isNaN(n)?NaN:.5)}function oe(t,n){var a;return t>n&&(a=t,t=n,n=a),function(r){return Math.max(t,Math.min(n,r))}}function le(t,n,a){var r=t[0],s=t[1],i=n[0],l=n[1];return s<r?(r=Qn(s,r),i=a(l,i)):(r=Qn(r,s),i=a(i,l)),function(o){return i(r(o))}}function ce(t,n,a){var r=Math.min(t.length,n.length)-1,s=new Array(r),i=new Array(r),l=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++l<r;)s[l]=Qn(t[l],t[l+1]),i[l]=a(n[l],n[l+1]);return function(o){var d=qr(t,o,1,r)-1;return i[d](s[d](o))}}function ue(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function fe(){var t=wr,n=wr,a=Br,r,s,i,l=wt,o,d,c;function w(){var b=Math.min(t.length,n.length);return l!==wt&&(l=oe(t[0],t[b-1])),o=b>2?ce:le,d=c=null,h}function h(b){return b==null||isNaN(b=+b)?i:(d||(d=o(t.map(r),n,a)))(r(l(b)))}return h.invert=function(b){return l(s((c||(c=o(n,t.map(r),zr)))(b)))},h.domain=function(b){return arguments.length?(t=Array.from(b,se),w()):t.slice()},h.range=function(b){return arguments.length?(n=Array.from(b),w()):n.slice()},h.rangeRound=function(b){return n=Array.from(b),a=Yr,w()},h.clamp=function(b){return arguments.length?(l=b?!0:wt,w()):l!==wt},h.interpolate=function(b){return arguments.length?(a=b,w()):a},h.unknown=function(b){return arguments.length?(i=b,h):i},function(b,x){return r=b,s=x,w()}}function de(){return fe()(wt,wt)}function he(t,n,a,r){var s=Xr(t,n,a),i;switch(r=qt(r==null?",f":r),r.type){case"s":{var l=Math.max(Math.abs(t),Math.abs(n));return r.precision==null&&!isNaN(i=re(s,l))&&(r.precision=i),jr(r,l)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=ee(s,Math.max(Math.abs(t),Math.abs(n))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=ne(s))&&(r.precision=i-(r.type==="%")*2);break}}return Rr(r)}function me(t){var n=t.domain;return t.ticks=function(a){var r=n();return Lr(r[0],r[r.length-1],a==null?10:a)},t.tickFormat=function(a,r){var s=n();return he(s[0],s[s.length-1],a==null?10:a,r)},t.nice=function(a){a==null&&(a=10);var r=n(),s=0,i=r.length-1,l=r[s],o=r[i],d,c,w=10;for(o<l&&(c=l,l=o,o=c,c=s,s=i,i=c);w-- >0;){if(c=Er(l,o,a),c===d)return r[s]=l,r[i]=o,n(r);if(c>0)l=Math.floor(l/c)*c,o=Math.ceil(o/c)*c;else if(c<0)l=Math.ceil(l*c)/c,o=Math.floor(o*c)/c;else break;d=c}return t},t}function $r(){var t=de();return t.copy=function(){return ue(t,$r())},ae.apply(t,arguments),me(t)}function ge(t){let n,a,r,s,i,l,o,d,c,w,h,b,x,D,P,V,X,G,p,Et,z,J,Nt,Y,K,it,m,C,B,F,st,T,q,Q,I,tr,Lt,U,nr,Xt,O,ot,Yt,W,Ht,Jt,Kt,Ut,Rt,Zt,E,jt,Qt,Wt,tn,nn,rn,en,$t,an,sn,on,ln,cn,un,St,fn,dn,hn,mn,gn,pn,vn,bn,yn,_n,lt,Mn,ct,wn,ut,N,ft,kn,En,Nn,Rn,jn,$n,Sn,It,In,xn,Dn,xt,Vn,zn,Bn,Tn,An,Pn,Gn,dt,On,Fn,Cn,Bt,nt,rt,Z,qn,Ln,Xn,Dt,Yn,Vt;return x=new _t({props:{class:"thanathorn-img",color:"#ff6f21",name:"\u0E18\u0E19\u0E32\u0E18\u0E23 \u0E08\u0E36\u0E07\u0E23\u0E38\u0E48\u0E07\u0E40\u0E23\u0E37\u0E2D\u0E07\u0E01\u0E34\u0E08",size:"170px",side:"opp",src:"rp/thanathorn.png"}}),V=new _t({props:{color:"#f0da8c",name:"\u0E18\u0E23\u0E23\u0E21\u0E19\u0E31\u0E2A \u0E1E\u0E23\u0E2B\u0E21\u0E40\u0E1C\u0E48\u0E32",size:"170px",side:"free",src:"rp/thammanas.png"}}),J=new _t({props:{class:"paiboon-img",color:"#f3c628",name:"\u0E44\u0E1E\u0E1A\u0E39\u0E25\u0E22\u0E4C \u0E19\u0E34\u0E15\u0E34\u0E15\u0E30\u0E27\u0E31\u0E19",size:"170px",side:"gov",src:"rp/paiboon.png"}}),K=new _t({props:{color:"#0b3757",name:"\u0E1B\u0E32\u0E23\u0E35\u0E13\u0E32 \u0E44\u0E01\u0E23\u0E04\u0E38\u0E1B\u0E15\u0E4C",size:"170px",side:"gov",src:"rp/parina.png"}}),F=new _t({props:{color:"#e50000",name:"\u0E1E\u0E23\u0E1E\u0E34\u0E21\u0E25 \u0E18\u0E23\u0E23\u0E21\u0E2A\u0E32\u0E23",size:"170px",side:"opp",src:"rp/pornpimol.png"}}),q=new _t({props:{class:"mongkonkit-img",color:"#85e8fe",name:"\u0E21\u0E07\u0E04\u0E25\u0E01\u0E34\u0E15\u0E15\u0E34\u0E4C \u0E2A\u0E38\u0E02\u0E2A\u0E34\u0E19\u0E18\u0E32\u0E23\u0E32\u0E19\u0E19\u0E17\u0E4C",size:"170px",side:"free",src:"rp/mongkonkit.png"}}),{c(){n=u("section"),a=u("div"),r=$(t[7]),s=_(),i=u("div"),l=u("div"),o=u("div"),d=_(),c=u("div"),w=_(),h=u("div"),b=_(),mt(x.$$.fragment),D=_(),P=u("div"),mt(V.$$.fragment),X=_(),G=u("div"),p=u("img"),z=_(),mt(J.$$.fragment),Nt=_(),Y=u("div"),mt(K.$$.fragment),it=_(),m=u("div"),C=u("div"),B=_(),mt(F.$$.fragment),st=_(),T=u("div"),mt(q.$$.fragment),Q=_(),I=u("img"),Lt=_(),U=u("img"),Xt=_(),O=u("div"),ot=u("div"),Yt=_(),W=u("h1"),Ht=$("\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E1C\u0E31\u0E19\u0E41\u0E1B\u0E23\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49"),Jt=u("br"),Kt=$(`
			\u0E01\u0E33\u0E25\u0E31\u0E07\u0E1A\u0E2D\u0E01\u0E2D\u0E30\u0E44\u0E23\u0E40\u0E23\u0E32 ?`),Ut=_(),Rt=u("div"),Zt=_(),E=u("p"),jt=u("strong"),Qt=$("\u0E04\u0E27\u0E32\u0E21\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07"),Wt=$(" \u0E2B\u0E25\u0E31\u0E07\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E24\u0E14\u0E39\u0E01\u0E32\u0E25\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07"),tn=u("br"),nn=_(),rn=u("br"),en=_(),$t=u("strong"),an=$("\u0E04\u0E27\u0E32\u0E21\u0E44\u0E21\u0E48\u0E04\u0E07\u0E17\u0E35\u0E48"),sn=$(" \u0E02\u0E2D\u0E07\u0E08\u0E33\u0E19\u0E27\u0E19 \u0E2A.\u0E2A. \u0E1D\u0E48\u0E32\u0E22\u0E23\u0E31\u0E10\u0E1A\u0E32\u0E25 \u0E41\u0E25\u0E30 \u0E1D\u0E48\u0E32\u0E22\u0E04\u0E49\u0E32\u0E19"),on=u("br"),ln=_(),cn=u("br"),un=_(),St=u("strong"),fn=$("\u0E41\u0E19\u0E27\u0E42\u0E19\u0E49\u0E21"),dn=$(" \u0E02\u0E2D\u0E07\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E25\u0E07\u0E21\u0E15\u0E34\u0E23\u0E31\u0E1A \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E23\u0E31\u0E1A\u0E23\u0E48\u0E32\u0E07\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22"),hn=u("br"),mn=$(`
			\u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19\u0E01\u0E32\u0E23\u0E25\u0E07\u0E21\u0E15\u0E34\u0E2B\u0E25\u0E31\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E20\u0E34\u0E1B\u0E23\u0E32\u0E22\u0E44\u0E21\u0E48\u0E44\u0E27\u0E49\u0E27\u0E32\u0E07\u0E43\u0E08`),gn=u("br"),pn=_(),vn=u("br"),bn=$(`
			\u0E41\u0E25\u0E30\u0E2D\u0E35\u0E01\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22 \u2026`),yn=u("br"),_n=_(),lt=u("div"),Mn=_(),ct=u("div"),wn=_(),ut=u("div"),N=u("p"),ft=u("strong"),kn=$("\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E18\u0E34\u0E1B\u0E44\u0E15\u0E22\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E08\u0E1A\u0E41\u0E04\u0E48\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07"),En=u("br"),Nn=_(),Rn=u("br"),jn=$(`
			\u0E02\u0E2D\u0E0A\u0E27\u0E19\u0E19\u0E31\u0E48\u0E07\u0E44\u0E17\u0E21\u0E4C\u0E41\u0E21\u0E0A\u0E0A\u0E35\u0E19`),$n=u("br"),Sn=$(`
			\u0E44\u0E1B\u0E22\u0E49\u0E2D\u0E19\u0E23\u0E2D\u0E22`),It=u("strong"),In=$("\u0E2B\u0E25\u0E32\u0E01\u0E1B\u0E23\u0E32\u0E01\u0E0F\u0E01\u0E32\u0E23\u0E13\u0E4C"),xn=u("br"),Dn=_(),xt=u("strong"),Vn=$("\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27"),zn=u("br"),Bn=_(),Tn=u("br"),An=$(`
			\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E33\u0E23\u0E27\u0E08`),Pn=u("br"),Gn=_(),dt=u("strong"),On=$("\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E17\u0E35\u0E48\u0E19\u0E31\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E2A\u0E20\u0E32\u0E1C\u0E39\u0E49\u0E41\u0E17\u0E19\u0E23\u0E32\u0E29\u0E0E\u0E23\u0E44\u0E17\u0E22"),Fn=u("br"),Cn=$(`
			\u0E19\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E20\u0E32 \u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21 62`),Bt=_(),nt=u("section"),rt=u("div"),Z=u("div"),qn=$("\u0E40\u0E1E\u0E23\u0E32\u0E30\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E19\u0E31\u0E48\u0E07\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E44\u0E1B"),Ln=u("br"),Xn=_(),Dt=u("strong"),Yn=$("\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2D\u0E30\u0E44\u0E23\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 \u201C\u0E01\u0E32\u0E23\u0E42\u0E22\u0E01\u0E22\u0E49\u0E32\u0E22\u201D"),this.h()},l(k){n=f(k,"SECTION",{class:!0});var A=y(n);a=f(A,"DIV",{class:!0});var rr=y(a);r=S(rr,t[7]),rr.forEach(v),s=M(A),i=f(A,"DIV",{class:!0});var L=y(i);l=f(L,"DIV",{class:!0});var tt=y(l);o=f(tt,"DIV",{class:!0}),y(o).forEach(v),d=M(tt),c=f(tt,"DIV",{class:!0}),y(c).forEach(v),w=M(tt),h=f(tt,"DIV",{class:!0}),y(h).forEach(v),b=M(tt),gt(x.$$.fragment,tt),tt.forEach(v),D=M(L),P=f(L,"DIV",{class:!0});var er=y(P);gt(V.$$.fragment,er),er.forEach(v),X=M(L),G=f(L,"DIV",{class:!0});var Tt=y(G);p=f(Tt,"IMG",{class:!0,src:!0,alt:!0,decoding:!0,loading:!0}),z=M(Tt),gt(J.$$.fragment,Tt),Tt.forEach(v),Nt=M(L),Y=f(L,"DIV",{class:!0});var ar=y(Y);gt(K.$$.fragment,ar),ar.forEach(v),it=M(L),m=f(L,"DIV",{class:!0});var At=y(m);C=f(At,"DIV",{class:!0}),y(C).forEach(v),B=M(At),gt(F.$$.fragment,At),At.forEach(v),st=M(L),T=f(L,"DIV",{class:!0});var ht=y(T);gt(q.$$.fragment,ht),Q=M(ht),I=f(ht,"IMG",{class:!0,src:!0,alt:!0,decoding:!0,loading:!0}),Lt=M(ht),U=f(ht,"IMG",{class:!0,src:!0,alt:!0,decoding:!0,loading:!0}),ht.forEach(v),L.forEach(v),Xt=M(A),O=f(A,"DIV",{class:!0});var H=y(O);ot=f(H,"DIV",{class:!0,style:!0}),y(ot).forEach(v),Yt=M(H),W=f(H,"H1",{class:!0});var Pt=y(W);Ht=S(Pt,"\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E1C\u0E31\u0E19\u0E41\u0E1B\u0E23\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49"),Jt=f(Pt,"BR",{}),Kt=S(Pt,`
			\u0E01\u0E33\u0E25\u0E31\u0E07\u0E1A\u0E2D\u0E01\u0E2D\u0E30\u0E44\u0E23\u0E40\u0E23\u0E32 ?`),Pt.forEach(v),Ut=M(H),Rt=f(H,"DIV",{class:!0}),y(Rt).forEach(v),Zt=M(H),E=f(H,"P",{class:!0});var R=y(E);jt=f(R,"STRONG",{});var ir=y(jt);Qt=S(ir,"\u0E04\u0E27\u0E32\u0E21\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07"),ir.forEach(v),Wt=S(R," \u0E2B\u0E25\u0E31\u0E07\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E24\u0E14\u0E39\u0E01\u0E32\u0E25\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07"),tn=f(R,"BR",{}),nn=M(R),rn=f(R,"BR",{}),en=M(R),$t=f(R,"STRONG",{});var sr=y($t);an=S(sr,"\u0E04\u0E27\u0E32\u0E21\u0E44\u0E21\u0E48\u0E04\u0E07\u0E17\u0E35\u0E48"),sr.forEach(v),sn=S(R," \u0E02\u0E2D\u0E07\u0E08\u0E33\u0E19\u0E27\u0E19 \u0E2A.\u0E2A. \u0E1D\u0E48\u0E32\u0E22\u0E23\u0E31\u0E10\u0E1A\u0E32\u0E25 \u0E41\u0E25\u0E30 \u0E1D\u0E48\u0E32\u0E22\u0E04\u0E49\u0E32\u0E19"),on=f(R,"BR",{}),ln=M(R),cn=f(R,"BR",{}),un=M(R),St=f(R,"STRONG",{});var or=y(St);fn=S(or,"\u0E41\u0E19\u0E27\u0E42\u0E19\u0E49\u0E21"),or.forEach(v),dn=S(R," \u0E02\u0E2D\u0E07\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E25\u0E07\u0E21\u0E15\u0E34\u0E23\u0E31\u0E1A \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E23\u0E31\u0E1A\u0E23\u0E48\u0E32\u0E07\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22"),hn=f(R,"BR",{}),mn=S(R,`
			\u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19\u0E01\u0E32\u0E23\u0E25\u0E07\u0E21\u0E15\u0E34\u0E2B\u0E25\u0E31\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E20\u0E34\u0E1B\u0E23\u0E32\u0E22\u0E44\u0E21\u0E48\u0E44\u0E27\u0E49\u0E27\u0E32\u0E07\u0E43\u0E08`),gn=f(R,"BR",{}),pn=M(R),vn=f(R,"BR",{}),bn=S(R,`
			\u0E41\u0E25\u0E30\u0E2D\u0E35\u0E01\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22 \u2026`),yn=f(R,"BR",{}),R.forEach(v),_n=M(H),lt=f(H,"DIV",{class:!0,style:!0}),y(lt).forEach(v),H.forEach(v),Mn=M(A),ct=f(A,"DIV",{class:!0,style:!0}),y(ct).forEach(v),wn=M(A),ut=f(A,"DIV",{class:!0});var lr=y(ut);N=f(lr,"P",{class:!0});var j=y(N);ft=f(j,"STRONG",{class:!0});var cr=y(ft);kn=S(cr,"\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E18\u0E34\u0E1B\u0E44\u0E15\u0E22\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E08\u0E1A\u0E41\u0E04\u0E48\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E49\u0E07"),cr.forEach(v),En=f(j,"BR",{}),Nn=M(j),Rn=f(j,"BR",{}),jn=S(j,`
			\u0E02\u0E2D\u0E0A\u0E27\u0E19\u0E19\u0E31\u0E48\u0E07\u0E44\u0E17\u0E21\u0E4C\u0E41\u0E21\u0E0A\u0E0A\u0E35\u0E19`),$n=f(j,"BR",{}),Sn=S(j,`
			\u0E44\u0E1B\u0E22\u0E49\u0E2D\u0E19\u0E23\u0E2D\u0E22`),It=f(j,"STRONG",{});var ur=y(It);In=S(ur,"\u0E2B\u0E25\u0E32\u0E01\u0E1B\u0E23\u0E32\u0E01\u0E0F\u0E01\u0E32\u0E23\u0E13\u0E4C"),ur.forEach(v),xn=f(j,"BR",{}),Dn=M(j),xt=f(j,"STRONG",{});var fr=y(xt);Vn=S(fr,"\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27"),fr.forEach(v),zn=f(j,"BR",{}),Bn=M(j),Tn=f(j,"BR",{}),An=S(j,`
			\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E33\u0E23\u0E27\u0E08`),Pn=f(j,"BR",{}),Gn=M(j),dt=f(j,"STRONG",{class:!0});var dr=y(dt);On=S(dr,"\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E17\u0E35\u0E48\u0E19\u0E31\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E2A\u0E20\u0E32\u0E1C\u0E39\u0E49\u0E41\u0E17\u0E19\u0E23\u0E32\u0E29\u0E0E\u0E23\u0E44\u0E17\u0E22"),dr.forEach(v),Fn=f(j,"BR",{}),Cn=S(j,`
			\u0E19\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E20\u0E32 \u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21 62`),j.forEach(v),lr.forEach(v),A.forEach(v),Bt=M(k),nt=f(k,"SECTION",{class:!0});var hr=y(nt);rt=f(hr,"DIV",{class:!0,style:!0});var mr=y(rt);Z=f(mr,"DIV",{class:!0});var zt=y(Z);qn=S(zt,"\u0E40\u0E1E\u0E23\u0E32\u0E30\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E19\u0E31\u0E48\u0E07\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E44\u0E1B"),Ln=f(zt,"BR",{}),Xn=M(zt),Dt=f(zt,"STRONG",{});var gr=y(Dt);Yn=S(gr,"\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19\u0E2D\u0E30\u0E44\u0E23\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 \u201C\u0E01\u0E32\u0E23\u0E42\u0E22\u0E01\u0E22\u0E49\u0E32\u0E22\u201D"),gr.forEach(v),zt.forEach(v),mr.forEach(v),hr.forEach(v),this.h()},h(){g(a,"class","T1 counter-decor svelte-1bij525"),g(o,"class","circle1 svelte-1bij525"),g(c,"class","circle2 svelte-1bij525"),g(h,"class","circle3 svelte-1bij525"),g(l,"class","thanathorn-img-container svelte-1bij525"),g(P,"class","thammanas-img svelte-1bij525"),g(p,"class","back svelte-1bij525"),Hn(p.src,Et="shaking-parliament/star_01.svg")||g(p,"src",Et),g(p,"alt",""),g(p,"decoding","async"),g(p,"loading","lazy"),g(G,"class","paiboon-img-container svelte-1bij525"),g(Y,"class","parina-img svelte-1bij525"),g(C,"class","back svelte-1bij525"),g(m,"class","pornpimol-img-container svelte-1bij525"),g(I,"class","circle1 svelte-1bij525"),Hn(I.src,tr="shaking-parliament/circles_02.svg")||g(I,"src",tr),g(I,"alt",""),g(I,"decoding","async"),g(I,"loading","lazy"),g(U,"class","circle2 svelte-1bij525"),Hn(U.src,nr="shaking-parliament/circles_02.svg")||g(U,"src",nr),g(U,"alt",""),g(U,"decoding","async"),g(U,"loading","lazy"),g(T,"class","mongkonkit-img-container svelte-1bij525"),g(i,"class","decor svelte-1bij525"),g(ot,"class","s"),Gt(ot,"--s","1rem"),g(W,"class","T1 svelte-1bij525"),g(Rt,"class","line svelte-1bij525"),g(E,"class","tc svelte-1bij525"),g(lt,"class","s"),Gt(lt,"--s","15vh"),g(O,"class","c"),g(ct,"class","s"),Gt(ct,"--s","15vh"),g(ft,"class","bigger svelte-1bij525"),g(dt,"class","bigger svelte-1bij525"),g(N,"class","s3-2 tc svelte-1bij525"),g(ut,"class","c"),g(n,"class","s3-container svelte-1bij525"),g(Z,"class","h100 stick c T1 s4-title svelte-1bij525"),g(rt,"class","fade-bg svelte-1bij525"),Gt(rt,"--h","300vh"),g(nt,"class","s4")},m(k,A){Jn(k,n,A),e(n,a),e(a,r),e(n,s),e(n,i),e(i,l),e(l,o),e(l,d),e(l,c),e(l,w),e(l,h),e(l,b),pt(x,l,null),t[8](l),e(i,D),e(i,P),pt(V,P,null),t[9](P),e(i,X),e(i,G),e(G,p),e(G,z),pt(J,G,null),t[10](G),e(i,Nt),e(i,Y),pt(K,Y,null),t[11](Y),e(i,it),e(i,m),e(m,C),e(m,B),pt(F,m,null),t[12](m),e(i,st),e(i,T),pt(q,T,null),e(T,Q),e(T,I),e(T,Lt),e(T,U),t[13](T),e(n,Xt),e(n,O),e(O,ot),e(O,Yt),e(O,W),e(W,Ht),e(W,Jt),e(W,Kt),e(O,Ut),e(O,Rt),e(O,Zt),e(O,E),e(E,jt),e(jt,Qt),e(E,Wt),e(E,tn),e(E,nn),e(E,rn),e(E,en),e(E,$t),e($t,an),e(E,sn),e(E,on),e(E,ln),e(E,cn),e(E,un),e(E,St),e(St,fn),e(E,dn),e(E,hn),e(E,mn),e(E,gn),e(E,pn),e(E,vn),e(E,bn),e(E,yn),e(O,_n),e(O,lt),t[14](O),e(n,Mn),e(n,ct),e(n,wn),e(n,ut),e(ut,N),e(N,ft),e(ft,kn),e(N,En),e(N,Nn),e(N,Rn),e(N,jn),e(N,$n),e(N,Sn),e(N,It),e(It,In),e(N,xn),e(N,Dn),e(N,xt),e(xt,Vn),e(N,zn),e(N,Bn),e(N,Tn),e(N,An),e(N,Pn),e(N,Gn),e(N,dt),e(dt,On),e(N,Fn),e(N,Cn),Jn(k,Bt,A),Jn(k,nt,A),e(nt,rt),e(rt,Z),e(Z,qn),e(Z,Ln),e(Z,Xn),e(Z,Dt),e(Dt,Yn),Vt=!0},p(k,[A]){(!Vt||A&128)&&Dr(r,k[7])},i(k){Vt||(vt(x.$$.fragment,k),vt(V.$$.fragment,k),vt(J.$$.fragment,k),vt(K.$$.fragment,k),vt(F.$$.fragment,k),vt(q.$$.fragment,k),Vt=!0)},o(k){bt(x.$$.fragment,k),bt(V.$$.fragment,k),bt(J.$$.fragment,k),bt(K.$$.fragment,k),bt(F.$$.fragment,k),bt(q.$$.fragment,k),Vt=!1},d(k){k&&v(n),yt(x),t[8](null),yt(V),t[9](null),yt(J),t[10](null),yt(K),t[11](null),yt(F),t[12](null),yt(q),t[13](null),t[14](null),k&&v(Bt),k&&v(nt)}}}function pe(t,n,a){let r,s,i,l,o,d,c,w=$r().domain([0,1]).range([500,485]),h=500;Vr(()=>{Tr(({y:p})=>{a(7,h=~~w(p.progress))},{target:r,offset:[...Ar.Enter]}),Mt(i,()=>{at(i,{opacity:1,transform:["scale(0)","scale(1)"]},{duration:1})},{amount:1}),Mt(s,()=>{at([...s.children],{opacity:1,transform:["translateY(100px)","translateY(0px)"]},{duration:1,delay:pr(.25)})},{amount:1}),Mt(l,()=>{at(l.children[0],{opacity:1,transform:["translate(-70%, 10%) scale(0)","translate(-70%, 10%) scale(1)"]},{duration:1}),at(l.children[1],{opacity:1,transform:["translateX(-500px)","translateX(0px)"]},{duration:1})},{amount:1}),Mt(o,()=>{at(o,{opacity:1,transform:["translateY(-101px)","translateY(0px)"]},{duration:1})},{amount:1}),Mt(d,()=>{at(d,{opacity:1,transform:["translateX(500px)","translateX(0px)"]},{duration:1})},{amount:1}),Mt(c,()=>{at([...c.children],{opacity:1,transform:["scale(0)","scale(1)"]},{duration:1,delay:pr(.25)})},{amount:1})});function b(p){et[p?"unshift":"push"](()=>{s=p,a(1,s)})}function x(p){et[p?"unshift":"push"](()=>{i=p,a(2,i)})}function D(p){et[p?"unshift":"push"](()=>{l=p,a(3,l)})}function P(p){et[p?"unshift":"push"](()=>{o=p,a(4,o)})}function V(p){et[p?"unshift":"push"](()=>{d=p,a(5,d)})}function X(p){et[p?"unshift":"push"](()=>{c=p,a(6,c)})}function G(p){et[p?"unshift":"push"](()=>{r=p,a(0,r)})}return[r,s,i,l,o,d,c,h,b,x,D,P,V,X,G]}class we extends Sr{constructor(n){super(),Ir(this,n,pe,ge,xr,{})}}export{we as default};
