(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Er="162",dl=0,Gr=1,ul=2,br=1,fl=2,on=3,yn=0,Pt=1,Kt=2,vn=0,kn=1,ur=2,Hr=3,Vr=4,pl=5,Fn=100,ml=101,gl=102,Wr=103,Xr=104,_l=200,xl=201,vl=202,Ml=203,fr=204,pr=205,Sl=206,yl=207,El=208,bl=209,Tl=210,wl=211,Al=212,Rl=213,Cl=214,Pl=0,Ll=1,Il=2,us=3,Dl=4,Ul=5,Nl=6,Ol=7,bo=0,Fl=1,Bl=2,Mn=0,zl=1,kl=2,Gl=3,To=4,Hl=5,Vl=6,Wl=7,wo=300,pi=301,mi=302,mr=303,gr=304,vs=306,_r=1e3,Vt=1001,xr=1002,Mt=1003,Yr=1004,yi=1005,lt=1006,Rs=1007,zn=1008,Sn=1009,Xl=1010,Yl=1011,Tr=1012,Ao=1013,_n=1014,$t=1015,Di=1016,Ro=1017,Co=1018,Gn=1020,ql=1021,Wt=1023,jl=1024,Kl=1025,Hn=1026,gi=1027,Po=1028,Lo=1029,$l=1030,Io=1031,Do=1033,Cs=33776,Ps=33777,Ls=33778,Is=33779,qr=35840,jr=35841,Kr=35842,$r=35843,Uo=36196,Zr=37492,Jr=37496,Qr=37808,ea=37809,ta=37810,na=37811,ia=37812,sa=37813,ra=37814,aa=37815,oa=37816,la=37817,ca=37818,ha=37819,da=37820,ua=37821,Ds=36492,fa=36494,pa=36495,Zl=36283,ma=36284,ga=36285,_a=36286,Jl=3200,Ql=3201,No=0,ec=1,mn="",qt="srgb",bn="srgb-linear",wr="display-p3",Ms="display-p3-linear",fs="linear",tt="srgb",ps="rec709",ms="p3",qn=7680,xa=519,tc=512,nc=513,ic=514,Oo=515,sc=516,rc=517,ac=518,oc=519,va=35044,Ma="300 es",vr=1035,ln=2e3,gs=2001;class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sa=1234567;const Pi=Math.PI/180,Ui=180/Math.PI;function vi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function Ar(n,e){return(n%e+e)%e}function lc(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function cc(n,e,t){return n!==e?(t-n)/(e-n):0}function Li(n,e,t){return(1-t)*n+t*e}function hc(n,e,t,i){return Li(n,e,1-Math.exp(-t*i))}function dc(n,e=1){return e-Math.abs(Ar(n,e*2)-e)}function uc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fc(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function pc(n,e){return n+Math.floor(Math.random()*(e-n+1))}function mc(n,e){return n+Math.random()*(e-n)}function gc(n){return n*(.5-Math.random())}function _c(n){n!==void 0&&(Sa=n);let e=Sa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xc(n){return n*Pi}function vc(n){return n*Ui}function Mr(n){return(n&n-1)===0&&n!==0}function Mc(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _s(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sc(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),f=r((e-i)/2),p=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*f,l*p,a*c);break;case"YZY":n.set(l*p,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*p,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Rn={DEG2RAD:Pi,RAD2DEG:Ui,generateUUID:vi,clamp:bt,euclideanModulo:Ar,mapLinear:lc,inverseLerp:cc,lerp:Li,damp:hc,pingpong:dc,smoothstep:uc,smootherstep:fc,randInt:pc,randFloat:mc,randFloatSpread:gc,seededRandom:_c,degToRad:xc,radToDeg:vc,isPowerOfTwo:Mr,ceilPowerOfTwo:Mc,floorPowerOfTwo:_s,setQuaternionFromProperEuler:Sc,normalize:Rt,denormalize:hi};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],p=i[2],m=i[5],g=i[8],_=s[0],u=s[3],d=s[6],y=s[1],v=s[4],S=s[7],P=s[2],C=s[5],A=s[8];return r[0]=o*_+a*y+l*P,r[3]=o*u+a*v+l*C,r[6]=o*d+a*S+l*A,r[1]=c*_+h*y+f*P,r[4]=c*u+h*v+f*C,r[7]=c*d+h*S+f*A,r[2]=p*_+m*y+g*P,r[5]=p*u+m*v+g*C,r[8]=p*d+m*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,p=a*l-h*r,m=c*r-o*l,g=t*f+i*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=p*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Us.makeScale(e,t)),this}rotate(e){return this.premultiply(Us.makeRotation(-e)),this}translate(e,t){return this.premultiply(Us.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Us=new Ge;function Fo(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yc(){const n=xs("canvas");return n.style.display="block",n}const ya={};function Ec(n){n in ya||(ya[n]=!0,console.warn(n))}const Ea=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ba=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zi={[bn]:{transfer:fs,primaries:ps,toReference:n=>n,fromReference:n=>n},[qt]:{transfer:tt,primaries:ps,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ms]:{transfer:fs,primaries:ms,toReference:n=>n.applyMatrix3(ba),fromReference:n=>n.applyMatrix3(Ea)},[wr]:{transfer:tt,primaries:ms,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ba),fromReference:n=>n.applyMatrix3(Ea).convertLinearToSRGB()}},bc=new Set([bn,Ms]),Ke={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!bc.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=zi[e].toReference,s=zi[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return zi[n].primaries},getTransfer:function(n){return n===mn?fs:zi[n].transfer}};function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let jn;class Bo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jn===void 0&&(jn=xs("canvas")),jn.width=e.width,jn.height=e.height;const i=jn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fi(t[i]/255)*255):t[i]=fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tc=0;class zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Os(s[o].image)):r.push(Os(s[o]))}else r=Os(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Os(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wc=0;class Tt extends xi{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=Vt,s=Vt,r=lt,o=zn,a=Wt,l=Sn,c=Tt.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=vi(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _r:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _r:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=wo;Tt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],m=l[5],g=l[9],_=l[2],u=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-u)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+u)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(m+1)/2,P=(d+1)/2,C=(h+p)/4,A=(f+_)/4,F=(g+u)/4;return v>S&&v>P?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=C/i,r=A/i):S>P?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=C/s,r=F/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=A/r,s=F/r),this.set(i,s,r,t),this}let y=Math.sqrt((u-g)*(u-g)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(u-g)/y,this.y=(f-_)/y,this.z=(p-h)/y,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ac extends xi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:lt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const r=new Tt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Ac{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ko extends Tt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rc extends Tt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const p=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==p||c!==m||h!==g){let u=1-a;const d=l*p+c*m+h*g+f*_,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const P=Math.sqrt(v),C=Math.atan2(P,d*y);u=Math.sin(u*C)/P,a=Math.sin(a*C)/P}const S=a*y;if(l=l*u+p*S,c=c*u+m*S,h=h*u+g*S,f=f*u+_*S,u===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*m-c*p,e[t+1]=l*g+h*p+c*f-a*m,e[t+2]=c*g+h*m+a*p-l*f,e[t+3]=h*g-a*f-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),p=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*f+c*m*g,this._y=c*m*f-p*h*g,this._z=c*h*g+p*m*f,this._w=c*h*f-p*m*g;break;case"YXZ":this._x=p*h*f+c*m*g,this._y=c*m*f-p*h*g,this._z=c*h*g-p*m*f,this._w=c*h*f+p*m*g;break;case"ZXY":this._x=p*h*f-c*m*g,this._y=c*m*f+p*h*g,this._z=c*h*g+p*m*f,this._w=c*h*f-p*m*g;break;case"ZYX":this._x=p*h*f-c*m*g,this._y=c*m*f+p*h*g,this._z=c*h*g-p*m*f,this._w=c*h*f+p*m*g;break;case"YZX":this._x=p*h*f+c*m*g,this._y=c*m*f+p*h*g,this._z=c*h*g-p*m*f,this._w=c*h*f-p*m*g;break;case"XZY":this._x=p*h*f-c*m*g,this._y=c*m*f-p*h*g,this._z=c*h*g+p*m*f,this._w=c*h*f+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],p=i+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ta.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ta.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fs.copy(this).projectOnVector(e),this.sub(Fs)}reflect(e){return this.sub(Fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fs=new U,Ta=new Oi;class Wn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kt):kt.fromBufferAttribute(r,o),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ki.copy(i.boundingBox)),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),Gi.subVectors(this.max,Ei),Kn.subVectors(e.a,Ei),$n.subVectors(e.b,Ei),Zn.subVectors(e.c,Ei),cn.subVectors($n,Kn),hn.subVectors(Zn,$n),Cn.subVectors(Kn,Zn);let t=[0,-cn.z,cn.y,0,-hn.z,hn.y,0,-Cn.z,Cn.y,cn.z,0,-cn.x,hn.z,0,-hn.x,Cn.z,0,-Cn.x,-cn.y,cn.x,0,-hn.y,hn.x,0,-Cn.y,Cn.x,0];return!Bs(t,Kn,$n,Zn,Gi)||(t=[1,0,0,0,1,0,0,0,1],!Bs(t,Kn,$n,Zn,Gi))?!1:(Hi.crossVectors(cn,hn),t=[Hi.x,Hi.y,Hi.z],Bs(t,Kn,$n,Zn,Gi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new U,new U,new U,new U,new U,new U,new U,new U],kt=new U,ki=new Wn,Kn=new U,$n=new U,Zn=new U,cn=new U,hn=new U,Cn=new U,Ei=new U,Gi=new U,Hi=new U,Pn=new U;function Bs(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Pn.fromArray(n,r);const a=s.x*Math.abs(Pn.x)+s.y*Math.abs(Pn.y)+s.z*Math.abs(Pn.z),l=e.dot(Pn),c=t.dot(Pn),h=i.dot(Pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Cc=new Wn,bi=new U,zs=new U;class Xn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cc.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(bi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add(zs)),this.expandByPoint(bi.copy(e.center).sub(zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new U,ks=new U,Vi=new U,dn=new U,Gs=new U,Wi=new U,Hs=new U;class Rr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ks.copy(e).add(t).multiplyScalar(.5),Vi.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(ks);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Vi),a=dn.dot(this.direction),l=-dn.dot(Vi),c=dn.lengthSq(),h=Math.abs(1-o*o);let f,p,m,g;if(h>0)if(f=o*l-a,p=o*a-l,g=r*h,f>=0)if(p>=-g)if(p<=g){const _=1/h;f*=_,p*=_,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ks).addScaledVector(Vi,p),m}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const i=nn.dot(this.direction),s=nn.dot(nn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,i,s,r){Gs.subVectors(t,e),Wi.subVectors(i,e),Hs.crossVectors(Gs,Wi);let o=this.direction.dot(Hs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dn.subVectors(this.origin,e);const l=a*this.direction.dot(Wi.crossVectors(dn,Wi));if(l<0)return null;const c=a*this.direction.dot(Gs.cross(dn));if(c<0||l+c>o)return null;const h=-a*dn.dot(Hs);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,i,s,r,o,a,l,c,h,f,p,m,g,_,u){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,p,m,g,_,u)}set(e,t,i,s,r,o,a,l,c,h,f,p,m,g,_,u){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=p,d[3]=m,d[7]=g,d[11]=_,d[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Jn.setFromMatrixColumn(e,0).length(),r=1/Jn.setFromMatrixColumn(e,1).length(),o=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const p=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=p-_*c,t[9]=-a*l,t[2]=_-p*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*h,m=l*f,g=c*h,_=c*f;t[0]=p+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*h,m=l*f,g=c*h,_=c*f;t[0]=p-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-m,t[8]=p*c+_,t[1]=l*f,t[5]=_*c+p,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-p*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*f+g,t[10]=p-_*f}else if(e.order==="XZY"){const p=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=p*f+_,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*h,t[10]=_*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pc,e,Lc)}lookAt(e,t,i){const s=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),un.crossVectors(i,It),un.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),un.crossVectors(i,It)),un.normalize(),Xi.crossVectors(It,un),s[0]=un.x,s[4]=Xi.x,s[8]=It.x,s[1]=un.y,s[5]=Xi.y,s[9]=It.y,s[2]=un.z,s[6]=Xi.z,s[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],p=i[9],m=i[13],g=i[2],_=i[6],u=i[10],d=i[14],y=i[3],v=i[7],S=i[11],P=i[15],C=s[0],A=s[4],F=s[8],Z=s[12],x=s[1],b=s[5],Y=s[9],K=s[13],L=s[2],B=s[6],k=s[10],J=s[14],X=s[3],$=s[7],R=s[11],T=s[15];return r[0]=o*C+a*x+l*L+c*X,r[4]=o*A+a*b+l*B+c*$,r[8]=o*F+a*Y+l*k+c*R,r[12]=o*Z+a*K+l*J+c*T,r[1]=h*C+f*x+p*L+m*X,r[5]=h*A+f*b+p*B+m*$,r[9]=h*F+f*Y+p*k+m*R,r[13]=h*Z+f*K+p*J+m*T,r[2]=g*C+_*x+u*L+d*X,r[6]=g*A+_*b+u*B+d*$,r[10]=g*F+_*Y+u*k+d*R,r[14]=g*Z+_*K+u*J+d*T,r[3]=y*C+v*x+S*L+P*X,r[7]=y*A+v*b+S*B+P*$,r[11]=y*F+v*Y+S*k+P*R,r[15]=y*Z+v*K+S*J+P*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],m=e[14],g=e[3],_=e[7],u=e[11],d=e[15];return g*(+r*l*f-s*c*f-r*a*p+i*c*p+s*a*m-i*l*m)+_*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+u*(+t*c*f-t*a*m-r*o*f+i*o*m+r*a*h-i*c*h)+d*(-s*a*h-t*l*f+t*a*p+s*o*f-i*o*p+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],m=e[11],g=e[12],_=e[13],u=e[14],d=e[15],y=f*u*c-_*p*c+_*l*m-a*u*m-f*l*d+a*p*d,v=g*p*c-h*u*c-g*l*m+o*u*m+h*l*d-o*p*d,S=h*_*c-g*f*c+g*a*m-o*_*m-h*a*d+o*f*d,P=g*f*l-h*_*l-g*a*p+o*_*p+h*a*u-o*f*u,C=t*y+i*v+s*S+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=y*A,e[1]=(_*p*r-f*u*r-_*s*m+i*u*m+f*s*d-i*p*d)*A,e[2]=(a*u*r-_*l*r+_*s*c-i*u*c-a*s*d+i*l*d)*A,e[3]=(f*l*r-a*p*r-f*s*c+i*p*c+a*s*m-i*l*m)*A,e[4]=v*A,e[5]=(h*u*r-g*p*r+g*s*m-t*u*m-h*s*d+t*p*d)*A,e[6]=(g*l*r-o*u*r-g*s*c+t*u*c+o*s*d-t*l*d)*A,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*m+t*l*m)*A,e[8]=S*A,e[9]=(g*f*r-h*_*r-g*i*m+t*_*m+h*i*d-t*f*d)*A,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*d+t*a*d)*A,e[11]=(h*a*r-o*f*r-h*i*c+t*f*c+o*i*m-t*a*m)*A,e[12]=P*A,e[13]=(h*_*s-g*f*s+g*i*p-t*_*p-h*i*u+t*f*u)*A,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*u-t*a*u)*A,e[15]=(o*f*s-h*a*s+h*i*l-t*f*l-o*i*p+t*a*p)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,p=r*c,m=r*h,g=r*f,_=o*h,u=o*f,d=a*f,y=l*c,v=l*h,S=l*f,P=i.x,C=i.y,A=i.z;return s[0]=(1-(_+d))*P,s[1]=(m+S)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(m-S)*C,s[5]=(1-(p+d))*C,s[6]=(u+y)*C,s[7]=0,s[8]=(g+v)*A,s[9]=(u-y)*A,s[10]=(1-(p+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Jn.set(s[0],s[1],s[2]).length();const o=Jn.set(s[4],s[5],s[6]).length(),a=Jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gt.copy(this);const c=1/r,h=1/o,f=1/a;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=h,Gt.elements[5]*=h,Gt.elements[6]*=h,Gt.elements[8]*=f,Gt.elements[9]*=f,Gt.elements[10]*=f,t.setFromRotationMatrix(Gt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ln){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let m,g;if(a===ln)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===gs)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ln){const l=this.elements,c=1/(t-e),h=1/(i-s),f=1/(o-r),p=(t+e)*c,m=(i+s)*h;let g,_;if(a===ln)g=(o+r)*f,_=-2*f;else if(a===gs)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Jn=new U,Gt=new $e,Pc=new U(0,0,0),Lc=new U(1,1,1),un=new U,Xi=new U,It=new U,wa=new $e,Aa=new Oi;class Qt{constructor(e=0,t=0,i=0,s=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Aa.setFromEuler(this),this.setFromQuaternion(Aa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class Go{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ic=0;const Ra=new U,Qn=new Oi,sn=new $e,Yi=new U,Ti=new U,Dc=new U,Uc=new Oi,Ca=new U(1,0,0),Pa=new U(0,1,0),La=new U(0,0,1),Nc={type:"added"},Oc={type:"removed"},Vs={type:"childadded",child:null},Ws={type:"childremoved",child:null};class ut extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new U,t=new Qt,i=new Oi,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Ge}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(Ca,e)}rotateY(e){return this.rotateOnAxis(Pa,e)}rotateZ(e){return this.rotateOnAxis(La,e)}translateOnAxis(e,t){return Ra.copy(e).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ca,e)}translateY(e){return this.translateOnAxis(Pa,e)}translateZ(e){return this.translateOnAxis(La,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yi.copy(e):Yi.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Ti,Yi,this.up):sn.lookAt(Yi,Ti,this.up),this.quaternion.setFromRotationMatrix(sn),s&&(sn.extractRotation(s.matrixWorld),Qn.setFromRotationMatrix(sn),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nc),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oc),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,e,Dc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,Uc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ut.DEFAULT_UP=new U(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new U,rn=new U,Xs=new U,an=new U,ei=new U,ti=new U,Ia=new U,Ys=new U,qs=new U,js=new U;class Zt{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ht.subVectors(e,t),s.cross(Ht);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ht.subVectors(s,t),rn.subVectors(i,t),Xs.subVectors(e,t);const o=Ht.dot(Ht),a=Ht.dot(rn),l=Ht.dot(Xs),c=rn.dot(rn),h=rn.dot(Xs),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,an)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,an.x),l.addScaledVector(o,an.y),l.addScaledVector(a,an.z),l)}static isFrontFacing(e,t,i,s){return Ht.subVectors(i,t),rn.subVectors(e,t),Ht.cross(rn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Ht.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Zt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ei.subVectors(s,i),ti.subVectors(r,i),Ys.subVectors(e,i);const l=ei.dot(Ys),c=ti.dot(Ys);if(l<=0&&c<=0)return t.copy(i);qs.subVectors(e,s);const h=ei.dot(qs),f=ti.dot(qs);if(h>=0&&f<=h)return t.copy(s);const p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ei,o);js.subVectors(e,r);const m=ei.dot(js),g=ti.dot(js);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ti,a);const u=h*g-m*f;if(u<=0&&f-h>=0&&m-g>=0)return Ia.subVectors(r,s),a=(f-h)/(f-h+(m-g)),t.copy(s).addScaledVector(Ia,a);const d=1/(u+_+p);return o=_*d,a=p*d,t.copy(i).addScaledVector(ei,o).addScaledVector(ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ho={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},qi={h:0,s:0,l:0};function Ks(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=Ar(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ks(o,r,e+1/3),this.g=Ks(o,r,e),this.b=Ks(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=Ho[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Ke.fromWorkingColorSpace(Et.copy(this),e),Math.round(bt(Et.r*255,0,255))*65536+Math.round(bt(Et.g*255,0,255))*256+Math.round(bt(Et.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,s=Et.g,r=Et.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=qt){Ke.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,s=Et.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(qi);const i=Li(fn.h,qi.h,t),s=Li(fn.s,qi.s,t),r=Li(fn.l,qi.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Ue;Ue.NAMES=Ho;let Fc=0;class Yn extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=kn,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fr,this.blendDst=pr,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(i.blending=this.blending),this.side!==yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fr&&(i.blendSrc=this.blendSrc),this.blendDst!==pr&&(i.blendDst=this.blendDst),this.blendEquation!==Fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jt extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new U,ji=new Ve;class Nt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=va,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ec("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==va&&(e.usage=this.usage),e}}class Vo extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wo extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class et extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bc=0;const Bt=new $e,$s=new ut,ni=new U,Dt=new Wn,wi=new Wn,_t=new U;class wt extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fo(e)?Wo:Vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];wi.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Dt.min,wi.min),Dt.expandByPoint(_t),_t.addVectors(Dt.max,wi.max),Dt.expandByPoint(_t)):(Dt.expandByPoint(wi.min),Dt.expandByPoint(wi.max))}Dt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_t.fromBufferAttribute(a,c),l&&(ni.fromBufferAttribute(e,c),_t.add(ni)),s=Math.max(s,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new U,l[F]=new U;const c=new U,h=new U,f=new U,p=new Ve,m=new Ve,g=new Ve,_=new U,u=new U;function d(F,Z,x){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,Z),f.fromBufferAttribute(i,x),p.fromBufferAttribute(r,F),m.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,x),h.sub(c),f.sub(c),m.sub(p),g.sub(p);const b=1/(m.x*g.y-g.x*m.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(b),u.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(b),a[F].add(_),a[Z].add(_),a[x].add(_),l[F].add(u),l[Z].add(u),l[x].add(u))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,Z=y.length;F<Z;++F){const x=y[F],b=x.start,Y=x.count;for(let K=b,L=b+Y;K<L;K+=3)d(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const v=new U,S=new U,P=new U,C=new U;function A(F){P.fromBufferAttribute(s,F),C.copy(P);const Z=a[F];v.copy(Z),v.sub(P.multiplyScalar(P.dot(Z))).normalize(),S.crossVectors(C,Z);const b=S.dot(l[F])<0?-1:1;o.setXYZW(F,v.x,v.y,v.z,b)}for(let F=0,Z=y.length;F<Z;++F){const x=y[F],b=x.start,Y=x.count;for(let K=b,L=b+Y;K<L;K+=3)A(e.getX(K+0)),A(e.getX(K+1)),A(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,f=new U;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),_=e.getX(p+1),u=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,u),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,u),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(u,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,p=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,u=l.length;_<u;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let d=0;d<h;d++)p[g++]=c[m++]}return new Nt(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const p=c[h],m=e(p,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Da=new $e,Ln=new Rr,Ki=new Xn,Ua=new U,ii=new U,si=new U,ri=new U,Zs=new U,$i=new U,Zi=new Ve,Ji=new Ve,Qi=new Ve,Na=new U,Oa=new U,Fa=new U,es=new U,ts=new U;class te extends ut{constructor(e=new wt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){$i.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(Zs.fromBufferAttribute(f,e),o?$i.addScaledVector(Zs,h):$i.addScaledVector(Zs.sub(t),h))}t.add($i)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ki.copy(i.boundingSphere),Ki.applyMatrix4(r),Ln.copy(e.ray).recast(e.near),!(Ki.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(Ki,Ua)===null||Ln.origin.distanceToSquared(Ua)>(e.far-e.near)**2))&&(Da.copy(r).invert(),Ln.copy(e.ray).applyMatrix4(Da),!(i.boundingBox!==null&&Ln.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ln)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const u=p[g],d=o[u.materialIndex],y=Math.max(u.start,m.start),v=Math.min(a.count,Math.min(u.start+u.count,m.start+m.count));for(let S=y,P=v;S<P;S+=3){const C=a.getX(S),A=a.getX(S+1),F=a.getX(S+2);s=ns(this,d,e,i,c,h,f,C,A,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let u=g,d=_;u<d;u+=3){const y=a.getX(u),v=a.getX(u+1),S=a.getX(u+2);s=ns(this,o,e,i,c,h,f,y,v,S),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const u=p[g],d=o[u.materialIndex],y=Math.max(u.start,m.start),v=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let S=y,P=v;S<P;S+=3){const C=S,A=S+1,F=S+2;s=ns(this,d,e,i,c,h,f,C,A,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let u=g,d=_;u<d;u+=3){const y=u,v=u+1,S=u+2;s=ns(this,o,e,i,c,h,f,y,v,S),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}}function zc(n,e,t,i,s,r,o,a){let l;if(e.side===Pt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===yn,a),l===null)return null;ts.copy(a),ts.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ts);return c<t.near||c>t.far?null:{distance:c,point:ts.clone(),object:n}}function ns(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ii),n.getVertexPosition(l,si),n.getVertexPosition(c,ri);const h=zc(n,e,t,i,ii,si,ri,es);if(h){s&&(Zi.fromBufferAttribute(s,a),Ji.fromBufferAttribute(s,l),Qi.fromBufferAttribute(s,c),h.uv=Zt.getInterpolation(es,ii,si,ri,Zi,Ji,Qi,new Ve)),r&&(Zi.fromBufferAttribute(r,a),Ji.fromBufferAttribute(r,l),Qi.fromBufferAttribute(r,c),h.uv1=Zt.getInterpolation(es,ii,si,ri,Zi,Ji,Qi,new Ve)),o&&(Na.fromBufferAttribute(o,a),Oa.fromBufferAttribute(o,l),Fa.fromBufferAttribute(o,c),h.normal=Zt.getInterpolation(es,ii,si,ri,Na,Oa,Fa,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};Zt.getNormal(ii,si,ri,f.normal),h.face=f}return h}class Pe extends wt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(f,2));function g(_,u,d,y,v,S,P,C,A,F,Z){const x=S/A,b=P/F,Y=S/2,K=P/2,L=C/2,B=A+1,k=F+1;let J=0,X=0;const $=new U;for(let R=0;R<k;R++){const T=R*b-K;for(let j=0;j<B;j++){const se=j*x-Y;$[_]=se*y,$[u]=T*v,$[d]=L,c.push($.x,$.y,$.z),$[_]=0,$[u]=0,$[d]=C>0?1:-1,h.push($.x,$.y,$.z),f.push(j/A),f.push(1-R/F),J+=1}}for(let R=0;R<F;R++)for(let T=0;T<A;T++){const j=p+T+B*R,se=p+T+B*(R+1),N=p+(T+1)+B*(R+1),V=p+(T+1)+B*R;l.push(j,se,V),l.push(se,N,V),X+=6}a.addGroup(m,X,Z),m+=X,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=_i(n[t]);for(const s in i)e[s]=i[s]}return e}function kc(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xo(n){return n.getRenderTarget()===null?n.outputColorSpace:Ke.workingColorSpace}const Gc={clone:_i,merge:Ct};var Hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hc,this.fragmentShader=Vc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yo extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new U,Ba=new Ve,za=new Ve;class Ut extends Yo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ui*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(Pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pn.x,pn.y).multiplyScalar(-e/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pn.x,pn.y).multiplyScalar(-e/pn.z)}getViewSize(e,t){return this.getViewBounds(e,Ba,za),t.subVectors(za,Ba)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pi*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ai=-90,oi=1;class Wc extends ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ut(ai,oi,e,t);s.layers=this.layers,this.add(s);const r=new Ut(ai,oi,e,t);r.layers=this.layers,this.add(r);const o=new Ut(ai,oi,e,t);o.layers=this.layers,this.add(o);const a=new Ut(ai,oi,e,t);a.layers=this.layers,this.add(a);const l=new Ut(ai,oi,e,t);l.layers=this.layers,this.add(l);const c=new Ut(ai,oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class qo extends Tt{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xc extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new qo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pe(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:_i(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:vn});r.uniforms.tEquirect.value=t;const o=new te(s,r),a=t.minFilter;return t.minFilter===zn&&(t.minFilter=lt),new Wc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Js=new U,Yc=new U,qc=new Ge;class Nn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Js.subVectors(i,t).cross(Yc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Js),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qc.getNormalMatrix(e),s=this.coplanarPoint(Js).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Xn,is=new U;class Cr{constructor(e=new Nn,t=new Nn,i=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ln){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],p=s[7],m=s[8],g=s[9],_=s[10],u=s[11],d=s[12],y=s[13],v=s[14],S=s[15];if(i[0].setComponents(l-r,p-c,u-m,S-d).normalize(),i[1].setComponents(l+r,p+c,u+m,S+d).normalize(),i[2].setComponents(l+o,p+h,u+g,S+y).normalize(),i[3].setComponents(l-o,p-h,u-g,S-y).normalize(),i[4].setComponents(l-a,p-f,u-_,S-v).normalize(),t===ln)i[5].setComponents(l+a,p+f,u+_,S+v).normalize();else if(t===gs)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(is.x=s.normal.x>0?e.max.x:e.min.x,is.y=s.normal.y>0?e.max.y:e.min.y,is.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jo(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function jc(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,h){const f=c.array,p=c.usage,m=f.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,f,p),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,f){const p=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(f,c),m.count===-1&&g.length===0&&n.bufferSubData(f,0,p),g.length!==0){for(let _=0,u=g.length;_<u;_++){const d=g[_];t?n.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):n.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}class dt extends wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,p=t/l,m=[],g=[],_=[],u=[];for(let d=0;d<h;d++){const y=d*p-o;for(let v=0;v<c;v++){const S=v*f-r;g.push(S,-y,0),_.push(0,0,1),u.push(v/a),u.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const v=y+c*d,S=y+c*(d+1),P=y+1+c*(d+1),C=y+1+c*d;m.push(v,S,C),m.push(S,P,C)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Kc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$c=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,th=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ih=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ah=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ch=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Th="gl_FragColor = linearToOutputTexel( gl_FragColor );",wh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ah=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ch=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ih=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$h=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ud=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Od=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$d=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,iu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,su=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,au=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ou=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,du=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_u=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Au=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ru=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Kc,alphahash_pars_fragment:$c,alphamap_fragment:Zc,alphamap_pars_fragment:Jc,alphatest_fragment:Qc,alphatest_pars_fragment:eh,aomap_fragment:th,aomap_pars_fragment:nh,batching_pars_vertex:ih,batching_vertex:sh,begin_vertex:rh,beginnormal_vertex:ah,bsdfs:oh,iridescence_fragment:lh,bumpmap_pars_fragment:ch,clipping_planes_fragment:hh,clipping_planes_pars_fragment:dh,clipping_planes_pars_vertex:uh,clipping_planes_vertex:fh,color_fragment:ph,color_pars_fragment:mh,color_pars_vertex:gh,color_vertex:_h,common:xh,cube_uv_reflection_fragment:vh,defaultnormal_vertex:Mh,displacementmap_pars_vertex:Sh,displacementmap_vertex:yh,emissivemap_fragment:Eh,emissivemap_pars_fragment:bh,colorspace_fragment:Th,colorspace_pars_fragment:wh,envmap_fragment:Ah,envmap_common_pars_fragment:Rh,envmap_pars_fragment:Ch,envmap_pars_vertex:Ph,envmap_physical_pars_fragment:Hh,envmap_vertex:Lh,fog_vertex:Ih,fog_pars_vertex:Dh,fog_fragment:Uh,fog_pars_fragment:Nh,gradientmap_pars_fragment:Oh,lightmap_fragment:Fh,lightmap_pars_fragment:Bh,lights_lambert_fragment:zh,lights_lambert_pars_fragment:kh,lights_pars_begin:Gh,lights_toon_fragment:Vh,lights_toon_pars_fragment:Wh,lights_phong_fragment:Xh,lights_phong_pars_fragment:Yh,lights_physical_fragment:qh,lights_physical_pars_fragment:jh,lights_fragment_begin:Kh,lights_fragment_maps:$h,lights_fragment_end:Zh,logdepthbuf_fragment:Jh,logdepthbuf_pars_fragment:Qh,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:td,map_fragment:nd,map_pars_fragment:id,map_particle_fragment:sd,map_particle_pars_fragment:rd,metalnessmap_fragment:ad,metalnessmap_pars_fragment:od,morphinstance_vertex:ld,morphcolor_vertex:cd,morphnormal_vertex:hd,morphtarget_pars_vertex:dd,morphtarget_vertex:ud,normal_fragment_begin:fd,normal_fragment_maps:pd,normal_pars_fragment:md,normal_pars_vertex:gd,normal_vertex:_d,normalmap_pars_fragment:xd,clearcoat_normal_fragment_begin:vd,clearcoat_normal_fragment_maps:Md,clearcoat_pars_fragment:Sd,iridescence_pars_fragment:yd,opaque_fragment:Ed,packing:bd,premultiplied_alpha_fragment:Td,project_vertex:wd,dithering_fragment:Ad,dithering_pars_fragment:Rd,roughnessmap_fragment:Cd,roughnessmap_pars_fragment:Pd,shadowmap_pars_fragment:Ld,shadowmap_pars_vertex:Id,shadowmap_vertex:Dd,shadowmask_pars_fragment:Ud,skinbase_vertex:Nd,skinning_pars_vertex:Od,skinning_vertex:Fd,skinnormal_vertex:Bd,specularmap_fragment:zd,specularmap_pars_fragment:kd,tonemapping_fragment:Gd,tonemapping_pars_fragment:Hd,transmission_fragment:Vd,transmission_pars_fragment:Wd,uv_pars_fragment:Xd,uv_pars_vertex:Yd,uv_vertex:qd,worldpos_vertex:jd,background_vert:Kd,background_frag:$d,backgroundCube_vert:Zd,backgroundCube_frag:Jd,cube_vert:Qd,cube_frag:eu,depth_vert:tu,depth_frag:nu,distanceRGBA_vert:iu,distanceRGBA_frag:su,equirect_vert:ru,equirect_frag:au,linedashed_vert:ou,linedashed_frag:lu,meshbasic_vert:cu,meshbasic_frag:hu,meshlambert_vert:du,meshlambert_frag:uu,meshmatcap_vert:fu,meshmatcap_frag:pu,meshnormal_vert:mu,meshnormal_frag:gu,meshphong_vert:_u,meshphong_frag:xu,meshphysical_vert:vu,meshphysical_frag:Mu,meshtoon_vert:Su,meshtoon_frag:yu,points_vert:Eu,points_frag:bu,shadow_vert:Tu,shadow_frag:wu,sprite_vert:Au,sprite_frag:Ru},fe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},jt={basic:{uniforms:Ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ct([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ct([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ct([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ct([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ct([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ct([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ct([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ct([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Ct([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Ct([fe.lights,fe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};jt.physical={uniforms:Ct([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ss={r:0,b:0,g:0},Dn=new Qt,Cu=new $e;function Pu(n,e,t,i,s,r,o){const a=new Ue(0);let l=r===!0?0:1,c,h,f=null,p=0,m=null;function g(u,d){let y=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===vs)?(h===void 0&&(h=new te(new Pe(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:_i(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Dn.copy(d.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cu.makeRotationFromEuler(Dn)),h.material.toneMapped=Ke.getTransfer(v.colorSpace)!==tt,(f!==v||p!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=v,p=v.version,m=n.toneMapping),h.layers.enableAll(),u.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new te(new dt(2,2),new En({name:"BackgroundMaterial",uniforms:_i(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,p=v.version,m=n.toneMapping),c.layers.enableAll(),u.unshift(c,c.geometry,c.material,0,0,null))}function _(u,d){u.getRGB(ss,Xo(n)),i.buffers.color.setClear(ss.r,ss.g,ss.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(u,d=1){a.set(u),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(u){l=u,_(a,l)},render:g}}function Lu(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=u(null);let c=l,h=!1;function f(L,B,k,J,X){let $=!1;if(o){const R=_(J,k,B);c!==R&&(c=R,m(c.object)),$=d(L,J,k,X),$&&y(L,J,k,X)}else{const R=B.wireframe===!0;(c.geometry!==J.id||c.program!==k.id||c.wireframe!==R)&&(c.geometry=J.id,c.program=k.id,c.wireframe=R,$=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,F(L,B,k,J),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function p(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,B,k){const J=k.wireframe===!0;let X=a[L.id];X===void 0&&(X={},a[L.id]=X);let $=X[B.id];$===void 0&&($={},X[B.id]=$);let R=$[J];return R===void 0&&(R=u(p()),$[J]=R),R}function u(L){const B=[],k=[],J=[];for(let X=0;X<s;X++)B[X]=0,k[X]=0,J[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:J,object:L,attributes:{},index:null}}function d(L,B,k,J){const X=c.attributes,$=B.attributes;let R=0;const T=k.getAttributes();for(const j in T)if(T[j].location>=0){const N=X[j];let V=$[j];if(V===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),N===void 0||N.attribute!==V||V&&N.data!==V.data)return!0;R++}return c.attributesNum!==R||c.index!==J}function y(L,B,k,J){const X={},$=B.attributes;let R=0;const T=k.getAttributes();for(const j in T)if(T[j].location>=0){let N=$[j];N===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(N=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(N=L.instanceColor));const V={};V.attribute=N,N&&N.data&&(V.data=N.data),X[j]=V,R++}c.attributes=X,c.attributesNum=R,c.index=J}function v(){const L=c.newAttributes;for(let B=0,k=L.length;B<k;B++)L[B]=0}function S(L){P(L,0)}function P(L,B){const k=c.newAttributes,J=c.enabledAttributes,X=c.attributeDivisors;k[L]=1,J[L]===0&&(n.enableVertexAttribArray(L),J[L]=1),X[L]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),X[L]=B)}function C(){const L=c.newAttributes,B=c.enabledAttributes;for(let k=0,J=B.length;k<J;k++)B[k]!==L[k]&&(n.disableVertexAttribArray(k),B[k]=0)}function A(L,B,k,J,X,$,R){R===!0?n.vertexAttribIPointer(L,B,k,X,$):n.vertexAttribPointer(L,B,k,J,X,$)}function F(L,B,k,J){if(i.isWebGL2===!1&&(L.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const X=J.attributes,$=k.getAttributes(),R=B.defaultAttributeValues;for(const T in $){const j=$[T];if(j.location>=0){let se=X[T];if(se===void 0&&(T==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),T==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),se!==void 0){const N=se.normalized,V=se.itemSize,Q=t.get(se);if(Q===void 0)continue;const re=Q.buffer,ae=Q.type,ne=Q.bytesPerElement,_e=i.isWebGL2===!0&&(ae===n.INT||ae===n.UNSIGNED_INT||se.gpuType===Ao);if(se.isInterleavedBufferAttribute){const ue=se.data,I=ue.stride,We=se.offset;if(ue.isInstancedInterleavedBuffer){for(let le=0;le<j.locationSize;le++)P(j.location+le,ue.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let le=0;le<j.locationSize;le++)S(j.location+le);n.bindBuffer(n.ARRAY_BUFFER,re);for(let le=0;le<j.locationSize;le++)A(j.location+le,V/j.locationSize,ae,N,I*ne,(We+V/j.locationSize*le)*ne,_e)}else{if(se.isInstancedBufferAttribute){for(let ue=0;ue<j.locationSize;ue++)P(j.location+ue,se.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ue=0;ue<j.locationSize;ue++)S(j.location+ue);n.bindBuffer(n.ARRAY_BUFFER,re);for(let ue=0;ue<j.locationSize;ue++)A(j.location+ue,V/j.locationSize,ae,N,V*ne,V/j.locationSize*ue*ne,_e)}}else if(R!==void 0){const N=R[T];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(j.location,N);break;case 3:n.vertexAttrib3fv(j.location,N);break;case 4:n.vertexAttrib4fv(j.location,N);break;default:n.vertexAttrib1fv(j.location,N)}}}}C()}function Z(){Y();for(const L in a){const B=a[L];for(const k in B){const J=B[k];for(const X in J)g(J[X].object),delete J[X];delete B[k]}delete a[L]}}function x(L){if(a[L.id]===void 0)return;const B=a[L.id];for(const k in B){const J=B[k];for(const X in J)g(J[X].object),delete J[X];delete B[k]}delete a[L.id]}function b(L){for(const B in a){const k=a[B];if(k[L.id]===void 0)continue;const J=k[L.id];for(const X in J)g(J[X].object),delete J[X];delete k[L.id]}}function Y(){K(),h=!0,c!==l&&(c=l,m(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:K,dispose:Z,releaseStatesOfGeometry:x,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:S,disableUnusedAttributes:C}}function Iu(n,e,t,i){const s=i.isWebGL2;let r;function o(h){r=h}function a(h,f){n.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,p){if(p===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,f,p),t.update(f,r,p)}function c(h,f,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(h[g],f[g]);else{m.multiDrawArraysWEBGL(r,h,0,f,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Du(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),u=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,S=o||e.has("OES_texture_float"),P=v&&S,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:u,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:C}}function Uu(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Nn,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,m){const g=f.clippingPlanes,_=f.clipIntersection,u=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!u)r?h(null):c();else{const y=r?0:i,v=y*4;let S=d.clippingState||null;l.value=S,S=h(g,p,v,m);for(let P=0;P!==v;++P)S[P]=t[P];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,m,g){const _=f!==null?f.length:0;let u=null;if(_!==0){if(u=l.value,g!==!0||u===null){const d=m+_*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(u===null||u.length<d)&&(u=new Float32Array(d));for(let v=0,S=m;v!==_;++v,S+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(u,S),u[S+3]=o.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,u}}function Nu(n){let e=new WeakMap;function t(o,a){return a===mr?o.mapping=pi:a===gr&&(o.mapping=mi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===mr||a===gr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xc(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Ko extends Yo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const di=4,ka=[.125,.215,.35,.446,.526,.582],Bn=20,Qs=new Ko,Ga=new Ue;let er=null,tr=0,nr=0;const On=(1+Math.sqrt(5))/2,li=1/On,Ha=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,On,li),new U(0,On,-li),new U(li,0,On),new U(-li,0,On),new U(On,li,0),new U(-On,li,0)];class Va{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){er=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(er,tr,nr),e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),er=this._renderer.getRenderTarget(),tr=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:lt,minFilter:lt,generateMipmaps:!1,type:Di,format:Wt,colorSpace:bn,depthBuffer:!1},s=Wa(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wa(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ou(r)),this._blurMaterial=Fu(r,e,t)}return s}_compileMaterial(e){const t=new te(this._lodPlanes[0],e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,i,s){const a=new Ut(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Ga),h.toneMapping=Mn,h.autoClear=!1;const m=new Jt({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new te(new Pe,m);let _=!1;const u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,_=!0):(m.color.copy(Ga),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;rs(s,y*v,d>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=u}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===pi||e.mapping===mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ha[(s-1)%Ha.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new te(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),_=r/g,u=isFinite(r)?1+Math.floor(h*_):Bn;u>Bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Bn}`);const d=[];let y=0;for(let A=0;A<Bn;++A){const F=A/_,Z=Math.exp(-F*F/2);d.push(Z),A===0?y+=Z:A<u&&(y+=2*Z)}for(let A=0;A<d.length;A++)d[A]=d[A]/y;p.envMap.value=e.texture,p.samples.value=u,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-i;const S=this._sizeLods[s],P=3*S*(s>v-di?s-v+di:0),C=4*(this._cubeSize-S);rs(t,P,C,3*S,2*S),l.setRenderTarget(t),l.render(f,Qs)}}function Ou(n){const e=[],t=[],i=[];let s=n;const r=n-di+1+ka.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-di?l=ka[o-n+di-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,_=3,u=2,d=1,y=new Float32Array(_*g*m),v=new Float32Array(u*g*m),S=new Float32Array(d*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,F=C>2?0:-1,Z=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];y.set(Z,_*g*C),v.set(p,u*g*C);const x=[C,C,C,C,C,C];S.set(x,d*g*C)}const P=new wt;P.setAttribute("position",new Nt(y,_)),P.setAttribute("uv",new Nt(v,u)),P.setAttribute("faceIndex",new Nt(S,d)),e.push(P),s>di&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wa(n,e,t){const i=new Vn(n,e,t);return i.texture.mapping=vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Fu(n,e,t){const i=new Float32Array(Bn),s=new U(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Xa(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ya(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Pr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bu(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===mr||l===gr,h=l===pi||l===mi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Va(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new Va(n));const p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zu(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ku(n,e,t,i){const s={},r=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let u=0,d=_.length;u<d;u++)e.remove(_[u])}p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(f){const p=f.attributes;for(const g in p)e.update(p[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let u=0,d=_.length;u<d;u++)e.update(_[u],n.ARRAY_BUFFER)}}function c(f){const p=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,S=y.length;v<S;v+=3){const P=y[v+0],C=y[v+1],A=y[v+2];p.push(P,C,C,A,A,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const P=v+0,C=v+1,A=v+2;p.push(P,C,C,A,A,P)}}else return;const u=new(Fo(p)?Wo:Vo)(p,1);u.version=_;const d=r.get(f);d&&e.remove(d),r.set(f,u)}function h(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Gu(n,e,t,i){const s=i.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*l),t.update(g,r,1)}function f(m,g,_){if(_===0)return;let u,d;if(s)u=n,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[d](r,g,a,m*l,_),t.update(g,r,_)}function p(m,g,_){if(_===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{u.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let d=0;for(let y=0;y<_;y++)d+=g[y];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function Hu(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Vu(n,e){return n[0]-e[0]}function Wu(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Xu(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new st,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let u=r.get(h);if(u===void 0||u.count!==_){let K=function(){b.dispose(),r.delete(h),h.removeEventListener("dispose",K)};var m=K;u!==void 0&&u.texture.dispose();const d=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let A=0;d===!0&&(A=1),y===!0&&(A=2),v===!0&&(A=3);let F=h.attributes.position.count*A,Z=1;F>e.maxTextureSize&&(Z=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const x=new Float32Array(F*Z*4*_),b=new ko(x,F,Z,_);b.type=$t,b.needsUpdate=!0;const Y=A*4;for(let L=0;L<_;L++){const B=S[L],k=P[L],J=C[L],X=F*Z*4*L;for(let $=0;$<B.count;$++){const R=$*Y;d===!0&&(o.fromBufferAttribute(B,$),x[X+R+0]=o.x,x[X+R+1]=o.y,x[X+R+2]=o.z,x[X+R+3]=0),y===!0&&(o.fromBufferAttribute(k,$),x[X+R+4]=o.x,x[X+R+5]=o.y,x[X+R+6]=o.z,x[X+R+7]=0),v===!0&&(o.fromBufferAttribute(J,$),x[X+R+8]=o.x,x[X+R+9]=o.y,x[X+R+10]=o.z,x[X+R+11]=J.itemSize===4?o.w:1)}}u={count:_,texture:b,size:new Ve(F,Z)},r.set(h,u),h.addEventListener("dispose",K)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let d=0;for(let v=0;v<p.length;v++)d+=p[v];const y=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",p)}f.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}else{const g=p===void 0?0:p.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];i[h.id]=_}for(let S=0;S<g;S++){const P=_[S];P[0]=S,P[1]=p[S]}_.sort(Wu);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Vu);const u=h.morphAttributes.position,d=h.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const P=a[S],C=P[0],A=P[1];C!==Number.MAX_SAFE_INTEGER&&A?(u&&h.getAttribute("morphTarget"+S)!==u[C]&&h.setAttribute("morphTarget"+S,u[C]),d&&h.getAttribute("morphNormal"+S)!==d[C]&&h.setAttribute("morphNormal"+S,d[C]),s[S]=A,y+=A):(u&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),d&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),s[S]=0)}const v=h.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Yu(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class $o extends Tt{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Hn,h!==Hn&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Hn&&(i=_n),i===void 0&&h===gi&&(i=Gn),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zo=new Tt,Jo=new $o(1,1);Jo.compareFunction=Oo;const Qo=new ko,el=new Rc,tl=new qo,qa=[],ja=[],Ka=new Float32Array(16),$a=new Float32Array(9),Za=new Float32Array(4);function Mi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=qa[s];if(r===void 0&&(r=new Float32Array(s),qa[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ss(n,e){let t=ja[e];t===void 0&&(t=new Int32Array(e),ja[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qu(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ju(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function Ku(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function $u(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function Zu(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Za.set(i),n.uniformMatrix2fv(this.addr,!1,Za),mt(t,i)}}function Ju(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;$a.set(i),n.uniformMatrix3fv(this.addr,!1,$a),mt(t,i)}}function Qu(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Ka.set(i),n.uniformMatrix4fv(this.addr,!1,Ka),mt(t,i)}}function ef(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function nf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function sf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function rf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function af(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function of(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function lf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function cf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Jo:Zo;t.setTexture2D(e||r,s)}function hf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||el,s)}function df(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||tl,s)}function uf(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Qo,s)}function ff(n){switch(n){case 5126:return qu;case 35664:return ju;case 35665:return Ku;case 35666:return $u;case 35674:return Zu;case 35675:return Ju;case 35676:return Qu;case 5124:case 35670:return ef;case 35667:case 35671:return tf;case 35668:case 35672:return nf;case 35669:case 35673:return sf;case 5125:return rf;case 36294:return af;case 36295:return of;case 36296:return lf;case 35678:case 36198:case 36298:case 36306:case 35682:return cf;case 35679:case 36299:case 36307:return hf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return uf}}function pf(n,e){n.uniform1fv(this.addr,e)}function mf(n,e){const t=Mi(e,this.size,2);n.uniform2fv(this.addr,t)}function gf(n,e){const t=Mi(e,this.size,3);n.uniform3fv(this.addr,t)}function _f(n,e){const t=Mi(e,this.size,4);n.uniform4fv(this.addr,t)}function xf(n,e){const t=Mi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vf(n,e){const t=Mi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Mf(n,e){const t=Mi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sf(n,e){n.uniform1iv(this.addr,e)}function yf(n,e){n.uniform2iv(this.addr,e)}function Ef(n,e){n.uniform3iv(this.addr,e)}function bf(n,e){n.uniform4iv(this.addr,e)}function Tf(n,e){n.uniform1uiv(this.addr,e)}function wf(n,e){n.uniform2uiv(this.addr,e)}function Af(n,e){n.uniform3uiv(this.addr,e)}function Rf(n,e){n.uniform4uiv(this.addr,e)}function Cf(n,e,t){const i=this.cache,s=e.length,r=Ss(t,s);pt(i,r)||(n.uniform1iv(this.addr,r),mt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zo,r[o])}function Pf(n,e,t){const i=this.cache,s=e.length,r=Ss(t,s);pt(i,r)||(n.uniform1iv(this.addr,r),mt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||el,r[o])}function Lf(n,e,t){const i=this.cache,s=e.length,r=Ss(t,s);pt(i,r)||(n.uniform1iv(this.addr,r),mt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||tl,r[o])}function If(n,e,t){const i=this.cache,s=e.length,r=Ss(t,s);pt(i,r)||(n.uniform1iv(this.addr,r),mt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qo,r[o])}function Df(n){switch(n){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return _f;case 35674:return xf;case 35675:return vf;case 35676:return Mf;case 5124:case 35670:return Sf;case 35667:case 35671:return yf;case 35668:case 35672:return Ef;case 35669:case 35673:return bf;case 5125:return Tf;case 36294:return wf;case 36295:return Af;case 36296:return Rf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return If}}class Uf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ff(t.type)}}class Nf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Df(t.type)}}class Of{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ir=/(\w+)(\])?(\[|\.)?/g;function Ja(n,e){n.seq.push(e),n.map[e.id]=e}function Ff(n,e,t){const i=n.name,s=i.length;for(ir.lastIndex=0;;){const r=ir.exec(i),o=ir.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ja(t,c===void 0?new Uf(a,n,e):new Nf(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Of(a),Ja(t,f)),t=f}}}class ds{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ff(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Qa(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Bf=37297;let zf=0;function kf(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Gf(n){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(n);let i;switch(e===t?i="":e===ms&&t===ps?i="LinearDisplayP3ToLinearSRGB":e===ps&&t===ms&&(i="LinearSRGBToLinearDisplayP3"),n){case bn:case Ms:return[i,"LinearTransferOETF"];case qt:case wr:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function eo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+kf(n.getShaderSource(e),o)}else return s}function Hf(n,e){const t=Gf(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vf(n,e){let t;switch(e){case zl:t="Linear";break;case kl:t="Reinhard";break;case Gl:t="OptimizedCineon";break;case To:t="ACESFilmic";break;case Vl:t="AgX";break;case Wl:t="Neutral";break;case Hl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wf(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ui).join(`
`)}function Xf(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ui).join(`
`)}function Yf(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qf(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ui(n){return n!==""}function to(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function no(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sr(n){return n.replace(jf,$f)}const Kf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $f(n,e){let t=ke[e];if(t===void 0){const i=Kf.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sr(t)}const Zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function io(n){return n.replace(Zf,Jf)}function Jf(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function so(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qf(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===br?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===on&&(e="SHADOWMAP_TYPE_VSM"),e}function ep(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function np(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bo:e="ENVMAP_BLENDING_MULTIPLY";break;case Fl:e="ENVMAP_BLENDING_MIX";break;case Bl:e="ENVMAP_BLENDING_ADD";break}return e}function ip(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function sp(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Qf(t),c=ep(t),h=tp(t),f=np(t),p=ip(t),m=t.isWebGL2?"":Wf(t),g=Xf(t),_=Yf(r),u=s.createProgram();let d,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ui).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ui).join(`
`),y.length>0&&(y+=`
`)):(d=[so(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ui).join(`
`),y=[m,so(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Vf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Hf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ui).join(`
`)),o=Sr(o),o=to(o,t),o=no(o,t),a=Sr(a),a=to(a,t),a=no(a,t),o=io(o),a=io(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+d+o,P=v+y+a,C=Qa(s,s.VERTEX_SHADER,S),A=Qa(s,s.FRAGMENT_SHADER,P);s.attachShader(u,C),s.attachShader(u,A),t.index0AttributeName!==void 0?s.bindAttribLocation(u,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(u,0,"position"),s.linkProgram(u);function F(Y){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(u).trim(),L=s.getShaderInfoLog(C).trim(),B=s.getShaderInfoLog(A).trim();let k=!0,J=!0;if(s.getProgramParameter(u,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,u,C,A);else{const X=eo(s,C,"vertex"),$=eo(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(u,s.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+K+`
`+X+`
`+$)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||B==="")&&(J=!1);J&&(Y.diagnostics={runnable:k,programLog:K,vertexShader:{log:L,prefix:d},fragmentShader:{log:B,prefix:y}})}s.deleteShader(C),s.deleteShader(A),Z=new ds(s,u),x=qf(s,u)}let Z;this.getUniforms=function(){return Z===void 0&&F(this),Z};let x;this.getAttributes=function(){return x===void 0&&F(this),x};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(u,Bf)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(u),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zf++,this.cacheKey=e,this.usedTimes=1,this.program=u,this.vertexShader=C,this.fragmentShader=A,this}let rp=0;class ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new op(e),t.set(e,i)),i}}class op{constructor(e){this.id=rp++,this.code=e,this.usedTimes=0}}function lp(n,e,t,i,s,r,o){const a=new Go,l=new ap,c=new Set,h=[],f=s.isWebGL2,p=s.logarithmicDepthBuffer,m=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return c.add(x),x===0?"uv":`uv${x}`}function d(x,b,Y,K,L){const B=K.fog,k=L.geometry,J=x.isMeshStandardMaterial?K.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||J),$=X&&X.mapping===vs?X.image.height:null,R=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const T=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,j=T!==void 0?T.length:0;let se=0;k.morphAttributes.position!==void 0&&(se=1),k.morphAttributes.normal!==void 0&&(se=2),k.morphAttributes.color!==void 0&&(se=3);let N,V,Q,re;if(R){const Ze=jt[R];N=Ze.vertexShader,V=Ze.fragmentShader}else N=x.vertexShader,V=x.fragmentShader,l.update(x),Q=l.getVertexShaderID(x),re=l.getFragmentShaderID(x);const ae=n.getRenderTarget(),ne=L.isInstancedMesh===!0,_e=L.isBatchedMesh===!0,ue=!!x.map,I=!!x.matcap,We=!!X,le=!!x.aoMap,Se=!!x.lightMap,Me=!!x.bumpMap,Ae=!!x.normalMap,Te=!!x.displacementMap,Le=!!x.emissiveMap,je=!!x.metalnessMap,w=!!x.roughnessMap,M=x.anisotropy>0,q=x.clearcoat>0,ee=x.iridescence>0,oe=x.sheen>0,ie=x.transmission>0,Ne=M&&!!x.anisotropyMap,Re=q&&!!x.clearcoatMap,he=q&&!!x.clearcoatNormalMap,pe=q&&!!x.clearcoatRoughnessMap,De=ee&&!!x.iridescenceMap,ce=ee&&!!x.iridescenceThicknessMap,ot=oe&&!!x.sheenColorMap,Xe=oe&&!!x.sheenRoughnessMap,we=!!x.specularMap,ye=!!x.specularColorMap,Ee=!!x.specularIntensityMap,qe=ie&&!!x.transmissionMap,Fe=ie&&!!x.thicknessMap,nt=!!x.gradientMap,D=!!x.alphaMap,me=x.alphaTest>0,G=!!x.alphaHash,de=!!x.extensions;let ge=Mn;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ge=n.toneMapping);const Ye={isWebGL2:f,shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:N,fragmentShader:V,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:_e,instancing:ne,instancingColor:ne&&L.instanceColor!==null,instancingMorph:ne&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:bn,alphaToCoverage:!!x.alphaToCoverage,map:ue,matcap:I,envMap:We,envMapMode:We&&X.mapping,envMapCubeUVHeight:$,aoMap:le,lightMap:Se,bumpMap:Me,normalMap:Ae,displacementMap:m&&Te,emissiveMap:Le,normalMapObjectSpace:Ae&&x.normalMapType===ec,normalMapTangentSpace:Ae&&x.normalMapType===No,metalnessMap:je,roughnessMap:w,anisotropy:M,anisotropyMap:Ne,clearcoat:q,clearcoatMap:Re,clearcoatNormalMap:he,clearcoatRoughnessMap:pe,iridescence:ee,iridescenceMap:De,iridescenceThicknessMap:ce,sheen:oe,sheenColorMap:ot,sheenRoughnessMap:Xe,specularMap:we,specularColorMap:ye,specularIntensityMap:Ee,transmission:ie,transmissionMap:qe,thicknessMap:Fe,gradientMap:nt,opaque:x.transparent===!1&&x.blending===kn&&x.alphaToCoverage===!1,alphaMap:D,alphaTest:me,alphaHash:G,combine:x.combine,mapUv:ue&&u(x.map.channel),aoMapUv:le&&u(x.aoMap.channel),lightMapUv:Se&&u(x.lightMap.channel),bumpMapUv:Me&&u(x.bumpMap.channel),normalMapUv:Ae&&u(x.normalMap.channel),displacementMapUv:Te&&u(x.displacementMap.channel),emissiveMapUv:Le&&u(x.emissiveMap.channel),metalnessMapUv:je&&u(x.metalnessMap.channel),roughnessMapUv:w&&u(x.roughnessMap.channel),anisotropyMapUv:Ne&&u(x.anisotropyMap.channel),clearcoatMapUv:Re&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&u(x.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&u(x.sheenRoughnessMap.channel),specularMapUv:we&&u(x.specularMap.channel),specularColorMapUv:ye&&u(x.specularColorMap.channel),specularIntensityMapUv:Ee&&u(x.specularIntensityMap.channel),transmissionMapUv:qe&&u(x.transmissionMap.channel),thicknessMapUv:Fe&&u(x.thicknessMap.channel),alphaMapUv:D&&u(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ae||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(ue||D),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:ge,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ue&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Kt,flipSided:x.side===Pt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:de&&x.extensions.derivatives===!0,extensionFragDepth:de&&x.extensions.fragDepth===!0,extensionDrawBuffers:de&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:de&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function y(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Y in x.defines)b.push(Y),b.push(x.defines[Y]);return x.isRawShaderMaterial===!1&&(v(b,x),S(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function v(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function S(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.instancingMorph&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.normalMapObjectSpace&&a.enable(7),b.normalMapTangentSpace&&a.enable(8),b.clearcoat&&a.enable(9),b.iridescence&&a.enable(10),b.alphaTest&&a.enable(11),b.vertexColors&&a.enable(12),b.vertexAlphas&&a.enable(13),b.vertexUv1s&&a.enable(14),b.vertexUv2s&&a.enable(15),b.vertexUv3s&&a.enable(16),b.vertexTangents&&a.enable(17),b.anisotropy&&a.enable(18),b.alphaHash&&a.enable(19),b.batching&&a.enable(20),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const b=_[x.type];let Y;if(b){const K=jt[b];Y=Gc.clone(K.uniforms)}else Y=x.uniforms;return Y}function C(x,b){let Y;for(let K=0,L=h.length;K<L;K++){const B=h[K];if(B.cacheKey===b){Y=B,++Y.usedTimes;break}}return Y===void 0&&(Y=new sp(n,b,x,r),h.push(Y)),Y}function A(x){if(--x.usedTimes===0){const b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),x.destroy()}}function F(x){l.remove(x)}function Z(){l.dispose()}return{getParameters:d,getProgramCacheKey:y,getUniforms:P,acquireProgram:C,releaseProgram:A,releaseShaderCache:F,programs:h,dispose:Z}}function cp(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function hp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ro(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ao(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,p,m,g,_,u){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:u},n[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=u),e++,d}function a(f,p,m,g,_,u){const d=o(f,p,m,g,_,u);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(f,p,m,g,_,u){const d=o(f,p,m,g,_,u);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,p){t.length>1&&t.sort(f||hp),i.length>1&&i.sort(p||ro),s.length>1&&s.sort(p||ro)}function h(){for(let f=e,p=n.length;f<p;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function dp(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ao,n.set(i,[o])):s>=r.length?(o=new ao,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function up(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ue};break;case"SpotLight":t={position:new U,direction:new U,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function fp(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pp=0;function mp(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gp(n,e){const t=new up,i=fp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);const r=new U,o=new $e,a=new $e;function l(h,f){let p=0,m=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let _=0,u=0,d=0,y=0,v=0,S=0,P=0,C=0,A=0,F=0,Z=0;h.sort(mp);const x=f===!0?Math.PI:1;for(let Y=0,K=h.length;Y<K;Y++){const L=h[Y],B=L.color,k=L.intensity,J=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=B.r*k*x,m+=B.g*k*x,g+=B.b*k*x;else if(L.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(L.sh.coefficients[$],k);Z++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const R=L.shadow,T=i.get(L);T.shadowBias=R.bias,T.shadowNormalBias=R.normalBias,T.shadowRadius=R.radius,T.shadowMapSize=R.mapSize,s.directionalShadow[_]=T,s.directionalShadowMap[_]=X,s.directionalShadowMatrix[_]=L.shadow.matrix,S++}s.directional[_]=$,_++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(B).multiplyScalar(k*x),$.distance=J,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,s.spot[d]=$;const R=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,R.updateMatrices(L),L.castShadow&&F++),s.spotLightMatrix[d]=R.matrix,L.castShadow){const T=i.get(L);T.shadowBias=R.bias,T.shadowNormalBias=R.normalBias,T.shadowRadius=R.radius,T.shadowMapSize=R.mapSize,s.spotShadow[d]=T,s.spotShadowMap[d]=X,C++}d++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(B).multiplyScalar(k),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=$,y++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*x),$.distance=L.distance,$.decay=L.decay,L.castShadow){const R=L.shadow,T=i.get(L);T.shadowBias=R.bias,T.shadowNormalBias=R.normalBias,T.shadowRadius=R.radius,T.shadowMapSize=R.mapSize,T.shadowCameraNear=R.camera.near,T.shadowCameraFar=R.camera.far,s.pointShadow[u]=T,s.pointShadowMap[u]=X,s.pointShadowMatrix[u]=L.shadow.matrix,P++}s.point[u]=$,u++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(k*x),$.groundColor.copy(L.groundColor).multiplyScalar(k*x),s.hemi[v]=$,v++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==_||b.pointLength!==u||b.spotLength!==d||b.rectAreaLength!==y||b.hemiLength!==v||b.numDirectionalShadows!==S||b.numPointShadows!==P||b.numSpotShadows!==C||b.numSpotMaps!==A||b.numLightProbes!==Z)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=y,s.point.length=u,s.hemi.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+A-F,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=Z,b.directionalLength=_,b.pointLength=u,b.spotLength=d,b.rectAreaLength=y,b.hemiLength=v,b.numDirectionalShadows=S,b.numPointShadows=P,b.numSpotShadows=C,b.numSpotMaps=A,b.numLightProbes=Z,s.version=pp++)}function c(h,f){let p=0,m=0,g=0,_=0,u=0;const d=f.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const S=h[y];if(S.isDirectionalLight){const P=s.directional[p];P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),p++}else if(S.isSpotLight){const P=s.spot[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const P=s.rectArea[_];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const P=s.point[m];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const P=s.hemi[u];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(d),u++}}}return{setup:l,setupView:c,state:s}}function oo(n,e){const t=new gp(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function _p(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new oo(n,e),t.set(r,[l])):o>=a.length?(l=new oo(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class xp extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vp extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yp(n,e,t){let i=new Cr;const s=new Ve,r=new Ve,o=new st,a=new xp({depthPacking:Ql}),l=new vp,c={},h=t.maxTextureSize,f={[yn]:Pt,[Pt]:yn,[Kt]:Kt},p=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Mp,fragmentShader:Sp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(g,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=br;let d=this.type;this.render=function(C,A,F){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||C.length===0)return;const Z=n.getRenderTarget(),x=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(vn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const K=d!==on&&this.type===on,L=d===on&&this.type!==on;for(let B=0,k=C.length;B<k;B++){const J=C[B],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const $=X.getFrameExtents();if(s.multiply($),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,X.mapSize.y=r.y)),X.map===null||K===!0||L===!0){const T=this.type!==on?{minFilter:Mt,magFilter:Mt}:{};X.map!==null&&X.map.dispose(),X.map=new Vn(s.x,s.y,T),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const R=X.getViewportCount();for(let T=0;T<R;T++){const j=X.getViewport(T);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),Y.viewport(o),X.updateMatrices(J,T),i=X.getFrustum(),S(A,F,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===on&&y(X,F),X.needsUpdate=!1}d=this.type,u.needsUpdate=!1,n.setRenderTarget(Z,x,b)};function y(C,A){const F=e.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Vn(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,F,p,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,F,m,_,null)}function v(C,A,F,Z){let x=null;const b=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)x=b;else if(x=F.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Y=x.uuid,K=A.uuid;let L=c[Y];L===void 0&&(L={},c[Y]=L);let B=L[K];B===void 0&&(B=x.clone(),L[K]=B,A.addEventListener("dispose",P)),x=B}if(x.visible=A.visible,x.wireframe=A.wireframe,Z===on?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:f[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Y=n.properties.get(x);Y.light=F}return x}function S(C,A,F,Z,x){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===on)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const K=e.update(C),L=C.material;if(Array.isArray(L)){const B=K.groups;for(let k=0,J=B.length;k<J;k++){const X=B[k],$=L[X.materialIndex];if($&&$.visible){const R=v(C,$,Z,x);C.onBeforeShadow(n,C,A,F,K,R,X),n.renderBufferDirect(F,null,K,R,C,X),C.onAfterShadow(n,C,A,F,K,R,X)}}}else if(L.visible){const B=v(C,L,Z,x);C.onBeforeShadow(n,C,A,F,K,B,null),n.renderBufferDirect(F,null,K,B,C,null),C.onAfterShadow(n,C,A,F,K,B,null)}}const Y=C.children;for(let K=0,L=Y.length;K<L;K++)S(Y[K],A,F,Z,x)}function P(C){C.target.removeEventListener("dispose",P);for(const F in c){const Z=c[F],x=C.target.uuid;x in Z&&(Z[x].dispose(),delete Z[x])}}}function Ep(n,e,t){const i=t.isWebGL2;function s(){let D=!1;const me=new st;let G=null;const de=new st(0,0,0,0);return{setMask:function(ge){G!==ge&&!D&&(n.colorMask(ge,ge,ge,ge),G=ge)},setLocked:function(ge){D=ge},setClear:function(ge,Ye,Ze,vt,Ot){Ot===!0&&(ge*=vt,Ye*=vt,Ze*=vt),me.set(ge,Ye,Ze,vt),de.equals(me)===!1&&(n.clearColor(ge,Ye,Ze,vt),de.copy(me))},reset:function(){D=!1,G=null,de.set(-1,0,0,0)}}}function r(){let D=!1,me=null,G=null,de=null;return{setTest:function(ge){ge?ne(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(ge){me!==ge&&!D&&(n.depthMask(ge),me=ge)},setFunc:function(ge){if(G!==ge){switch(ge){case Pl:n.depthFunc(n.NEVER);break;case Ll:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case us:n.depthFunc(n.LEQUAL);break;case Dl:n.depthFunc(n.EQUAL);break;case Ul:n.depthFunc(n.GEQUAL);break;case Nl:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}G=ge}},setLocked:function(ge){D=ge},setClear:function(ge){de!==ge&&(n.clearDepth(ge),de=ge)},reset:function(){D=!1,me=null,G=null,de=null}}}function o(){let D=!1,me=null,G=null,de=null,ge=null,Ye=null,Ze=null,vt=null,Ot=null;return{setTest:function(Je){D||(Je?ne(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(Je){me!==Je&&!D&&(n.stencilMask(Je),me=Je)},setFunc:function(Je,At,Yt){(G!==Je||de!==At||ge!==Yt)&&(n.stencilFunc(Je,At,Yt),G=Je,de=At,ge=Yt)},setOp:function(Je,At,Yt){(Ye!==Je||Ze!==At||vt!==Yt)&&(n.stencilOp(Je,At,Yt),Ye=Je,Ze=At,vt=Yt)},setLocked:function(Je){D=Je},setClear:function(Je){Ot!==Je&&(n.clearStencil(Je),Ot=Je)},reset:function(){D=!1,me=null,G=null,de=null,ge=null,Ye=null,Ze=null,vt=null,Ot=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,f=new WeakMap;let p={},m={},g=new WeakMap,_=[],u=null,d=!1,y=null,v=null,S=null,P=null,C=null,A=null,F=null,Z=new Ue(0,0,0),x=0,b=!1,Y=null,K=null,L=null,B=null,k=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(R)[1]),X=$>=1):R.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),X=$>=2);let T=null,j={};const se=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),V=new st().fromArray(se),Q=new st().fromArray(N);function re(D,me,G,de){const ge=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(D,Ye),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<G;Ze++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(me,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(me+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return Ye}const ae={};ae[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ae[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ne(n.DEPTH_TEST),l.setFunc(us),Te(!1),Le(Gr),ne(n.CULL_FACE),Me(vn);function ne(D){p[D]!==!0&&(n.enable(D),p[D]=!0)}function _e(D){p[D]!==!1&&(n.disable(D),p[D]=!1)}function ue(D,me){return m[D]!==me?(n.bindFramebuffer(D,me),m[D]=me,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=me),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=me)),!0):!1}function I(D,me){let G=_,de=!1;if(D){G=g.get(me),G===void 0&&(G=[],g.set(me,G));const ge=D.textures;if(G.length!==ge.length||G[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,Ze=ge.length;Ye<Ze;Ye++)G[Ye]=n.COLOR_ATTACHMENT0+Ye;G.length=ge.length,de=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,de=!0);if(de)if(t.isWebGL2)n.drawBuffers(G);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function We(D){return u!==D?(n.useProgram(D),u=D,!0):!1}const le={[Fn]:n.FUNC_ADD,[ml]:n.FUNC_SUBTRACT,[gl]:n.FUNC_REVERSE_SUBTRACT};if(i)le[Wr]=n.MIN,le[Xr]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(le[Wr]=D.MIN_EXT,le[Xr]=D.MAX_EXT)}const Se={[_l]:n.ZERO,[xl]:n.ONE,[vl]:n.SRC_COLOR,[fr]:n.SRC_ALPHA,[Tl]:n.SRC_ALPHA_SATURATE,[El]:n.DST_COLOR,[Sl]:n.DST_ALPHA,[Ml]:n.ONE_MINUS_SRC_COLOR,[pr]:n.ONE_MINUS_SRC_ALPHA,[bl]:n.ONE_MINUS_DST_COLOR,[yl]:n.ONE_MINUS_DST_ALPHA,[wl]:n.CONSTANT_COLOR,[Al]:n.ONE_MINUS_CONSTANT_COLOR,[Rl]:n.CONSTANT_ALPHA,[Cl]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(D,me,G,de,ge,Ye,Ze,vt,Ot,Je){if(D===vn){d===!0&&(_e(n.BLEND),d=!1);return}if(d===!1&&(ne(n.BLEND),d=!0),D!==pl){if(D!==y||Je!==b){if((v!==Fn||C!==Fn)&&(n.blendEquation(n.FUNC_ADD),v=Fn,C=Fn),Je)switch(D){case kn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ur:n.blendFunc(n.ONE,n.ONE);break;case Hr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vr:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case kn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ur:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hr:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vr:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,P=null,A=null,F=null,Z.set(0,0,0),x=0,y=D,b=Je}return}ge=ge||me,Ye=Ye||G,Ze=Ze||de,(me!==v||ge!==C)&&(n.blendEquationSeparate(le[me],le[ge]),v=me,C=ge),(G!==S||de!==P||Ye!==A||Ze!==F)&&(n.blendFuncSeparate(Se[G],Se[de],Se[Ye],Se[Ze]),S=G,P=de,A=Ye,F=Ze),(vt.equals(Z)===!1||Ot!==x)&&(n.blendColor(vt.r,vt.g,vt.b,Ot),Z.copy(vt),x=Ot),y=D,b=!1}function Ae(D,me){D.side===Kt?_e(n.CULL_FACE):ne(n.CULL_FACE);let G=D.side===Pt;me&&(G=!G),Te(G),D.blending===kn&&D.transparent===!1?Me(vn):Me(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const de=D.stencilWrite;c.setTest(de),de&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),w(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function Te(D){Y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),Y=D)}function Le(D){D!==dl?(ne(n.CULL_FACE),D!==K&&(D===Gr?n.cullFace(n.BACK):D===ul?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),K=D}function je(D){D!==L&&(X&&n.lineWidth(D),L=D)}function w(D,me,G){D?(ne(n.POLYGON_OFFSET_FILL),(B!==me||k!==G)&&(n.polygonOffset(me,G),B=me,k=G)):_e(n.POLYGON_OFFSET_FILL)}function M(D){D?ne(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function q(D){D===void 0&&(D=n.TEXTURE0+J-1),T!==D&&(n.activeTexture(D),T=D)}function ee(D,me,G){G===void 0&&(T===null?G=n.TEXTURE0+J-1:G=T);let de=j[G];de===void 0&&(de={type:void 0,texture:void 0},j[G]=de),(de.type!==D||de.texture!==me)&&(T!==G&&(n.activeTexture(G),T=G),n.bindTexture(D,me||ae[D]),de.type=D,de.texture=me)}function oe(){const D=j[T];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ie(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(D){V.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),V.copy(D))}function Ee(D){Q.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Q.copy(D))}function qe(D,me){let G=f.get(me);G===void 0&&(G=new WeakMap,f.set(me,G));let de=G.get(D);de===void 0&&(de=n.getUniformBlockIndex(me,D.name),G.set(D,de))}function Fe(D,me){const de=f.get(me).get(D);h.get(me)!==de&&(n.uniformBlockBinding(me,de,D.__bindingPointIndex),h.set(me,de))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},T=null,j={},m={},g=new WeakMap,_=[],u=null,d=!1,y=null,v=null,S=null,P=null,C=null,A=null,F=null,Z=new Ue(0,0,0),x=0,b=!1,Y=null,K=null,L=null,B=null,k=null,V.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ne,disable:_e,bindFramebuffer:ue,drawBuffers:I,useProgram:We,setBlending:Me,setMaterial:Ae,setFlipSided:Te,setCullFace:Le,setLineWidth:je,setPolygonOffset:w,setScissorTest:M,activeTexture:q,bindTexture:ee,unbindTexture:oe,compressedTexImage2D:ie,compressedTexImage3D:Ne,texImage2D:Xe,texImage3D:we,updateUBOMapping:qe,uniformBlockBinding:Fe,texStorage2D:ce,texStorage3D:ot,texSubImage2D:Re,texSubImage3D:he,compressedTexSubImage2D:pe,compressedTexSubImage3D:De,scissor:ye,viewport:Ee,reset:nt}}function bp(n,e,t,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ve,f=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,M){return g?new OffscreenCanvas(w,M):xs("canvas")}function u(w,M,q,ee){let oe=1;const ie=je(w);if((ie.width>ee||ie.height>ee)&&(oe=ee/Math.max(ie.width,ie.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Ne=M?_s:Math.floor,Re=Ne(oe*ie.width),he=Ne(oe*ie.height);p===void 0&&(p=_(Re,he));const pe=q?_(Re,he):p;return pe.width=Re,pe.height=he,pe.getContext("2d").drawImage(w,0,0,Re,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Re+"x"+he+")."),pe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),w;return w}function d(w){const M=je(w);return Mr(M.width)&&Mr(M.height)}function y(w){return a?!1:w.wrapS!==Vt||w.wrapT!==Vt||w.minFilter!==Mt&&w.minFilter!==lt}function v(w,M){return w.generateMipmaps&&M&&w.minFilter!==Mt&&w.minFilter!==lt}function S(w){n.generateMipmap(w)}function P(w,M,q,ee,oe=!1){if(a===!1)return M;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ie=M;if(M===n.RED&&(q===n.FLOAT&&(ie=n.R32F),q===n.HALF_FLOAT&&(ie=n.R16F),q===n.UNSIGNED_BYTE&&(ie=n.R8)),M===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ie=n.R8UI),q===n.UNSIGNED_SHORT&&(ie=n.R16UI),q===n.UNSIGNED_INT&&(ie=n.R32UI),q===n.BYTE&&(ie=n.R8I),q===n.SHORT&&(ie=n.R16I),q===n.INT&&(ie=n.R32I)),M===n.RG&&(q===n.FLOAT&&(ie=n.RG32F),q===n.HALF_FLOAT&&(ie=n.RG16F),q===n.UNSIGNED_BYTE&&(ie=n.RG8)),M===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(ie=n.RG8UI),q===n.UNSIGNED_SHORT&&(ie=n.RG16UI),q===n.UNSIGNED_INT&&(ie=n.RG32UI),q===n.BYTE&&(ie=n.RG8I),q===n.SHORT&&(ie=n.RG16I),q===n.INT&&(ie=n.RG32I)),M===n.RGBA){const Ne=oe?fs:Ke.getTransfer(ee);q===n.FLOAT&&(ie=n.RGBA32F),q===n.HALF_FLOAT&&(ie=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ie=Ne===tt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function C(w,M,q){return v(w,q)===!0||w.isFramebufferTexture&&w.minFilter!==Mt&&w.minFilter!==lt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){return w===Mt||w===Yr||w===yi?n.NEAREST:n.LINEAR}function F(w){const M=w.target;M.removeEventListener("dispose",F),x(M),M.isVideoTexture&&f.delete(M)}function Z(w){const M=w.target;M.removeEventListener("dispose",Z),Y(M)}function x(w){const M=i.get(w);if(M.__webglInit===void 0)return;const q=w.source,ee=m.get(q);if(ee){const oe=ee[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(w),Object.keys(ee).length===0&&m.delete(q)}i.remove(w)}function b(w){const M=i.get(w);n.deleteTexture(M.__webglTexture);const q=w.source,ee=m.get(q);delete ee[M.__cacheKey],o.memory.textures--}function Y(w){const M=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let oe=0;oe<M.__webglFramebuffer[ee].length;oe++)n.deleteFramebuffer(M.__webglFramebuffer[ee][oe]);else n.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[ee]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=w.textures;for(let ee=0,oe=q.length;ee<oe;ee++){const ie=i.get(q[ee]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(q[ee])}i.remove(w)}let K=0;function L(){K=0}function B(){const w=K;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),K+=1,w}function k(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function J(w,M){const q=i.get(w);if(w.isVideoTexture&&Te(w),w.isRenderTargetTexture===!1&&w.version>0&&q.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(q,w,M);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+M)}function X(w,M){const q=i.get(w);if(w.version>0&&q.__version!==w.version){Q(q,w,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+M)}function $(w,M){const q=i.get(w);if(w.version>0&&q.__version!==w.version){Q(q,w,M);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+M)}function R(w,M){const q=i.get(w);if(w.version>0&&q.__version!==w.version){re(q,w,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+M)}const T={[_r]:n.REPEAT,[Vt]:n.CLAMP_TO_EDGE,[xr]:n.MIRRORED_REPEAT},j={[Mt]:n.NEAREST,[Yr]:n.NEAREST_MIPMAP_NEAREST,[yi]:n.NEAREST_MIPMAP_LINEAR,[lt]:n.LINEAR,[Rs]:n.LINEAR_MIPMAP_NEAREST,[zn]:n.LINEAR_MIPMAP_LINEAR},se={[tc]:n.NEVER,[oc]:n.ALWAYS,[nc]:n.LESS,[Oo]:n.LEQUAL,[ic]:n.EQUAL,[ac]:n.GEQUAL,[sc]:n.GREATER,[rc]:n.NOTEQUAL};function N(w,M,q){if(M.type===$t&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===lt||M.magFilter===Rs||M.magFilter===yi||M.magFilter===zn||M.minFilter===lt||M.minFilter===Rs||M.minFilter===yi||M.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(n.texParameteri(w,n.TEXTURE_WRAP_S,T[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,T[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,T[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,j[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,j[M.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==Vt||M.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,A(M.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Mt&&M.minFilter!==lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Mt||M.minFilter!==yi&&M.minFilter!==zn||M.type===$t&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Di&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function V(w,M){let q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",F));const ee=M.source;let oe=m.get(ee);oe===void 0&&(oe={},m.set(ee,oe));const ie=k(M);if(ie!==w.__cacheKey){oe[ie]===void 0&&(oe[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),oe[ie].usedTimes++;const Ne=oe[w.__cacheKey];Ne!==void 0&&(oe[w.__cacheKey].usedTimes--,Ne.usedTimes===0&&b(M)),w.__cacheKey=ie,w.__webglTexture=oe[ie].texture}return q}function Q(w,M,q){let ee=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=n.TEXTURE_3D);const oe=V(w,M),ie=M.source;t.bindTexture(ee,w.__webglTexture,n.TEXTURE0+q);const Ne=i.get(ie);if(ie.version!==Ne.__version||oe===!0){t.activeTexture(n.TEXTURE0+q);const Re=Ke.getPrimaries(Ke.workingColorSpace),he=M.colorSpace===mn?null:Ke.getPrimaries(M.colorSpace),pe=M.colorSpace===mn||Re===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const De=y(M)&&d(M.image)===!1;let ce=u(M.image,De,!1,s.maxTextureSize);ce=Le(M,ce);const ot=d(ce)||a,Xe=r.convert(M.format,M.colorSpace);let we=r.convert(M.type),ye=P(M.internalFormat,Xe,we,M.colorSpace,M.isVideoTexture);N(ee,M,ot);let Ee;const qe=M.mipmaps,Fe=a&&M.isVideoTexture!==!0&&ye!==Uo,nt=Ne.__version===void 0||oe===!0,D=ie.dataReady,me=C(M,ce,ot);if(M.isDepthTexture)ye=n.DEPTH_COMPONENT,a?M.type===$t?ye=n.DEPTH_COMPONENT32F:M.type===_n?ye=n.DEPTH_COMPONENT24:M.type===Gn?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:M.type===$t&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Hn&&ye===n.DEPTH_COMPONENT&&M.type!==Tr&&M.type!==_n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=_n,we=r.convert(M.type)),M.format===gi&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,M.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Gn,we=r.convert(M.type))),nt&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,ye,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,ye,ce.width,ce.height,0,Xe,we,null));else if(M.isDataTexture)if(qe.length>0&&ot){Fe&&nt&&t.texStorage2D(n.TEXTURE_2D,me,ye,qe[0].width,qe[0].height);for(let G=0,de=qe.length;G<de;G++)Ee=qe[G],Fe?D&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,Ee.width,Ee.height,Xe,we,Ee.data):t.texImage2D(n.TEXTURE_2D,G,ye,Ee.width,Ee.height,0,Xe,we,Ee.data);M.generateMipmaps=!1}else Fe?(nt&&t.texStorage2D(n.TEXTURE_2D,me,ye,ce.width,ce.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,Xe,we,ce.data)):t.texImage2D(n.TEXTURE_2D,0,ye,ce.width,ce.height,0,Xe,we,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ye,qe[0].width,qe[0].height,ce.depth);for(let G=0,de=qe.length;G<de;G++)Ee=qe[G],M.format!==Wt?Xe!==null?Fe?D&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,Ee.width,Ee.height,ce.depth,Xe,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,ye,Ee.width,Ee.height,ce.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,Ee.width,Ee.height,ce.depth,Xe,we,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,G,ye,Ee.width,Ee.height,ce.depth,0,Xe,we,Ee.data)}else{Fe&&nt&&t.texStorage2D(n.TEXTURE_2D,me,ye,qe[0].width,qe[0].height);for(let G=0,de=qe.length;G<de;G++)Ee=qe[G],M.format!==Wt?Xe!==null?Fe?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,Ee.width,Ee.height,Xe,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,G,ye,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?D&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,Ee.width,Ee.height,Xe,we,Ee.data):t.texImage2D(n.TEXTURE_2D,G,ye,Ee.width,Ee.height,0,Xe,we,Ee.data)}else if(M.isDataArrayTexture)Fe?(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ye,ce.width,ce.height,ce.depth),D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Xe,we,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ce.width,ce.height,ce.depth,0,Xe,we,ce.data);else if(M.isData3DTexture)Fe?(nt&&t.texStorage3D(n.TEXTURE_3D,me,ye,ce.width,ce.height,ce.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Xe,we,ce.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ce.width,ce.height,ce.depth,0,Xe,we,ce.data);else if(M.isFramebufferTexture){if(nt)if(Fe)t.texStorage2D(n.TEXTURE_2D,me,ye,ce.width,ce.height);else{let G=ce.width,de=ce.height;for(let ge=0;ge<me;ge++)t.texImage2D(n.TEXTURE_2D,ge,ye,G,de,0,Xe,we,null),G>>=1,de>>=1}}else if(qe.length>0&&ot){if(Fe&&nt){const G=je(qe[0]);t.texStorage2D(n.TEXTURE_2D,me,ye,G.width,G.height)}for(let G=0,de=qe.length;G<de;G++)Ee=qe[G],Fe?D&&t.texSubImage2D(n.TEXTURE_2D,G,0,0,Xe,we,Ee):t.texImage2D(n.TEXTURE_2D,G,ye,Xe,we,Ee);M.generateMipmaps=!1}else if(Fe){if(nt){const G=je(ce);t.texStorage2D(n.TEXTURE_2D,me,ye,G.width,G.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Xe,we,ce)}else t.texImage2D(n.TEXTURE_2D,0,ye,Xe,we,ce);v(M,ot)&&S(ee),Ne.__version=ie.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function re(w,M,q){if(M.image.length!==6)return;const ee=V(w,M),oe=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+q);const ie=i.get(oe);if(oe.version!==ie.__version||ee===!0){t.activeTexture(n.TEXTURE0+q);const Ne=Ke.getPrimaries(Ke.workingColorSpace),Re=M.colorSpace===mn?null:Ke.getPrimaries(M.colorSpace),he=M.colorSpace===mn||Ne===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const pe=M.isCompressedTexture||M.image[0].isCompressedTexture,De=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let G=0;G<6;G++)!pe&&!De?ce[G]=u(M.image[G],!1,!0,s.maxCubemapSize):ce[G]=De?M.image[G].image:M.image[G],ce[G]=Le(M,ce[G]);const ot=ce[0],Xe=d(ot)||a,we=r.convert(M.format,M.colorSpace),ye=r.convert(M.type),Ee=P(M.internalFormat,we,ye,M.colorSpace),qe=a&&M.isVideoTexture!==!0,Fe=ie.__version===void 0||ee===!0,nt=oe.dataReady;let D=C(M,ot,Xe);N(n.TEXTURE_CUBE_MAP,M,Xe);let me;if(pe){qe&&Fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,D,Ee,ot.width,ot.height);for(let G=0;G<6;G++){me=ce[G].mipmaps;for(let de=0;de<me.length;de++){const ge=me[de];M.format!==Wt?we!==null?qe?nt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,de,0,0,ge.width,ge.height,we,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,de,Ee,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,de,0,0,ge.width,ge.height,we,ye,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,de,Ee,ge.width,ge.height,0,we,ye,ge.data)}}}else{if(me=M.mipmaps,qe&&Fe){me.length>0&&D++;const G=je(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,D,Ee,G.width,G.height)}for(let G=0;G<6;G++)if(De){qe?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ce[G].width,ce[G].height,we,ye,ce[G].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ee,ce[G].width,ce[G].height,0,we,ye,ce[G].data);for(let de=0;de<me.length;de++){const Ye=me[de].image[G].image;qe?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,de+1,0,0,Ye.width,Ye.height,we,ye,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,de+1,Ee,Ye.width,Ye.height,0,we,ye,Ye.data)}}else{qe?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,we,ye,ce[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ee,we,ye,ce[G]);for(let de=0;de<me.length;de++){const ge=me[de];qe?nt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,de+1,0,0,we,ye,ge.image[G]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,de+1,Ee,we,ye,ge.image[G])}}}v(M,Xe)&&S(n.TEXTURE_CUBE_MAP),ie.__version=oe.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ae(w,M,q,ee,oe,ie){const Ne=r.convert(q.format,q.colorSpace),Re=r.convert(q.type),he=P(q.internalFormat,Ne,Re,q.colorSpace);if(!i.get(M).__hasExternalTextures){const De=Math.max(1,M.width>>ie),ce=Math.max(1,M.height>>ie);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ie,he,De,ce,M.depth,0,Ne,Re,null):t.texImage2D(oe,ie,he,De,ce,0,Ne,Re,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Ae(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,oe,i.get(q).__webglTexture,0,Me(M)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,oe,i.get(q).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(w,M,q){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let ee=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||Ae(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===$t?ee=n.DEPTH_COMPONENT32F:oe.type===_n&&(ee=n.DEPTH_COMPONENT24));const ie=Me(M);Ae(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ee,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ee,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){const ee=Me(M);q&&Ae(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,M.width,M.height):Ae(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const ee=M.textures;for(let oe=0;oe<ee.length;oe++){const ie=ee[oe],Ne=r.convert(ie.format,ie.colorSpace),Re=r.convert(ie.type),he=P(ie.internalFormat,Ne,Re,ie.colorSpace),pe=Me(M);q&&Ae(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,he,M.width,M.height):Ae(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,he,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,he,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,oe=Me(M);if(M.depthTexture.format===Hn)Ae(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(M.depthTexture.format===gi)Ae(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ue(w){const M=i.get(w),q=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");_e(M.__webglFramebuffer,w)}else if(q){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=n.createRenderbuffer(),ne(M.__webglDepthbuffer[ee],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),ne(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(w,M,q){const ee=i.get(w);M!==void 0&&ae(ee.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&ue(w)}function We(w){const M=w.texture,q=i.get(w),ee=i.get(M);w.addEventListener("dispose",Z);const oe=w.textures,ie=w.isWebGLCubeRenderTarget===!0,Ne=oe.length>1,Re=d(w)||a;if(Ne||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=M.version,o.memory.textures++),ie){q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[he]=[];for(let pe=0;pe<M.mipmaps.length;pe++)q.__webglFramebuffer[he][pe]=n.createFramebuffer()}else q.__webglFramebuffer[he]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)q.__webglFramebuffer[he]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Ne)if(s.drawBuffers)for(let he=0,pe=oe.length;he<pe;he++){const De=i.get(oe[he]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Ae(w)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){const pe=oe[he];q.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[he]);const De=r.convert(pe.format,pe.colorSpace),ce=r.convert(pe.type),ot=P(pe.internalFormat,De,ce,pe.colorSpace,w.isXRRenderTarget===!0),Xe=Me(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,ot,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,q.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(q.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),N(n.TEXTURE_CUBE_MAP,M,Re);for(let he=0;he<6;he++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ae(q.__webglFramebuffer[he][pe],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,pe);else ae(q.__webglFramebuffer[he],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);v(M,Re)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let he=0,pe=oe.length;he<pe;he++){const De=oe[he],ce=i.get(De);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),N(n.TEXTURE_2D,De,Re),ae(q.__webglFramebuffer,w,De,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),v(De,Re)&&S(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?he=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ee.__webglTexture),N(he,M,Re),a&&M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ae(q.__webglFramebuffer[pe],w,M,n.COLOR_ATTACHMENT0,he,pe);else ae(q.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,he,0);v(M,Re)&&S(he),t.unbindTexture()}w.depthBuffer&&ue(w)}function le(w){const M=d(w)||a,q=w.textures;for(let ee=0,oe=q.length;ee<oe;ee++){const ie=q[ee];if(v(ie,M)){const Ne=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Re=i.get(ie).__webglTexture;t.bindTexture(Ne,Re),S(Ne),t.unbindTexture()}}}function Se(w){if(a&&w.samples>0&&Ae(w)===!1){const M=w.textures,q=w.width,ee=w.height;let oe=n.COLOR_BUFFER_BIT;const ie=[],Ne=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(w),he=M.length>1;if(he)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){ie.push(n.COLOR_ATTACHMENT0+pe),w.depthBuffer&&ie.push(Ne);const De=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(De===!1&&(w.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),he&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[pe]),De===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ne]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ne])),he){const ce=i.get(M[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,q,ee,0,0,q,ee,oe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Re.__webglColorRenderbuffer[pe]);const De=i.get(M[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function Me(w){return Math.min(s.maxSamples,w.samples)}function Ae(w){const M=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(w){const M=o.render.frame;f.get(w)!==M&&(f.set(w,M),w.update())}function Le(w,M){const q=w.colorSpace,ee=w.format,oe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===vr||q!==bn&&q!==mn&&(Ke.getTransfer(q)===tt?a===!1?e.has("EXT_sRGB")===!0&&ee===Wt?(w.format=vr,w.minFilter=lt,w.generateMipmaps=!1):M=Bo.sRGBToLinear(M):(ee!==Wt||oe!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}function je(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=L,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=R,this.rebindTextures=I,this.setupRenderTarget=We,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ae}function Tp(n,e,t){const i=t.isWebGL2;function s(r,o=mn){let a;const l=Ke.getTransfer(o);if(r===Sn)return n.UNSIGNED_BYTE;if(r===Ro)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Co)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Xl)return n.BYTE;if(r===Yl)return n.SHORT;if(r===Tr)return n.UNSIGNED_SHORT;if(r===Ao)return n.INT;if(r===_n)return n.UNSIGNED_INT;if(r===$t)return n.FLOAT;if(r===Di)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ql)return n.ALPHA;if(r===Wt)return n.RGBA;if(r===jl)return n.LUMINANCE;if(r===Kl)return n.LUMINANCE_ALPHA;if(r===Hn)return n.DEPTH_COMPONENT;if(r===gi)return n.DEPTH_STENCIL;if(r===vr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Po)return n.RED;if(r===Lo)return n.RED_INTEGER;if(r===$l)return n.RG;if(r===Io)return n.RG_INTEGER;if(r===Do)return n.RGBA_INTEGER;if(r===Cs||r===Ps||r===Ls||r===Is)if(l===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Cs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Cs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ps)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ls)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Is)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qr||r===jr||r===Kr||r===$r)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===qr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$r)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zr||r===Jr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Zr)return l===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Jr)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qr||r===ea||r===ta||r===na||r===ia||r===sa||r===ra||r===aa||r===oa||r===la||r===ca||r===ha||r===da||r===ua)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Qr)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ea)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ta)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===na)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ia)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sa)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ra)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===aa)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===oa)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===la)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ca)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ha)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===da)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ua)return l===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ds||r===fa||r===pa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ds)return l===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zl||r===ma||r===ga||r===_a)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ds)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ma)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ga)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_a)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gn?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class wp extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ft extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ap={type:"move"};class sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const u=t.getJointPose(_,i),d=this._getHandJoint(c,_);u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=u.radius),d.visible=u!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Rp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Tt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,s=new En({extensions:{fragDepth:!0},vertexShader:Rp,fragmentShader:Cp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new te(new dt(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Lp extends xi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,p=null,m=null,g=null;const _=new Pp,u=t.getContextAttributes();let d=null,y=null;const v=[],S=[],P=new Ve;let C=null;const A=new Ut;A.layers.enable(1),A.viewport=new st;const F=new Ut;F.layers.enable(2),F.viewport=new st;const Z=[A,F],x=new wp;x.layers.enable(1),x.layers.enable(2);let b=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let V=v[N];return V===void 0&&(V=new sr,v[N]=V),V.getTargetRaySpace()},this.getControllerGrip=function(N){let V=v[N];return V===void 0&&(V=new sr,v[N]=V),V.getGripSpace()},this.getHand=function(N){let V=v[N];return V===void 0&&(V=new sr,v[N]=V),V.getHandSpace()};function K(N){const V=S.indexOf(N.inputSource);if(V===-1)return;const Q=v[V];Q!==void 0&&(Q.update(N.inputSource,N.frame,c||o),Q.dispatchEvent({type:N.type,data:N.inputSource}))}function L(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",B);for(let N=0;N<v.length;N++){const V=S[N];V!==null&&(S[N]=null,v[N].disconnect(V))}b=null,Y=null,_.reset(),e.setRenderTarget(d),m=null,p=null,f=null,s=null,y=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",L),s.addEventListener("inputsourceschange",B),u.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:s.renderState.layers===void 0?u.antialias:!0,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,V),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Vn(m.framebufferWidth,m.framebufferHeight,{format:Wt,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let V=null,Q=null,re=null;u.depth&&(re=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=u.stencil?gi:Hn,Q=u.stencil?Gn:_n);const ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(ae),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Vn(p.textureWidth,p.textureHeight,{format:Wt,type:Sn,depthTexture:new $o(p.textureWidth,p.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0});const ne=e.properties.get(y);ne.__ignoreDepthValues=p.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(N){for(let V=0;V<N.removed.length;V++){const Q=N.removed[V],re=S.indexOf(Q);re>=0&&(S[re]=null,v[re].disconnect(Q))}for(let V=0;V<N.added.length;V++){const Q=N.added[V];let re=S.indexOf(Q);if(re===-1){for(let ne=0;ne<v.length;ne++)if(ne>=S.length){S.push(Q),re=ne;break}else if(S[ne]===null){S[ne]=Q,re=ne;break}if(re===-1)break}const ae=v[re];ae&&ae.connect(Q)}}const k=new U,J=new U;function X(N,V,Q){k.setFromMatrixPosition(V.matrixWorld),J.setFromMatrixPosition(Q.matrixWorld);const re=k.distanceTo(J),ae=V.projectionMatrix.elements,ne=Q.projectionMatrix.elements,_e=ae[14]/(ae[10]-1),ue=ae[14]/(ae[10]+1),I=(ae[9]+1)/ae[5],We=(ae[9]-1)/ae[5],le=(ae[8]-1)/ae[0],Se=(ne[8]+1)/ne[0],Me=_e*le,Ae=_e*Se,Te=re/(-le+Se),Le=Te*-le;V.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Le),N.translateZ(Te),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const je=_e+Te,w=ue+Te,M=Me-Le,q=Ae+(re-Le),ee=I*ue/w*je,oe=We*ue/w*je;N.projectionMatrix.makePerspective(M,q,ee,oe,je,w),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function $(N,V){V===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(V.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;_.texture!==null&&(N.near=_.depthNear,N.far=_.depthFar),x.near=F.near=A.near=N.near,x.far=F.far=A.far=N.far,(b!==x.near||Y!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,Y=x.far,A.near=b,A.far=Y,F.near=b,F.far=Y,A.updateProjectionMatrix(),F.updateProjectionMatrix(),N.updateProjectionMatrix());const V=N.parent,Q=x.cameras;$(x,V);for(let re=0;re<Q.length;re++)$(Q[re],V);Q.length===2?X(x,A,F):x.projectionMatrix.copy(A.projectionMatrix),R(N,x,V)};function R(N,V,Q){Q===null?N.matrix.copy(V.matrixWorld):(N.matrix.copy(Q.matrixWorld),N.matrix.invert(),N.matrix.multiply(V.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(V.projectionMatrix),N.projectionMatrixInverse.copy(V.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Ui*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(N){l=N,p!==null&&(p.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)},this.hasDepthSensing=function(){return _.texture!==null};let T=null;function j(N,V){if(h=V.getViewerPose(c||o),g=V,h!==null){const Q=h.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let re=!1;Q.length!==x.cameras.length&&(x.cameras.length=0,re=!0);for(let ne=0;ne<Q.length;ne++){const _e=Q[ne];let ue=null;if(m!==null)ue=m.getViewport(_e);else{const We=f.getViewSubImage(p,_e);ue=We.viewport,ne===0&&(e.setRenderTargetTextures(y,We.colorTexture,p.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(y))}let I=Z[ne];I===void 0&&(I=new Ut,I.layers.enable(ne),I.viewport=new st,Z[ne]=I),I.matrix.fromArray(_e.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(_e.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(ue.x,ue.y,ue.width,ue.height),ne===0&&(x.matrix.copy(I.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),re===!0&&x.cameras.push(I)}const ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const ne=f.getDepthInformation(Q[0]);ne&&ne.isValid&&ne.texture&&_.init(e,ne,s.renderState)}}for(let Q=0;Q<v.length;Q++){const re=S[Q],ae=v[Q];re!==null&&ae!==void 0&&ae.update(re,V,c||o)}_.render(e,x),T&&T(N,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}const se=new jo;se.setAnimationLoop(j),this.setAnimationLoop=function(N){T=N},this.dispose=function(){}}}const Un=new Qt,Ip=new $e;function Dp(n,e){function t(u,d){u.matrixAutoUpdate===!0&&u.updateMatrix(),d.value.copy(u.matrix)}function i(u,d){d.color.getRGB(u.fogColor.value,Xo(n)),d.isFog?(u.fogNear.value=d.near,u.fogFar.value=d.far):d.isFogExp2&&(u.fogDensity.value=d.density)}function s(u,d,y,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(u,d):d.isMeshToonMaterial?(r(u,d),f(u,d)):d.isMeshPhongMaterial?(r(u,d),h(u,d)):d.isMeshStandardMaterial?(r(u,d),p(u,d),d.isMeshPhysicalMaterial&&m(u,d,S)):d.isMeshMatcapMaterial?(r(u,d),g(u,d)):d.isMeshDepthMaterial?r(u,d):d.isMeshDistanceMaterial?(r(u,d),_(u,d)):d.isMeshNormalMaterial?r(u,d):d.isLineBasicMaterial?(o(u,d),d.isLineDashedMaterial&&a(u,d)):d.isPointsMaterial?l(u,d,y,v):d.isSpriteMaterial?c(u,d):d.isShadowMaterial?(u.color.value.copy(d.color),u.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(u,d){u.opacity.value=d.opacity,d.color&&u.diffuse.value.copy(d.color),d.emissive&&u.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.bumpMap&&(u.bumpMap.value=d.bumpMap,t(d.bumpMap,u.bumpMapTransform),u.bumpScale.value=d.bumpScale,d.side===Pt&&(u.bumpScale.value*=-1)),d.normalMap&&(u.normalMap.value=d.normalMap,t(d.normalMap,u.normalMapTransform),u.normalScale.value.copy(d.normalScale),d.side===Pt&&u.normalScale.value.negate()),d.displacementMap&&(u.displacementMap.value=d.displacementMap,t(d.displacementMap,u.displacementMapTransform),u.displacementScale.value=d.displacementScale,u.displacementBias.value=d.displacementBias),d.emissiveMap&&(u.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,u.emissiveMapTransform)),d.specularMap&&(u.specularMap.value=d.specularMap,t(d.specularMap,u.specularMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest);const y=e.get(d),v=y.envMap,S=y.envMapRotation;if(v&&(u.envMap.value=v,Un.copy(S),Un.x*=-1,Un.y*=-1,Un.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),u.envMapRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(Un)),u.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=d.reflectivity,u.ior.value=d.ior,u.refractionRatio.value=d.refractionRatio),d.lightMap){u.lightMap.value=d.lightMap;const P=n._useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=d.lightMapIntensity*P,t(d.lightMap,u.lightMapTransform)}d.aoMap&&(u.aoMap.value=d.aoMap,u.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,u.aoMapTransform))}function o(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform))}function a(u,d){u.dashSize.value=d.dashSize,u.totalSize.value=d.dashSize+d.gapSize,u.scale.value=d.scale}function l(u,d,y,v){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.size.value=d.size*y,u.scale.value=v*.5,d.map&&(u.map.value=d.map,t(d.map,u.uvTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function c(u,d){u.diffuse.value.copy(d.color),u.opacity.value=d.opacity,u.rotation.value=d.rotation,d.map&&(u.map.value=d.map,t(d.map,u.mapTransform)),d.alphaMap&&(u.alphaMap.value=d.alphaMap,t(d.alphaMap,u.alphaMapTransform)),d.alphaTest>0&&(u.alphaTest.value=d.alphaTest)}function h(u,d){u.specular.value.copy(d.specular),u.shininess.value=Math.max(d.shininess,1e-4)}function f(u,d){d.gradientMap&&(u.gradientMap.value=d.gradientMap)}function p(u,d){u.metalness.value=d.metalness,d.metalnessMap&&(u.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,u.metalnessMapTransform)),u.roughness.value=d.roughness,d.roughnessMap&&(u.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,u.roughnessMapTransform)),e.get(d).envMap&&(u.envMapIntensity.value=d.envMapIntensity)}function m(u,d,y){u.ior.value=d.ior,d.sheen>0&&(u.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),u.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(u.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,u.sheenColorMapTransform)),d.sheenRoughnessMap&&(u.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,u.sheenRoughnessMapTransform))),d.clearcoat>0&&(u.clearcoat.value=d.clearcoat,u.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(u.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,u.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(u.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pt&&u.clearcoatNormalScale.value.negate())),d.iridescence>0&&(u.iridescence.value=d.iridescence,u.iridescenceIOR.value=d.iridescenceIOR,u.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(u.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,u.iridescenceMapTransform)),d.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),d.transmission>0&&(u.transmission.value=d.transmission,u.transmissionSamplerMap.value=y.texture,u.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(u.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,u.transmissionMapTransform)),u.thickness.value=d.thickness,d.thicknessMap&&(u.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=d.attenuationDistance,u.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(u.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(u.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=d.specularIntensity,u.specularColor.value.copy(d.specularColor),d.specularColorMap&&(u.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,u.specularColorMapTransform)),d.specularIntensityMap&&(u.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,d){d.matcap&&(u.matcap.value=d.matcap)}function _(u,d){const y=e.get(d).light;u.referencePosition.value.setFromMatrixPosition(y.matrixWorld),u.nearDistance.value=y.shadow.camera.near,u.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Up(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;i.uniformBlockBinding(y,S)}function c(y,v){let S=s[y.id];S===void 0&&(g(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",u));const P=v.program;i.updateUBOMapping(y,P);const C=e.render.frame;r[y.id]!==C&&(p(y),r[y.id]=C)}function h(y){const v=f();y.__bindingPointIndex=v;const S=n.createBuffer(),P=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const v=s[y.id],S=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,A=S.length;C<A;C++){const F=Array.isArray(S[C])?S[C]:[S[C]];for(let Z=0,x=F.length;Z<x;Z++){const b=F[Z];if(m(b,C,Z,P)===!0){const Y=b.__offset,K=Array.isArray(b.value)?b.value:[b.value];let L=0;for(let B=0;B<K.length;B++){const k=K[B],J=_(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,Y+L,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,v,S,P){const C=y.value,A=v+"_"+S;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const F=P[A];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return P[A]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(y){const v=y.uniforms;let S=0;const P=16;for(let A=0,F=v.length;A<F;A++){const Z=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,b=Z.length;x<b;x++){const Y=Z[x],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let L=0,B=K.length;L<B;L++){const k=K[L],J=_(k),X=S%P;X!==0&&P-X<J.boundary&&(S+=P-X),Y.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=J.storage}}}const C=S%P;return C>0&&(S+=P-C),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function u(y){const v=y.target;v.removeEventListener("dispose",u);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class nl{constructor(e={}){const{canvas:t=yc(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,u=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this._useLegacyLights=!1,this.toneMapping=Mn,this.toneMappingExposure=1;const v=this;let S=!1,P=0,C=0,A=null,F=-1,Z=null;const x=new st,b=new st;let Y=null;const K=new Ue(0);let L=0,B=t.width,k=t.height,J=1,X=null,$=null;const R=new st(0,0,B,k),T=new st(0,0,B,k);let j=!1;const se=new Cr;let N=!1,V=!1,Q=null;const re=new $e,ae=new Ve,ne=new U,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return A===null?J:1}let I=i;function We(E,O){for(let H=0;H<E.length;H++){const W=E[H],z=t.getContext(W,O);if(z!==null)return z}return null}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Er}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",me,!1),I===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),I=We(O,E),I===null)throw We(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let le,Se,Me,Ae,Te,Le,je,w,M,q,ee,oe,ie,Ne,Re,he,pe,De,ce,ot,Xe,we,ye,Ee;function qe(){le=new zu(I),Se=new Du(I,le,e),le.init(Se),we=new Tp(I,le,Se),Me=new Ep(I,le,Se),Ae=new Hu(I),Te=new cp,Le=new bp(I,le,Me,Te,Se,we,Ae),je=new Nu(v),w=new Bu(v),M=new jc(I,Se),ye=new Lu(I,le,M,Se),q=new ku(I,M,Ae,ye),ee=new Yu(I,q,M,Ae),ce=new Xu(I,Se,Le),he=new Uu(Te),oe=new lp(v,je,w,le,Se,ye,he),ie=new Dp(v,Te),Ne=new dp,Re=new _p(le,Se),De=new Pu(v,je,w,Me,ee,p,l),pe=new yp(v,ee,Se),Ee=new Up(I,Ae,Se,Me),ot=new Iu(I,le,Ae,Se),Xe=new Gu(I,le,Ae,Se),Ae.programs=oe.programs,v.capabilities=Se,v.extensions=le,v.properties=Te,v.renderLists=Ne,v.shadowMap=pe,v.state=Me,v.info=Ae}qe();const Fe=new Lp(v,I);this.xr=Fe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(B,k,!1))},this.getSize=function(E){return E.set(B,k)},this.setSize=function(E,O,H=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,k=O,t.width=Math.floor(E*J),t.height=Math.floor(O*J),H===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(B*J,k*J).floor()},this.setDrawingBufferSize=function(E,O,H){B=E,k=O,J=H,t.width=Math.floor(E*H),t.height=Math.floor(O*H),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,O,H,W){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,O,H,W),Me.viewport(x.copy(R).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(T)},this.setScissor=function(E,O,H,W){E.isVector4?T.set(E.x,E.y,E.z,E.w):T.set(E,O,H,W),Me.scissor(b.copy(T).multiplyScalar(J).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(E){Me.setScissorTest(j=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(E=!0,O=!0,H=!0){let W=0;if(E){let z=!1;if(A!==null){const xe=A.texture.format;z=xe===Do||xe===Io||xe===Lo}if(z){const xe=A.texture.type,be=xe===Sn||xe===_n||xe===Tr||xe===Gn||xe===Ro||xe===Co,Ce=De.getClearColor(),Ie=De.getClearAlpha(),He=Ce.r,Oe=Ce.g,Be=Ce.b;be?(m[0]=He,m[1]=Oe,m[2]=Be,m[3]=Ie,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=He,g[1]=Oe,g[2]=Be,g[3]=Ie,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}O&&(W|=I.DEPTH_BUFFER_BIT),H&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ne.dispose(),Re.dispose(),Te.dispose(),je.dispose(),w.dispose(),ee.dispose(),ye.dispose(),Ee.dispose(),oe.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Ot),Fe.removeEventListener("sessionend",Je),Q&&(Q.dispose(),Q=null),At.stop()};function nt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Ae.autoReset,O=pe.enabled,H=pe.autoUpdate,W=pe.needsUpdate,z=pe.type;qe(),Ae.autoReset=E,pe.enabled=O,pe.autoUpdate=H,pe.needsUpdate=W,pe.type=z}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function G(E){const O=E.target;O.removeEventListener("dispose",G),de(O)}function de(E){ge(E),Te.remove(E)}function ge(E){const O=Te.get(E).programs;O!==void 0&&(O.forEach(function(H){oe.releaseProgram(H)}),E.isShaderMaterial&&oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,H,W,z,xe){O===null&&(O=_e);const be=z.isMesh&&z.matrixWorld.determinant()<0,Ce=ol(E,O,H,W,z);Me.setMaterial(W,be);let Ie=H.index,He=1;if(W.wireframe===!0){if(Ie=q.getWireframeAttribute(H),Ie===void 0)return;He=2}const Oe=H.drawRange,Be=H.attributes.position;let ct=Oe.start*He,Lt=(Oe.start+Oe.count)*He;xe!==null&&(ct=Math.max(ct,xe.start*He),Lt=Math.min(Lt,(xe.start+xe.count)*He)),Ie!==null?(ct=Math.max(ct,0),Lt=Math.min(Lt,Ie.count)):Be!=null&&(ct=Math.max(ct,0),Lt=Math.min(Lt,Be.count));const gt=Lt-ct;if(gt<0||gt===1/0)return;ye.setup(z,W,Ce,H,Ie);let en,rt=ot;if(Ie!==null&&(en=M.get(Ie),rt=Xe,rt.setIndex(en)),z.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*ue()),rt.setMode(I.LINES)):rt.setMode(I.TRIANGLES);else if(z.isLine){let ze=W.linewidth;ze===void 0&&(ze=1),Me.setLineWidth(ze*ue()),z.isLineSegments?rt.setMode(I.LINES):z.isLineLoop?rt.setMode(I.LINE_LOOP):rt.setMode(I.LINE_STRIP)}else z.isPoints?rt.setMode(I.POINTS):z.isSprite&&rt.setMode(I.TRIANGLES);if(z.isBatchedMesh)rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)rt.renderInstances(ct,gt,z.count);else if(H.isInstancedBufferGeometry){const ze=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,bs=Math.min(H.instanceCount,ze);rt.renderInstances(ct,gt,bs)}else rt.render(ct,gt)};function Ye(E,O,H){E.transparent===!0&&E.side===Kt&&E.forceSinglePass===!1?(E.side=Pt,E.needsUpdate=!0,Bi(E,O,H),E.side=yn,E.needsUpdate=!0,Bi(E,O,H),E.side=Kt):Bi(E,O,H)}this.compile=function(E,O,H=null){H===null&&(H=E),u=Re.get(H),u.init(),y.push(u),H.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),E!==H&&E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights(v._useLegacyLights);const W=new Set;return E.traverse(function(z){const xe=z.material;if(xe)if(Array.isArray(xe))for(let be=0;be<xe.length;be++){const Ce=xe[be];Ye(Ce,H,z),W.add(Ce)}else Ye(xe,H,z),W.add(xe)}),y.pop(),u=null,W},this.compileAsync=function(E,O,H=null){const W=this.compile(E,O,H);return new Promise(z=>{function xe(){if(W.forEach(function(be){Te.get(be).currentProgram.isReady()&&W.delete(be)}),W.size===0){z(E);return}setTimeout(xe,10)}le.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ze=null;function vt(E){Ze&&Ze(E)}function Ot(){At.stop()}function Je(){At.start()}const At=new jo;At.setAnimationLoop(vt),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(E){Ze=E,Fe.setAnimationLoop(E),E===null?At.stop():At.start()},Fe.addEventListener("sessionstart",Ot),Fe.addEventListener("sessionend",Je),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(O),O=Fe.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,A),u=Re.get(E,y.length),u.init(),y.push(u),re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),se.setFromProjectionMatrix(re),V=this.localClippingEnabled,N=he.init(this.clippingPlanes,V),_=Ne.get(E,d.length),_.init(),d.push(_),Yt(E,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,$),this.info.render.frame++,N===!0&&he.beginShadows();const H=u.state.shadowsArray;if(pe.render(H,E,O),N===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1)&&De.render(_,E),u.setupLights(v._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let z=0,xe=W.length;z<xe;z++){const be=W[z];Nr(_,E,be,be.viewport)}}else Nr(_,E,O);A!==null&&(Le.updateMultisampleRenderTarget(A),Le.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,O),ye.resetDefaultState(),F=-1,Z=null,y.pop(),y.length>0?u=y[y.length-1]:u=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Yt(E,O,H,W){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||se.intersectsSprite(E)){W&&ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const be=ee.update(E),Ce=E.material;Ce.visible&&_.push(E,be,Ce,H,ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||se.intersectsObject(E))){const be=ee.update(E),Ce=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ne.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ne.copy(be.boundingSphere.center)),ne.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(Ce)){const Ie=be.groups;for(let He=0,Oe=Ie.length;He<Oe;He++){const Be=Ie[He],ct=Ce[Be.materialIndex];ct&&ct.visible&&_.push(E,be,ct,H,ne.z,Be)}}else Ce.visible&&_.push(E,be,Ce,H,ne.z,null)}}const xe=E.children;for(let be=0,Ce=xe.length;be<Ce;be++)Yt(xe[be],O,H,W)}function Nr(E,O,H,W){const z=E.opaque,xe=E.transmissive,be=E.transparent;u.setupLightsView(H),N===!0&&he.setGlobalState(v.clippingPlanes,H),xe.length>0&&al(z,xe,O,H),W&&Me.viewport(x.copy(W)),z.length>0&&Fi(z,O,H),xe.length>0&&Fi(xe,O,H),be.length>0&&Fi(be,O,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function al(E,O,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const xe=Se.isWebGL2;Q===null&&(Q=new Vn(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?Di:Sn,minFilter:zn,samples:xe?4:0})),v.getDrawingBufferSize(ae),xe?Q.setSize(ae.x,ae.y):Q.setSize(_s(ae.x),_s(ae.y));const be=v.getRenderTarget();v.setRenderTarget(Q),v.getClearColor(K),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Ce=v.toneMapping;v.toneMapping=Mn,Fi(E,H,W),Le.updateMultisampleRenderTarget(Q),Le.updateRenderTargetMipmap(Q);let Ie=!1;for(let He=0,Oe=O.length;He<Oe;He++){const Be=O[He],ct=Be.object,Lt=Be.geometry,gt=Be.material,en=Be.group;if(gt.side===Kt&&ct.layers.test(W.layers)){const rt=gt.side;gt.side=Pt,gt.needsUpdate=!0,Or(ct,H,W,Lt,gt,en),gt.side=rt,gt.needsUpdate=!0,Ie=!0}}Ie===!0&&(Le.updateMultisampleRenderTarget(Q),Le.updateRenderTargetMipmap(Q)),v.setRenderTarget(be),v.setClearColor(K,L),v.toneMapping=Ce}function Fi(E,O,H){const W=O.isScene===!0?O.overrideMaterial:null;for(let z=0,xe=E.length;z<xe;z++){const be=E[z],Ce=be.object,Ie=be.geometry,He=W===null?be.material:W,Oe=be.group;Ce.layers.test(H.layers)&&Or(Ce,O,H,Ie,He,Oe)}}function Or(E,O,H,W,z,xe){E.onBeforeRender(v,O,H,W,z,xe),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(v,O,H,W,E,xe),z.transparent===!0&&z.side===Kt&&z.forceSinglePass===!1?(z.side=Pt,z.needsUpdate=!0,v.renderBufferDirect(H,O,W,z,E,xe),z.side=yn,z.needsUpdate=!0,v.renderBufferDirect(H,O,W,z,E,xe),z.side=Kt):v.renderBufferDirect(H,O,W,z,E,xe),E.onAfterRender(v,O,H,W,z,xe)}function Bi(E,O,H){O.isScene!==!0&&(O=_e);const W=Te.get(E),z=u.state.lights,xe=u.state.shadowsArray,be=z.state.version,Ce=oe.getParameters(E,z.state,xe,O,H),Ie=oe.getProgramCacheKey(Ce);let He=W.programs;W.environment=E.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(E.isMeshStandardMaterial?w:je).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",G),He=new Map,W.programs=He);let Oe=He.get(Ie);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===be)return Br(E,Ce),Oe}else Ce.uniforms=oe.getUniforms(E),E.onBuild(H,Ce,v),E.onBeforeCompile(Ce,v),Oe=oe.acquireProgram(Ce,Ie),He.set(Ie,Oe),W.uniforms=Ce.uniforms;const Be=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=he.uniform),Br(E,Ce),W.needsLights=cl(E),W.lightsStateVersion=be,W.needsLights&&(Be.ambientLightColor.value=z.state.ambient,Be.lightProbe.value=z.state.probe,Be.directionalLights.value=z.state.directional,Be.directionalLightShadows.value=z.state.directionalShadow,Be.spotLights.value=z.state.spot,Be.spotLightShadows.value=z.state.spotShadow,Be.rectAreaLights.value=z.state.rectArea,Be.ltc_1.value=z.state.rectAreaLTC1,Be.ltc_2.value=z.state.rectAreaLTC2,Be.pointLights.value=z.state.point,Be.pointLightShadows.value=z.state.pointShadow,Be.hemisphereLights.value=z.state.hemi,Be.directionalShadowMap.value=z.state.directionalShadowMap,Be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Be.spotShadowMap.value=z.state.spotShadowMap,Be.spotLightMatrix.value=z.state.spotLightMatrix,Be.spotLightMap.value=z.state.spotLightMap,Be.pointShadowMap.value=z.state.pointShadowMap,Be.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function Fr(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=ds.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Br(E,O){const H=Te.get(E);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function ol(E,O,H,W,z){O.isScene!==!0&&(O=_e),Le.resetTextureUnits();const xe=O.fog,be=W.isMeshStandardMaterial?O.environment:null,Ce=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:bn,Ie=(W.isMeshStandardMaterial?w:je).get(W.envMap||be),He=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Oe=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!H.morphAttributes.position,ct=!!H.morphAttributes.normal,Lt=!!H.morphAttributes.color;let gt=Mn;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=v.toneMapping);const en=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,rt=en!==void 0?en.length:0,ze=Te.get(W),bs=u.state.lights;if(N===!0&&(V===!0||E!==Z)){const Ft=E===Z&&W.id===F;he.setState(W,E,Ft)}let it=!1;W.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==bs.state.version||ze.outputColorSpace!==Ce||z.isBatchedMesh&&ze.batching===!1||!z.isBatchedMesh&&ze.batching===!0||z.isInstancedMesh&&ze.instancing===!1||!z.isInstancedMesh&&ze.instancing===!0||z.isSkinnedMesh&&ze.skinning===!1||!z.isSkinnedMesh&&ze.skinning===!0||z.isInstancedMesh&&ze.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ze.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ze.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ze.instancingMorph===!1&&z.morphTexture!==null||ze.envMap!==Ie||W.fog===!0&&ze.fog!==xe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==he.numPlanes||ze.numIntersection!==he.numIntersection)||ze.vertexAlphas!==He||ze.vertexTangents!==Oe||ze.morphTargets!==Be||ze.morphNormals!==ct||ze.morphColors!==Lt||ze.toneMapping!==gt||Se.isWebGL2===!0&&ze.morphTargetsCount!==rt)&&(it=!0):(it=!0,ze.__version=W.version);let wn=ze.currentProgram;it===!0&&(wn=Bi(W,O,z));let zr=!1,Si=!1,Ts=!1;const St=wn.getUniforms(),An=ze.uniforms;if(Me.useProgram(wn.program)&&(zr=!0,Si=!0,Ts=!0),W.id!==F&&(F=W.id,Si=!0),zr||Z!==E){St.setValue(I,"projectionMatrix",E.projectionMatrix),St.setValue(I,"viewMatrix",E.matrixWorldInverse);const Ft=St.map.cameraPosition;Ft!==void 0&&Ft.setValue(I,ne.setFromMatrixPosition(E.matrixWorld)),Se.logarithmicDepthBuffer&&St.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&St.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,Si=!0,Ts=!0)}if(z.isSkinnedMesh){St.setOptional(I,z,"bindMatrix"),St.setOptional(I,z,"bindMatrixInverse");const Ft=z.skeleton;Ft&&(Se.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),St.setValue(I,"boneTexture",Ft.boneTexture,Le)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(St.setOptional(I,z,"batchingTexture"),St.setValue(I,"batchingTexture",z._matricesTexture,Le));const ws=H.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0&&Se.isWebGL2===!0)&&ce.update(z,H,wn),(Si||ze.receiveShadow!==z.receiveShadow)&&(ze.receiveShadow=z.receiveShadow,St.setValue(I,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(An.envMap.value=Ie,An.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Si&&(St.setValue(I,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&ll(An,Ts),xe&&W.fog===!0&&ie.refreshFogUniforms(An,xe),ie.refreshMaterialUniforms(An,W,J,k,Q),ds.upload(I,Fr(ze),An,Le)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ds.upload(I,Fr(ze),An,Le),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&St.setValue(I,"center",z.center),St.setValue(I,"modelViewMatrix",z.modelViewMatrix),St.setValue(I,"normalMatrix",z.normalMatrix),St.setValue(I,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ft=W.uniformsGroups;for(let As=0,hl=Ft.length;As<hl;As++)if(Se.isWebGL2){const kr=Ft[As];Ee.update(kr,wn),Ee.bind(kr,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function ll(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function cl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,O,H){Te.get(E.texture).__webglTexture=O,Te.get(E.depthTexture).__webglTexture=H;const W=Te.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const H=Te.get(E);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,H=0){A=E,P=O,C=H;let W=!0,z=null,xe=!1,be=!1;if(E){const Ie=Te.get(E);Ie.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(I.FRAMEBUFFER,null),W=!1):Ie.__webglFramebuffer===void 0?Le.setupRenderTarget(E):Ie.__hasExternalTextures&&Le.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture);const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);const Oe=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?z=Oe[O][H]:z=Oe[O],xe=!0):Se.isWebGL2&&E.samples>0&&Le.useMultisampledRTT(E)===!1?z=Te.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[H]:z=Oe,x.copy(E.viewport),b.copy(E.scissor),Y=E.scissorTest}else x.copy(R).multiplyScalar(J).floor(),b.copy(T).multiplyScalar(J).floor(),Y=j;if(Me.bindFramebuffer(I.FRAMEBUFFER,z)&&Se.drawBuffers&&W&&Me.drawBuffers(E,z),Me.viewport(x),Me.scissor(b),Me.setScissorTest(Y),xe){const Ie=Te.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ie.__webglTexture,H)}else if(be){const Ie=Te.get(E.texture),He=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,H||0,He)}F=-1},this.readRenderTargetPixels=function(E,O,H,W,z,xe,be){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){Me.bindFramebuffer(I.FRAMEBUFFER,Ce);try{const Ie=E.texture,He=Ie.format,Oe=Ie.type;if(He!==Wt&&we.convert(He)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Oe===Di&&(le.has("EXT_color_buffer_half_float")||Se.isWebGL2&&le.has("EXT_color_buffer_float"));if(Oe!==Sn&&we.convert(Oe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===$t&&(Se.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-W&&H>=0&&H<=E.height-z&&I.readPixels(O,H,W,z,we.convert(He),we.convert(Oe),xe)}finally{const Ie=A!==null?Te.get(A).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(E,O,H=0){const W=Math.pow(2,-H),z=Math.floor(O.image.width*W),xe=Math.floor(O.image.height*W);Le.setTexture2D(O,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,E.x,E.y,z,xe),Me.unbindTexture()},this.copyTextureToTexture=function(E,O,H,W=0){const z=O.image.width,xe=O.image.height,be=we.convert(H.format),Ce=we.convert(H.type);Le.setTexture2D(H,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment),O.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,W,E.x,E.y,z,xe,be,Ce,O.image.data):O.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,W,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,be,O.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,W,E.x,E.y,be,Ce,O.image),W===0&&H.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(E,O,H,W,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=Math.round(E.max.x-E.min.x),be=Math.round(E.max.y-E.min.y),Ce=E.max.z-E.min.z+1,Ie=we.convert(W.format),He=we.convert(W.type);let Oe;if(W.isData3DTexture)Le.setTexture3D(W,0),Oe=I.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Le.setTexture2DArray(W,0),Oe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Be=I.getParameter(I.UNPACK_ROW_LENGTH),ct=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Lt=I.getParameter(I.UNPACK_SKIP_PIXELS),gt=I.getParameter(I.UNPACK_SKIP_ROWS),en=I.getParameter(I.UNPACK_SKIP_IMAGES),rt=H.isCompressedTexture?H.mipmaps[z]:H.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,rt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),H.isDataTexture||H.isData3DTexture?I.texSubImage3D(Oe,z,O.x,O.y,O.z,xe,be,Ce,Ie,He,rt.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(Oe,z,O.x,O.y,O.z,xe,be,Ce,Ie,rt.data):I.texSubImage3D(Oe,z,O.x,O.y,O.z,xe,be,Ce,Ie,He,rt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,gt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,en),z===0&&W.generateMipmaps&&I.generateMipmap(Oe),Me.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Le.setTextureCube(E,0):E.isData3DTexture?Le.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Le.setTexture2DArray(E,0):Le.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,Me.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wr?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Ms?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Np extends nl{}Np.prototype.isWebGL1Renderer=!0;class Lr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new Lr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Op extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fp extends Tt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Mt,h=Mt,f,p){super(null,o,a,l,c,h,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lo extends Nt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ci=new $e,co=new $e,as=[],ho=new Wn,Bp=new $e,Ai=new te,Ri=new Xn;class rr extends te{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Bp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ci),ho.copy(e.boundingBox).applyMatrix4(ci),this.boundingBox.union(ho)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ci),Ri.copy(e.boundingSphere).applyMatrix4(ci),this.boundingSphere.union(Ri)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ai.geometry=this.geometry,Ai.material=this.material,Ai.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ri.copy(this.boundingSphere),Ri.applyMatrix4(i),e.ray.intersectsSphere(Ri)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ci),co.multiplyMatrices(i,ci),Ai.matrixWorld=co,Ai.raycast(e,as);for(let o=0,a=as.length;o<a;o++){const l=as[o];l.instanceId=r,l.object=this,t.push(l)}as.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fp(new Float32Array(s*this.count),s,this.count,Po,$t));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class il extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uo=new U,fo=new U,po=new $e,ar=new Rr,os=new Xn;class zp extends ut{constructor(e=new wt,t=new il){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)uo.fromBufferAttribute(t,s-1),fo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=uo.distanceTo(fo);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(s),os.radius+=r,e.ray.intersectsSphere(os)===!1)return;po.copy(s).invert(),ar.copy(e.ray).applyMatrix4(po);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,f=new U,p=new U,m=this.isLineSegments?2:1,g=i.index,u=i.attributes.position;if(g!==null){const d=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=d,S=y-1;v<S;v+=m){const P=g.getX(v),C=g.getX(v+1);if(c.fromBufferAttribute(u,P),h.fromBufferAttribute(u,C),ar.distanceSqToSegment(c,h,p,f)>l)continue;p.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(p);F<e.near||F>e.far||t.push({distance:F,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),y=Math.min(u.count,o.start+o.count);for(let v=d,S=y-1;v<S;v+=m){if(c.fromBufferAttribute(u,v),h.fromBufferAttribute(u,v+1),ar.distanceSqToSegment(c,h,p,f)>l)continue;p.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(p);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const mo=new U,go=new U;class kp extends zp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)mo.fromBufferAttribute(t,s),go.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+mo.distanceTo(go);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sl extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _o=new $e,yr=new Rr,ls=new Xn,cs=new U;class Gp extends ut{constructor(e=new wt,t=new sl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(s),ls.radius+=r,e.ray.intersectsSphere(ls)===!1)return;_o.copy(s).invert(),yr.copy(e.ray).applyMatrix4(_o);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=p,_=m;g<_;g++){const u=c.getX(g);cs.fromBufferAttribute(f,u),xo(cs,u,l,s,e,t,this)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=p,_=m;g<_;g++)cs.fromBufferAttribute(f,g),xo(cs,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xo(n,e,t,i,s,r,o){const a=yr.distanceSqToPoint(n);if(a<t){const l=new U;yr.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Tn extends Tt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ii extends wt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new U,h=new Ve;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){const m=i+f/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class at extends wt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],p=[],m=[];let g=0;const _=[],u=i/2;let d=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new et(f,3)),this.setAttribute("normal",new et(p,3)),this.setAttribute("uv",new et(m,2));function y(){const S=new U,P=new U;let C=0;const A=(t-e)/i;for(let F=0;F<=r;F++){const Z=[],x=F/r,b=x*(t-e)+e;for(let Y=0;Y<=s;Y++){const K=Y/s,L=K*l+a,B=Math.sin(L),k=Math.cos(L);P.x=b*B,P.y=-x*i+u,P.z=b*k,f.push(P.x,P.y,P.z),S.set(B,A,k).normalize(),p.push(S.x,S.y,S.z),m.push(K,1-x),Z.push(g++)}_.push(Z)}for(let F=0;F<s;F++)for(let Z=0;Z<r;Z++){const x=_[Z][F],b=_[Z+1][F],Y=_[Z+1][F+1],K=_[Z][F+1];h.push(x,b,K),h.push(b,Y,K),C+=6}c.addGroup(d,C,0),d+=C}function v(S){const P=g,C=new Ve,A=new U;let F=0;const Z=S===!0?e:t,x=S===!0?1:-1;for(let Y=1;Y<=s;Y++)f.push(0,u*x,0),p.push(0,x,0),m.push(.5,.5),g++;const b=g;for(let Y=0;Y<=s;Y++){const L=Y/s*l+a,B=Math.cos(L),k=Math.sin(L);A.x=Z*k,A.y=u*x,A.z=Z*B,f.push(A.x,A.y,A.z),p.push(0,x,0),C.x=B*.5+.5,C.y=k*.5*x+.5,m.push(C.x,C.y),g++}for(let Y=0;Y<s;Y++){const K=P+Y,L=b+Y;S===!0?h.push(L,L+1,K):h.push(L+1,L,K),F+=3}c.addGroup(d,F,S===!0?1:2),d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new at(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ir extends at{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ir(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ys extends wt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let f=e;const p=(t-e)/s,m=new U,g=new Ve;for(let _=0;_<=s;_++){for(let u=0;u<=i;u++){const d=r+u/i*o;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}f+=p}for(let _=0;_<s;_++){const u=_*(i+1);for(let d=0;d<i;d++){const y=d+u,v=y,S=y+i+1,P=y+i+2,C=y+1;a.push(v,S,C),a.push(S,P,C)}}this.setIndex(a),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gn extends wt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new U,p=new U,m=[],g=[],_=[],u=[];for(let d=0;d<=i;d++){const y=[],v=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let P=0;P<=t;P++){const C=P/t;f.x=-e*Math.cos(s+C*r)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(s+C*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),u.push(C+S,1-v),y.push(c++)}h.push(y)}for(let d=0;d<i;d++)for(let y=0;y<t;y++){const v=h[d][y+1],S=h[d][y],P=h[d+1][y],C=h[d+1][y+1];(d!==0||o>0)&&m.push(v,S,C),(d!==i-1||l<Math.PI)&&m.push(S,P,C)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xn extends wt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new U,f=new U,p=new U;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){const _=g/s*r,u=m/i*Math.PI*2;f.x=(e+t*Math.cos(u))*Math.cos(_),f.y=(e+t*Math.cos(u))*Math.sin(_),f.z=t*Math.sin(u),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,u=(s+1)*(m-1)+g-1,d=(s+1)*(m-1)+g,y=(s+1)*m+g;o.push(_,u,y),o.push(u,d,y)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ve extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class or extends ve{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Dr extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Hp extends Dr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const lr=new $e,vo=new U,Mo=new U;class rl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vo.setFromMatrixPosition(e.matrixWorld),t.position.copy(vo),Mo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mo),t.updateMatrixWorld(),lr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const So=new $e,Ci=new U,cr=new U;class Vp extends rl{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ci.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ci),cr.copy(i.position),cr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(cr),i.updateMatrixWorld(),s.makeTranslation(-Ci.x,-Ci.y,-Ci.z),So.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So)}}class Ni extends Dr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Vp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wp extends rl{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yo extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Wp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xp extends kp{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ue(i),s=new Ue(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let p=0,m=0,g=-a;p<=t;p++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=p===r?i:s;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const h=new wt;h.setAttribute("position",new et(l,3)),h.setAttribute("color",new et(c,3));const f=new il({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Er}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Er);const zt=6,hr=4,xt=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1],[1,0,0,"S2",0,0,1,0,0,0,0,0,0,0,1,0,0,"S3",0,0,1],[1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1],[1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1],[1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1],[1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1],[1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1],[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],[1,0,1,0,1,1,0,0,0,0,"S1",0,0,0,0,1,1,0,1,0,1],[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],[1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1],[1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1],[1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1],[1,0,0,"S4",0,0,1,0,0,0,0,0,0,0,1,0,0,"S5",0,0,1],[1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];function Es(n,e){const t=xt.length,i=xt[0].length,s=(e-Math.floor(i/2))*zt,r=(n-Math.floor(t/2))*zt;return{x:s,z:r}}const Xt=[{id:"S1",number:"1",pageName:"Home",name:"Pavilion 01: Home [Cypherox UK]",shortName:"Home",row:10,col:10,color:15887973,hexColor:"#f26e65",desc:"We Build the Technology Your Business Depends On (11+ Yrs, 130+ Engineers)"},{id:"S2",number:"2",pageName:"About & Team",name:"Pavilion 02: About & Team [Cypherox Roster]",shortName:"About",row:3,col:3,color:16093578,hexColor:"#f5918a",desc:"Four Areas. One Partner. Dedicated Developers: Hardik, Krupa, Akash"},{id:"S3",number:"3",pageName:"Services",name:"Pavilion 03: Services [Production AI & Engineering]",shortName:"Services",row:3,col:17,color:14241607,hexColor:"#d94f47",desc:"Production AI, Custom Software, Cloud DevOps & Data Intelligence"},{id:"S4",number:"4",pageName:"Projects & ROI",name:"Pavilion 04: Projects & ROI [1,500+ Delivered]",shortName:"Projects",row:17,col:3,color:16096779,hexColor:"#f59e0b",desc:"Turn Technology into a Competitive Advantage + Live ROI Calculator"},{id:"S5",number:"5",pageName:"Contact",name:"Pavilion 05: Contact [London, United Kingdom]",shortName:"Contact",row:17,col:17,color:15887973,hexColor:"#f26e65",desc:"info@cypherox.uk | +44 7453 420874 | Direct Senior Engineer Consultation"}];Xt.forEach(n=>{const e=Es(n.row,n.col);n.x=e.x,n.z=e.z;const t=n.id==="S1"?4.8:4.5;n.frontX=n.x,n.frontZ=n.z+t,n.frontHeading=Math.PI});class Yp{constructor(e){this.container=e,this.scene=new Op;const t=new Ue(1579035);this.scene.background=t,this.scene.fog=new Lr(t,.006),this.width=window.innerWidth,this.height=window.innerHeight,this.camera=new Ut(54,this.width/this.height,.1,1e3),this.camera.position.set(0,9.5,14),this.renderer=new nl({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.toneMapping=To,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=br,this.container.appendChild(this.renderer.domElement),this.mouse={x:0,y:0,targetX:0,targetY:0},this.setupRealisticLighting(),this.buildMilkyMazeWorld(),this.bindEvents()}setupRealisticLighting(){const e=new Hp(16316144,2236965,1.2);e.position.set(0,60,0),this.scene.add(e);const t=new yo(16774892,2.1);t.position.set(45,80,35),t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.camera.near=10,t.shadow.camera.far=180;const i=65;t.shadow.camera.left=-i,t.shadow.camera.right=i,t.shadow.camera.top=i,t.shadow.camera.bottom=-i,t.shadow.bias=-2e-4,this.scene.add(t);const s=new yo(9741240,.85);s.position.set(-45,50,-35),this.scene.add(s),[{x:0,z:-18},{x:0,z:18},{x:-18,z:0},{x:18,z:0},{x:-12,z:-12},{x:12,z:-12},{x:-12,z:12},{x:12,z:12},{x:-24,z:-18},{x:24,z:-18},{x:-24,z:18},{x:24,z:18},{x:0,z:-30},{x:0,z:30}].forEach(a=>{const l=new te(new at(.24,.24,.05,16),new ve({color:1447448,metalness:.85,roughness:.3,emissive:16774115,emissiveIntensity:.3}));l.position.set(a.x,3.98,a.z),this.scene.add(l)}),[{x:0,z:0,color:15887973},{x:-42,z:-42,color:16093578},{x:42,z:-42,color:14241607},{x:-42,z:42,color:16096779}].forEach(a=>{const l=new Ni(a.color,1.2,28,2);l.position.set(a.x,3.2,a.z),this.scene.add(l)})}buildMilkyMazeWorld(){const e=xt.length,t=xt[0].length,i=t*zt,s=e*zt,r=16,o=new dt(i,s),a=new ve({color:2236966,roughness:.28,metalness:.22}),l=new te(o,a);l.rotation.x=-Math.PI/2,l.position.y=0,l.receiveShadow=!0,this.scene.add(l);const c=new Xp(i,Math.floor(i/zt),3552829,2829104);c.position.y=.01,this.scene.add(c);let h=0;for(let v=0;v<e;v++)for(let S=0;S<t;S++)xt[v][S]===1&&h++;const f=new Pe(zt*.99,hr,zt*.99),p=new ve({color:16118766,roughness:.65,metalness:.04}),m=new Pe(zt*1.005,.22,zt*1.005),g=new ve({color:1447446,roughness:.35,metalness:.85}),_=new Pe(zt*1.015,.12,zt*1.015),u=new ve({color:2105378,roughness:.4,metalness:.75});this.wallMesh=new rr(f,p,h),this.wallMesh.castShadow=!0,this.wallMesh.receiveShadow=!0,this.baseboardMesh=new rr(m,g,h),this.baseboardMesh.castShadow=!0,this.baseboardMesh.receiveShadow=!0,this.topCapMesh=new rr(_,u,h),this.topCapMesh.castShadow=!0,this.topCapMesh.receiveShadow=!0;const d=new ut;let y=0;for(let v=0;v<e;v++)for(let S=0;S<t;S++)if(xt[v][S]===1){const P=Es(v,S),C=v===0||v===e-1||S===0||S===t-1,A=C?r:hr;d.scale.set(1,C?r/hr:1,1),d.position.set(P.x,A/2,P.z),d.updateMatrix(),this.wallMesh.setMatrixAt(y,d.matrix),d.scale.set(1,1,1),d.position.set(P.x,.11,P.z),d.updateMatrix(),this.baseboardMesh.setMatrixAt(y,d.matrix),d.scale.set(1,1,1),d.position.set(P.x,A+.06,P.z),d.updateMatrix(),this.topCapMesh.setMatrixAt(y,d.matrix),y++}this.wallMesh.instanceMatrix.needsUpdate=!0,this.baseboardMesh.instanceMatrix.needsUpdate=!0,this.topCapMesh.instanceMatrix.needsUpdate=!0,this.scene.add(this.wallMesh),this.scene.add(this.baseboardMesh),this.scene.add(this.topCapMesh)}bindEvents(){window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}),window.addEventListener("mousemove",e=>{this.mouse.targetX=e.clientX/window.innerWidth*2-1,this.mouse.targetY=-(e.clientY/window.innerHeight)*2+1})}update(e){this.mouse.x+=(this.mouse.targetX-this.mouse.x)*.05,this.mouse.y+=(this.mouse.targetY-this.mouse.y)*.05}render(){this.renderer.render(this.scene,this.camera)}}class qp{constructor(){this.ctx=null,this.isMuted=!0}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.init(),this.isMuted=!this.isMuted,this.isMuted||this.playWarp(),this.isMuted}playKeyStep(){if(!(this.isMuted||!this.ctx))try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(220+Math.random()*80,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(110,this.ctx.currentTime+.08),t.gain.setValueAtTime(.04,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.08),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.08)}catch{}}playWallBump(){if(!(this.isMuted||!this.ctx))try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(140,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(60,this.ctx.currentTime+.06),t.gain.setValueAtTime(.08,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.06),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.06)}catch{}}playDock(){if(!(this.isMuted||!this.ctx))try{[360,540,720].forEach((e,t)=>{const i=this.ctx.createOscillator(),s=this.ctx.createGain(),r=this.ctx.currentTime+t*.06;i.type="sine",i.frequency.setValueAtTime(e,r),s.gain.setValueAtTime(.06,r),s.gain.exponentialRampToValueAtTime(.001,r+.15),i.connect(s),s.connect(this.ctx.destination),i.start(r),i.stop(r+.15)})}catch{}}playHover(){if(!(this.isMuted||!this.ctx))try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(480,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(720,this.ctx.currentTime+.05),t.gain.setValueAtTime(.03,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.05)}catch{}}playPulse(){if(!(this.isMuted||!this.ctx))try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(120,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(50,this.ctx.currentTime+.4),t.gain.setValueAtTime(.12,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.4),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.4)}catch{}}playWarp(){if(!(this.isMuted||!this.ctx))try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(300,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(880,this.ctx.currentTime+.25),t.gain.setValueAtTime(.06,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.25),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.25)}catch{}}playSuccess(){if(!(this.isMuted||!this.ctx))try{[440,554.37,659.25,880].forEach((t,i)=>{const s=this.ctx.createOscillator(),r=this.ctx.createGain(),o=this.ctx.currentTime+i*.08;s.type="sine",s.frequency.setValueAtTime(t,o),r.gain.setValueAtTime(.08,o),r.gain.exponentialRampToValueAtTime(.001,o+.25),s.connect(r),r.connect(this.ctx.destination),s.start(o),s.stop(o+.25)})}catch{}}}const Qe=new qp;class jp{constructor(){this.walls=[],this.initWalls(),this.lastBumpTime=0}initWalls(){const e=xt.length,t=xt[0].length,i=zt/2;for(let s=0;s<e;s++)for(let r=0;r<t;r++)if(xt[s][r]===1){const o=Es(s,r);this.walls.push({minX:o.x-i,maxX:o.x+i,minZ:o.z-i,maxZ:o.z+i,centerX:o.x,centerZ:o.z})}}resolveCollision(e,t,i){let s=!1;for(let o=0;o<3;o++){let a=!1;for(let l=0;l<this.walls.length;l++){const c=this.walls[l];if(e.x+i<c.minX||e.x-i>c.maxX||e.z+i<c.minZ||e.z-i>c.maxZ)continue;if(e.x>=c.minX&&e.x<=c.maxX&&e.z>=c.minZ&&e.z<=c.maxZ){const _=e.x-c.minX,u=c.maxX-e.x,d=e.z-c.minZ,y=c.maxZ-e.z,v=Math.min(_,u,d,y),S=.005;v===_?(e.x=c.minX-i-S,t.x>0&&(t.x=0)):v===u?(e.x=c.maxX+i+S,t.x<0&&(t.x=0)):v===d?(e.z=c.minZ-i-S,t.z>0&&(t.z=0)):(e.z=c.maxZ+i+S,t.z<0&&(t.z=0)),a=!0,s=!0;continue}const h=Math.max(c.minX,Math.min(e.x,c.maxX)),f=Math.max(c.minZ,Math.min(e.z,c.maxZ)),p=e.x-h,m=e.z-f,g=p*p+m*m;if(g<i*i&&g>1e-6){const _=Math.sqrt(g),u=i-_+.002,d=p/_,y=m/_;e.x+=d*u,e.z+=y*u;const v=t.x*d+t.z*y;v<0&&(t.x-=v*d*1.05,t.z-=v*y*1.05),a=!0,s=!0}}if(!a)break}const r=56.4;return e.x<-r&&(e.x=-r,t.x<0&&(t.x=0),s=!0),e.x>r&&(e.x=r,t.x>0&&(t.x=0),s=!0),e.z<-r&&(e.z=-r,t.z<0&&(t.z=0),s=!0),e.z>r&&(e.z=r,t.z>0&&(t.z=0),s=!0),s&&Math.hypot(t.x,t.z)>2.5&&performance.now()-this.lastBumpTime>220&&(this.lastBumpTime=performance.now(),Qe.playWallBump()),s}}function Kp(n,e){const t=xt.length,i=xt[0].length,s=Math.floor(t/2),r=Math.floor(i/2);let o=hs(Math.round(n.z/6)+s,0,t-1),a=hs(Math.round(n.x/6)+r,0,i-1),l=hs(Math.round(e.z/6)+s,0,t-1),c=hs(Math.round(e.x/6)+r,0,i-1);if(xt[o][a]===1){const m=Eo(o,a,t,i);m&&(o=m.r,a=m.c)}if(xt[l][c]===1){const m=Eo(l,c,t,i);m&&(l=m.r,c=m.c)}if(o===l&&a===c)return[{x:e.x,z:e.z}];const h=[[o,a,[]]],f=new Set([`${o},${a}`]),p=[[0,1],[0,-1],[1,0],[-1,0]];for(;h.length>0;){const[m,g,_]=h.shift(),u=[..._,{r:m,c:g}];if(m===l&&g===c){const d=[];for(let y=0;y<u.length;y++)if(y!==0)if(y===u.length-1)d.push({x:e.x,z:e.z});else{const v=u[y-1],S=u[y],P=u[y+1],C=S.r-v.r,A=S.c-v.c,F=P.r-S.r,Z=P.c-S.c;if(C!==F||A!==Z){const x=Es(S.r,S.c);d.push(x)}}return(d.length===0||d[d.length-1].x!==e.x||d[d.length-1].z!==e.z)&&d.push({x:e.x,z:e.z}),d}for(const[d,y]of p){const v=m+d,S=g+y;if(v<0||v>=t||S<0||S>=i)continue;const P=`${v},${S}`;f.has(P)||xt[v][S]!==1&&(f.add(P),h.push([v,S,u]))}}return[{x:e.x,z:e.z}]}function hs(n,e,t){return Math.max(e,Math.min(t,n))}function Eo(n,e,t,i){for(let s=1;s<5;s++)for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++){const a=n+r,l=e+o;if(a>=0&&a<t&&l>=0&&l<i&&xt[a][l]!==1)return{r:a,c:l}}return null}class $p{constructor(e,t){this.scene=e,this.camera=t,this.collision=new jp,this.radius=1,this.position=new U(0,0,4.8),this.velocity=new U(0,0,0),this.carSpeed=0,this.maxSpeed=20,this.dockTransition=null,this.headingAngle=Math.PI,this.targetHeadingAngle=Math.PI,this.cameraYaw=Math.PI,this.cameraPitch=.28,this.cameraDistance=6.6,this.targetCameraDistance=6.6,this.currentLookTarget=new U(0,1.25,0);const i=this.cameraDistance*Math.cos(this.cameraPitch),s=this.cameraDistance*Math.sin(this.cameraPitch);this.camera.position.set(0,1.25+s,4.8+i),this.camera.lookAt(this.currentLookTarget),this.currentCamPos=this.camera.position.clone(),this.isCameraOccluded=!1,this.isAutoNavigating=!1,this.activeWaypoints=[],this.currentWaypointIndex=0,this.keys={forward:!1,backward:!1,left:!1,right:!1},this.pulses=[],this.createAIRobot(),this.bindControls()}createAIRobot(){this.robot=new ft,this.robot.position.set(0,0,0);const e=new ve({color:16514042,roughness:.18,metalness:.08}),t=new ve({color:1974306,roughness:.32,metalness:.88}),i=new ve({color:1316119,roughness:.65,metalness:.25}),s=new ve({color:13949151,roughness:.12,metalness:.96}),r=new ve({color:395535,roughness:.05,metalness:.95}),o=new ve({color:15887973,emissive:14241607,emissiveIntensity:1.3,roughness:.2}),a=new Jt({color:16756802}),l=new Jt({color:16093578});this.fuselageGroup=new ft,this.fuselageGroup.position.set(0,1.25,0);const c=new gn(.54,32,24),h=new te(c,e);h.scale.set(.95,.82,1.15),h.castShadow=!0,h.receiveShadow=!0,this.fuselageGroup.add(h);const f=new at(.46,.32,.45,24),p=new te(f,t);p.position.y=-.32,p.castShadow=!0,this.fuselageGroup.add(p);const m=new Pe(.14,.65,.95),g=new te(m,i);g.position.set(0,.12,-.15),this.fuselageGroup.add(g);for(let ne of[-1,1])for(let _e=0;_e<3;_e++){const ue=new Pe(.04,.025,.24),I=new te(ue,t);I.position.set(ne*.44,-.05-_e*.06,-.1+_e*.05),I.rotation.z=ne*.2,this.fuselageGroup.add(I)}const _=new at(.19,.19,.06,24),u=new te(_,t);u.rotation.x=Math.PI/2,u.position.set(0,.06,.52),this.fuselageGroup.add(u);const d=new gn(.11,16,16);this.coreOrb=new te(d,o),this.coreOrb.position.set(0,.06,.54),this.fuselageGroup.add(this.coreOrb);const y=new Ii(.16,24),v=new te(y,r);v.position.set(0,.06,.56),this.fuselageGroup.add(v);const S=new te(new Pe(.03,.03,.03),a);S.position.set(-.12,.35,.42),this.fuselageGroup.add(S);const P=new te(new Pe(.03,.03,.03),l);P.position.set(.12,.35,.42),this.fuselageGroup.add(P),this.robot.add(this.fuselageGroup),this.headGroup=new ft,this.headGroup.position.set(0,1.82,.08);const C=new at(.26,.32,.1,24),A=new te(C,s);A.position.y=-.16,this.headGroup.add(A);const F=new gn(.42,28,20),Z=new te(F,e);Z.scale.set(.96,.88,1.08),Z.castShadow=!0,this.headGroup.add(Z);const x=new at(.24,.28,.14,24),b=new te(x,t);b.rotation.x=Math.PI/2,b.position.set(0,.02,.36),this.headGroup.add(b);const Y=new at(.18,.18,.06,24),K=new te(Y,r);K.rotation.x=Math.PI/2,K.position.set(0,.02,.43),this.headGroup.add(K);const L=new xn(.14,.02,12,24),B=new te(L,s);B.position.set(0,.02,.45),this.headGroup.add(B);const k=new gn(.06,16,16);this.eyeGlow=new te(k,o),this.eyeGlow.position.set(0,.02,.44),this.headGroup.add(this.eyeGlow);for(let ne of[-1,1]){const _e=new te(new at(.05,.05,.05,16),t);_e.rotation.x=Math.PI/2,_e.position.set(ne*.26,.02,.32),this.headGroup.add(_e);const ue=new te(new Ii(.04,16),r);ue.position.set(ne*.26,.02,.35),this.headGroup.add(ue)}const J=new at(.18,.22,.06,24),X=new te(J,t);X.position.set(0,.38,.04),this.headGroup.add(X),this.lidarPuck=new ft,this.lidarPuck.position.set(0,.43,.04);const $=new at(.15,.15,.08,24),R=new te($,i);this.lidarPuck.add(R);const T=new Pe(.06,.04,.16),j=new te(T,o);j.position.set(.08,0,0),this.lidarPuck.add(j),this.headGroup.add(this.lidarPuck),this.robot.add(this.headGroup),this.thrusterL=this.createThrusterPod(e,t,s,o,-1),this.thrusterR=this.createThrusterPod(e,t,s,o,1),this.robot.add(this.thrusterL),this.robot.add(this.thrusterR);const se=new at(.38,.28,.2,24),N=new te(se,t);N.position.y=.72,this.robot.add(N);const V=new xn(.34,.05,16,32),Q=new te(V,o);Q.rotation.x=Math.PI/2,Q.position.y=.65,this.robot.add(Q);for(let ne=0;ne<8;ne++){const _e=ne/8*Math.PI*2,ue=new Pe(.04,.08,.08),I=new te(ue,s);I.position.set(Math.cos(_e)*.32,.68,Math.sin(_e)*.32),I.rotation.y=-_e,this.robot.add(I)}this.thrusterLight=new Ni(15887973,1.4,4.5),this.thrusterLight.position.set(0,.42,0),this.robot.add(this.thrusterLight);const re=new Ii(.95,32),ae=new Jt({color:328965,transparent:!0,opacity:.35});this.contactShadow=new te(re,ae),this.contactShadow.rotation.x=-Math.PI/2,this.contactShadow.position.y=.02,this.scene.add(this.contactShadow),this.light=new Ni(16774634,1.3,14),this.light.position.set(0,1.8,.2),this.robot.add(this.light),this.scene.add(this.robot)}createThrusterPod(e,t,i,s,r){const o=new ft;o.position.set(r*.72,1.22,-.05);const a=new at(.04,.04,.25,12),l=new te(a,i);l.rotation.z=r*(Math.PI/3),l.position.set(-r*.12,0,0),o.add(l);const c=new gn(.08,16,16),h=new te(c,t);h.position.set(-r*.22,-.04,0),o.add(h);const f=new ft;f.name="nacelle";const p=new at(.14,.18,.58,20),m=new te(p,e);m.rotation.x=Math.PI/2,m.castShadow=!0,f.add(m);const g=new at(.15,.14,.12,20),_=new te(g,t);_.rotation.x=Math.PI/2,_.position.z=.32,f.add(_);const u=new at(.12,.17,.16,20,1,!0),d=new te(u,t);d.rotation.x=-Math.PI/2,d.position.z=-.34,f.add(d);const y=new at(.09,.09,.06,16),v=new te(y,s);v.rotation.x=Math.PI/2,v.position.z=-.32,f.add(v);const S=new Pe(.22,.03,.28),P=new te(S,t);return P.position.set(r*.14,.04,-.08),P.rotation.z=r*.15,f.add(P),o.add(f),o}bindControls(){window.addEventListener("keydown",e=>{var i;if(["INPUT","TEXTAREA"].includes((i=document.activeElement)==null?void 0:i.tagName))return;let t=!1;(e.code==="KeyW"||e.code==="ArrowUp")&&(this.keys.forward=!0,t=!0),(e.code==="KeyS"||e.code==="ArrowDown")&&(this.keys.backward=!0,t=!0),(e.code==="KeyA"||e.code==="ArrowLeft")&&(this.keys.left=!0,t=!0),(e.code==="KeyD"||e.code==="ArrowRight")&&(this.keys.right=!0,t=!0),t&&(this.isAutoNavigating=!1,this.activeWaypoints=[],this.dockTransition=null,Qe.playKeyStep(),this.highlightHUDKey(e.code)),e.code==="Space"&&(e.preventDefault(),this.triggerPulse())}),window.addEventListener("keyup",e=>{(e.code==="KeyW"||e.code==="ArrowUp")&&(this.keys.forward=!1),(e.code==="KeyS"||e.code==="ArrowDown")&&(this.keys.backward=!1),(e.code==="KeyA"||e.code==="ArrowLeft")&&(this.keys.left=!1),(e.code==="KeyD"||e.code==="ArrowRight")&&(this.keys.right=!1),this.unhighlightHUDKey(e.code)})}highlightHUDKey(e){var i;let t=null;(e==="KeyW"||e==="ArrowUp")&&(t="key-w"),(e==="KeyA"||e==="ArrowLeft")&&(t="key-a"),(e==="KeyS"||e==="ArrowDown")&&(t="key-s"),(e==="KeyD"||e==="ArrowRight")&&(t="key-d"),e==="Space"&&(t="key-space"),t&&((i=document.getElementById(t))==null||i.classList.add("active-key"))}unhighlightHUDKey(e){var i;let t=null;(e==="KeyW"||e==="ArrowUp")&&(t="key-w"),(e==="KeyA"||e==="ArrowLeft")&&(t="key-a"),(e==="KeyS"||e==="ArrowDown")&&(t="key-s"),(e==="KeyD"||e==="ArrowRight")&&(t="key-d"),e==="Space"&&(t="key-space"),t&&((i=document.getElementById(t))==null||i.classList.remove("active-key"))}triggerPulse(){Qe.playPulse();const e=new ys(.5,.9,48),t=new Jt({color:15887973,side:Kt,transparent:!0,opacity:.65}),i=new te(e,t);i.rotation.x=-Math.PI/2,i.position.set(this.position.x,.1,this.position.z),this.scene.add(i),this.pulses.push({mesh:i,scale:1,maxScale:20,opacity:.65})}navigateTo(e,t,i=Math.PI){Qe.playWarp(),this.targetSectionHeading=i,this.dockTransition=null;const s=Kp(this.position,{x:e,z:t});s&&s.length>0?(this.activeWaypoints=s,this.currentWaypointIndex=0,this.isAutoNavigating=!0,this.velocity.set(0,0,0)):(this.position.set(e,0,t),this.velocity.set(0,0,0),this.headingAngle=i,this.targetHeadingAngle=i)}warpTo(e,t,i=Math.PI){this.navigateTo(e,t,i)}dockAtSection(e){if(!e)return;const t=e.frontX!==void 0?e.frontX:e.x,i=e.frontZ!==void 0?e.frontZ:e.z+4.5,s=e.frontHeading!==void 0?e.frontHeading:Math.PI;Math.hypot(this.position.x-t,this.position.z-i)<.35&&Math.abs(this.headingAngle-s)<.2||(this.dockTransition={startX:this.position.x,startZ:this.position.z,startHeading:this.headingAngle,targetX:t,targetZ:i,targetHeading:s,elapsed:0,duration:.65},this.isAutoNavigating=!1,this.activeWaypoints=[],this.velocity.set(0,0,0),this.carSpeed=0)}update(e,t){var F,Z;const i=performance.now()*.001;if(this.cameraDistance+=(this.targetCameraDistance-this.cameraDistance)*Math.min(1,e*12),this.dockTransition){this.dockTransition.elapsed+=e;const x=Math.min(1,this.dockTransition.elapsed/this.dockTransition.duration),b=1-Math.pow(1-x,3);this.position.x=Rn.lerp(this.dockTransition.startX,this.dockTransition.targetX,b),this.position.z=Rn.lerp(this.dockTransition.startZ,this.dockTransition.targetZ,b);const Y=Rn.euclideanModulo(this.dockTransition.targetHeading-this.dockTransition.startHeading+Math.PI,Math.PI*2)-Math.PI;this.headingAngle=this.dockTransition.startHeading+Y*b,this.targetHeadingAngle=this.headingAngle,this.velocity.set(0,0,0),this.carSpeed=0,x>=1&&(this.position.x=this.dockTransition.targetX,this.position.z=this.dockTransition.targetZ,this.headingAngle=this.dockTransition.targetHeading,this.targetHeadingAngle=this.dockTransition.targetHeading,this.dockTransition=null)}else if(this.isAutoNavigating&&this.activeWaypoints.length>0){const x=this.activeWaypoints[this.currentWaypointIndex],b=x.x-this.position.x,Y=x.z-this.position.z,K=Math.hypot(b,Y),B=this.currentWaypointIndex===this.activeWaypoints.length-1?.8:2.6;if(K<B)this.currentWaypointIndex++,this.currentWaypointIndex>=this.activeWaypoints.length&&(this.isAutoNavigating=!1,this.activeWaypoints=[],this.carSpeed=0,this.velocity.set(0,0,0),this.targetSectionHeading!==void 0&&(this.headingAngle=this.targetSectionHeading,this.targetHeadingAngle=this.targetSectionHeading,this.targetSectionHeading=void 0));else{const J=new U(b/K,0,Y/K),X=19.5;this.carSpeed=X,this.velocity.copy(J).multiplyScalar(X),this.position.addScaledVector(this.velocity,e),this.targetHeadingAngle=Math.atan2(b,Y);const $=Rn.euclideanModulo(this.targetHeadingAngle-this.headingAngle+Math.PI,Math.PI*2)-Math.PI;this.headingAngle+=$*Math.min(1,e*8)}this.collision.resolveCollision(this.position,this.velocity,this.radius)&&(this.carSpeed=Math.min(this.carSpeed,Math.hypot(this.velocity.x,this.velocity.z)))}else{let Y=0;this.keys.left&&(Y+=1),this.keys.right&&(Y-=1),Y!==0&&(this.headingAngle+=Y*2.8*e,this.targetHeadingAngle=this.headingAngle),this.keys.forward?this.carSpeed=16.5:this.keys.backward?this.carSpeed=-16.5*.85:this.keys.left||this.keys.right?this.carSpeed=16.5*.7:this.carSpeed=0;const K=Math.sin(this.headingAngle),L=Math.cos(this.headingAngle);if(this.velocity.x=K*this.carSpeed,this.velocity.z=L*this.carSpeed,this.position.addScaledVector(this.velocity,e),this.collision.resolveCollision(this.position,this.velocity,this.radius)){const k=this.velocity.x*K+this.velocity.z*L;this.carSpeed>0?this.carSpeed=Math.max(0,k):this.carSpeed<0&&(this.carSpeed=Math.min(0,k))}}this.robot.rotation.y=this.headingAngle;const s=Math.abs(this.carSpeed),r=Math.min(1,s/this.maxSpeed),o=.2+Math.sin(i*4)*.08;this.robot.position.set(this.position.x,this.position.y+o,this.position.z);const l=(this.keys.left?1:this.keys.right?-1:0)*.18*Math.min(1,s/5),c=this.keys.forward?-.12:this.keys.backward?.08:0;this.robot.rotation.z=Rn.lerp(this.robot.rotation.z,l,.18),this.robot.rotation.x=Rn.lerp(this.robot.rotation.x,c,.18),this.lidarPuck&&(this.lidarPuck.rotation.y+=e*14);const h=(F=this.thrusterL)==null?void 0:F.getObjectByName("nacelle"),f=(Z=this.thrusterR)==null?void 0:Z.getObjectByName("nacelle"),p=-c*1.4+Math.sin(i*5)*.04;if(h&&(h.rotation.x=p+(this.keys.left?.08:0)),f&&(f.rotation.x=p+(this.keys.right?.08:0)),this.coreOrb){const x=1+Math.sin(i*5)*.08;this.coreOrb.scale.setScalar(x)}this.thrusterLight&&(this.thrusterLight.intensity=1.3+Math.sin(i*7)*.25),this.contactShadow.position.set(this.position.x,.02,this.position.z),this.contactShadow.scale.setScalar(1+Math.sin(i*3.5)*.05);const m=s>.35||this.keys.forward||this.keys.backward||this.keys.left||this.keys.right;if(m!==this.isMovingUIState){this.isMovingUIState=m;const x=document.getElementById("controls-pill");x&&x.classList.toggle("moving-active",m);const b=document.getElementById("campus-radar-container");b&&b.classList.toggle("moving-active",m);const Y=document.getElementById("moving-status-indicator");Y&&(Y.classList.toggle("flex",m),Y.classList.toggle("hidden",!m))}for(let x=this.pulses.length-1;x>=0;x--){const b=this.pulses[x];b.scale+=e*18,b.opacity-=e*.9,b.mesh.scale.set(b.scale,b.scale,1),b.mesh.material.opacity=Math.max(0,b.opacity),b.opacity<=0&&(this.scene.remove(b.mesh),b.mesh.geometry.dispose(),b.mesh.material.dispose(),this.pulses.splice(x,1))}const g=Rn.euclideanModulo(this.headingAngle-this.cameraYaw+Math.PI,Math.PI*2)-Math.PI;this.cameraYaw+=g*Math.min(1,e*5.2);const _=Math.sin(this.cameraYaw),u=Math.cos(this.cameraYaw),d=this.carSpeed>=0?r*.75:-.3,y=new U(this.position.x+_*d,this.position.y+1.25,this.position.z+u*d);this.currentLookTarget.lerp(y,Math.min(1,e*15));const v=this.cameraDistance*Math.cos(this.cameraPitch),S=this.cameraDistance*Math.sin(this.cameraPitch),P=new U(this.currentLookTarget.x-_*v,this.currentLookTarget.y+S,this.currentLookTarget.z-u*v),C=52;P.x=Math.max(-C,Math.min(C,P.x)),P.z=Math.max(-C,Math.min(C,P.z));const A=1-Math.exp(-15*e);this.currentCamPos.lerp(P,A),this.camera.position.copy(this.currentCamPos),this.camera.lookAt(this.currentLookTarget)}}function dr(n,e){const t=document.createElement("canvas");t.width=512,t.height=280;const i=t.getContext("2d");i.fillStyle="#0f1117",i.fillRect(0,0,t.width,t.height),i.fillStyle="#1e222d",i.fillRect(0,0,t.width,28),i.fillStyle="#ff5f56",i.beginPath(),i.arc(16,14,5,0,Math.PI*2),i.fill(),i.fillStyle="#ffbd2e",i.beginPath(),i.arc(32,14,5,0,Math.PI*2),i.fill(),i.fillStyle="#27c93f",i.beginPath(),i.arc(48,14,5,0,Math.PI*2),i.fill(),i.fillStyle="#8b949e",i.font='11px "JetBrains Mono", monospace',i.fillText(n,70,18),i.font='12px "JetBrains Mono", monospace',[{text:'import { CypheroxEngine } from "@cypherox/core";',color:"#f26e65"},{text:"const swarm = new AgentSwarm({ consensus: 0.998 });",color:"#58a6ff"},{text:"// Orchestrating production deployment matrix",color:"#8b949e"},{text:'await swarm.dispatch({ pipeline: "enterprise-rag" });',color:"#7ee787"},{text:"const metrics = await swarm.benchmark();",color:"#d2a8ff"},{text:"console.log(`Latency: ${metrics.latency}ms | Pass: 100%`);",color:"#ffa657"},{text:">> STATUS: 0 ERRORS • PRODUCTION ACTIVE",color:"#10B981"}].forEach((o,a)=>{i.fillStyle=o.color,i.fillText(o.text,18,56+a*28)});const r=new Tn(t);return r.minFilter=lt,r}function Zp(n,e,t,i){const s=document.createElement("canvas");s.width=512,s.height=512;const r=s.getContext("2d");r.fillStyle="#0f1118",r.fillRect(0,0,s.width,s.height),r.strokeStyle="rgba(255, 255, 255, 0.05)",r.lineWidth=1;for(let l=0;l<s.width;l+=32)r.beginPath(),r.moveTo(l,0),r.lineTo(l,s.height),r.stroke();for(let l=0;l<s.height;l+=32)r.beginPath(),r.moveTo(0,l),r.lineTo(s.width,l),r.stroke();r.strokeStyle=i,r.lineWidth=6,r.strokeRect(16,16,s.width-32,s.height-32),r.strokeStyle="rgba(255, 255, 255, 0.15)",r.lineWidth=2,r.strokeRect(26,26,s.width-52,s.height-52);const o=r.createRadialGradient(256,195,20,256,195,175);if(o.addColorStop(0,i+"30"),o.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=o,r.fillRect(30,30,s.width-60,330),r.save(),r.translate(256,195),t==="ai"){r.strokeStyle=i,r.lineWidth=3;const l=[{x:0,y:-52,r:12},{x:-55,y:-25,r:10},{x:55,y:-25,r:10},{x:-75,y:30,r:11},{x:75,y:30,r:11},{x:-30,y:65,r:9},{x:30,y:65,r:9},{x:0,y:15,r:16}];[[0,1],[0,2],[1,7],[2,7],[1,3],[2,4],[3,5],[4,6],[5,7],[6,7],[3,7],[4,7]].forEach(([h,f])=>{r.beginPath(),r.moveTo(l[h].x,l[h].y),r.lineTo(l[f].x,l[f].y),r.stroke()}),l.forEach(h=>{r.fillStyle="#0f1118",r.beginPath(),r.arc(h.x,h.y,h.r,0,Math.PI*2),r.fill(),r.fillStyle=i,r.beginPath(),r.arc(h.x,h.y,h.r-3,0,Math.PI*2),r.fill()})}else t==="software"?(r.strokeStyle=i,r.lineWidth=8,r.lineCap="round",r.lineJoin="round",r.beginPath(),r.moveTo(-45,-50),r.lineTo(-85,0),r.lineTo(-45,50),r.stroke(),r.beginPath(),r.moveTo(15,-60),r.lineTo(-15,60),r.stroke(),r.beginPath(),r.moveTo(45,-50),r.lineTo(85,0),r.lineTo(45,50),r.stroke(),r.fillStyle=i,r.fillRect(-35,75,70,7)):t==="cloud"?(r.strokeStyle=i,r.lineWidth=6,r.fillStyle=i+"22",r.beginPath(),r.arc(-25,-20,35,Math.PI*.8,Math.PI*1.85),r.arc(35,-35,42,Math.PI*1.1,Math.PI*2.05),r.arc(65,0,30,Math.PI*1.6,Math.PI*.4),r.arc(-55,10,25,Math.PI*.5,Math.PI*1.5),r.closePath(),r.fill(),r.stroke(),[-50,0,50].forEach(l=>{r.fillStyle=i,r.fillRect(l-14,50,28,14),r.beginPath(),r.moveTo(l,20),r.lineTo(l,50),r.stroke()})):(r.strokeStyle=i,r.lineWidth=5,[-45,0,45].forEach(l=>{r.beginPath(),r.ellipse(0,l,70,22,0,0,Math.PI*2),r.stroke(),l!==-45&&(r.beginPath(),r.moveTo(-70,l-22),r.lineTo(-70,l),r.moveTo(70,l-22),r.lineTo(70,l),r.stroke())}));r.restore(),r.textAlign="center",r.fillStyle=i,r.font='bold 15px "JetBrains Mono", monospace',r.fillText(`CYPHEROX // ${e.toUpperCase()}`,256,385),r.fillStyle="#ffffff",r.font='700 24px "Poppins", sans-serif',r.fillText(n,256,424),r.fillStyle="#8b949e",r.font='600 12px "JetBrains Mono", monospace',r.fillText("ENTERPRISE ARCHITECTURE PILLAR",256,458);const a=new Tn(s);return a.minFilter=lt,a}function Jp(){const n=document.createElement("canvas");n.width=1024,n.height=576;const e=n.getContext("2d");e.fillStyle="#0f1117",e.fillRect(0,0,n.width,n.height),e.fillStyle="#161922",e.fillRect(0,0,n.width,48),e.fillStyle="#f26e65",e.fillRect(24,16,16,16),e.fillStyle="#ffffff",e.font='bold 15px "Poppins", sans-serif',e.fillText("CYPHEROX CLOUD // ENTERPRISE PLATFORM",48,32),e.fillStyle="#f5918a",e.font='bold 11px "JetBrains Mono", monospace',e.textAlign="right",e.fillText("[VIEW ONLY • HIGH-PERFORMANCE WEB ARCHITECTURE]",n.width-24,31),e.textAlign="left",e.fillStyle="#12141c",e.fillRect(0,48,200,n.height-48),e.strokeStyle="#222634",e.lineWidth=1,e.beginPath(),e.moveTo(200,48),e.lineTo(200,n.height),e.stroke(),[{label:"📊 Dashboard",active:!0},{label:"⚡ Agent Swarms",active:!1},{label:"🌐 Cloud Clusters",active:!1},{label:"🔒 API Key Vault",active:!1},{label:"📈 Observability",active:!1},{label:"⚙ System Settings",active:!1}].forEach((u,d)=>{const y=72+d*42;u.active?(e.fillStyle="rgba(242, 110, 101, 0.15)",e.fillRect(12,y-18,176,32),e.fillStyle="#f26e65",e.fillRect(12,y-18,4,32),e.fillStyle="#ffffff"):e.fillStyle="#8b949e",e.font='500 13px "Poppins", sans-serif',e.fillText(u.label,28,y+2)}),[{label:"TOTAL THROUGHPUT",val:"14,280 req/s",sub:"+18.4% vs last week",col:"#10b981"},{label:"AVERAGE LATENCY",val:"12.4 ms",sub:"99.9th percentile",col:"#58a6ff"},{label:"CONSENSUS ACCURACY",val:"99.85%",sub:"Zero schema errors",col:"#f26e65"}].forEach((u,d)=>{const y=224+d*260;e.fillStyle="#161922",e.strokeStyle="#262a38",e.lineWidth=1,e.beginPath(),e.roundRect(y,68,244,96,8),e.fill(),e.stroke(),e.fillStyle="#8b949e",e.font='bold 10px "JetBrains Mono", monospace',e.fillText(u.label,y+16,92),e.fillStyle="#ffffff",e.font='bold 22px "Poppins", sans-serif',e.fillText(u.val,y+16,126),e.fillStyle=u.col,e.font='500 11px "JetBrains Mono", monospace',e.fillText(u.sub,y+16,148)});const s=224,r=184,o=764,a=200;e.fillStyle="#161922",e.strokeStyle="#262a38",e.beginPath(),e.roundRect(s,r,o,a,8),e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font='bold 14px "Poppins", sans-serif',e.fillText("Real-Time Cluster Traffic & Inference Throughput",s+18,r+28);const l=[{x:s+40,y:r+150},{x:s+140,y:r+130},{x:s+240,y:r+145},{x:s+340,y:r+105},{x:s+440,y:r+115},{x:s+540,y:r+70},{x:s+640,y:r+85},{x:s+720,y:r+55}];e.beginPath(),e.moveTo(l[0].x,r+170),l.forEach(u=>e.lineTo(u.x,u.y)),e.lineTo(l[l.length-1].x,r+170),e.closePath();const c=e.createLinearGradient(0,r+50,0,r+170);c.addColorStop(0,"rgba(242, 110, 101, 0.35)"),c.addColorStop(1,"rgba(242, 110, 101, 0.0)"),e.fillStyle=c,e.fill(),e.strokeStyle="#f26e65",e.lineWidth=3,e.beginPath(),l.forEach((u,d)=>{d===0?e.moveTo(u.x,u.y):e.lineTo(u.x,u.y)}),e.stroke(),l.forEach(u=>{e.fillStyle="#ffffff",e.beginPath(),e.arc(u.x,u.y,4,0,Math.PI*2),e.fill(),e.fillStyle="#f26e65",e.beginPath(),e.arc(u.x,u.y,2,0,Math.PI*2),e.fill()});const h=224,f=404,p=764,m=150;e.fillStyle="#161922",e.strokeStyle="#262a38",e.beginPath(),e.roundRect(h,f,p,m,8),e.fill(),e.stroke(),[{name:"agent-swarm-orchestrator",region:"eu-west-2 (London)",lat:"4.8ms",status:"HEALTHY"},{name:"enterprise-rag-vector-db",region:"eu-west-2 (London)",lat:"6.2ms",status:"HEALTHY"},{name:"api-gateway-edge-proxy",region:"Global Anycast",lat:"1.2ms",status:"HEALTHY"}].forEach((u,d)=>{const y=f+36+d*36;e.fillStyle="#ffffff",e.font='600 12px "JetBrains Mono", monospace',e.fillText(u.name,h+18,y),e.fillStyle="#8b949e",e.fillText(u.region,h+310,y),e.fillText(u.lat,h+530,y),e.fillStyle="rgba(16, 185, 129, 0.15)",e.fillRect(h+660,y-14,78,20),e.fillStyle="#10b981",e.font='bold 10px "JetBrains Mono", monospace',e.fillText(u.status,h+674,y)});const _=new Tn(n);return _.minFilter=lt,_}function Qp(){const n=document.createElement("canvas");n.width=512,n.height=1024;const e=n.getContext("2d");e.fillStyle="#0c0e14",e.fillRect(0,0,n.width,n.height),e.fillStyle="#ffffff",e.font='bold 15px "Poppins", sans-serif',e.fillText("09:41",36,44),e.fillStyle="#000000",e.beginPath(),e.roundRect(196,20,120,32,16),e.fill(),e.font='12px "JetBrains Mono", monospace',e.textAlign="right",e.fillText("5G  100%",n.width-36,44),e.textAlign="left",e.fillStyle="#8b949e",e.font='500 13px "Poppins", sans-serif',e.fillText("Welcome to Cypherox",32,92),e.fillStyle="#ffffff",e.font='bold 24px "Poppins", sans-serif',e.fillText("Enterprise Mobile",32,124),e.fillStyle="rgba(242, 110, 101, 0.15)",e.strokeStyle="#f26e65",e.lineWidth=1,e.beginPath(),e.roundRect(32,142,n.width-64,30,8),e.fill(),e.stroke(),e.fillStyle="#f5918a",e.font='bold 11px "JetBrains Mono", monospace',e.textAlign="center",e.fillText("VIEW ONLY • NATIVE IOS & ANDROID ARCHITECTURE",n.width/2,162),e.textAlign="left";const t=e.createLinearGradient(32,190,n.width-32,360);t.addColorStop(0,"#f26e65"),t.addColorStop(1,"#9b2c2c"),e.fillStyle=t,e.beginPath(),e.roundRect(32,190,n.width-64,170,20),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.85)",e.font='bold 12px "JetBrains Mono", monospace',e.fillText("TOTAL MANAGED INFRASTRUCTURE",52,226),e.fillStyle="#ffffff",e.font='bold 36px "Poppins", sans-serif',e.fillText("£48,500.00",52,274),e.font='500 13px "JetBrains Mono", monospace',e.fillText("⚡ 48 Production Agents Active  •  99.99%",52,318),[{label:"Deploy",icon:"🚀"},{label:"Metrics",icon:"📊"},{label:"Swarm",icon:"⚡"},{label:"Security",icon:"🛡"}].forEach((l,c)=>{const h=54+c*105,f=400;e.fillStyle="#181b24",e.strokeStyle="#262a38",e.lineWidth=1,e.beginPath(),e.arc(h,f,32,0,Math.PI*2),e.fill(),e.stroke(),e.font="22px sans-serif",e.textAlign="center",e.fillText(l.icon,h,f+8),e.fillStyle="#CBD5E1",e.font='600 12px "Poppins", sans-serif',e.fillText(l.label,h,f+56)}),e.textAlign="left",e.fillStyle="#ffffff",e.font='bold 18px "Poppins", sans-serif',e.fillText("Live Workstream Activity",32,510),[{title:"Multi-Agent Consensus Reached",time:"Just now",badge:"PASSED",color:"#10b981"},{title:"Canary Release eu-west-2 Deployed",time:"2m ago",badge:"ACTIVE",color:"#58a6ff"},{title:"Vector Index 4.2M Re-indexed",time:"14m ago",badge:"SYNCED",color:"#f59e0b"},{title:"Automated Security Penetration Scan",time:"1h ago",badge:"0 FLAWS",color:"#10b981"}].forEach((l,c)=>{const h=540+c*84;e.fillStyle="#161922",e.strokeStyle="#262a38",e.beginPath(),e.roundRect(32,h,n.width-64,70,14),e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font='600 14px "Poppins", sans-serif',e.fillText(l.title,50,h+30),e.fillStyle="#8b949e",e.font='500 12px "JetBrains Mono", monospace',e.fillText(l.time,50,h+52),e.fillStyle=l.color,e.font='bold 11px "JetBrains Mono", monospace',e.textAlign="right",e.fillText(l.badge,n.width-50,h+42),e.textAlign="left"});const r=n.height-100;e.fillStyle="#12141c",e.strokeStyle="#262a38",e.beginPath(),e.roundRect(32,r,n.width-64,64,32),e.fill(),e.stroke(),["🏠 Home","📊 Stats","⚡ Swarm","👤 Team"].forEach((l,c)=>{const h=84+c*95;e.fillStyle=c===0?"#f26e65":"#8b949e",e.font='600 13px "Poppins", sans-serif',e.textAlign="center",e.fillText(l,h,r+38)}),e.textAlign="left",e.fillStyle="#ffffff",e.beginPath(),e.roundRect(n.width/2-60,n.height-18,120,4,2),e.fill();const a=new Tn(n);return a.minFilter=lt,a}class em{constructor(e){this.scene=e,this.stations=Xt,this.stationObjects=[],this.activeStation=null,this.dockRadius=4.2,this.createStationVisuals()}createStationVisuals(){this.stations.forEach(e=>{const t=new ft;t.position.set(e.x,0,e.z);const i=new at(3.6,3.85,.16,48),s=new ve({color:14604492,roughness:.45,metalness:.12}),r=new te(i,s);r.position.y=.08,r.receiveShadow=!0,t.add(r);const o=new ys(3.45,3.65,64),a=new ve({color:e.color,roughness:.25,metalness:.85,emissive:e.color,emissiveIntensity:.65}),l=new te(o,a);l.rotation.x=-Math.PI/2,l.position.y=.17,t.add(l);const c=new ft;let h=[];if(e.id==="S1"){[-2,2].forEach(b=>{const Y=new Pe(1,3.2,.95),K=new ve({color:1184276,roughness:.35,metalness:.9}),L=new te(Y,K);L.position.set(b,1.6,0),L.castShadow=!0,c.add(L);for(let B=.45;B<=2.9;B+=.28){const k=new Pe(.88,.22,.05),J=new ve({color:1842207,roughness:.4,metalness:.7}),X=new te(k,J);X.position.set(b,B,.46),c.add(X);const $=new Pe(.04,.04,.02),R=new ve({color:1096065,emissive:1096065,emissiveIntensity:.9}),T=new te($,R);T.position.set(b-.35,B,.49),c.add(T);const j=new ve({color:16096779,emissive:16096779,emissiveIntensity:.8}),se=new te($,j);se.position.set(b-.28,B,.49),c.add(se)}});const p=new at(.9,1.05,.8,16),m=new ve({color:1710620,roughness:.3,metalness:.85}),g=new te(p,m);g.position.y=.4,g.castShadow=!0,c.add(g);const _=new at(.85,.85,1.8,24),u=new or({color:16777215,transmission:.88,opacity:1,transparent:!0,roughness:.08,ior:1.5,metalness:.1}),d=new te(_,u);d.position.y=1.7,c.add(d);const y=new gn(.42,32,32),v=new ve({color:15887973,roughness:.1,metalness:.9,emissive:15887973,emissiveIntensity:.85}),S=new te(y,v);S.position.y=1.7,c.add(S);const P=new xn(.62,.025,16,48),C=new ve({color:16093578,roughness:.2,metalness:.9,emissive:16093578,emissiveIntensity:.4}),A=new te(P,C);A.position.y=1.7,c.add(A);const F=new xn(.74,.025,16,48),Z=new ve({color:16777215,roughness:.15,metalness:.95}),x=new te(F,Z);x.position.y=1.7,c.add(x),h.push((b,Y)=>{S.position.y=1.7+Math.sin(b*2.2)*.06,A.position.y=S.position.y,x.position.y=S.position.y,A.rotation.x+=Y*1.3,A.rotation.y+=Y*.9,x.rotation.y-=Y*1.5,x.rotation.z+=Y*1})}else if(e.id==="S2"){const p=new Pe(3.2,.09,1.3),m=new ve({color:2826779,roughness:.4,metalness:.15}),g=new te(p,m);g.position.set(0,.95,-.2),g.castShadow=!0,c.add(g);const _=new ve({color:1447448,roughness:.35,metalness:.85});[-1.4,1.4].forEach(N=>{const V=new Pe(.08,.95,1.1),Q=new te(V,_);Q.position.set(N,.475,-.2),c.add(Q)});const u=dr("main.ts — Cypherox Engine"),d=dr("ml-pipeline.py — Hardik"),y=dr("infra.tf — Akash"),v=new dt(.95,.52),S=new Jt({map:u}),P=new te(v,S);P.position.set(0,1.45,-.32),c.add(P);const C=new Pe(1,.56,.04),A=new te(C,_);A.position.set(0,1.45,-.35),c.add(A);const F=new Jt({map:d}),Z=new te(v,F);Z.position.set(-.95,1.45,-.2),Z.rotation.y=.48,c.add(Z);const x=new te(C,_);x.position.set(-.95,1.45,-.23),x.rotation.y=.48,c.add(x);const b=new Jt({map:y}),Y=new te(v,b);Y.position.set(.95,1.45,-.2),Y.rotation.y=-.48,c.add(Y);const K=new te(C,_);K.position.set(.95,1.45,-.23),K.rotation.y=-.48,c.add(K);const L=new Pe(.48,.02,.16),B=new ve({color:2039587,roughness:.5,metalness:.6}),k=new te(L,B);k.position.set(0,1.01,.15),c.add(k);const J=new Pe(.24,.46,.44),X=new ve({color:1118483,roughness:.3,metalness:.85}),$=new te(J,X);$.position.set(1.25,1.23,-.2),c.add($);const R=new Pe(2.6,1.5,.06),T=new ve({color:1579035,roughness:.2,metalness:.8,emissive:16093578,emissiveIntensity:.15}),j=new te(R,T);j.position.set(0,2.2,-1.4),c.add(j),[{name:"Hardik P.",role:"Head of AI / Systems",color:15887973},{name:"Krupa P.",role:"Engineering Lead",color:16093578},{name:"Akash B.",role:"Cloud & DevOps Lead",color:1096065}].forEach((N,V)=>{const Q=-.85+V*.85,re=new Pe(.72,.22,.04),ae=new ve({color:1315862,roughness:.3,metalness:.85,emissive:N.color,emissiveIntensity:.3}),ne=new te(re,ae);ne.position.set(Q,2.75,-1.36),c.add(ne)})}else if(e.id==="S3"){[{title:"Autonomous AI Swarms",category:"AI & Machine Learning",iconType:"ai",color:"#f26e65",colorHex:15887973,pos:[-1.4,-1],rotY:0},{title:"Custom Software",category:"Full-Stack Engineering",iconType:"software",color:"#58a6ff",colorHex:5809919,pos:[1.4,-1],rotY:0},{title:"Cloud & DevOps",category:"Infrastructure & Kubernetes",iconType:"cloud",color:"#10b981",colorHex:1096065,pos:[-1.4,1],rotY:Math.PI},{title:"Enterprise RAG & Data",category:"Vector DB & Search",iconType:"data",color:"#f59e0b",colorHex:16096779,pos:[1.4,1],rotY:Math.PI}].forEach(C=>{const A=new ft;A.position.set(C.pos[0],0,C.pos[1]),A.rotation.y=C.rotY;const F=new at(.58,.65,.22,24),Z=new ve({color:1447706,roughness:.3,metalness:.9}),x=new te(F,Z);x.position.y=.11,x.receiveShadow=!0,A.add(x);const b=new Pe(.85,2.7,.85),Y=new ve({color:1711138,roughness:.35,metalness:.85}),K=new te(b,Y);K.position.y=1.46,K.castShadow=!0,K.receiveShadow=!0,A.add(K);const L=new Pe(.92,.12,.92),B=new ve({color:C.colorHex,roughness:.2,metalness:.9,emissive:C.colorHex,emissiveIntensity:.65}),k=new te(L,B);k.position.y=2.87,A.add(k);const J=Zp(C.title,C.category,C.iconType,C.color),X=new dt(.74,.74),$=new ve({map:J,roughness:.25,metalness:.1}),R=new te(X,$);R.position.set(0,1.8,.435),A.add(R);const T=new dt(.75,.75),j=new or({color:16777215,transparent:!0,opacity:.12,roughness:.05}),se=new te(T,j);se.position.set(0,1.8,.44),A.add(se),c.add(A)});const m=new at(.8,.95,.7,24),g=new ve({color:1579035,roughness:.35,metalness:.85}),_=new te(m,g);_.position.set(0,.35,0),c.add(_);const u=new Pe(.7,.12,.7),d=new ve({color:986898,roughness:.2,metalness:.9}),y=new te(u,d);y.position.set(0,.76,0),c.add(y);const v=new Pe(.5,.04,.5),S=new ve({color:16096779,roughness:.15,metalness:.95,emissive:16096779,emissiveIntensity:.6}),P=new te(v,S);P.position.set(0,.84,0),c.add(P)}else if(e.id==="S4"){[-2,2].forEach(ue=>{const I=new Pe(.9,3.2,.9),We=new ve({color:1315862,roughness:.35,metalness:.85}),le=new te(I,We);le.position.set(ue,1.6,-1),le.castShadow=!0,c.add(le);for(let Se=.6;Se<=2.8;Se+=.35){const Me=new Pe(.7,.06,.02),Ae=new ve({color:1096065,emissive:1096065,emissiveIntensity:.85}),Te=new te(Me,Ae);Te.position.set(ue,Se,-.54),c.add(Te)}});const p=new ft;p.position.set(-1.45,0,.2),p.rotation.y=.22;const m=new Pe(1.2,.18,.75),g=new ve({color:1579294,roughness:.35,metalness:.9}),_=new te(m,g);_.position.y=.09,p.add(_);const u=new Pe(.38,1.45,.38),d=new te(u,g);d.position.y=.82,d.castShadow=!0,p.add(d);const y=new Pe(2.36,1.38,.1),v=new ve({color:1184534,roughness:.3,metalness:.85}),S=new te(y,v);S.position.y=2.15,S.castShadow=!0,p.add(S);const P=new Pe(2.28,1.3,.11),C=new ve({color:15887973,emissive:15887973,emissiveIntensity:.45}),A=new te(P,C);A.position.y=2.15,p.add(A);const F=Jp(),Z=new dt(2.24,1.26),x=new ve({map:F,roughness:.2,metalness:.05}),b=new te(Z,x);b.position.set(0,2.15,.06),p.add(b);const Y=new dt(2.25,1.27),K=new or({color:16777215,transparent:!0,opacity:.1,roughness:.05}),L=new te(Y,K);L.position.set(0,2.15,.065),p.add(L),c.add(p);const B=new ft;B.position.set(1.45,0,.2),B.rotation.y=-.22;const k=new Pe(.95,.18,.7),J=new te(k,g);J.position.y=.09,B.add(J);const X=new Pe(.34,1.25,.34),$=new te(X,g);$.position.y=.72,$.castShadow=!0,B.add($);const R=new Pe(.96,1.88,.09),T=new te(R,v);T.position.y=2.15,T.castShadow=!0,B.add(T);const j=new Pe(.9,1.8,.1),se=new ve({color:5809919,emissive:5809919,emissiveIntensity:.45}),N=new te(j,se);N.position.y=2.15,B.add(N);const V=Qp(),Q=new dt(.86,1.74),re=new ve({map:V,roughness:.2,metalness:.05}),ae=new te(Q,re);ae.position.set(0,2.15,.055),B.add(ae);const ne=new dt(.87,1.75),_e=new te(ne,K);_e.position.set(0,2.15,.06),B.add(_e),c.add(B)}else{const p=new xn(2.3,.16,16,48,Math.PI),m=new ve({color:2105380,roughness:.25,metalness:.85}),g=new te(p,m);g.position.set(0,.1,0),g.rotation.z=Math.PI,c.add(g);const _=new xn(2.15,.035,16,48,Math.PI),u=new ve({color:15887973,emissive:15887973,emissiveIntensity:.95}),d=new te(_,u);d.position.set(0,.1,0),d.rotation.z=Math.PI,c.add(d);const y=new Pe(2,.95,.85),v=new ve({color:1447449,roughness:.35,metalness:.8}),S=new te(y,v);S.position.set(0,.475,0),S.castShadow=!0,c.add(S);const P=new Pe(1.2,.6,.05),C=new ve({color:657932,roughness:.2,metalness:.9,emissive:16093578,emissiveIntensity:.35}),A=new te(P,C);A.position.set(0,1.25,0),c.add(A)}t.add(c);const f=new Ni(e.color,1.6,18);f.position.y=3.4,t.add(f),this.scene.add(t),this.stationObjects.push({data:e,group:t,contentGroup:c,animators:h,ring:l,light:f})})}update(e,t){var o;const i=performance.now()*.001;this.stationObjects.forEach(a=>{a.animators.forEach(l=>l(i,t))});let s=null,r=1/0;for(const a of this.stations){const l=e.x-a.x,c=e.z-a.z,h=Math.sqrt(l*l+c*c);h<this.dockRadius&&h<r&&(s=a,r=h)}s&&((o=this.activeStation)==null?void 0:o.id)!==s.id?(this.activeStation=s,Qe.playDock(),window.dispatchEvent(new CustomEvent("stationDocked",{detail:{station:s}}))):!s&&this.activeStation&&(this.activeStation=null,window.dispatchEvent(new CustomEvent("stationUndocked")))}}class tm{constructor(e){this.scene=e,this.count=350;const t=new wt,i=new Float32Array(this.count*3),s=new Float32Array(this.count*3),r=new Ue(15854817),o=new Ue(9741240);for(let l=0;l<this.count;l++){i[l*3]=(Math.random()-.5)*160,i[l*3+1]=Math.random()*15+.5,i[l*3+2]=(Math.random()-.5)*160;const c=Math.random()>.5?r:o;s[l*3]=c.r,s[l*3+1]=c.g,s[l*3+2]=c.b}t.setAttribute("position",new Nt(i,3)),t.setAttribute("color",new Nt(s,3));const a=new sl({size:.35,vertexColors:!0,transparent:!0,opacity:.35,blending:kn});this.points=new Gp(t,a),this.scene.add(this.points)}update(e){this.points.rotation.y+=e*.01}}class nm{constructor(e,t,i){this.canvas=document.getElementById(e),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.player=t,this.stationsManager=i,this.rows=xt.length,this.cols=xt[0].length,this.size=this.canvas.width,this.cellSize=this.size/this.cols,this.bindClicks())}bindClicks(){this.canvas.addEventListener("click",e=>{const t=this.canvas.getBoundingClientRect(),i=e.clientX-t.left,s=e.clientY-t.top,r=Math.floor(i/(t.width/this.cols)),o=Math.floor(s/(t.height/this.rows)),a=Xt.find(l=>Math.abs(l.row-o)<=1&&Math.abs(l.col-r)<=1);a&&(Qe.playWarp(),this.player.warpTo(a.x,a.z))})}update(){if(!this.ctx)return;const e=this.ctx;e.clearRect(0,0,this.size,this.size);for(let u=0;u<this.rows;u++)for(let d=0;d<this.cols;d++)xt[u][d]===1?(e.fillStyle="#e5e1da",e.fillRect(d*this.cellSize,u*this.cellSize,this.cellSize,this.cellSize)):(e.fillStyle="#f5f3ef",e.fillRect(d*this.cellSize,u*this.cellSize,this.cellSize,this.cellSize));Xt.forEach(u=>{const d=(u.col+.5)*this.cellSize,y=(u.row+.5)*this.cellSize;e.beginPath(),e.arc(d,y,this.cellSize*.9,0,Math.PI*2),e.fillStyle=u.hexColor,e.fill(),e.fillStyle="#ffffff",e.font='bold 8px "JetBrains Mono", monospace',e.textAlign="center",e.textBaseline="middle",e.fillText(u.number,d,y)});const t=Math.floor(this.cols/2),i=Math.floor(this.rows/2),s=this.player.position.x/6+t,r=this.player.position.z/6+i,o=s*this.cellSize,a=r*this.cellSize;e.beginPath(),e.arc(o,a,this.cellSize*.75,0,Math.PI*2),e.fillStyle="#1a1a1a",e.fill(),e.beginPath(),e.arc(o,a,this.cellSize*.4,0,Math.PI*2),e.fillStyle="#f26e65",e.fill();const l=this.cellSize*2.4,c=this.player.cameraYaw-.38,h=this.player.cameraYaw+.38,f=Math.sin(this.player.cameraYaw),p=Math.cos(this.player.cameraYaw);e.beginPath(),e.moveTo(o,a),e.lineTo(o+Math.sin(c)*l,a+Math.cos(c)*l),e.lineTo(o+Math.sin(h)*l,a+Math.cos(h)*l),e.closePath(),e.fillStyle="rgba(242, 110, 101, 0.22)",e.fill(),e.beginPath(),e.moveTo(o,a),e.lineTo(o+f*l*.9,a+p*l*.9),e.strokeStyle="#f26e65",e.lineWidth=1.5,e.stroke();const m=this.player.velocity.x,g=this.player.velocity.z,_=Math.sqrt(m*m+g*g);if(_>.4){const u=m/_*this.cellSize*1.6,d=g/_*this.cellSize*1.6;e.beginPath(),e.moveTo(o,a),e.lineTo(o+u,a+d),e.strokeStyle="#ffffff",e.lineWidth=2,e.stroke()}}}class im{constructor(){this.container=document.getElementById("station-terminal-container"),this.titleEl=document.getElementById("terminal-station-title"),this.badgeEl=document.getElementById("terminal-station-badge"),this.contentEl=document.getElementById("terminal-station-content"),this.minimizeBtn=document.getElementById("terminal-minimize-btn"),this.expandTrigger=document.getElementById("terminal-expand-trigger"),this.tabs=document.querySelectorAll(".station-tab-btn"),this.isDocked=!1,this.isMinimized=!1,this.currentStation=Xt[0],this.bindEvents(),this.dock(this.currentStation)}bindEvents(){var e,t;window.addEventListener("stationDocked",i=>{this.dock(i.detail.station)}),window.addEventListener("stationUndocked",()=>{this.isDocked=!1,this.collapse()}),(e=this.minimizeBtn)==null||e.addEventListener("click",()=>{this.toggleMinimize()}),(t=this.expandTrigger)==null||t.addEventListener("click",()=>{this.toggleMinimize()}),window.addEventListener("keydown",i=>{var s;["INPUT","TEXTAREA"].includes((s=document.activeElement)==null?void 0:s.tagName)||(i.key==="e"||i.key==="E")&&this.toggleMinimize()}),this.tabs.forEach(i=>{i.addEventListener("click",()=>{const s=i.dataset.target,r=Xt.find(o=>o.number===s);r&&(Qe.playWarp(),window.dispatchEvent(new CustomEvent("warpToStation",{detail:{station:r}})),this.dock(r))})})}dock(e){this.isDocked=!0,this.currentStation=e,this.container&&(this.titleEl&&(this.titleEl.textContent=`Pavilion ${String(e.number).padStart(2,"0")}: ${e.name}`),this.badgeEl&&(this.badgeEl.textContent=`${e.pageName.toUpperCase()} ACTIVE`,this.badgeEl.style.color="#f5918a",this.badgeEl.style.borderColor="rgba(242, 110, 101, 0.4)"),this.tabs.forEach(t=>{t.dataset.target===e.number?(t.classList.add("active-tab"),t.classList.remove("bg-[#1a1a1a]","border-[#333333]","text-[#CBD5E1]")):(t.classList.remove("active-tab"),t.classList.add("bg-[#1a1a1a]","border-[#333333]","text-[#CBD5E1]"))}),this.renderPageContent(e.id),this.expand())}collapse(){var e,t;this.isMinimized||(this.isMinimized=!0,(e=this.container)==null||e.classList.add("panel-collapsed"),(t=this.expandTrigger)==null||t.classList.remove("hidden"))}expand(){var e,t;this.isMinimized&&(this.isMinimized=!1,(e=this.container)==null||e.classList.remove("panel-collapsed"),(t=this.expandTrigger)==null||t.classList.add("hidden"))}toggleMinimize(){Qe.playKeyStep(),this.isMinimized?this.expand():this.collapse()}renderPageContent(e){this.contentEl&&(e==="S1"?this.contentEl.innerHTML=`
        <div class="space-y-6 font-sans">
          <!-- Hero Announcement Card -->
          <div class="p-6 rounded-2xl bg-[#1a1a1a] border border-[#333333] shadow-xl">
            <div class="flex items-center justify-between mb-3">
              <span class="eyebrow text-[#f5918a]">Production AI Engineering Firm</span>
              <div class="flex items-center gap-1.5 text-[#F59E0B] text-xs font-semibold bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                <span>★★★★★</span>
                <span class="text-[#E2E8F0] font-mono text-[11px] ml-1">4.9/5 Clutch & Google</span>
              </div>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight tracking-tight">
              We Build the Technology <br>Your Business <span class="text-gradient">Depends On</span>
            </h2>
            <p class="text-sm text-[#E2E8F0] leading-relaxed font-normal mb-5">
              AI applications, custom software, cloud infrastructure and dedicated engineering teams. Designed, built and supported for businesses that need production systems, not prototypes.
            </p>
            <div class="flex flex-wrap items-center gap-3">
              <button data-open-booking class="btn btn--primary font-bold shadow-lg">Talk to an Engineer</button>
              <button class="nav-jump btn btn--secondary font-semibold" data-target="3">Explore Our Services →</button>
            </div>
          </div>

          <!-- Verified Cypherox Stats Strip -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="text-2xl font-black text-white"><span class="text-gradient">11</span><span class="text-[#f26e65]">+</span></div>
              <div class="text-xs text-[#CBD5E1] mt-1 font-medium"><strong class="text-white">Years</strong> In Business</div>
            </div>
            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="text-2xl font-black text-white"><span class="text-gradient">130</span><span class="text-[#f26e65]">+</span></div>
              <div class="text-xs text-[#CBD5E1] mt-1 font-medium"><strong class="text-white">Engineers</strong> Dedicated</div>
            </div>
            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="text-2xl font-black text-white"><span class="text-gradient">1,500</span><span class="text-[#f26e65]">+</span></div>
              <div class="text-xs text-[#CBD5E1] mt-1 font-medium"><strong class="text-white">Projects</strong> Delivered</div>
            </div>
            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="text-2xl font-black text-white"><span class="text-gradient">5</span></div>
              <div class="text-xs text-[#CBD5E1] mt-1 font-medium"><strong class="text-white">Regions</strong> UK, US, EU, UAE, IN</div>
            </div>
          </div>

          <!-- Why Choose Cypherox -->
          <div class="p-5 rounded-2xl bg-[#161616] border border-[#2e2e2e] space-y-3">
            <div class="text-xs font-mono font-bold text-white tracking-wider uppercase">Why Global Enterprises Partner With Us</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-[#1c1c1c] rounded-xl border border-[#333333]">
                <div class="font-bold text-white mb-1">Direct Engineer Access</div>
                <p class="text-[#CBD5E1] leading-relaxed">No junior account managers. You speak directly to the senior architects engineering your systems.</p>
              </div>
              <div class="p-3 bg-[#1c1c1c] rounded-xl border border-[#333333]">
                <div class="font-bold text-white mb-1">Production Rigor</div>
                <p class="text-[#CBD5E1] leading-relaxed">Zero prototype fragility. We deliver tested, scalable codebases with automated CI/CD and 99.9% uptime.</p>
              </div>
            </div>
          </div>

          <!-- Quick Navigation Links -->
          <div class="flex items-center justify-between text-xs font-mono text-[#A3A3A3] pt-2 border-t border-[#2e2e2e]">
            <span>Fast Travel to Pavilion:</span>
            <div class="flex gap-2">
              <button class="nav-jump text-[#f5918a] hover:underline cursor-pointer" data-target="2">[2] About & Team</button> •
              <button class="nav-jump text-[#f5918a] hover:underline cursor-pointer" data-target="3">[3] Services</button> •
              <button class="nav-jump text-[#f5918a] hover:underline cursor-pointer" data-target="4">[4] Projects</button> •
              <button class="nav-jump text-[#f5918a] hover:underline cursor-pointer" data-target="5">[5] Contact</button>
            </div>
          </div>
        </div>
      `:e==="S2"?this.contentEl.innerHTML=`
        <div class="space-y-6 font-sans">
          <div class="p-6 rounded-2xl bg-[#1a1a1a] border border-[#333333]">
            <span class="eyebrow text-[#f5918a]">Delivery Philosophy // Cypherox</span>
            <h2 class="text-xl sm:text-2xl font-bold text-white mb-2.5">Four Areas. <span class="text-gradient">One Responsible Partner.</span></h2>
            <p class="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal mb-3">
              Most businesses manage separate vendors for AI, software, cloud and data. Requirements get lost between handoffs. Cypherox brings these functions under one engineering team so everything connects and runs seamlessly.
            </p>
            <p class="text-xs text-[#CBD5E1] font-mono bg-[#141414] p-3 rounded-lg border border-[#2a2a2a]">
              Speed with structure. Speed without structure creates technical debt later. Structure without speed creates delays now. We balance both.
            </p>
          </div>

          <!-- Developer Profiles Roster (From Live Site) -->
          <div class="space-y-3">
            <div class="text-xs font-mono text-white font-bold flex items-center justify-between">
              <span>HIRE DEDICATED CYPHEROX SPECIALISTS:</span>
              <span class="text-emerald-400 text-[10px] font-bold">🟢 3 Senior Engineers Available Now</span>
            </div>

            <div class="grid grid-cols-1 gap-3.5 text-xs">
              <!-- Hardik -->
              <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e] flex flex-col justify-between hover:border-[#f26e65]/60 transition">
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-bold text-white text-base">Hardik</span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">Available Immediately</span>
                  </div>
                  <div class="text-xs text-[#f5918a] font-bold mb-2">Senior AI & Machine Learning Engineer</div>
                  <p class="text-xs text-[#CBD5E1] mb-3 leading-relaxed">Specialized in production LLM applications, autonomous agent workflows, LangChain, RAG pipelines, fine-tuning and AWS SageMaker deployment.</p>
                  <div class="flex flex-wrap gap-1.5 text-[10px] font-mono text-white mb-3">
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">Python</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">PyTorch</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">LangChain</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">FastAPI</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">ChromaDB</span>
                  </div>
                </div>
                <button data-open-booking class="btn--pill-primary w-full py-2.5 text-xs font-bold cursor-pointer">
                  Hire Hardik for Your Project →
                </button>
              </div>

              <!-- Krupa -->
              <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e] flex flex-col justify-between hover:border-[#f26e65]/60 transition">
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-bold text-white text-base">Krupa</span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">Available Immediately</span>
                  </div>
                  <div class="text-xs text-[#f5918a] font-bold mb-2">Senior Full Stack Engineer</div>
                  <p class="text-xs text-[#CBD5E1] mb-3 leading-relaxed">End-to-end web & mobile architectures, React, Next.js, responsive frontend systems, high-throughput microservices and PostgreSQL optimization.</p>
                  <div class="flex flex-wrap gap-1.5 text-[10px] font-mono text-white mb-3">
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">React</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">Next.js</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">Node.js</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">TypeScript</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">Docker</span>
                  </div>
                </div>
                <button data-open-booking class="btn--pill-primary w-full py-2.5 text-xs font-bold cursor-pointer">
                  Hire Krupa for Your Project →
                </button>
              </div>

              <!-- Akash -->
              <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e] flex flex-col justify-between hover:border-[#f26e65]/60 transition">
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="font-bold text-white text-base">Akash</span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">Available Immediately</span>
                  </div>
                  <div class="text-xs text-[#f5918a] font-bold mb-2">Senior Cloud & DevOps Engineer</div>
                  <p class="text-xs text-[#CBD5E1] mb-3 leading-relaxed">Infrastructure as Code (Terraform), Kubernetes cluster orchestration, multi-cloud reliability, automated CI/CD and AWS/GCP cloud cost reduction.</p>
                  <div class="flex flex-wrap gap-1.5 text-[10px] font-mono text-white mb-3">
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">AWS</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">Terraform</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">Kubernetes</span>
                    <span class="bg-[#242424] px-2 py-0.5 rounded border border-[#383838]">CI/CD</span>
                  </div>
                </div>
                <button data-open-booking class="btn--pill-primary w-full py-2.5 text-xs font-bold cursor-pointer">
                  Hire Akash for Your Project →
                </button>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between pt-3 border-t border-[#2e2e2e]">
            <button data-open-booking class="btn btn--primary font-bold">
              Build a Dedicated Team →
            </button>
            <button class="nav-jump text-xs font-mono text-[#CBD5E1] hover:text-[#f26e65] transition cursor-pointer" data-target="3">
              Explore 4 Engineering Services [3] →
            </button>
          </div>
        </div>
      `:e==="S3"?(this.contentEl.innerHTML=`
        <div class="space-y-6 font-sans">
          <div class="flex items-center justify-between border-b border-[#2e2e2e] pb-3 overflow-x-auto gap-2">
            <span class="eyebrow text-[#f5918a]">Services // Core:</span>
            <div class="flex gap-2 font-mono">
              <button class="lab-tab-btn tab-active px-3 py-1.5 rounded-lg bg-[#f26e65] text-white font-bold text-xs shadow cursor-pointer" data-tab="ai">1. Production AI</button>
              <button class="lab-tab-btn px-3 py-1.5 rounded-lg bg-[#1e1e1e] border border-[#333333] text-[#CBD5E1] hover:text-white font-semibold text-xs transition cursor-pointer" data-tab="software">2. Custom Software</button>
              <button class="lab-tab-btn px-3 py-1.5 rounded-lg bg-[#1e1e1e] border border-[#333333] text-[#CBD5E1] hover:text-white font-semibold text-xs transition cursor-pointer" data-tab="cloud">3. Cloud & DevOps</button>
              <button class="lab-tab-btn px-3 py-1.5 rounded-lg bg-[#1e1e1e] border border-[#333333] text-[#CBD5E1] hover:text-white font-semibold text-xs transition cursor-pointer" data-tab="data">4. Data Analytics</button>
            </div>
          </div>

          <!-- Service 1: Production AI -->
          <div id="tab-ai" class="lab-tab-pane space-y-4">
            <h3 class="text-xl font-bold text-white">Production AI Systems & Agent Swarms</h3>
            <p class="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal">
              We design and deploy custom LLM agents, computer vision, and autonomous execution pipelines that automate complex enterprise operations with verifiable accuracy and zero hallucination drift.
            </p>
            <div class="bg-[#161616] border border-[#333333] rounded-2xl p-4 font-mono text-xs">
              <div class="flex justify-between pb-2.5 border-b border-[#2e2e2e] text-[11px] mb-2.5 text-white font-bold">
                <span>INTERACTIVE AI AGENT SIMULATOR:</span>
                <span class="text-[#f5918a]">[Hardik's Pipeline]</span>
              </div>
              <div id="station-swarm-logs" class="h-28 overflow-y-auto space-y-1.5 text-[#CBD5E1] pr-1 text-xs">
                <div class="text-[#888888]">// Ready. Click dispatch below to test Cypherox agentic consensus pipeline...</div>
              </div>
              <button id="btn-station-swarm" class="btn--pill-primary w-full mt-3.5 py-2.5 text-xs font-bold cursor-pointer">
                ⚡ Dispatch Production AI Agent Swarm
              </button>
            </div>
          </div>

          <!-- Service 2: Custom Software -->
          <div id="tab-software" class="lab-tab-pane hidden space-y-4">
            <h3 class="text-xl font-bold text-white">Custom Web & Mobile Software</h3>
            <p class="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal">
              High-performance web applications, mobile platforms, and enterprise APIs designed to replace fragile legacy code with clean, maintainable microservice architectures.
            </p>
            <div class="bg-[#161616] border border-[#333333] rounded-2xl p-4 space-y-3">
              <div class="text-white text-xs font-mono font-bold">CORE CAPABILITIES & STACK:</div>
              <div class="grid grid-cols-2 gap-3 text-center text-xs">
                <div class="p-3.5 bg-[#1c1c1c] rounded-xl border border-[#333333]">
                  <span class="text-[#A3A3A3] block mb-1 text-[11px]">Frontend Stack:</span> <strong class="text-white text-sm">React, Next.js, Vue, React Native</strong>
                </div>
                <div class="p-3.5 bg-[#1c1c1c] rounded-xl border border-[#333333]">
                  <span class="text-[#A3A3A3] block mb-1 text-[11px]">Backend Architecture:</span> <strong class="text-white text-sm">Node.js, Python, Go, PostgreSQL</strong>
                </div>
              </div>
              <div class="text-xs text-[#CBD5E1] text-center pt-1 font-mono">
                Clean code standards • Comprehensive test suites • Ready for high enterprise load.
              </div>
            </div>
          </div>

          <!-- Service 3: Cloud & DevOps -->
          <div id="tab-cloud" class="lab-tab-pane hidden space-y-4">
            <h3 class="text-xl font-bold text-white">Cloud Infrastructure & AWS Optimization</h3>
            <p class="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal">
              Automated Terraform infrastructure, Kubernetes cluster resilience, and rigorous architectural cost auditing to slash unoptimized cloud bills.
            </p>
            <div class="bg-[#161616] border border-[#333333] rounded-2xl p-4 font-mono text-xs">
              <div class="flex justify-between mb-2">
                <span class="text-[#CBD5E1]">Scale Node Clusters:</span>
                <span id="st-token-display" class="text-amber-400 font-bold text-sm">60 Node Clusters</span>
              </div>
              <input id="station-token-slider" type="range" min="10" max="250" value="60" step="5" class="w-full accent-[#f26e65] mb-3.5 cursor-pointer">
              <div class="grid grid-cols-2 gap-2.5 text-center">
                <div class="p-3 bg-[#1c1c1c] rounded-xl border border-[#333333]"><span class="text-[#A3A3A3] text-xs block">Unoptimized Cloud:</span> <strong id="st-cloud-cost" class="text-rose-400 font-bold text-sm">$1,500/mo</strong></div>
                <div class="p-3 bg-[#1c1c1c] rounded-xl border border-[#333333]"><span class="text-[#A3A3A3] text-xs block">Cypherox DevOps IaC:</span> <strong id="st-agency-cost" class="text-emerald-400 font-bold text-sm">$252/mo</strong></div>
              </div>
              <div id="st-llm-saved" class="mt-3 text-center text-[#f5918a] font-bold bg-[#f26e65]/15 p-2.5 rounded-xl border border-[#f26e65]/30">
                Save $1,248 / mo via Terraform & Kubernetes Optimization
              </div>
            </div>
          </div>

          <!-- Service 4: Data Analytics -->
          <div id="tab-data" class="lab-tab-pane hidden space-y-4">
            <h3 class="text-xl font-bold text-white">Consolidated Data Intelligence</h3>
            <p class="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal">
              Consolidate data from disconnected databases, ERPs, and CRMs into unified analytical pipelines with real-time reporting dashboards.
            </p>
            <div class="bg-[#161616] border border-[#333333] rounded-2xl p-4 font-mono text-xs">
              <div id="st-vision-output" class="p-4 bg-[#1c1c1c] rounded-xl border border-[#333333] text-[#CBD5E1] text-center mb-3">
                Click below to run real-time data pipeline benchmark...
              </div>
              <button id="btn-station-vision" class="btn--pill-primary w-full py-2.5 text-xs font-bold cursor-pointer">
                🔍 Run Live Data Intelligence Pipeline
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between pt-3 border-t border-[#2e2e2e]">
            <button data-open-booking class="btn btn--primary font-bold">
              Discuss Your Project With Cypherox →
            </button>
            <button class="nav-jump text-xs font-mono text-[#CBD5E1] hover:text-[#f26e65] transition cursor-pointer" data-target="4">
              See Projects & ROI [4] →
            </button>
          </div>
        </div>
      `,this.bindLabTabs()):e==="S4"?(this.contentEl.innerHTML=`
        <div class="space-y-6 font-sans">
          <div class="flex items-center justify-between">
            <span class="eyebrow text-[#f5918a]">Client Outcomes & Case Studies</span>
            <span class="text-[#CBD5E1] font-mono text-xs font-bold">1,500+ Delivered Projects</span>
          </div>

          <!-- Live Case Studies from 1,500+ Delivered Projects -->
          <div class="grid grid-cols-1 gap-3.5">
            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs text-[#f5918a] font-bold font-mono">FINTECH ENTERPRISE UK</span>
                <span class="font-mono text-xs text-emerald-400 font-bold">+$3.42M Saved / Yr</span>
              </div>
              <div class="text-sm font-bold text-white mb-1">Automated AI Compliance & Transaction Flagging</div>
              <p class="text-xs text-[#CBD5E1] leading-relaxed">Replaced 42 manual reviewers with a verified multi-agent audit pipeline. Transaction review latency cut from 4 hours to 1.8 seconds.</p>
            </div>

            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs text-[#f5918a] font-bold font-mono">HEALTHCARE NETWORK</span>
                <span class="font-mono text-xs text-emerald-400 font-bold">4.2x Faster Response</span>
              </div>
              <div class="text-sm font-bold text-white mb-1">Clinical Triage & Patient Routing Engine</div>
              <p class="text-xs text-[#CBD5E1] leading-relaxed">99.4% physician-validated accuracy deployed across 120 clinic sites with HIPAA-grade zero retention protocols.</p>
            </div>

            <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e]">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs text-amber-400 font-bold font-mono">GLOBAL E-COMMERCE & RETAIL</span>
                <span class="font-mono text-xs text-emerald-400 font-bold">+38.6% Conversion Lift</span>
              </div>
              <div class="text-sm font-bold text-white mb-1">Real-Time Dynamic Recommendation Pipeline</div>
              <p class="text-xs text-[#CBD5E1] leading-relaxed">Generated +$12.4M incremental revenue with 36ms peak query latency and unified PostgreSQL datastores.</p>
            </div>
          </div>

          <!-- Integrated Interactive ROI Calculator -->
          <div class="p-5 rounded-2xl bg-[#1a1a1a] border border-[#333333] space-y-4">
            <div class="flex justify-between items-center font-mono text-xs">
              <span class="text-white font-bold">ENTERPRISE EFFICIENCY CALCULATOR:</span>
              <span class="text-[#A3A3A3]">In-house vs Cypherox Dedicated Team</span>
            </div>

            <div class="space-y-4 font-mono text-xs">
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="text-[#CBD5E1]">Team Headcount:</span>
                  <strong id="st-roi-team" class="text-amber-400 font-bold">12 Specialists</strong>
                </div>
                <input id="in-roi-team" type="range" min="3" max="150" value="12" class="w-full accent-[#f26e65] cursor-pointer">
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="text-[#CBD5E1]">In-House Hourly Cost:</span>
                  <strong id="st-roi-rate" class="text-[#f5918a] font-bold">$85 / hr</strong>
                </div>
                <input id="in-roi-rate" type="range" min="30" max="250" value="85" step="5" class="w-full accent-[#f26e65] cursor-pointer">
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="text-[#CBD5E1]">Repetitive Overhead Hours / Wk:</span>
                  <strong id="st-roi-hrs" class="text-white font-bold">16 hrs / wk</strong>
                </div>
                <input id="in-roi-hrs" type="range" min="4" max="35" value="16" class="w-full accent-[#f26e65] cursor-pointer">
              </div>

              <div class="p-4 rounded-xl bg-[#141414] border border-[#2e2e2e] grid grid-cols-2 gap-3 text-xs">
                <div><span class="text-[#A3A3A3] block text-[11px]">Monthly Waste:</span> <strong id="st-res-waste" class="text-rose-400 font-bold text-sm">$70,682</strong></div>
                <div><span class="text-[#A3A3A3] block text-[11px]">Annual Savings:</span> <strong id="st-res-savings" class="text-emerald-400 font-bold text-sm">$636,140</strong></div>
                <div><span class="text-[#A3A3A3] block text-[11px]">Speed Multiplier:</span> <strong id="st-res-multi" class="text-white font-bold text-sm">5.1x</strong></div>
                <div><span class="text-[#A3A3A3] block text-[11px]">Payback Period:</span> <strong id="st-res-payback" class="text-amber-400 font-bold text-sm">16 Days</strong></div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between pt-2 border-t border-[#2e2e2e]">
            <button data-open-booking class="btn btn--primary font-bold">
              Lock In Custom ROI Blueprint →
            </button>
            <button class="nav-jump text-xs font-mono text-[#CBD5E1] hover:text-white cursor-pointer" data-target="5">
              Proceed to Contact [5] →
            </button>
          </div>
        </div>
      `,this.bindROICalculator()):e==="S5"&&(this.contentEl.innerHTML=`
        <div class="space-y-6 font-sans">
          <div class="p-6 rounded-2xl bg-[#1a1a1a] border border-[#333333]">
            <div class="flex items-center justify-between mb-3">
              <span class="eyebrow text-[#f5918a]">Direct Intake // London UK</span>
              <span class="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">⚡ Active Consultation Slots Open</span>
            </div>
            <h2 class="text-2xl font-bold text-white mb-2.5">Let's Build <span class="text-gradient">Something That Matters</span></h2>
            <p class="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal mb-5">
              No sales pitch. We discuss what you are building, what constraints apply and the most practical path forward: a direct conversation with an engineer who understands the work.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div class="p-3.5 rounded-xl bg-[#141414] border border-[#2e2e2e]">
                <span class="text-[#A3A3A3] block text-[11px] mb-1">DIRECT EMAIL</span>
                <a href="mailto:info@cypherox.uk" class="text-[#f5918a] font-bold hover:underline text-xs">info@cypherox.uk</a>
              </div>
              <div class="p-3.5 rounded-xl bg-[#141414] border border-[#2e2e2e]">
                <span class="text-[#A3A3A3] block text-[11px] mb-1">DIRECT PHONE</span>
                <a href="tel:+447453420874" class="text-emerald-400 font-bold hover:underline text-xs">+44 7453 420874</a>
              </div>
              <div class="p-3.5 rounded-xl bg-[#141414] border border-[#2e2e2e]">
                <span class="text-[#A3A3A3] block text-[11px] mb-1">OFFICE LOCATION</span>
                <span class="text-white font-bold text-xs">London, United Kingdom</span>
              </div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-[#161616] border border-[#2e2e2e] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#CBD5E1] gap-2">
            <span>📍 Office 18010, 182-184 High Street North, London E6 2JA</span>
            <span class="text-emerald-400 font-bold">🔒 100% NDA Protected</span>
          </div>

          <button data-open-booking class="btn--pill-primary w-full py-4 text-sm font-bold tracking-wide uppercase cursor-pointer shadow-xl">
            Schedule Call With a Senior Cypherox Engineer →
          </button>
        </div>
      `),this.contentEl.querySelectorAll("[data-open-booking]").forEach(t=>{t.addEventListener("click",()=>{var i;Qe.playWarp(),(i=document.getElementById("booking-modal"))==null||i.classList.remove("hidden")})}),this.contentEl.querySelectorAll(".nav-jump").forEach(t=>{t.addEventListener("click",()=>{const i=t.dataset.target,s=Xt.find(r=>r.number===i);s&&(Qe.playWarp(),window.dispatchEvent(new CustomEvent("warpToStation",{detail:{station:s}})),this.dock(s))})}))}bindLabTabs(){const e=this.contentEl.querySelectorAll(".lab-tab-btn"),t=this.contentEl.querySelectorAll(".lab-tab-pane");e.forEach(a=>{a.addEventListener("click",()=>{Qe.playKeyStep(),e.forEach(c=>{c.classList.remove("tab-active","bg-[#f26e65]","text-white","shadow"),c.classList.add("bg-[#1e1e1e]","text-[#CBD5E1]")}),a.classList.add("tab-active","bg-[#f26e65]","text-white","shadow"),a.classList.remove("bg-[#1e1e1e]","text-[#CBD5E1]"),t.forEach(c=>c.classList.add("hidden"));const l=this.contentEl.querySelector(`#tab-${a.dataset.tab}`);l&&l.classList.remove("hidden")})});const i=this.contentEl.querySelector("#btn-station-swarm"),s=this.contentEl.querySelector("#station-swarm-logs");i&&s&&i.addEventListener("click",()=>{Qe.playPulse(),i.disabled=!0,i.textContent="AGENT RUNNING (LLM ORCHESTRATION)...",s.innerHTML="";const a=["[Cypherox AI Agent] Deconstructing enterprise process requirements...","[RAG Pipeline] Querying internal corporate documentation & knowledge graph...","[Execution Engine] Synthesizing production code and test suites...","✅ Complete: Production system deployed with zero human bottleneck."];a.forEach((l,c)=>{setTimeout(()=>{Qe.playKeyStep();const h=document.createElement("div");h.textContent=l,h.className=c===a.length-1?"text-[#f5918a] font-bold":"text-[#CBD5E1]",s.appendChild(h),s.scrollTop=s.scrollHeight,c===a.length-1&&(i.disabled=!1,i.textContent="⚡ Re-run AI Agent",Qe.playSuccess())},(c+1)*350)})});const r=this.contentEl.querySelector("#station-token-slider");r&&r.addEventListener("input",a=>{const l=parseInt(a.target.value);Qe.playKeyStep(),this.contentEl.querySelector("#st-token-display").textContent=`${l} Node Clusters`;const c=Math.round(l*25),h=Math.round(l*4.2);this.contentEl.querySelector("#st-cloud-cost").textContent=`$${c.toLocaleString()}/mo`,this.contentEl.querySelector("#st-agency-cost").textContent=`$${h.toLocaleString()}/mo`,this.contentEl.querySelector("#st-llm-saved").textContent=`Save $${(c-h).toLocaleString()} / mo via Cypherox DevOps IaC`});const o=this.contentEl.querySelector("#btn-station-vision");o&&o.addEventListener("click",()=>{Qe.playWarp();const a=this.contentEl.querySelector("#st-vision-output");a.textContent="RUNNING DATA PIPELINE INTEGRATION BENCHMARK...",setTimeout(()=>{Qe.playSuccess(),a.innerHTML='<span class="text-[#f5918a] font-bold">140,000 RECORDS CONSOLIDATED</span> | Latency: 24ms | Real-Time Sync: Active'},900)})}bindROICalculator(){const e=this.contentEl.querySelector("#in-roi-team"),t=this.contentEl.querySelector("#in-roi-rate"),i=this.contentEl.querySelector("#in-roi-hrs"),s=()=>{const r=parseInt(e.value),o=parseInt(t.value),a=parseInt(i.value);this.contentEl.querySelector("#st-roi-team").textContent=`${r} Specialists`,this.contentEl.querySelector("#st-roi-rate").textContent=`$${o} / hr`,this.contentEl.querySelector("#st-roi-hrs").textContent=`${a} hrs / wk`;const l=Math.round(r*a*4.33*o),c=Math.round(l*12*.75),h=(3.2+a/10*1.2).toFixed(1),f=Math.max(14,Math.round(28e3/(l*.75)*30));this.contentEl.querySelector("#st-res-waste").textContent=`$${l.toLocaleString()}`,this.contentEl.querySelector("#st-res-savings").textContent=`$${c.toLocaleString()}`,this.contentEl.querySelector("#st-res-multi").textContent=`${h}x`,this.contentEl.querySelector("#st-res-payback").textContent=`${f} Days`};[e,t,i].forEach(r=>{r&&r.addEventListener("input",()=>{Qe.playKeyStep(),s()})})}}class sm{constructor(e){this.player=e,this.activeVisitors=15,this.initTimer(),this.initSocialProofToasts(),this.initAudioToggle(),this.initFastTravelButtons(),this.initMobileJoystick()}initTimer(){const e=document.getElementById("urgency-timer");if(!e)return;let t=4*86400+18*3600+32*60+10;setInterval(()=>{t--,t<=0&&(t=5*86400);const s=Math.floor(t/86400),r=Math.floor(t%86400/3600),o=Math.floor(t%3600/60),a=t%60;e.textContent=`${s}d ${String(r).padStart(2,"0")}h ${String(o).padStart(2,"0")}m ${String(a).padStart(2,"0")}s`},1e3);const i=document.getElementById("visitor-count");setInterval(()=>{this.activeVisitors=Math.max(12,Math.min(28,this.activeVisitors+(Math.floor(Math.random()*3)-1))),i&&(i.textContent=`${this.activeVisitors}`)},4e3)}initFastTravelButtons(){document.querySelectorAll(".fast-travel-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.station,i=Xt.find(s=>s.number===t);i&&(Qe.playWarp(),this.player.warpTo(i.x,i.z))})}),window.addEventListener("keydown",e=>{var t;if(!["INPUT","TEXTAREA"].includes((t=document.activeElement)==null?void 0:t.tagName)&&["1","2","3","4","5"].includes(e.key)){const i=Xt.find(s=>s.number===e.key);i&&(Qe.playWarp(),this.player.warpTo(i.x,i.z))}})}initAudioToggle(){const e=document.getElementById("audio-toggle-btn");e&&(e.addEventListener("click",()=>{const t=Qe.toggleMute();e.innerHTML=t?'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="1" y1="1" x2="23" y2="23"></line><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg><span class="tracking-wide">SOUND: OFF [M]</span>':'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg><span class="tracking-wide text-[#f26e65] font-semibold">SOUND: ON [M]</span>',e.classList.toggle("audio-active",!t)}),window.addEventListener("keydown",t=>{var i;["INPUT","TEXTAREA"].includes((i=document.activeElement)==null?void 0:i.tagName)||(t.key==="m"||t.key==="M")&&e.click()}))}initSocialProofToasts(){const e=document.getElementById("cro-toast-container");if(!e)return;const t=[{text:"UK FinTech enterprise hired senior AI engineer Hardik via Cypherox",badge:"CYPHEROX",time:"Just now"},{text:"150+ Enterprise Clients rated Cypherox 4.9/5 on Clutch & Google",badge:"CLUTCH",time:"2m ago"},{text:"London SaaS scaled production AI agent cluster with Cypherox team",badge:"DELIVERY",time:"5m ago"},{text:"Client saved £34,000/yr via Cypherox AWS & DevOps optimization",badge:"ROI",time:"9m ago"}];let i=0;const s=()=>{const r=t[i%t.length];i++;const o=document.createElement("div");o.className="cro-toast animate-slide-in",o.innerHTML=`
        <div class="toast-indicator"></div>
        <div class="toast-content">
          <div class="toast-header">
            <span class="toast-badge">${r.badge}</span>
            <span class="toast-time">${r.time}</span>
          </div>
          <p class="toast-text">${r.text}</p>
        </div>
      `,e.appendChild(o),Qe.playHover(),setTimeout(()=>{o.classList.add("fade-out"),setTimeout(()=>o.remove(),400)},5e3)};setTimeout(s,2500),setInterval(s,14e3)}initMobileJoystick(){const e=document.getElementById("mobile-joystick"),t=document.getElementById("joystick-stick");if(!e||!t)return;let i=null,s=0,r=0;e.addEventListener("touchstart",a=>{i=a.changedTouches[0].identifier;const c=e.getBoundingClientRect();s=c.left+c.width/2,r=c.top+c.height/2}),window.addEventListener("touchmove",a=>{for(let l=0;l<a.changedTouches.length;l++){const c=a.changedTouches[l];if(c.identifier===i){const h=c.clientX-s,f=c.clientY-r,p=Math.sqrt(h*h+f*f),g=Math.min(p,32),_=Math.atan2(f,h);t.style.transform=`translate(${Math.cos(_)*g}px, ${Math.sin(_)*g}px)`,this.player.keys.forward=f<-8,this.player.keys.backward=f>8,this.player.keys.left=h<-8,this.player.keys.right=h>8}}},{passive:!0});const o=a=>{for(let l=0;l<a.changedTouches.length;l++)a.changedTouches[l].identifier===i&&(i=null,t.style.transform="translate(0px, 0px)",this.player.keys.forward=!1,this.player.keys.backward=!1,this.player.keys.left=!1,this.player.keys.right=!1)};window.addEventListener("touchend",o),window.addEventListener("touchcancel",o)}}var Ur={};(function n(e,t,i,s){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var R=new OffscreenCanvas(1,1),T=R.getContext("2d");T.fillRect(0,0,1,1);var j=R.transferToImageBitmap();T.createPattern(j,"no-repeat")}catch{return!1}return!0}();function l(){}function c(R){var T=t.exports.Promise,j=T!==void 0?T:e.Promise;return typeof j=="function"?new j(R):(R(l,l),null)}var h=function(R,T){return{transform:function(j){if(R)return j;if(T.has(j))return T.get(j);var se=new OffscreenCanvas(j.width,j.height),N=se.getContext("2d");return N.drawImage(j,0,0),T.set(j,se),se},clear:function(){T.clear()}}}(a,new Map),f=function(){var R=Math.floor(16.666666666666668),T,j,se={},N=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(T=function(V){var Q=Math.random();return se[Q]=requestAnimationFrame(function re(ae){N===ae||N+R-1<ae?(N=ae,delete se[Q],V()):se[Q]=requestAnimationFrame(re)}),Q},j=function(V){se[V]&&cancelAnimationFrame(se[V])}):(T=function(V){return setTimeout(V,R)},j=function(V){return clearTimeout(V)}),{frame:T,cancel:j}}(),p=function(){var R,T,j={};function se(N){function V(Q,re){N.postMessage({options:Q||{},callback:re})}N.init=function(re){var ae=re.transferControlToOffscreen();N.postMessage({canvas:ae},[ae])},N.fire=function(re,ae,ne){if(T)return V(re,null),T;var _e=Math.random().toString(36).slice(2);return T=c(function(ue){function I(We){We.data.callback===_e&&(delete j[_e],N.removeEventListener("message",I),T=null,h.clear(),ne(),ue())}N.addEventListener("message",I),V(re,_e),j[_e]=I.bind(null,{data:{callback:_e}})}),T},N.reset=function(){N.postMessage({reset:!0});for(var re in j)j[re](),delete j[re]}}return function(){if(R)return R;if(!i&&r){var N=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{R=new Worker(URL.createObjectURL(new Blob([N])))}catch(V){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",V),null}se(R)}return R}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(R,T){return T?T(R):R}function _(R){return R!=null}function u(R,T,j){return g(R&&_(R[T])?R[T]:m[T],j)}function d(R){return R<0?0:Math.floor(R)}function y(R,T){return Math.floor(Math.random()*(T-R))+R}function v(R){return parseInt(R,16)}function S(R){return R.map(P)}function P(R){var T=String(R).replace(/[^0-9a-f]/gi,"");return T.length<6&&(T=T[0]+T[0]+T[1]+T[1]+T[2]+T[2]),{r:v(T.substring(0,2)),g:v(T.substring(2,4)),b:v(T.substring(4,6))}}function C(R){var T=u(R,"origin",Object);return T.x=u(T,"x",Number),T.y=u(T,"y",Number),T}function A(R){R.width=document.documentElement.clientWidth,R.height=document.documentElement.clientHeight}function F(R){var T=R.getBoundingClientRect();R.width=T.width,R.height=T.height}function Z(R){var T=document.createElement("canvas");return T.style.position="fixed",T.style.top="0px",T.style.left="0px",T.style.pointerEvents="none",T.style.zIndex=R,T}function x(R,T,j,se,N,V,Q,re,ae){R.save(),R.translate(T,j),R.rotate(V),R.scale(se,N),R.arc(0,0,1,Q,re,ae),R.restore()}function b(R){var T=R.angle*(Math.PI/180),j=R.spread*(Math.PI/180);return{x:R.x,y:R.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:R.startVelocity*.5+Math.random()*R.startVelocity,angle2D:-T+(.5*j-Math.random()*j),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:R.color,shape:R.shape,tick:0,totalTicks:R.ticks,decay:R.decay,drift:R.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:R.gravity*3,ovalScalar:.6,scalar:R.scalar,flat:R.flat}}function Y(R,T){T.x+=Math.cos(T.angle2D)*T.velocity+T.drift,T.y+=Math.sin(T.angle2D)*T.velocity+T.gravity,T.velocity*=T.decay,T.flat?(T.wobble=0,T.wobbleX=T.x+10*T.scalar,T.wobbleY=T.y+10*T.scalar,T.tiltSin=0,T.tiltCos=0,T.random=1):(T.wobble+=T.wobbleSpeed,T.wobbleX=T.x+10*T.scalar*Math.cos(T.wobble),T.wobbleY=T.y+10*T.scalar*Math.sin(T.wobble),T.tiltAngle+=.1,T.tiltSin=Math.sin(T.tiltAngle),T.tiltCos=Math.cos(T.tiltAngle),T.random=Math.random()+2);var j=T.tick++/T.totalTicks,se=T.x+T.random*T.tiltCos,N=T.y+T.random*T.tiltSin,V=T.wobbleX+T.random*T.tiltCos,Q=T.wobbleY+T.random*T.tiltSin;if(R.fillStyle="rgba("+T.color.r+", "+T.color.g+", "+T.color.b+", "+(1-j)+")",R.beginPath(),o&&T.shape.type==="path"&&typeof T.shape.path=="string"&&Array.isArray(T.shape.matrix))R.fill(J(T.shape.path,T.shape.matrix,T.x,T.y,Math.abs(V-se)*.1,Math.abs(Q-N)*.1,Math.PI/10*T.wobble));else if(T.shape.type==="bitmap"){var re=Math.PI/10*T.wobble,ae=Math.abs(V-se)*.1,ne=Math.abs(Q-N)*.1,_e=T.shape.bitmap.width*T.scalar,ue=T.shape.bitmap.height*T.scalar,I=new DOMMatrix([Math.cos(re)*ae,Math.sin(re)*ae,-Math.sin(re)*ne,Math.cos(re)*ne,T.x,T.y]);I.multiplySelf(new DOMMatrix(T.shape.matrix));var We=R.createPattern(h.transform(T.shape.bitmap),"no-repeat");We.setTransform(I),R.globalAlpha=1-j,R.fillStyle=We,R.fillRect(T.x-_e/2,T.y-ue/2,_e,ue),R.globalAlpha=1}else if(T.shape==="circle")R.ellipse?R.ellipse(T.x,T.y,Math.abs(V-se)*T.ovalScalar,Math.abs(Q-N)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI):x(R,T.x,T.y,Math.abs(V-se)*T.ovalScalar,Math.abs(Q-N)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI);else if(T.shape==="star")for(var le=Math.PI/2*3,Se=4*T.scalar,Me=8*T.scalar,Ae=T.x,Te=T.y,Le=5,je=Math.PI/Le;Le--;)Ae=T.x+Math.cos(le)*Me,Te=T.y+Math.sin(le)*Me,R.lineTo(Ae,Te),le+=je,Ae=T.x+Math.cos(le)*Se,Te=T.y+Math.sin(le)*Se,R.lineTo(Ae,Te),le+=je;else R.moveTo(Math.floor(T.x),Math.floor(T.y)),R.lineTo(Math.floor(T.wobbleX),Math.floor(N)),R.lineTo(Math.floor(V),Math.floor(Q)),R.lineTo(Math.floor(se),Math.floor(T.wobbleY));return R.closePath(),R.fill(),T.tick<T.totalTicks}function K(R,T,j,se,N){var V=T.slice(),Q=R.getContext("2d"),re,ae,ne=c(function(_e){function ue(){re=ae=null,Q.clearRect(0,0,se.width,se.height),h.clear(),N(),_e()}function I(){i&&!(se.width===s.width&&se.height===s.height)&&(se.width=R.width=s.width,se.height=R.height=s.height),!se.width&&!se.height&&(j(R),se.width=R.width,se.height=R.height),Q.clearRect(0,0,se.width,se.height),V=V.filter(function(We){return Y(Q,We)}),V.length?re=f.frame(I):ue()}re=f.frame(I),ae=ue});return{addFettis:function(_e){return V=V.concat(_e),ne},canvas:R,promise:ne,reset:function(){re&&f.cancel(re),ae&&ae()}}}function L(R,T){var j=!R,se=!!u(T||{},"resize"),N=!1,V=u(T,"disableForReducedMotion",Boolean),Q=r&&!!u(T||{},"useWorker"),re=Q?p():null,ae=j?A:F,ne=R&&re?!!R.__confetti_initialized:!1,_e=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ue;function I(le,Se,Me){for(var Ae=u(le,"particleCount",d),Te=u(le,"angle",Number),Le=u(le,"spread",Number),je=u(le,"startVelocity",Number),w=u(le,"decay",Number),M=u(le,"gravity",Number),q=u(le,"drift",Number),ee=u(le,"colors",S),oe=u(le,"ticks",Number),ie=u(le,"shapes"),Ne=u(le,"scalar"),Re=!!u(le,"flat"),he=C(le),pe=Ae,De=[],ce=R.width*he.x,ot=R.height*he.y;pe--;)De.push(b({x:ce,y:ot,angle:Te,spread:Le,startVelocity:je,color:ee[pe%ee.length],shape:ie[y(0,ie.length)],ticks:oe,decay:w,gravity:M,drift:q,scalar:Ne,flat:Re}));return ue?ue.addFettis(De):(ue=K(R,De,ae,Se,Me),ue.promise)}function We(le){var Se=V||u(le,"disableForReducedMotion",Boolean),Me=u(le,"zIndex",Number);if(Se&&_e)return c(function(je){je()});j&&ue?R=ue.canvas:j&&!R&&(R=Z(Me),document.body.appendChild(R)),se&&!ne&&ae(R);var Ae={width:R.width,height:R.height};re&&!ne&&re.init(R),ne=!0,re&&(R.__confetti_initialized=!0);function Te(){if(re){var je={getBoundingClientRect:function(){if(!j)return R.getBoundingClientRect()}};ae(je),re.postMessage({resize:{width:je.width,height:je.height}});return}Ae.width=Ae.height=null}function Le(){ue=null,se&&(N=!1,e.removeEventListener("resize",Te)),j&&R&&(document.body.contains(R)&&document.body.removeChild(R),R=null,ne=!1)}return se&&!N&&(N=!0,e.addEventListener("resize",Te,!1)),re?re.fire(le,Ae,Le):I(le,Ae,Le)}return We.reset=function(){re&&re.reset(),ue&&ue.reset()},We}var B;function k(){return B||(B=L(null,{useWorker:!0,resize:!0})),B}function J(R,T,j,se,N,V,Q){var re=new Path2D(R),ae=new Path2D;ae.addPath(re,new DOMMatrix(T));var ne=new Path2D;return ne.addPath(ae,new DOMMatrix([Math.cos(Q)*N,Math.sin(Q)*N,-Math.sin(Q)*V,Math.cos(Q)*V,j,se])),ne}function X(R){if(!o)throw new Error("path confetti are not supported in this browser");var T,j;typeof R=="string"?T=R:(T=R.path,j=R.matrix);var se=new Path2D(T),N=document.createElement("canvas"),V=N.getContext("2d");if(!j){for(var Q=1e3,re=Q,ae=Q,ne=0,_e=0,ue,I,We=0;We<Q;We+=2)for(var le=0;le<Q;le+=2)V.isPointInPath(se,We,le,"nonzero")&&(re=Math.min(re,We),ae=Math.min(ae,le),ne=Math.max(ne,We),_e=Math.max(_e,le));ue=ne-re,I=_e-ae;var Se=10,Me=Math.min(Se/ue,Se/I);j=[Me,0,0,Me,-Math.round(ue/2+re)*Me,-Math.round(I/2+ae)*Me]}return{type:"path",path:T,matrix:j}}function $(R){var T,j=1,se="#000000",N='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof R=="string"?T=R:(T=R.text,j="scalar"in R?R.scalar:j,N="fontFamily"in R?R.fontFamily:N,se="color"in R?R.color:se);var V=10*j,Q=""+V+"px "+N,re=new OffscreenCanvas(V,V),ae=re.getContext("2d");ae.font=Q;var ne=ae.measureText(T),_e=Math.ceil(ne.actualBoundingBoxRight+ne.actualBoundingBoxLeft),ue=Math.ceil(ne.actualBoundingBoxAscent+ne.actualBoundingBoxDescent),I=2,We=ne.actualBoundingBoxLeft+I,le=ne.actualBoundingBoxAscent+I;_e+=I+I,ue+=I+I,re=new OffscreenCanvas(_e,ue),ae=re.getContext("2d"),ae.font=Q,ae.fillStyle=se,ae.fillText(T,We,le);var Se=1/j;return{type:"bitmap",bitmap:re.transferToImageBitmap(),matrix:[Se,0,0,Se,-_e*Se/2,-ue*Se/2]}}t.exports=function(){return k().apply(this,arguments)},t.exports.reset=function(){k().reset()},t.exports.create=L,t.exports.shapeFromPath=X,t.exports.shapeFromText=$})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Ur,!1);const rm=Ur.exports;Ur.exports.create;class am{constructor(){this.modal=document.getElementById("booking-modal"),this.closeBtn=document.getElementById("booking-close-btn"),this.form=document.getElementById("audit-booking-form"),this.step1=document.getElementById("booking-step-1"),this.step2=document.getElementById("booking-step-2"),this.successState=document.getElementById("booking-success-state"),this.selectedPill="agents",this.selectedSlot="Tomorrow, 10:00 AM EST",this.init()}init(){var e,t,i;this.modal&&(document.querySelectorAll("[data-open-booking]").forEach(s=>{s.addEventListener("click",r=>{r.preventDefault(),Qe.playWarp(),this.open()})}),(e=this.closeBtn)==null||e.addEventListener("click",()=>this.close()),this.modal.addEventListener("click",s=>{s.target===this.modal&&this.close()}),document.querySelectorAll(".audit-pill").forEach(s=>{s.addEventListener("click",()=>{Qe.playKeyStep(),document.querySelectorAll(".audit-pill").forEach(r=>r.classList.remove("pill-active")),s.classList.add("pill-active"),this.selectedPill=s.dataset.pill})}),document.querySelectorAll(".slot-btn").forEach(s=>{s.addEventListener("click",()=>{Qe.playKeyStep(),document.querySelectorAll(".slot-btn").forEach(r=>r.classList.remove("slot-active")),s.classList.add("slot-active"),this.selectedSlot=s.dataset.slot})}),(t=this.form)==null||t.addEventListener("submit",s=>{s.preventDefault(),this.submit()}),(i=document.getElementById("btn-reset-booking"))==null||i.addEventListener("click",()=>{this.reset(),this.close()}))}open(){this.modal.classList.remove("hidden"),document.body.style.overflow="hidden"}close(){this.modal.classList.add("hidden"),document.body.style.overflow=""}submit(){if(Qe.playSuccess(),rm({particleCount:120,spread:70,origin:{y:.6},colors:["#f26e65","#d94f47","#f5918a","#1a1a1a","#ffffff"]}),this.step1&&this.step1.classList.add("hidden"),this.successState){this.successState.classList.remove("hidden");const t=document.getElementById("confirmed-slot-display");t&&(t.textContent=this.selectedSlot)}const e=document.getElementById("cohort-slots-badge");e&&(e.innerHTML='<span class="slot-warning">ONLY 1 OF 5 SLOTS LEFT</span>')}reset(){var e;this.step1&&this.step1.classList.remove("hidden"),this.successState&&this.successState.classList.add("hidden"),(e=this.form)==null||e.reset()}}class om{constructor(e){this.scene=e,this.arrowChevrons=[],this.createFloorSignage()}createFloorSignage(){[{name:"ABOUT",angle:-Math.PI*.75,color:16093578,x:-6,z:-6},{name:"SERVICES",angle:-Math.PI*.25,color:14241607,x:6,z:-6},{name:"PROJECTS",angle:Math.PI*.75,color:16096779,x:-6,z:6},{name:"CONTACT",angle:Math.PI*.25,color:15887973,x:6,z:6}].forEach(t=>{const i=new ft;i.position.set(t.x,.04,t.z),i.rotation.y=t.angle;const s=new Ir(.7,1.4,3),r=new ve({color:t.color,roughness:.3,metalness:.7,emissive:t.color,emissiveIntensity:.4}),o=new te(s,r);o.rotation.x=-Math.PI/2,o.rotation.z=Math.PI,i.add(o);const a=new dt(2.4,.7),l=new ve({color:1710618,roughness:.4,metalness:.8}),c=new te(a,l);c.rotation.x=-Math.PI/2,c.position.z=-1.2,i.add(c),this.scene.add(i),this.arrowChevrons.push({group:i,baseY:.04,speed:2})})}update(e){const t=performance.now()*.001;this.arrowChevrons.forEach((i,s)=>{i.group.position.y=i.baseY+Math.sin(t*3+s)*.03}),this.updateHUDCompass(e)}updateHUDCompass(e){Xt.forEach(t=>{const i=t.x-e.x,s=t.z-e.z,r=Math.round(Math.sqrt(i*i+s*s)),o=Math.atan2(i,-s),a=Math.round(o*(180/Math.PI)),l=document.getElementById(`dist-${t.number}`),c=document.getElementById(`arrow-${t.number}`);l&&(l.textContent=r<4?"ARRIVED":`${r}m`),c&&(c.style.transform=`rotate(${a}deg)`)})}}function lm(n){const e=document.createElement("canvas");e.width=1024,e.height=640;const t=e.getContext("2d");t.fillStyle="#0c0e14",t.fillRect(0,0,e.width,e.height),t.strokeStyle="rgba(255, 255, 255, 0.05)",t.lineWidth=1;const i=32;for(let o=0;o<e.width;o+=i)t.beginPath(),t.moveTo(o,0),t.lineTo(o,e.height),t.stroke();for(let o=0;o<e.height;o+=i)t.beginPath(),t.moveTo(0,o),t.lineTo(e.width,o),t.stroke();const s=t.createRadialGradient(e.width/2,e.height/2,80,e.width/2,e.height/2,500);s.addColorStop(0,n.glowColor||"rgba(242, 110, 101, 0.12)"),s.addColorStop(1,"rgba(0, 0, 0, 0.6)"),t.fillStyle=s,t.fillRect(0,0,e.width,e.height),t.fillStyle="#f26e65",t.fillRect(48,44,6,26),t.font='bold 13px "JetBrains Mono", monospace',t.fillStyle="#f5918a",t.fillText(`CYPHEROX UK // ${n.category.toUpperCase()}`,64,56),t.font='600 11px "JetBrains Mono", monospace',t.fillStyle="#8b949e",t.fillText("ENTERPRISE SERVICE ARCHITECTURE",64,72),t.fillStyle="#181b24",t.strokeStyle="#f26e65",t.lineWidth=1.5,t.beginPath(),t.roundRect(e.width-240,42,192,36,8),t.fill(),t.stroke(),t.font='bold 12px "JetBrains Mono", monospace',t.fillStyle="#ffffff",t.textAlign="center",t.fillText(n.metricBadge,e.width-144,65),t.textAlign="left",t.font='700 32px "Poppins", sans-serif',t.fillStyle="#ffffff",t.fillText(n.title,48,128),t.font='400 14px "Poppins", sans-serif',t.fillStyle="#94a3b8",t.fillText(n.subtitle,48,156),t.save(),t.translate(48,180),n.drawGraphic(t,928,360),t.restore(),t.fillStyle="rgba(255, 255, 255, 0.08)",t.fillRect(48,568,e.width-96,1),t.font='500 11px "JetBrains Mono", monospace',t.fillStyle="#64748b",t.fillText("STATUS: PRODUCTION READY  |  TIER-1 UK INFRASTRUCTURE  |  ZERO PROTOTYPE FRAGILITY",48,595),t.font='bold 11px "JetBrains Mono", monospace',t.fillStyle="#10b981",t.textAlign="right",t.fillText("● ACTIVE ENTERPRISE SYSTEM",e.width-48,595),t.textAlign="left";const r=new Tn(e);return r.minFilter=lt,r.generateMipmaps=!0,r}const cm=[{id:"art-ai-swarms",category:"AI & Machine Learning",title:"Autonomous AI Agents & Multi-Model Swarms",subtitle:"Agent consensus orchestration, sub-second tool dispatch and production RAG pipelines.",metricBadge:"⚡ 99.8% ACCURACY",glowColor:"rgba(242, 110, 101, 0.16)",position:{x:0,y:2.15,z:-14.96},rotationY:0,drawGraphic:(n,e,t)=>{const i=[{x:120,y:170,label:"Orchestrator",r:24,c:"#f26e65"},{x:340,y:80,label:"LLM Agent α",r:20,c:"#58a6ff"},{x:340,y:260,label:"LLM Agent β",r:20,c:"#58a6ff"},{x:580,y:120,label:"Consensus Bus",r:22,c:"#f59e0b"},{x:580,y:240,label:"Tool Dispatch",r:20,c:"#38bdf8"},{x:800,y:170,label:"Verified Output",r:26,c:"#10b981"}];n.lineWidth=2,[[0,1],[0,2],[1,3],[2,3],[1,4],[2,4],[3,5],[4,5]].forEach(([r,o])=>{const a=i[r],l=i[o],c=n.createLinearGradient(a.x,a.y,l.x,l.y);c.addColorStop(0,a.c),c.addColorStop(1,l.c),n.strokeStyle=c,n.setLineDash([6,4]),n.beginPath(),n.moveTo(a.x,a.y),n.lineTo(l.x,l.y),n.stroke()}),n.setLineDash([]),i.forEach(r=>{n.fillStyle=r.c,n.globalAlpha=.2,n.beginPath(),n.arc(r.x,r.y,r.r+10,0,Math.PI*2),n.fill(),n.globalAlpha=1,n.fillStyle="#161922",n.strokeStyle=r.c,n.lineWidth=2.5,n.beginPath(),n.arc(r.x,r.y,r.r,0,Math.PI*2),n.fill(),n.stroke(),n.fillStyle="#ffffff",n.font='bold 11px "JetBrains Mono", monospace',n.textAlign="center",n.fillText(r.label,r.x,r.y+r.r+20)}),n.textAlign="left"}},{id:"art-cloud-devops",category:"Cloud Architecture & DevOps",title:"Enterprise Multi-Region AWS & Kubernetes",subtitle:"Automated Terraform infrastructure, zero-downtime canary rollouts and 99.99% SLA.",metricBadge:"☁ 99.99% UPTIME",glowColor:"rgba(16, 185, 129, 0.16)",position:{x:0,y:2.15,z:14.96},rotationY:Math.PI,drawGraphic:(n,e,t)=>{n.strokeStyle="#10b981",n.lineWidth=2,[{x:80,title:"eu-west-2 (London)",sub:"Primary Production Cluster",color:"#10b981"},{x:380,title:"eu-west-1 (Dublin)",sub:"Active Failover Replica",color:"#38bdf8"},{x:680,title:"Global CDN & WAF",sub:"Edge Shield & TLS 1.3",color:"#f59e0b"}].forEach((s,r)=>{n.fillStyle="#12151e",n.strokeStyle=s.color,n.lineWidth=2,n.beginPath(),n.roundRect(s.x,30,240,260,12),n.fill(),n.stroke(),n.fillStyle=s.color,n.font='bold 13px "JetBrains Mono", monospace',n.fillText(s.title,s.x+18,65),n.fillStyle="#94a3b8",n.font='11px "Poppins", sans-serif',n.fillText(s.sub,s.x+18,88);for(let o=0;o<4;o++)n.fillStyle="#1a1e2a",n.fillRect(s.x+18,110+o*36,204,26),n.fillStyle=o===0?"#10b981":o===1?"#38bdf8":"#f5918a",n.beginPath(),n.arc(s.x+32,123+o*36,4,0,Math.PI*2),n.fill(),n.fillStyle="#cbd5e1",n.font='10px "JetBrains Mono", monospace',n.fillText(`K8S-NODE-0${o+1}  •  HEALTH: OK`,s.x+46,127+o*36)})}},{id:"art-fullstack-software",category:"Custom Software Engineering",title:"High-Throughput Full-Stack Platforms",subtitle:"Bespoke web applications, reactive APIs and mission-critical databases engineered to scale.",metricBadge:"⚡ 14.2x SPEEDUP",glowColor:"rgba(56, 189, 248, 0.16)",position:{x:-26.96,y:2.15,z:0},rotationY:-Math.PI/2,drawGraphic:(n,e,t)=>{[{y:30,label:"FRONTEND INTERFACE",desc:"React 19 • Next.js • Tailwind CSS • WebGL",c:"#f26e65"},{y:120,label:"API GATEWAY & EDGE",desc:"GraphQL • Fastify • gRPC • Redis Mesh",c:"#38bdf8"},{y:210,label:"EVENT DRIVEN CORE",desc:"Kafka Pipelines • Worker Pools • Go Microservices",c:"#f59e0b"},{y:300,label:"DATABASE & STORAGE",desc:"PostgreSQL • DynamoDB • Sub-8ms Queries",c:"#10b981"}].forEach((s,r)=>{n.fillStyle="#131620",n.strokeStyle=s.c,n.lineWidth=1.5,n.beginPath(),n.roundRect(80,s.y,e-160,60,8),n.fill(),n.stroke(),n.fillStyle=s.c,n.font='bold 12px "JetBrains Mono", monospace',n.fillText(`LAYER 0${r+1} // ${s.label}`,105,s.y+26),n.fillStyle="#ffffff",n.font='500 13px "Poppins", sans-serif',n.fillText(s.desc,105,s.y+48),n.fillStyle=s.c,n.beginPath(),n.arc(e-120,s.y+30,6,0,Math.PI*2),n.fill()})}},{id:"art-vector-rag",category:"Enterprise Data Architecture",title:"Vector Embeddings & Real-Time RAG Systems",subtitle:"Sub-millisecond semantic search across millions of documents with hybrid BM25 + dense retrieval.",metricBadge:"🔍 <8ms RETRIEVAL",glowColor:"rgba(168, 85, 247, 0.16)",position:{x:26.96,y:2.15,z:0},rotationY:Math.PI/2,drawGraphic:(n,e,t)=>{n.fillStyle="#11131c",n.fillRect(80,20,e-160,310),n.strokeStyle="rgba(255, 255, 255, 0.15)",n.lineWidth=1,n.beginPath(),n.moveTo(120,290),n.lineTo(e-120,290),n.moveTo(120,290),n.lineTo(120,50),n.stroke(),[{cx:300,cy:120,color:"#f26e65",label:"Financial Docs Cluster"},{cx:550,cy:180,color:"#38bdf8",label:"Technical Manuals Cluster"},{cx:750,cy:90,color:"#10b981",label:"Compliance Reports Cluster"}].forEach(s=>{for(let r=0;r<24;r++){const o=Math.random()*Math.PI*2,a=Math.random()*55,l=s.cx+Math.cos(o)*a,c=s.cy+Math.sin(o)*a;n.fillStyle=s.color,n.beginPath(),n.arc(l,c,Math.random()*3+2,0,Math.PI*2),n.fill()}n.fillStyle="#ffffff",n.font='bold 11px "JetBrains Mono", monospace',n.fillText(s.label,s.cx-50,s.cy+75)}),n.strokeStyle="#f59e0b",n.lineWidth=2,n.setLineDash([4,4]),n.beginPath(),n.moveTo(120,290),n.lineTo(300,120),n.stroke(),n.setLineDash([]),n.fillStyle="#f59e0b",n.fillText("Query Vector (Cosine Similarity: 0.984)",140,230)}},{id:"art-dedicated-teams",category:"Dedicated Engineering",title:"Vetted Senior Engineers for UK Enterprises",subtitle:"Direct architect access, agile delivery cycles and seamless extension of your in-house teams.",metricBadge:"👥 130+ ENGINEERS",glowColor:"rgba(245, 158, 11, 0.16)",position:{x:12,y:2.15,z:-20.96},rotationY:0,drawGraphic:(n,e,t)=>{n.fillStyle="#12151e",n.strokeStyle="#f59e0b",n.lineWidth=1.5,n.beginPath(),n.roundRect(80,20,e-160,310,10),n.fill(),n.stroke(),[{label:"Senior Engineers",val:"130+",sub:"Average 8+ Yrs Experience",c:"#f26e65"},{label:"Client Retention",val:"94%",sub:"Long-Term Enterprise Partners",c:"#10b981"},{label:"Delivery Velocity",val:"2.4x",sub:"Faster than In-House Hiring",c:"#38bdf8"}].forEach((r,o)=>{const a=110+o*260;n.fillStyle="#1a1e2b",n.fillRect(a,50,230,140),n.font='bold 36px "Poppins", sans-serif',n.fillStyle=r.c,n.fillText(r.val,a+20,110),n.font='600 13px "Poppins", sans-serif',n.fillStyle="#ffffff",n.fillText(r.label,a+20,145),n.font='11px "JetBrains Mono", monospace',n.fillStyle="#94a3b8",n.fillText(r.sub,a+20,170)}),n.strokeStyle="#f59e0b",n.lineWidth=3,n.beginPath(),[50,85,120,190,260,330,420].forEach((r,o)=>{const a=120+o*110,l=300-r/450*80;o===0?n.moveTo(a,l):n.lineTo(a,l)}),n.stroke(),n.fillStyle="#ffffff",n.font='bold 11px "JetBrains Mono", monospace',n.fillText("Sprint Velocity: +140% Productivity Over 6 Sprints",120,315)}},{id:"art-security-rigor",category:"Production Reliability",title:"ISO27001 & SOC2 Enterprise Compliance",subtitle:"Automated CI/CD security scanning, vulnerability pen-testing and bank-grade encryption.",metricBadge:"🔒 ZERO COMPROMISE",glowColor:"rgba(242, 110, 101, 0.16)",position:{x:12,y:2.15,z:20.96},rotationY:Math.PI,drawGraphic:(n,e,t)=>{[{name:"STATIC CODE ANALYSIS",desc:"SonarQube & Snyk CI Automation",status:"PASS"},{name:"SECRET & CREDENTIAL AUDIT",desc:"Zero Hardcoded Keys • Vault Integrated",status:"PASS"},{name:"PENETRATION TESTING",desc:"OWASP Top 10 • Third-Party Audited",status:"PASS"},{name:"TLS 1.3 & AES-256 ENCRYPTION",desc:"End-to-End Encrypted Data at Rest & Transit",status:"PASS"}].forEach((s,r)=>{const o=40+r*65;n.fillStyle="#141822",n.strokeStyle="#2d3345",n.lineWidth=1,n.beginPath(),n.roundRect(100,o,e-200,52,8),n.fill(),n.stroke(),n.fillStyle="#ffffff",n.font='bold 13px "JetBrains Mono", monospace',n.fillText(s.name,125,o+24),n.fillStyle="#94a3b8",n.font='11px "Poppins", sans-serif',n.fillText(s.desc,125,o+42),n.fillStyle="rgba(16, 185, 129, 0.15)",n.strokeStyle="#10b981",n.lineWidth=1.5,n.beginPath(),n.roundRect(e-210,o+12,85,28,6),n.fill(),n.stroke(),n.fillStyle="#10b981",n.font='bold 11px "JetBrains Mono", monospace',n.textAlign="center",n.fillText("✓ "+s.status,e-167,o+30),n.textAlign="left"})}},{id:"art-fintech-risk",category:"FinTech & Banking AI",title:"Real-Time Transaction Risk & Fraud Shield",subtitle:"Sub-millisecond graph neural networks scoring millions of transactions for UK financial institutions.",metricBadge:"💰 £34K+ SAVED/MO",glowColor:"rgba(245, 158, 11, 0.16)",position:{x:-36,y:2.15,z:-14.96},rotationY:0,drawGraphic:(n,e,t)=>{n.fillStyle="#11141e",n.fillRect(60,20,e-120,310);const i=[{label:"INGESTION",desc:"ISO 20022 Stream",val:"25,000 tx/s",c:"#38bdf8"},{label:"NEURAL EVAL",desc:"GNN Risk Model",val:"<3.2ms Latency",c:"#f26e65"},{label:"CONSENSUS",desc:"Rule Engine + LLM",val:"99.98% Precision",c:"#f59e0b"},{label:"SETTLEMENT",desc:"Automated Clearing",val:"Zero Fraud Loss",c:"#10b981"}];i.forEach((s,r)=>{const o=90+r*195;n.fillStyle="#181c28",n.strokeStyle=s.c,n.lineWidth=1.5,n.beginPath(),n.roundRect(o,50,180,170,8),n.fill(),n.stroke(),n.fillStyle=s.c,n.font='bold 12px "JetBrains Mono", monospace',n.fillText(`0${r+1} // ${s.label}`,o+14,80),n.fillStyle="#ffffff",n.font='bold 15px "Poppins", sans-serif',n.fillText(s.val,o+14,130),n.fillStyle="#94a3b8",n.font='11px "Poppins", sans-serif',n.fillText(s.desc,o+14,160),r<i.length-1&&(n.strokeStyle="#64748b",n.lineWidth=2,n.beginPath(),n.moveTo(o+180,135),n.lineTo(o+195,135),n.stroke())}),n.fillStyle="rgba(16, 185, 129, 0.12)",n.strokeStyle="#10b981",n.lineWidth=1,n.beginPath(),n.roundRect(90,250,e-180,50,8),n.fill(),n.stroke(),n.fillStyle="#10b981",n.font='bold 12px "JetBrains Mono", monospace',n.fillText("FINANCIAL CONDUCT COMPLIANCE: FCA / ISO 20022 READY  •  REAL-TIME FRAUD PREVENTION",115,280)}},{id:"art-healthtech-ai",category:"Healthcare & Clinical AI",title:"Clinical Diagnostics & NHS Workflow Automation",subtitle:"HIPAA & NHS DTAC certified neural diagnostic models with automated EHR documentation.",metricBadge:"🏥 +400% EFFICIENCY",glowColor:"rgba(56, 189, 248, 0.16)",position:{x:-36,y:2.15,z:14.96},rotationY:Math.PI,drawGraphic:(n,e,t)=>{n.fillStyle="#10141f",n.fillRect(60,20,e-120,310),[{title:"Triage Acceleration",stat:"4.2x Faster",note:"AI pre-screening reduces wait time",c:"#38bdf8"},{title:"Diagnostic Concordance",stat:"98.9%",note:"Radiologist-verified model consensus",c:"#10b981"},{title:"EHR Documentation",stat:"-75% Time",note:"Ambient clinical listening & transcription",c:"#f26e65"}].forEach((r,o)=>{const a=90+o*260;n.fillStyle="#181e2e",n.strokeStyle=r.c,n.lineWidth=1.5,n.beginPath(),n.roundRect(a,45,235,150,10),n.fill(),n.stroke(),n.fillStyle=r.c,n.font='bold 32px "Poppins", sans-serif',n.fillText(r.stat,a+18,98),n.fillStyle="#ffffff",n.font='600 13px "Poppins", sans-serif',n.fillText(r.title,a+18,130),n.fillStyle="#94a3b8",n.font='11px "JetBrains Mono", monospace',n.fillText(r.note,a+18,155)}),n.strokeStyle="#38bdf8",n.lineWidth=2.5,n.beginPath();const s=[0,4,-4,8,-25,45,-15,6,-2,0,5,-3];for(let r=0;r<70;r++){const o=90+r*11,a=265+(s[r%s.length]||0)*.8;r===0?n.moveTo(o,a):n.lineTo(o,a)}n.stroke(),n.fillStyle="#ffffff",n.font='bold 11px "JetBrains Mono", monospace',n.fillText("LIVE TELEMETRY: 100% REGULATORY CONCORDANCE (NHS DTAC & HIPAA)",90,310)}},{id:"art-event-streaming",category:"High-Throughput Streaming",title:"Distributed Event Streaming & Kafka Mesh",subtitle:"Sub-5ms event delivery across 10 million daily enterprise messages with strict ordering.",metricBadge:"⚡ 10M+ EVENTS/DAY",glowColor:"rgba(242, 110, 101, 0.16)",position:{x:36,y:2.15,z:-14.96},rotationY:0,drawGraphic:(n,e,t)=>{n.fillStyle="#111420",n.fillRect(60,20,e-120,310),[{topic:"ORDERS.PLACED.V2",rate:"12,400 msg/s",lag:"0ms Lag",c:"#f26e65"},{topic:"TELEMETRY.IOT.RAW",rate:"85,000 msg/s",lag:"1ms Lag",c:"#38bdf8"},{topic:"AI.INFERENCE.JOBS",rate:"4,200 msg/s",lag:"0ms Lag",c:"#f59e0b"},{topic:"AUDIT.LEDGER.SYNC",rate:"1,800 msg/s",lag:"0ms Lag",c:"#10b981"}].forEach((s,r)=>{const o=45+r*65;n.fillStyle="#181d2a",n.strokeStyle=s.c,n.lineWidth=1.2,n.beginPath(),n.roundRect(90,o,e-180,52,6),n.fill(),n.stroke(),n.fillStyle=s.c,n.font='bold 12px "JetBrains Mono", monospace',n.fillText(`TOPIC: ${s.topic}`,115,o+24),n.fillStyle="#ffffff",n.font='bold 13px "Poppins", sans-serif',n.fillText(`THROUGHPUT: ${s.rate}`,115,o+42),n.fillStyle="#10b981",n.font='bold 11px "JetBrains Mono", monospace',n.textAlign="right",n.fillText(`● ${s.lag} • HEALTHY`,e-110,o+32),n.textAlign="left"})}},{id:"art-design-systems",category:"Design Systems & UI",title:"Next-Gen WebGL & Reactive Design Systems",subtitle:"Tailwind CSS design tokens, WebGL 3D micro-frontends and accessible WCAG 2.1 AA interfaces.",metricBadge:"🎨 100% LIGHTHOUSE",glowColor:"rgba(168, 85, 247, 0.16)",position:{x:36,y:2.15,z:14.96},rotationY:Math.PI,drawGraphic:(n,e,t)=>{n.fillStyle="#111420",n.fillRect(60,20,e-120,310),[{label:"3D WebGL Canvas",desc:"Three.js • PCF Shadows • 60 FPS",score:"60 FPS",c:"#a855f7"},{label:"Design Tokens",desc:"Atomic CSS • Poppins Typography",score:"100%",c:"#f26e65"},{label:"Accessibility",desc:"Keyboard Nav • Contrast WCAG AAA",score:"AAA Pass",c:"#10b981"},{label:"Bundle Efficiency",desc:"Tree-Shaken ES Modules • Zero Bloat",score:"99.4 kB",c:"#38bdf8"}].forEach((s,r)=>{const o=90+r*195;n.fillStyle="#191d2c",n.strokeStyle=s.c,n.lineWidth=1.5,n.beginPath(),n.roundRect(o,55,180,160,8),n.fill(),n.stroke(),n.fillStyle=s.c,n.font='bold 26px "Poppins", sans-serif',n.fillText(s.score,o+16,105),n.fillStyle="#ffffff",n.font='600 13px "Poppins", sans-serif',n.fillText(s.label,o+16,140),n.fillStyle="#94a3b8",n.font='10px "JetBrains Mono", monospace',n.fillText(s.desc,o+16,165)}),n.fillStyle="rgba(255, 255, 255, 0.08)",n.fillRect(90,245,e-180,1),n.font='bold 11px "JetBrains Mono", monospace',n.fillStyle="#10b981",n.fillText("LIGHTHOUSE AUDIT: PERFORMANCE 100 • ACCESSIBILITY 100 • BEST PRACTICES 100 • SEO 100",90,285)}},{id:"art-devsecops-ci",category:"DevSecOps & Automation",title:"Zero-Downtime Blue/Green CI/CD Pipelines",subtitle:"Automated container vulnerability analysis, immutable Terraform state and rolling canary releases.",metricBadge:"🚀 0 DOWNTIME",glowColor:"rgba(16, 185, 129, 0.16)",position:{x:-14.96,y:2.15,z:-36},rotationY:-Math.PI/2,drawGraphic:(n,e,t)=>{n.fillStyle="#111420",n.fillRect(60,20,e-120,310),[{step:"01",name:"COMMIT & TEST",desc:"Jest & Vitest Unit Suites",status:"100% PASS"},{step:"02",name:"SECURITY SCAN",desc:"Trivy & Snyk Dependency Audit",status:"0 VULNS"},{step:"03",name:"TERRAFORM APPLY",desc:"Immutable IaC Cloud Setup",status:"VERIFIED"},{step:"04",name:"CANARY DEPLOY",desc:"10% -> 50% -> 100% Health Checked",status:"LIVE"}].forEach((s,r)=>{const o=45+r*65;n.fillStyle="#171c2a",n.strokeStyle=r===3?"#10b981":"#38bdf8",n.lineWidth=1.2,n.beginPath(),n.roundRect(90,o,e-180,52,8),n.fill(),n.stroke(),n.fillStyle="#f26e65",n.font='bold 12px "JetBrains Mono", monospace',n.fillText(`STAGE ${s.step} // ${s.name}`,115,o+24),n.fillStyle="#cbd5e1",n.font='11px "Poppins", sans-serif',n.fillText(s.desc,115,o+42),n.fillStyle="#10b981",n.font='bold 11px "JetBrains Mono", monospace',n.textAlign="right",n.fillText(`✓ ${s.status}`,e-110,o+32),n.textAlign="left"})}},{id:"art-client-impact",category:"Enterprise Client Track Record",title:"11+ Years Delivering Production Software",subtitle:"Trusted by UK FinTechs, European SaaS scale-ups and global healthcare enterprises.",metricBadge:"⭐ 4.9/5 CLUTCH",glowColor:"rgba(245, 158, 11, 0.16)",position:{x:-14.96,y:2.15,z:36},rotationY:-Math.PI/2,drawGraphic:(n,e,t)=>{n.fillStyle="#111420",n.fillRect(60,20,e-120,310),[{val:"150+",lbl:"Enterprise Clients",sub:"UK, US, EU & UAE"},{val:"1,500+",lbl:"Delivered Projects",sub:"Production Shipped"},{val:"99.4%",lbl:"On-Time Milestones",sub:"Zero Slippage Guarantee"},{val:"4.9 / 5",lbl:"Clutch Verified",sub:"Top Rated UK AI Firm"}].forEach((s,r)=>{const o=90+r*195;n.fillStyle="#191d2c",n.strokeStyle="#f59e0b",n.lineWidth=1.2,n.beginPath(),n.roundRect(o,50,180,160,8),n.fill(),n.stroke(),n.fillStyle="#ffffff",n.font='bold 28px "Poppins", sans-serif',n.fillText(s.val,o+16,98),n.fillStyle="#f59e0b",n.font='600 13px "Poppins", sans-serif',n.fillText(s.lbl,o+16,130),n.fillStyle="#94a3b8",n.font='10px "JetBrains Mono", monospace',n.fillText(s.sub,o+16,155)}),n.fillStyle="rgba(242, 110, 101, 0.15)",n.strokeStyle="#f26e65",n.lineWidth=1,n.beginPath(),n.roundRect(90,240,e-180,60,8),n.fill(),n.stroke(),n.fillStyle="#ffffff",n.font='bold 12px "Poppins", sans-serif',n.fillText("DIRECT ACCESS TO SENIOR ARCHITECTS: NO JUNIOR LAYERS, NO SALES BOTTLENECK",115,275)}}];class hm{constructor(e){this.scene=e,this.artObjects=[],this.createArtworks()}createArtworks(){const e=new ve({color:1579291,roughness:.32,metalness:.85}),t=new ve({color:13938487,roughness:.28,metalness:.92}),i=new ve({color:16777215,roughness:.05,metalness:.15,transparent:!0,opacity:.12});new ve({color:2368808,roughness:.35,metalness:.9}),cm.forEach(s=>{const r=new ft;r.position.set(s.position.x,s.position.y,s.position.z),r.rotation.y=s.rotationY;const o=new Pe(3.6,2.25,.12),a=new te(o,e);a.castShadow=!0,a.receiveShadow=!0,r.add(a);const l=new Pe(3.42,2.07,.13),c=new te(l,t);r.add(c);const h=lm(s),f=new dt(3.3,1.95),p=new ve({map:h,roughness:.3,metalness:.05}),m=new te(f,p);m.position.z=.07,r.add(m);const g=new dt(3.32,1.97),_=new te(g,i);_.position.z=.075,r.add(_),this.scene.add(r),this.artObjects.push({data:s,group:r})})}}function dm(n){const e=document.createElement("canvas");e.width=1024,e.height=640;const t=e.getContext("2d");t.fillStyle="#0d0f14",t.fillRect(0,0,e.width,e.height),t.strokeStyle="rgba(255, 255, 255, 0.04)",t.lineWidth=1;for(let a=0;a<e.width;a+=40)t.beginPath(),t.moveTo(a,0),t.lineTo(a,e.height),t.stroke();for(let a=0;a<e.height;a+=40)t.beginPath(),t.moveTo(0,a),t.lineTo(e.width,a),t.stroke();const i=t.createLinearGradient(0,0,e.width,0);i.addColorStop(0,"#f26e65"),i.addColorStop(.5,"#f5918a"),i.addColorStop(1,"#d94f47"),t.fillStyle=i,t.fillRect(0,0,e.width,6),t.fillStyle="#f26e65",t.fillRect(48,36,5,22),t.font='bold 13px "JetBrains Mono", monospace',t.fillStyle="#f5918a",t.fillText("CYPHEROX UK // CAMPUS WAYFINDING DIRECTORY",64,46),t.font='600 11px "JetBrains Mono", monospace',t.fillStyle="#8b949e",t.fillText(`LOCATION: ${n.zoneTag.toUpperCase()} • ELEVATION: GROUND`,64,62),t.fillStyle="#171a22",t.strokeStyle="#333846",t.lineWidth=1.5,t.beginPath(),t.roundRect(e.width-240,32,192,34,6),t.fill(),t.stroke(),t.fillStyle="#10b981",t.beginPath(),t.arc(e.width-222,49,4,0,Math.PI*2),t.fill(),t.font='bold 11px "JetBrains Mono", monospace',t.fillStyle="#ffffff",t.fillText("CAMPUS ACTIVE",e.width-208,53),t.fillStyle="rgba(255, 255, 255, 0.08)",t.fillRect(48,86,e.width-96,1);const s=108,r=135;n.routes.forEach((a,l)=>{const c=s+l*r;t.fillStyle="#131620",t.strokeStyle=a.highlight?"#f26e65":"#272b38",t.lineWidth=a.highlight?1.5:1,t.beginPath(),t.roundRect(48,c,e.width-96,118,10),t.fill(),t.stroke(),t.fillStyle=a.highlight?"#f26e65":"#1e2330",t.beginPath(),t.roundRect(66,c+18,82,82,10),t.fill(),t.font='bold 44px "Poppins", sans-serif',t.fillStyle="#ffffff",t.textAlign="center",t.fillText(a.arrow,107,c+74),t.textAlign="left",t.font='bold 13px "JetBrains Mono", monospace',t.fillStyle=a.highlight?"#f5918a":"#94a3b8",t.fillText(a.stationCode,168,c+42),t.font='bold 22px "Poppins", sans-serif',t.fillStyle="#ffffff",t.fillText(a.stationName,168,c+72),t.font='400 12px "Poppins", sans-serif',t.fillStyle="#8b949e",t.fillText(a.landmark,168,c+94),t.fillStyle="#1a1f2b",t.strokeStyle=a.highlight?"rgba(242, 110, 101, 0.5)":"rgba(255, 255, 255, 0.1)",t.lineWidth=1,t.beginPath(),t.roundRect(e.width-210,c+40,142,38,8),t.fill(),t.stroke(),t.font='bold 13px "JetBrains Mono", monospace',t.fillStyle=a.highlight?"#f5918a":"#cbd5e1",t.textAlign="center",t.fillText(a.distance,e.width-139,c+64),t.textAlign="left"}),t.fillStyle="rgba(255, 255, 255, 0.08)",t.fillRect(48,550,e.width-96,1),t.font='bold 11px "JetBrains Mono", monospace',t.fillStyle="#f5918a",t.fillText("FAST TRAVEL: PRESS [1] HOME  [2] ABOUT  [3] SERVICES  [4] PROJECTS  [5] CONTACT",48,582),t.font='600 11px "JetBrains Mono", monospace',t.fillStyle="#64748b",t.textAlign="right",t.fillText("PRESS [E] TO TOGGLE PAGE PANEL",e.width-48,582),t.textAlign="left";const o=new Tn(e);return o.minFilter=lt,o.generateMipmaps=!0,o}const um=[{id:"board-northwest-junction",zoneTag:"Junction NW // North Artery",position:{x:-18,y:2.2,z:-8.96},rotationY:0,routes:[{arrow:"←",stationCode:"PAVILION 02",stationName:"ABOUT & ENGINEERING STUDIO",landmark:"Triple Code Monitors • Developer Team Cards • Whiteboard",distance:"24 METERS",highlight:!0},{arrow:"↑",stationCode:"PAVILION 03",stationName:"AI & GPU COMPUTE CLUSTER",landmark:"NVIDIA DGX Towers • Fiber Conduits • Quantum Chip",distance:"36 METERS",highlight:!1},{arrow:"→",stationCode:"PAVILION 01",stationName:"HOME // CYPHEROX CORE",landmark:"Central Quantum Core • Dual 42U Server Racks",distance:"18 METERS",highlight:!1}]},{id:"board-northeast-junction",zoneTag:"Junction NE // Services Corridor",position:{x:18,y:2.2,z:-8.96},rotationY:0,routes:[{arrow:"→",stationCode:"PAVILION 03",stationName:"AI SERVICES & GPU CLUSTER",landmark:"Industrial GPU Racks • Enterprise Cloud Architecture",distance:"24 METERS",highlight:!0},{arrow:"←",stationCode:"PAVILION 02",stationName:"ABOUT & TEAM STUDIO",landmark:"Developer Workstations • Hardik, Krupa, Akash",distance:"36 METERS",highlight:!1},{arrow:"↓",stationCode:"PAVILION 01",stationName:"HOME // CYPHEROX CORE",landmark:"Central Pavilion • Main Campus Atrium",distance:"18 METERS",highlight:!1}]},{id:"board-southwest-junction",zoneTag:"Junction SW // Projects Walkway",position:{x:-18,y:2.2,z:8.96},rotationY:Math.PI,routes:[{arrow:"←",stationCode:"PAVILION 04",stationName:"ENTERPRISE PROJECTS & CASE STUDIES",landmark:"Datacenter Cabinets • Verified Metric Pillars (+400% ROI)",distance:"24 METERS",highlight:!0},{arrow:"→",stationCode:"PAVILION 05",stationName:"CONTACT & LONDON HEADQUARTERS",landmark:"London Titanium Gateway Arch • Marble Reception Desk",distance:"36 METERS",highlight:!1},{arrow:"↑",stationCode:"PAVILION 01",stationName:"HOME // CYPHEROX CORE",landmark:"Central Atrium • Fast Travel Hub",distance:"18 METERS",highlight:!1}]},{id:"board-southeast-junction",zoneTag:"Junction SE // London Gateway",position:{x:18,y:2.2,z:8.96},rotationY:Math.PI,routes:[{arrow:"→",stationCode:"PAVILION 05",stationName:"LONDON HEADQUARTERS & CONTACT",landmark:"Titanium & Bronze Gateway • Holographic UK Beacon",distance:"24 METERS",highlight:!0},{arrow:"←",stationCode:"PAVILION 04",stationName:"ENTERPRISE PROJECTS & ROI",landmark:"High-Density Datacenter • Verified Client Outcomes",distance:"36 METERS",highlight:!1},{arrow:"↑",stationCode:"PAVILION 01",stationName:"HOME // CYPHEROX CORE",landmark:"Central Atrium • Fast Travel Hub",distance:"18 METERS",highlight:!1}]},{id:"board-west-hub",zoneTag:"West Concourse // Lateral Artery",position:{x:-26.96,y:2.2,z:-6},rotationY:-Math.PI/2,routes:[{arrow:"↖",stationCode:"PAVILION 02",stationName:"ABOUT STUDIO (NORTHWEST)",landmark:"Engineering Team • Senior Architects",distance:"18 METERS",highlight:!0},{arrow:"↙",stationCode:"PAVILION 04",stationName:"ENTERPRISE PROJECTS (SOUTHWEST)",landmark:"Case Studies • Datacenter Racks",distance:"18 METERS",highlight:!1},{arrow:"→",stationCode:"PAVILION 01",stationName:"HOME // CENTRAL ATRIUM",landmark:"Quantum Core • Agency Overview",distance:"12 METERS",highlight:!1}]},{id:"board-east-hub",zoneTag:"East Concourse // Lateral Artery",position:{x:26.96,y:2.2,z:-6},rotationY:Math.PI/2,routes:[{arrow:"↗",stationCode:"PAVILION 03",stationName:"SERVICES & AI CLUSTER (NORTHEAST)",landmark:"Industrial GPU Supercomputing Racks",distance:"18 METERS",highlight:!0},{arrow:"↘",stationCode:"PAVILION 05",stationName:"CONTACT & LONDON GATEWAY (SOUTHEAST)",landmark:"Direct Engineer Consultation Booking",distance:"18 METERS",highlight:!1},{arrow:"←",stationCode:"PAVILION 01",stationName:"HOME // CENTRAL ATRIUM",landmark:"Main Agency Hub",distance:"12 METERS",highlight:!1}]},{id:"board-approach-about",zoneTag:"Northwest Pavilion 02 Entry",position:{x:-20.96,y:2.2,z:6},rotationY:Math.PI/2,routes:[{arrow:"↑",stationCode:"PAVILION 02",stationName:"ABOUT CYPHEROX & TEAM",landmark:"Direct Access Ahead • Hardik, Krupa, Akash",distance:"12 METERS",highlight:!0},{arrow:"↓",stationCode:"PAVILION 01",stationName:"HOME // CENTRAL PLAZA",landmark:"Return to Central Atrium Hub",distance:"30 METERS",highlight:!1}]},{id:"board-approach-services",zoneTag:"Northeast Pavilion 03 Entry",position:{x:20.96,y:2.2,z:6},rotationY:-Math.PI/2,routes:[{arrow:"↑",stationCode:"PAVILION 03",stationName:"SERVICES & AI ENGINEERING",landmark:"Direct Access Ahead • DGX Supercomputer Installation",distance:"12 METERS",highlight:!0},{arrow:"↓",stationCode:"PAVILION 01",stationName:"HOME // CENTRAL PLAZA",landmark:"Return to Central Atrium Hub",distance:"30 METERS",highlight:!1}]}];class fm{constructor(e){this.scene=e,this.boards=[],this.createBoards()}createBoards(){const e=new ve({color:1316379,roughness:.35,metalness:.88}),t=new ve({color:15887973,roughness:.25,metalness:.8,emissive:14241607,emissiveIntensity:.4}),i=new ve({color:16777215,roughness:.05,metalness:.1,transparent:!0,opacity:.1});new ve({color:2040102,roughness:.35,metalness:.9}),um.forEach(s=>{const r=new ft;r.position.set(s.position.x,s.position.y,s.position.z),r.rotation.y=s.rotationY;const o=new Pe(2.4,1.5,.08),a=new te(o,e);a.castShadow=!0,a.receiveShadow=!0,r.add(a);const l=new Pe(2.32,1.42,.09),c=new te(l,t);r.add(c);const h=dm(s),f=new dt(2.26,1.36),p=new ve({map:h,roughness:.3,metalness:.05}),m=new te(f,p);m.position.z=.048,r.add(m);const g=new dt(2.28,1.38),_=new te(g,i);_.position.z=.052,r.add(_),this.scene.add(r),this.boards.push({data:s,group:r})})}}function pm(){const n=document.createElement("canvas");n.width=512,n.height=256;const e=n.getContext("2d"),t=e.createRadialGradient(n.width/2,n.height/2,20,n.width/2,n.height/2,220);t.addColorStop(0,"rgba(242, 110, 101, 0.95)"),t.addColorStop(.35,"rgba(245, 145, 138, 0.65)"),t.addColorStop(.7,"rgba(217, 79, 71, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,n.width,n.height);const i=new Tn(n);return i.minFilter=lt,i}function mm(n=0){const e=document.createElement("canvas");e.width=1024,e.height=384;const t=e.getContext("2d");t.fillStyle="#0a0c12",t.fillRect(0,0,e.width,e.height),t.strokeStyle="rgba(242, 110, 101, 0.08)",t.lineWidth=1;for(let m=32;m<e.width;m+=32)t.beginPath(),t.moveTo(m,0),t.lineTo(m,e.height),t.stroke();for(let m=32;m<e.height;m+=32)t.beginPath(),t.moveTo(0,m),t.lineTo(e.width,m),t.stroke();t.strokeStyle="#f26e65",t.lineWidth=3,t.strokeRect(12,12,e.width-24,e.height-24);const i=22;t.strokeStyle="#ffffff",t.lineWidth=2,t.beginPath(),t.moveTo(12,12+i),t.lineTo(12,12),t.lineTo(12+i,12),t.stroke(),t.beginPath(),t.moveTo(e.width-12-i,12),t.lineTo(e.width-12,12),t.lineTo(e.width-12,12+i),t.stroke(),t.beginPath(),t.moveTo(12,e.height-12-i),t.lineTo(12,e.height-12),t.lineTo(12+i,e.height-12),t.stroke(),t.beginPath(),t.moveTo(e.width-12-i,e.height-12),t.lineTo(e.width-12,e.height-12),t.lineTo(e.width-12,e.height-12-i),t.stroke();const s=t.createLinearGradient(0,0,e.width,0);s.addColorStop(0,"#f26e65"),s.addColorStop(.5,"#ffffff"),s.addColorStop(1,"#f26e65"),t.fillStyle=s,t.fillRect(16,16,e.width-32,4);const r=145,o=192,a=68,l=t.createRadialGradient(r,o,10,r,o,a+30);l.addColorStop(0,"rgba(242, 110, 101, 0.45)"),l.addColorStop(1,"rgba(242, 110, 101, 0)"),t.fillStyle=l,t.beginPath(),t.arc(r,o,a+30,0,Math.PI*2),t.fill(),t.save(),t.translate(r,o),t.strokeStyle="#f26e65",t.lineWidth=4,t.beginPath();for(let m=0;m<6;m++){const g=m*Math.PI/3-Math.PI/6,_=Math.cos(g)*a,u=Math.sin(g)*a;m===0?t.moveTo(_,u):t.lineTo(_,u)}t.closePath(),t.stroke(),t.strokeStyle="#f5918a",t.lineWidth=2.5,t.beginPath();for(let m=0;m<6;m++){const g=m*Math.PI/3-Math.PI/6,_=Math.cos(g)*(a*.65),u=Math.sin(g)*(a*.65);m===0?t.moveTo(_,u):t.lineTo(_,u)}t.closePath(),t.stroke(),t.fillStyle="#ffffff",t.beginPath(),t.arc(0,0,8,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(255, 255, 255, 0.6)",t.lineWidth=1.5;for(let m=0;m<3;m++){const g=m*Math.PI/3;t.beginPath(),t.moveTo(Math.cos(g)*(a*.3),Math.sin(g)*(a*.3)),t.lineTo(Math.cos(g)*(a*.95),Math.sin(g)*(a*.95)),t.stroke(),t.beginPath(),t.moveTo(-Math.cos(g)*(a*.3),-Math.sin(g)*(a*.3)),t.lineTo(-Math.cos(g)*(a*.95),-Math.sin(g)*(a*.95)),t.stroke()}t.restore();const c=245;t.font='bold 13px "JetBrains Mono", monospace',t.fillStyle="#f26e65",t.fillText("CYPHEROX UK // ENTERPRISE AI & ENGINEERING",c,130),t.font='800 66px "Poppins", sans-serif',t.fillStyle="#ffffff",t.shadowColor="rgba(242, 110, 101, 0.85)",t.shadowBlur=18,t.fillText("CYPHEROX",c,204),t.shadowBlur=0,t.fillStyle="#f26e65",t.beginPath(),t.arc(c+395,168,5,0,Math.PI*2),t.fill();const h=["PRODUCTION AI • FULL-STACK SOFTWARE • CLOUD ARCHITECTURE","AUTONOMOUS AGENTS • MULTI-MODEL SWARMS • VECTOR RAG","11+ YEARS IN PRODUCTION • 130+ VETTED SENIOR ENGINEERS","ISO27001 & SOC2 VERIFIED • LONDON & UK ENTERPRISES","ZERO PROTOTYPE FRAGILITY • MISSION-CRITICAL AUTOMATION"],f=h[n%h.length];t.font='500 13px "JetBrains Mono", monospace',t.fillStyle="#94a3b8",t.fillText(f,c,240),t.fillStyle="rgba(255, 255, 255, 0.12)",t.fillRect(c,260,e.width-c-48,1),t.font='bold 11px "JetBrains Mono", monospace',t.fillStyle="#10b981",t.fillText("● SYSTEM ACTIVE  |  UK HEADQUARTERS  |  SLA: 99.99%",c,290),t.fillStyle="#64748b",t.textAlign="right",t.fillText(`UNIT #${String(n+1).padStart(2,"0")} // ARCHITECTURAL SIGN`,e.width-48,290),t.textAlign="left";const p=new Tn(e);return p.minFilter=lt,p.generateMipmaps=!0,p}const gm=[{id:"sign-nw-corridor-1",x:-27.04,y:2.35,z:-48,rotY:-Math.PI/2,variant:0},{id:"sign-nw-corridor-2",x:-20.96,y:2.35,z:-42,rotY:Math.PI/2,variant:1},{id:"sign-ne-corridor-1",x:20.96,y:2.35,z:-36,rotY:-Math.PI/2,variant:2},{id:"sign-ne-corridor-2",x:8.96,y:2.35,z:-24,rotY:-Math.PI/2,variant:3},{id:"sign-ne-junction",x:27.04,y:2.35,z:-18,rotY:Math.PI/2,variant:4},{id:"sign-east-artery-1",x:27.04,y:2.35,z:-12,rotY:Math.PI/2,variant:0},{id:"sign-west-central",x:-30,y:2.35,z:-3.04,rotY:Math.PI,variant:1},{id:"sign-sw-hub",x:-44.96,y:2.35,z:12,rotY:Math.PI/2,variant:2},{id:"sign-sw-wing",x:-27.04,y:2.35,z:36,rotY:-Math.PI/2,variant:3},{id:"sign-se-hub",x:12,y:2.35,z:15.04,rotY:0,variant:4},{id:"sign-se-corridor",x:44.96,y:2.35,z:18,rotY:-Math.PI/2,variant:0},{id:"sign-se-wing",x:27.04,y:2.35,z:36,rotY:Math.PI/2,variant:1},{id:"sign-south-artery-1",x:-3.04,y:2.35,z:24,rotY:-Math.PI/2,variant:2},{id:"sign-south-artery-2",x:3.04,y:2.35,z:30,rotY:Math.PI/2,variant:3}];class _m{constructor(e){this.scene=e,this.signs=[],this.haloTexture=pm(),this.createSignage()}createSignage(){const e=new ve({color:1184794,roughness:.32,metalness:.88}),t=new ve({color:15887973,roughness:.2,metalness:.8,emissive:14241607,emissiveIntensity:.6}),i=new Jt({map:this.haloTexture,transparent:!0,opacity:.82,blending:ur,depthWrite:!1}),s=new ve({color:16777215,roughness:.04,metalness:.12,transparent:!0,opacity:.14});gm.forEach((r,o)=>{const a=new ft;a.position.set(r.x,r.y,r.z),a.rotation.y=r.rotY;const l=new dt(2.8,1.4),c=new te(l,i);c.position.z=-.015,a.add(c);const h=new Pe(1.9,.78,.07),f=new te(h,e);f.castShadow=!0,f.receiveShadow=!0,a.add(f);const p=new Pe(1.84,.72,.075),m=new te(p,t);a.add(m);const g=mm(r.variant),_=new dt(1.78,.66),u=new ve({map:g,roughness:.25,metalness:.1,emissive:16777215,emissiveMap:g,emissiveIntensity:.85}),d=new te(_,u);d.position.z=.04,a.add(d);const y=new dt(1.8,.68),v=new te(y,s);if(v.position.z=.045,a.add(v),o%2===0){const S=new Ni(15887973,.9,5.5,2);S.position.set(0,0,.35),a.add(S)}this.scene.add(a),this.signs.push({loc:r,group:a})})}}class xm{constructor(){this.canvasContainer=document.getElementById("canvas-container"),this.lastTime=performance.now(),this.initThree(),this.initComponents(),this.initCursor(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate),window.addEventListener("warpToStation",e=>{const t=e.detail.station;if(t){const i=t.frontX!==void 0?t.frontX:t.x,s=t.frontZ!==void 0?t.frontZ:t.z+4.5;this.player.warpTo(i,s,t.frontHeading??Math.PI)}}),window.addEventListener("stationDocked",e=>{const t=e.detail.station;t&&this.player.dockAtSection(t)}),setTimeout(()=>{const e=Xt.find(t=>t.id==="S1");e&&(this.player.dockAtSection(e),window.dispatchEvent(new CustomEvent("stationDocked",{detail:{station:e}})))},600)}initThree(){this.world=new Yp(this.canvasContainer),this.player=new $p(this.world.scene,this.world.camera),this.stationsManager=new em(this.world.scene),this.particles=new tm(this.world.scene),this.wayfinding=new om(this.world.scene),this.galleryArt=new hm(this.world.scene),this.directionBoards=new fm(this.world.scene),this.backlitSignage=new _m(this.world.scene)}initComponents(){this.urgencyHud=new sm(this.player),this.minimap=new nm("minimap-canvas",this.player,this.stationsManager),this.stationHud=new im,this.bookingModal=new am}initCursor(){const e=document.getElementById("custom-cursor");e&&(window.addEventListener("mousemove",t=>{e.style.transform=`translate(${t.clientX}px, ${t.clientY}px)`}),document.querySelectorAll("button, a, input, range, .hud-key, #minimap-canvas").forEach(t=>{t.addEventListener("mouseenter",()=>{e.style.width="36px",e.style.height="36px",e.style.backgroundColor="rgba(242, 110, 101, 0.18)"}),t.addEventListener("mouseleave",()=>{e.style.width="24px",e.style.height="24px",e.style.backgroundColor="transparent"})}))}animate(e){const t=Math.min((e-this.lastTime)*.001,.1);this.lastTime=e,this.world.update(t),this.player.update(t,this.world.mouse),this.stationsManager.update(this.player.position,t),this.particles.update(t),this.wayfinding.update(this.player.position),this.world.render(),this.minimap.update(),requestAnimationFrame(this.animate)}}window.addEventListener("DOMContentLoaded",()=>{new xm});
