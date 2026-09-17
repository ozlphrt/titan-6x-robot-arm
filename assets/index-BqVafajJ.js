(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _o="174",_n={ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rc=0,Xo=1,oc=2,ol=1,al=2,fn=3,Pn=0,De=1,Re=2,An=0,vi=1,Yo=2,jo=3,Jo=4,ac=5,Gn=100,lc=101,cc=102,hc=103,uc=104,dc=200,fc=201,pc=202,mc=203,Ar=204,Rr=205,gc=206,_c=207,vc=208,xc=209,yc=210,Mc=211,Sc=212,bc=213,Ec=214,Cr=0,Pr=1,Lr=2,Si=3,Ir=4,Dr=5,Ur=6,Fr=7,ll=0,Tc=1,wc=2,Rn=0,Ac=1,Rc=2,Cc=3,cl=4,Pc=5,Lc=6,Ic=7,hl=300,bi=301,Ei=302,Nr=303,Or=304,zs=306,Br=1e3,Wn=1001,zr=1002,Ke=1003,Dc=1004,Qi=1005,sn=1006,Xs=1007,qn=1008,xn=1009,ul=1010,dl=1011,Wi=1012,vo=1013,Xn=1014,mn=1015,Ji=1016,xo=1017,yo=1018,Ti=1020,fl=35902,pl=1021,ml=1022,$e=1023,gl=1024,_l=1025,xi=1026,wi=1027,vl=1028,Mo=1029,xl=1030,So=1031,bo=1033,As=33776,Rs=33777,Cs=33778,Ps=33779,kr=35840,Vr=35841,Gr=35842,Hr=35843,Wr=36196,qr=37492,Xr=37496,Yr=37808,jr=37809,Jr=37810,Zr=37811,$r=37812,Kr=37813,Qr=37814,to=37815,eo=37816,no=37817,io=37818,so=37819,ro=37820,oo=37821,Ls=36492,ao=36494,lo=36495,yl=36283,co=36284,ho=36285,uo=36286,Uc=3200,Fc=3201,Ml=0,Nc=1,wn="",Ge="srgb",Ai="srgb-linear",Ds="linear",ne="srgb",Qn=7680,Zo=519,Oc=512,Bc=513,zc=514,Sl=515,kc=516,Vc=517,Gc=518,Hc=519,$o=35044,Ko="300 es",gn=2e3,Us=2001;class Zn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qo=1234567;const zi=Math.PI/180,qi=180/Math.PI;function $n(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[s&255]+Se[s>>8&255]+Se[s>>16&255]+Se[s>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Gt(s,t,e){return Math.max(t,Math.min(e,s))}function Eo(s,t){return(s%t+t)%t}function Wc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function qc(s,t,e){return s!==t?(e-s)/(t-s):0}function ki(s,t,e){return(1-e)*s+e*t}function Xc(s,t,e,n){return ki(s,t,1-Math.exp(-e*n))}function Yc(s,t=1){return t-Math.abs(Eo(s,t*2)-t)}function jc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Jc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Zc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function $c(s,t){return s+Math.random()*(t-s)}function Kc(s){return s*(.5-Math.random())}function Qc(s){s!==void 0&&(Qo=s);let t=Qo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function th(s){return s*zi}function eh(s){return s*qi}function nh(s){return(s&s-1)===0&&s!==0}function ih(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function sh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function rh(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),h=o((n-t)/2);switch(i){case"XYX":s.set(a*u,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*h,l*p,a*c);break;case"YXY":s.set(l*p,a*u,l*h,a*c);break;case"ZYZ":s.set(l*h,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function we(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ee={DEG2RAD:zi,RAD2DEG:qi,generateUUID:$n,clamp:Gt,euclideanModulo:Eo,mapLinear:Wc,inverseLerp:qc,lerp:ki,damp:Xc,pingpong:Yc,smoothstep:jc,smootherstep:Jc,randInt:Zc,randFloat:$c,randFloatSpread:Kc,seededRandom:Qc,degToRad:th,radToDeg:eh,isPowerOfTwo:nh,ceilPowerOfTwo:ih,floorPowerOfTwo:sh,setQuaternionFromProperEuler:rh,normalize:we,denormalize:pi};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,r,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],h=n[8],v=i[0],g=i[3],m=i[6],R=i[1],x=i[4],_=i[7],P=i[2],L=i[5],I=i[8];return r[0]=o*v+a*R+l*P,r[3]=o*g+a*x+l*L,r[6]=o*m+a*_+l*I,r[1]=c*v+u*R+d*P,r[4]=c*g+u*x+d*L,r[7]=c*m+u*_+d*I,r[2]=f*v+p*R+h*P,r[5]=f*g+p*x+h*L,r[8]=f*m+p*_+h*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,p=c*r-o*l,h=e*d+n*f+i*p;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/h;return t[0]=d*v,t[1]=(i*c-u*n)*v,t[2]=(a*n-i*o)*v,t[3]=f*v,t[4]=(u*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ys.makeScale(t,e)),this}rotate(t){return this.premultiply(Ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ys.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new Vt;function bl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Fs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function oh(){const s=Fs("canvas");return s.style.display="block",s}const ta={};function kn(s){s in ta||(ta[s]=!0,console.warn(s))}function ah(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function lh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ch(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ea=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),na=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hh(){const s={enabled:!0,workingColorSpace:Ai,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ne&&(i.r=vn(i.r),i.g=vn(i.g),i.b=vn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wn?Ds:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ai]:{primaries:t,whitePoint:n,transfer:Ds,toXYZ:ea,fromXYZ:na,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:ea,fromXYZ:na,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),s}const $t=hh();function vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ti;class uh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ti===void 0&&(ti=Fs("canvas")),ti.width=t.width,ti.height=t.height;const n=ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ti}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=vn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vn(e[n]/255)*255):e[n]=vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dh=0;class To{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(js(i[o].image)):r.push(js(i[o]))}else r=js(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function js(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?uh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fh=0;class Ce extends Zn{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=Wn,i=Wn,r=sn,o=qn,a=$e,l=xn,c=Ce.DEFAULT_ANISOTROPY,u=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=$n(),this.name="",this.source=new To(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Br:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Br:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=hl;Ce.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],h=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(h-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(h+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(p+1)/2,P=(m+1)/2,L=(u+f)/4,I=(d+v)/4,U=(h+g)/4;return x>_&&x>P?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=L/n,r=I/n):_>P?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=L/i,r=U/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=I/r,i=U/r),this.set(n,i,r,e),this}let R=Math.sqrt((g-h)*(g-h)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(g-h)/R,this.y=(d-v)/R,this.z=(f-u)/R,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ph extends Zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new To(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends ph{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class El extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mh extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class We{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const f=r[o+0],p=r[o+1],h=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=h,t[e+3]=v;return}if(d!==v||l!==f||c!==p||u!==h){let g=1-a;const m=l*f+c*p+u*h+d*v,R=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const P=Math.sqrt(x),L=Math.atan2(P,m*R);g=Math.sin(g*L)/P,a=Math.sin(a*L)/P}const _=a*R;if(l=l*g+f*_,c=c*g+p*_,u=u*g+h*_,d=d*g+v*_,g===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[o],f=r[o+1],p=r[o+2],h=r[o+3];return t[e]=a*h+u*d+l*p-c*f,t[e+1]=l*h+u*f+c*d-a*p,t[e+2]=c*h+u*p+a*f-l*d,t[e+3]=u*h-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(r/2),f=l(n/2),p=l(i/2),h=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*p*h,this._y=c*p*d-f*u*h,this._z=c*u*h+f*p*d,this._w=c*u*d-f*p*h;break;case"YXZ":this._x=f*u*d+c*p*h,this._y=c*p*d-f*u*h,this._z=c*u*h-f*p*d,this._w=c*u*d+f*p*h;break;case"ZXY":this._x=f*u*d-c*p*h,this._y=c*p*d+f*u*h,this._z=c*u*h+f*p*d,this._w=c*u*d-f*p*h;break;case"ZYX":this._x=f*u*d-c*p*h,this._y=c*p*d+f*u*h,this._z=c*u*h-f*p*d,this._w=c*u*d+f*p*h;break;case"YZX":this._x=f*u*d+c*p*h,this._y=c*p*d+f*u*h,this._z=c*u*h-f*p*d,this._w=c*u*d-f*p*h;break;case"XZY":this._x=f*u*d-c*p*h,this._y=c*p*d-f*u*h,this._z=c*u*h+f*p*d,this._w=c*u*d+f*p*h;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=i+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Js.copy(this).projectOnVector(t),this.sub(Js)}reflect(t){return this.sub(Js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Js=new b,ia=new We;class Zi{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ye):Ye.fromBufferAttribute(r,o),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(t.matrixWorld),this.union(ts)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ii),es.subVectors(this.max,Ii),ei.subVectors(t.a,Ii),ni.subVectors(t.b,Ii),ii.subVectors(t.c,Ii),yn.subVectors(ni,ei),Mn.subVectors(ii,ni),Un.subVectors(ei,ii);let e=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-Un.z,Un.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,Un.z,0,-Un.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-Un.y,Un.x,0];return!Zs(e,ei,ni,ii,es)||(e=[1,0,0,0,1,0,0,0,1],!Zs(e,ei,ni,ii,es))?!1:(ns.crossVectors(yn,Mn),e=[ns.x,ns.y,ns.z],Zs(e,ei,ni,ii,es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new b,new b,new b,new b,new b,new b,new b,new b],Ye=new b,ts=new Zi,ei=new b,ni=new b,ii=new b,yn=new b,Mn=new b,Un=new b,Ii=new b,es=new b,ns=new b,Fn=new b;function Zs(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Fn.fromArray(s,r);const a=i.x*Math.abs(Fn.x)+i.y*Math.abs(Fn.y)+i.z*Math.abs(Fn.z),l=t.dot(Fn),c=e.dot(Fn),u=n.dot(Fn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gh=new Zi,Di=new b,$s=new b;class ks{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Di.subVectors(t,this.center);const e=Di.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Di,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($s.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Di.copy(t.center).add($s)),this.expandByPoint(Di.copy(t.center).sub($s))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new b,Ks=new b,is=new b,Sn=new b,Qs=new b,ss=new b,tr=new b;class Vs{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ks.copy(t).add(e).multiplyScalar(.5),is.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(Ks);const r=t.distanceTo(e)*.5,o=-this.direction.dot(is),a=Sn.dot(this.direction),l=-Sn.dot(is),c=Sn.lengthSq(),u=Math.abs(1-o*o);let d,f,p,h;if(u>0)if(d=o*l-a,f=o*a-l,h=r*u,d>=0)if(f>=-h)if(f<=h){const v=1/u;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-h?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=h?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ks).addScaledVector(is,f),p}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,i,r){Qs.subVectors(e,t),ss.subVectors(n,t),tr.crossVectors(Qs,ss);let o=this.direction.dot(tr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,t);const l=a*this.direction.dot(ss.crossVectors(Sn,ss));if(l<0)return null;const c=a*this.direction.dot(Qs.cross(Sn));if(c<0||l+c>o)return null;const u=-a*Sn.dot(tr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,r,o,a,l,c,u,d,f,p,h,v,g){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,u,d,f,p,h,v,g)}set(t,e,n,i,r,o,a,l,c,u,d,f,p,h,v,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=p,m[7]=h,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/si.setFromMatrixColumn(t,0).length(),r=1/si.setFromMatrixColumn(t,1).length(),o=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*d,h=a*u,v=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+h*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=h+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*d,h=c*u,v=c*d;e[0]=f+v*a,e[4]=h*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-h,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*d,h=c*u,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=h+p*a,e[1]=p+h*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*d,h=a*u,v=a*d;e[0]=l*u,e[4]=h*c-p,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=p*c-h,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,h=a*l,v=a*c;e[0]=l*u,e[4]=v-f*d,e[8]=h*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*d+h,e[10]=f-v*d}else if(t.order==="XZY"){const f=o*l,p=o*c,h=a*l,v=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+v,e[5]=o*u,e[9]=p*d-h,e[2]=h*d-p,e[6]=a*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_h,t,vh)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),bn.crossVectors(n,Fe),bn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),bn.crossVectors(n,Fe)),bn.normalize(),rs.crossVectors(Fe,bn),i[0]=bn.x,i[4]=rs.x,i[8]=Fe.x,i[1]=bn.y,i[5]=rs.y,i[9]=Fe.y,i[2]=bn.z,i[6]=rs.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],h=n[2],v=n[6],g=n[10],m=n[14],R=n[3],x=n[7],_=n[11],P=n[15],L=i[0],I=i[4],U=i[8],S=i[12],y=i[1],D=i[5],O=i[9],F=i[13],q=i[2],H=i[6],k=i[10],K=i[14],X=i[3],ht=i[7],A=i[11],w=i[15];return r[0]=o*L+a*y+l*q+c*X,r[4]=o*I+a*D+l*H+c*ht,r[8]=o*U+a*O+l*k+c*A,r[12]=o*S+a*F+l*K+c*w,r[1]=u*L+d*y+f*q+p*X,r[5]=u*I+d*D+f*H+p*ht,r[9]=u*U+d*O+f*k+p*A,r[13]=u*S+d*F+f*K+p*w,r[2]=h*L+v*y+g*q+m*X,r[6]=h*I+v*D+g*H+m*ht,r[10]=h*U+v*O+g*k+m*A,r[14]=h*S+v*F+g*K+m*w,r[3]=R*L+x*y+_*q+P*X,r[7]=R*I+x*D+_*H+P*ht,r[11]=R*U+x*O+_*k+P*A,r[15]=R*S+x*F+_*K+P*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],h=t[3],v=t[7],g=t[11],m=t[15];return h*(+r*l*d-i*c*d-r*a*f+n*c*f+i*a*p-n*l*p)+v*(+e*l*p-e*c*f+r*o*f-i*o*p+i*c*u-r*l*u)+g*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*u-n*c*u)+m*(-i*a*u-e*l*d+e*a*f+i*o*d-n*o*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],h=t[12],v=t[13],g=t[14],m=t[15],R=d*g*c-v*f*c+v*l*p-a*g*p-d*l*m+a*f*m,x=h*f*c-u*g*c-h*l*p+o*g*p+u*l*m-o*f*m,_=u*v*c-h*d*c+h*a*p-o*v*p-u*a*m+o*d*m,P=h*d*l-u*v*l-h*a*f+o*v*f+u*a*g-o*d*g,L=e*R+n*x+i*_+r*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=R*I,t[1]=(v*f*r-d*g*r-v*i*p+n*g*p+d*i*m-n*f*m)*I,t[2]=(a*g*r-v*l*r+v*i*c-n*g*c-a*i*m+n*l*m)*I,t[3]=(d*l*r-a*f*r-d*i*c+n*f*c+a*i*p-n*l*p)*I,t[4]=x*I,t[5]=(u*g*r-h*f*r+h*i*p-e*g*p-u*i*m+e*f*m)*I,t[6]=(h*l*r-o*g*r-h*i*c+e*g*c+o*i*m-e*l*m)*I,t[7]=(o*f*r-u*l*r+u*i*c-e*f*c-o*i*p+e*l*p)*I,t[8]=_*I,t[9]=(h*d*r-u*v*r-h*n*p+e*v*p+u*n*m-e*d*m)*I,t[10]=(o*v*r-h*a*r+h*n*c-e*v*c-o*n*m+e*a*m)*I,t[11]=(u*a*r-o*d*r-u*n*c+e*d*c+o*n*p-e*a*p)*I,t[12]=P*I,t[13]=(u*v*i-h*d*i+h*n*f-e*v*f-u*n*g+e*d*g)*I,t[14]=(h*a*i-o*v*i-h*n*l+e*v*l+o*n*g-e*a*g)*I,t[15]=(o*d*i-u*a*i+u*n*l-e*d*l-o*n*f+e*a*f)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,p=r*u,h=r*d,v=o*u,g=o*d,m=a*d,R=l*c,x=l*u,_=l*d,P=n.x,L=n.y,I=n.z;return i[0]=(1-(v+m))*P,i[1]=(p+_)*P,i[2]=(h-x)*P,i[3]=0,i[4]=(p-_)*L,i[5]=(1-(f+m))*L,i[6]=(g+R)*L,i[7]=0,i[8]=(h+x)*I,i[9]=(g-R)*I,i[10]=(1-(f+v))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=si.set(i[0],i[1],i[2]).length();const o=si.set(i[4],i[5],i[6]).length(),a=si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],je.copy(this);const c=1/r,u=1/o,d=1/a;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=u,je.elements[5]*=u,je.elements[6]*=u,je.elements[8]*=d,je.elements[9]*=d,je.elements[10]*=d,e.setFromRotationMatrix(je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=gn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let p,h;if(a===gn)p=-(o+r)/(o-r),h=-2*o*r/(o-r);else if(a===Us)p=-o/(o-r),h=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=h,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=gn){const l=this.elements,c=1/(e-t),u=1/(n-i),d=1/(o-r),f=(e+t)*c,p=(n+i)*u;let h,v;if(a===gn)h=(o+r)*d,v=-2*d;else if(a===Us)h=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-h,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const si=new b,je=new oe,_h=new b(0,0,0),vh=new b(1,1,1),bn=new b,rs=new b,Fe=new b,sa=new oe,ra=new We;class tn{constructor(t=0,e=0,n=0,i=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ra.setFromEuler(this),this.setFromQuaternion(ra,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class wo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xh=0;const oa=new b,ri=new We,hn=new oe,os=new b,Ui=new b,yh=new b,Mh=new We,aa=new b(1,0,0),la=new b(0,1,0),ca=new b(0,0,1),ha={type:"added"},Sh={type:"removed"},oi={type:"childadded",child:null},er={type:"childremoved",child:null};class ve extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new b,e=new tn,n=new We,i=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Vt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(aa,t)}rotateY(t){return this.rotateOnAxis(la,t)}rotateZ(t){return this.rotateOnAxis(ca,t)}translateOnAxis(t,e){return oa.copy(t).applyQuaternion(this.quaternion),this.position.add(oa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(aa,t)}translateY(t){return this.translateOnAxis(la,t)}translateZ(t){return this.translateOnAxis(ca,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?os.copy(t):os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Ui,os,this.up):hn.lookAt(os,Ui,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),ri.setFromRotationMatrix(hn),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ha),oi.child=t,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sh),er.child=t,this.dispatchEvent(er),er.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ha),oi.child=t,this.dispatchEvent(oi),oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,t,yh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,Mh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),h=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),h.length>0&&(n.nodes=h)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ve.DEFAULT_UP=new b(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new b,un=new b,nr=new b,dn=new b,ai=new b,li=new b,ua=new b,ir=new b,sr=new b,rr=new b,or=new ue,ar=new ue,lr=new ue;class Ze{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Je.subVectors(t,e),i.cross(Je);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Je.subVectors(i,e),un.subVectors(n,e),nr.subVectors(t,e);const o=Je.dot(Je),a=Je.dot(un),l=Je.dot(nr),c=un.dot(un),u=un.dot(nr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,h=(o*u-a*l)*f;return r.set(1-p-h,h,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return or.setScalar(0),ar.setScalar(0),lr.setScalar(0),or.fromBufferAttribute(t,e),ar.fromBufferAttribute(t,n),lr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(or,r.x),o.addScaledVector(ar,r.y),o.addScaledVector(lr,r.z),o}static isFrontFacing(t,e,n,i){return Je.subVectors(n,e),un.subVectors(t,e),Je.cross(un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Je.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ai.subVectors(i,n),li.subVectors(r,n),ir.subVectors(t,n);const l=ai.dot(ir),c=li.dot(ir);if(l<=0&&c<=0)return e.copy(n);sr.subVectors(t,i);const u=ai.dot(sr),d=li.dot(sr);if(u>=0&&d<=u)return e.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ai,o);rr.subVectors(t,r);const p=ai.dot(rr),h=li.dot(rr);if(h>=0&&p<=h)return e.copy(r);const v=p*c-l*h;if(v<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(li,a);const g=u*h-p*d;if(g<=0&&d-u>=0&&p-h>=0)return ua.subVectors(r,i),a=(d-u)/(d-u+(p-h)),e.copy(i).addScaledVector(ua,a);const m=1/(g+v+f);return o=v*m,a=f*m,e.copy(n).addScaledVector(ai,o).addScaledVector(li,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},as={h:0,s:0,l:0};function cr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Eo(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=cr(o,r,t+1/3),this.g=cr(o,r,t),this.b=cr(o,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=Tl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vn(t.r),this.g=vn(t.g),this.b=vn(t.b),this}copyLinearToSRGB(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return $t.fromWorkingColorSpace(be.copy(this),t),Math.round(Gt(be.r*255,0,255))*65536+Math.round(Gt(be.g*255,0,255))*256+Math.round(Gt(be.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,r=be.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Ge){$t.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(as);const n=ki(En.h,as.h,e),i=ki(En.s,as.s,e),r=ki(En.l,as.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Xt;Xt.NAMES=Tl;let bh=0;class Ci extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=vi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ar,this.blendDst=Rr,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ar&&(n.blendSrc=this.blendSrc),this.blendDst!==Rr&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oe extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new b,ls=new mt;let Eh=0;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$o,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ls.fromBufferAttribute(this,e),ls.applyMatrix3(t),this.setXY(e,ls.x,ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$o&&(t.usage=this.usage),t}}class wl extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Al extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Th=0;const ke=new oe,hr=new ve,ci=new b,Ne=new Zi,Fi=new Zi,_e=new b;class ye extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bl(t)?Al:wl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return hr.lookAt(t),hr.updateMatrix(),this.applyMatrix4(hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Fi.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(Ne.min,Fi.min),Ne.expandByPoint(_e),_e.addVectors(Ne.max,Fi.max),Ne.expandByPoint(_e)):(Ne.expandByPoint(Fi.min),Ne.expandByPoint(Fi.max))}Ne.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)_e.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_e.fromBufferAttribute(a,c),l&&(ci.fromBufferAttribute(t,c),_e.add(ci)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new b,l[U]=new b;const c=new b,u=new b,d=new b,f=new mt,p=new mt,h=new mt,v=new b,g=new b;function m(U,S,y){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,S),h.fromBufferAttribute(r,y),u.sub(c),d.sub(c),p.sub(f),h.sub(f);const D=1/(p.x*h.y-h.x*p.y);isFinite(D)&&(v.copy(u).multiplyScalar(h.y).addScaledVector(d,-p.y).multiplyScalar(D),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-h.x).multiplyScalar(D),a[U].add(v),a[S].add(v),a[y].add(v),l[U].add(g),l[S].add(g),l[y].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let U=0,S=R.length;U<S;++U){const y=R[U],D=y.start,O=y.count;for(let F=D,q=D+O;F<q;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new b,_=new b,P=new b,L=new b;function I(U){P.fromBufferAttribute(i,U),L.copy(P);const S=a[U];x.copy(S),x.sub(P.multiplyScalar(P.dot(S))).normalize(),_.crossVectors(L,S);const D=_.dot(l[U])<0?-1:1;o.setXYZW(U,x.x,x.y,x.z,D)}for(let U=0,S=R.length;U<S;++U){const y=R[U],D=y.start,O=y.count;for(let F=D,q=D+O;F<q;F+=3)I(t.getX(F+0)),I(t.getX(F+1)),I(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new b,r=new b,o=new b,a=new b,l=new b,c=new b,u=new b,d=new b;if(t)for(let f=0,p=t.count;f<p;f+=3){const h=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,h),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,h),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(h,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,h=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let m=0;m<u;m++)f[h++]=c[p++]}return new Qe(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const da=new oe,Nn=new Vs,cs=new ks,fa=new b,hs=new b,us=new b,ds=new b,ur=new b,fs=new b,pa=new b,ps=new b;class xt extends ve{constructor(t=new ye,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(ur.fromBufferAttribute(d,t),o?fs.addScaledVector(ur,u):fs.addScaledVector(ur.sub(e),u))}e.add(fs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(cs.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(cs,fa)===null||Nn.origin.distanceToSquared(fa)>(t.far-t.near)**2))&&(da.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(da),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let h=0,v=f.length;h<v;h++){const g=f[h],m=o[g.materialIndex],R=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=R,P=x;_<P;_+=3){const L=a.getX(_),I=a.getX(_+1),U=a.getX(_+2);i=ms(this,m,t,n,c,u,d,L,I,U),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const h=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=h,m=v;g<m;g+=3){const R=a.getX(g),x=a.getX(g+1),_=a.getX(g+2);i=ms(this,o,t,n,c,u,d,R,x,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let h=0,v=f.length;h<v;h++){const g=f[h],m=o[g.materialIndex],R=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=R,P=x;_<P;_+=3){const L=_,I=_+1,U=_+2;i=ms(this,m,t,n,c,u,d,L,I,U),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const h=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=h,m=v;g<m;g+=3){const R=g,x=g+1,_=g+2;i=ms(this,o,t,n,c,u,d,R,x,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function wh(s,t,e,n,i,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Pn,a),l===null)return null;ps.copy(a),ps.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ps);return c<e.near||c>e.far?null:{distance:c,point:ps.clone(),object:s}}function ms(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,hs),s.getVertexPosition(l,us),s.getVertexPosition(c,ds);const u=wh(s,t,e,n,hs,us,ds,pa);if(u){const d=new b;Ze.getBarycoord(pa,hs,us,ds,d),i&&(u.uv=Ze.getInterpolatedAttribute(i,a,l,c,d,new mt)),r&&(u.uv1=Ze.getInterpolatedAttribute(r,a,l,c,d,new mt)),o&&(u.normal=Ze.getInterpolatedAttribute(o,a,l,c,d,new b),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new b,materialIndex:0};Ze.getNormal(hs,us,ds,f.normal),u.face=f,u.barycoord=d}return u}class jn extends ye{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;h("z","y","x",-1,-1,n,e,t,o,r,0),h("z","y","x",1,-1,n,e,-t,o,r,1),h("x","z","y",1,1,t,n,e,i,o,2),h("x","z","y",1,-1,t,n,-e,i,o,3),h("x","y","z",1,-1,t,e,n,i,r,4),h("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(d,2));function h(v,g,m,R,x,_,P,L,I,U,S){const y=_/I,D=P/U,O=_/2,F=P/2,q=L/2,H=I+1,k=U+1;let K=0,X=0;const ht=new b;for(let A=0;A<k;A++){const w=A*D-F;for(let Y=0;Y<H;Y++){const nt=Y*y-O;ht[v]=nt*R,ht[g]=w*x,ht[m]=q,c.push(ht.x,ht.y,ht.z),ht[v]=0,ht[g]=0,ht[m]=L>0?1:-1,u.push(ht.x,ht.y,ht.z),d.push(Y/I),d.push(1-A/U),K+=1}}for(let A=0;A<U;A++)for(let w=0;w<I;w++){const Y=f+w+H*A,nt=f+w+H*(A+1),N=f+(w+1)+H*(A+1),G=f+(w+1)+H*A;l.push(Y,nt,G),l.push(nt,N,G),X+=6}a.addGroup(p,X,S),p+=X,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ri(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ae(s){const t={};for(let e=0;e<s.length;e++){const n=Ri(s[e]);for(const i in n)t[i]=n[i]}return t}function Ah(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Rl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Rh={clone:Ri,merge:Ae};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=Ah(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cl extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new b,ma=new mt,ga=new mt;class He extends Cl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,ma,ga),e.subVectors(ga,ma)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hi=-90,ui=1;class Lh extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new He(hi,ui,t,e);i.layers=this.layers,this.add(i);const r=new He(hi,ui,t,e);r.layers=this.layers,this.add(r);const o=new He(hi,ui,t,e);o.layers=this.layers,this.add(o);const a=new He(hi,ui,t,e);a.layers=this.layers,this.add(a);const l=new He(hi,ui,t,e);l.layers=this.layers,this.add(l);const c=new He(hi,ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),h=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Pl extends Ce{constructor(t,e,n,i,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:bi,super(t,e,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ih extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jn(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:An});r.uniforms.tEquirect.value=e;const o=new xt(i,r),a=e.minFilter;return e.minFilter===qn&&(e.minFilter=sn),new Lh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class se extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dh={type:"move"};class dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,h=.005;c.inputState.pinching&&f>p+h?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-h&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dh)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ao{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(t),this.density=e}clone(){return new Ao(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uh extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const fr=new b,Fh=new b,Nh=new Vt;class pn{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fr.subVectors(n,e).cross(Fh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nh.getNormalMatrix(t),i=this.coplanarPoint(fr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new ks,gs=new b;class Ro{constructor(t=new pn,e=new pn,n=new pn,i=new pn,r=new pn,o=new pn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],p=i[8],h=i[9],v=i[10],g=i[11],m=i[12],R=i[13],x=i[14],_=i[15];if(n[0].setComponents(l-r,f-c,g-p,_-m).normalize(),n[1].setComponents(l+r,f+c,g+p,_+m).normalize(),n[2].setComponents(l+o,f+u,g+h,_+R).normalize(),n[3].setComponents(l-o,f-u,g-h,_-R).normalize(),n[4].setComponents(l-a,f-d,g-v,_-x).normalize(),e===gn)n[5].setComponents(l+a,f+d,g+v,_+x).normalize();else if(e===Us)n[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(gs.x=i.normal.x>0?t.max.x:t.min.x,gs.y=i.normal.y>0?t.max.y:t.min.y,gs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Co extends Ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ns=new b,Os=new b,_a=new oe,Ni=new Vs,_s=new ks,pr=new b,va=new b;class Ll extends ve{constructor(t=new ye,e=new Co){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ns.fromBufferAttribute(e,i-1),Os.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ns.distanceTo(Os);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),_s.radius+=r,t.ray.intersectsSphere(_s)===!1)return;_a.copy(i).invert(),Ni.copy(t.ray).applyMatrix4(_a);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),h=Math.min(u.count,o.start+o.count);for(let v=p,g=h-1;v<g;v+=c){const m=u.getX(v),R=u.getX(v+1),x=vs(this,t,Ni,l,m,R,v);x&&e.push(x)}if(this.isLineLoop){const v=u.getX(h-1),g=u.getX(p),m=vs(this,t,Ni,l,v,g,h-1);m&&e.push(m)}}else{const p=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let v=p,g=h-1;v<g;v+=c){const m=vs(this,t,Ni,l,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){const v=vs(this,t,Ni,l,h-1,p,h-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vs(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Ns.fromBufferAttribute(a,i),Os.fromBufferAttribute(a,r),e.distanceSqToSegment(Ns,Os,pr,va)>n)return;pr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(pr);if(!(c<t.near||c>t.far))return{distance:c,point:va.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const xa=new b,ya=new b;class Oh extends Ll{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)xa.fromBufferAttribute(e,i),ya.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xa.distanceTo(ya);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Il extends Ce{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dl extends Ce{constructor(t,e,n,i,r,o,a,l,c,u=xi){if(u!==xi&&u!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xi&&(n=Xn),n===void 0&&u===wi&&(n=Ti),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new To(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,p=(o-u)/f;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new mt:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new b,i=[],r=[],o=[],a=new b,l=new oe;for(let p=0;p<=t;p++){const h=p/t;i[p]=this.getTangentAt(h,new b)}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const h=Math.acos(Gt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,h))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Gt(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let h=1;h<=t;h++)r[h].applyMatrix4(l.makeRotationAxis(i[h],p*h)),o[h].crossVectors(i[h],r[h])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Po extends on{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bh extends Po{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Lo(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,i(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const xs=new b,mr=new Lo,gr=new Lo,_r=new Lo;class Ul extends on{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new b){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(xs.subVectors(i[0],i[1]).add(i[0]),c=xs);const d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(xs.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=xs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let h=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(u),p);v<1e-4&&(v=1),h<1e-4&&(h=v),g<1e-4&&(g=v),mr.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,h,v,g),gr.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,h,v,g),_r.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,h,v,g)}else this.curveType==="catmullrom"&&(mr.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),gr.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),_r.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set(mr.calc(l),gr.calc(l),_r.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new b().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ma(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function zh(s,t){const e=1-s;return e*e*t}function kh(s,t){return 2*(1-s)*s*t}function Vh(s,t){return s*s*t}function Vi(s,t,e,n){return zh(s,t)+kh(s,e)+Vh(s,n)}function Gh(s,t){const e=1-s;return e*e*e*t}function Hh(s,t){const e=1-s;return 3*e*e*s*t}function Wh(s,t){return 3*(1-s)*s*s*t}function qh(s,t){return s*s*s*t}function Gi(s,t,e,n,i){return Gh(s,t)+Hh(s,e)+Wh(s,n)+qh(s,i)}class Fl extends on{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gi(t,i.x,r.x,o.x,a.x),Gi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xh extends on{constructor(t=new b,e=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new b){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gi(t,i.x,r.x,o.x,a.x),Gi(t,i.y,r.y,o.y,a.y),Gi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nl extends on{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yh extends on{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ol extends on{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Vi(t,i.x,r.x,o.x),Vi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bl extends on{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Vi(t,i.x,r.x,o.x),Vi(t,i.y,r.y,o.y),Vi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zl extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Ma(a,l.x,c.x,u.x,d.x),Ma(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new mt().fromArray(i))}return this}}var Bs=Object.freeze({__proto__:null,ArcCurve:Bh,CatmullRomCurve3:Ul,CubicBezierCurve:Fl,CubicBezierCurve3:Xh,EllipseCurve:Po,LineCurve:Nl,LineCurve3:Yh,QuadraticBezierCurve:Ol,QuadraticBezierCurve3:Bl,SplineCurve:zl});class jh extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bs[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Bs[i.type]().fromJSON(i))}return this}}class Sa extends jh{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Nl(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Ol(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Fl(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Po(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Io extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new b,u=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=n+d/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Zt extends ye{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],f=[],p=[];let h=0;const v=[],g=n/2;let m=0;R(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(p,2));function R(){const _=new b,P=new b;let L=0;const I=(e-t)/n;for(let U=0;U<=r;U++){const S=[],y=U/r,D=y*(e-t)+t;for(let O=0;O<=i;O++){const F=O/i,q=F*l+a,H=Math.sin(q),k=Math.cos(q);P.x=D*H,P.y=-y*n+g,P.z=D*k,d.push(P.x,P.y,P.z),_.set(H,I,k).normalize(),f.push(_.x,_.y,_.z),p.push(F,1-y),S.push(h++)}v.push(S)}for(let U=0;U<i;U++)for(let S=0;S<r;S++){const y=v[S][U],D=v[S+1][U],O=v[S+1][U+1],F=v[S][U+1];(t>0||S!==0)&&(u.push(y,D,F),L+=3),(e>0||S!==r-1)&&(u.push(D,O,F),L+=3)}c.addGroup(m,L,0),m+=L}function x(_){const P=h,L=new mt,I=new b;let U=0;const S=_===!0?t:e,y=_===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,g*y,0),f.push(0,y,0),p.push(.5,.5),h++;const D=h;for(let O=0;O<=i;O++){const q=O/i*l+a,H=Math.cos(q),k=Math.sin(q);I.x=S*k,I.y=g*y,I.z=S*H,d.push(I.x,I.y,I.z),f.push(0,y,0),L.x=H*.5+.5,L.y=k*.5*y+.5,p.push(L.x,L.y),h++}for(let O=0;O<i;O++){const F=P+O,q=D+O;_===!0?u.push(q,q+1,F):u.push(q+1,q,F),U+=3}c.addGroup(m,U,_===!0?1:2),m+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Do extends Zt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Do(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kl extends Sa{constructor(t){super(t),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Sa().fromJSON(i))}return this}}class Jh{static triangulate(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let o=Vl(t,0,r,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,u,d,f,p,h;if(i&&(o=tu(t,e,o,n)),t.length>80*n){l=u=t[0],c=d=t[1];for(let v=n;v<r;v+=n)f=t[v],p=t[v+1],f<l&&(l=f),p<c&&(c=p),f>u&&(u=f),p>d&&(d=p);h=Math.max(u-l,d-c),h=h!==0?32767/h:0}return Xi(o,a,n,l,c,h,0),a}}function Vl(s,t,e,n,i){let r,o;if(i===uu(s,t,e,n)>0)for(r=t;r<e;r+=n)o=ba(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=ba(r,s[r],s[r+1],o);return o&&Gs(o,o.next)&&(ji(o),o=o.next),o}function Jn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Gs(e,e.next)||le(e.prev,e,e.next)===0)){if(ji(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xi(s,t,e,n,i,r,o){if(!s)return;!o&&r&&ru(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?$h(s,n,i,r):Zh(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),ji(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Kh(Jn(s),t,e),Xi(s,t,e,n,i,r,2)):o===2&&Qh(s,t,e,n,i,r):Xi(Jn(s),t,e,n,i,r,1);break}}}function Zh(s){const t=s.prev,e=s,n=s.next;if(le(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let h=n.next;for(;h!==t;){if(h.x>=u&&h.x<=f&&h.y>=d&&h.y<=p&&gi(i,a,r,l,o,c,h.x,h.y)&&le(h.prev,h,h.next)>=0)return!1;h=h.next}return!0}function $h(s,t,e,n){const i=s.prev,r=s,o=s.next;if(le(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,d=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,h=u<d?u<f?u:f:d<f?d:f,v=a>l?a>c?a:c:l>c?l:c,g=u>d?u>f?u:f:d>f?d:f,m=fo(p,h,t,e,n),R=fo(v,g,t,e,n);let x=s.prevZ,_=s.nextZ;for(;x&&x.z>=m&&_&&_.z<=R;){if(x.x>=p&&x.x<=v&&x.y>=h&&x.y<=g&&x!==i&&x!==o&&gi(a,u,l,d,c,f,x.x,x.y)&&le(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=p&&_.x<=v&&_.y>=h&&_.y<=g&&_!==i&&_!==o&&gi(a,u,l,d,c,f,_.x,_.y)&&le(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=m;){if(x.x>=p&&x.x<=v&&x.y>=h&&x.y<=g&&x!==i&&x!==o&&gi(a,u,l,d,c,f,x.x,x.y)&&le(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=R;){if(_.x>=p&&_.x<=v&&_.y>=h&&_.y<=g&&_!==i&&_!==o&&gi(a,u,l,d,c,f,_.x,_.y)&&le(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Kh(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Gs(i,r)&&Gl(i,n,n.next,r)&&Yi(i,r)&&Yi(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ji(n),ji(n.next),n=s=r),n=n.next}while(n!==s);return Jn(n)}function Qh(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lu(o,a)){let l=Hl(o,a);o=Jn(o,o.next),l=Jn(l,l.next),Xi(o,t,e,n,i,r,0),Xi(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function tu(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Vl(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(au(c));for(i.sort(eu),r=0;r<i.length;r++)e=nu(i[r],e);return e}function eu(s,t){return s.x-t.x}function nu(s,t){const e=iu(s,t);if(!e)return t;const n=Hl(e,s);return Jn(n,n.next),Jn(e,e.next)}function iu(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,d;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&gi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Yi(e,s)&&(d<u||d===u&&(e.x>i.x||e.x===i.x&&su(i,e)))&&(i=e,u=d)),e=e.next;while(e!==a);return i}function su(s,t){return le(s.prev,s,t.prev)<0&&le(t.next,s,s.next)<0}function ru(s,t,e,n){let i=s;do i.z===0&&(i.z=fo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ou(i)}function ou(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function fo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function au(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function gi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function lu(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!cu(s,t)&&(Yi(s,t)&&Yi(t,s)&&hu(s,t)&&(le(s.prev,s,t.prev)||le(s,t.prev,t))||Gs(s,t)&&le(s.prev,s,s.next)>0&&le(t.prev,t,t.next)>0)}function le(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Gs(s,t){return s.x===t.x&&s.y===t.y}function Gl(s,t,e,n){const i=Ms(le(s,t,e)),r=Ms(le(s,t,n)),o=Ms(le(e,n,s)),a=Ms(le(e,n,t));return!!(i!==r&&o!==a||i===0&&ys(s,e,t)||r===0&&ys(s,n,t)||o===0&&ys(e,s,n)||a===0&&ys(e,t,n))}function ys(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ms(s){return s>0?1:s<0?-1:0}function cu(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Gl(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Yi(s,t){return le(s.prev,s,s.next)<0?le(s,t,s.next)>=0&&le(s,s.prev,t)>=0:le(s,t,s.prev)<0||le(s,s.next,t)<0}function hu(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Hl(s,t){const e=new po(s.i,s.x,s.y),n=new po(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ba(s,t,e,n){const i=new po(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ji(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function po(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uu(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Hi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Hi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Ea(t),Ta(n,t);let o=t.length;e.forEach(Ea);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Ta(n,e[l]);const a=Jh.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ea(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ta(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Uo extends ye{constructor(t=new kl([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Kt(i,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,h=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:du;let x,_=!1,P,L,I,U;m&&(x=m.getSpacedPoints(u),_=!0,f=!1,P=m.computeFrenetFrames(u,!1),L=new b,I=new b,U=new b),f||(g=0,p=0,h=0,v=0);const S=a.extractPoints(c);let y=S.shape;const D=S.holes;if(!Hi.isClockWise(y)){y=y.reverse();for(let tt=0,Q=D.length;tt<Q;tt++){const T=D[tt];Hi.isClockWise(T)&&(D[tt]=T.reverse())}}const F=Hi.triangulateShape(y,D),q=y;for(let tt=0,Q=D.length;tt<Q;tt++){const T=D[tt];y=y.concat(T)}function H(tt,Q,T){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(Q,T)}const k=y.length,K=F.length;function X(tt,Q,T){let gt,at,_t;const ot=tt.x-Q.x,bt=tt.y-Q.y,ut=T.x-tt.x,C=T.y-tt.y,M=ot*ot+bt*bt,j=ot*C-bt*ut;if(Math.abs(j)>Number.EPSILON){const it=Math.sqrt(M),ct=Math.sqrt(ut*ut+C*C),st=Q.x-bt/it,Dt=Q.y+ot/it,Mt=T.x-C/ct,At=T.y+ut/ct,qt=((Mt-st)*C-(At-Dt)*ut)/(ot*C-bt*ut);gt=st+ot*qt-tt.x,at=Dt+bt*qt-tt.y;const ft=gt*gt+at*at;if(ft<=2)return new mt(gt,at);_t=Math.sqrt(ft/2)}else{let it=!1;ot>Number.EPSILON?ut>Number.EPSILON&&(it=!0):ot<-Number.EPSILON?ut<-Number.EPSILON&&(it=!0):Math.sign(bt)===Math.sign(C)&&(it=!0),it?(gt=-bt,at=ot,_t=Math.sqrt(M)):(gt=ot,at=bt,_t=Math.sqrt(M/2))}return new mt(gt/_t,at/_t)}const ht=[];for(let tt=0,Q=q.length,T=Q-1,gt=tt+1;tt<Q;tt++,T++,gt++)T===Q&&(T=0),gt===Q&&(gt=0),ht[tt]=X(q[tt],q[T],q[gt]);const A=[];let w,Y=ht.concat();for(let tt=0,Q=D.length;tt<Q;tt++){const T=D[tt];w=[];for(let gt=0,at=T.length,_t=at-1,ot=gt+1;gt<at;gt++,_t++,ot++)_t===at&&(_t=0),ot===at&&(ot=0),w[gt]=X(T[gt],T[_t],T[ot]);A.push(w),Y=Y.concat(w)}for(let tt=0;tt<g;tt++){const Q=tt/g,T=p*Math.cos(Q*Math.PI/2),gt=h*Math.sin(Q*Math.PI/2)+v;for(let at=0,_t=q.length;at<_t;at++){const ot=H(q[at],ht[at],gt);W(ot.x,ot.y,-T)}for(let at=0,_t=D.length;at<_t;at++){const ot=D[at];w=A[at];for(let bt=0,ut=ot.length;bt<ut;bt++){const C=H(ot[bt],w[bt],gt);W(C.x,C.y,-T)}}}const nt=h+v;for(let tt=0;tt<k;tt++){const Q=f?H(y[tt],Y[tt],nt):y[tt];_?(I.copy(P.normals[0]).multiplyScalar(Q.x),L.copy(P.binormals[0]).multiplyScalar(Q.y),U.copy(x[0]).add(I).add(L),W(U.x,U.y,U.z)):W(Q.x,Q.y,0)}for(let tt=1;tt<=u;tt++)for(let Q=0;Q<k;Q++){const T=f?H(y[Q],Y[Q],nt):y[Q];_?(I.copy(P.normals[tt]).multiplyScalar(T.x),L.copy(P.binormals[tt]).multiplyScalar(T.y),U.copy(x[tt]).add(I).add(L),W(U.x,U.y,U.z)):W(T.x,T.y,d/u*tt)}for(let tt=g-1;tt>=0;tt--){const Q=tt/g,T=p*Math.cos(Q*Math.PI/2),gt=h*Math.sin(Q*Math.PI/2)+v;for(let at=0,_t=q.length;at<_t;at++){const ot=H(q[at],ht[at],gt);W(ot.x,ot.y,d+T)}for(let at=0,_t=D.length;at<_t;at++){const ot=D[at];w=A[at];for(let bt=0,ut=ot.length;bt<ut;bt++){const C=H(ot[bt],w[bt],gt);_?W(C.x,C.y+x[u-1].y,x[u-1].x+T):W(C.x,C.y,d+T)}}}N(),G();function N(){const tt=i.length/3;if(f){let Q=0,T=k*Q;for(let gt=0;gt<K;gt++){const at=F[gt];rt(at[2]+T,at[1]+T,at[0]+T)}Q=u+g*2,T=k*Q;for(let gt=0;gt<K;gt++){const at=F[gt];rt(at[0]+T,at[1]+T,at[2]+T)}}else{for(let Q=0;Q<K;Q++){const T=F[Q];rt(T[2],T[1],T[0])}for(let Q=0;Q<K;Q++){const T=F[Q];rt(T[0]+k*u,T[1]+k*u,T[2]+k*u)}}n.addGroup(tt,i.length/3-tt,0)}function G(){const tt=i.length/3;let Q=0;Z(q,Q),Q+=q.length;for(let T=0,gt=D.length;T<gt;T++){const at=D[T];Z(at,Q),Q+=at.length}n.addGroup(tt,i.length/3-tt,1)}function Z(tt,Q){let T=tt.length;for(;--T>=0;){const gt=T;let at=T-1;at<0&&(at=tt.length-1);for(let _t=0,ot=u+g*2;_t<ot;_t++){const bt=k*_t,ut=k*(_t+1),C=Q+gt+bt,M=Q+at+bt,j=Q+at+ut,it=Q+gt+ut;vt(C,M,j,it)}}}function W(tt,Q,T){l.push(tt),l.push(Q),l.push(T)}function rt(tt,Q,T){dt(tt),dt(Q),dt(T);const gt=i.length/3,at=R.generateTopUV(n,i,gt-3,gt-2,gt-1);yt(at[0]),yt(at[1]),yt(at[2])}function vt(tt,Q,T,gt){dt(tt),dt(Q),dt(gt),dt(Q),dt(T),dt(gt);const at=i.length/3,_t=R.generateSideWallUV(n,i,at-6,at-3,at-2,at-1);yt(_t[0]),yt(_t[1]),yt(_t[3]),yt(_t[1]),yt(_t[2]),yt(_t[3])}function dt(tt){i.push(l[tt*3+0]),i.push(l[tt*3+1]),i.push(l[tt*3+2])}function yt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return fu(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Bs[i.type]().fromJSON(i)),new Uo(n,t.options)}}const du={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new mt(r,o),new mt(a,l),new mt(c,u)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],f=t[i*3],p=t[i*3+1],h=t[i*3+2],v=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-d),new mt(f,1-h),new mt(v,1-m)]:[new mt(a,1-l),new mt(u,1-d),new mt(p,1-h),new mt(g,1-m)]}};function fu(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class rn extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=t/a,f=e/l,p=[],h=[],v=[],g=[];for(let m=0;m<u;m++){const R=m*f-o;for(let x=0;x<c;x++){const _=x*d-r;h.push(_,-R,0),v.push(0,0,1),g.push(x/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let R=0;R<a;R++){const x=R+c*m,_=R+c*(m+1),P=R+1+c*(m+1),L=R+1+c*m;p.push(x,_,L),p.push(_,P,L)}this.setIndex(p),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mi extends ye{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let d=t;const f=(e-t)/i,p=new b,h=new mt;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const m=r+g/n*o;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),h.x=(p.x/e+1)/2,h.y=(p.y/e+1)/2,u.push(h.x,h.y)}d+=f}for(let v=0;v<i;v++){const g=v*(n+1);for(let m=0;m<n;m++){const R=m+g,x=R,_=R+n+1,P=R+n+2,L=R+1;a.push(x,_,L),a.push(_,P,L)}}this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Cn extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new b,f=new b,p=[],h=[],v=[],g=[];for(let m=0;m<=n;m++){const R=[],x=m/n;let _=0;m===0&&o===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let P=0;P<=e;P++){const L=P/e;d.x=-t*Math.cos(i+L*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(i+L*r)*Math.sin(o+x*a),h.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),g.push(L+_,1-x),R.push(c++)}u.push(R)}for(let m=0;m<n;m++)for(let R=0;R<e;R++){const x=u[m][R+1],_=u[m][R],P=u[m+1][R],L=u[m+1][R+1];(m!==0||o>0)&&p.push(x,_,L),(m!==n-1||l<Math.PI)&&p.push(_,P,L)}this.setIndex(p),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class en extends ye{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new b,d=new b,f=new b;for(let p=0;p<=n;p++)for(let h=0;h<=i;h++){const v=h/i*r,g=p/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(h/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let h=1;h<=i;h++){const v=(i+1)*p+h-1,g=(i+1)*(p-1)+h-1,m=(i+1)*(p-1)+h,R=(i+1)*p+h;o.push(v,g,R),o.push(g,m,R)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Fo extends ye{constructor(t=new Bl(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new b,l=new b,c=new mt;let u=new b;const d=[],f=[],p=[],h=[];v(),this.setIndex(h),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(p,2));function v(){for(let x=0;x<e;x++)g(x);g(r===!1?e:0),R(),m()}function g(x){u=t.getPointAt(x/e,u);const _=o.normals[x],P=o.binormals[x];for(let L=0;L<=i;L++){const I=L/i*Math.PI*2,U=Math.sin(I),S=-Math.cos(I);l.x=S*_.x+U*P.x,l.y=S*_.y+U*P.y,l.z=S*_.z+U*P.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let _=1;_<=i;_++){const P=(i+1)*(x-1)+(_-1),L=(i+1)*x+(_-1),I=(i+1)*x+_,U=(i+1)*(x-1)+_;h.push(P,L,U),h.push(L,I,U)}}function R(){for(let x=0;x<=e;x++)for(let _=0;_<=i;_++)c.x=x/e,c.y=_/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Fo(new Bs[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ie extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wl extends Ie{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class pu extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mu extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ql extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const vr=new oe,wa=new b,Aa=new b;class gu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wa.setFromMatrixPosition(t.matrixWorld),e.position.copy(wa),Aa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Aa),e.updateMatrixWorld(),vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Xl extends Cl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _u extends gu{constructor(){super(new Xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xr extends ql{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new _u}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vu extends ql{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class xu extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class yu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ra(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ra();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ra(){return performance.now()}const Ca=new oe;class Mu{constructor(t,e,n=0,i=1/0){this.ray=new Vs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ca.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ca),this}intersectObject(t,e=!0,n=[]){return mo(t,this,n,e),n.sort(Pa),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)mo(t[i],this,n,e);return n.sort(Pa),n}}function Pa(s,t){return s.distance-t.distance}function mo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)mo(r[o],t,e,!0)}}class La{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ia extends Oh{constructor(t=10,e=10,n=4473924,i=8947848){n=new Xt(n),i=new Xt(i);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,p=0,h=-a;f<=e;f++,h+=o){l.push(-a,0,h,a,0,h),l.push(h,0,-a,h,0,a);const v=f===r?n:i;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new ye;u.setAttribute("position",new Kt(l,3)),u.setAttribute("color",new Kt(c,3));const d=new Co({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Su extends Zn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Da(s,t,e,n){const i=bu(n);switch(e){case pl:return s*t;case gl:return s*t;case _l:return s*t*2;case vl:return s*t/i.components*i.byteLength;case Mo:return s*t/i.components*i.byteLength;case xl:return s*t*2/i.components*i.byteLength;case So:return s*t*2/i.components*i.byteLength;case ml:return s*t*3/i.components*i.byteLength;case $e:return s*t*4/i.components*i.byteLength;case bo:return s*t*4/i.components*i.byteLength;case As:case Rs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Cs:case Ps:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vr:case Hr:return Math.max(s,16)*Math.max(t,8)/4;case kr:case Gr:return Math.max(s,8)*Math.max(t,8)/2;case Wr:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case $r:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case to:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case eo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case no:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case io:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case so:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ro:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case oo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ls:case ao:case lo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case yl:case co:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ho:case uo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bu(s){switch(s){case xn:case ul:return{byteLength:1,components:1};case Wi:case dl:case Ji:return{byteLength:2,components:1};case xo:case yo:return{byteLength:2,components:4};case Xn:case vo:case mn:return{byteLength:4,components:1};case fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_o);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yl(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Eu(s){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,u);else{d.sort((p,h)=>p.start-h.start);let f=0;for(let p=1;p<d.length;p++){const h=d[f],v=d[p];v.start<=h.start+h.count+1?h.count=Math.max(h.count,v.start+v.count-h.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,h=d.length;p<h;p++){const v=d[p];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Tu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wu=`#ifdef USE_ALPHAHASH
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
#endif`,Au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
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
#endif`,Iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Du=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ou=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bu=`#ifdef USE_IRIDESCENCE
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
#endif`,zu=`#ifdef USE_BUMPMAP
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
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ju=`#define PI 3.141592653589793
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
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zu=`vec3 transformedNormal = objectNormal;
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
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
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
}`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gd=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sd=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,bd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Ed=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Td=`#if defined( RE_IndirectDiffuse )
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
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ud=`#if defined( USE_POINTS_UV )
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
#endif`,Fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yd=`#ifdef USE_NORMALMAP
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
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
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
#endif`,ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pf=`#ifdef USE_SKINNING
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
#endif`,mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wf=`uniform sampler2D t2D;
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`#include <common>
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
}`,If=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Df=`#define DISTANCE
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
}`,Uf=`#define DISTANCE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`uniform float scale;
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
}`,Bf=`uniform vec3 diffuse;
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
}`,zf=`#include <common>
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
}`,kf=`uniform vec3 diffuse;
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
}`,Vf=`#define LAMBERT
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
}`,Gf=`#define LAMBERT
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
}`,Hf=`#define MATCAP
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
}`,Wf=`#define MATCAP
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
}`,qf=`#define NORMAL
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
}`,Xf=`#define NORMAL
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
}`,Yf=`#define PHONG
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
}`,jf=`#define PHONG
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
}`,Jf=`#define STANDARD
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
}`,Zf=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,$f=`#define TOON
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
}`,Kf=`#define TOON
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
}`,Qf=`uniform float size;
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
}`,tp=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,np=`uniform vec3 color;
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
}`,ip=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sp=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Tu,alphahash_pars_fragment:wu,alphamap_fragment:Au,alphamap_pars_fragment:Ru,alphatest_fragment:Cu,alphatest_pars_fragment:Pu,aomap_fragment:Lu,aomap_pars_fragment:Iu,batching_pars_vertex:Du,batching_vertex:Uu,begin_vertex:Fu,beginnormal_vertex:Nu,bsdfs:Ou,iridescence_fragment:Bu,bumpmap_pars_fragment:zu,clipping_planes_fragment:ku,clipping_planes_pars_fragment:Vu,clipping_planes_pars_vertex:Gu,clipping_planes_vertex:Hu,color_fragment:Wu,color_pars_fragment:qu,color_pars_vertex:Xu,color_vertex:Yu,common:ju,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:Zu,displacementmap_pars_vertex:$u,displacementmap_vertex:Ku,emissivemap_fragment:Qu,emissivemap_pars_fragment:td,colorspace_fragment:ed,colorspace_pars_fragment:nd,envmap_fragment:id,envmap_common_pars_fragment:sd,envmap_pars_fragment:rd,envmap_pars_vertex:od,envmap_physical_pars_fragment:_d,envmap_vertex:ad,fog_vertex:ld,fog_pars_vertex:cd,fog_fragment:hd,fog_pars_fragment:ud,gradientmap_pars_fragment:dd,lightmap_pars_fragment:fd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:md,lights_pars_begin:gd,lights_toon_fragment:vd,lights_toon_pars_fragment:xd,lights_phong_fragment:yd,lights_phong_pars_fragment:Md,lights_physical_fragment:Sd,lights_physical_pars_fragment:bd,lights_fragment_begin:Ed,lights_fragment_maps:Td,lights_fragment_end:wd,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:Rd,logdepthbuf_pars_vertex:Cd,logdepthbuf_vertex:Pd,map_fragment:Ld,map_pars_fragment:Id,map_particle_fragment:Dd,map_particle_pars_fragment:Ud,metalnessmap_fragment:Fd,metalnessmap_pars_fragment:Nd,morphinstance_vertex:Od,morphcolor_vertex:Bd,morphnormal_vertex:zd,morphtarget_pars_vertex:kd,morphtarget_vertex:Vd,normal_fragment_begin:Gd,normal_fragment_maps:Hd,normal_pars_fragment:Wd,normal_pars_vertex:qd,normal_vertex:Xd,normalmap_pars_fragment:Yd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:Zd,iridescence_pars_fragment:$d,opaque_fragment:Kd,packing:Qd,premultiplied_alpha_fragment:tf,project_vertex:ef,dithering_fragment:nf,dithering_pars_fragment:sf,roughnessmap_fragment:rf,roughnessmap_pars_fragment:of,shadowmap_pars_fragment:af,shadowmap_pars_vertex:lf,shadowmap_vertex:cf,shadowmask_pars_fragment:hf,skinbase_vertex:uf,skinning_pars_vertex:df,skinning_vertex:ff,skinnormal_vertex:pf,specularmap_fragment:mf,specularmap_pars_fragment:gf,tonemapping_fragment:_f,tonemapping_pars_fragment:vf,transmission_fragment:xf,transmission_pars_fragment:yf,uv_pars_fragment:Mf,uv_pars_vertex:Sf,uv_vertex:bf,worldpos_vertex:Ef,background_vert:Tf,background_frag:wf,backgroundCube_vert:Af,backgroundCube_frag:Rf,cube_vert:Cf,cube_frag:Pf,depth_vert:Lf,depth_frag:If,distanceRGBA_vert:Df,distanceRGBA_frag:Uf,equirect_vert:Ff,equirect_frag:Nf,linedashed_vert:Of,linedashed_frag:Bf,meshbasic_vert:zf,meshbasic_frag:kf,meshlambert_vert:Vf,meshlambert_frag:Gf,meshmatcap_vert:Hf,meshmatcap_frag:Wf,meshnormal_vert:qf,meshnormal_frag:Xf,meshphong_vert:Yf,meshphong_frag:jf,meshphysical_vert:Jf,meshphysical_frag:Zf,meshtoon_vert:$f,meshtoon_frag:Kf,points_vert:Qf,points_frag:tp,shadow_vert:ep,shadow_frag:np,sprite_vert:ip,sprite_frag:sp},St={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},nn={basic:{uniforms:Ae([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ae([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ae([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ae([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ae([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ae([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ae([St.points,St.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ae([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ae([St.common,St.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ae([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ae([St.sprite,St.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ae([St.common,St.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ae([St.lights,St.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};nn.physical={uniforms:Ae([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Ss={r:0,b:0,g:0},Bn=new tn,rp=new oe;function op(s,t,e,n,i,r,o){const a=new Xt(0);let l=r===!0?0:1,c,u,d=null,f=0,p=null;function h(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const P=h(x);P===null?m(a,l):P&&P.isColor&&(m(P,1),_=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,_){const P=h(_);P&&(P.isCubeTexture||P.mapping===zs)?(u===void 0&&(u=new xt(new jn(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Ri(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Bn.copy(_.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rp.makeRotationFromEuler(Bn)),u.material.toneMapped=$t.getTransfer(P.colorSpace)!==ne,(d!==P||f!==P.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,d=P,f=P.version,p=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new xt(new rn(2,2),new Ln({name:"BackgroundMaterial",uniforms:Ri(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=$t.getTransfer(P.colorSpace)!==ne,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=P,f=P.version,p=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,_){x.getRGB(Ss,Rl(s)),n.buffers.color.setClear(Ss.r,Ss.g,Ss.b,_,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:v,addToRenderList:g,dispose:R}}function ap(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(y,D,O,F,q){let H=!1;const k=d(F,O,D);r!==k&&(r=k,c(r.object)),H=p(y,F,O,q),H&&h(y,F,O,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(y,D,O,F),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function d(y,D,O){const F=O.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let H=q[D.id];H===void 0&&(H={},q[D.id]=H);let k=H[F];return k===void 0&&(k=f(l()),H[F]=k),k}function f(y){const D=[],O=[],F=[];for(let q=0;q<e;q++)D[q]=0,O[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,D,O,F){const q=r.attributes,H=D.attributes;let k=0;const K=O.getAttributes();for(const X in K)if(K[X].location>=0){const A=q[X];let w=H[X];if(w===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(w=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(w=y.instanceColor)),A===void 0||A.attribute!==w||w&&A.data!==w.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function h(y,D,O,F){const q={},H=D.attributes;let k=0;const K=O.getAttributes();for(const X in K)if(K[X].location>=0){let A=H[X];A===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(A=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(A=y.instanceColor));const w={};w.attribute=A,A&&A.data&&(w.data=A.data),q[X]=w,k++}r.attributes=q,r.attributesNum=k,r.index=F}function v(){const y=r.newAttributes;for(let D=0,O=y.length;D<O;D++)y[D]=0}function g(y){m(y,0)}function m(y,D){const O=r.newAttributes,F=r.enabledAttributes,q=r.attributeDivisors;O[y]=1,F[y]===0&&(s.enableVertexAttribArray(y),F[y]=1),q[y]!==D&&(s.vertexAttribDivisor(y,D),q[y]=D)}function R(){const y=r.newAttributes,D=r.enabledAttributes;for(let O=0,F=D.length;O<F;O++)D[O]!==y[O]&&(s.disableVertexAttribArray(O),D[O]=0)}function x(y,D,O,F,q,H,k){k===!0?s.vertexAttribIPointer(y,D,O,q,H):s.vertexAttribPointer(y,D,O,F,q,H)}function _(y,D,O,F){v();const q=F.attributes,H=O.getAttributes(),k=D.defaultAttributeValues;for(const K in H){const X=H[K];if(X.location>=0){let ht=q[K];if(ht===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){const A=ht.normalized,w=ht.itemSize,Y=t.get(ht);if(Y===void 0)continue;const nt=Y.buffer,N=Y.type,G=Y.bytesPerElement,Z=N===s.INT||N===s.UNSIGNED_INT||ht.gpuType===vo;if(ht.isInterleavedBufferAttribute){const W=ht.data,rt=W.stride,vt=ht.offset;if(W.isInstancedInterleavedBuffer){for(let dt=0;dt<X.locationSize;dt++)m(X.location+dt,W.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let dt=0;dt<X.locationSize;dt++)g(X.location+dt);s.bindBuffer(s.ARRAY_BUFFER,nt);for(let dt=0;dt<X.locationSize;dt++)x(X.location+dt,w/X.locationSize,N,A,rt*G,(vt+w/X.locationSize*dt)*G,Z)}else{if(ht.isInstancedBufferAttribute){for(let W=0;W<X.locationSize;W++)m(X.location+W,ht.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let W=0;W<X.locationSize;W++)g(X.location+W);s.bindBuffer(s.ARRAY_BUFFER,nt);for(let W=0;W<X.locationSize;W++)x(X.location+W,w/X.locationSize,N,A,w*G,w/X.locationSize*W*G,Z)}}else if(k!==void 0){const A=k[K];if(A!==void 0)switch(A.length){case 2:s.vertexAttrib2fv(X.location,A);break;case 3:s.vertexAttrib3fv(X.location,A);break;case 4:s.vertexAttrib4fv(X.location,A);break;default:s.vertexAttrib1fv(X.location,A)}}}}R()}function P(){U();for(const y in n){const D=n[y];for(const O in D){const F=D[O];for(const q in F)u(F[q].object),delete F[q];delete D[O]}delete n[y]}}function L(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const O in D){const F=D[O];for(const q in F)u(F[q].object),delete F[q];delete D[O]}delete n[y.id]}function I(y){for(const D in n){const O=n[D];if(O[y.id]===void 0)continue;const F=O[y.id];for(const q in F)u(F[q].object),delete F[q];delete O[y.id]}}function U(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:g,disableUnusedAttributes:R}}function lp(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(s.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let h=0;h<d;h++)p+=u[h];e.update(p,n,1)}function l(c,u,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<c.length;h++)o(c[h],u[h],f[h]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let h=0;for(let v=0;v<d;v++)h+=u[v]*f[v];e.update(h,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==$e&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const U=I===Ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==xn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==mn&&!U)}function l(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=h>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:R,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:P,maxSamples:L}}function hp(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new pn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){const h=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||h===null||h.length===0||r&&!g)r?u(null):c();else{const R=r?0:n,x=R*4;let _=m.clippingState||null;l.value=_,_=u(h,f,x,p);for(let P=0;P!==x;++P)_[P]=e[P];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,p,h){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,h!==!0||g===null){const m=p+v*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,_=p;x!==v;++x,_+=4)o.copy(d[x]).applyMatrix4(R,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function up(s){let t=new WeakMap;function e(o,a){return a===Nr?o.mapping=bi:a===Or&&(o.mapping=Ei),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nr||a===Or)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ih(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const _i=4,Ua=[.125,.215,.35,.446,.526,.582],Hn=20,yr=new Xl,Fa=new Xt;let Mr=null,Sr=0,br=0,Er=!1;const Vn=(1+Math.sqrt(5))/2,di=1/Vn,Na=[new b(-Vn,di,0),new b(Vn,di,0),new b(-di,0,Vn),new b(di,0,Vn),new b(0,Vn,-di),new b(0,Vn,di),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],dp=new b;class Oa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=dp}=r;Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mr,Sr,br),this._renderer.xr.enabled=Er,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Ji,format:$e,colorSpace:Ai,depthBuffer:!1},i=Ba(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ba(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fp(r)),this._blurMaterial=pp(r,t,e)}return i}_compileMaterial(t){const e=new xt(this._lodPlanes[0],t);this._renderer.compile(e,yr)}_sceneToCubeUV(t,e,n,i,r){const l=new He(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Fa),d.toneMapping=Rn,d.autoClear=!1;const h=new Oe({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),v=new xt(new jn,h);let g=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,g=!0):(h.color.copy(Fa),g=!0);for(let R=0;R<6;R++){const x=R%3;x===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):x===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));const _=this._cubeSize;bs(i,x*_,R>2?_:0,_,_),d.setRenderTarget(i),g&&d.render(v,l),d.render(t,l)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===bi||t.mapping===Ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=za());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,yr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Na[(i-r-1)%Na.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new xt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,h=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hn-1),v=r/h,g=isFinite(r)?1+Math.floor(u*v):Hn;g>Hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hn}`);const m=[];let R=0;for(let I=0;I<Hn;++I){const U=I/v,S=Math.exp(-U*U/2);m.push(S),I===0?R+=S:I<g&&(R+=2*S)}for(let I=0;I<m.length;I++)m[I]=m[I]/R;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=h,f.mipInt.value=x-n;const _=this._sizeLods[i],P=3*_*(i>x-_i?i-x+_i:0),L=4*(this._cubeSize-_);bs(e,P,L,3*_,2*_),l.setRenderTarget(e),l.render(d,yr)}}function fp(s){const t=[],e=[],n=[];let i=s;const r=s-_i+1+Ua.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-_i?l=Ua[o-s+_i-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,h=6,v=3,g=2,m=1,R=new Float32Array(v*h*p),x=new Float32Array(g*h*p),_=new Float32Array(m*h*p);for(let L=0;L<p;L++){const I=L%3*2/3-1,U=L>2?0:-1,S=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];R.set(S,v*h*L),x.set(f,g*h*L);const y=[L,L,L,L,L,L];_.set(y,m*h*L)}const P=new ye;P.setAttribute("position",new Qe(R,v)),P.setAttribute("uv",new Qe(x,g)),P.setAttribute("faceIndex",new Qe(_,m)),t.push(P),i>_i&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ba(s,t,e){const n=new Yn(s,t,e);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function pp(s,t,e){const n=new Float32Array(Hn),i=new b(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:No(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function za(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function ka(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function No(){return`

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
	`}function mp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nr||l===Or,u=l===bi||l===Ei;if(c||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Oa(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&i(p)?(e===null&&(e=new Oa(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&kn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _p(s,t,e,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const h in f.attributes)t.remove(f.attributes[h]);f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)t.update(f[p],s.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,h=d.attributes.position;let v=0;if(p!==null){const R=p.array;v=p.version;for(let x=0,_=R.length;x<_;x+=3){const P=R[x+0],L=R[x+1],I=R[x+2];f.push(P,L,L,I,I,P)}}else if(h!==void 0){const R=h.array;v=h.version;for(let x=0,_=R.length/3-1;x<_;x+=3){const P=x+0,L=x+1,I=x+2;f.push(P,L,L,I,I,P)}}else return;const g=new(bl(f)?Al:wl)(f,1);g.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,g)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function vp(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,h){h!==0&&(s.drawElementsInstanced(n,p,r,f*o,h),e.update(p,n,h))}function u(f,p,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,h);let g=0;for(let m=0;m<h;m++)g+=p[m];e.update(g,n,1)}function d(f,p,h,v){if(h===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,h);let m=0;for(let R=0;R<h;R++)m+=p[R]*v[R];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function xp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function yp(s,t,e){const n=new WeakMap,i=new ue;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;h===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let P=a.attributes.position.count*_,L=1;P>t.maxTextureSize&&(L=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const I=new Float32Array(P*L*4*d),U=new El(I,P,L,d);U.type=mn,U.needsUpdate=!0;const S=_*4;for(let D=0;D<d;D++){const O=m[D],F=R[D],q=x[D],H=P*L*4*D;for(let k=0;k<O.count;k++){const K=k*S;h===!0&&(i.fromBufferAttribute(O,k),I[H+K+0]=i.x,I[H+K+1]=i.y,I[H+K+2]=i.z,I[H+K+3]=0),v===!0&&(i.fromBufferAttribute(F,k),I[H+K+4]=i.x,I[H+K+5]=i.y,I[H+K+6]=i.z,I[H+K+7]=0),g===!0&&(i.fromBufferAttribute(q,k),I[H+K+8]=i.x,I[H+K+9]=i.y,I[H+K+10]=i.z,I[H+K+11]=q.itemSize===4?i.w:1)}}f={count:d,texture:U,size:new mt(P,L)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let h=0;for(let g=0;g<c.length;g++)h+=c[g];const v=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Mp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const jl=new Ce,Va=new Dl(1,1),Jl=new El,Zl=new mh,$l=new Pl,Ga=[],Ha=[],Wa=new Float32Array(16),qa=new Float32Array(9),Xa=new Float32Array(4);function Pi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ga[i];if(r===void 0&&(r=new Float32Array(i),Ga[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Hs(s,t){let e=Ha[t];e===void 0&&(e=new Int32Array(t),Ha[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Sp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function Ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function Tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function wp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Xa.set(n),s.uniformMatrix2fv(this.addr,!1,Xa),ge(e,n)}}function Ap(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;qa.set(n),s.uniformMatrix3fv(this.addr,!1,qa),ge(e,n)}}function Rp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Wa.set(n),s.uniformMatrix4fv(this.addr,!1,Wa),ge(e,n)}}function Cp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function Lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function Dp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function Fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function Op(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Va.compareFunction=Sl,r=Va):r=jl,e.setTexture2D(t||r,i)}function Bp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Zl,i)}function zp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$l,i)}function kp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jl,i)}function Vp(s){switch(s){case 5126:return Sp;case 35664:return bp;case 35665:return Ep;case 35666:return Tp;case 35674:return wp;case 35675:return Ap;case 35676:return Rp;case 5124:case 35670:return Cp;case 35667:case 35671:return Pp;case 35668:case 35672:return Lp;case 35669:case 35673:return Ip;case 5125:return Dp;case 36294:return Up;case 36295:return Fp;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return kp}}function Gp(s,t){s.uniform1fv(this.addr,t)}function Hp(s,t){const e=Pi(t,this.size,2);s.uniform2fv(this.addr,e)}function Wp(s,t){const e=Pi(t,this.size,3);s.uniform3fv(this.addr,e)}function qp(s,t){const e=Pi(t,this.size,4);s.uniform4fv(this.addr,e)}function Xp(s,t){const e=Pi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Yp(s,t){const e=Pi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function jp(s,t){const e=Pi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Jp(s,t){s.uniform1iv(this.addr,t)}function Zp(s,t){s.uniform2iv(this.addr,t)}function $p(s,t){s.uniform3iv(this.addr,t)}function Kp(s,t){s.uniform4iv(this.addr,t)}function Qp(s,t){s.uniform1uiv(this.addr,t)}function tm(s,t){s.uniform2uiv(this.addr,t)}function em(s,t){s.uniform3uiv(this.addr,t)}function nm(s,t){s.uniform4uiv(this.addr,t)}function im(s,t,e){const n=this.cache,i=t.length,r=Hs(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||jl,r[o])}function sm(s,t,e){const n=this.cache,i=t.length,r=Hs(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Zl,r[o])}function rm(s,t,e){const n=this.cache,i=t.length,r=Hs(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||$l,r[o])}function om(s,t,e){const n=this.cache,i=t.length,r=Hs(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Jl,r[o])}function am(s){switch(s){case 5126:return Gp;case 35664:return Hp;case 35665:return Wp;case 35666:return qp;case 35674:return Xp;case 35675:return Yp;case 35676:return jp;case 5124:case 35670:return Jp;case 35667:case 35671:return Zp;case 35668:case 35672:return $p;case 35669:case 35673:return Kp;case 5125:return Qp;case 36294:return tm;case 36295:return em;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return om}}class lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vp(e.type)}}class cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=am(e.type)}}class hm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Tr=/(\w+)(\])?(\[|\.)?/g;function Ya(s,t){s.seq.push(t),s.map[t.id]=t}function um(s,t,e){const n=s.name,i=n.length;for(Tr.lastIndex=0;;){const r=Tr.exec(n),o=Tr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ya(e,c===void 0?new lm(a,s,t):new cm(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new hm(a),Ya(e,d)),e=d}}}class Is{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);um(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ja(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const dm=37297;let fm=0;function pm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ja=new Vt;function mm(s){$t._getMatrix(Ja,$t.workingColorSpace,s);const t=`mat3( ${Ja.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(s)){case Ds:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Za(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+pm(s.getShaderSource(t),o)}else return i}function gm(s,t){const e=mm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _m(s,t){let e;switch(t){case Ac:e="Linear";break;case Rc:e="Reinhard";break;case Cc:e="Cineon";break;case cl:e="ACESFilmic";break;case Lc:e="AgX";break;case Ic:e="Neutral";break;case Pc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Es=new b;function vm(){$t.getLuminanceCoefficients(Es);const s=Es.x.toFixed(4),t=Es.y.toFixed(4),e=Es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function ym(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Oi(s){return s!==""}function $a(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ka(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(s){return s.replace(Sm,Em)}const bm=new Map;function Em(s,t){let e=Wt[t];if(e===void 0){const n=bm.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return go(e)}const Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qa(s){return s.replace(Tm,wm)}function wm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Am(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ol?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===al?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bi:case Ei:t="ENVMAP_TYPE_CUBE";break;case zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ei:t="ENVMAP_MODE_REFRACTION";break}return t}function Pm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ll:t="ENVMAP_BLENDING_MULTIPLY";break;case Tc:t="ENVMAP_BLENDING_MIX";break;case wc:t="ENVMAP_BLENDING_ADD";break}return t}function Lm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Im(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Am(e),c=Rm(e),u=Cm(e),d=Pm(e),f=Lm(e),p=xm(e),h=ym(r),v=i.createProgram();let g,m,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(Oi).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h].filter(Oi).join(`
`),m.length>0&&(m+=`
`)):(g=[tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),m=[tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,h,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Rn?_m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,gm("linearToOutputTexel",e.outputColorSpace),vm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oi).join(`
`)),o=go(o),o=$a(o,e),o=Ka(o,e),a=go(a),a=$a(a,e),a=Ka(a,e),o=Qa(o),a=Qa(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=R+g+o,_=R+m+a,P=ja(i,i.VERTEX_SHADER,x),L=ja(i,i.FRAGMENT_SHADER,_);i.attachShader(v,P),i.attachShader(v,L),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function I(D){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(P).trim(),q=i.getShaderInfoLog(L).trim();let H=!0,k=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,P,L);else{const K=Za(i,P,"vertex"),X=Za(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+K+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||q==="")&&(k=!1);k&&(D.diagnostics={runnable:H,programLog:O,vertexShader:{log:F,prefix:g},fragmentShader:{log:q,prefix:m}})}i.deleteShader(P),i.deleteShader(L),U=new Is(i,v),S=Mm(i,v)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,dm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=L,this}let Dm=0;class Um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fm(t),e.set(t,n)),n}}class Fm{constructor(t){this.id=Dm++,this.code=t,this.usedTimes=0}}function Nm(s,t,e,n,i,r,o){const a=new wo,l=new Um,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,y,D,O,F){const q=O.fog,H=F.geometry,k=S.isMeshStandardMaterial?O.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),X=K&&K.mapping===zs?K.image.height:null,ht=h[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const A=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,w=A!==void 0?A.length:0;let Y=0;H.morphAttributes.position!==void 0&&(Y=1),H.morphAttributes.normal!==void 0&&(Y=2),H.morphAttributes.color!==void 0&&(Y=3);let nt,N,G,Z;if(ht){const ee=nn[ht];nt=ee.vertexShader,N=ee.fragmentShader}else nt=S.vertexShader,N=S.fragmentShader,l.update(S),G=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const W=s.getRenderTarget(),rt=s.state.buffers.depth.getReversed(),vt=F.isInstancedMesh===!0,dt=F.isBatchedMesh===!0,yt=!!S.map,tt=!!S.matcap,Q=!!K,T=!!S.aoMap,gt=!!S.lightMap,at=!!S.bumpMap,_t=!!S.normalMap,ot=!!S.displacementMap,bt=!!S.emissiveMap,ut=!!S.metalnessMap,C=!!S.roughnessMap,M=S.anisotropy>0,j=S.clearcoat>0,it=S.dispersion>0,ct=S.iridescence>0,st=S.sheen>0,Dt=S.transmission>0,Mt=M&&!!S.anisotropyMap,At=j&&!!S.clearcoatMap,qt=j&&!!S.clearcoatNormalMap,ft=j&&!!S.clearcoatRoughnessMap,Ct=ct&&!!S.iridescenceMap,Nt=ct&&!!S.iridescenceThicknessMap,Ot=st&&!!S.sheenColorMap,Lt=st&&!!S.sheenRoughnessMap,Yt=!!S.specularMap,Ht=!!S.specularColorMap,re=!!S.specularIntensityMap,B=Dt&&!!S.transmissionMap,Et=Dt&&!!S.thicknessMap,et=!!S.gradientMap,lt=!!S.alphaMap,Rt=S.alphaTest>0,wt=!!S.alphaHash,kt=!!S.extensions;let ce=Rn;S.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ce=s.toneMapping);const Me={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:nt,fragmentShader:N,defines:S.defines,customVertexShaderID:G,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:dt,batchingColor:dt&&F._colorsTexture!==null,instancing:vt,instancingColor:vt&&F.instanceColor!==null,instancingMorph:vt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:W===null?s.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ai,alphaToCoverage:!!S.alphaToCoverage,map:yt,matcap:tt,envMap:Q,envMapMode:Q&&K.mapping,envMapCubeUVHeight:X,aoMap:T,lightMap:gt,bumpMap:at,normalMap:_t,displacementMap:f&&ot,emissiveMap:bt,normalMapObjectSpace:_t&&S.normalMapType===Nc,normalMapTangentSpace:_t&&S.normalMapType===Ml,metalnessMap:ut,roughnessMap:C,anisotropy:M,anisotropyMap:Mt,clearcoat:j,clearcoatMap:At,clearcoatNormalMap:qt,clearcoatRoughnessMap:ft,dispersion:it,iridescence:ct,iridescenceMap:Ct,iridescenceThicknessMap:Nt,sheen:st,sheenColorMap:Ot,sheenRoughnessMap:Lt,specularMap:Yt,specularColorMap:Ht,specularIntensityMap:re,transmission:Dt,transmissionMap:B,thicknessMap:Et,gradientMap:et,opaque:S.transparent===!1&&S.blending===vi&&S.alphaToCoverage===!1,alphaMap:lt,alphaTest:Rt,alphaHash:wt,combine:S.combine,mapUv:yt&&v(S.map.channel),aoMapUv:T&&v(S.aoMap.channel),lightMapUv:gt&&v(S.lightMap.channel),bumpMapUv:at&&v(S.bumpMap.channel),normalMapUv:_t&&v(S.normalMap.channel),displacementMapUv:ot&&v(S.displacementMap.channel),emissiveMapUv:bt&&v(S.emissiveMap.channel),metalnessMapUv:ut&&v(S.metalnessMap.channel),roughnessMapUv:C&&v(S.roughnessMap.channel),anisotropyMapUv:Mt&&v(S.anisotropyMap.channel),clearcoatMapUv:At&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:qt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(S.sheenRoughnessMap.channel),specularMapUv:Yt&&v(S.specularMap.channel),specularColorMapUv:Ht&&v(S.specularColorMap.channel),specularIntensityMapUv:re&&v(S.specularIntensityMap.channel),transmissionMapUv:B&&v(S.transmissionMap.channel),thicknessMapUv:Et&&v(S.thicknessMap.channel),alphaMapUv:lt&&v(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_t||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(yt||lt),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:rt,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:Y,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:yt&&S.map.isVideoTexture===!0&&$t.getTransfer(S.map.colorSpace)===ne,decodeVideoTextureEmissive:bt&&S.emissiveMap.isVideoTexture===!0&&$t.getTransfer(S.emissiveMap.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Re,flipSided:S.side===De,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:kt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&S.extensions.multiDraw===!0||dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function m(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)y.push(D),y.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(R(y,S),x(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function R(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const y=h[S.type];let D;if(y){const O=nn[y];D=Rh.clone(O.uniforms)}else D=S.uniforms;return D}function P(S,y){let D;for(let O=0,F=u.length;O<F;O++){const q=u[O];if(q.cacheKey===y){D=q,++D.usedTimes;break}}return D===void 0&&(D=new Im(s,y,S,r),u.push(D)),D}function L(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function I(S){l.remove(S)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:P,releaseProgram:L,releaseShaderCache:I,programs:u,dispose:U}}function Om(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Bm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function el(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function nl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,f,p,h,v,g){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:h,renderOrder:d.renderOrder,z:v,group:g},s[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=h,m.renderOrder=d.renderOrder,m.z=v,m.group=g),t++,m}function a(d,f,p,h,v,g){const m=o(d,f,p,h,v,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function l(d,f,p,h,v,g){const m=o(d,f,p,h,v,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,f){e.length>1&&e.sort(d||Bm),n.length>1&&n.sort(f||el),i.length>1&&i.sort(f||el)}function u(){for(let d=t,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function zm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new nl,s.set(n,[o])):i>=r.length?(o=new nl,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function km(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Xt};break;case"SpotLight":e={position:new b,direction:new b,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new b,halfWidth:new b,halfHeight:new b};break}return s[t.id]=e,e}}}function Vm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Gm=0;function Hm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Wm(s){const t=new km,e=Vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const i=new b,r=new oe,o=new oe;function a(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,h=0,v=0,g=0,m=0,R=0,x=0,_=0,P=0,L=0,I=0;c.sort(Hm);for(let S=0,y=c.length;S<y;S++){const D=c[S],O=D.color,F=D.intensity,q=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*F,d+=O.g*F,f+=O.b*F;else if(D.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(D.sh.coefficients[k],F);I++}else if(D.isDirectionalLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,X=e.get(D);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=D.shadow.matrix,R++}n.directional[p]=k,p++}else if(D.isSpotLight){const k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(O).multiplyScalar(F),k.distance=q,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,n.spot[v]=k;const K=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,K.updateMatrices(D),D.castShadow&&L++),n.spotLightMatrix[v]=K.matrix,D.castShadow){const X=e.get(D);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=H,_++}v++}else if(D.isRectAreaLight){const k=t.get(D);k.color.copy(O).multiplyScalar(F),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=k,g++}else if(D.isPointLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){const K=D.shadow,X=e.get(D);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,n.pointShadow[h]=X,n.pointShadowMap[h]=H,n.pointShadowMatrix[h]=D.shadow.matrix,x++}n.point[h]=k,h++}else if(D.isHemisphereLight){const k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(F),k.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[m]=k,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==p||U.pointLength!==h||U.spotLength!==v||U.rectAreaLength!==g||U.hemiLength!==m||U.numDirectionalShadows!==R||U.numPointShadows!==x||U.numSpotShadows!==_||U.numSpotMaps!==P||U.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=h,n.hemi.length=m,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+P-L,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,U.directionalLength=p,U.pointLength=h,U.spotLength=v,U.rectAreaLength=g,U.hemiLength=m,U.numDirectionalShadows=R,U.numPointShadows=x,U.numSpotShadows=_,U.numSpotMaps=P,U.numLightProbes=I,n.version=Gm++)}function l(c,u){let d=0,f=0,p=0,h=0,v=0;const g=u.matrixWorldInverse;for(let m=0,R=c.length;m<R;m++){const x=c[m];if(x.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(x.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const _=n.rectArea[h];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),h++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function il(s){const t=new Wm(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qm(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new il(s),t.set(i,[a])):r>=o.length?(a=new il(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
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
}`;function jm(s,t,e){let n=new Ro;const i=new mt,r=new mt,o=new ue,a=new pu({depthPacking:Fc}),l=new mu,c={},u=e.maxTextureSize,d={[Pn]:De,[De]:Pn,[Re]:Re},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Xm,fragmentShader:Ym}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const h=new ye;h.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xt(h,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let m=this.type;this.render=function(L,I,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const S=s.getRenderTarget(),y=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),O=s.state;O.setBlending(An),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=m!==fn&&this.type===fn,q=m===fn&&this.type!==fn;for(let H=0,k=L.length;H<k;H++){const K=L[H],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ht=X.getFrameExtents();if(i.multiply(ht),r.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ht.x),i.x=r.x*ht.x,X.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ht.y),i.y=r.y*ht.y,X.mapSize.y=r.y)),X.map===null||F===!0||q===!0){const w=this.type!==fn?{minFilter:Ke,magFilter:Ke}:{};X.map!==null&&X.map.dispose(),X.map=new Yn(i.x,i.y,w),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const A=X.getViewportCount();for(let w=0;w<A;w++){const Y=X.getViewport(w);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),O.viewport(o),X.updateMatrices(K,w),n=X.getFrustum(),_(I,U,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===fn&&R(X,U),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(S,y,D)};function R(L,I){const U=t.update(v);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Yn(i.x,i.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(I,null,U,f,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(I,null,U,p,v,null)}function x(L,I,U,S){let y=null;const D=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)y=D;else if(y=U.isPointLight===!0?l:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const O=y.uuid,F=I.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let H=q[F];H===void 0&&(H=y.clone(),q[F]=H,I.addEventListener("dispose",P)),y=H}if(y.visible=I.visible,y.wireframe=I.wireframe,S===fn?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:d[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=s.properties.get(y);O.light=U}return y}function _(L,I,U,S,y){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&y===fn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);const F=t.update(L),q=L.material;if(Array.isArray(q)){const H=F.groups;for(let k=0,K=H.length;k<K;k++){const X=H[k],ht=q[X.materialIndex];if(ht&&ht.visible){const A=x(L,ht,S,y);L.onBeforeShadow(s,L,I,U,F,A,X),s.renderBufferDirect(U,null,F,A,L,X),L.onAfterShadow(s,L,I,U,F,A,X)}}}else if(q.visible){const H=x(L,q,S,y);L.onBeforeShadow(s,L,I,U,F,H,null),s.renderBufferDirect(U,null,F,H,L,null),L.onAfterShadow(s,L,I,U,F,H,null)}}const O=L.children;for(let F=0,q=O.length;F<q;F++)_(O[F],I,U,S,y)}function P(L){L.target.removeEventListener("dispose",P);for(const U in c){const S=c[U],y=L.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Jm={[Cr]:Pr,[Lr]:Ur,[Ir]:Fr,[Si]:Dr,[Pr]:Cr,[Ur]:Lr,[Fr]:Ir,[Dr]:Si};function Zm(s,t){function e(){let B=!1;const Et=new ue;let et=null;const lt=new ue(0,0,0,0);return{setMask:function(Rt){et!==Rt&&!B&&(s.colorMask(Rt,Rt,Rt,Rt),et=Rt)},setLocked:function(Rt){B=Rt},setClear:function(Rt,wt,kt,ce,Me){Me===!0&&(Rt*=ce,wt*=ce,kt*=ce),Et.set(Rt,wt,kt,ce),lt.equals(Et)===!1&&(s.clearColor(Rt,wt,kt,ce),lt.copy(Et))},reset:function(){B=!1,et=null,lt.set(-1,0,0,0)}}}function n(){let B=!1,Et=!1,et=null,lt=null,Rt=null;return{setReversed:function(wt){if(Et!==wt){const kt=t.get("EXT_clip_control");Et?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const ce=Rt;Rt=null,this.setClear(ce)}Et=wt},getReversed:function(){return Et},setTest:function(wt){wt?W(s.DEPTH_TEST):rt(s.DEPTH_TEST)},setMask:function(wt){et!==wt&&!B&&(s.depthMask(wt),et=wt)},setFunc:function(wt){if(Et&&(wt=Jm[wt]),lt!==wt){switch(wt){case Cr:s.depthFunc(s.NEVER);break;case Pr:s.depthFunc(s.ALWAYS);break;case Lr:s.depthFunc(s.LESS);break;case Si:s.depthFunc(s.LEQUAL);break;case Ir:s.depthFunc(s.EQUAL);break;case Dr:s.depthFunc(s.GEQUAL);break;case Ur:s.depthFunc(s.GREATER);break;case Fr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}lt=wt}},setLocked:function(wt){B=wt},setClear:function(wt){Rt!==wt&&(Et&&(wt=1-wt),s.clearDepth(wt),Rt=wt)},reset:function(){B=!1,et=null,lt=null,Rt=null,Et=!1}}}function i(){let B=!1,Et=null,et=null,lt=null,Rt=null,wt=null,kt=null,ce=null,Me=null;return{setTest:function(ee){B||(ee?W(s.STENCIL_TEST):rt(s.STENCIL_TEST))},setMask:function(ee){Et!==ee&&!B&&(s.stencilMask(ee),Et=ee)},setFunc:function(ee,qe,an){(et!==ee||lt!==qe||Rt!==an)&&(s.stencilFunc(ee,qe,an),et=ee,lt=qe,Rt=an)},setOp:function(ee,qe,an){(wt!==ee||kt!==qe||ce!==an)&&(s.stencilOp(ee,qe,an),wt=ee,kt=qe,ce=an)},setLocked:function(ee){B=ee},setClear:function(ee){Me!==ee&&(s.clearStencil(ee),Me=ee)},reset:function(){B=!1,Et=null,et=null,lt=null,Rt=null,wt=null,kt=null,ce=null,Me=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],h=null,v=!1,g=null,m=null,R=null,x=null,_=null,P=null,L=null,I=new Xt(0,0,0),U=0,S=!1,y=null,D=null,O=null,F=null,q=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=K>=2);let ht=null,A={};const w=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),nt=new ue().fromArray(w),N=new ue().fromArray(Y);function G(B,Et,et,lt){const Rt=new Uint8Array(4),wt=s.createTexture();s.bindTexture(B,wt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<et;kt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Et,0,s.RGBA,1,1,lt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(Et+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return wt}const Z={};Z[s.TEXTURE_2D]=G(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=G(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=G(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=G(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(s.DEPTH_TEST),o.setFunc(Si),at(!1),_t(Xo),W(s.CULL_FACE),T(An);function W(B){u[B]!==!0&&(s.enable(B),u[B]=!0)}function rt(B){u[B]!==!1&&(s.disable(B),u[B]=!1)}function vt(B,Et){return d[B]!==Et?(s.bindFramebuffer(B,Et),d[B]=Et,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Et),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Et),!0):!1}function dt(B,Et){let et=p,lt=!1;if(B){et=f.get(Et),et===void 0&&(et=[],f.set(Et,et));const Rt=B.textures;if(et.length!==Rt.length||et[0]!==s.COLOR_ATTACHMENT0){for(let wt=0,kt=Rt.length;wt<kt;wt++)et[wt]=s.COLOR_ATTACHMENT0+wt;et.length=Rt.length,lt=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,lt=!0);lt&&s.drawBuffers(et)}function yt(B){return h!==B?(s.useProgram(B),h=B,!0):!1}const tt={[Gn]:s.FUNC_ADD,[lc]:s.FUNC_SUBTRACT,[cc]:s.FUNC_REVERSE_SUBTRACT};tt[hc]=s.MIN,tt[uc]=s.MAX;const Q={[dc]:s.ZERO,[fc]:s.ONE,[pc]:s.SRC_COLOR,[Ar]:s.SRC_ALPHA,[yc]:s.SRC_ALPHA_SATURATE,[vc]:s.DST_COLOR,[gc]:s.DST_ALPHA,[mc]:s.ONE_MINUS_SRC_COLOR,[Rr]:s.ONE_MINUS_SRC_ALPHA,[xc]:s.ONE_MINUS_DST_COLOR,[_c]:s.ONE_MINUS_DST_ALPHA,[Mc]:s.CONSTANT_COLOR,[Sc]:s.ONE_MINUS_CONSTANT_COLOR,[bc]:s.CONSTANT_ALPHA,[Ec]:s.ONE_MINUS_CONSTANT_ALPHA};function T(B,Et,et,lt,Rt,wt,kt,ce,Me,ee){if(B===An){v===!0&&(rt(s.BLEND),v=!1);return}if(v===!1&&(W(s.BLEND),v=!0),B!==ac){if(B!==g||ee!==S){if((m!==Gn||_!==Gn)&&(s.blendEquation(s.FUNC_ADD),m=Gn,_=Gn),ee)switch(B){case vi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yo:s.blendFunc(s.ONE,s.ONE);break;case jo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case jo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}R=null,x=null,P=null,L=null,I.set(0,0,0),U=0,g=B,S=ee}return}Rt=Rt||Et,wt=wt||et,kt=kt||lt,(Et!==m||Rt!==_)&&(s.blendEquationSeparate(tt[Et],tt[Rt]),m=Et,_=Rt),(et!==R||lt!==x||wt!==P||kt!==L)&&(s.blendFuncSeparate(Q[et],Q[lt],Q[wt],Q[kt]),R=et,x=lt,P=wt,L=kt),(ce.equals(I)===!1||Me!==U)&&(s.blendColor(ce.r,ce.g,ce.b,Me),I.copy(ce),U=Me),g=B,S=!1}function gt(B,Et){B.side===Re?rt(s.CULL_FACE):W(s.CULL_FACE);let et=B.side===De;Et&&(et=!et),at(et),B.blending===vi&&B.transparent===!1?T(An):T(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const lt=B.stencilWrite;a.setTest(lt),lt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),bt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?W(s.SAMPLE_ALPHA_TO_COVERAGE):rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(B){y!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),y=B)}function _t(B){B!==rc?(W(s.CULL_FACE),B!==D&&(B===Xo?s.cullFace(s.BACK):B===oc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):rt(s.CULL_FACE),D=B}function ot(B){B!==O&&(k&&s.lineWidth(B),O=B)}function bt(B,Et,et){B?(W(s.POLYGON_OFFSET_FILL),(F!==Et||q!==et)&&(s.polygonOffset(Et,et),F=Et,q=et)):rt(s.POLYGON_OFFSET_FILL)}function ut(B){B?W(s.SCISSOR_TEST):rt(s.SCISSOR_TEST)}function C(B){B===void 0&&(B=s.TEXTURE0+H-1),ht!==B&&(s.activeTexture(B),ht=B)}function M(B,Et,et){et===void 0&&(ht===null?et=s.TEXTURE0+H-1:et=ht);let lt=A[et];lt===void 0&&(lt={type:void 0,texture:void 0},A[et]=lt),(lt.type!==B||lt.texture!==Et)&&(ht!==et&&(s.activeTexture(et),ht=et),s.bindTexture(B,Et||Z[B]),lt.type=B,lt.texture=Et)}function j(){const B=A[ht];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function it(){try{s.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{s.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{s.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Dt(){try{s.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(){try{s.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{s.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qt(){try{s.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ft(){try{s.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{s.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{s.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(B){nt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),nt.copy(B))}function Lt(B){N.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),N.copy(B))}function Yt(B,Et){let et=c.get(Et);et===void 0&&(et=new WeakMap,c.set(Et,et));let lt=et.get(B);lt===void 0&&(lt=s.getUniformBlockIndex(Et,B.name),et.set(B,lt))}function Ht(B,Et){const lt=c.get(Et).get(B);l.get(Et)!==lt&&(s.uniformBlockBinding(Et,lt,B.__bindingPointIndex),l.set(Et,lt))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ht=null,A={},d={},f=new WeakMap,p=[],h=null,v=!1,g=null,m=null,R=null,x=null,_=null,P=null,L=null,I=new Xt(0,0,0),U=0,S=!1,y=null,D=null,O=null,F=null,q=null,nt.set(0,0,s.canvas.width,s.canvas.height),N.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:rt,bindFramebuffer:vt,drawBuffers:dt,useProgram:yt,setBlending:T,setMaterial:gt,setFlipSided:at,setCullFace:_t,setLineWidth:ot,setPolygonOffset:bt,setScissorTest:ut,activeTexture:C,bindTexture:M,unbindTexture:j,compressedTexImage2D:it,compressedTexImage3D:ct,texImage2D:Ct,texImage3D:Nt,updateUBOMapping:Yt,uniformBlockBinding:Ht,texStorage2D:qt,texStorage3D:ft,texSubImage2D:st,texSubImage3D:Dt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:At,scissor:Ot,viewport:Lt,reset:re}}function $m(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(C,M){return p?new OffscreenCanvas(C,M):Fs("canvas")}function v(C,M,j){let it=1;const ct=ut(C);if((ct.width>j||ct.height>j)&&(it=j/Math.max(ct.width,ct.height)),it<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const st=Math.floor(it*ct.width),Dt=Math.floor(it*ct.height);d===void 0&&(d=h(st,Dt));const Mt=M?h(st,Dt):d;return Mt.width=st,Mt.height=Dt,Mt.getContext("2d").drawImage(C,0,0,st,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+st+"x"+Dt+")."),Mt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(C,M,j,it,ct=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let st=M;if(M===s.RED&&(j===s.FLOAT&&(st=s.R32F),j===s.HALF_FLOAT&&(st=s.R16F),j===s.UNSIGNED_BYTE&&(st=s.R8)),M===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(st=s.R8UI),j===s.UNSIGNED_SHORT&&(st=s.R16UI),j===s.UNSIGNED_INT&&(st=s.R32UI),j===s.BYTE&&(st=s.R8I),j===s.SHORT&&(st=s.R16I),j===s.INT&&(st=s.R32I)),M===s.RG&&(j===s.FLOAT&&(st=s.RG32F),j===s.HALF_FLOAT&&(st=s.RG16F),j===s.UNSIGNED_BYTE&&(st=s.RG8)),M===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(st=s.RG8UI),j===s.UNSIGNED_SHORT&&(st=s.RG16UI),j===s.UNSIGNED_INT&&(st=s.RG32UI),j===s.BYTE&&(st=s.RG8I),j===s.SHORT&&(st=s.RG16I),j===s.INT&&(st=s.RG32I)),M===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(st=s.RGB8UI),j===s.UNSIGNED_SHORT&&(st=s.RGB16UI),j===s.UNSIGNED_INT&&(st=s.RGB32UI),j===s.BYTE&&(st=s.RGB8I),j===s.SHORT&&(st=s.RGB16I),j===s.INT&&(st=s.RGB32I)),M===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(st=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(st=s.RGBA16UI),j===s.UNSIGNED_INT&&(st=s.RGBA32UI),j===s.BYTE&&(st=s.RGBA8I),j===s.SHORT&&(st=s.RGBA16I),j===s.INT&&(st=s.RGBA32I)),M===s.RGB&&j===s.UNSIGNED_INT_5_9_9_9_REV&&(st=s.RGB9_E5),M===s.RGBA){const Dt=ct?Ds:$t.getTransfer(it);j===s.FLOAT&&(st=s.RGBA32F),j===s.HALF_FLOAT&&(st=s.RGBA16F),j===s.UNSIGNED_BYTE&&(st=Dt===ne?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(st=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(st=s.RGB5_A1)}return(st===s.R16F||st===s.R32F||st===s.RG16F||st===s.RG32F||st===s.RGBA16F||st===s.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function _(C,M){let j;return C?M===null||M===Xn||M===Ti?j=s.DEPTH24_STENCIL8:M===mn?j=s.DEPTH32F_STENCIL8:M===Wi&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xn||M===Ti?j=s.DEPTH_COMPONENT24:M===mn?j=s.DEPTH_COMPONENT32F:M===Wi&&(j=s.DEPTH_COMPONENT16),j}function P(C,M){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ke&&C.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function L(C){const M=C.target;M.removeEventListener("dispose",L),U(M),M.isVideoTexture&&u.delete(M)}function I(C){const M=C.target;M.removeEventListener("dispose",I),y(M)}function U(C){const M=n.get(C);if(M.__webglInit===void 0)return;const j=C.source,it=f.get(j);if(it){const ct=it[M.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&S(C),Object.keys(it).length===0&&f.delete(j)}n.remove(C)}function S(C){const M=n.get(C);s.deleteTexture(M.__webglTexture);const j=C.source,it=f.get(j);delete it[M.__cacheKey],o.memory.textures--}function y(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(M.__webglFramebuffer[it]))for(let ct=0;ct<M.__webglFramebuffer[it].length;ct++)s.deleteFramebuffer(M.__webglFramebuffer[it][ct]);else s.deleteFramebuffer(M.__webglFramebuffer[it]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[it])}else{if(Array.isArray(M.__webglFramebuffer))for(let it=0;it<M.__webglFramebuffer.length;it++)s.deleteFramebuffer(M.__webglFramebuffer[it]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let it=0;it<M.__webglColorRenderbuffer.length;it++)M.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[it]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const j=C.textures;for(let it=0,ct=j.length;it<ct;it++){const st=n.get(j[it]);st.__webglTexture&&(s.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(j[it])}n.remove(C)}let D=0;function O(){D=0}function F(){const C=D;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function q(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function H(C,M){const j=n.get(C);if(C.isVideoTexture&&ot(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const it=C.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(j,C,M);return}}e.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+M)}function k(C,M){const j=n.get(C);if(C.version>0&&j.__version!==C.version){N(j,C,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+M)}function K(C,M){const j=n.get(C);if(C.version>0&&j.__version!==C.version){N(j,C,M);return}e.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+M)}function X(C,M){const j=n.get(C);if(C.version>0&&j.__version!==C.version){G(j,C,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+M)}const ht={[Br]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[zr]:s.MIRRORED_REPEAT},A={[Ke]:s.NEAREST,[Dc]:s.NEAREST_MIPMAP_NEAREST,[Qi]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[Xs]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR},w={[Oc]:s.NEVER,[Hc]:s.ALWAYS,[Bc]:s.LESS,[Sl]:s.LEQUAL,[zc]:s.EQUAL,[Gc]:s.GEQUAL,[kc]:s.GREATER,[Vc]:s.NOTEQUAL};function Y(C,M){if(M.type===mn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===Xs||M.magFilter===Qi||M.magFilter===qn||M.minFilter===sn||M.minFilter===Xs||M.minFilter===Qi||M.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ht[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ht[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ht[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,A[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,A[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,w[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ke||M.minFilter!==Qi&&M.minFilter!==qn||M.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function nt(C,M){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",L));const it=M.source;let ct=f.get(it);ct===void 0&&(ct={},f.set(it,ct));const st=q(M);if(st!==C.__cacheKey){ct[st]===void 0&&(ct[st]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ct[st].usedTimes++;const Dt=ct[C.__cacheKey];Dt!==void 0&&(ct[C.__cacheKey].usedTimes--,Dt.usedTimes===0&&S(M)),C.__cacheKey=st,C.__webglTexture=ct[st].texture}return j}function N(C,M,j){let it=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(it=s.TEXTURE_3D);const ct=nt(C,M),st=M.source;e.bindTexture(it,C.__webglTexture,s.TEXTURE0+j);const Dt=n.get(st);if(st.version!==Dt.__version||ct===!0){e.activeTexture(s.TEXTURE0+j);const Mt=$t.getPrimaries($t.workingColorSpace),At=M.colorSpace===wn?null:$t.getPrimaries(M.colorSpace),qt=M.colorSpace===wn||Mt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let ft=v(M.image,!1,i.maxTextureSize);ft=bt(M,ft);const Ct=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type);let Ot=x(M.internalFormat,Ct,Nt,M.colorSpace,M.isVideoTexture);Y(it,M);let Lt;const Yt=M.mipmaps,Ht=M.isVideoTexture!==!0,re=Dt.__version===void 0||ct===!0,B=st.dataReady,Et=P(M,ft);if(M.isDepthTexture)Ot=_(M.format===wi,M.type),re&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,Ot,ft.width,ft.height):e.texImage2D(s.TEXTURE_2D,0,Ot,ft.width,ft.height,0,Ct,Nt,null));else if(M.isDataTexture)if(Yt.length>0){Ht&&re&&e.texStorage2D(s.TEXTURE_2D,Et,Ot,Yt[0].width,Yt[0].height);for(let et=0,lt=Yt.length;et<lt;et++)Lt=Yt[et],Ht?B&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,Lt.width,Lt.height,Ct,Nt,Lt.data):e.texImage2D(s.TEXTURE_2D,et,Ot,Lt.width,Lt.height,0,Ct,Nt,Lt.data);M.generateMipmaps=!1}else Ht?(re&&e.texStorage2D(s.TEXTURE_2D,Et,Ot,ft.width,ft.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft.width,ft.height,Ct,Nt,ft.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,ft.width,ft.height,0,Ct,Nt,ft.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Et,Ot,Yt[0].width,Yt[0].height,ft.depth);for(let et=0,lt=Yt.length;et<lt;et++)if(Lt=Yt[et],M.format!==$e)if(Ct!==null)if(Ht){if(B)if(M.layerUpdates.size>0){const Rt=Da(Lt.width,Lt.height,M.format,M.type);for(const wt of M.layerUpdates){const kt=Lt.data.subarray(wt*Rt/Lt.data.BYTES_PER_ELEMENT,(wt+1)*Rt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,wt,Lt.width,Lt.height,1,Ct,kt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,Lt.width,Lt.height,ft.depth,Ct,Lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,Ot,Lt.width,Lt.height,ft.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,Lt.width,Lt.height,ft.depth,Ct,Nt,Lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,Ot,Lt.width,Lt.height,ft.depth,0,Ct,Nt,Lt.data)}else{Ht&&re&&e.texStorage2D(s.TEXTURE_2D,Et,Ot,Yt[0].width,Yt[0].height);for(let et=0,lt=Yt.length;et<lt;et++)Lt=Yt[et],M.format!==$e?Ct!==null?Ht?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,Lt.width,Lt.height,Ct,Lt.data):e.compressedTexImage2D(s.TEXTURE_2D,et,Ot,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?B&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,Lt.width,Lt.height,Ct,Nt,Lt.data):e.texImage2D(s.TEXTURE_2D,et,Ot,Lt.width,Lt.height,0,Ct,Nt,Lt.data)}else if(M.isDataArrayTexture)if(Ht){if(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Et,Ot,ft.width,ft.height,ft.depth),B)if(M.layerUpdates.size>0){const et=Da(ft.width,ft.height,M.format,M.type);for(const lt of M.layerUpdates){const Rt=ft.data.subarray(lt*et/ft.data.BYTES_PER_ELEMENT,(lt+1)*et/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,lt,ft.width,ft.height,1,Ct,Nt,Rt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Nt,ft.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,ft.width,ft.height,ft.depth,0,Ct,Nt,ft.data);else if(M.isData3DTexture)Ht?(re&&e.texStorage3D(s.TEXTURE_3D,Et,Ot,ft.width,ft.height,ft.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Nt,ft.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,ft.width,ft.height,ft.depth,0,Ct,Nt,ft.data);else if(M.isFramebufferTexture){if(re)if(Ht)e.texStorage2D(s.TEXTURE_2D,Et,Ot,ft.width,ft.height);else{let et=ft.width,lt=ft.height;for(let Rt=0;Rt<Et;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,Ot,et,lt,0,Ct,Nt,null),et>>=1,lt>>=1}}else if(Yt.length>0){if(Ht&&re){const et=ut(Yt[0]);e.texStorage2D(s.TEXTURE_2D,Et,Ot,et.width,et.height)}for(let et=0,lt=Yt.length;et<lt;et++)Lt=Yt[et],Ht?B&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,Ct,Nt,Lt):e.texImage2D(s.TEXTURE_2D,et,Ot,Ct,Nt,Lt);M.generateMipmaps=!1}else if(Ht){if(re){const et=ut(ft);e.texStorage2D(s.TEXTURE_2D,Et,Ot,et.width,et.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ct,Nt,ft)}else e.texImage2D(s.TEXTURE_2D,0,Ot,Ct,Nt,ft);g(M)&&m(it),Dt.__version=st.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function G(C,M,j){if(M.image.length!==6)return;const it=nt(C,M),ct=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+j);const st=n.get(ct);if(ct.version!==st.__version||it===!0){e.activeTexture(s.TEXTURE0+j);const Dt=$t.getPrimaries($t.workingColorSpace),Mt=M.colorSpace===wn?null:$t.getPrimaries(M.colorSpace),At=M.colorSpace===wn||Dt===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const qt=M.isCompressedTexture||M.image[0].isCompressedTexture,ft=M.image[0]&&M.image[0].isDataTexture,Ct=[];for(let lt=0;lt<6;lt++)!qt&&!ft?Ct[lt]=v(M.image[lt],!0,i.maxCubemapSize):Ct[lt]=ft?M.image[lt].image:M.image[lt],Ct[lt]=bt(M,Ct[lt]);const Nt=Ct[0],Ot=r.convert(M.format,M.colorSpace),Lt=r.convert(M.type),Yt=x(M.internalFormat,Ot,Lt,M.colorSpace),Ht=M.isVideoTexture!==!0,re=st.__version===void 0||it===!0,B=ct.dataReady;let Et=P(M,Nt);Y(s.TEXTURE_CUBE_MAP,M);let et;if(qt){Ht&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Et,Yt,Nt.width,Nt.height);for(let lt=0;lt<6;lt++){et=Ct[lt].mipmaps;for(let Rt=0;Rt<et.length;Rt++){const wt=et[Rt];M.format!==$e?Ot!==null?Ht?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,0,0,wt.width,wt.height,Ot,wt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,Yt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,0,0,wt.width,wt.height,Ot,Lt,wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,Yt,wt.width,wt.height,0,Ot,Lt,wt.data)}}}else{if(et=M.mipmaps,Ht&&re){et.length>0&&Et++;const lt=ut(Ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Et,Yt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ft){Ht?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ct[lt].width,Ct[lt].height,Ot,Lt,Ct[lt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,Ct[lt].width,Ct[lt].height,0,Ot,Lt,Ct[lt].data);for(let Rt=0;Rt<et.length;Rt++){const kt=et[Rt].image[lt].image;Ht?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,0,0,kt.width,kt.height,Ot,Lt,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,Yt,kt.width,kt.height,0,Ot,Lt,kt.data)}}else{Ht?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ot,Lt,Ct[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Yt,Ot,Lt,Ct[lt]);for(let Rt=0;Rt<et.length;Rt++){const wt=et[Rt];Ht?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,0,0,Ot,Lt,wt.image[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,Yt,Ot,Lt,wt.image[lt])}}}g(M)&&m(s.TEXTURE_CUBE_MAP),st.__version=ct.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Z(C,M,j,it,ct,st){const Dt=r.convert(j.format,j.colorSpace),Mt=r.convert(j.type),At=x(j.internalFormat,Dt,Mt,j.colorSpace),qt=n.get(M),ft=n.get(j);if(ft.__renderTarget=M,!qt.__hasExternalTextures){const Ct=Math.max(1,M.width>>st),Nt=Math.max(1,M.height>>st);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,st,At,Ct,Nt,M.depth,0,Dt,Mt,null):e.texImage2D(ct,st,At,Ct,Nt,0,Dt,Mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),_t(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,ct,ft.__webglTexture,0,at(M)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,ct,ft.__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function W(C,M,j){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){const it=M.depthTexture,ct=it&&it.isDepthTexture?it.type:null,st=_(M.stencilBuffer,ct),Dt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=at(M);_t(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt,st,M.width,M.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,st,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,st,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Dt,s.RENDERBUFFER,C)}else{const it=M.textures;for(let ct=0;ct<it.length;ct++){const st=it[ct],Dt=r.convert(st.format,st.colorSpace),Mt=r.convert(st.type),At=x(st.internalFormat,Dt,Mt,st.colorSpace),qt=at(M);j&&_t(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,At,M.width,M.height):_t(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,At,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,At,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function rt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(M.depthTexture);it.__renderTarget=M,(!it.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const ct=it.__webglTexture,st=at(M);if(M.depthTexture.format===xi)_t(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0);else if(M.depthTexture.format===wi)_t(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function vt(C){const M=n.get(C),j=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const it=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),it){const ct=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,it.removeEventListener("dispose",ct)};it.addEventListener("dispose",ct),M.__depthDisposeCallback=ct}M.__boundDepthTexture=it}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");rt(M.__webglFramebuffer,C)}else if(j){M.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[it]),M.__webglDepthbuffer[it]===void 0)M.__webglDepthbuffer[it]=s.createRenderbuffer(),W(M.__webglDepthbuffer[it],C,!1);else{const ct=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer[it];s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,st)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),W(M.__webglDepthbuffer,C,!1);else{const it=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ct)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(C,M,j){const it=n.get(C);M!==void 0&&Z(it.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&vt(C)}function yt(C){const M=C.texture,j=n.get(C),it=n.get(M);C.addEventListener("dispose",I);const ct=C.textures,st=C.isWebGLCubeRenderTarget===!0,Dt=ct.length>1;if(Dt||(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=M.version,o.memory.textures++),st){j.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer[Mt]=[];for(let At=0;At<M.mipmaps.length;At++)j.__webglFramebuffer[Mt][At]=s.createFramebuffer()}else j.__webglFramebuffer[Mt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){j.__webglFramebuffer=[];for(let Mt=0;Mt<M.mipmaps.length;Mt++)j.__webglFramebuffer[Mt]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(Dt)for(let Mt=0,At=ct.length;Mt<At;Mt++){const qt=n.get(ct[Mt]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&_t(C)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ct.length;Mt++){const At=ct[Mt];j.__webglColorRenderbuffer[Mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[Mt]);const qt=r.convert(At.format,At.colorSpace),ft=r.convert(At.type),Ct=x(At.internalFormat,qt,ft,At.colorSpace,C.isXRRenderTarget===!0),Nt=at(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Ct,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,j.__webglColorRenderbuffer[Mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),W(j.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),Y(s.TEXTURE_CUBE_MAP,M);for(let Mt=0;Mt<6;Mt++)if(M.mipmaps&&M.mipmaps.length>0)for(let At=0;At<M.mipmaps.length;At++)Z(j.__webglFramebuffer[Mt][At],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,At);else Z(j.__webglFramebuffer[Mt],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);g(M)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let Mt=0,At=ct.length;Mt<At;Mt++){const qt=ct[Mt],ft=n.get(qt);e.bindTexture(s.TEXTURE_2D,ft.__webglTexture),Y(s.TEXTURE_2D,qt),Z(j.__webglFramebuffer,C,qt,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,0),g(qt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let Mt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Mt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Mt,it.__webglTexture),Y(Mt,M),M.mipmaps&&M.mipmaps.length>0)for(let At=0;At<M.mipmaps.length;At++)Z(j.__webglFramebuffer[At],C,M,s.COLOR_ATTACHMENT0,Mt,At);else Z(j.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,Mt,0);g(M)&&m(Mt),e.unbindTexture()}C.depthBuffer&&vt(C)}function tt(C){const M=C.textures;for(let j=0,it=M.length;j<it;j++){const ct=M[j];if(g(ct)){const st=R(C),Dt=n.get(ct).__webglTexture;e.bindTexture(st,Dt),m(st),e.unbindTexture()}}}const Q=[],T=[];function gt(C){if(C.samples>0){if(_t(C)===!1){const M=C.textures,j=C.width,it=C.height;let ct=s.COLOR_BUFFER_BIT;const st=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=n.get(C),Mt=M.length>1;if(Mt)for(let At=0;At<M.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let At=0;At<M.length;At++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),Mt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[At]);const qt=n.get(M[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,j,it,0,0,j,it,ct,s.NEAREST),l===!0&&(Q.length=0,T.length=0,Q.push(s.COLOR_ATTACHMENT0+At),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Q.push(st),T.push(st),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,T)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Mt)for(let At=0;At<M.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[At]);const qt=n.get(M[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function at(C){return Math.min(i.maxSamples,C.samples)}function _t(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ot(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function bt(C,M){const j=C.colorSpace,it=C.format,ct=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||j!==Ai&&j!==wn&&($t.getTransfer(j)===ne?(it!==$e||ct!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),M}function ut(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=dt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=_t}function Km(s,t){function e(n,i=wn){let r;const o=$t.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===xo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ul)return s.BYTE;if(n===dl)return s.SHORT;if(n===Wi)return s.UNSIGNED_SHORT;if(n===vo)return s.INT;if(n===Xn)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===Ji)return s.HALF_FLOAT;if(n===pl)return s.ALPHA;if(n===ml)return s.RGB;if(n===$e)return s.RGBA;if(n===gl)return s.LUMINANCE;if(n===_l)return s.LUMINANCE_ALPHA;if(n===xi)return s.DEPTH_COMPONENT;if(n===wi)return s.DEPTH_STENCIL;if(n===vl)return s.RED;if(n===Mo)return s.RED_INTEGER;if(n===xl)return s.RG;if(n===So)return s.RG_INTEGER;if(n===bo)return s.RGBA_INTEGER;if(n===As||n===Rs||n===Cs||n===Ps)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===As)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===As)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kr||n===Vr||n===Gr||n===Hr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wr||n===qr||n===Xr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wr||n===qr)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yr||n===jr||n===Jr||n===Zr||n===$r||n===Kr||n===Qr||n===to||n===eo||n===no||n===io||n===so||n===ro||n===oo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$r)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===to)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===no)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===io)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ro)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ls||n===ao||n===lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ls)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===co||n===ho||n===uo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ls)return r.COMPRESSED_RED_RGTC1_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ti?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ce,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ln({vertexShader:Qm,fragmentShader:t0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n0 extends Zn{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,h=null;const v=new e0,g=e.getContextAttributes();let m=null,R=null;const x=[],_=[],P=new mt;let L=null;const I=new He;I.viewport=new ue;const U=new He;U.viewport=new ue;const S=[I,U],y=new xu;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let G=x[N];return G===void 0&&(G=new dr,x[N]=G),G.getTargetRaySpace()},this.getControllerGrip=function(N){let G=x[N];return G===void 0&&(G=new dr,x[N]=G),G.getGripSpace()},this.getHand=function(N){let G=x[N];return G===void 0&&(G=new dr,x[N]=G),G.getHandSpace()};function F(N){const G=_.indexOf(N.inputSource);if(G===-1)return;const Z=x[G];Z!==void 0&&(Z.update(N.inputSource,N.frame,c||o),Z.dispatchEvent({type:N.type,data:N.inputSource}))}function q(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",H);for(let N=0;N<x.length;N++){const G=_[N];G!==null&&(_[N]=null,x[N].disconnect(G))}D=null,O=null,v.reset(),t.setRenderTarget(m),p=null,f=null,d=null,i=null,R=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return h},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",q),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,W=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=g.stencil?wi:xi,W=g.stencil?Ti:Xn);const vt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(vt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new Yn(f.textureWidth,f.textureHeight,{format:$e,type:xn,depthTexture:new Dl(f.textureWidth,f.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Z={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new Yn(p.framebufferWidth,p.framebufferHeight,{format:$e,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(N){for(let G=0;G<N.removed.length;G++){const Z=N.removed[G],W=_.indexOf(Z);W>=0&&(_[W]=null,x[W].disconnect(Z))}for(let G=0;G<N.added.length;G++){const Z=N.added[G];let W=_.indexOf(Z);if(W===-1){for(let vt=0;vt<x.length;vt++)if(vt>=_.length){_.push(Z),W=vt;break}else if(_[vt]===null){_[vt]=Z,W=vt;break}if(W===-1)break}const rt=x[W];rt&&rt.connect(Z)}}const k=new b,K=new b;function X(N,G,Z){k.setFromMatrixPosition(G.matrixWorld),K.setFromMatrixPosition(Z.matrixWorld);const W=k.distanceTo(K),rt=G.projectionMatrix.elements,vt=Z.projectionMatrix.elements,dt=rt[14]/(rt[10]-1),yt=rt[14]/(rt[10]+1),tt=(rt[9]+1)/rt[5],Q=(rt[9]-1)/rt[5],T=(rt[8]-1)/rt[0],gt=(vt[8]+1)/vt[0],at=dt*T,_t=dt*gt,ot=W/(-T+gt),bt=ot*-T;if(G.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(bt),N.translateZ(ot),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),rt[10]===-1)N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const ut=dt+ot,C=yt+ot,M=at-bt,j=_t+(W-bt),it=tt*yt/C*ut,ct=Q*yt/C*ut;N.projectionMatrix.makePerspective(M,j,it,ct,ut,C),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function ht(N,G){G===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(G.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;let G=N.near,Z=N.far;v.texture!==null&&(v.depthNear>0&&(G=v.depthNear),v.depthFar>0&&(Z=v.depthFar)),y.near=U.near=I.near=G,y.far=U.far=I.far=Z,(D!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,O=y.far),I.layers.mask=N.layers.mask|2,U.layers.mask=N.layers.mask|4,y.layers.mask=I.layers.mask|U.layers.mask;const W=N.parent,rt=y.cameras;ht(y,W);for(let vt=0;vt<rt.length;vt++)ht(rt[vt],W);rt.length===2?X(y,I,U):y.projectionMatrix.copy(I.projectionMatrix),A(N,y,W)};function A(N,G,Z){Z===null?N.matrix.copy(G.matrixWorld):(N.matrix.copy(Z.matrixWorld),N.matrix.invert(),N.matrix.multiply(G.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=qi*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let w=null;function Y(N,G){if(u=G.getViewerPose(c||o),h=G,u!==null){const Z=u.views;p!==null&&(t.setRenderTargetFramebuffer(R,p.framebuffer),t.setRenderTarget(R));let W=!1;Z.length!==y.cameras.length&&(y.cameras.length=0,W=!0);for(let dt=0;dt<Z.length;dt++){const yt=Z[dt];let tt=null;if(p!==null)tt=p.getViewport(yt);else{const T=d.getViewSubImage(f,yt);tt=T.viewport,dt===0&&(t.setRenderTargetTextures(R,T.colorTexture,f.ignoreDepthValues?void 0:T.depthStencilTexture),t.setRenderTarget(R))}let Q=S[dt];Q===void 0&&(Q=new He,Q.layers.enable(dt),Q.viewport=new ue,S[dt]=Q),Q.matrix.fromArray(yt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(yt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(tt.x,tt.y,tt.width,tt.height),dt===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),W===!0&&y.cameras.push(Q)}const rt=i.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&d){const dt=d.getDepthInformation(Z[0]);dt&&dt.isValid&&dt.texture&&v.init(t,dt,i.renderState)}}for(let Z=0;Z<x.length;Z++){const W=_[Z],rt=x[Z];W!==null&&rt!==void 0&&rt.update(W,G,c||o)}w&&w(N,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),h=null}const nt=new Yl;nt.setAnimationLoop(Y),this.setAnimationLoop=function(N){w=N},this.dispose=function(){}}}const zn=new tn,i0=new oe;function s0(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Rl(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,R,x,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),h(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,R,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===De&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===De&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const R=t.get(m),x=R.envMap,_=R.envMapRotation;x&&(g.envMap.value=x,zn.copy(_),zn.x*=-1,zn.y*=-1,zn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),g.envMapRotation.value.setFromMatrix4(i0.makeRotationFromEuler(zn)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,R,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*R,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,R){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===De&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function h(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const R=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function r0(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,x){const _=x.program;n.uniformBlockBinding(R,_)}function c(R,x){let _=i[R.id];_===void 0&&(h(R),_=u(R),i[R.id]=_,R.addEventListener("dispose",g));const P=x.program;n.updateUBOMapping(R,P);const L=t.render.frame;r[R.id]!==L&&(f(R),r[R.id]=L)}function u(R){const x=d();R.__bindingPointIndex=x;const _=s.createBuffer(),P=R.__size,L=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,P,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const x=i[R.id],_=R.uniforms,P=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let L=0,I=_.length;L<I;L++){const U=Array.isArray(_[L])?_[L]:[_[L]];for(let S=0,y=U.length;S<y;S++){const D=U[S];if(p(D,L,S,P)===!0){const O=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let H=0;H<F.length;H++){const k=F[H],K=v(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,O+q,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(R,x,_,P){const L=R.value,I=x+"_"+_;if(P[I]===void 0)return typeof L=="number"||typeof L=="boolean"?P[I]=L:P[I]=L.clone(),!0;{const U=P[I];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return P[I]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function h(R){const x=R.uniforms;let _=0;const P=16;for(let I=0,U=x.length;I<U;I++){const S=Array.isArray(x[I])?x[I]:[x[I]];for(let y=0,D=S.length;y<D;y++){const O=S[y],F=Array.isArray(O.value)?O.value:[O.value];for(let q=0,H=F.length;q<H;q++){const k=F[q],K=v(k),X=_%P,ht=X%K.boundary,A=X+ht;_+=ht,A!==0&&P-A<K.storage&&(_+=P-A),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=K.storage}}}const L=_%P;return L>0&&(_+=P-L),R.__size=_,R.__cache={},this}function v(R){const x={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(x.boundary=4,x.storage=4):R.isVector2?(x.boundary=8,x.storage=8):R.isVector3||R.isColor?(x.boundary=16,x.storage=12):R.isVector4?(x.boundary=16,x.storage=16):R.isMatrix3?(x.boundary=48,x.storage=48):R.isMatrix4?(x.boundary=64,x.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),x}function g(R){const x=R.target;x.removeEventListener("dispose",g);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const R in i)s.deleteBuffer(i[R]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class o0{constructor(t={}){const{canvas:e=oh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const h=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const R=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Rn,this.toneMappingExposure=1;const _=this;let P=!1,L=0,I=0,U=null,S=-1,y=null;const D=new ue,O=new ue;let F=null;const q=new Xt(0);let H=0,k=e.width,K=e.height,X=1,ht=null,A=null;const w=new ue(0,0,k,K),Y=new ue(0,0,k,K);let nt=!1;const N=new Ro;let G=!1,Z=!1;this.transmissionResolutionScale=1;const W=new oe,rt=new oe,vt=new b,dt=new ue,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Q(){return U===null?X:1}let T=n;function gt(E,z){return e.getContext(E,z)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_o}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),T===null){const z="webgl2";if(T=gt(z,E),T===null)throw gt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let at,_t,ot,bt,ut,C,M,j,it,ct,st,Dt,Mt,At,qt,ft,Ct,Nt,Ot,Lt,Yt,Ht,re,B;function Et(){at=new gp(T),at.init(),Ht=new Km(T,at),_t=new cp(T,at,t,Ht),ot=new Zm(T,at),_t.reverseDepthBuffer&&f&&ot.buffers.depth.setReversed(!0),bt=new xp(T),ut=new Om,C=new $m(T,at,ot,ut,_t,Ht,bt),M=new up(_),j=new mp(_),it=new Eu(T),re=new ap(T,it),ct=new _p(T,it,bt,re),st=new Mp(T,ct,it,bt),Ot=new yp(T,_t,C),ft=new hp(ut),Dt=new Nm(_,M,j,at,_t,re,ft),Mt=new s0(_,ut),At=new zm,qt=new qm(at),Nt=new op(_,M,j,ot,st,p,l),Ct=new jm(_,st,_t),B=new r0(T,bt,_t,ot),Lt=new lp(T,at,bt),Yt=new vp(T,at,bt),bt.programs=Dt.programs,_.capabilities=_t,_.extensions=at,_.properties=ut,_.renderLists=At,_.shadowMap=Ct,_.state=ot,_.info=bt}Et();const et=new n0(_,T);this.xr=et,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const E=at.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=at.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(k,K,!1))},this.getSize=function(E){return E.set(k,K)},this.setSize=function(E,z,J=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,K=z,e.width=Math.floor(E*X),e.height=Math.floor(z*X),J===!0&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(k*X,K*X).floor()},this.setDrawingBufferSize=function(E,z,J){k=E,K=z,X=J,e.width=Math.floor(E*J),e.height=Math.floor(z*J),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(w)},this.setViewport=function(E,z,J,$){E.isVector4?w.set(E.x,E.y,E.z,E.w):w.set(E,z,J,$),ot.viewport(D.copy(w).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(Y)},this.setScissor=function(E,z,J,$){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,z,J,$),ot.scissor(O.copy(Y).multiplyScalar(X).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(E){ot.setScissorTest(nt=E)},this.setOpaqueSort=function(E){ht=E},this.setTransparentSort=function(E){A=E},this.getClearColor=function(E){return E.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,J=!0){let $=0;if(E){let V=!1;if(U!==null){const pt=U.texture.format;V=pt===bo||pt===So||pt===Mo}if(V){const pt=U.texture.type,Tt=pt===xn||pt===Xn||pt===Wi||pt===Ti||pt===xo||pt===yo,Pt=Nt.getClearColor(),It=Nt.getClearAlpha(),Bt=Pt.r,zt=Pt.g,Ut=Pt.b;Tt?(h[0]=Bt,h[1]=zt,h[2]=Ut,h[3]=It,T.clearBufferuiv(T.COLOR,0,h)):(v[0]=Bt,v[1]=zt,v[2]=Ut,v[3]=It,T.clearBufferiv(T.COLOR,0,v))}else $|=T.COLOR_BUFFER_BIT}z&&($|=T.DEPTH_BUFFER_BIT),J&&($|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Nt.dispose(),At.dispose(),qt.dispose(),ut.dispose(),M.dispose(),j.dispose(),st.dispose(),re.dispose(),B.dispose(),Dt.dispose(),et.dispose(),et.removeEventListener("sessionstart",zo),et.removeEventListener("sessionend",ko),In.stop()};function lt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=bt.autoReset,z=Ct.enabled,J=Ct.autoUpdate,$=Ct.needsUpdate,V=Ct.type;Et(),bt.autoReset=E,Ct.enabled=z,Ct.autoUpdate=J,Ct.needsUpdate=$,Ct.type=V}function wt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function kt(E){const z=E.target;z.removeEventListener("dispose",kt),ce(z)}function ce(E){Me(E),ut.remove(E)}function Me(E){const z=ut.get(E).programs;z!==void 0&&(z.forEach(function(J){Dt.releaseProgram(J)}),E.isShaderMaterial&&Dt.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,J,$,V,pt){z===null&&(z=yt);const Tt=V.isMesh&&V.matrixWorld.determinant()<0,Pt=Ql(E,z,J,$,V);ot.setMaterial($,Tt);let It=J.index,Bt=1;if($.wireframe===!0){if(It=ct.getWireframeAttribute(J),It===void 0)return;Bt=2}const zt=J.drawRange,Ut=J.attributes.position;let jt=zt.start*Bt,Qt=(zt.start+zt.count)*Bt;pt!==null&&(jt=Math.max(jt,pt.start*Bt),Qt=Math.min(Qt,(pt.start+pt.count)*Bt)),It!==null?(jt=Math.max(jt,0),Qt=Math.min(Qt,It.count)):Ut!=null&&(jt=Math.max(jt,0),Qt=Math.min(Qt,Ut.count));const de=Qt-jt;if(de<0||de===1/0)return;re.setup(V,$,Pt,J,It);let he,Jt=Lt;if(It!==null&&(he=it.get(It),Jt=Yt,Jt.setIndex(he)),V.isMesh)$.wireframe===!0?(ot.setLineWidth($.wireframeLinewidth*Q()),Jt.setMode(T.LINES)):Jt.setMode(T.TRIANGLES);else if(V.isLine){let Ft=$.linewidth;Ft===void 0&&(Ft=1),ot.setLineWidth(Ft*Q()),V.isLineSegments?Jt.setMode(T.LINES):V.isLineLoop?Jt.setMode(T.LINE_LOOP):Jt.setMode(T.LINE_STRIP)}else V.isPoints?Jt.setMode(T.POINTS):V.isSprite&&Jt.setMode(T.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)kn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Jt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))Jt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ft=V._multiDrawStarts,xe=V._multiDrawCounts,te=V._multiDrawCount,Xe=It?it.get(It).bytesPerElement:1,Kn=ut.get($).currentProgram.getUniforms();for(let Ue=0;Ue<te;Ue++)Kn.setValue(T,"_gl_DrawID",Ue),Jt.render(Ft[Ue]/Xe,xe[Ue])}else if(V.isInstancedMesh)Jt.renderInstances(jt,de,V.count);else if(J.isInstancedBufferGeometry){const Ft=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,xe=Math.min(J.instanceCount,Ft);Jt.renderInstances(jt,de,xe)}else Jt.render(jt,de)};function ee(E,z,J){E.transparent===!0&&E.side===Re&&E.forceSinglePass===!1?(E.side=De,E.needsUpdate=!0,Ki(E,z,J),E.side=Pn,E.needsUpdate=!0,Ki(E,z,J),E.side=Re):Ki(E,z,J)}this.compile=function(E,z,J=null){J===null&&(J=E),m=qt.get(J),m.init(z),x.push(m),J.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),E!==J&&E.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const $=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pt=V.material;if(pt)if(Array.isArray(pt))for(let Tt=0;Tt<pt.length;Tt++){const Pt=pt[Tt];ee(Pt,J,V),$.add(Pt)}else ee(pt,J,V),$.add(pt)}),m=x.pop(),$},this.compileAsync=function(E,z,J=null){const $=this.compile(E,z,J);return new Promise(V=>{function pt(){if($.forEach(function(Tt){ut.get(Tt).currentProgram.isReady()&&$.delete(Tt)}),$.size===0){V(E);return}setTimeout(pt,10)}at.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let qe=null;function an(E){qe&&qe(E)}function zo(){In.stop()}function ko(){In.start()}const In=new Yl;In.setAnimationLoop(an),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(E){qe=E,et.setAnimationLoop(E),E===null?In.stop():In.start()},et.addEventListener("sessionstart",zo),et.addEventListener("sessionend",ko),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(z),z=et.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,z,U),m=qt.get(E,x.length),m.init(z),x.push(m),rt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),N.setFromProjectionMatrix(rt),Z=this.localClippingEnabled,G=ft.init(this.clippingPlanes,Z),g=At.get(E,R.length),g.init(),R.push(g),et.enabled===!0&&et.isPresenting===!0){const pt=_.xr.getDepthSensingMesh();pt!==null&&Ws(pt,z,-1/0,_.sortObjects)}Ws(E,z,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ht,A),tt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,tt&&Nt.addToRenderList(g,E),this.info.render.frame++,G===!0&&ft.beginShadows();const J=m.state.shadowsArray;Ct.render(J,E,z),G===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,V=g.transmissive;if(m.setupLights(),z.isArrayCamera){const pt=z.cameras;if(V.length>0)for(let Tt=0,Pt=pt.length;Tt<Pt;Tt++){const It=pt[Tt];Go($,V,E,It)}tt&&Nt.render(E);for(let Tt=0,Pt=pt.length;Tt<Pt;Tt++){const It=pt[Tt];Vo(g,E,It,It.viewport)}}else V.length>0&&Go($,V,E,z),tt&&Nt.render(E),Vo(g,E,z);U!==null&&I===0&&(C.updateMultisampleRenderTarget(U),C.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(_,E,z),re.resetDefaultState(),S=-1,y=null,x.pop(),x.length>0?(m=x[x.length-1],G===!0&&ft.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,R.pop(),R.length>0?g=R[R.length-1]:g=null};function Ws(E,z,J,$){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||N.intersectsSprite(E)){$&&dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(rt);const Tt=st.update(E),Pt=E.material;Pt.visible&&g.push(E,Tt,Pt,J,dt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||N.intersectsObject(E))){const Tt=st.update(E),Pt=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),dt.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),dt.copy(Tt.boundingSphere.center)),dt.applyMatrix4(E.matrixWorld).applyMatrix4(rt)),Array.isArray(Pt)){const It=Tt.groups;for(let Bt=0,zt=It.length;Bt<zt;Bt++){const Ut=It[Bt],jt=Pt[Ut.materialIndex];jt&&jt.visible&&g.push(E,Tt,jt,J,dt.z,Ut)}}else Pt.visible&&g.push(E,Tt,Pt,J,dt.z,null)}}const pt=E.children;for(let Tt=0,Pt=pt.length;Tt<Pt;Tt++)Ws(pt[Tt],z,J,$)}function Vo(E,z,J,$){const V=E.opaque,pt=E.transmissive,Tt=E.transparent;m.setupLightsView(J),G===!0&&ft.setGlobalState(_.clippingPlanes,J),$&&ot.viewport(D.copy($)),V.length>0&&$i(V,z,J),pt.length>0&&$i(pt,z,J),Tt.length>0&&$i(Tt,z,J),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Go(E,z,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Yn(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Ji:xn,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const pt=m.state.transmissionRenderTarget[$.id],Tt=$.viewport||D;pt.setSize(Tt.z*_.transmissionResolutionScale,Tt.w*_.transmissionResolutionScale);const Pt=_.getRenderTarget();_.setRenderTarget(pt),_.getClearColor(q),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),tt&&Nt.render(J);const It=_.toneMapping;_.toneMapping=Rn;const Bt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),G===!0&&ft.setGlobalState(_.clippingPlanes,$),$i(E,J,$),C.updateMultisampleRenderTarget(pt),C.updateRenderTargetMipmap(pt),at.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Ut=0,jt=z.length;Ut<jt;Ut++){const Qt=z[Ut],de=Qt.object,he=Qt.geometry,Jt=Qt.material,Ft=Qt.group;if(Jt.side===Re&&de.layers.test($.layers)){const xe=Jt.side;Jt.side=De,Jt.needsUpdate=!0,Ho(de,J,$,he,Jt,Ft),Jt.side=xe,Jt.needsUpdate=!0,zt=!0}}zt===!0&&(C.updateMultisampleRenderTarget(pt),C.updateRenderTargetMipmap(pt))}_.setRenderTarget(Pt),_.setClearColor(q,H),Bt!==void 0&&($.viewport=Bt),_.toneMapping=It}function $i(E,z,J){const $=z.isScene===!0?z.overrideMaterial:null;for(let V=0,pt=E.length;V<pt;V++){const Tt=E[V],Pt=Tt.object,It=Tt.geometry,Bt=$===null?Tt.material:$,zt=Tt.group;Pt.layers.test(J.layers)&&Ho(Pt,z,J,It,Bt,zt)}}function Ho(E,z,J,$,V,pt){E.onBeforeRender(_,z,J,$,V,pt),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(_,z,J,$,E,pt),V.transparent===!0&&V.side===Re&&V.forceSinglePass===!1?(V.side=De,V.needsUpdate=!0,_.renderBufferDirect(J,z,$,V,E,pt),V.side=Pn,V.needsUpdate=!0,_.renderBufferDirect(J,z,$,V,E,pt),V.side=Re):_.renderBufferDirect(J,z,$,V,E,pt),E.onAfterRender(_,z,J,$,V,pt)}function Ki(E,z,J){z.isScene!==!0&&(z=yt);const $=ut.get(E),V=m.state.lights,pt=m.state.shadowsArray,Tt=V.state.version,Pt=Dt.getParameters(E,V.state,pt,z,J),It=Dt.getProgramCacheKey(Pt);let Bt=$.programs;$.environment=E.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(E.isMeshStandardMaterial?j:M).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",kt),Bt=new Map,$.programs=Bt);let zt=Bt.get(It);if(zt!==void 0){if($.currentProgram===zt&&$.lightsStateVersion===Tt)return qo(E,Pt),zt}else Pt.uniforms=Dt.getUniforms(E),E.onBeforeCompile(Pt,_),zt=Dt.acquireProgram(Pt,It),Bt.set(It,zt),$.uniforms=Pt.uniforms;const Ut=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=ft.uniform),qo(E,Pt),$.needsLights=ec(E),$.lightsStateVersion=Tt,$.needsLights&&(Ut.ambientLightColor.value=V.state.ambient,Ut.lightProbe.value=V.state.probe,Ut.directionalLights.value=V.state.directional,Ut.directionalLightShadows.value=V.state.directionalShadow,Ut.spotLights.value=V.state.spot,Ut.spotLightShadows.value=V.state.spotShadow,Ut.rectAreaLights.value=V.state.rectArea,Ut.ltc_1.value=V.state.rectAreaLTC1,Ut.ltc_2.value=V.state.rectAreaLTC2,Ut.pointLights.value=V.state.point,Ut.pointLightShadows.value=V.state.pointShadow,Ut.hemisphereLights.value=V.state.hemi,Ut.directionalShadowMap.value=V.state.directionalShadowMap,Ut.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ut.spotShadowMap.value=V.state.spotShadowMap,Ut.spotLightMatrix.value=V.state.spotLightMatrix,Ut.spotLightMap.value=V.state.spotLightMap,Ut.pointShadowMap.value=V.state.pointShadowMap,Ut.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=zt,$.uniformsList=null,zt}function Wo(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Is.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function qo(E,z){const J=ut.get(E);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Ql(E,z,J,$,V){z.isScene!==!0&&(z=yt),C.resetTextureUnits();const pt=z.fog,Tt=$.isMeshStandardMaterial?z.environment:null,Pt=U===null?_.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ai,It=($.isMeshStandardMaterial?j:M).get($.envMap||Tt),Bt=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,zt=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ut=!!J.morphAttributes.position,jt=!!J.morphAttributes.normal,Qt=!!J.morphAttributes.color;let de=Rn;$.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(de=_.toneMapping);const he=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Jt=he!==void 0?he.length:0,Ft=ut.get($),xe=m.state.lights;if(G===!0&&(Z===!0||E!==y)){const Te=E===y&&$.id===S;ft.setState($,E,Te)}let te=!1;$.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==xe.state.version||Ft.outputColorSpace!==Pt||V.isBatchedMesh&&Ft.batching===!1||!V.isBatchedMesh&&Ft.batching===!0||V.isBatchedMesh&&Ft.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ft.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ft.instancing===!1||!V.isInstancedMesh&&Ft.instancing===!0||V.isSkinnedMesh&&Ft.skinning===!1||!V.isSkinnedMesh&&Ft.skinning===!0||V.isInstancedMesh&&Ft.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ft.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ft.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ft.instancingMorph===!1&&V.morphTexture!==null||Ft.envMap!==It||$.fog===!0&&Ft.fog!==pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ft.numPlanes||Ft.numIntersection!==ft.numIntersection)||Ft.vertexAlphas!==Bt||Ft.vertexTangents!==zt||Ft.morphTargets!==Ut||Ft.morphNormals!==jt||Ft.morphColors!==Qt||Ft.toneMapping!==de||Ft.morphTargetsCount!==Jt)&&(te=!0):(te=!0,Ft.__version=$.version);let Xe=Ft.currentProgram;te===!0&&(Xe=Ki($,z,V));let Kn=!1,Ue=!1,Li=!1;const ae=Xe.getUniforms(),Be=Ft.uniforms;if(ot.useProgram(Xe.program)&&(Kn=!0,Ue=!0,Li=!0),$.id!==S&&(S=$.id,Ue=!0),Kn||y!==E){ot.buffers.depth.getReversed()?(W.copy(E.projectionMatrix),lh(W),ch(W),ae.setValue(T,"projectionMatrix",W)):ae.setValue(T,"projectionMatrix",E.projectionMatrix),ae.setValue(T,"viewMatrix",E.matrixWorldInverse);const Pe=ae.map.cameraPosition;Pe!==void 0&&Pe.setValue(T,vt.setFromMatrixPosition(E.matrixWorld)),_t.logarithmicDepthBuffer&&ae.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ae.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Ue=!0,Li=!0)}if(V.isSkinnedMesh){ae.setOptional(T,V,"bindMatrix"),ae.setOptional(T,V,"bindMatrixInverse");const Te=V.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ae.setValue(T,"boneTexture",Te.boneTexture,C))}V.isBatchedMesh&&(ae.setOptional(T,V,"batchingTexture"),ae.setValue(T,"batchingTexture",V._matricesTexture,C),ae.setOptional(T,V,"batchingIdTexture"),ae.setValue(T,"batchingIdTexture",V._indirectTexture,C),ae.setOptional(T,V,"batchingColorTexture"),V._colorsTexture!==null&&ae.setValue(T,"batchingColorTexture",V._colorsTexture,C));const ze=J.morphAttributes;if((ze.position!==void 0||ze.normal!==void 0||ze.color!==void 0)&&Ot.update(V,J,Xe),(Ue||Ft.receiveShadow!==V.receiveShadow)&&(Ft.receiveShadow=V.receiveShadow,ae.setValue(T,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Be.envMap.value=It,Be.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(Be.envMapIntensity.value=z.environmentIntensity),Ue&&(ae.setValue(T,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&tc(Be,Li),pt&&$.fog===!0&&Mt.refreshFogUniforms(Be,pt),Mt.refreshMaterialUniforms(Be,$,X,K,m.state.transmissionRenderTarget[E.id]),Is.upload(T,Wo(Ft),Be,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Is.upload(T,Wo(Ft),Be,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ae.setValue(T,"center",V.center),ae.setValue(T,"modelViewMatrix",V.modelViewMatrix),ae.setValue(T,"normalMatrix",V.normalMatrix),ae.setValue(T,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Te=$.uniformsGroups;for(let Pe=0,qs=Te.length;Pe<qs;Pe++){const Dn=Te[Pe];B.update(Dn,Xe),B.bind(Dn,Xe)}}return Xe}function tc(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function ec(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,z,J){ut.get(E.texture).__webglTexture=z,ut.get(E.depthTexture).__webglTexture=J;const $=ut.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=J===void 0,$.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){const J=ut.get(E);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0};const nc=T.createFramebuffer();this.setRenderTarget=function(E,z=0,J=0){U=E,L=z,I=J;let $=!0,V=null,pt=!1,Tt=!1;if(E){const It=ut.get(E);if(It.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(T.FRAMEBUFFER,null),$=!1;else if(It.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(It.__hasExternalTextures)C.rebindTextures(E,ut.get(E.texture).__webglTexture,ut.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(It.__boundDepthTexture!==Ut){if(Ut!==null&&ut.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Tt=!0);const zt=ut.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[z])?V=zt[z][J]:V=zt[z],pt=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?V=ut.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?V=zt[J]:V=zt,D.copy(E.viewport),O.copy(E.scissor),F=E.scissorTest}else D.copy(w).multiplyScalar(X).floor(),O.copy(Y).multiplyScalar(X).floor(),F=nt;if(J!==0&&(V=nc),ot.bindFramebuffer(T.FRAMEBUFFER,V)&&$&&ot.drawBuffers(E,V),ot.viewport(D),ot.scissor(O),ot.setScissorTest(F),pt){const It=ut.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+z,It.__webglTexture,J)}else if(Tt){const It=ut.get(E.texture),Bt=z;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,It.__webglTexture,J,Bt)}else if(E!==null&&J!==0){const It=ut.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,It.__webglTexture,J)}S=-1},this.readRenderTargetPixels=function(E,z,J,$,V,pt,Tt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=ut.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){ot.bindFramebuffer(T.FRAMEBUFFER,Pt);try{const It=E.texture,Bt=It.format,zt=It.type;if(!_t.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-$&&J>=0&&J<=E.height-V&&T.readPixels(z,J,$,V,Ht.convert(Bt),Ht.convert(zt),pt)}finally{const It=U!==null?ut.get(U).__webglFramebuffer:null;ot.bindFramebuffer(T.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,z,J,$,V,pt,Tt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=ut.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){const It=E.texture,Bt=It.format,zt=It.type;if(!_t.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-$&&J>=0&&J<=E.height-V){ot.bindFramebuffer(T.FRAMEBUFFER,Pt);const Ut=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ut),T.bufferData(T.PIXEL_PACK_BUFFER,pt.byteLength,T.STREAM_READ),T.readPixels(z,J,$,V,Ht.convert(Bt),Ht.convert(zt),0);const jt=U!==null?ut.get(U).__webglFramebuffer:null;ot.bindFramebuffer(T.FRAMEBUFFER,jt);const Qt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await ah(T,Qt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ut),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,pt),T.deleteBuffer(Ut),T.deleteSync(Qt),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,J=0){E.isTexture!==!0&&(kn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);const $=Math.pow(2,-J),V=Math.floor(E.image.width*$),pt=Math.floor(E.image.height*$),Tt=z!==null?z.x:0,Pt=z!==null?z.y:0;C.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,J,0,0,Tt,Pt,V,pt),ot.unbindTexture()};const ic=T.createFramebuffer(),sc=T.createFramebuffer();this.copyTextureToTexture=function(E,z,J=null,$=null,V=0,pt=null){E.isTexture!==!0&&(kn("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],z=arguments[2],pt=arguments[3]||0,J=null),pt===null&&(V!==0?(kn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=V,V=0):pt=0);let Tt,Pt,It,Bt,zt,Ut,jt,Qt,de;const he=E.isCompressedTexture?E.mipmaps[pt]:E.image;if(J!==null)Tt=J.max.x-J.min.x,Pt=J.max.y-J.min.y,It=J.isBox3?J.max.z-J.min.z:1,Bt=J.min.x,zt=J.min.y,Ut=J.isBox3?J.min.z:0;else{const ze=Math.pow(2,-V);Tt=Math.floor(he.width*ze),Pt=Math.floor(he.height*ze),E.isDataArrayTexture?It=he.depth:E.isData3DTexture?It=Math.floor(he.depth*ze):It=1,Bt=0,zt=0,Ut=0}$!==null?(jt=$.x,Qt=$.y,de=$.z):(jt=0,Qt=0,de=0);const Jt=Ht.convert(z.format),Ft=Ht.convert(z.type);let xe;z.isData3DTexture?(C.setTexture3D(z,0),xe=T.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(C.setTexture2DArray(z,0),xe=T.TEXTURE_2D_ARRAY):(C.setTexture2D(z,0),xe=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,z.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,z.unpackAlignment);const te=T.getParameter(T.UNPACK_ROW_LENGTH),Xe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Kn=T.getParameter(T.UNPACK_SKIP_PIXELS),Ue=T.getParameter(T.UNPACK_SKIP_ROWS),Li=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,he.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,he.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Bt),T.pixelStorei(T.UNPACK_SKIP_ROWS,zt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ut);const ae=E.isDataArrayTexture||E.isData3DTexture,Be=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const ze=ut.get(E),Te=ut.get(z),Pe=ut.get(ze.__renderTarget),qs=ut.get(Te.__renderTarget);ot.bindFramebuffer(T.READ_FRAMEBUFFER,Pe.__webglFramebuffer),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,qs.__webglFramebuffer);for(let Dn=0;Dn<It;Dn++)ae&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ut.get(E).__webglTexture,V,Ut+Dn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ut.get(z).__webglTexture,pt,de+Dn)),T.blitFramebuffer(Bt,zt,Tt,Pt,jt,Qt,Tt,Pt,T.DEPTH_BUFFER_BIT,T.NEAREST);ot.bindFramebuffer(T.READ_FRAMEBUFFER,null),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||ut.has(E)){const ze=ut.get(E),Te=ut.get(z);ot.bindFramebuffer(T.READ_FRAMEBUFFER,ic),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,sc);for(let Pe=0;Pe<It;Pe++)ae?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ze.__webglTexture,V,Ut+Pe):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ze.__webglTexture,V),Be?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Te.__webglTexture,pt,de+Pe):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Te.__webglTexture,pt),V!==0?T.blitFramebuffer(Bt,zt,Tt,Pt,jt,Qt,Tt,Pt,T.COLOR_BUFFER_BIT,T.NEAREST):Be?T.copyTexSubImage3D(xe,pt,jt,Qt,de+Pe,Bt,zt,Tt,Pt):T.copyTexSubImage2D(xe,pt,jt,Qt,Bt,zt,Tt,Pt);ot.bindFramebuffer(T.READ_FRAMEBUFFER,null),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Be?E.isDataTexture||E.isData3DTexture?T.texSubImage3D(xe,pt,jt,Qt,de,Tt,Pt,It,Jt,Ft,he.data):z.isCompressedArrayTexture?T.compressedTexSubImage3D(xe,pt,jt,Qt,de,Tt,Pt,It,Jt,he.data):T.texSubImage3D(xe,pt,jt,Qt,de,Tt,Pt,It,Jt,Ft,he):E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,pt,jt,Qt,Tt,Pt,Jt,Ft,he.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,pt,jt,Qt,he.width,he.height,Jt,he.data):T.texSubImage2D(T.TEXTURE_2D,pt,jt,Qt,Tt,Pt,Jt,Ft,he);T.pixelStorei(T.UNPACK_ROW_LENGTH,te),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Xe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Kn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ue),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Li),pt===0&&z.generateMipmaps&&T.generateMipmap(xe),ot.unbindTexture()},this.copyTextureToTexture3D=function(E,z,J=null,$=null,V=0){return E.isTexture!==!0&&(kn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,$=arguments[1]||null,E=arguments[2],z=arguments[3],V=arguments[4]||0),kn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,J,$,V)},this.initRenderTarget=function(E){ut.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),ot.unbindTexture()},this.resetState=function(){L=0,I=0,U=null,ot.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}const sl={type:"change"},Oo={type:"start"},Kl={type:"end"},Ts=new Vs,rl=new pn,a0=Math.cos(70*Ee.DEG2RAD),pe=new b,Le=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wr=1e-6;class l0 extends Su{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_n.ROTATE,MIDDLE:_n.DOLLY,RIGHT:_n.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new We,this._lastTargetPosition=new b,this._quat=new We().setFromUnitVectors(t.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new La,this._sphericalDelta=new La,this._scale=1,this._panOffset=new b,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new b,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=h0.bind(this),this._onPointerDown=c0.bind(this),this._onPointerUp=u0.bind(this),this._onContextMenu=v0.bind(this),this._onMouseWheel=p0.bind(this),this._onKeyDown=m0.bind(this),this._onTouchStart=g0.bind(this),this._onTouchMove=_0.bind(this),this._onMouseDown=d0.bind(this),this._onMouseMove=f0.bind(this),this._interceptControlDown=x0.bind(this),this._interceptControlUp=y0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sl),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;pe.copy(e).sub(this.target),pe.applyQuaternion(this._quat),this._spherical.setFromVector3(pe),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Le:n>Math.PI&&(n-=Le),i<-Math.PI?i+=Le:i>Math.PI&&(i-=Le),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(pe.setFromSpherical(this._spherical),pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=pe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new b(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new b(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ts.origin.copy(this.object.position),Ts.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ts.direction))<a0?this.object.lookAt(this.target):(rl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ts.intersectPlane(rl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wr||this._lastTargetPosition.distanceToSquared(this.target)>wr?(this.dispatchEvent(sl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Le/60*this.autoRotateSpeed*t:Le/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){pe.setFromMatrixColumn(e,0),pe.multiplyScalar(-t),this._panOffset.add(pe)}_panUp(t,e){this.screenSpacePanning===!0?pe.setFromMatrixColumn(e,1):(pe.setFromMatrixColumn(e,0),pe.crossVectors(this.object.up,pe)),pe.multiplyScalar(t),this._panOffset.add(pe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;pe.copy(i).sub(this.target);let r=pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Le*this._rotateDelta.x/e.clientHeight),this._rotateUp(Le*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Le*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Le*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Le*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Le*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Le*this._rotateDelta.x/e.clientHeight),this._rotateUp(Le*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function c0(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function h0(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function u0(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kl),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function d0(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case _n.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ie.DOLLY;break;case _n.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ie.ROTATE}break;case _n.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Oo)}function f0(s){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function p0(s){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(s.preventDefault(),this.dispatchEvent(Oo),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Kl))}function m0(s){this.enabled!==!1&&this._handleKeyDown(s)}function g0(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ie.TOUCH_ROTATE;break;case mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ie.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Oo)}function _0(s){switch(this._trackPointer(s),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ie.NONE}}function v0(s){this.enabled!==!1&&s.preventDefault()}function x0(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function y0(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ws={0:[14,17,19,21,25,17,14],1:[4,12,4,4,4,4,14],2:[14,17,1,2,4,8,31],3:[30,1,1,14,1,1,30],4:[2,6,10,18,31,2,2],5:[31,16,30,1,1,17,14],6:[6,8,16,30,17,17,14],7:[31,1,2,4,8,8,8],8:[14,17,17,14,17,17,14],9:[14,17,17,15,1,2,12]," ":[0,0,0,0,0,0,0],"-":[0,0,0,31,0,0,0]};function Ve(s,t,e,n,i=4){const r=new kl,a=Math.min(n,Math.min(s,t,e)/2-1e-5),l=s/2-a,c=t/2-a;r.absarc(-l,-c,a,Math.PI,1.5*Math.PI,!1),r.absarc(l,-c,a,1.5*Math.PI,2*Math.PI,!1),r.absarc(l,c,a,0,.5*Math.PI,!1),r.absarc(-l,c,a,.5*Math.PI,Math.PI,!1);const u={depth:e-a*2,bevelEnabled:!0,bevelSegments:i*2,steps:1,bevelSize:a,bevelThickness:a,curveSegments:i*2},d=new Uo(r,u);return d.center(),d}class M0{constructor(t,e={}){this.scene=t,this.group=new se,this.group.name=e.name||"IndustrialRobotArm",e.position&&(Array.isArray(e.position)?this.group.position.set(e.position[0],e.position[1],e.position[2]):e.position&&typeof e.position.x=="number"&&this.group.position.set(e.position.x,e.position.y,e.position.z)),e.rotationY!==void 0&&(this.group.rotation.y=e.rotationY),this.themes={fanuc:{primary:16763653,secondary:1843496,accent:16769095,dark:987928},kuka:{primary:15094016,secondary:1975341,accent:16750592,dark:1119258},abb:{primary:1096065,secondary:1124640,accent:3462041,dark:398608},cyber:{primary:2450411,secondary:988970,accent:6333946,dark:462106},cleanroom:{primary:16777215,secondary:165063,accent:3718648,dark:3359061},stealth:{primary:3621201,secondary:988970,accent:10265519,dark:461588}},this.currentTheme=e.theme||"fanuc",this.angles=[0,0,0,0,0,0],this.targetAngles=[0,0,0,0,0,0],this.jointVelocities=[0,0,0,0,0,0],this.jointSpeeds=[5.2,4.6,5.2,6.5,6.5,8],this.limits=[{min:-180,max:180},{min:-145,max:65},{min:-165,max:85},{min:-180,max:180},{min:-145,max:145},{min:-360,max:360}],this.dimensions={baseHeight:.22,shoulderHeight:.18,upperArmLength:.52,elbowOffset:.08,baseForearmLength:.44,forearmLength:.44,maxTelescopeExtension:.36,wristLength:.13,flangeLength:.05},this.telescopeExtension=0,this.targetTelescopeExtension=0,this.telescopeVelocity=0,this.gripperPosition=0,this.activeTool="gripper",this.initMaterials(),this.buildRobot(),this.scene.add(this.group)}initMaterials(){const t=this.themes[this.currentTheme];this.materials={primaryPaint:new Wl({color:t.primary,metalness:.35,roughness:.22,clearcoat:.7,clearcoatRoughness:.15,envMapIntensity:1.3}),darkMetal:new Ie({color:t.secondary,metalness:.85,roughness:.32,envMapIntensity:1}),chromePiston:new Ie({color:16777215,metalness:.98,roughness:.04}),castIronBase:new Ie({color:2238259,metalness:.65,roughness:.55}),jointBezel:new Ie({color:987930,metalness:.9,roughness:.25}),brassGold:new Ie({color:13938487,metalness:.92,roughness:.18}),rubberPads:new Ie({color:1382432,roughness:.92,metalness:.05}),cableLoom:new Ie({color:1119e3,roughness:.85,metalness:.2}),statusRing:new Ie({color:65437,emissive:65437,emissiveIntensity:1.8,roughness:.1}),laserLens:new Ie({color:61695,emissive:61695,emissiveIntensity:3.5})}}setTheme(t){if(!this.themes[t])return;this.currentTheme=t;const e=this.themes[t];this.materials.primaryPaint.color.setHex(e.primary),this.materials.darkMetal.color.setHex(e.secondary)}setStatus(t="ready"){t==="ready"?(this.materials.statusRing.color.setHex(65437),this.materials.statusRing.emissive.setHex(65437),this.materials.statusRing.emissiveIntensity=1.8):t==="running"?(this.materials.statusRing.color.setHex(61695),this.materials.statusRing.emissive.setHex(61695),this.materials.statusRing.emissiveIntensity=2.4):(t==="estop"||t==="alarm")&&(this.materials.statusRing.color.setHex(16724838),this.materials.statusRing.emissive.setHex(16724838),this.materials.statusRing.emissiveIntensity=3.5)}buildRobot(){this.baseGroup=new se,this.baseGroup.name="BaseAssembly";const t=new Zt(.33,.38,.05,48),e=new xt(t,this.materials.castIronBase);e.position.y=.025,e.castShadow=!0,e.receiveShadow=!0,this.baseGroup.add(e);const n=new xt(new en(.33,.02,16,48),this.materials.castIronBase);n.rotateX(Math.PI/2),n.position.y=.05,this.baseGroup.add(n);for(let ot=0;ot<8;ot++){const bt=ot/8*Math.PI*2,ut=new se;ut.position.set(Math.cos(bt)*.31,.05,Math.sin(bt)*.31);const C=new xt(new Zt(.02,.02,.015,16),this.materials.jointBezel),M=new xt(new Zt(.013,.013,.03,6),this.materials.chromePiston);M.position.y=.018,ut.add(C),ut.add(M),ut.castShadow=!0,this.baseGroup.add(ut)}const i=new Zt(.24,.29,.15,48),r=new xt(i,this.materials.darkMetal);r.position.y=.125,r.castShadow=!0,r.receiveShadow=!0,this.baseGroup.add(r);const o=new xt(new en(.252,.018,16,48),this.materials.jointBezel);o.rotateX(Math.PI/2),o.position.y=.185,this.baseGroup.add(o);const a=new en(.252,.009,16,48);a.rotateX(Math.PI/2),this.statusRingMesh=new xt(a,this.materials.statusRing),this.statusRingMesh.position.y=.185,this.baseGroup.add(this.statusRingMesh),this.group.add(this.baseGroup),this.j1=new se,this.j1.name="Joint1_Turntable",this.j1.position.y=this.dimensions.baseHeight,this.group.add(this.j1);const l=new Zt(.23,.248,.12,48),c=new xt(l,this.materials.primaryPaint);c.position.y=.06,c.castShadow=!0,this.j1.add(c);const u=new Zt(.21,.21,.03,48),d=new xt(u,this.materials.darkMetal);d.position.y=.125,this.j1.add(d);const f=.08,p=.24,h=.22,v=.035,g=Ve(f,p,h,v,4),m=new xt(g,this.materials.primaryPaint);m.position.set(-.115,.21,0),m.castShadow=!0,this.j1.add(m);const R=Ve(f,p,h,v,4),x=new xt(R,this.materials.primaryPaint);x.position.set(.115,.21,0),x.castShadow=!0,this.j1.add(x),[-.16,.16].forEach(ot=>{const bt=new Zt(.105,.105,.025,32);bt.rotateZ(Math.PI/2);const ut=new xt(bt,this.materials.jointBezel);ut.position.set(ot,.26,0),this.j1.add(ut);const C=new xt(new Zt(.06,.06,.032,24),this.materials.darkMetal);C.rotateZ(Math.PI/2),C.position.set(ot*1.05,.26,0),this.j1.add(C)}),this.j2=new se,this.j2.name="Joint2_Shoulder",this.j2.position.set(0,.26,0),this.j1.add(this.j2);const _=new Zt(.09,.09,.19,32);_.rotateZ(Math.PI/2);const P=new xt(_,this.materials.darkMetal);P.castShadow=!0,this.j2.add(P);const L=Ve(.15,this.dimensions.upperArmLength,.16,.045,5),I=new xt(L,this.materials.primaryPaint);I.position.y=this.dimensions.upperArmLength/2,I.castShadow=!0,this.j2.add(I),[-.078,.078].forEach(ot=>{const bt=Ve(.015,this.dimensions.upperArmLength*.72,.1,.02,3),ut=new xt(bt,this.materials.darkMetal);ut.position.set(ot,this.dimensions.upperArmLength/2,0),this.j2.add(ut);const C=new rn(.08,.03),M=new xt(C,this.materials.brassGold);M.rotateY(ot>0?Math.PI/2:-Math.PI/2),M.position.set(ot*1.02,this.dimensions.upperArmLength/2+.06,0),this.j2.add(M)});const U=Ve(.17,.14,.15,.035,4),S=new xt(U,this.materials.darkMetal);S.position.set(0,.01,-.135),S.castShadow=!0,this.j2.add(S);const y=Ve(.146,.116,.01,.016,3),D=new xt(y,this.materials.jointBezel);D.position.set(0,.01,-.211),this.j2.add(D),this.initDotMatrixDisplay(),this.j3=new se,this.j3.name="Joint3_Elbow",this.j3.position.y=this.dimensions.upperArmLength,this.j2.add(this.j3);const O=new Zt(.085,.085,.16,32);O.rotateZ(Math.PI/2);const F=new xt(O,this.materials.darkMetal);F.castShadow=!0,this.j3.add(F);const q=new Zt(.075,.075,.1,32);q.rotateZ(Math.PI/2);const H=new xt(q,this.materials.primaryPaint);H.position.x=-.11,H.castShadow=!0,this.j3.add(H);const k=new xt(new Zt(.065,.065,.02,24),this.materials.jointBezel);k.rotateZ(Math.PI/2),k.position.x=-.165,this.j3.add(k);const K=new xt(new en(.088,.012,16,36),this.materials.jointBezel);K.rotateY(Math.PI/2),K.position.x=.09,this.j3.add(K);const X=new xt(new Zt(.055,.06,.035,24),this.materials.darkMetal);X.rotateZ(Math.PI/2),X.position.x=.11,this.j3.add(X);const ht=Ve(.12,.1,.13,.028,4),A=new xt(ht,this.materials.primaryPaint);A.position.set(0,.045,0),A.castShadow=!0,this.j3.add(A),this.j4=new se,this.j4.name="Joint4_ForearmRoll",this.j4.position.set(0,.08,0),this.j3.add(this.j4);const w=new xt(new Zt(.076,.084,.03,32),this.materials.jointBezel);w.position.y=.015,this.j4.add(w),this.telescopeStage1=new se,this.telescopeStage1.name="Telescope_Stage1_Outer";const Y=new Zt(.073,.08,.22,32),nt=new xt(Y,this.materials.primaryPaint);nt.position.y=.12,nt.castShadow=!0,this.telescopeStage1.add(nt);const N=new xt(new Zt(.082,.078,.025,32),this.materials.jointBezel);N.position.y=.23,this.telescopeStage1.add(N);const G=new xt(new en(.08,.006,12,32),this.materials.primaryPaint);G.rotateX(Math.PI/2),G.position.y=.23,this.telescopeStage1.add(G),this.sidePistonRods=[],[-.086,.086].forEach(ot=>{const bt=new xt(Ve(.018,.17,.02,.004,2),this.materials.darkMetal);bt.position.set(ot,.1,0),bt.castShadow=!0,this.telescopeStage1.add(bt);const ut=new xt(new Zt(.013,.013,.15,16),this.materials.darkMetal);ut.position.set(ot*1.05,.09,0),ut.castShadow=!0,this.telescopeStage1.add(ut);const C=new xt(new Zt(.007,.007,.14,16),this.materials.chromePiston);C.position.set(ot*1.05,.1,0),C.castShadow=!0,this.telescopeStage1.add(C),this.sidePistonRods.push(C)}),this.j4.add(this.telescopeStage1),this.telescopeStage2=new se,this.telescopeStage2.name="Telescope_Stage2_Mid",this.telescopeStage2.position.y=0;const Z=new Zt(.063,.066,.22,32),W=new xt(Z,this.materials.primaryPaint);W.position.y=.18,W.castShadow=!0,this.telescopeStage2.add(W);const rt=new xt(new Zt(.069,.066,.02,32),this.materials.jointBezel);rt.position.y=.29,this.telescopeStage2.add(rt);for(let ot=0;ot<3;ot++){const bt=new xt(new en(.0645,.002,8,32),this.materials.jointBezel);bt.rotateX(Math.PI/2),bt.position.y=.12+ot*.055,this.telescopeStage2.add(bt)}this.j4.add(this.telescopeStage2),this.telescopeStage3=new se,this.telescopeStage3.name="Telescope_Stage3_Inner",this.telescopeStage3.position.y=0;const vt=new Zt(.052,.054,.24,32),dt=new xt(vt,this.materials.chromePiston);dt.position.y=.24,dt.castShadow=!0,this.telescopeStage3.add(dt);const yt=new xt(new Zt(.058,.054,.025,32),this.materials.jointBezel);yt.position.y=.35,this.telescopeStage3.add(yt),this.j4.add(this.telescopeStage3),this.j5=new se,this.j5.name="Joint5_WristPitch",this.j5.position.y=this.dimensions.forearmLength,this.j4.add(this.j5);const tt=new Cn(.078,32,32),Q=new xt(tt,this.materials.darkMetal);Q.castShadow=!0,this.j5.add(Q);const T=Ve(.11,.11,.09,.025,3),gt=new xt(T,this.materials.primaryPaint);gt.position.y=.055,gt.castShadow=!0,this.j5.add(gt),this.j6=new se,this.j6.name="Joint6_ToolFlange",this.j6.position.y=this.dimensions.wristLength,this.j5.add(this.j6);const at=new xt(new Zt(.062,.068,.025,32),this.materials.darkMetal);at.position.y=.0125,at.castShadow=!0,this.j6.add(at);const _t=new xt(new en(.062,.005,12,32),this.materials.jointBezel);_t.rotateX(Math.PI/2),_t.position.y=.025,this.j6.add(_t),this.buildEndEffectors(),this.buildHydraulicPiston(),this.buildCableHarness()}buildEndEffectors(){this.toolsGroup=new se,this.toolsGroup.name="EndEffectorGroup",this.toolsGroup.position.y=.025,this.j6.add(this.toolsGroup),this.gripperGroup=new se,this.gripperGroup.name="ServoGripper";const t=Ve(.19,.055,.075,.018,3),e=new xt(t,this.materials.darkMetal);e.position.y=.028,e.castShadow=!0,this.gripperGroup.add(e),[-.018,.018].forEach(f=>{const p=new xt(new Zt(.006,.006,.18,16),this.materials.chromePiston);p.rotateZ(Math.PI/2),p.position.set(0,.03,f),this.gripperGroup.add(p)}),this.fingerLeft=new se,this.fingerLeft.position.set(-.085,.055,0);const n=Ve(.016,.095,.042,.004,2),i=new xt(n,this.materials.primaryPaint);i.position.y=.0475,i.castShadow=!0,this.fingerLeft.add(i);const r=new xt(new jn(.006,.075,.038),this.materials.rubberPads);r.position.set(.01,.05,0),this.fingerLeft.add(r),this.gripperGroup.add(this.fingerLeft),this.fingerRight=new se,this.fingerRight.position.set(.085,.055,0);const o=Ve(.016,.095,.042,.004,2),a=new xt(o,this.materials.primaryPaint);a.position.y=.0475,a.castShadow=!0,this.fingerRight.add(a);const l=new xt(new jn(.006,.075,.038),this.materials.rubberPads);l.position.set(-.01,.05,0),this.fingerRight.add(l),this.gripperGroup.add(this.fingerRight),this.tcpMarker=new ve,this.tcpMarker.name="TCP_Marker",this.tcpMarker.position.y=.15,this.gripperGroup.add(this.tcpMarker),this.toolsGroup.add(this.gripperGroup),this.welderGroup=new se,this.welderGroup.name="LaserWelder",this.welderGroup.visible=!1;const c=new xt(new Zt(.032,.042,.09,24),this.materials.darkMetal);c.position.y=.045,this.welderGroup.add(c);const u=new xt(new Do(.028,.075,24),this.materials.brassGold);u.position.y=.135,u.rotateX(Math.PI),this.welderGroup.add(u);const d=new xt(new Cn(.011,16,16),this.materials.laserLens);d.position.y=.175,this.welderGroup.add(d),this.toolsGroup.add(this.welderGroup)}buildHydraulicPiston(){this.pistonBase=new se,this.pistonBase.position.set(0,.08,-.14),this.j1.add(this.pistonBase);const t=new xt(new Cn(.024,16,16),this.materials.darkMetal);this.pistonBase.add(t),this.cylinderMesh=new xt(new Zt(.022,.025,.22,24),this.materials.darkMetal),this.cylinderMesh.position.y=.11,this.pistonBase.add(this.cylinderMesh);const e=new xt(new Zt(.026,.026,.02,24),this.materials.brassGold);e.position.y=.21,this.pistonBase.add(e),this.rodMesh=new xt(new Zt(.013,.013,.22,24),this.materials.chromePiston),this.rodMesh.position.y=.22,this.pistonBase.add(this.rodMesh)}buildCableHarness(){const t=[new b(.09,.04,-.06),new b(.11,.22,-.08),new b(.09,.42,-.05)],e=new Ul(t),n=new Fo(e,20,.016,12,!1),i=new xt(n,this.materials.cableLoom);i.castShadow=!0,this.j2.add(i)}setTool(t){this.activeTool=t,t==="gripper"?(this.gripperGroup.visible=!0,this.welderGroup.visible=!1):(this.gripperGroup.visible=!1,this.welderGroup.visible=!0)}setGripper(t){this.gripperPosition=Math.max(0,Math.min(1,t));const e=.088-this.gripperPosition*.053;this.fingerLeft.position.x=-e,this.fingerRight.position.x=e}setTelescope(t){this.telescopeExtension=Math.max(0,Math.min(1,t));const e=this.telescopeExtension,n=this.dimensions.maxTelescopeExtension;this.dimensions.forearmLength=this.dimensions.baseForearmLength+e*n,this.telescopeStage2&&(this.telescopeStage2.position.y=e*(n*.48)),this.telescopeStage3&&(this.telescopeStage3.position.y=e*n),this.sidePistonRods&&this.sidePistonRods.forEach(i=>{i.scale.y=1+e*1.5,i.position.y=.1+e*(n*.45)}),this.j5&&(this.j5.position.y=this.dimensions.forearmLength)}getTelescope(){return this.telescopeExtension}enforceSolidArmPhysics(t){for(let h=0;h<6;h++){const v=this.limits[h],g=Ee.degToRad(v.min),m=Ee.degToRad(v.max);t[h]=Math.max(g,Math.min(m,t[h]))}const e=.48,n=t[1],i=t[2],r=this.dimensions.upperArmLength,o=-Math.sin(n)*r,a=e+Math.cos(n)*r,l=this.dimensions.forearmLength,c=n+i,u=o-Math.sin(c)*l,d=a+Math.cos(c)*l;if(d<.012){const h=.012-d;t[1]-=h*.25}Math.abs(u)<.23&&d<.38&&t[1]>-.15&&(t[1]=-.15);for(let h=0;h<6;h++){const v=this.limits[h],g=Ee.degToRad(v.min),m=Ee.degToRad(v.max);t[h]=Math.max(g,Math.min(m,t[h]))}return t}setTargetJointAngles(t){const e=[...t];this.enforceSolidArmPhysics(e);for(let n=0;n<6;n++)e[n]!==void 0&&(this.targetAngles[n]=e[n])}setTargetTelescope(t){this.targetTelescopeExtension=Math.max(0,Math.min(1,t))}setTargetAngles(t){const e=[...t];this.enforceSolidArmPhysics(e);for(let n=0;n<6;n++)e[n]!==void 0&&(this.targetAngles[n]=e[n])}setTargetJointAngles(t){this.setTargetAngles(t)}setJointAngles(t){const e=[...t];this.enforceSolidArmPhysics(e);for(let n=0;n<6;n++)e[n]!==void 0&&(this.angles[n]=e[n],this.targetAngles[n]=e[n]);this.applyJointAngles()}setJointAngleDeg(t,e){const n=Ee.degToRad(e),i=[...this.angles];i[t]=n,this.enforceSolidArmPhysics(i),this.angles=i,this.targetAngles=[...i],this.applyJointAngles()}updateServoMotors(t){const n=2/Math.max(.01,.08),i=n*t,r=1/(1+i+.48*i*i+.235*i*i*i);let o=!1;const a=[...this.angles];for(let g=0;g<6;g++){const m=this.angles[g],R=this.targetAngles[g],x=this.jointSpeeds[g];let _=m-R;const P=R,L=x*.08;_=Math.max(-L,Math.min(L,_));const I=m-_,U=(this.jointVelocities[g]+n*_)*t;this.jointVelocities[g]=(this.jointVelocities[g]-n*U)*r;let S=I+(_+U)*r;P-m>0==S>P&&(S=P,this.jointVelocities[g]=0),a[g]=S}this.enforceSolidArmPhysics(a);for(let g=0;g<6;g++)Math.abs(a[g]-this.angles[g])>1e-4&&(o=!0),this.angles[g]=a[g];const l=this.telescopeExtension,c=this.targetTelescopeExtension,u=3.2;let d=l-c;const f=u*.08;d=Math.max(-f,Math.min(f,d));const p=l-d,h=(this.telescopeVelocity+n*d)*t;this.telescopeVelocity=(this.telescopeVelocity-n*h)*r;let v=p+(d+h)*r;return c-l>0==v>c&&(v=c,this.telescopeVelocity=0),v=Math.max(0,Math.min(1,v)),Math.abs(v-this.telescopeExtension)>5e-4&&(o=!0,this.setTelescope(v)),this.applyJointAngles(),o}applyJointAngles(){this.j1.rotation.y=this.angles[0],this.j2.rotation.x=this.angles[1],this.j3.rotation.x=this.angles[2],this.j4.rotation.y=this.angles[3],this.j5.rotation.x=this.angles[4],this.j6.rotation.y=this.angles[5];const t=this.angles[1];this.pistonBase.rotation.x=-t*.45,this.rodMesh.position.y=.22-Math.sin(t)*.04}getTCPWorldPosition(t=new b){return this.tcpMarker.getWorldPosition(t),t}getTCPWorldQuaternion(t=new We){return this.tcpMarker.getWorldQuaternion(t),t}getArmColliders(){const t=[],e=new b;this.group.getWorldPosition(e),t.push({type:"capsule",p1:new b(e.x,.02,e.z),p2:new b(e.x,.28,e.z),radius:.355});const n=new b;this.j2.getWorldPosition(n),t.push({type:"sphere",center:n,radius:.16});const i=new b;this.j3.getWorldPosition(i),t.push({type:"capsule",p1:n,p2:i,radius:.115}),t.push({type:"sphere",center:i,radius:.13});const r=new b;this.j5.getWorldPosition(r),t.push({type:"capsule",p1:i,p2:r,radius:.095});const o=new b;this.j6.getWorldPosition(o),t.push({type:"capsule",p1:r,p2:o,radius:.08});const a=new b;if(this.getTCPWorldPosition(a),t.push({type:"capsule",p1:o,p2:a,radius:.048,isGripper:!0}),this.fingerLeft&&this.fingerRight){const l=new b,c=new b;this.fingerLeft.getWorldPosition(l),this.fingerRight.getWorldPosition(c),t.push({type:"sphere",center:l,radius:.038,isGripper:!0}),t.push({type:"sphere",center:c,radius:.038,isGripper:!0})}return t}getJointAnglesDeg(){return this.angles.map(t=>Math.round(Ee.radToDeg(t)*10)/10)}setWireframe(t){Object.values(this.materials).forEach(e=>{e.wireframe!==void 0&&(e.wireframe=t)})}setShadows(t){this.group.traverse(e=>{e.isMesh&&(e.castShadow=t,e.receiveShadow=t)})}initDotMatrixDisplay(){this.displayCanvas=document.createElement("canvas"),this.displayCanvas.width=256,this.displayCanvas.height=192,this.displayCtx=this.displayCanvas.getContext("2d"),this.displayTexture=new Il(this.displayCanvas),this.displayTexture.anisotropy=8;const t=new Oe({map:this.displayTexture,toneMapped:!1}),e=new rn(.134,.104);this.displayMesh=new xt(e,t),this.displayMesh.rotateY(Math.PI),this.displayMesh.position.set(0,.01,-.217),this.j2.add(this.displayMesh),this.lastDisplayedOwn=-1,this.lastDisplayedForeign=-1,this.updateDisplay(0,0)}getDisplayThemeColors(){const t=this.currentTheme;return t==="fanuc"?{ledOn:"#ffea00",glow:"rgba(255, 234, 0, 0.45)",ledOff:"#1c1808",bg:"#08080c",text:"#ffe047"}:t==="kuka"?{ledOn:"#ff3d00",glow:"rgba(255, 61, 0, 0.45)",ledOff:"#200c06",bg:"#08080c",text:"#ff6e40"}:t==="abb"||t==="emerald"||t==="green"?{ledOn:"#10b981",glow:"rgba(16, 185, 129, 0.50)",ledOff:"#041c12",bg:"#020a06",text:"#34d399"}:t==="cyber"||t==="blue"?{ledOn:"#3b82f6",glow:"rgba(59, 130, 246, 0.50)",ledOff:"#040d1a",bg:"#020610",text:"#60a5fa"}:{ledOn:"#00ff9d",glow:"rgba(0, 255, 157, 0.45)",ledOff:"#091c14",bg:"#060d0a",text:"#00ff9d"}}updateDisplay(t=0,e=0,n=!1){if(this.lastDisplayedOwn===t&&this.lastDisplayedForeign===e&&this.lastDisplayedVictory===n)return;this.lastDisplayedOwn=t,this.lastDisplayedForeign=e,this.lastDisplayedVictory=n;const i=this.displayCtx;if(!i)return;const r=this.displayCanvas.width,o=this.displayCanvas.height,a=this.getDisplayThemeColors();i.fillStyle=n?"#0f1710":a.bg,i.fillRect(0,0,r,o),i.fillStyle="rgba(255, 255, 255, 0.025)";for(let I=0;I<o;I+=4)i.fillRect(0,I,r,1);i.fillStyle=n?"#ffea00":a.text,i.font='bold 12px "Chakra Petch", "JetBrains Mono", monospace',i.textAlign="center",i.textBaseline="top",i.fillText(n?"★ VICTORY! ★":"BALLS IN CIRCLE",r/2,8);const l=Math.max(0,Math.min(99,t)),c=String(l).padStart(2,"0"),u=c[0],d=c[1],f=ws[u]||ws[0],p=ws[d]||ws[0],h=28,v=17,g=12,m=26,R=r-24,x=o-42,_=R/h,P=x/v,L=2.7;for(let I=0;I<v;I++)for(let U=0;U<h;U++){const S=g+(U+.5)*_,y=m+(I+.5)*P;let D=!1;if(n&&(I===0||I===16||U===0||U===27)&&(D=!0),I>=1&&I<=13){const O=Math.floor((I-1)/1.86);if(U>=3&&U<=12){const F=Math.floor((U-3)/2);O>=0&&O<7&&F>=0&&F<5&&f[O]>>4-F&1&&(D=!0)}else if(U>=15&&U<=24){const F=Math.floor((U-15)/2);O>=0&&O<7&&F>=0&&F<5&&p[O]>>4-F&1&&(D=!0)}}if(I===15&&U>=2&&U<=25){const O=U-2,F=n?24:Math.min(24,Math.ceil(l/20*24));O<F&&(D=!0)}D?(i.fillStyle=n?"rgba(255, 234, 0, 0.55)":a.glow,i.beginPath(),i.arc(S,y,L*2.2,0,Math.PI*2),i.fill(),i.fillStyle=n?"#ffea00":a.ledOn,i.beginPath(),i.arc(S,y,L,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255, 255, 255, 0.75)",i.beginPath(),i.arc(S-.7,y-.7,L*.45,0,Math.PI*2),i.fill()):(i.fillStyle=a.ledOff,i.beginPath(),i.arc(S,y,L*.85,0,Math.PI*2),i.fill())}n?(i.fillStyle="#ffea00",i.font='bold 10px "Chakra Petch", monospace',i.textAlign="center",i.fillText("★ 100% SECURED ★",r/2,o-3)):e>0&&(i.fillStyle="#ff1744",i.font='bold 10px "Chakra Petch", monospace',i.textAlign="center",i.fillText(`! ${e} INTRUDER${e>1?"S":""} !`,r/2,o-3)),this.displayTexture.needsUpdate=!0}}class S0{constructor(t){this.robot=t,this.presets={home:[0,0,0,0,0,0],ready:[0,-.45,-.55,0,.6,0],reach:[0,-.85,-.3,0,.45,0],inspect:[.78,-.5,-.65,.3,.4,.5],compact:[0,-.2,-1.85,0,1.15,0]},this.isInterpolating=!1,this.startAngles=[0,0,0,0,0,0],this.targetAngles=[0,0,0,0,0,0],this.interpProgress=1,this.interpDuration=1,this.onInterpolationComplete=null}smoothStep5(t){const e=Math.max(0,Math.min(1,t));return e*e*e*(e*(e*6-15)+10)}moveToPreset(t,e=1.2,n=null){this.presets[t]&&this.interpolateTo(this.presets[t],e,n)}interpolateTo(t,e=1,n=null){this.startAngles=[...this.robot.angles],this.targetAngles=[...t],this.interpDuration=Math.max(.1,e),this.interpProgress=0,this.isInterpolating=!0,this.onInterpolationComplete=n}update(t){if(!this.isInterpolating)return!1;this.interpProgress+=t/this.interpDuration;const e=this.smoothStep5(this.interpProgress),n=[];for(let i=0;i<6;i++)n[i]=this.startAngles[i]+(this.targetAngles[i]-this.startAngles[i])*e;if(this.robot.setJointAngles(n),this.interpProgress>=1&&(this.isInterpolating=!1,this.robot.setJointAngles(this.targetAngles),this.onInterpolationComplete)){const i=this.onInterpolationComplete;this.onInterpolationComplete=null,i()}return!0}solveIK(t,e=16,n=.002,i=!1,r=0,o=0){const a=[...this.robot.angles],l=this.robot.getTelescope();this.robot.group.updateMatrixWorld(!0);const c=t.clone();this.robot.group.worldToLocal(c);const u=Math.atan2(c.x,c.z),d=.48,f=Math.sqrt(c.x*c.x+c.z*c.z),p=c.y-d,h=Math.sqrt(f*f+p*p),v=.75,m=Math.max(0,Math.min(1,(h-v)/(1.48-v))),R=this.robot.getTelescope(),x=R+(m-R)*.5;this.robot.setTelescope(x);const _=this.robot.dimensions.upperArmLength,P=this.robot.dimensions.forearmLength+this.robot.dimensions.wristLength+.175,L=Math.max(.16,Math.min(_+P-.005,h)),I=Math.max(-1,Math.min(1,(_*_+P*P-L*L)/(2*_*P))),U=Math.acos(I),S=Math.max(-1,Math.min(1,(_*_+L*L-P*P)/(2*_*L))),y=Math.acos(S),O=-(Math.atan2(f,p)-y),F=Math.PI-U,q=-O-F;this.robot.angles[0]=u,this.robot.angles[1]=O,this.robot.angles[2]=F,this.robot.angles[3]=r||0,this.robot.angles[4]=q+(o||0),this.robot.angles[5]=-(r||0)*.5;for(let N=0;N<6;N++){const G=this.robot.limits[N],Z=Ee.degToRad(G.min),W=Ee.degToRad(G.max);this.robot.angles[N]=Math.max(Z,Math.min(W,this.robot.angles[N]))}this.robot.applyJointAngles(),this.robot.group.updateMatrixWorld(!0);const H=[{obj:this.robot.j1,axis:new b(0,1,0),idx:0},{obj:this.robot.j2,axis:new b(1,0,0),idx:1},{obj:this.robot.j3,axis:new b(1,0,0),idx:2},{obj:this.robot.j5,axis:new b(1,0,0),idx:4}],k=new b,K=new b,X=new b,ht=new b,A=new b;for(let N=0;N<e&&(this.robot.getTCPWorldPosition(k),!(k.distanceTo(t)<n));N++)for(let G=H.length-1;G>=0;G--){const Z=H[G];if(Z.obj.getWorldPosition(K),this.robot.getTCPWorldPosition(k),X.subVectors(k,K),ht.subVectors(t,K),X.lengthSq()<1e-4||ht.lengthSq()<1e-4)continue;X.normalize(),ht.normalize();const W=new We;Z.obj.getWorldQuaternion(W),A.copy(Z.axis).applyQuaternion(W).normalize();const rt=X.clone().sub(A.clone().multiplyScalar(X.dot(A))).normalize(),vt=ht.clone().sub(A.clone().multiplyScalar(ht.dot(A))).normalize();let dt=Math.max(-1,Math.min(1,rt.dot(vt))),yt=Math.acos(dt);new b().crossVectors(rt,vt).dot(A)<0&&(yt=-yt);let T=this.robot.angles[Z.idx]+yt*.85;const gt=this.robot.limits[Z.idx],at=Ee.degToRad(gt.min),_t=Ee.degToRad(gt.max);T=Math.max(at,Math.min(_t,T)),this.robot.angles[Z.idx]=T,this.robot.applyJointAngles(),this.robot.group.updateMatrixWorld(!0)}const w=k.distanceTo(t),Y=[...this.robot.angles],nt=this.robot.getTelescope();return i?(this.robot.setTargetJointAngles(Y),this.robot.setTargetTelescope(nt)):(this.robot.angles=[...a],this.robot.telescopeExtension=l,this.robot.setTargetJointAngles(Y),this.robot.setTargetTelescope(nt),this.robot.applyJointAngles(),this.robot.group.updateMatrixWorld(!0)),w}getTCPPose(){const t=new b,e=new We;this.robot.getTCPWorldPosition(t),this.robot.getTCPWorldQuaternion(e);const n=new tn().setFromQuaternion(e,"ZYX");return{x:t.x,y:t.y,z:t.z,roll:Ee.radToDeg(n.z),pitch:Ee.radToDeg(n.x),yaw:Ee.radToDeg(n.y)}}}class b0{constructor(t,e,n){this.robot=t,this.workcell=e,this.audio=n,this.isOpen=!0,this.currentValue=0,this.targetValue=0,this.attachedObject=null,this.gripRadius=.12}toggle(){this.setOpen(!this.isOpen)}setOpen(t){this.isOpen=t,this.targetValue=t?0:1,this.audio.playPneumatic(!t)}update(t){Math.abs(this.currentValue-this.targetValue)>.005&&(this.currentValue+=(this.targetValue-this.currentValue)*Math.min(1,t*4),this.robot.setGripper(this.currentValue),this.currentValue>.4&&!this.isOpen&&!this.attachedObject&&this.attemptGrasp(),this.currentValue<.3&&this.isOpen&&this.attachedObject&&this.releaseObject())}attemptGrasp(){const t=new b;this.robot.getTCPWorldPosition(t);const e=this.workcell.getGraspableObjects();for(const n of e){const i=new b;if(n.getWorldPosition(i),t.distanceTo(i)<this.gripRadius){this.attachedObject=n,this.workcell.attachObjectToArm(n,this.robot.gripperGroup),this.audio.playClick();break}}}releaseObject(){this.attachedObject&&(this.workcell.detachObjectFromArm(this.attachedObject),this.attachedObject=null)}}function Bi(s,t){const e=Math.hypot(s,t),n=1.15,i=.062;let r=0,o=0,a=0;if(e<=n){const O=Math.PI*e/n;r=i/2*(1+Math.cos(O));const F=-(i*Math.PI)/(2*n)*Math.sin(O);e>1e-4&&(o=F*(s/e),a=F*(t/e))}const l=.88,c=.052,u=2.45,d=Math.abs(t),f=Math.abs(s);let p=0,h=0,v=0;if(d<l&&f<u&&f>.15){const O=Math.PI*d/l,F=(1+Math.cos(O))/2,q=-(Math.PI/(2*l))*Math.sin(O)*Math.sign(t);let H=1,k=0;if(f>1.7){const K=(f-1.7)/(u-1.7);H=(1+Math.cos(Math.PI*Math.min(1,K)))/2,k=-(Math.PI/(2*(u-1.7)))*Math.sin(Math.PI*Math.min(1,K))*Math.sign(s)}else if(f<.75){const K=(f-.15)/.6;H=(1-Math.cos(Math.PI*Math.max(0,Math.min(1,K))))/2,k=Math.PI/1.2*Math.sin(Math.PI*Math.max(0,Math.min(1,K)))*Math.sign(s)}p=c*F*H,v=c*q*H,h=c*F*k}let g=0,m=0,R=0;if(f<l&&d<u&&d>.15){const O=Math.PI*f/l,F=(1+Math.cos(O))/2,q=-(Math.PI/(2*l))*Math.sin(O)*Math.sign(s);let H=1,k=0;if(d>1.7){const K=(d-1.7)/(u-1.7);H=(1+Math.cos(Math.PI*Math.min(1,K)))/2,k=-(Math.PI/(2*(u-1.7)))*Math.sin(Math.PI*Math.min(1,K))*Math.sign(t)}else if(d<.75){const K=(d-.15)/.6;H=(1-Math.cos(Math.PI*Math.max(0,Math.min(1,K))))/2,k=Math.PI/1.2*Math.sin(Math.PI*Math.max(0,Math.min(1,K)))*Math.sign(t)}g=c*F*H,m=c*q*H,R=c*F*k}let x=r,_=o,P=a;p>x&&(x=p,_=h,P=v),g>x&&(x=g,_=m,P=R);const L=Math.hypot(s-1.4,t- -1.4),I=Math.hypot(s- -1.4,t- -1.4),U=Math.hypot(s- -1.4,t-1.4),S=Math.hypot(s-1.4,t-1.4),y=Math.min(L,I,U,S);if(y<1.3){const O=Math.max(0,Math.min(1,(y-.75)/.55)),F=(1-Math.cos(Math.PI*O))/2;x*=F,_*=F,P*=F}const D=Math.hypot(_,1,P);return{y:x,normal:new b(-_/D,1/D,-P/D),gradX:_,gradZ:P,isElevated:x>5e-4}}class E0{constructor(t){this.scene=t,this.graspableObjects=[],this.gridVisible=!0,this.shadowsEnabled=!0,this.initEnvironment()}initEnvironment(){this.ambientLight=new vu(16777215,1.4),this.scene.add(this.ambientLight),this.mainLight=new xr(16777215,2.6),this.mainLight.position.set(2.5,4,2),this.mainLight.castShadow=!0,this.mainLight.shadow.mapSize.width=2048,this.mainLight.shadow.mapSize.height=2048,this.mainLight.shadow.camera.near=.5,this.mainLight.shadow.camera.far=12,this.mainLight.shadow.camera.left=-2,this.mainLight.shadow.camera.right=2,this.mainLight.shadow.camera.top=2,this.mainLight.shadow.camera.bottom=-2,this.mainLight.shadow.bias=-5e-4,this.scene.add(this.mainLight),this.fillLight=new xr(3718648,1),this.fillLight.position.set(-3,2.5,-2),this.scene.add(this.fillLight),this.backLight=new xr(16757504,.6),this.backLight.position.set(0,3,-3.5),this.scene.add(this.backLight);const t=new rn(16,16);this.platformMat=new Ie({color:14870768,roughness:.35,metalness:.25,envMapIntensity:1}),this.floorMesh=new xt(t,this.platformMat),this.floorMesh.rotation.x=-Math.PI/2,this.floorMesh.position.y=0,this.floorMesh.receiveShadow=!0,this.scene.add(this.floorMesh),this.gridHelper=new Ia(8,40,165063,13358561),this.gridHelper.position.y=.001,this.scene.add(this.gridHelper),this.ringsGroup=new se,this.ringsGroup.name="TacticalRadarHUDGroup",this.quadArmPositions=[new b(1.4,0,-1.4),new b(-1.4,0,-1.4),new b(-1.4,0,1.4),new b(1.4,0,1.4)],this.armHudCanvases=[],this.armHudCtxs=[],this.armHudTextures=[],this.hudMeshes=[],this.armBallDistributions=[{total:0,counts:[0,0,0,0]},{total:0,counts:[0,0,0,0]},{total:0,counts:[0,0,0,0]},{total:0,counts:[0,0,0,0]}],this.armAnimatedCounts=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.armAnimatedTotal=[0,0,0,0],this.armVictoryStates=[!1,!1,!1,!1],this.currentThemeKey="light_studio",this.forceHudUpdate=!0;const e=new rn(3,3);this.quadArmPositions.forEach((n,i)=>{const r=document.createElement("canvas");r.width=1024,r.height=1024;const o=r.getContext("2d"),a=new Il(r);a.anisotropy=16;const l=new Oe({map:a,transparent:!0,opacity:.98,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,toneMapped:!1}),c=new xt(e,l);c.renderOrder=30,c.rotation.x=-Math.PI/2,c.position.set(n.x,.0035,n.z),this.ringsGroup.add(c),this.armHudCanvases.push(r),this.armHudCtxs.push(o),this.armHudTextures.push(a),this.hudMeshes.push(c)}),this.renderTacticalHUD(!1),this.createCenterConvexDome(),this.scene.add(this.ringsGroup)}createCenterConvexDome(){const e=new Io(1.15,72);e.rotateX(-Math.PI/2);const n=e.attributes.position;for(let a=0;a<n.count;a++){const l=n.getX(a),c=n.getZ(a),u=Bi(l,c);n.setY(a,u.y)}e.computeVertexNormals(),this.centerDishMat=new Ie({color:165063,transparent:!0,opacity:.14,roughness:.2,metalness:.1,depthWrite:!1,side:Re}),this.centerDishMesh=new xt(e,this.centerDishMat),this.centerDishMesh.receiveShadow=!1,this.ringsGroup.add(this.centerDishMesh),this.corridorMat=new Ie({color:165063,transparent:!0,opacity:.12,roughness:.2,metalness:.1,depthWrite:!1,side:Re}),[{center:new b(1.7,0,0),w:1.4,h:.82},{center:new b(-1.7,0,0),w:1.4,h:.82},{center:new b(0,0,1.7),w:.82,h:1.4},{center:new b(0,0,-1.7),w:.82,h:1.4}].forEach(a=>{const l=new rn(a.w,a.h,32,24);l.rotateX(-Math.PI/2);const c=l.attributes.position;for(let d=0;d<c.count;d++){const f=c.getX(d)+a.center.x,p=c.getZ(d)+a.center.z,h=Bi(f,p);c.setY(d,h.y)}l.computeVertexNormals();const u=new xt(l,this.corridorMat);u.position.set(a.center.x,0,a.center.z),u.receiveShadow=!1,this.ringsGroup.add(u)});const r=[.35,.65,.95,1.15];this.contourRings=[],r.forEach(a=>{const l=new Mi(a-.007,a+.007,64);l.rotateX(-Math.PI/2);const u=Bi(a,0).y+.0015,d=new Oe({color:165063,transparent:!0,opacity:a===1.15?.75:.28,side:Re,depthWrite:!1}),f=new xt(l,d);f.position.y=u,this.ringsGroup.add(f),this.contourRings.push(f)}),[{dir:new b(1,0,0),rotY:0},{dir:new b(-1,0,0),rotY:Math.PI},{dir:new b(0,0,1),rotY:-Math.PI/2},{dir:new b(0,0,-1),rotY:Math.PI/2}].forEach(a=>{[1.35,1.7,2.05].forEach(l=>{const c=new rn(.012,1.05);c.rotateX(-Math.PI/2);const u=new Oe({color:165063,transparent:!0,opacity:.25,side:Re,depthWrite:!1}),d=new xt(c,u),f=a.dir.clone().multiplyScalar(l),p=Bi(f.x,f.z);d.position.set(f.x,p.y+.0018,f.z),d.rotation.y=a.rotY,this.ringsGroup.add(d)})})}renderArmPieHUD(t,e,n,i){const r=this.armHudCtxs[t],o=this.armHudCanvases[t];if(!r||!o)return;const a=o.width,l=o.height,c=a/2,u=l/2,d=320;r.clearRect(0,0,a,l);const f=["rgba(215, 175, 60, 0.80)","rgba(195, 100, 50, 0.80)","rgba(35, 175, 115, 0.80)","rgba(37, 99, 235, 0.80)"],p=["rgba(240, 205, 95, 0.95)","rgba(225, 130, 80, 0.95)","rgba(75, 215, 155, 0.95)","rgba(96, 165, 250, 0.95)"],h=["rgba(215, 175, 60, 0.15)","rgba(195, 100, 50, 0.15)","rgba(35, 175, 115, 0.15)","rgba(37, 99, 235, 0.15)"],v=["ALPHA (YELLOW)","BETA (ORANGE)","GAMMA (GREEN)","DELTA (BLUE)"],g=i?"#00f0ff":"#0284c7",m=i?"#00ff9d":"#059669",R=i?"#ffb300":"#d97706",x=i?"rgba(0, 240, 255, 0.16)":"rgba(2, 132, 199, 0.20)",_=1.35*d,P=430,L=388,I=.9*d,U=.55*d,S=.355*d,y=e||[0,0,0,0],D=20,O=y.reduce((w,Y)=>w+Math.max(0,Y),0),F=-Math.PI/2,q=this.armVictoryStates&&this.armVictoryStates[t];if(q){r.save();const w=r.createRadialGradient(c,u,S,c,u,_);w.addColorStop(0,f[t].replace("0.80","0.70").replace("0.75","0.65")),w.addColorStop(.5,f[t]),w.addColorStop(1,f[t].replace("0.80","0.92").replace("0.75","0.88")),r.fillStyle=w,r.beginPath(),r.arc(c,u,_,0,Math.PI*2),r.arc(c,u,S,Math.PI*2,0,!0),r.fill();const Y=Date.now()*.005,nt=S+(Math.sin(Y)+1)/2*(_-S),N=S+(Math.sin(Y+Math.PI)+1)/2*(_-S);r.strokeStyle="rgba(255, 255, 255, 0.45)",r.lineWidth=2.8,r.beginPath(),r.arc(c,u,nt,0,Math.PI*2),r.arc(c,u,N,0,Math.PI*2),r.stroke(),r.strokeStyle=p[t],r.lineWidth=6,r.beginPath(),r.arc(c,u,_,0,Math.PI*2),r.stroke(),r.strokeStyle="#ffffff",r.lineWidth=2,r.beginPath(),r.arc(c,u,_+6,0,Math.PI*2),r.stroke(),r.textAlign="center",r.textBaseline="middle",r.font='bold 24px "JetBrains Mono", monospace',r.fillStyle="#ffffff",r.fillText("★ 100% COMPLETE ★",c,u-210),r.font='bold 15px "JetBrains Mono", monospace',r.fillStyle="#ffea00",r.fillText("★ ALL BALLS SECURED • VICTORY ★",c,u-180),r.restore()}else{r.save();const w=i?"rgba(255, 255, 255, 0.040)":"rgba(15, 23, 42, 0.055)";r.fillStyle=w,r.beginPath(),r.arc(c,u,P,0,Math.PI*2),r.arc(c,u,L,Math.PI*2,0,!0),r.fill(),r.strokeStyle=i?"rgba(255, 255, 255, 0.12)":"rgba(15, 23, 42, 0.14)",r.lineWidth=1.2,r.beginPath(),r.arc(c,u,P,0,Math.PI*2),r.stroke(),r.beginPath(),r.arc(c,u,L,0,Math.PI*2),r.stroke();for(let Y=0;Y<20;Y++){const nt=F+Y/20*Math.PI*2,N=Math.cos(nt),G=Math.sin(nt),Z=Y%5===0;r.strokeStyle=Z?i?"rgba(255, 255, 255, 0.35)":"rgba(15, 23, 42, 0.35)":i?"rgba(255, 255, 255, 0.10)":"rgba(15, 23, 42, 0.12)",r.lineWidth=Z?2.2:1.2,r.beginPath(),r.moveTo(c+N*(L+2),u+G*(L+2)),r.lineTo(c+N*(P-2),u+G*(P-2)),r.stroke()}if(r.restore(),O>.02){let Y=F;const nt=O<D?Math.PI*2/D:Math.PI*2/O;if([t,...[0,1,2,3].filter(G=>G!==t)].forEach(G=>{const Z=Math.max(0,y[G]);if(Z<.01)return;const W=Z*nt,rt=Y+W;r.save(),r.beginPath(),r.arc(c,u,P,Y,rt),r.arc(c,u,L,rt,Y,!0),r.closePath();const vt=r.createRadialGradient(c,u,L,c,u,P);vt.addColorStop(0,f[G].replace("0.80","0.65").replace("0.75","0.60")),vt.addColorStop(.5,f[G]),vt.addColorStop(1,f[G].replace("0.80","0.90").replace("0.75","0.85")),r.fillStyle=vt,r.fill(),r.strokeStyle=p[G],r.lineWidth=2,r.stroke(),r.restore(),Y=rt}),O<D-.05){r.save();const G=Math.cos(Y),Z=Math.sin(Y);r.strokeStyle=i?"#ffffff":"#0f172a",r.lineWidth=3,r.beginPath(),r.moveTo(c+G*(L-2),u+Z*(L-2)),r.lineTo(c+G*(P+2),u+Z*(P+2)),r.stroke(),r.fillStyle=i?"#00f0ff":"#0284c7",r.beginPath(),r.arc(c+G*((L+P)/2),u+Z*((L+P)/2),3.5,0,Math.PI*2),r.fill(),r.restore()}}else r.save(),r.strokeStyle=h[t],r.lineWidth=2.5,r.beginPath(),r.arc(c,u,(L+P)/2,0,Math.PI*2),r.stroke(),r.restore()}r.save(),r.strokeStyle=x,r.lineWidth=1.5,r.beginPath(),r.arc(c,u,_+14,0,Math.PI*2),r.stroke();for(let w=0;w<360;w+=5){const Y=w*Math.PI/180,nt=Math.cos(Y),N=Math.sin(Y),G=w%45===0,Z=w%15===0,W=G?10:Z?6:3;r.strokeStyle=G?R:Z?g:x,r.lineWidth=G?2.5:Z?1.8:1,r.beginPath(),r.moveTo(c+nt*(P+2),u+N*(P+2)),r.lineTo(c+nt*(P+2+W),u+N*(P+2+W)),r.stroke()}r.strokeStyle=m,r.lineWidth=1.8,r.setLineDash([12,10]),r.beginPath(),r.arc(c,u,I,0,Math.PI*2),r.stroke(),r.setLineDash([]),r.strokeStyle=g,r.lineWidth=1.6,r.beginPath(),r.arc(c,u,U,0,Math.PI*2),r.stroke(),r.strokeStyle=x,r.lineWidth=1.6,r.setLineDash([6,6]),r.beginPath(),r.arc(c,u,S,0,Math.PI*2),r.stroke(),r.restore(),r.save(),r.textAlign="center",r.textBaseline="middle",r.fillStyle=i?"#ffffff":"#0f172a",r.font='bold 16px "JetBrains Mono", monospace';const H=Math.round(n||0),k=Math.round(y[t]||0),K=Math.max(0,H-k),X=Math.min(100,Math.round(H/20*100));let ht=`ARM ${t+1} (${v[t]}) // PROGRESS: ${H}/20 [${X}%]`,A=H>0?`[${k} OWN SECURED • ${K} INTRUDERS]`:"[STANDBY • 0/20 CAPACITY]";q&&(ht=`ARM ${t+1} (${v[t]}) // ★ VICTORY! 100% SECURED ★`,A="[★ ALL OWN BALLS GATHERED • ZERO INTRUDERS ★]"),r.fillText(ht,c,u-P-30),r.font='600 12px "JetBrains Mono", monospace',r.fillStyle=q?"#ffea00":K>0?"#ffb300":"#00ff9d",r.fillText(A,c,u-P-12),r.restore(),this.armHudTextures[t].needsUpdate=!0}updateArmPieHUDs(t,e=null,n=null){if(!(!t||t.length<4)){for(let i=0;i<4;i++){const r=t[i];this.armBallDistributions[i]={total:r.total,counts:[...r.counts]},n&&n[i]!==void 0&&this.armVictoryStates[i]!==n[i]&&(this.armVictoryStates[i]=n[i],this.forceHudUpdate=!0)}e!==null&&(this.currentThemeKey=e?"dark_cyber":"light_studio",this.forceHudUpdate=!0)}}renderTacticalHUD(t){this.currentThemeKey=t?"dark_cyber":"light_studio",this.forceHudUpdate=!0,this.updateArmPieHUDs(this.armBallDistributions,t)}setEnvironmentTheme(t){const e={light_studio:{bg:15857145,fogDensity:.05,platform:14870768,platformRoughness:.35,platformMetalness:.25,rails:9741240,floor:14412542,gridCenter:165063,gridLines:13358561,ambient:1.4,main:2.6,fill:1,back:.6},dark_cyber:{bg:461070,fogDensity:.12,platform:1251364,platformRoughness:.25,platformMetalness:.5,rails:790295,floor:395277,gridCenter:61695,gridLines:1713206,ambient:.7,main:2.2,fill:.8,back:.5},cad_blueprint:{bg:661807,fogDensity:.08,platform:1122880,platformRoughness:.4,platformMetalness:.3,rails:2307412,floor:134171,gridCenter:6619098,gridLines:1981023,ambient:.8,main:2,fill:.9,back:.4},cleanroom_lab:{bg:16777215,fogDensity:.03,platform:16317180,platformRoughness:.15,platformMetalness:.1,rails:14870768,floor:15857145,gridCenter:959977,gridLines:14870768,ambient:1.8,main:2.8,fill:1.4,back:.7}},n=e[t]||e.light_studio;this.scene.background&&this.scene.background.setHex(n.bg),this.scene.fog&&(this.scene.fog.color.setHex(n.bg),this.scene.fog.density=n.fogDensity),this.platformMat.color.setHex(n.platform),this.platformMat.roughness=n.platformRoughness,this.platformMat.metalness=n.platformMetalness,this.ambientLight&&(this.ambientLight.intensity=n.ambient),this.mainLight&&(this.mainLight.intensity=n.main),this.fillLight&&(this.fillLight.intensity=n.fill),this.backLight&&(this.backLight.intensity=n.back);const i=t==="dark_cyber"||t==="cad_blueprint";this.renderTacticalHUD(i),this.sweeperMat&&(this.sweeperMat.color.setHex(n.gridCenter),this.sweeperMat.opacity=i?.18:.1),this.centerDishMat&&(this.centerDishMat.color.setHex(n.gridCenter),this.centerDishMat.opacity=i?.22:.14),this.corridorMat&&(this.corridorMat.color.setHex(n.gridCenter),this.corridorMat.opacity=i?.18:.12),this.contourRings&&this.contourRings.forEach(r=>{r.material.color.setHex(n.gridCenter)}),this.gridHelper&&(this.scene.remove(this.gridHelper),this.gridHelper.geometry.dispose(),this.gridHelper=new Ia(8,40,n.gridCenter,n.gridLines),this.gridHelper.position.y=.001,this.gridHelper.visible=this.gridVisible,this.scene.add(this.gridHelper))}getGraspableObjects(){return this.graspableObjects}attachObjectToArm(t,e){this.scene.remove(t),e.add(t),t.position.set(0,.14,0),t.rotation.set(0,0,0)}detachObjectFromArm(t){const e=new b,n=new We;t.getWorldPosition(e),t.getWorldQuaternion(n),t.parent.remove(t),this.scene.add(t),t.position.copy(e),t.quaternion.copy(n)}update(t){var i,r;this.sweeperMeshes&&this.sweeperMeshes.forEach((o,a)=>{o.rotation.y+=t*(.18+a*.04)});const e=this.currentThemeKey==="dark_cyber"||this.currentThemeKey==="cad_blueprint",n=1-Math.exp(-8.5*Math.min(t,.1));for(let o=0;o<4;o++){let a=!1;const l=((i=this.armBallDistributions[o])==null?void 0:i.counts)||[0,0,0,0],c=((r=this.armBallDistributions[o])==null?void 0:r.total)||0;for(let f=0;f<4;f++){const p=l[f],h=p-this.armAnimatedCounts[o][f];Math.abs(h)>.003?(this.armAnimatedCounts[o][f]+=h*n,a=!0):this.armAnimatedCounts[o][f]!==p&&(this.armAnimatedCounts[o][f]=p,a=!0)}const u=c-this.armAnimatedTotal[o];Math.abs(u)>.003?(this.armAnimatedTotal[o]+=u*n,a=!0):this.armAnimatedTotal[o]!==c&&(this.armAnimatedTotal[o]=c,a=!0),this.armVictoryStates&&this.armVictoryStates[o]&&(a=!0),(a||this.forceHudUpdate)&&this.renderArmPieHUD(o,this.armAnimatedCounts[o],this.armAnimatedTotal[o],e)}this.forceHudUpdate=!1}toggleSafetyCurtain(t){}toggleGrid(t){this.gridVisible=t,this.gridHelper&&(this.gridHelper.visible=t),this.ringsGroup&&(this.ringsGroup.visible=t)}toggleShadows(t){this.shadowsEnabled=t,this.mainLight.castShadow=t}}class T0{constructor(t){this.scene=t,this.maxPoints=250,this.points=[],this.enabled=!1;const e=new ye,n=new Float32Array(this.maxPoints*3);e.setAttribute("position",new Qe(n,3));const i=new Co({color:65437,linewidth:2,transparent:!0,opacity:.8});this.line=new Ll(e,i),this.line.frustumCulled=!1,this.line.visible=!1,this.scene.add(this.line),this.buildTargetGizmo()}buildTargetGizmo(){this.targetGizmo=new se,this.targetGizmo.name="IK_TargetGizmo",this.targetGizmo.position.set(.4,.5,0),this.targetGizmo.visible=!1;const t=new en(.045,.003,16,32),e=new Oe({color:61695,wireframe:!0});this.targetGizmo.add(new xt(t,e));const n=new Cn(.02,16,16),i=new Ie({color:61695,emissive:61695,emissiveIntensity:2,roughness:.2});this.targetGizmo.add(new xt(n,i));const r=new Oe({color:16724838}),o=new Oe({color:65437}),a=new Oe({color:61695}),l=new Zt(.002,.002,.08,8),c=new xt(l,r);c.rotateZ(-Math.PI/2),c.position.x=.04,this.targetGizmo.add(c);const u=new xt(l,o);u.position.y=.04,this.targetGizmo.add(u);const d=new xt(l,a);d.rotateX(Math.PI/2),d.position.z=.04,this.targetGizmo.add(d),this.scene.add(this.targetGizmo)}setTargetGizmoVisible(t){this.targetGizmo.visible=t}setTargetPosition(t,e,n){this.targetGizmo.position.set(t,e,n)}getTargetPosition(){return this.targetGizmo.position}addPoint(t){if(!this.enabled||this.points.length>0&&this.points[this.points.length-1].distanceTo(t)<.005)return;this.points.push(t.clone()),this.points.length>this.maxPoints&&this.points.shift();const e=this.line.geometry.attributes.position;for(let n=0;n<this.points.length;n++)e.setXYZ(n,this.points[n].x,this.points[n].y,this.points[n].z);this.line.geometry.setDrawRange(0,this.points.length),e.needsUpdate=!0}clear(){this.points=[],this.line.geometry.setDrawRange(0,0)}toggleTrail(t){this.enabled=t,this.line.visible=t}}const fi={cyber_actuators:{id:"cyber_actuators",name:"Precision Industrial Servos (Warm Low-Pitch Whirr)",desc:"Deep synchronous servo motors with warm low-pitch sweeps and subtle mechanical purr",joints:[{name:"J1 (Base)",baseFreq:48,maxFreq:95,filterFreq:160,frictionFreq:280,wave1:"sine",wave2:"triangle",harmRatio:2,vol1:.5,vol2:.2,fricVol:.12,maxVol:.012},{name:"J2 (Shoulder)",baseFreq:62,maxFreq:120,filterFreq:190,frictionFreq:330,wave1:"sine",wave2:"triangle",harmRatio:2,vol1:.5,vol2:.2,fricVol:.12,maxVol:.011},{name:"J3 (Elbow)",baseFreq:82,maxFreq:155,filterFreq:230,frictionFreq:390,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.5,vol2:.18,fricVol:.11,maxVol:.01},{name:"J4 (Forearm)",baseFreq:105,maxFreq:195,filterFreq:280,frictionFreq:460,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.52,vol2:.16,fricVol:.1,maxVol:.009},{name:"J5 (Wrist)",baseFreq:135,maxFreq:245,filterFreq:340,frictionFreq:540,wave1:"sine",wave2:"triangle",harmRatio:2,vol1:.55,vol2:.15,fricVol:.09,maxVol:.008},{name:"J6 (Flange)",baseFreq:170,maxFreq:300,filterFreq:400,frictionFreq:620,wave1:"sine",wave2:"sine",harmRatio:2,vol1:.58,vol2:.12,fricVol:.08,maxVol:.007}],piston:{carrierFreq:58,carrierMax:110,filterFreq:180,fluidCutoff:260,carrierVol:.01,fluidVol:.006,hasChuff:!0}},precision_servos:{id:"precision_servos",name:"Heavy Industrial Machinery (Deep Planetary Gearbox)",desc:"Deep mechanical cast-iron body hum and planetary cycloidal gear teeth friction",joints:[{name:"J1 (Base)",baseFreq:40,maxFreq:78,filterFreq:130,frictionFreq:220,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.55,vol2:.22,fricVol:.14,maxVol:.013},{name:"J2 (Shoulder)",baseFreq:52,maxFreq:98,filterFreq:155,frictionFreq:260,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.55,vol2:.2,fricVol:.14,maxVol:.012},{name:"J3 (Elbow)",baseFreq:70,maxFreq:130,filterFreq:190,frictionFreq:310,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.55,vol2:.18,fricVol:.12,maxVol:.011},{name:"J4 (Forearm)",baseFreq:90,maxFreq:165,filterFreq:230,frictionFreq:370,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.55,vol2:.16,fricVol:.11,maxVol:.01},{name:"J5 (Wrist)",baseFreq:115,maxFreq:205,filterFreq:280,frictionFreq:430,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.58,vol2:.15,fricVol:.1,maxVol:.009},{name:"J6 (Flange)",baseFreq:145,maxFreq:250,filterFreq:330,frictionFreq:500,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.6,vol2:.12,fricVol:.09,maxVol:.008}],piston:{carrierFreq:50,carrierMax:90,filterFreq:150,fluidCutoff:220,carrierVol:.011,fluidVol:.007,hasChuff:!0}},heavy_hydraulics:{id:"heavy_hydraulics",name:"Heavy Hydraulics & Fluid Power",desc:"Sub-bass pressurized fluid flow with heavy mechanical cylinder motion",joints:[{name:"J1 (Base)",baseFreq:38,maxFreq:72,filterFreq:120,frictionFreq:190,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.55,vol2:.25,fricVol:.16,maxVol:.014},{name:"J2 (Shoulder)",baseFreq:48,maxFreq:90,filterFreq:140,frictionFreq:230,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.55,vol2:.24,fricVol:.16,maxVol:.013},{name:"J3 (Elbow)",baseFreq:64,maxFreq:118,filterFreq:170,frictionFreq:270,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.58,vol2:.22,fricVol:.14,maxVol:.012},{name:"J4 (Forearm)",baseFreq:82,maxFreq:148,filterFreq:205,frictionFreq:320,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.6,vol2:.2,fricVol:.13,maxVol:.011},{name:"J5 (Wrist)",baseFreq:105,maxFreq:185,filterFreq:245,frictionFreq:380,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.62,vol2:.18,fricVol:.11,maxVol:.01},{name:"J6 (Flange)",baseFreq:130,maxFreq:225,filterFreq:290,frictionFreq:440,wave1:"triangle",wave2:"sine",harmRatio:2,vol1:.65,vol2:.15,fricVol:.1,maxVol:.009}],piston:{carrierFreq:44,carrierMax:80,filterFreq:130,fluidCutoff:190,carrierVol:.014,fluidVol:.009,hasChuff:!0}},stepper_cobot:{id:"stepper_cobot",name:"Laboratory Cobot (Warm Sinusoidal Micro-Stepping)",desc:"Smooth, clean sinusoidal micro-stepping purr with damped low-resonance body",joints:[{name:"J1 (Base)",baseFreq:55,maxFreq:105,filterFreq:165,frictionFreq:260,wave1:"sine",wave2:"sine",harmRatio:2,vol1:.7,vol2:.12,fricVol:.08,maxVol:.01},{name:"J2 (Shoulder)",baseFreq:70,maxFreq:130,filterFreq:195,frictionFreq:300,wave1:"sine",wave2:"sine",harmRatio:2,vol1:.7,vol2:.12,fricVol:.08,maxVol:.009},{name:"J3 (Elbow)",baseFreq:90,maxFreq:165,filterFreq:235,frictionFreq:350,wave1:"sine",wave2:"sine",harmRatio:2,vol1:.72,vol2:.1,fricVol:.08,maxVol:.009},{name:"J4 (Forearm)",baseFreq:115,maxFreq:205,filterFreq:280,frictionFreq:410,wave1:"sine",wave2:"sine",harmRatio:2,vol1:.74,vol2:.1,fricVol:.07,maxVol:.008},{name:"J5 (Wrist)",baseFreq:145,maxFreq:255,filterFreq:335,frictionFreq:480,wave1:"sine",wave2:"sine",harmRatio:2,vol1:.75,vol2:.08,fricVol:.06,maxVol:.007},{name:"J6 (Flange)",baseFreq:180,maxFreq:310,filterFreq:395,frictionFreq:550,wave1:"sine",wave2:"sine",harmRatio:2,vol1:.78,vol2:.08,fricVol:.06,maxVol:.007}],piston:{carrierFreq:60,carrierMax:115,filterFreq:175,fluidCutoff:210,carrierVol:.008,fluidVol:.005,hasChuff:!1}},stealth_whisper:{id:"stealth_whisper",name:"Stealth Whisper Mode (Gated Sub-Bass Haptic Purr)",desc:"Subtle low-frequency tactile vibration hum with clean gated articulation",joints:[{name:"J1 (Base)",baseFreq:42,maxFreq:80,filterFreq:120,frictionFreq:180,wave1:"sine",wave2:"sine",harmRatio:1,vol1:.85,vol2:0,fricVol:.06,maxVol:.005},{name:"J2 (Shoulder)",baseFreq:52,maxFreq:98,filterFreq:140,frictionFreq:210,wave1:"sine",wave2:"sine",harmRatio:1,vol1:.85,vol2:0,fricVol:.06,maxVol:.005},{name:"J3 (Elbow)",baseFreq:68,maxFreq:125,filterFreq:165,frictionFreq:250,wave1:"sine",wave2:"sine",harmRatio:1,vol1:.85,vol2:0,fricVol:.06,maxVol:.004},{name:"J4 (Forearm)",baseFreq:86,maxFreq:155,filterFreq:195,frictionFreq:290,wave1:"sine",wave2:"sine",harmRatio:1,vol1:.85,vol2:0,fricVol:.05,maxVol:.004},{name:"J5 (Wrist)",baseFreq:108,maxFreq:190,filterFreq:230,frictionFreq:340,wave1:"sine",wave2:"sine",harmRatio:1,vol1:.85,vol2:0,fricVol:.05,maxVol:.003},{name:"J6 (Flange)",baseFreq:135,maxFreq:230,filterFreq:270,frictionFreq:400,wave1:"sine",wave2:"sine",harmRatio:1,vol1:.85,vol2:0,fricVol:.04,maxVol:.003}],piston:{carrierFreq:46,carrierMax:85,filterFreq:125,fluidCutoff:160,carrierVol:.005,fluidVol:.003,hasChuff:!1}}};class w0{constructor(){this.ctx=null,this.enabled=!0,this.currentSchemaKey="cyber_actuators",this.masterGain=null,this.jointVoices=[],this.hydraulicVoice=null,this.noiseBuffer=null,this.wasPistonMoving=!1,this.lastBallBounceTime=0,this.lastSwatTime=0,this.lastTransientTime=0,this.prevJointVelocities=[0,0,0,0,0,0]}setSchema(t){if(!fi[t])return;this.currentSchemaKey=t;const e=fi[t];if(this.ctx&&this.jointVoices.length>0){const n=this.ctx.currentTime;for(let i=0;i<6;i++){const r=this.jointVoices[i],o=e.joints[i];r.profile=o,r.osc1.type=o.wave1,r.osc2.type=o.wave2,r.osc1.frequency.setTargetAtTime(o.baseFreq,n,.04),r.osc2.frequency.setTargetAtTime(o.baseFreq*o.harmRatio,n,.04),r.filter.frequency.setTargetAtTime(o.filterFreq,n,.04),r.frictionFilter.frequency.setTargetAtTime(o.frictionFreq,n,.04),r.gain1.gain.setTargetAtTime(o.vol1,n,.04),r.gain2.gain.setTargetAtTime(o.vol2,n,.04),r.fricGain.gain.setTargetAtTime(o.fricVol,n,.04)}if(this.hydraulicVoice){const i=e.piston;this.hydraulicVoice.pistonCarrier.frequency.setTargetAtTime(i.carrierFreq,n,.04),this.hydraulicVoice.pistonFilter.frequency.setTargetAtTime(i.filterFreq,n,.04),this.hydraulicVoice.fluidFilt.frequency.setTargetAtTime(i.fluidCutoff,n,.04)}}}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.initJointSynthesizers())}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}createNoiseBuffer(){if(this.noiseBuffer||!this.ctx)return this.noiseBuffer;const t=Math.floor(this.ctx.sampleRate*2);this.noiseBuffer=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const e=this.noiseBuffer.getChannelData(0);let n=0,i=0,r=0;for(let o=0;o<t;o++){const a=Math.random()*2-1;n=.99886*n+a*.0555179,i=.99332*i+a*.0750759,r=.969*r+a*.153852,e[o]=(n+i+r+a*.5362)*.45}return this.noiseBuffer}initJointSynthesizers(){if(!this.ctx||this.jointVoices.length>0)return;const t=fi[this.currentSchemaKey]||fi.cyber_actuators,e=this.createNoiseBuffer();for(let u=0;u<6;u++){const d=t.joints[u],f=this.ctx.createOscillator();f.type=d.wave1,f.frequency.setValueAtTime(d.baseFreq,this.ctx.currentTime);const p=this.ctx.createOscillator();p.type=d.wave2,p.frequency.setValueAtTime(d.baseFreq*d.harmRatio,this.ctx.currentTime);const h=this.ctx.createGain();h.gain.setValueAtTime(d.vol1,this.ctx.currentTime);const v=this.ctx.createGain();v.gain.setValueAtTime(d.vol2,this.ctx.currentTime);const g=this.ctx.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(d.filterFreq,this.ctx.currentTime),g.Q.setValueAtTime(.7,this.ctx.currentTime);const m=this.ctx.createBufferSource();m.buffer=e,m.loop=!0;const R=this.ctx.createBiquadFilter();R.type="bandpass",R.frequency.setValueAtTime(d.frictionFreq,this.ctx.currentTime),R.Q.setValueAtTime(1.1,this.ctx.currentTime);const x=this.ctx.createGain();x.gain.setValueAtTime(d.fricVol,this.ctx.currentTime);const _=this.ctx.createGain();_.gain.setValueAtTime(0,this.ctx.currentTime),f.connect(h),h.connect(g),p.connect(v),v.connect(g),m.connect(R),R.connect(x),x.connect(g),g.connect(_),_.connect(this.masterGain),f.start(),p.start(),m.start(),this.jointVoices.push({osc1:f,osc2:p,gain1:h,gain2:v,filter:g,frictionSrc:m,frictionFilter:R,fricGain:x,gain:_,profile:d})}const n=t.piston,i=this.ctx.createOscillator();i.type="triangle",i.frequency.setValueAtTime(n.carrierFreq,this.ctx.currentTime);const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(n.filterFreq,this.ctx.currentTime),r.Q.setValueAtTime(.65,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(0,this.ctx.currentTime),i.connect(r),r.connect(o),o.connect(this.masterGain),i.start();const a=this.ctx.createBufferSource();a.buffer=e,a.loop=!0;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(n.fluidCutoff,this.ctx.currentTime),l.Q.setValueAtTime(.9,this.ctx.currentTime);const c=this.ctx.createGain();c.gain.setValueAtTime(0,this.ctx.currentTime),a.connect(l),l.connect(c),c.connect(this.masterGain),a.start(),this.hydraulicVoice={pistonCarrier:i,pistonFilter:r,pistonGain:o,fluidSrc:a,fluidFilt:l,fluidGainNode:c},this.wasPistonMoving=!1}toggleSound(t){return this.enabled=t!==void 0?t:!this.enabled,!this.enabled&&this.ctx&&(this.jointVoices.forEach(e=>{e.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.03)}),this.hydraulicVoice&&(this.hydraulicVoice.pistonGain.gain.setTargetAtTime(0,this.ctx.currentTime,.03),this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(0,this.ctx.currentTime,.03))),this.enabled}updateJointMotors(t=[],e=0,n=.016){if(!this.enabled){this.ctx&&this.jointVoices.length>0&&(this.jointVoices.forEach(c=>c.gain.gain.setTargetAtTime(0,this.ctx.currentTime,.03)),this.hydraulicVoice&&(this.hydraulicVoice.pistonGain.gain.setTargetAtTime(0,this.ctx.currentTime,.03),this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(0,this.ctx.currentTime,.03)));return}if(this.init(),!this.ctx||this.jointVoices.length===0)return;const i=this.ctx.currentTime,r=fi[this.currentSchemaKey]||fi.cyber_actuators,o=Math.max(.001,n),a=.08;let l=0;for(let c=0;c<6;c++){const u=this.jointVoices[c];if(!u)continue;const d=t[c]||0,f=this.prevJointVelocities[c]||0,p=Math.abs((d-f)/o);if(p>l&&(l=p),d>a){const h=u.profile,v=Math.min(1,(d-a)/2.5),g=Math.pow(v,1.25),m=h.baseFreq+g*(h.maxFreq-h.baseFreq),R=Math.min(h.maxVol,g*h.maxVol),x=h.filterFreq+g*(h.filterFreq*.35),_=h.frictionFreq+g*120;u.osc1.frequency.setTargetAtTime(m,i,.04),u.osc2.frequency.setTargetAtTime(m*h.harmRatio,i,.04),u.filter.frequency.setTargetAtTime(x,i,.04),u.frictionFilter.frequency.setTargetAtTime(_,i,.04),u.gain.gain.setTargetAtTime(R,i,.035)}else u.gain.gain.setTargetAtTime(0,i,.04);this.prevJointVelocities[c]=d}if(l>5.2&&i-this.lastTransientTime>.075&&(this.lastTransientTime=i,this.playTorqueBite(Math.min(1,l/12))),this.hydraulicVoice){const c=r.piston,u=Math.min(1,e/1.5);if(u>.04){this.wasPistonMoving=!0;const d=c.carrierFreq+u*(c.carrierMax-c.carrierFreq),f=u*c.carrierVol;this.hydraulicVoice.pistonCarrier.frequency.setTargetAtTime(d,i,.04),this.hydraulicVoice.pistonFilter.frequency.setTargetAtTime(c.filterFreq+u*35,i,.04),this.hydraulicVoice.pistonGain.gain.setTargetAtTime(f,i,.04);const p=c.fluidCutoff+u*50,h=u*c.fluidVol;this.hydraulicVoice.fluidFilt.frequency.setTargetAtTime(p,i,.04),this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(h,i,.04)}else this.hydraulicVoice.pistonGain.gain.setTargetAtTime(0,i,.05),this.hydraulicVoice.fluidGainNode.gain.setTargetAtTime(0,i,.05),this.wasPistonMoving&&(this.wasPistonMoving=!1,c.hasChuff&&this.playPneumatic(!1))}}playTorqueBite(t=1){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain(),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(320,e),r.Q.setValueAtTime(.7,e),n.type="triangle",n.frequency.setValueAtTime(260,e),n.frequency.exponentialRampToValueAtTime(75,e+.024);const o=.0075*Math.max(.2,Math.min(1,t));i.gain.setValueAtTime(o,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.028),n.connect(r),r.connect(i),i.connect(this.masterGain||this.ctx.destination),n.start(e),n.stop(e+.03)}playArmSwat(t=1){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;if(e-this.lastSwatTime<.06)return;this.lastSwatTime=e;const n=e,i=Math.max(.3,Math.min(1,t)),r=this.ctx.createOscillator(),o=this.ctx.createGain(),a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(360,n),a.Q.setValueAtTime(.8,n),r.type="triangle",r.frequency.setValueAtTime(110+i*40,n),r.frequency.exponentialRampToValueAtTime(260*i,n+.04),r.frequency.exponentialRampToValueAtTime(80,n+.09);const l=.0065*i;if(o.gain.setValueAtTime(5e-4,n),o.gain.linearRampToValueAtTime(l,n+.025),o.gain.exponentialRampToValueAtTime(1e-4,n+.085),r.connect(a),a.connect(o),o.connect(this.masterGain||this.ctx.destination),r.start(n),r.stop(n+.09),this.noiseBuffer){const c=this.ctx.createBufferSource();c.buffer=this.noiseBuffer;const u=this.ctx.createBiquadFilter();u.type="bandpass",u.frequency.setValueAtTime(340,n),u.Q.setValueAtTime(1.1,n);const d=this.ctx.createGain();d.gain.setValueAtTime(.0028*i,n),d.gain.exponentialRampToValueAtTime(1e-4,n+.055),c.connect(u),u.connect(d),d.connect(this.masterGain||this.ctx.destination),c.start(n),c.stop(n+.06)}}updateServoHum(t=0){if(this.jointVoices.length===0)return;const e=t/6;this.updateJointMotors([e,e,e,e,e,e],0,.016)}playBallBounce(t=1){if(!this.enabled||(this.init(),!this.ctx))return;const e=this.ctx.currentTime;if(e-this.lastBallBounceTime<.14)return;this.lastBallBounceTime=e;const n=Math.max(.15,Math.min(1,t)),i=e,r=this.ctx.createOscillator(),o=this.ctx.createGain(),a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(160,i),a.Q.setValueAtTime(.5,i),r.type="sine";const l=100+Math.random()*10;r.frequency.setValueAtTime(l,i),r.frequency.exponentialRampToValueAtTime(42,i+.024);const c=.0018*n;o.gain.setValueAtTime(c,i),o.gain.exponentialRampToValueAtTime(3e-5,i+.026),r.connect(a),a.connect(o),o.connect(this.masterGain||this.ctx.destination),r.start(i),r.stop(i+.028)}playClick(){if(!this.enabled||(this.init(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(420,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(160,this.ctx.currentTime+.025),e.gain.setValueAtTime(.015,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(5e-4,this.ctx.currentTime+.028),t.connect(e),e.connect(this.masterGain||this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.032)}playPuff(){this.playPneumatic(!0)}playBurst(){if(!this.enabled||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();if(i.type="lowpass",i.frequency.setValueAtTime(420,t),i.Q.setValueAtTime(.65,t),e.type="sine",e.frequency.setValueAtTime(210+Math.random()*30,t),e.frequency.exponentialRampToValueAtTime(70,t+.038),n.gain.setValueAtTime(.012,t),n.gain.exponentialRampToValueAtTime(2e-4,t+.04),e.connect(i),i.connect(n),n.connect(this.masterGain||this.ctx.destination),e.start(t),e.stop(t+.042),this.noiseBuffer){const r=this.ctx.createBufferSource();r.buffer=this.noiseBuffer;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(380,t),o.Q.setValueAtTime(1,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.005,t),a.gain.exponentialRampToValueAtTime(2e-4,t+.026),r.connect(o),o.connect(a),a.connect(this.masterGain||this.ctx.destination),r.start(t),r.stop(t+.03)}}playPneumatic(t=!0){if(!this.enabled||(this.init(),!this.ctx))return;const e=Math.floor(this.ctx.sampleRate*.12),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let l=0;l<e;l++)i[l]=(Math.random()*2-1)*Math.exp(-l/(e*.4));const r=this.ctx.createBufferSource();r.buffer=n;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(t?750:520,this.ctx.currentTime);const a=this.ctx.createGain();a.gain.setValueAtTime(.016,this.ctx.currentTime),a.gain.exponentialRampToValueAtTime(5e-4,this.ctx.currentTime+.11),r.connect(o),o.connect(a),a.connect(this.masterGain||this.ctx.destination),r.start(),r.stop(this.ctx.currentTime+.12)}playAlarm(){if(!this.enabled||(this.init(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(600,this.ctx.currentTime),t.frequency.setValueAtTime(450,this.ctx.currentTime+.1),e.gain.setValueAtTime(.08,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.2),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.22)}playSuccess(){if(!this.enabled||(this.init(),!this.ctx))return;[523.25,659.25,783.99].forEach((e,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(e,this.ctx.currentTime+n*.07),r.gain.setValueAtTime(0,this.ctx.currentTime+n*.07),r.gain.linearRampToValueAtTime(.035,this.ctx.currentTime+n*.07+.02),r.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+n*.07+.22),i.connect(r),r.connect(this.ctx.destination),i.start(this.ctx.currentTime+n*.07),i.stop(this.ctx.currentTime+n*.07+.25)})}playVictoryFanfare(){if(!this.enabled||(this.init(),!this.ctx))return;[523.25,659.25,783.99,1046.5,1318.51].forEach((e,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(e,this.ctx.currentTime+n*.08),r.gain.setValueAtTime(0,this.ctx.currentTime+n*.08),r.gain.linearRampToValueAtTime(.04,this.ctx.currentTime+n*.08+.02),r.gain.exponentialRampToValueAtTime(8e-4,this.ctx.currentTime+n*.08+.35),i.connect(r),r.connect(this.masterGain||this.ctx.destination),i.start(this.ctx.currentTime+n*.08),i.stop(this.ctx.currentTime+n*.08+.38)})}}var Bo={};(function s(t,e,n,i){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=(function(){if(!t.OffscreenCanvas)return!1;try{var A=new OffscreenCanvas(1,1),w=A.getContext("2d");w.fillRect(0,0,1,1);var Y=A.transferToImageBitmap();w.createPattern(Y,"no-repeat")}catch{return!1}return!0})();function l(){}function c(A){var w=e.exports.Promise,Y=w!==void 0?w:t.Promise;return typeof Y=="function"?new Y(A):(A(l,l),null)}var u=(function(A,w){return{transform:function(Y){if(A)return Y;if(w.has(Y))return w.get(Y);var nt=new OffscreenCanvas(Y.width,Y.height),N=nt.getContext("2d");return N.drawImage(Y,0,0),w.set(Y,nt),nt},clear:function(){w.clear()}}})(a,new Map),d=(function(){var A=Math.floor(16.666666666666668),w,Y,nt={},N=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(G){var Z=Math.random();return nt[Z]=requestAnimationFrame(function W(rt){N===rt||N+A-1<rt?(N=rt,delete nt[Z],G()):nt[Z]=requestAnimationFrame(W)}),Z},Y=function(G){nt[G]&&cancelAnimationFrame(nt[G])}):(w=function(G){return setTimeout(G,A)},Y=function(G){return clearTimeout(G)}),{frame:w,cancel:Y}})(),f=(function(){var A,w,Y={};function nt(N){function G(Z,W){N.postMessage({options:Z||{},callback:W})}N.init=function(W){var rt=W.transferControlToOffscreen();N.postMessage({canvas:rt},[rt])},N.fire=function(W,rt,vt){if(w)return G(W,null),w;var dt=Math.random().toString(36).slice(2);return w=c(function(yt){function tt(Q){Q.data.callback===dt&&(delete Y[dt],N.removeEventListener("message",tt),w=null,u.clear(),vt(),yt())}N.addEventListener("message",tt),G(W,dt),Y[dt]=tt.bind(null,{data:{callback:dt}})}),w},N.reset=function(){N.postMessage({reset:!0});for(var W in Y)Y[W](),delete Y[W]}}return function(){if(A)return A;if(!n&&r){var N=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{A=new Worker(URL.createObjectURL(new Blob([N])))}catch(G){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",G),null}nt(A)}return A}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function h(A,w){return w?w(A):A}function v(A){return A!=null}function g(A,w,Y){return h(A&&v(A[w])?A[w]:p[w],Y)}function m(A){return A<0?0:Math.floor(A)}function R(A,w){return Math.floor(Math.random()*(w-A))+A}function x(A){return parseInt(A,16)}function _(A){return A.map(P)}function P(A){var w=String(A).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:x(w.substring(0,2)),g:x(w.substring(2,4)),b:x(w.substring(4,6))}}function L(A){var w=g(A,"origin",Object);return w.x=g(w,"x",Number),w.y=g(w,"y",Number),w}function I(A){A.width=document.documentElement.clientWidth,A.height=document.documentElement.clientHeight}function U(A){var w=A.getBoundingClientRect();A.width=w.width,A.height=w.height}function S(A){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=A,w}function y(A,w,Y,nt,N,G,Z,W,rt){A.save(),A.translate(w,Y),A.rotate(G),A.scale(nt,N),A.arc(0,0,1,Z,W,rt),A.restore()}function D(A){var w=A.angle*(Math.PI/180),Y=A.spread*(Math.PI/180);return{x:A.x,y:A.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:A.startVelocity*.5+Math.random()*A.startVelocity,angle2D:-w+(.5*Y-Math.random()*Y),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:A.color,shape:A.shape,tick:0,totalTicks:A.ticks,decay:A.decay,drift:A.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:A.gravity*3,ovalScalar:.6,scalar:A.scalar,flat:A.flat}}function O(A,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var Y=w.tick++/w.totalTicks,nt=w.x+w.random*w.tiltCos,N=w.y+w.random*w.tiltSin,G=w.wobbleX+w.random*w.tiltCos,Z=w.wobbleY+w.random*w.tiltSin;if(A.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-Y)+")",A.beginPath(),o&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))A.fill(K(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(G-nt)*.1,Math.abs(Z-N)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var W=Math.PI/10*w.wobble,rt=Math.abs(G-nt)*.1,vt=Math.abs(Z-N)*.1,dt=w.shape.bitmap.width*w.scalar,yt=w.shape.bitmap.height*w.scalar,tt=new DOMMatrix([Math.cos(W)*rt,Math.sin(W)*rt,-Math.sin(W)*vt,Math.cos(W)*vt,w.x,w.y]);tt.multiplySelf(new DOMMatrix(w.shape.matrix));var Q=A.createPattern(u.transform(w.shape.bitmap),"no-repeat");Q.setTransform(tt),A.globalAlpha=1-Y,A.fillStyle=Q,A.fillRect(w.x-dt/2,w.y-yt/2,dt,yt),A.globalAlpha=1}else if(w.shape==="circle")A.ellipse?A.ellipse(w.x,w.y,Math.abs(G-nt)*w.ovalScalar,Math.abs(Z-N)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):y(A,w.x,w.y,Math.abs(G-nt)*w.ovalScalar,Math.abs(Z-N)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var T=Math.PI/2*3,gt=4*w.scalar,at=8*w.scalar,_t=w.x,ot=w.y,bt=5,ut=Math.PI/bt;bt--;)_t=w.x+Math.cos(T)*at,ot=w.y+Math.sin(T)*at,A.lineTo(_t,ot),T+=ut,_t=w.x+Math.cos(T)*gt,ot=w.y+Math.sin(T)*gt,A.lineTo(_t,ot),T+=ut;else A.moveTo(Math.floor(w.x),Math.floor(w.y)),A.lineTo(Math.floor(w.wobbleX),Math.floor(N)),A.lineTo(Math.floor(G),Math.floor(Z)),A.lineTo(Math.floor(nt),Math.floor(w.wobbleY));return A.closePath(),A.fill(),w.tick<w.totalTicks}function F(A,w,Y,nt,N){var G=w.slice(),Z=A.getContext("2d"),W,rt,vt=c(function(dt){function yt(){W=rt=null,Z.clearRect(0,0,nt.width,nt.height),u.clear(),N(),dt()}function tt(){n&&!(nt.width===i.width&&nt.height===i.height)&&(nt.width=A.width=i.width,nt.height=A.height=i.height),!nt.width&&!nt.height&&(Y(A),nt.width=A.width,nt.height=A.height),Z.clearRect(0,0,nt.width,nt.height),G=G.filter(function(Q){return O(Z,Q)}),G.length?W=d.frame(tt):yt()}W=d.frame(tt),rt=yt});return{addFettis:function(dt){return G=G.concat(dt),vt},canvas:A,promise:vt,reset:function(){W&&d.cancel(W),rt&&rt()}}}function q(A,w){var Y=!A,nt=!!g(w||{},"resize"),N=!1,G=g(w,"disableForReducedMotion",Boolean),Z=r&&!!g(w||{},"useWorker"),W=Z?f():null,rt=Y?I:U,vt=A&&W?!!A.__confetti_initialized:!1,dt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,yt;function tt(T,gt,at){for(var _t=g(T,"particleCount",m),ot=g(T,"angle",Number),bt=g(T,"spread",Number),ut=g(T,"startVelocity",Number),C=g(T,"decay",Number),M=g(T,"gravity",Number),j=g(T,"drift",Number),it=g(T,"colors",_),ct=g(T,"ticks",Number),st=g(T,"shapes"),Dt=g(T,"scalar"),Mt=!!g(T,"flat"),At=L(T),qt=_t,ft=[],Ct=A.width*At.x,Nt=A.height*At.y;qt--;)ft.push(D({x:Ct,y:Nt,angle:ot,spread:bt,startVelocity:ut,color:it[qt%it.length],shape:st[R(0,st.length)],ticks:ct,decay:C,gravity:M,drift:j,scalar:Dt,flat:Mt}));return yt?yt.addFettis(ft):(yt=F(A,ft,rt,gt,at),yt.promise)}function Q(T){var gt=G||g(T,"disableForReducedMotion",Boolean),at=g(T,"zIndex",Number);if(gt&&dt)return c(function(ut){ut()});Y&&yt?A=yt.canvas:Y&&!A&&(A=S(at),document.body.appendChild(A)),nt&&!vt&&rt(A);var _t={width:A.width,height:A.height};W&&!vt&&W.init(A),vt=!0,W&&(A.__confetti_initialized=!0);function ot(){if(W){var ut={getBoundingClientRect:function(){if(!Y)return A.getBoundingClientRect()}};rt(ut),W.postMessage({resize:{width:ut.width,height:ut.height}});return}_t.width=_t.height=null}function bt(){yt=null,nt&&(N=!1,t.removeEventListener("resize",ot)),Y&&A&&(document.body.contains(A)&&document.body.removeChild(A),A=null,vt=!1)}return nt&&!N&&(N=!0,t.addEventListener("resize",ot,!1)),W?W.fire(T,_t,bt):tt(T,_t,bt)}return Q.reset=function(){W&&W.reset(),yt&&yt.reset()},Q}var H;function k(){return H||(H=q(null,{useWorker:!0,resize:!0})),H}function K(A,w,Y,nt,N,G,Z){var W=new Path2D(A),rt=new Path2D;rt.addPath(W,new DOMMatrix(w));var vt=new Path2D;return vt.addPath(rt,new DOMMatrix([Math.cos(Z)*N,Math.sin(Z)*N,-Math.sin(Z)*G,Math.cos(Z)*G,Y,nt])),vt}function X(A){if(!o)throw new Error("path confetti are not supported in this browser");var w,Y;typeof A=="string"?w=A:(w=A.path,Y=A.matrix);var nt=new Path2D(w),N=document.createElement("canvas"),G=N.getContext("2d");if(!Y){for(var Z=1e3,W=Z,rt=Z,vt=0,dt=0,yt,tt,Q=0;Q<Z;Q+=2)for(var T=0;T<Z;T+=2)G.isPointInPath(nt,Q,T,"nonzero")&&(W=Math.min(W,Q),rt=Math.min(rt,T),vt=Math.max(vt,Q),dt=Math.max(dt,T));yt=vt-W,tt=dt-rt;var gt=10,at=Math.min(gt/yt,gt/tt);Y=[at,0,0,at,-Math.round(yt/2+W)*at,-Math.round(tt/2+rt)*at]}return{type:"path",path:w,matrix:Y}}function ht(A){var w,Y=1,nt="#000000",N='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof A=="string"?w=A:(w=A.text,Y="scalar"in A?A.scalar:Y,N="fontFamily"in A?A.fontFamily:N,nt="color"in A?A.color:nt);var G=10*Y,Z=""+G+"px "+N,W=new OffscreenCanvas(G,G),rt=W.getContext("2d");rt.font=Z;var vt=rt.measureText(w),dt=Math.ceil(vt.actualBoundingBoxRight+vt.actualBoundingBoxLeft),yt=Math.ceil(vt.actualBoundingBoxAscent+vt.actualBoundingBoxDescent),tt=2,Q=vt.actualBoundingBoxLeft+tt,T=vt.actualBoundingBoxAscent+tt;dt+=tt+tt,yt+=tt+tt,W=new OffscreenCanvas(dt,yt),rt=W.getContext("2d"),rt.font=Z,rt.fillStyle=nt,rt.fillText(w,Q,T);var gt=1/Y;return{type:"bitmap",bitmap:W.transferToImageBitmap(),matrix:[gt,0,0,gt,-dt*gt/2,-yt*gt/2]}}e.exports=function(){return k().apply(this,arguments)},e.exports.reset=function(){k().reset()},e.exports.create=q,e.exports.shapeFromPath=X,e.exports.shapeFromText=ht})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Bo,!1);const A0=Bo.exports;Bo.exports.create;class R0{constructor(t,e,n,i){this.robot=t,this.kinematics=e,this.gripper=n,this.audio=i,this.currentMode="fk",this.isPlaying=!1,this.isLooping=!0,this.playbackSpeed=1,this.waypoints=[],this.currentStepIndex=0,this.isAutoRunning=!1,this.autoStep=0,this.partsProcessed=0,this.cycleStartTime=0,this.avgCycleTime=0,this.onWaypointsChanged=null,this.onStepChanged=null,this.onAutoStatsChanged=null,this.onModeChanged=null}setMode(t){this.currentMode=t,this.stopPlayback(),this.stopAuto(),this.onModeChanged&&this.onModeChanged(t)}recordCurrentPose(){const t={id:Date.now(),label:`WP-${String(this.waypoints.length+1).padStart(2,"0")}`,angles:[...this.robot.angles],gripper:this.gripper.isOpen?0:1,pose:this.kinematics.getTCPPose()};this.waypoints.push(t),this.audio.playClick(),this.onWaypointsChanged&&this.onWaypointsChanged(this.waypoints)}deleteWaypoint(t){this.waypoints.splice(t,1),this.currentStepIndex>=this.waypoints.length&&(this.currentStepIndex=Math.max(0,this.waypoints.length-1)),this.onWaypointsChanged&&this.onWaypointsChanged(this.waypoints)}clearWaypoints(){this.waypoints=[],this.currentStepIndex=0,this.stopPlayback(),this.onWaypointsChanged&&this.onWaypointsChanged(this.waypoints)}loadDemoRoutine(){this.waypoints=[{id:1,label:"Approach Infeed",angles:[-.95,-.4,.8,0,-.4,0],gripper:0,pose:{x:-.5,y:.45,z:.25}},{id:2,label:"Pneumatic Pick",angles:[-.95,-.85,1.25,0,-.4,0],gripper:1,pose:{x:-.55,y:.28,z:.25}},{id:3,label:"Transfer Apex",angles:[0,-.3,.6,0,-.3,0],gripper:1,pose:{x:0,y:.6,z:.2}},{id:4,label:"Pallet Deposit",angles:[.95,-.85,1.25,0,-.4,0],gripper:0,pose:{x:.55,y:.28,z:.25}}],this.currentStepIndex=0,this.onWaypointsChanged&&this.onWaypointsChanged(this.waypoints),this.audio.playClick()}togglePlayRoutine(){this.isPlaying?this.stopPlayback():this.startPlayback()}startPlayback(){this.waypoints.length!==0&&(this.isPlaying=!0,this.currentStepIndex=0,this.executeCurrentStep())}stopPlayback(){this.isPlaying=!1}executeCurrentStep(){if(!this.isPlaying||this.waypoints.length===0)return;const t=this.waypoints[this.currentStepIndex];this.onStepChanged&&this.onStepChanged(this.currentStepIndex),this.gripper.setOpen(t.gripper===0);const e=1.2/this.playbackSpeed;this.kinematics.interpolateTo(t.angles,e,()=>{this.isPlaying&&(this.currentStepIndex++,this.currentStepIndex>=this.waypoints.length?this.isLooping?(this.currentStepIndex=0,this.executeCurrentStep()):(this.isPlaying=!1,this.audio.playSuccess()):this.executeCurrentStep())})}stepForward(){if(this.waypoints.length===0)return;this.currentStepIndex=(this.currentStepIndex+1)%this.waypoints.length;const t=this.waypoints[this.currentStepIndex];this.gripper.setOpen(t.gripper===0),this.kinematics.interpolateTo(t.angles,1/this.playbackSpeed),this.onStepChanged&&this.onStepChanged(this.currentStepIndex)}toggleAuto(){this.isAutoRunning?this.stopAuto():this.startAuto()}startAuto(){this.isAutoRunning=!0,this.autoStep=0,this.cycleStartTime=performance.now(),this.runAutoStep()}stopAuto(){this.isAutoRunning=!1}runAutoStep(){if(!this.isAutoRunning)return;const t=[{angles:[-.95,-.4,.8,0,-.4,0],grip:!0,duration:1,stepId:"step-infeed"},{angles:[-.95,-.85,1.25,0,-.4,0],grip:!1,duration:.8,stepId:"step-approach"},{angles:[-.95,-.3,.6,0,-.3,0],grip:!1,duration:.8,stepId:"step-grip"},{angles:[.95,-.3,.6,0,-.3,0],grip:!1,duration:1.2,stepId:"step-transport"},{angles:[.95,-.85,1.25,0,-.4,0],grip:!0,duration:.8,stepId:"step-place"},{angles:[0,-.35,.75,0,-.4,0],grip:!0,duration:1,stepId:"step-infeed"}],e=t[this.autoStep],n=e.duration/this.playbackSpeed;this.onAutoStatsChanged&&this.onAutoStatsChanged({stepId:e.stepId,partsCount:this.partsProcessed,cycleTime:this.avgCycleTime}),this.kinematics.interpolateTo(e.angles,n,()=>{if(this.isAutoRunning){if(this.gripper.setOpen(e.grip),this.autoStep++,this.autoStep>=t.length){this.autoStep=0,this.partsProcessed++;const i=(performance.now()-this.cycleStartTime)/1e3;this.avgCycleTime=Math.round(i*10)/10,this.cycleStartTime=performance.now(),this.partsProcessed%3===0&&A0({particleCount:40,spread:60,origin:{y:.7}}),this.audio.playSuccess()}this.runAutoStep()}})}}class C0{constructor(t,e){this.robot=t,this.kinematics=e,this.prevAngles=[...this.robot.angles],this.jointVelocities=[0,0,0,0,0,0],this.motorTemp=42.5,this.totalTorque=120,this.maxVelocity=0,this.fps=60,this.frameCount=0,this.lastFpsUpdate=performance.now(),this.elTemp=document.getElementById("val-temp"),this.elBarTemp=document.getElementById("bar-temp"),this.elTorque=document.getElementById("val-torque"),this.elBarTorque=document.getElementById("bar-torque"),this.elVelocity=document.getElementById("val-velocity"),this.elBarVelocity=document.getElementById("bar-velocity"),this.elFps=document.getElementById("qm-fps"),this.elReach=document.getElementById("qm-reach"),this.elLoad=document.getElementById("qm-load")}update(t){if(t<=0)return;let e=0;for(let l=0;l<6;l++){const u=Math.abs(this.robot.angles[l]-this.prevAngles[l])/t;this.jointVelocities[l]=u,e+=u,this.prevAngles[l]=this.robot.angles[l]}const n=this.robot.angles[1],i=this.robot.angles[2],r=Math.abs(Math.sin(n)*140+Math.sin(n+i)*90),o=e*35;this.totalTorque=Math.round(50+r+o),e>.1?this.motorTemp=Math.min(78,this.motorTemp+e*t*.4):this.motorTemp=Math.max(38,this.motorTemp-t*.15),this.maxVelocity=Math.round(e*.38*100)/100,this.frameCount++;const a=performance.now();return a-this.lastFpsUpdate>=500&&(this.fps=Math.round(this.frameCount*1e3/(a-this.lastFpsUpdate)),this.frameCount=0,this.lastFpsUpdate=a,this.renderTelemetry()),e}renderTelemetry(){this.elTemp&&(this.elTemp.textContent=`${this.motorTemp.toFixed(1)}°C`,this.elBarTemp.style.width=`${Math.min(100,this.motorTemp/80*100)}%`),this.elTorque&&(this.elTorque.textContent=`${this.totalTorque} Nm`,this.elBarTorque.style.width=`${Math.min(100,this.totalTorque/350*100)}%`),this.elVelocity&&(this.elVelocity.textContent=`${this.maxVelocity.toFixed(2)} m/s`,this.elBarVelocity.style.width=`${Math.min(100,this.maxVelocity/2.5*100)}%`),this.elFps&&(this.elFps.textContent=this.fps);const t=this.kinematics.getTCPPose(),e=Math.sqrt(t.x*t.x+t.z*t.z);this.elReach&&(this.elReach.textContent=`${e.toFixed(2)} m`)}}class P0{constructor(t,e,n,i){this.scene=t,this.robots=Array.isArray(e)?e:[e],this.kinematicsList=Array.isArray(n)?n:[n],this.robot=this.robots[0],this.kinematics=this.kinematicsList[0],this.audio=i,this.enabled=!0,this.targetFlockSize=80,this.spawnTimer=0,this.spawnInterval=.08,this.spawnIndex=0,this.balls=[],this.particles=[],this.gravity=-3.8,this.bounds={minX:-2.35,maxX:2.35,minY:0,maxY:2.4,minZ:-2.35,maxZ:2.35},this.maxDefenseRadius=1.65,this.minWorkspaceRadius=.18,this.score=0,this.pushCount=0,this.combo=0,this.lastPushTime=0,this.teamThemes=[{id:0,name:"ALPHA (ARM 1)",label:"Fanuc Yellow",primary:"#ffcb05",hex:16763653},{id:1,name:"BETA (ARM 2)",label:"Kuka Orange",primary:"#e65100",hex:15094016},{id:2,name:"GAMMA (ARM 3)",label:"Emerald Green",primary:"#10b981",hex:1096065},{id:3,name:"DELTA (ARM 4)",label:"Cobalt Blue",primary:"#2563eb",hex:2450411}],this.teamMaterials=this.teamThemes.map(c=>new Wl({color:c.hex,metalness:.12,roughness:.36,clearcoat:.4,clearcoatRoughness:.22,envMapIntensity:1.1})),this.armPursuits=this.robots.map((c,u)=>{const d=new b;c.group.getWorldPosition(d);const f=new b(-d.x,0,-d.z).normalize(),p=new b().copy(d).addScaledVector(f,.45);return p.y=.52,{robot:c,teamId:u,basePos:d,pursuitPos:p.clone(),pursuitTarget:p.clone(),pursuitVelocity:new b(0,0,0),defaultRestPos:p.clone(),currentTargetBall:null,lockedTargetBall:null,throwState:"IDLE",throwMode:"EJECT",throwBall:null,heldBall:null,centerTargetBall:null,throwTimer:0,targetThrowDir:new b(0,0,0),ejectionsCount:0,retainsCount:0,approachAttempts:0,lastAttemptBall:null,attemptTimer:0,currentAngleOffset:0,currentWristRoll:0,currentWristPitch:0,currentYOffset:0,isDancing:!1,danceTimer:0,wasDancing:!1}}),this.ballsGroup=new se,this.ballsGroup.name="FlockingBallsGroup",this.scene.add(this.ballsGroup),this.particlesGroup=new se,this.particlesGroup.name="DeflectionParticlesGroup",this.scene.add(this.particlesGroup),this.targetReticle=new se,this.targetReticle.name="AITargetReticle",this.targetReticle.visible=!1;const r=new Mi(.08,.095,32),o=new Oe({color:61695,transparent:!0,opacity:.85,side:Re});this.reticleMesh=new xt(r,o),this.targetReticle.add(this.reticleMesh);const a=new Mi(.02,.03,16),l=new xt(a,o);this.targetReticle.add(l),this.scene.add(this.targetReticle),this.spawnInitialBalls(this.targetFlockSize)}toggle(){return this.enabled=!this.enabled,!this.enabled&&this.targetReticle&&(this.targetReticle.visible=!1),this.enabled}spawnInitialBalls(t=80){for(let e=0;e<t;e++){const n=e%4;setTimeout(()=>{this.balls.length<this.targetFlockSize&&this.spawnBall(!0,n)},e*45)}}spawnBall(t=!0,e=null){let n=(Math.random()-.5)*.16,i=(Math.random()-.5)*.16,r=1.3+Math.random()*.5;if(!t){const R=Math.random()*Math.PI*2,x=.3+Math.random()*.4;n=Math.cos(R)*x,i=Math.sin(R)*x,r=.8+Math.random()*.4}const o=e!==null?e:this.spawnIndex++%4,a=this.teamThemes[o],l=this.teamMaterials[o],c=.064+Math.random()*.01,u=.42+Math.random()*.05,d=Math.pow(c/.07,3)*.08,f=(Math.random()-.5)*.04,p=(Math.random()-.5)*.04,h=-.2,v=new Cn(c,24,24),g=new xt(v,l);g.position.set(n,r,i),g.castShadow=!0,this.ballsGroup.add(g);const m={mesh:g,teamId:o,theme:a,radius:c,mass:d,color:a.hex,velocity:new b(f,h,p),restitution:u,bounces:0,age:0,lastPushTime:0};return this.balls.push(m),m}createPushRippleEffect(t,e,n,i){const o=new Cn(.012,6,6),a=new Oe({color:e,transparent:!0,opacity:.95});for(let d=0;d<14;d++){const f=new xt(o,a.clone());f.position.copy(t);const p=(Math.random()-.5)*1.2,h=Math.cos(p),v=Math.sin(p),g=i.x*h-i.z*v,m=i.x*v+i.z*h,R=1.2+Math.random()*1.6,x=new b(g*R,.3+Math.random()*.6,m*R);this.particlesGroup.add(f),this.particles.push({mesh:f,vel:x,life:.8,decay:2.2+Math.random()*1})}const l=new Mi(n*.5,n*1.1,24);l.rotateX(-Math.PI/2);const c=new Oe({color:e,transparent:!0,opacity:.9,side:Re}),u=new xt(l,c);u.position.set(t.x,Math.max(.02,t.y),t.z),this.particlesGroup.add(u),this.particles.push({mesh:u,vel:new b(i.x*.35,0,i.z*.35),isRing:!0,life:.7,decay:2.6}),this.audio.playPuff()}getFloorInfo(t,e){return Bi(t,e)}updateBallPhysics(t){const e=this.balls.length,n=2,i=t/n,r=3.6;for(let o=0;o<n;o++){for(let a=0;a<e;a++){const l=this.balls[a];if(!l||!l.mesh||l.isHeld)continue;const c=l.mesh.position;l.velocity.y+=this.gravity*i,l.velocity.y<-2.4&&(l.velocity.y=-2.4),c.addScaledVector(l.velocity,i);const u=this.getFloorInfo(c.x,c.z),d=u.y+l.radius;if(u.isElevated){const h=Math.abs(this.gravity),v=-h*u.gradX*1.85,g=-h*u.gradZ*1.85;l.velocity.x+=v*i,l.velocity.z+=g*i}if(c.y<=d){c.y=d;const h=u.normal,v=l.velocity.dot(h);v<-.15?(l.velocity.addScaledVector(h,-(1+l.restitution*.8)*v),l.velocity.x*=.93,l.velocity.z*=.93,l.bounces++,Math.abs(v)>1.4&&this.audio.playBallBounce(Math.min(1,Math.abs(v)/3.2))):(l.velocity.y=(h.y-1)*.08,l.velocity.x*=1-i*2.6,l.velocity.z*=1-i*2.6)}const f=this.armPursuits.length;for(let h=0;h<f;h++){const v=this.armPursuits[h].basePos,g=c.x-v.x,m=c.z-v.z,R=Math.hypot(g,m);if(c.y<=.58){let x=.355;c.y>.07&&c.y<=.22?x=.295:c.y>.22&&c.y<=.38?x=.26:c.y>.38&&(x=.235);const _=x+l.radius;if(R<_){const P=R>1e-4?g/R:1,L=R>1e-4?m/R:0;c.x=v.x+P*_,c.z=v.z+L*_;const I=l.velocity.x*P+l.velocity.z*L;if(I<0){const S=-(1+Math.max(.38,l.restitution*.55))*I;l.velocity.x+=S*P,l.velocity.z+=S*L,c.y<.1&&(l.velocity.y=Math.max(l.velocity.y,Math.abs(I)*.15)),l.bounces++,Math.abs(I)>1.5&&this.audio.playBallBounce(Math.min(1,Math.abs(I)/3.2))}}}else c.y<=.65+l.radius&&R<.24+l.radius&&(c.y=.65+l.radius,l.velocity.y<-.6&&(l.velocity.y=Math.abs(l.velocity.y)*.4,l.bounces++,this.audio.playBallBounce(.35)))}c.x<this.bounds.minX+l.radius?(c.x=this.bounds.minX+l.radius,l.velocity.x=Math.abs(l.velocity.x)*.3):c.x>this.bounds.maxX-l.radius&&(c.x=this.bounds.maxX-l.radius,l.velocity.x=-Math.abs(l.velocity.x)*.3),c.z<this.bounds.minZ+l.radius?(c.z=this.bounds.minZ+l.radius,l.velocity.z=Math.abs(l.velocity.z)*.3):c.z>this.bounds.maxZ-l.radius&&(c.z=this.bounds.maxZ-l.radius,l.velocity.z=-Math.abs(l.velocity.z)*.3),c.y>this.bounds.maxY-l.radius&&(c.y=this.bounds.maxY-l.radius,l.velocity.y=-Math.abs(l.velocity.y)*.3),l.velocity.x*=1-i*.2,l.velocity.z*=1-i*.2;const p=l.velocity.length();p>r&&l.velocity.multiplyScalar(r/p)}for(let a=0;a<e;a++){const l=this.balls[a];if(!l||!l.mesh||l.isHeld)continue;const c=l.mesh.position,u=l.radius;for(let d=a+1;d<e;d++){const f=this.balls[d];if(!f||!f.mesh||f.isHeld)continue;const p=f.mesh.position,h=u+f.radius,v=c.x-p.x;if(Math.abs(v)>h)continue;const g=c.z-p.z;if(Math.abs(g)>h)continue;const m=c.y-p.y;if(Math.abs(m)>h)continue;const R=v*v+m*m+g*g;if(R<h*h&&R>1e-6){const x=Math.sqrt(R),_=v/x,P=m/x,L=g/x,I=h-x,U=l.mass+f.mass,S=f.mass/U,y=l.mass/U;c.x+=_*I*S,c.y+=P*I*S,c.z+=L*I*S,p.x-=_*I*y,p.y-=P*I*y,p.z-=L*I*y;const D=l.velocity.x-f.velocity.x,O=l.velocity.y-f.velocity.y,F=l.velocity.z-f.velocity.z,q=D*_+O*P+F*L;if(q<0){const k=-(1+Math.min(l.restitution,f.restitution)*.45)*q/(1/l.mass+1/f.mass)*.65;l.velocity.x+=k/l.mass*_,l.velocity.y+=k/l.mass*P,l.velocity.z+=k/l.mass*L,f.velocity.x-=k/f.mass*_,f.velocity.y-=k/f.mass*P,f.velocity.z-=k/f.mass*L;const K=l.velocity.length();K>r&&l.velocity.multiplyScalar(r/K);const X=f.velocity.length();X>r&&f.velocity.multiplyScalar(r/X),Math.abs(q)>2.2&&this.audio.playBallBounce(Math.min(1,Math.abs(q)/4))}}}}}for(let o=0;o<e;o++){const a=this.balls[o];if(!a||!a.mesh||a.isHeld)continue;const l=a.velocity.length();if(l>.05){const c=new b(-a.velocity.z,0,a.velocity.x).normalize();a.mesh.rotateOnAxis(c,l/a.radius*t)}a.mesh.scale.set(1,1,1)}}predictInterception(t,e,n,i,r=0,o=0){const a=t.mesh.position.clone(),l=t.velocity.clone(),c=.033,u=30,d=6;let f=i;if(Math.abs(r)>.001){const L=Math.cos(r),I=Math.sin(r);f=new b(i.x*L-i.z*I,0,i.x*I+i.z*L).normalize()}for(let L=0;L<=u;L++){const I=L*c;if(L>0){l.y+=this.gravity*c,a.addScaledVector(l,c);const O=this.getFloorInfo(a.x,a.z).y+t.radius;a.y<=O&&(a.y=O,l.y=Math.abs(l.y)*t.restitution)}const U=a.x-n.x,S=a.z-n.z,y=Math.hypot(U,S);if(y<=this.maxDefenseRadius+.2&&y>=.15&&a.y<=1.55){const D=this.getFloorInfo(a.x,a.z),O=a.clone().addScaledVector(f,t.radius*.15),F=O.x-n.x,q=O.z-n.z,H=Math.hypot(F,q);H>1.35&&(O.x=n.x+F/H*1.35,O.z=n.z+q/H*1.35),O.y=Math.max(D.y+.052+o,Math.min(a.y+o,.4));const k=e.distanceTo(O),K=k/d;if(L===0||K<=I+.25)return{interceptPos:O,targetDir:i,time:I,dist:k}}}const p=t.mesh.position.clone().addScaledVector(t.velocity,.1),h=new b().subVectors(p,n),v=Math.hypot(h.x,h.z),g=Math.max(.2,Math.min(1.35,v));v>.001&&(p.x=n.x+h.x/v*g,p.z=n.z+h.z/v*g);const m=this.getFloorInfo(p.x,p.z);p.y=Math.max(m.y+t.radius*.75+o,Math.min(1.4,p.y));const R=p.clone().addScaledVector(f,t.radius*.15),x=R.x-n.x,_=R.z-n.z,P=Math.hypot(x,_);return P>1.35&&(R.x=n.x+x/P*1.35,R.z=n.z+_/P*1.35),R.y=Math.max(m.y+.052+o,R.y),{interceptPos:R,targetDir:i,time:.15,dist:e.distanceTo(R)}}hasActiveThreatsInZone(t,e=null){const n=this.armPursuits[t];if(!n)return!1;const i=n.basePos;for(let r=0;r<this.balls.length;r++){const o=this.balls[r];if(!o||!o.mesh||o.isHeld||o===e)continue;const a=o.mesh.position;if(Math.hypot(a.x-i.x,a.z-i.z)<=1.45&&a.y>=.02&&o.velocity.length()>.4)return!0}return!1}update(t){var i,r,o,a,l,c,u,d;const e=performance.now();for(let f=this.particles.length-1;f>=0;f--){const p=this.particles[f];p.life-=t*p.decay,p.isRing?(p.mesh.position.addScaledVector(p.vel,t),p.mesh.scale.multiplyScalar(1+t*5),p.mesh.material.opacity=Math.max(0,p.life)):(p.mesh.position.addScaledVector(p.vel,t),p.vel.y-=.6*t,p.mesh.material.opacity=Math.max(0,p.life),p.mesh.scale.multiplyScalar(Math.max(.01,p.life))),p.life<=0&&(this.particlesGroup.remove(p.mesh),p.mesh.geometry.dispose(),p.mesh.material.dispose(),this.particles.splice(f,1))}this.updateBallPhysics(t),this.balls.length<this.targetFlockSize&&(this.spawnTimer+=t,this.spawnTimer>=this.spawnInterval&&(this.spawnTimer=0,this.spawnBall(!0)));for(let f=0;f<this.balls.length;f++){const p=this.balls[f];if(!p||!p.mesh||p.isHeld)continue;const h=p.mesh.position;if(Math.hypot(h.x,h.z)<=.52){if(p.velocity.length()<.12?p.centerStuckTime=(p.centerStuckTime||0)+t:p.centerStuckTime=Math.max(0,(p.centerStuckTime||0)-t*1.5),p.centerStuckTime>1.4){const m=p.teamId,R=this.armPursuits[m];if(R&&R.throwState==="IDLE"&&!this.hasActiveThreatsInZone(m,p)){let x=null,_=1/0;for(let P=0;P<this.balls.length;P++){const L=this.balls[P];if(!(!L||!L.mesh||L.isHeld||L===p)&&L.teamId===m){if(L.velocity.length()>.35)continue;const U=Math.hypot(L.mesh.position.x-R.basePos.x,L.mesh.position.z-R.basePos.z);U>=.22&&U<=1.45&&U<_&&(_=U,x=L)}}x&&(R.throwState="APPROACH",R.throwMode="CENTER_STRIKE",R.throwBall=x,R.centerTargetBall=p,R.throwTimer=0,R.robot.setGripper(0),p.centerStuckTime=0)}}}else p.centerStuckTime=0}for(let f=0;f<this.robots.length;f++){const p=this.robots[f],h=this.armPursuits[f],v=h.teamId,g=h.basePos;p.group.getWorldPosition(g);const m=new b;p.getTCPWorldPosition(m);const R=p.getArmColliders();for(let x=0;x<this.balls.length;x++){const _=this.balls[x];if(!_||!_.mesh||_.isHeld)continue;const P=_.mesh.position,L=_.teamId===v,I=P.x-g.x,U=P.z-g.z,S=Math.hypot(I,U);if(!L&&S<=1.45&&(_.velocity.length()<.25?_.stuckTime=(_.stuckTime||0)+t:_.stuckTime=Math.max(0,(_.stuckTime||0)-t*.8),_.stuckTime>.9&&h.throwState==="IDLE"&&!this.hasActiveThreatsInZone(f,_)&&(h.throwState="APPROACH",h.throwMode="EJECT",h.throwBall=_,h.centerTargetBall=null,h.throwTimer=0,p.setGripper(0))),h.throwState==="IDLE"){const y=P.distanceTo(m),D=Math.hypot(P.x-m.x,P.z-m.z),O=Math.abs(P.y-m.y),F=y<=_.radius+.008||D<=_.radius+.012&&O<=.055,q=e-_.lastPushTime>90;if(F&&P.y>=.02&&q){_.lastPushTime=e;let H,k;if(L){if(Math.hypot(P.x-g.x,P.z-g.z)>1.2){const X=g.x-P.x,ht=g.z-P.z,A=Math.hypot(X,ht);H=A>.001?new b(X/A,0,ht/A):new b(1,0,0),k=1.65+Math.random()*.25}else{const X=new b(g.x,0,g.z).normalize(),ht=g.clone().addScaledVector(X,.48),A=ht.x-P.x,w=ht.z-P.z,Y=Math.hypot(A,w);H=Y>.001?new b(A/Y,0,w/Y):X,k=1.15+Math.random()*.25}h.retainsCount++,this.score+=20}else{const K=((i=this.armPursuits[_.teamId])==null?void 0:i.basePos)||new b(0,0,0),X=K.x-P.x,ht=K.z-P.z,A=Math.hypot(X,ht);if(A>.1?H=new b(X/A,0,ht/A):H=S>.001?new b(I/S,0,U/S):new b(1,0,0),h.approachAttempts>0&&Math.abs(h.currentAngleOffset)>.001){const w=Math.cos(h.currentAngleOffset*.45),Y=Math.sin(h.currentAngleOffset*.45);H=new b(H.x*w-H.z*Y,0,H.x*Y+H.z*w).normalize()}k=2.1+Math.random()*.35,h.ejectionsCount++,this.score+=50}_.velocity.x=H.x*k,_.velocity.z=H.z*k,_.velocity.y=.26+Math.random()*.12,_.bounces++,h.approachAttempts=0,h.attemptTimer=0,h.currentAngleOffset=0,h.currentWristRoll=0,h.currentWristPitch=0,h.currentYOffset=0,this.pushCount++,this.combo++,this.lastPushTime=e,this.createPushRippleEffect(P,_.color,_.radius,H),p.setGripper(.85),this.audio&&typeof this.audio.playArmSwat=="function"&&this.audio.playArmSwat(Math.min(1,k/2.4)),setTimeout(()=>p.setGripper(0),140)}}if(!_.isHeld)for(const y of R){let D=null;const O=y.radius;if(y.type==="sphere")D=y.center;else if(y.type==="capsule"){const F=new b().subVectors(y.p2,y.p1),q=new b().subVectors(P,y.p1),H=F.lengthSq(),k=H>1e-4?Math.max(0,Math.min(1,q.dot(F)/H)):0;D=new b().copy(y.p1).addScaledVector(F,k)}if(D){const F=new b().subVectors(P,D),q=F.length(),H=O+_.radius;if(q<H&&q>1e-4){const k=F.clone().normalize();P.copy(D).addScaledVector(k,H+.006),_.mesh.position.copy(P);const K=S>.001?new b(I/S,0,U/S):k,X=_.velocity.dot(k);X<0&&_.velocity.addScaledVector(k,-(1+_.restitution)*X),_.velocity.addScaledVector(K,.3+Math.random()*.15),_.bounces++,Math.abs(X)>1.4&&this.audio.playBallBounce(Math.min(1,Math.abs(X)/3))}}}}if(h.throwState==="APPROACH")if(p.setGripper(0),h.throwTimer+=t,!h.throwBall||!h.throwBall.mesh||h.throwBall.isHeld||h.throwTimer>1.2){if(h.throwBall&&h.throwBall.mesh){const x=new b(h.throwBall.mesh.position.x-g.x,0,h.throwBall.mesh.position.z-g.z).normalize();h.throwBall.velocity.addScaledVector(x,1.4),h.throwBall.velocity.y=.35,h.throwBall.stuckTime=0}h.throwBall=null,h.centerTargetBall=null,h.throwMode="EJECT",h.throwState="IDLE"}else{const x=h.throwBall.mesh.position;if(h.pursuitTarget.set(x.x,Math.max(.04,x.y),x.z),m.distanceTo(x)<=h.throwBall.radius+.13)if(p.setGripper(1),h.heldBall=h.throwBall,h.heldBall.isHeld=!0,h.heldBall.velocity.set(0,0,0),this.audio.playPneumatic(!0),h.throwState="WINDUP",h.throwTimer=.26,h.throwMode==="CENTER_STRIKE"){const P=h.centerTargetBall&&h.centerTargetBall.mesh?h.centerTargetBall.mesh.position:new b(0,.065,0);h.targetThrowDir.set(P.x-h.basePos.x,0,P.z-h.basePos.z).normalize()}else{const P=((r=this.armPursuits[h.heldBall.teamId])==null?void 0:r.basePos)||new b(0,0,0);h.targetThrowDir.set(P.x-h.basePos.x,0,P.z-h.basePos.z).normalize(),h.targetThrowDir.lengthSq()<.001&&h.targetThrowDir.set(-h.basePos.x,0,-h.basePos.z).normalize()}}else if(h.throwState==="WINDUP"){if(h.heldBall&&h.heldBall.velocity.set(0,0,0),h.throwMode==="CENTER_STRIKE"){const x=h.centerTargetBall&&h.centerTargetBall.mesh?h.centerTargetBall.mesh.position:new b(0,.065,0),_=new b(x.x-h.basePos.x,0,x.z-h.basePos.z).normalize();h.targetThrowDir.copy(_);const P=h.basePos.clone().add(new b(0,.35,0)).addScaledVector(_,-.22);h.pursuitTarget.copy(P)}else{const x=h.basePos.clone().add(new b(0,.88,0)).addScaledVector(h.targetThrowDir,-.3);h.pursuitTarget.copy(x)}h.throwTimer-=t,h.throwTimer<=0&&(h.throwState="RELEASE",h.throwTimer=.12)}else if(h.throwState==="RELEASE"){if(h.heldBall&&h.heldBall.velocity.set(0,0,0),h.throwMode==="CENTER_STRIKE"){const x=h.basePos.clone().add(new b(0,.06,0)).addScaledVector(h.targetThrowDir,.85);h.pursuitTarget.copy(x)}else{const x=h.basePos.clone().add(new b(0,.52,0)).addScaledVector(h.targetThrowDir,1.1);h.pursuitTarget.copy(x)}if(h.throwTimer-=t,h.throwTimer<=0){if(p.setGripper(0),h.heldBall&&h.heldBall.mesh){if(h.throwMode==="CENTER_STRIKE"){const x=h.centerTargetBall&&h.centerTargetBall.mesh?h.centerTargetBall.mesh.position:new b(0,.065,0),_=new b(x.x-m.x,0,x.z-m.z);_.length()>.001?_.normalize():_.copy(h.targetThrowDir);const L=3.2;h.heldBall.mesh.position.set(m.x,.065,m.z),h.heldBall.velocity.set(_.x*L,.02,_.z*L),h.centerTargetBall&&(h.centerTargetBall.centerStuckTime=0)}else{const x=((o=this.armPursuits[h.heldBall.teamId])==null?void 0:o.basePos)||new b(0,0,0),_=new b(x.x-m.x,0,x.z-m.z);_.lengthSq()>.001?_.normalize():_.copy(h.targetThrowDir);const P=2.6;h.heldBall.velocity.set(_.x*P,.65,_.z*P)}h.heldBall.bounces++,h.heldBall.stuckTime=0,h.heldBall.isHeld=!1,h.heldBall.lastPushTime=e+400,this.createPushRippleEffect(m,h.heldBall.color,h.heldBall.radius,h.targetThrowDir),this.audio.playPuff(),this.audio&&typeof this.audio.playArmSwat=="function"&&this.audio.playArmSwat(1.1),h.ejectionsCount++,this.pushCount++,this.score+=100}h.heldBall=null,h.throwBall=null,h.centerTargetBall=null,h.throwMode="EJECT",h.throwState="IDLE"}}}let n=null;if(this.enabled){const f=this.getArmBallDistribution();for(let p=0;p<this.armPursuits.length;p++){const h=this.armPursuits[p],v=h.teamId,g=h.robot,m=this.kinematicsList[p]||this.kinematicsList[0],R=new b;g.getTCPWorldPosition(R),g.group.getWorldPosition(h.basePos);const x=this.balls.filter(A=>A.teamId===v).length,_=((a=f[p])==null?void 0:a.counts[v])||0,P=(((l=f[p])==null?void 0:l.total)||0)-_,L=x>0&&_===x&&P===0;if(h.isDancing=L,L){h.danceTimer=(h.danceTimer||0)+t,h.wasDancing||(h.wasDancing=!0,this.audio&&typeof this.audio.playVictoryFanfare=="function"&&this.audio.playVictoryFanfare());const A=h.danceTimer,w=3.4,nt=Math.atan2(-h.basePos.x,-h.basePos.z)+Math.sin(A*w)*.65,N=-.4+Math.cos(A*w)*.75,G=.2-Math.cos(A*w)*.55+Math.sin(A*w*2)*.22,Z=Math.sin(A*w+.8)*1.35,W=-.3+Math.cos(A*w)*.8,rt=A*3.8+Math.sin(A*w)*2.2,vt=.15+.7*(.5+.5*Math.cos(A*w));g.setTargetTelescope(vt),g.setTargetAngles([nt,N,G,Z,W,rt]),g.setGripper(.5+.5*Math.sin(A*w*2));continue}else h.danceTimer=0,h.wasDancing=!1;if(h.throwState!=="IDLE"){const A=h.throwState==="RELEASE"?.03:.048,w=h.throwState==="RELEASE"?9.5:7.2,Y=2/A,nt=Y*t,N=1/(1+nt+.48*nt*nt+.235*nt*nt*nt),G=new b().subVectors(h.pursuitPos,h.pursuitTarget),Z=h.pursuitTarget.clone(),W=w*A;G.clampLength(0,W);const rt=h.pursuitPos.clone().sub(G),vt=new b().addVectors(h.pursuitVelocity,G.clone().multiplyScalar(Y)).multiplyScalar(t);h.pursuitVelocity.sub(vt.clone().multiplyScalar(Y)).multiplyScalar(N);const dt=rt.clone().add(G.add(vt).multiplyScalar(N));Z.clone().sub(h.pursuitPos).dot(dt.clone().sub(Z))>0&&(dt.copy(Z),h.pursuitVelocity.set(0,0,0)),h.pursuitPos.copy(dt),m.solveIK(h.pursuitPos,18,.002,!1,h.currentWristRoll,h.currentWristPitch);continue}if(h.lockedTargetBall){const A=h.lockedTargetBall,w=this.balls.indexOf(A),Y=A&&A.mesh?A.mesh.position:null,nt=Y?Math.hypot(Y.x-h.basePos.x,Y.z-h.basePos.z):999,N=w!==-1&&!A.isHeld&&nt<=1.75&&Y.y>=.02&&Y.y<=1.85;if(h.lockTimer=(h.lockTimer||0)+t,!N||h.lockTimer>.8){if(h.lockTimer>.8&&A&&A.mesh){if(A.teamId===v){const Z=new b(h.basePos.x,0,h.basePos.z).normalize(),W=h.basePos.clone().addScaledVector(Z,.48),rt=new b(W.x-Y.x,0,W.z-Y.z).normalize();A.velocity.x=rt.x*1.8,A.velocity.z=rt.z*1.8,A.velocity.y=.28}else{const Z=((c=this.armPursuits[A.teamId])==null?void 0:c.basePos)||new b(0,0,0),W=new b(Z.x-Y.x,0,Z.z-Y.z).normalize();A.velocity.x=W.x*2.8,A.velocity.z=W.z*2.8,A.velocity.y=.4}A.lastPushTime=e,A.bounces++}h.lockedTargetBall=null,h.lockTimer=0,h.approachAttempts=0}}else h.lockTimer=0;let I=null,U=1/0;for(let A=0;A<this.balls.length;A++){const w=this.balls[A];if(!w||!w.mesh||w.isHeld)continue;const Y=w.mesh.position,nt=Math.hypot(Y.x-h.basePos.x,Y.z-h.basePos.z);if(nt>1.75||Y.y<.02)continue;const N=w.teamId===v,G=w.velocity.length();let Z,W=0;if(N){if(nt<=1.25&&G<.25||nt>1.78)continue;if(nt>1.25){const yt=h.basePos.x-Y.x,tt=h.basePos.z-Y.z,Q=Math.hypot(yt,tt);Z=Q>.001?new b(yt/Q,0,tt/Q):new b(1,0,0),W=.05+nt/1.78*.12}else{const yt=new b(h.basePos.x,0,h.basePos.z).normalize(),tt=h.basePos.clone().addScaledVector(yt,.48),Q=tt.x-Y.x,T=tt.z-Y.z,gt=Math.hypot(Q,T);Z=gt>.001?new b(Q/gt,0,T/gt):yt,W=.35+nt/1.25*.2}}else{const yt=((u=this.armPursuits[w.teamId])==null?void 0:u.basePos)||new b(0,0,0),tt=yt.x-Y.x,Q=yt.z-Y.z,T=Math.hypot(tt,Q);if(Z=T>.001?new b(tt/T,0,Q/T):new b(1,0,0),nt<=1.45){const gt=G>.2?.08:0;W=.01+nt/1.45*.15-gt}else W=.22+nt/1.75*.2}const rt=w===h.lastAttemptBall?h.currentAngleOffset:0,vt=w===h.lastAttemptBall?h.currentYOffset:0,dt=this.predictInterception(w,R,h.basePos,Z,rt,vt);if(dt){let yt=dt.time*.8+dt.dist*.5+W;w===h.lockedTargetBall&&(yt-=.25),yt<U&&(U=yt,I={ball:w,interceptPos:dt.interceptPos,time:dt.time})}}if(I){const A=I.ball;if(h.lastAttemptBall===A){if(h.attemptTimer+=t,h.attemptTimer>.45&&A.velocity.length()<.28){h.attemptTimer=0,h.approachAttempts++;const w=h.approachAttempts%5;if(w===1)h.currentAngleOffset=.96,h.currentWristRoll=.78,h.currentWristPitch=.26,h.currentYOffset=.015;else if(w===2)h.currentAngleOffset=-.96,h.currentWristRoll=-.78,h.currentWristPitch=.26,h.currentYOffset=.015;else if(w===3)h.currentAngleOffset=0,h.currentWristRoll=0,h.currentWristPitch=-.44,h.currentYOffset=-.02;else if(w===4)h.currentAngleOffset=1.35,h.currentWristRoll=1.57,h.currentWristPitch=.35,h.currentYOffset=.035;else{if(A.teamId===v){const nt=new b(h.basePos.x,0,h.basePos.z).normalize(),N=h.basePos.clone().addScaledVector(nt,.48),G=new b(N.x-A.mesh.position.x,0,N.z-A.mesh.position.z).normalize();A.velocity.x=G.x*1.8,A.velocity.z=G.z*1.8,A.velocity.y=.28}else{const nt=new b(A.mesh.position.x-h.basePos.x,0,A.mesh.position.z-h.basePos.z).normalize();A.velocity.addScaledVector(nt,2.4),A.velocity.y=.4}A.lastPushTime=e,A.bounces++,h.currentAngleOffset=0,h.currentWristRoll=0,h.currentWristPitch=0,h.currentYOffset=0}}}else h.lastAttemptBall=A,h.attemptTimer=0,h.approachAttempts=0,h.currentAngleOffset=0,h.currentWristRoll=0,h.currentWristPitch=0,h.currentYOffset=0;h.lockedTargetBall=A,h.currentTargetBall=A,h.pursuitTarget.copy(I.interceptPos),n||(n=A)}else{h.currentTargetBall=null,h.lockedTargetBall=null,h.lastAttemptBall=null,h.attemptTimer=0,h.approachAttempts=0,h.currentAngleOffset=0,h.currentWristRoll=0,h.currentWristPitch=0,h.currentYOffset=0;const A=new b(-h.basePos.x,0,-h.basePos.z).normalize(),w=h.basePos.x+A.x*.45,Y=h.basePos.z+A.z*.45;h.pursuitTarget.set(w,.5,Y)}const S=.048,y=6.8,D=2/S,O=D*t,F=1/(1+O+.48*O*O+.235*O*O*O),q=new b().subVectors(h.pursuitPos,h.pursuitTarget),H=h.pursuitTarget.clone(),k=y*S;q.clampLength(0,k);const K=h.pursuitPos.clone().sub(q),X=new b().addVectors(h.pursuitVelocity,q.clone().multiplyScalar(D)).multiplyScalar(t);h.pursuitVelocity.sub(X.clone().multiplyScalar(D)).multiplyScalar(F);const ht=K.clone().add(q.add(X).multiplyScalar(F));if(H.clone().sub(h.pursuitPos).dot(ht.clone().sub(H))>0&&(ht.copy(H),h.pursuitVelocity.set(0,0,0)),h.pursuitPos.copy(ht),m.solveIK(h.pursuitPos,18,.002,!1,h.currentWristRoll,h.currentWristPitch),g.group.updateMatrixWorld(!0),h.heldBall&&h.heldBall.mesh&&(g.getTCPWorldPosition(R),h.heldBall.mesh.position.copy(R),h.heldBall.velocity.set(0,0,0)),h.currentTargetBall&&g.setGripper(0),h.currentTargetBall&&h.currentTargetBall.mesh){const A=h.currentTargetBall,w=A.mesh.position;if(R.distanceTo(w)<=A.radius+.01&&A.velocity.length()<.25){if(h.hoverStallTimer=(h.hoverStallTimer||0)+t,h.hoverStallTimer>.3){h.hoverStallTimer=0;const nt=A.teamId===v;let N,G;if(nt){if(Math.hypot(w.x-h.basePos.x,w.z-h.basePos.z)>1.2){const W=h.basePos.x-w.x,rt=h.basePos.z-w.z,vt=Math.hypot(W,rt);N=vt>.001?new b(W/vt,0,rt/vt):new b(1,0,0),G=1.65}else{const W=new b(h.basePos.x,0,h.basePos.z).normalize(),rt=h.basePos.clone().addScaledVector(W,.48);N=new b(rt.x-w.x,0,rt.z-w.z).normalize(),G=1.2}h.retainsCount++}else{const Z=((d=this.armPursuits[A.teamId])==null?void 0:d.basePos)||new b(0,0,0);N=new b(Z.x-w.x,0,Z.z-w.z).normalize(),G=2.4,h.ejectionsCount++}A.velocity.x=N.x*G,A.velocity.z=N.z*G,A.velocity.y=.26,A.lastPushTime=e,A.bounces++,this.createPushRippleEffect(w,A.color,A.radius,N),g.setGripper(.85),this.audio&&typeof this.audio.playArmSwat=="function"&&this.audio.playArmSwat(Math.min(1,G/2.4)),setTimeout(()=>g.setGripper(0),140),h.lockedTargetBall=null,h.currentTargetBall=null}}else h.hoverStallTimer=0}else h.hoverStallTimer=0}this.targetReticle&&(n&&n.mesh?(this.targetReticle.visible=!0,this.targetReticle.position.copy(n.mesh.position),this.targetReticle.lookAt(this.targetReticle.position.clone().add(new b(0,1,0))),this.reticleMesh.rotation.z+=t*5):this.targetReticle.visible=!1)}}getArmBallDistribution(){const t=[{total:0,counts:[0,0,0,0]},{total:0,counts:[0,0,0,0]},{total:0,counts:[0,0,0,0]},{total:0,counts:[0,0,0,0]}];for(let e=0;e<this.balls.length;e++){const n=this.balls[e];if(!n||!n.mesh)continue;const i=n.mesh.position;for(let r=0;r<this.armPursuits.length;r++){const o=this.armPursuits[r];if(Math.hypot(i.x-o.basePos.x,i.z-o.basePos.z)<=1.35){const l=Math.max(0,Math.min(3,n.teamId??0));t[r].counts[l]++,t[r].total++}}}return t}getStats(){var r,o,a,l;const t=this.getArmBallDistribution(),e=[t[0].counts[0],t[1].counts[1],t[2].counts[2],t[3].counts[3]],n=[t[0].total-t[0].counts[0],t[1].total-t[1].counts[1],t[2].total-t[2].counts[2],t[3].total-t[3].counts[3]],i=[((r=this.armPursuits[0])==null?void 0:r.isDancing)||!1,((o=this.armPursuits[1])==null?void 0:o.isDancing)||!1,((a=this.armPursuits[2])==null?void 0:a.isDancing)||!1,((l=this.armPursuits[3])==null?void 0:l.isDancing)||!1];return{score:this.score,pushCount:this.pushCount,burstCount:this.pushCount,combo:this.combo,activeBalls:this.balls.length,territoryCounts:e,foreignCounts:n,victoryStates:i,distributions:t,armPursuits:this.armPursuits}}}class L0{constructor(){this.isEStopped=!1,this.activeCamPreset="iso",this.isDraggingIKGizmo=!1,this.isRightClickDragging=!1,this.ikTargetPos=new b(.4,.5,0),this.ikCurrentPos=new b(.4,.5,0),this.ikVelocity=new b(0,0,0),this.initThree(),this.initSystems(),this.initUI(),this.initEventListeners(),this.animate()}initThree(){this.container=document.getElementById("canvas-container"),this.scene=new Uh,this.scene.background=new Xt(15857145),this.scene.fog=new Ao(15857145,.05),this.camera=new He(45,window.innerWidth/window.innerHeight,.1,60),this.camera.position.set(2.8,2.3,2.8),this.renderer=new o0({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=cl,this.renderer.toneMappingExposure=1.1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=al,this.container.appendChild(this.renderer.domElement),this.controls=new l0(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2+.02,this.controls.minDistance=.4,this.controls.maxDistance=8,this.controls.target.set(0,.4,0),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1,this.clock=new yu}initSystems(){this.audio=new w0,this.workcell=new E0(this.scene);const t=[{position:[1.4,0,-1.4],rotationY:Math.PI*.75,theme:"fanuc",name:"ALPHA (ARM 1)"},{position:[-1.4,0,-1.4],rotationY:Math.PI*.25,theme:"kuka",name:"BETA (ARM 2)"},{position:[-1.4,0,1.4],rotationY:-Math.PI*.25,theme:"abb",name:"GAMMA (ARM 3)"},{position:[1.4,0,1.4],rotationY:-Math.PI*.75,theme:"cyber",name:"DELTA (ARM 4)"}];this.robots=t.map(e=>new M0(this.scene,e)),this.kinematicsList=this.robots.map(e=>new S0(e)),this.grippers=this.robots.map(e=>new b0(e,this.workcell,this.audio)),this.telemetries=this.robots.map((e,n)=>new C0(e,this.kinematicsList[n])),this.activeArmIndex=0,this.syncAllMode=!1,this.robot=this.robots[0],this.kinematics=this.kinematicsList[0],this.gripper=this.grippers[0],this.telemetry=this.telemetries[0],this.visualizer=new T0(this.scene),this.sequencer=new R0(this.robot,this.kinematics,this.gripper,this.audio),this.ballInterceptor=new P0(this.scene,this.robots,this.kinematicsList,this.audio),this.currentEnvTheme="light_studio",this.setEnvironmentTheme("light_studio"),this.kinematicsList.forEach(e=>e.moveToPreset("ready",1))}initUI(){this.bindArmSelector(),this.bindSettingsDrawer(),this.bindQuickActions(),this.bindBallInterceptorUI(),this.bindTelescopeControls(),this.buildJointSliders(),this.bindModeSwitcher(),this.bindPresets(),this.bindPendantControls(),this.bindToolControls(),this.bindCameraButtons(),this.bindDisplayToggles(),this.bindThemeSelector(),this.bindEStop()}bindArmSelector(){const t=()=>{document.querySelectorAll("#top-arm-selector .arm-select-btn").forEach(l=>{const c=parseInt(l.dataset.arm);isNaN(c)||l.classList.toggle("active",c===this.activeArmIndex&&!this.syncAllMode)});const i=document.getElementById("btn-top-arm-sync");i&&i.classList.toggle("active",this.syncAllMode),document.querySelectorAll(".drawer-arm-btn").forEach(l=>{const c=parseInt(l.dataset.arm);isNaN(c)||l.classList.toggle("active",c===this.activeArmIndex&&!this.syncAllMode)});const r=document.getElementById("btn-drawer-arm-sync");r&&r.classList.toggle("active",this.syncAllMode);const o=document.getElementById("rail-arm-badge");o&&(o.textContent=this.syncAllMode?"SYNC 4X":`ARM ${this.activeArmIndex+1}`);const a=document.getElementById("quick-status-chip");a&&(a.textContent=this.syncAllMode?"SYNC 4X ALL":`ARM ${this.activeArmIndex+1} ACTIVE`)};for(let i=0;i<4;i++){const r=document.getElementById(`btn-top-arm-${i}`);r&&r.addEventListener("click",()=>{this.setActiveArm(i)})}const e=document.getElementById("btn-top-arm-sync");e&&e.addEventListener("click",()=>{this.toggleSyncAll()});for(let i=0;i<4;i++){const r=document.getElementById(`btn-drawer-arm-${i}`);r&&r.addEventListener("click",()=>{this.setActiveArm(i)})}const n=document.getElementById("btn-drawer-arm-sync");n&&n.addEventListener("click",()=>{this.toggleSyncAll()}),this.updateArmUI=t}setActiveArm(t){t<0||t>=this.robots.length||(this.activeArmIndex=t,this.syncAllMode=!1,this.robot=this.robots[t],this.kinematics=this.kinematicsList[t],this.gripper=this.grippers[t],this.telemetry=this.telemetries[t],this.sequencer.robot=this.robot,this.sequencer.kinematics=this.kinematics,this.sequencer.gripper=this.gripper,this.updateArmUI&&this.updateArmUI(),this.updateJointUI(),this.audio.playClick())}toggleSyncAll(){this.syncAllMode=!this.syncAllMode,this.updateArmUI&&this.updateArmUI(),this.audio.playClick()}bindSettingsDrawer(){const t=document.getElementById("settings-drawer"),e=document.getElementById("btn-open-settings"),n=document.getElementById("btn-close-settings"),i=document.querySelectorAll(".nav-cat-btn"),r=document.querySelectorAll(".flyout-pane"),o=document.getElementById("flyout-current-title");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("hidden"),this.audio.playClick()}),n&&t&&n.addEventListener("click",()=>{t.classList.add("hidden"),this.audio.playClick()}),i.forEach(a=>{a.addEventListener("click",()=>{var c;const l=a.dataset.tab;if(i.forEach(u=>u.classList.remove("active")),a.classList.add("active"),r.forEach(u=>{u.classList.toggle("active",u.id===`pane-${l}`)}),o){const u=((c=a.querySelector(".cat-label"))==null?void 0:c.textContent)||"SETTINGS";o.textContent=u.toUpperCase()}this.audio.playClick()})}),document.querySelectorAll(".accordion-header").forEach(a=>{a.addEventListener("click",()=>{const l=a.closest(".accordion-item");l&&(l.classList.toggle("open"),this.audio.playClick())})})}bindQuickActions(){const t=document.getElementById("btn-quick-orbit"),e=document.getElementById("btn-quick-gripper"),n=document.getElementById("btn-quick-telescope"),i=document.getElementById("btn-quick-theme");i&&i.addEventListener("click",()=>{const r=this.currentEnvTheme==="light_studio"||this.currentEnvTheme==="cleanroom_lab"?"dark_cyber":"light_studio";this.setEnvironmentTheme(r),this.audio.playClick()}),t&&t.addEventListener("click",()=>{this.controls.autoRotate=!this.controls.autoRotate,this.controls.autoRotateSpeed=2,t.classList.toggle("active",this.controls.autoRotate),this.audio.playClick()}),e&&e.addEventListener("click",()=>{var r;(r=document.getElementById("btn-toggle-gripper"))==null||r.click()}),n&&n.addEventListener("click",()=>{var r;(r=document.getElementById("btn-step-telescope"))==null||r.click()})}bindBallInterceptorUI(){const t=document.getElementById("btn-toggle-ball-mode"),e=document.getElementById("ball-mode-text"),n=document.getElementById("btn-drawer-toggle-ball-ai"),i=document.getElementById("btn-drawer-drop-ball"),r=document.getElementById("ball-spawn-rate-slider"),o=document.getElementById("ball-spawn-rate-val"),a=document.getElementById("ball-ai-status-badge"),l=()=>{const c=this.ballInterceptor.enabled;t&&t.classList.toggle("active",c),e&&(e.textContent=c?"Push AI: ON":"Push AI: OFF"),a&&(a.textContent=c?"AUTO ACTIVE":"MANUAL",a.style.color=c?"var(--accent-mint)":"var(--text-muted)",a.style.borderColor=c?"var(--border-active)":"var(--border-subtle)")};t&&t.addEventListener("click",()=>{this.ballInterceptor.toggle(),l(),this.audio.playClick()}),n&&n.addEventListener("click",()=>{this.ballInterceptor.toggle(),l(),this.audio.playClick()}),i&&i.addEventListener("click",()=>{this.ballInterceptor.spawnBall(!0),this.audio.playPuff()}),r&&r.addEventListener("input",c=>{const u=parseInt(c.target.value,10);this.ballInterceptor.targetFlockSize=u,o&&(o.textContent=`${u} BALLS`)})}bindTelescopeControls(){const t=document.getElementById("telescope-slider"),e=document.getElementById("btn-step-telescope"),n=document.getElementById("btn-toggle-telescope"),i=document.getElementById("tele-extension-val"),r=document.getElementById("quick-tele-label"),o=a=>{const l=Math.round(a*100),c=(.38+a*.28).toFixed(2);i&&(i.textContent=`${l}% (${c}m)`),t&&(t.value=a),r&&(r.textContent=`📏 Tele: ${l}%`)};t&&t.addEventListener("input",a=>{const l=parseFloat(a.target.value);this.syncAllMode?this.robots.forEach(c=>{c.setTelescope(l),c.targetTelescopeExtension=l}):(this.robot.setTelescope(l),this.robot.targetTelescopeExtension=l),o(l)}),e&&e.addEventListener("click",()=>{const a=this.robot.targetTelescopeExtension||this.robot.getTelescope();let l=0;a<.25?l=.5:a<.75?l=1:l=0,this.syncAllMode?this.robots.forEach(c=>{c.targetTelescopeExtension=l}):this.robot.targetTelescopeExtension=l,this.audio.playPuff(),o(l)}),n&&n.addEventListener("click",()=>{const l=(this.robot.targetTelescopeExtension||this.robot.getTelescope())>.5?0:1;this.syncAllMode?this.robots.forEach(c=>{c.targetTelescopeExtension=l}):this.robot.targetTelescopeExtension=l,this.audio.playPuff(),o(l)})}buildJointSliders(){var n;const t=document.getElementById("joints-container");if(!t)return;t.innerHTML="";const e=[{name:"J1",desc:"Base Yaw"},{name:"J2",desc:"Shoulder Pitch"},{name:"J3",desc:"Elbow Pitch"},{name:"J4",desc:"Forearm Roll"},{name:"J5",desc:"Wrist Pitch"},{name:"J6",desc:"Tool Roll"}];this.jointSliderEls=[],e.forEach((i,r)=>{const o=this.robot.limits[r],a=document.createElement("div");a.className="joint-card",a.innerHTML=`
        <div class="joint-header">
          <div>
            <span class="joint-tag">${i.name}</span>
            <span class="joint-desc">${i.desc}</span>
          </div>
          <span class="joint-val-display" id="j-val-${r}">0.0°</span>
        </div>
        <div class="joint-slider-row">
          <button class="jog-step-btn" data-joint="${r}" data-dir="-1">-</button>
          <input type="range" id="j-slider-${r}" min="${o.min}" max="${o.max}" step="0.5" value="0" />
          <button class="jog-step-btn" data-joint="${r}" data-dir="1">+</button>
        </div>
      `,t.appendChild(a);const l=a.querySelector(`#j-slider-${r}`);l.addEventListener("input",c=>{if(this.isEStopped)return;const u=parseFloat(c.target.value);this.syncAllMode?this.robots.forEach(d=>d.setJointAngleDeg(r,u)):this.robot.setJointAngleDeg(r,u),this.updateJointUI()}),this.jointSliderEls.push(l)}),t.querySelectorAll(".jog-step-btn").forEach(i=>{i.addEventListener("click",r=>{if(this.isEStopped)return;const o=parseInt(r.target.dataset.joint),a=parseInt(r.target.dataset.dir),c=Ee.radToDeg(this.robot.angles[o])+a*5;this.syncAllMode?this.robots.forEach(u=>{const d=Ee.radToDeg(u.angles[o]);u.setJointAngleDeg(o,d+a*5)}):this.robot.setJointAngleDeg(o,c),this.updateJointUI(),this.audio.playClick()})}),(n=document.getElementById("btn-reset-pose"))==null||n.addEventListener("click",()=>{this.isEStopped||(this.syncAllMode?this.kinematicsList.forEach(i=>i.moveToPreset("home",.8,()=>this.updateJointUI())):this.kinematics.moveToPreset("home",.8,()=>this.updateJointUI()),this.audio.playClick())})}updateJointUI(){this.robot.getJointAnglesDeg().forEach((d,f)=>{const p=document.getElementById(`j-val-${f}`);p&&(p.textContent=`${d.toFixed(1)}°`),this.jointSliderEls&&this.jointSliderEls[f]&&(this.jointSliderEls[f].value=d)});const e=this.kinematics.getTCPPose(),n=document.getElementById("tcp-x");n&&(n.textContent=(e.x>=0?"+":"")+e.x.toFixed(3));const i=document.getElementById("tcp-y");i&&(i.textContent=(e.y>=0?"+":"")+e.y.toFixed(3));const r=document.getElementById("tcp-z");r&&(r.textContent=(e.z>=0?"+":"")+e.z.toFixed(3));const o=document.getElementById("tcp-roll");o&&(o.textContent=`${e.roll.toFixed(1)}°`);const a=document.getElementById("tcp-pitch");a&&(a.textContent=`${e.pitch.toFixed(1)}°`);const l=document.getElementById("tcp-yaw");l&&(l.textContent=`${e.yaw.toFixed(1)}°`);const c=this.robot.getTelescope(),u=document.getElementById("tele-extension-val");u&&(u.textContent=`${Math.round(c*100)}% (${(.38+c*.28).toFixed(2)}m)`)}bindModeSwitcher(){const t=document.querySelectorAll(".mode-tab"),e=document.getElementById("current-mode-badge");t.forEach(l=>{l.addEventListener("click",()=>{if(this.isEStopped)return;t.forEach(u=>u.classList.remove("active")),l.classList.add("active");const c=l.dataset.mode;this.sequencer.setMode(c),e&&(e.textContent=c.toUpperCase()+(c==="fk"?" MANUAL":c==="ik"?" TARGET":" PENDANT")),this.visualizer.setTargetGizmoVisible(c==="ik"),this.audio.playClick()})});const n=document.getElementById("ik-x-slider"),i=document.getElementById("ik-y-slider"),r=document.getElementById("ik-z-slider"),o=document.getElementById("ik-pitch-slider"),a=()=>{if(this.isEStopped)return;const l=parseFloat((n==null?void 0:n.value)||.4),c=parseFloat((i==null?void 0:i.value)||.5),u=parseFloat((r==null?void 0:r.value)||0),d=document.getElementById("ik-x-val"),f=document.getElementById("ik-y-val"),p=document.getElementById("ik-z-val");d&&(d.textContent=`${l.toFixed(2)}m`),f&&(f.textContent=`${c.toFixed(2)}m`),p&&(p.textContent=`${u.toFixed(2)}m`),this.visualizer.setTargetPosition(l,c,u),this.kinematics.solveIK(new b(l,c,u)),this.updateJointUI()};[n,i,r,o].forEach(l=>l==null?void 0:l.addEventListener("input",a))}bindPresets(){document.querySelectorAll(".preset-btn").forEach(t=>{t.addEventListener("click",()=>{if(this.isEStopped)return;const e=t.dataset.preset;this.syncAllMode?this.kinematicsList.forEach(n=>n.moveToPreset(e,1,()=>this.updateJointUI())):this.kinematics.moveToPreset(e,1,()=>this.updateJointUI()),this.audio.playClick()})})}bindPendantControls(){var a,l,c,u;const t=document.getElementById("waypoints-list"),e=document.getElementById("btn-play-routine"),n=document.getElementById("btn-loop-routine"),i=document.getElementById("routine-speed-slider"),r=document.getElementById("routine-speed-val"),o=document.getElementById("pendant-count-badge");(a=document.getElementById("btn-record-waypoint"))==null||a.addEventListener("click",()=>{this.isEStopped||this.sequencer.recordCurrentPose()}),(l=document.getElementById("btn-clear-waypoints"))==null||l.addEventListener("click",()=>{this.sequencer.clearWaypoints(),this.audio.playClick()}),(c=document.getElementById("btn-demo-routine"))==null||c.addEventListener("click",()=>{this.sequencer.loadDemoRoutine()}),e==null||e.addEventListener("click",()=>{this.isEStopped||(this.sequencer.togglePlayRoutine(),this.audio.playClick(),this.updatePlaybackUI())}),(u=document.getElementById("btn-step-routine"))==null||u.addEventListener("click",()=>{this.isEStopped||(this.sequencer.stepForward(),this.audio.playClick())}),n==null||n.addEventListener("click",()=>{this.sequencer.isLooping=!this.sequencer.isLooping,n.classList.toggle("active",this.sequencer.isLooping),this.audio.playClick()}),i==null||i.addEventListener("input",d=>{const f=parseFloat(d.target.value);this.sequencer.playbackSpeed=f,r&&(r.textContent=`${f.toFixed(1)}x`)}),this.sequencer.onWaypointsChanged=d=>{if(o&&(o.textContent=`${d.length} POSES`),!!t){if(d.length===0){t.innerHTML=`
          <div class="empty-state">
            <span>No waypoints recorded. Jog the arm and click <strong>Record Pose</strong> or load demo.</span>
          </div>
        `;return}t.innerHTML="",d.forEach((f,p)=>{const h=document.createElement("div");h.className=`waypoint-item ${p===this.sequencer.currentStepIndex?"active-step":""}`,h.innerHTML=`
          <div class="wp-meta">
            <span class="wp-idx">#${p+1}</span>
            <span class="wp-coords">${f.label} [${f.pose.x.toFixed(2)}, ${f.pose.y.toFixed(2)}, ${f.pose.z.toFixed(2)}]</span>
          </div>
          <button class="wp-del-btn" data-del="${p}">✕</button>
        `,h.addEventListener("click",v=>{v.target.classList.contains("wp-del-btn")||(this.kinematics.interpolateTo(f.angles,1,()=>this.updateJointUI()),this.sequencer.currentStepIndex=p,this.renderWaypointActiveState())}),h.querySelector(".wp-del-btn").addEventListener("click",()=>{this.sequencer.deleteWaypoint(p)}),t.appendChild(h)})}},this.sequencer.onStepChanged=()=>{this.renderWaypointActiveState(),this.updateJointUI()}}renderWaypointActiveState(){document.querySelectorAll(".waypoint-item").forEach((e,n)=>{e.classList.toggle("active-step",n===this.sequencer.currentStepIndex)})}updatePlaybackUI(){const t=document.getElementById("btn-play-routine"),e=document.getElementById("play-text");t&&(this.sequencer.isPlaying?(t.classList.add("playing"),e&&(e.textContent="PAUSE PROGRAM")):(t.classList.remove("playing"),e&&(e.textContent="PLAY PROGRAM")))}bindToolControls(){const t=document.getElementById("tool-gripper-btn"),e=document.getElementById("tool-welder-btn"),n=document.getElementById("btn-toggle-gripper"),i=document.getElementById("gripper-state-icon"),r=document.getElementById("gripper-state-label"),o=document.getElementById("quick-grip-label");t==null||t.addEventListener("click",()=>{this.syncAllMode?this.robots.forEach(a=>a.setTool("gripper")):this.robot.setTool("gripper"),t.classList.add("active"),e==null||e.classList.remove("active"),this.audio.playClick()}),e==null||e.addEventListener("click",()=>{this.syncAllMode?this.robots.forEach(a=>a.setTool("welder")):this.robot.setTool("welder"),e.classList.add("active"),t==null||t.classList.remove("active"),this.audio.playClick()}),n==null||n.addEventListener("click",()=>{if(this.isEStopped)return;this.syncAllMode?this.grippers.forEach(l=>l.toggle()):this.gripper.toggle();const a=this.gripper.isOpen;n.classList.toggle("closed",!a),i&&(i.textContent=a?"🟢":"🟠"),r&&(r.textContent=a?"GRIPPER: OPEN [G]":"GRIPPER: CLOSED [G]"),o&&(o.textContent=a?"🗜️ Grip: OPEN":"🗜️ Grip: CLOSED")})}bindCameraButtons(){const t=document.querySelectorAll(".dock-btn[data-cam]"),e={iso:{pos:new b(1.5,1.2,1.5),look:new b(0,.45,0)},orbit:{pos:new b(1.6,1.1,1.6),look:new b(0,.45,0)},top:{pos:new b(.01,2.2,.01),look:new b(0,0,0)},front:{pos:new b(0,.75,1.6),look:new b(0,.45,0)},side:{pos:new b(1.6,.75,0),look:new b(0,.45,0)},tcp:{pos:null,look:null}};t.forEach(n=>{n.addEventListener("click",()=>{t.forEach(r=>r.classList.remove("active")),n.classList.add("active");const i=n.dataset.cam;if(this.activeCamPreset=i,i==="orbit")this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2,this.controls.target.set(0,.45,0),this.camera.position.set(1.6,1.1,1.6);else if(this.controls.autoRotate=!1,i!=="tcp"){const r=e[i];this.camera.position.copy(r.pos),this.controls.target.copy(r.look)}this.audio.playClick()})})}bindDisplayToggles(){const t=document.getElementById("btn-toggle-trail");t==null||t.addEventListener("click",()=>{const r=!t.classList.contains("active");t.classList.toggle("active",r),this.visualizer.toggleTrail(r),this.audio.playClick()});const e=document.getElementById("btn-toggle-grid");e==null||e.addEventListener("click",()=>{const r=!e.classList.contains("active");e.classList.toggle("active",r),this.workcell.toggleGrid(r),this.audio.playClick()});const n=document.getElementById("btn-toggle-shadows");n==null||n.addEventListener("click",()=>{const r=!n.classList.contains("active");n.classList.toggle("active",r),this.workcell.toggleShadows(r),this.robot.setShadows(r),this.audio.playClick()});const i=document.getElementById("btn-toggle-wireframe");i==null||i.addEventListener("click",()=>{const r=!i.classList.contains("active");i.classList.toggle("active",r),this.robot.setWireframe(r),this.audio.playClick()})}setEnvironmentTheme(t){this.currentEnvTheme=t,this.workcell&&this.workcell.setEnvironmentTheme(t);const e=t==="light_studio"||t==="cleanroom_lab";document.body.classList.toggle("theme-light",e);const n=document.getElementById("theme-btn-label");n&&(n.textContent=e?"🌙 Dark":"☀️ Light");const i=document.getElementById("env-theme-select");i&&i.value!==t&&(i.value=t)}bindThemeSelector(){const t=document.getElementById("env-theme-select"),e=document.getElementById("theme-select"),n=document.getElementById("sound-schema-select"),i=document.getElementById("current-theme-badge");t==null||t.addEventListener("change",o=>{this.setEnvironmentTheme(o.target.value),this.audio.playClick()}),e==null||e.addEventListener("change",o=>{this.robot.setTheme(o.target.value),i&&(i.textContent=o.target.value.toUpperCase()),this.audio.playClick()}),n==null||n.addEventListener("change",o=>{this.audio.setSchema(o.target.value),this.audio.playClick()});const r=document.getElementById("btn-sound");r==null||r.addEventListener("click",()=>{const o=this.audio.toggleSound();r.classList.toggle("active",o);const a=document.getElementById("sound-icon");a&&(a.textContent=o?"🔊":"🔇")})}bindEStop(){const t=document.getElementById("btn-estop"),e=document.getElementById("quick-status-chip");t==null||t.addEventListener("click",()=>{this.isEStopped=!this.isEStopped,t.classList.toggle("engaged",this.isEStopped),this.isEStopped?(this.sequencer.stopPlayback(),this.sequencer.stopAuto(),this.robot.setStatus("estop"),e&&(e.textContent="E-STOP",e.style.borderColor="var(--accent-red)",e.style.color="var(--accent-red)",e.style.background="rgba(255, 51, 102, 0.2)"),this.audio.playAlarm()):(this.robot.setStatus("ready"),e&&(e.textContent="READY",e.style.borderColor="rgba(0, 255, 157, 0.4)",e.style.color="var(--accent-mint)",e.style.background="rgba(0, 255, 157, 0.15)"),this.audio.playClick())})}initEventListeners(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.renderer.domElement.addEventListener("contextmenu",r=>{r.preventDefault()});const t=new Mu,e=new mt,n=new pn,i=new b;this.controls.mouseButtons={LEFT:_n.ROTATE,MIDDLE:_n.DOLLY,RIGHT:_n.NONE},this.renderer.domElement.addEventListener("pointerdown",r=>{if(r.button===2){if(r.preventDefault(),this.isEStopped)return;this.isRightClickDragging=!0,this.controls.enabled=!1;const o=new b;this.robot.getTCPWorldPosition(o);const a=new b;this.camera.getWorldDirection(a).negate(),n.setFromNormalAndCoplanarPoint(a,o),this.visualizer.setTargetGizmoVisible(!0),this.visualizer.setTargetPosition(o.x,o.y,o.z)}}),window.addEventListener("pointermove",r=>{if(!(!this.isRightClickDragging||this.isEStopped)&&(e.x=r.clientX/window.innerWidth*2-1,e.y=-(r.clientY/window.innerHeight)*2+1,t.setFromCamera(e,this.camera),t.ray.intersectPlane(n,i))){const o=Math.sqrt(i.x*i.x+i.z*i.z),a=1.55,l=.16;o>a?(i.x=i.x/o*a,i.z=i.z/o*a):o<l&&o>.001&&(i.x=i.x/o*l,i.z=i.z/o*l),i.y=Math.max(.005,Math.min(1.48,i.y)),this.ikTargetPos.copy(i),this.visualizer.setTargetPosition(i.x,i.y,i.z);const c=document.getElementById("ik-x-slider"),u=document.getElementById("ik-y-slider"),d=document.getElementById("ik-z-slider");if(c&&u&&d){c.value=i.x.toFixed(2),u.value=i.y.toFixed(2),d.value=i.z.toFixed(2);const f=document.getElementById("ik-x-val"),p=document.getElementById("ik-y-val"),h=document.getElementById("ik-z-val");f&&(f.textContent=`${i.x.toFixed(2)}m`),p&&(p.textContent=`${i.y.toFixed(2)}m`),h&&(h.textContent=`${i.z.toFixed(2)}m`)}}}),window.addEventListener("pointerup",r=>{(r.button===2||this.isRightClickDragging)&&(this.isRightClickDragging=!1,this.controls.enabled=!0,this.sequencer.currentMode!=="ik"&&this.visualizer.setTargetGizmoVisible(!1))}),window.addEventListener("keydown",r=>{var o,a,l,c,u,d,f,p,h,v;if(!(r.target.tagName==="INPUT"||r.target.tagName==="SELECT")){if(r.key==="1"&&this.setActiveArm(0),r.key==="2"&&this.setActiveArm(1),r.key==="3"&&this.setActiveArm(2),r.key==="4"&&this.setActiveArm(3),(r.key==="0"||r.key==="5")&&this.toggleSyncAll(),r.key.toLowerCase()==="f"&&((o=document.getElementById("tab-fk"))==null||o.click()),r.key.toLowerCase()==="i"&&((a=document.getElementById("tab-ik"))==null||a.click()),r.key.toLowerCase()==="p"&&((l=document.getElementById("tab-teach"))==null||l.click()),r.key.toLowerCase()==="o"&&(this.controls.autoRotate=!this.controls.autoRotate,this.controls.autoRotateSpeed=1,this.audio.playClick()),r.key.toLowerCase()==="b"){this.ballInterceptor.toggle();const g=document.getElementById("ball-ai-status-badge");if(g){const m=this.ballInterceptor.enabled;g.textContent=m?"AUTO ACTIVE":"MANUAL",g.style.color=m?"var(--accent-mint)":"var(--text-muted)"}this.audio.playClick()}if(r.key.toLowerCase()==="d"&&(this.ballInterceptor.spawnBall(!0),this.audio.playPuff()),r.key.toLowerCase()==="t"&&((c=document.getElementById("btn-step-telescope"))==null||c.click()),r.key.toLowerCase()==="e"&&((u=document.getElementById("btn-toggle-telescope"))==null||u.click()),r.key.toLowerCase()==="m"){const g=this.currentEnvTheme==="light_studio"||this.currentEnvTheme==="cleanroom_lab"?"dark_cyber":"light_studio";this.setEnvironmentTheme(g),this.audio.playClick()}r.key.toLowerCase()==="g"&&((d=document.getElementById("btn-toggle-gripper"))==null||d.click()),r.key.toLowerCase()==="h"&&((f=document.getElementById("btn-reset-pose"))==null||f.click()),r.key.toLowerCase()==="s"&&((p=document.getElementById("btn-open-settings"))==null||p.click()),r.key===" "&&(r.preventDefault(),(h=document.getElementById("btn-play-routine"))==null||h.click()),r.key==="Escape"&&((v=document.getElementById("btn-estop"))==null||v.click())}})}animate(){requestAnimationFrame(()=>this.animate());const t=Math.min(this.clock.getDelta(),.05);if(!this.isEStopped){if(!this.isRightClickDragging){this.ballInterceptor.update(t);const a=this.ballInterceptor.getStats(),l=document.getElementById("score-burst-count"),c=document.getElementById("drawer-score-val"),u=document.getElementById("drawer-burst-val");if(l&&(l.textContent=a.pushCount??a.burstCount),c&&(c.textContent=a.score),u&&(u.textContent=a.pushCount??a.burstCount),a.territoryCounts)for(let d=0;d<4;d++){const f=document.getElementById(`team-score-${d}`);if(f&&(f.textContent=`${a.territoryCounts[d]} HELD`),this.robots[d]&&typeof this.robots[d].updateDisplay=="function"){const p=a.territoryCounts[d]||0,h=a.foreignCounts&&a.foreignCounts[d]||0,v=a.victoryStates?a.victoryStates[d]:!1;this.robots[d].updateDisplay(p,h,v)}}a.distributions&&this.workcell.updateArmPieHUDs(a.distributions,null,a.victoryStates)}let e=!1;if(this.robots.forEach(a=>{a.updateServoMotors(t)&&(e=!0)}),e&&this.updateJointUI(),this.isRightClickDragging||this.ikCurrentPos&&this.ikCurrentPos.distanceTo(this.ikTargetPos)>.001||this.ikVelocity.lengthSq()>1e-4){const c=9.090909090909092,u=c*t,d=1/(1+u+.48*u*u+.235*u*u*u),f=new b().subVectors(this.ikCurrentPos,this.ikTargetPos),p=this.ikTargetPos.clone(),h=1.1*.22;f.clampLength(0,h);const v=this.ikCurrentPos.clone().sub(f),g=new b().addVectors(this.ikVelocity,f.clone().multiplyScalar(c)).multiplyScalar(t);this.ikVelocity.sub(g.clone().multiplyScalar(c)).multiplyScalar(d);const m=v.clone().add(f.add(g).multiplyScalar(d));p.clone().sub(this.ikCurrentPos).dot(m.clone().sub(p))>0&&(m.copy(p),this.ikVelocity.set(0,0,0)),this.ikCurrentPos.copy(m),this.syncAllMode?this.kinematicsList.forEach(R=>R.solveIK(this.ikCurrentPos,24,.003,!1)):this.kinematics.solveIK(this.ikCurrentPos,24,.003,!1)}let n=!1;this.kinematicsList.forEach(a=>{a.update(t)&&(n=!0)}),n&&(this.updateJointUI(),this.robot.getTCPWorldPosition(this.ikCurrentPos),this.ikTargetPos.copy(this.ikCurrentPos),this.ikVelocity.set(0,0,0)),this.grippers.forEach(a=>a.update(t)),this.workcell.update(t);const i=new b;this.robot.getTCPWorldPosition(i),this.visualizer.addPoint(i),this.telemetries.forEach(a=>a.update(t));const r=[0,0,0,0,0,0];let o=0;if(this.robots.forEach((a,l)=>{const c=this.telemetries[l];for(let d=0;d<6;d++){const f=Math.max(c.jointVelocities[d]||0,Math.abs(a.jointVelocities[d]||0));f>r[d]&&(r[d]=f)}const u=Math.abs(a.telescopeVelocity||0);u>o&&(o=u)}),this.audio.updateJointMotors(r,o,t),this.activeCamPreset==="tcp"){const a=new We;this.robot.getTCPWorldQuaternion(a);const l=new b(0,.25,.4).applyQuaternion(a);this.camera.position.copy(i).add(l),this.controls.target.copy(i)}}this.controls.update(),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new L0});
