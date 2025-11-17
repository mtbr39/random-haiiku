(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var ko={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Rl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},xa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,I=(o&3)<<4|c>>4;let A=(c&15)<<2|d>>6,P=d&63;h||(P=64,a||(A=64)),r.push(e[p],e[I],e[A],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ma(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Rl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const I=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||I==null)throw new Pl;const A=o<<2|c>>4;if(r.push(A),d!==64){const P=c<<4&240|d>>2;if(r.push(P),I!==64){const D=d<<6&192|I;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sl=function(n){const t=Ma(n);return xa.encodeByteArray(t,!0)},hr=function(n){return Sl(n).replace(/\./g,"")},bl=function(n){try{return xa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=()=>Cl().__FIREBASE_DEFAULTS__,Dl=()=>{if(typeof process>"u"||typeof ko>"u")return;const n=ko.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&bl(n[1]);return t&&JSON.parse(t)},Ws=()=>{try{return Vl()||Dl()||kl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nl=n=>{var t,e;return(e=(t=Ws())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ol=n=>{const t=Nl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},La=()=>{var n;return(n=Ws())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[hr(JSON.stringify(e)),hr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fl(){var n;const t=(n=Ws())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ul(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bl(){return!Fl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Fa(){try{return typeof indexedDB=="object"}catch{return!1}}function Ua(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function jl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="FirebaseError";class ne extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=ql,Object.setPrototypeOf(this,ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?$l(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ne(s,c,r)}}function $l(n,t){return n.replace(zl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const zl=/\{\$([^}]+)}/g;function De(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(No(o)&&No(a)){if(!De(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function No(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=1e3,Wl=2,Gl=4*60*60*1e3,Hl=.5;function Oo(n,t=Kl,e=Wl){const r=t*Math.pow(e,n),s=Math.round(Hl*r*(Math.random()-.5)*2);return Math.min(Gl,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n){return n&&n._delegate?n._delegate:n}class Bt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ml;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xl(t))try{this.getOrInitializeService({instanceIdentifier:ue})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ue){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ue){return this.instances.has(t)}getOptions(t=ue){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ue){return this.component?this.component.multipleInstances?t:ue:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yl(n){return n===ue?void 0:n}function Xl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ql(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Zl={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},th=j.INFO,eh={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},nh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=eh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Gs{constructor(t){this.name=t,this._logLevel=th,this._logHandler=nh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Zl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const rh=(n,t)=>t.some(e=>n instanceof e);let Mo,xo;function sh(){return Mo||(Mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ih(){return xo||(xo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ba=new WeakMap,As=new WeakMap,ja=new WeakMap,fs=new WeakMap,Hs=new WeakMap;function oh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Qt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Ba.set(e,n)}).catch(()=>{}),Hs.set(t,n),t}function ah(n){if(As.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});As.set(n,t)}let Rs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return As.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ja.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function uh(n){Rs=n(Rs)}function ch(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ms(this),t,...e);return ja.set(r,t.sort?t.sort():[t]),Qt(r)}:ih().includes(n)?function(...t){return n.apply(ms(this),t),Qt(Ba.get(this))}:function(...t){return Qt(n.apply(ms(this),t))}}function lh(n){return typeof n=="function"?ch(n):(n instanceof IDBTransaction&&ah(n),rh(n,sh())?new Proxy(n,Rs):n)}function Qt(n){if(n instanceof IDBRequest)return oh(n);if(fs.has(n))return fs.get(n);const t=lh(n);return t!==n&&(fs.set(n,t),Hs.set(t,n)),t}const ms=n=>Hs.get(n);function qa(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=Qt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Qt(a.result),h.oldVersion,h.newVersion,Qt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const hh=["get","getKey","getAll","getAllKeys","count"],dh=["put","add","delete","clear"],ps=new Map;function Lo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ps.get(t))return ps.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=dh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hh.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return ps.set(t,o),o}uh(n=>({...n,get:(t,e,r)=>Lo(t,e)||n.get(t,e,r),has:(t,e)=>!!Lo(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(mh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function mh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ps="@firebase/app",Fo="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Gs("@firebase/app"),ph="@firebase/app-compat",gh="@firebase/analytics-compat",_h="@firebase/analytics",yh="@firebase/app-check-compat",Eh="@firebase/app-check",Th="@firebase/auth",vh="@firebase/auth-compat",Ih="@firebase/database",wh="@firebase/data-connect",Ah="@firebase/database-compat",Rh="@firebase/functions",Ph="@firebase/functions-compat",Sh="@firebase/installations",bh="@firebase/installations-compat",Ch="@firebase/messaging",Vh="@firebase/messaging-compat",Dh="@firebase/performance",kh="@firebase/performance-compat",Nh="@firebase/remote-config",Oh="@firebase/remote-config-compat",Mh="@firebase/storage",xh="@firebase/storage-compat",Lh="@firebase/firestore",Fh="@firebase/vertexai-preview",Uh="@firebase/firestore-compat",Bh="firebase",jh="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="[DEFAULT]",qh={[Ps]:"fire-core",[ph]:"fire-core-compat",[_h]:"fire-analytics",[gh]:"fire-analytics-compat",[Eh]:"fire-app-check",[yh]:"fire-app-check-compat",[Th]:"fire-auth",[vh]:"fire-auth-compat",[Ih]:"fire-rtdb",[wh]:"fire-data-connect",[Ah]:"fire-rtdb-compat",[Rh]:"fire-fn",[Ph]:"fire-fn-compat",[Sh]:"fire-iid",[bh]:"fire-iid-compat",[Ch]:"fire-fcm",[Vh]:"fire-fcm-compat",[Dh]:"fire-perf",[kh]:"fire-perf-compat",[Nh]:"fire-rc",[Oh]:"fire-rc-compat",[Mh]:"fire-gcs",[xh]:"fire-gcs-compat",[Lh]:"fire-fst",[Uh]:"fire-fst-compat",[Fh]:"fire-vertex","fire-js":"fire-js",[Bh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Map,$h=new Map,bs=new Map;function Uo(n,t){try{n.container.addComponent(t)}catch(e){jt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Jt(n){const t=n.name;if(bs.has(t))return jt.debug(`There were multiple attempts to register component ${t}.`),!1;bs.set(t,n);for(const e of dr.values())Uo(e,n);for(const e of $h.values())Uo(e,n);return!0}function Sn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new Ar("app","Firebase",zh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=jh;function $a(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ss,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(e||(e=La()),!e)throw Yt.create("no-options");const o=dr.get(s);if(o){if(De(e,o.options)&&De(r,o.config))return o;throw Yt.create("duplicate-app",{appName:s})}const a=new Jl(s);for(const h of bs.values())a.addComponent(h);const c=new Kh(e,r,a);return dr.set(s,c),c}function za(n=Ss){const t=dr.get(n);if(!t&&n===Ss&&La())return $a();if(!t)throw Yt.create("no-app",{appName:n});return t}function bt(n,t,e){var r;let s=(r=qh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jt.warn(c.join(" "));return}Jt(new Bt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="firebase-heartbeat-database",Hh=1,Tn="firebase-heartbeat-store";let gs=null;function Ka(){return gs||(gs=qa(Gh,Hh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Tn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),gs}async function Qh(n){try{const e=(await Ka()).transaction(Tn),r=await e.objectStore(Tn).get(Wa(n));return await e.done,r}catch(t){if(t instanceof ne)jt.warn(t.message);else{const e=Yt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jt.warn(e.message)}}}async function Bo(n,t){try{const r=(await Ka()).transaction(Tn,"readwrite");await r.objectStore(Tn).put(t,Wa(n)),await r.done}catch(e){if(e instanceof ne)jt.warn(e.message);else{const r=Yt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});jt.warn(r.message)}}}function Wa(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=1024,Xh=30*24*60*60*1e3;class Jh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new td(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=jo();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Xh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jo(),{heartbeatsToSend:r,unsentEntries:s}=Zh(this._heartbeatsCache.heartbeats),o=hr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return jt.warn(e),""}}}function jo(){return new Date().toISOString().substring(0,10)}function Zh(n,t=Yh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),qo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),qo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class td{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fa()?Ua().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Qh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function qo(n){return hr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n){Jt(new Bt("platform-logger",t=>new fh(t),"PRIVATE")),Jt(new Bt("heartbeat",t=>new Jh(t),"PRIVATE")),bt(Ps,Fo,n),bt(Ps,Fo,"esm2017"),bt("fire-js","")}ed("");var nd="firebase",rd="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(nd,rd,"app");const Ga="@firebase/installations",Qs="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=1e4,Qa=`w:${Qs}`,Ya="FIS_v2",sd="https://firebaseinstallations.googleapis.com/v1",id=60*60*1e3,od="installations",ad="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fe=new Ar(od,ad,ud);function Xa(n){return n instanceof ne&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja({projectId:n}){return`${sd}/projects/${n}/installations`}function Za(n){return{token:n.token,requestStatus:2,expiresIn:ld(n.expiresIn),creationTime:Date.now()}}async function tu(n,t){const r=(await t.json()).error;return fe.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function eu({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function cd(n,{refreshToken:t}){const e=eu(n);return e.append("Authorization",hd(t)),e}async function nu(n){const t=await n();return t.status>=500&&t.status<600?n():t}function ld(n){return Number(n.replace("s","000"))}function hd(n){return`${Ya} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dd({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Ja(n),s=eu(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:Ya,appId:n.appId,sdkVersion:Qa},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await nu(()=>fetch(r,c));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:Za(d.authToken)}}else throw await tu("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=/^[cdef][\w-]{21}$/,Cs="";function pd(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=gd(n);return md.test(e)?e:Cs}catch{return Cs}}function gd(n){return fd(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=new Map;function iu(n,t){const e=Rr(n);ou(e,t),_d(e,t)}function ou(n,t){const e=su.get(n);if(e)for(const r of e)r(t)}function _d(n,t){const e=yd();e&&e.postMessage({key:n,fid:t}),Ed()}let ce=null;function yd(){return!ce&&"BroadcastChannel"in self&&(ce=new BroadcastChannel("[Firebase] FID Change"),ce.onmessage=n=>{ou(n.data.key,n.data.fid)}),ce}function Ed(){su.size===0&&ce&&(ce.close(),ce=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="firebase-installations-database",vd=1,me="firebase-installations-store";let _s=null;function Ys(){return _s||(_s=qa(Td,vd,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(me)}}})),_s}async function fr(n,t){const e=Rr(n),s=(await Ys()).transaction(me,"readwrite"),o=s.objectStore(me),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&iu(n,t.fid),t}async function au(n){const t=Rr(n),r=(await Ys()).transaction(me,"readwrite");await r.objectStore(me).delete(t),await r.done}async function Pr(n,t){const e=Rr(n),s=(await Ys()).transaction(me,"readwrite"),o=s.objectStore(me),a=await o.get(e),c=t(a);return c===void 0?await o.delete(e):await o.put(c,e),await s.done,c&&(!a||a.fid!==c.fid)&&iu(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(n){let t;const e=await Pr(n.appConfig,r=>{const s=Id(r),o=wd(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===Cs?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Id(n){const t=n||{fid:pd(),registrationStatus:0};return uu(t)}function wd(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(fe.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ad(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Rd(n)}:{installationEntry:t}}async function Ad(n,t){try{const e=await dd(n,t);return fr(n.appConfig,e)}catch(e){throw Xa(e)&&e.customData.serverCode===409?await au(n.appConfig):await fr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Rd(n){let t=await $o(n.appConfig);for(;t.registrationStatus===1;)await ru(100),t=await $o(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Xs(n);return r||e}return t}function $o(n){return Pr(n,t=>{if(!t)throw fe.create("installation-not-found");return uu(t)})}function uu(n){return Pd(n)?{fid:n.fid,registrationStatus:0}:n}function Pd(n){return n.registrationStatus===1&&n.registrationTime+Ha<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sd({appConfig:n,heartbeatServiceProvider:t},e){const r=bd(n,e),s=cd(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Qa,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await nu(()=>fetch(r,c));if(h.ok){const d=await h.json();return Za(d)}else throw await tu("Generate Auth Token",h)}function bd(n,{fid:t}){return`${Ja(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(n,t=!1){let e;const r=await Pr(n.appConfig,o=>{if(!cu(o))throw fe.create("not-registered");const a=o.authToken;if(!t&&Dd(a))return o;if(a.requestStatus===1)return e=Cd(n,t),o;{if(!navigator.onLine)throw fe.create("app-offline");const c=Nd(o);return e=Vd(n,c),c}});return e?await e:r.authToken}async function Cd(n,t){let e=await zo(n.appConfig);for(;e.authToken.requestStatus===1;)await ru(100),e=await zo(n.appConfig);const r=e.authToken;return r.requestStatus===0?Js(n,t):r}function zo(n){return Pr(n,t=>{if(!cu(t))throw fe.create("not-registered");const e=t.authToken;return Od(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Vd(n,t){try{const e=await Sd(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await fr(n.appConfig,r),e}catch(e){if(Xa(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await au(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await fr(n.appConfig,r)}throw e}}function cu(n){return n!==void 0&&n.registrationStatus===2}function Dd(n){return n.requestStatus===2&&!kd(n)}function kd(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+id}function Nd(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Od(n){return n.requestStatus===1&&n.requestTime+Ha<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Md(n){const t=n,{installationEntry:e,registrationPromise:r}=await Xs(t);return r?r.catch(console.error):Js(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xd(n,t=!1){const e=n;return await Ld(e),(await Js(e,t)).token}async function Ld(n){const{registrationPromise:t}=await Xs(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n){if(!n||!n.options)throw ys("App Configuration");if(!n.name)throw ys("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw ys(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ys(n){return fe.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="installations",Ud="installations-internal",Bd=n=>{const t=n.getProvider("app").getImmediate(),e=Fd(t),r=Sn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jd=n=>{const t=n.getProvider("app").getImmediate(),e=Sn(t,lu).getImmediate();return{getId:()=>Md(e),getToken:s=>xd(e,s)}};function qd(){Jt(new Bt(lu,Bd,"PUBLIC")),Jt(new Bt(Ud,jd,"PRIVATE"))}qd();bt(Ga,Qs);bt(Ga,Qs,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="analytics",$d="firebase_id",zd="origin",Kd=60*1e3,Wd="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zs="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Gs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Rt=new Ar("analytics","Analytics",Gd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n){if(!n.startsWith(Zs)){const t=Rt.create("invalid-gtag-resource",{gtagURL:n});return vt.warn(t.message),""}return n}function hu(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Qd(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Yd(n,t){const e=Qd("firebase-js-sdk-policy",{createScriptURL:Hd}),r=document.createElement("script"),s=`${Zs}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Xd(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Jd(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await hu(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(c){vt.error(c)}n("config",s,o)}async function Zd(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await hu(e);for(const h of a){const d=c.find(I=>I.measurementId===h),p=d&&t[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){vt.error(o)}}function tf(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[c,h]=a;await Zd(n,t,e,c,h)}else if(o==="config"){const[c,h]=a;await Jd(n,t,e,r,c,h)}else if(o==="consent"){const[c,h]=a;n("consent",c,h)}else if(o==="get"){const[c,h,d]=a;n("get",c,h,d)}else if(o==="set"){const[c]=a;n("set",c)}else n(o,...a)}catch(c){vt.error(c)}}return s}function ef(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=tf(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function nf(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Zs)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=30,sf=1e3;class of{constructor(t={},e=sf){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const du=new of;function af(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function uf(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:af(r)},o=Wd.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let c="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(c=h.error.message)}catch{}throw Rt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function cf(n,t=du,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw Rt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Rt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new df;return setTimeout(async()=>{c.abort()},Kd),fu({appId:r,apiKey:s,measurementId:o},a,c,t)}async function fu(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=du){var o;const{appId:a,measurementId:c}=n;try{await lf(r,t)}catch(h){if(c)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw h}try{const h=await uf(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!hf(d)){if(s.deleteThrottleMetadata(a),c)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw h}const p=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Oo(e,s.intervalMillis,rf):Oo(e,s.intervalMillis),I={throttleEndTimeMillis:Date.now()+p,backoffCount:e+1};return s.setThrottleMetadata(a,I),vt.debug(`Calling attemptFetch again in ${p} millis`),fu(n,I,r,s)}}function lf(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(Rt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function hf(n){if(!(n instanceof ne)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class df{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function ff(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(){if(Fa())try{await Ua()}catch(n){return vt.warn(Rt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return vt.warn(Rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function pf(n,t,e,r,s,o,a){var c;const h=cf(n);h.then(P=>{e[P.measurementId]=P.appId,n.options.measurementId&&P.measurementId!==n.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>vt.error(P)),t.push(h);const d=mf().then(P=>{if(P)return r.getId()}),[p,I]=await Promise.all([h,d]);nf(o)||Yd(o,p.measurementId),s("js",new Date);const A=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return A[zd]="firebase",A.update=!0,I!=null&&(A[$d]=I),s("config",p.measurementId,A),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t){this.app=t}_delete(){return delete pn[this.app.options.appId],Promise.resolve()}}let pn={},Ko=[];const Wo={};let Es="dataLayer",_f="gtag",Go,mu,Ho=!1;function yf(){const n=[];if(Ul()&&n.push("This is a browser extension environment."),jl()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=Rt.create("invalid-analytics-context",{errorInfo:t});vt.warn(e.message)}}function Ef(n,t,e){yf();const r=n.options.appId;if(!r)throw Rt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Rt.create("no-api-key");if(pn[r]!=null)throw Rt.create("already-exists",{id:r});if(!Ho){Xd(Es);const{wrappedGtag:o,gtagCore:a}=ef(pn,Ko,Wo,Es,_f);mu=o,Go=a,Ho=!0}return pn[r]=pf(n,Ko,Wo,t,Go,Es,e),new gf(n)}function Tf(n=za()){n=Nt(n);const t=Sn(n,mr);return t.isInitialized()?t.getImmediate():vf(n)}function vf(n,t={}){const e=Sn(n,mr);if(e.isInitialized()){const s=e.getImmediate();if(De(t,e.getOptions()))return s;throw Rt.create("already-initialized")}return e.initialize({options:t})}function If(n,t,e,r){n=Nt(n),ff(mu,pn[n.app.options.appId],t,e,r).catch(s=>vt.error(s))}const Qo="@firebase/analytics",Yo="0.10.8";function wf(){Jt(new Bt(mr,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Ef(r,s,e)},"PUBLIC")),Jt(new Bt("analytics-internal",n,"PRIVATE")),bt(Qo,Yo),bt(Qo,Yo,"esm2017");function n(t){try{const e=t.getProvider(mr).getImmediate();return{logEvent:(r,s,o)=>If(e,r,s,o)}}catch(e){throw Rt.create("interop-component-reg-failed",{reason:e})}}}wf();var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var de,pu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,w){for(var g=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)g[Lt-2]=arguments[Lt];return m.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var w=T.g[3],g=m+(w^_&(E^w))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[2]+606105819&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[6]+2821735955&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[10]+4294925233&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[14]+2792965006&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^w&(_^E))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[11]+643717713&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[15]+3634488961&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[3]+4107603335&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[7]+1735328473&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^w)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[11]+1839030562&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[7]+4139469664&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[3]+3572445317&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[15]+530742520&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~w))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[14]+2878612391&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[10]+4293915773&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[6]+2734768916&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[2]+718787259&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,E=this.h,w=0;w<m;){if(E==0)for(;w<=_;)s(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<m;)if(y[E++]=T.charCodeAt(w++),E==this.blockSize){s(this,y),E=0;break}}else for(;w<m;)if(y[E++]=T[w++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function a(T,m){this.h=m;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var w=T[E]|0;y&&w==m||(_[E]=w,y=!1)}this.g=_}var c={};function h(T){return-128<=T&&128>T?o(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return I;if(0>T)return V(d(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return V(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=I,E=0;E<T.length;E+=8){var w=Math.min(8,T.length-E),g=parseInt(T.substring(E,E+w),m);8>w?(w=d(Math.pow(m,w)),y=y.j(w).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var I=h(0),A=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-V(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(N(this))return"-"+V(this).toString(T);for(var m=d(Math.pow(T,6)),_=this,y="";;){var E=rt(_,m).g;_=z(_,E.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,D(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=z(this,T),N(T)?-1:D(T)?0:1};function V(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new a(_,~T.h).add(A)}n.abs=function(){return N(this)?V(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=m;E++){var w=y+(this.i(E)&65535)+(T.i(E)&65535),g=(w>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=g>>>16,w&=65535,g&=65535,_[E]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(T,m){return T.add(V(m))}n.j=function(T){if(D(this)||D(T))return I;if(N(this))return N(T)?V(this).j(V(T)):V(V(this).j(T));if(N(T))return V(this.j(V(T)));if(0>this.l(P)&&0>T.l(P))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var w=this.i(y)>>>16,g=this.i(y)&65535,Lt=T.i(E)>>>16,We=T.i(E)&65535;_[2*y+2*E]+=g*We,W(_,2*y+2*E),_[2*y+2*E+1]+=w*We,W(_,2*y+2*E+1),_[2*y+2*E+1]+=g*Lt,W(_,2*y+2*E+1),_[2*y+2*E+2]+=w*Lt,W(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function W(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function H(T,m){this.g=T,this.h=m}function rt(T,m){if(D(m))throw Error("division by zero");if(D(T))return new H(I,I);if(N(T))return m=rt(V(T),m),new H(V(m.g),V(m.h));if(N(m))return m=rt(T,V(m)),new H(V(m.g),m.h);if(30<T.g.length){if(N(T)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=m;0>=y.l(T);)_=xt(_),y=xt(y);var E=it(_,1),w=it(y,1);for(y=it(y,2),_=it(_,2);!D(y);){var g=w.add(y);0>=g.l(T)&&(E=E.add(_),w=g),y=it(y,1),_=it(_,1)}return m=z(T,E.j(m)),new H(E,m)}for(E=I;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(_),g=w.j(m);N(g)||0<g.l(T);)_-=y,w=d(_),g=w.j(m);D(w)&&(w=A),E=E.add(w),T=z(T,g)}return new H(E,T)}n.A=function(T){return rt(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new a(_,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new a(_,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new a(_,this.h^T.h)};function xt(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(_,T.h)}function it(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,E=[],w=0;w<y;w++)E[w]=0<m?T.i(w+_)>>>m|T.i(w+_+1)<<32-m:T.i(w+_);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,de=a}).apply(typeof Xo<"u"?Xo:typeof self<"u"?self:typeof window<"u"?window:{});var er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gu,hn,_u,ir,Vs,yu,Eu,Tu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof er=="object"&&er];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var v=i[f];if(!(v in l))break t;l=l[v]}i=i[i.length-1],f=l[i],u=u(f),u!=f&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,f=!1,v={next:function(){if(!f&&l<i.length){var R=l++;return{value:u(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function d(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function p(i,u,l){return i.call.apply(i.bind,arguments)}function I(i,u,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,f),i.apply(u,v)}}return function(){return i.apply(u,arguments)}}function A(i,u,l){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:I,A.apply(null,arguments)}function P(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function D(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,v,R){for(var C=Array(arguments.length-2),G=2;G<arguments.length;G++)C[G-2]=arguments[G];return u.prototype[v].apply(f,C)}}function N(i){const u=i.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=i[f];return l}return[]}function V(i,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const v=i.length||0,R=f.length||0;i.length=v+R;for(let C=0;C<R;C++)i[v+C]=f[C]}else i.push(f)}}class z{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function W(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function rt(i){return rt[" "](i),i}rt[" "]=function(){};var xt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function it(i,u,l){for(const f in i)u.call(l,i[f],f,i)}function T(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function m(i){const u={};for(const l in i)u[l]=i[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let l,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(l in f)i[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function E(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function w(i){c.setTimeout(()=>{throw i},0)}function g(){var i=$r;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Lt{constructor(){this.h=this.g=null}add(u,l){const f=We.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var We=new z(()=>new zc,i=>i.reset());class zc{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,He=!1,$r=new Lt,Di=()=>{const i=c.Promise.resolve(void 0);Ge=()=>{i.then(Kc)}};var Kc=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){w(l)}var u=We;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}He=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Wc=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i}();function Qe(i,u){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(xt){t:{try{rt(u.nodeName);var v=!0;break t}catch{}v=!1}v||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Gc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Qe.aa.h.call(this)}}D(Qe,ht);var Gc={2:"touch",3:"pen",4:"mouse"};Qe.prototype.h=function(){Qe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var xn="closure_listenable_"+(1e6*Math.random()|0),Hc=0;function Qc(i,u,l,f,v){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=v,this.key=++Hc,this.da=this.fa=!1}function Ln(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Fn(i){this.src=i,this.g={},this.h=0}Fn.prototype.add=function(i,u,l,f,v){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var C=Kr(i,u,f,v);return-1<C?(u=i[C],l||(u.fa=!1)):(u=new Qc(u,this.src,R,!!f,v),u.fa=l,i.push(u)),u};function zr(i,u){var l=u.type;if(l in i.g){var f=i.g[l],v=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=v)&&Array.prototype.splice.call(f,v,1),R&&(Ln(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Kr(i,u,l,f){for(var v=0;v<i.length;++v){var R=i[v];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==f)return v}return-1}var Wr="closure_lm_"+(1e6*Math.random()|0),Gr={};function ki(i,u,l,f,v){if(Array.isArray(u)){for(var R=0;R<u.length;R++)ki(i,u[R],l,f,v);return null}return l=Mi(l),i&&i[xn]?i.K(u,l,d(f)?!!f.capture:!1,v):Yc(i,u,l,!1,f,v)}function Yc(i,u,l,f,v,R){if(!u)throw Error("Invalid event type");var C=d(v)?!!v.capture:!!v,G=Qr(i);if(G||(i[Wr]=G=new Fn(i)),l=G.add(u,l,f,C,R),l.proxy)return l;if(f=Xc(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)Wc||(v=C),v===void 0&&(v=!1),i.addEventListener(u.toString(),f,v);else if(i.attachEvent)i.attachEvent(Oi(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Xc(){function i(l){return u.call(i.src,i.listener,l)}const u=Jc;return i}function Ni(i,u,l,f,v){if(Array.isArray(u))for(var R=0;R<u.length;R++)Ni(i,u[R],l,f,v);else f=d(f)?!!f.capture:!!f,l=Mi(l),i&&i[xn]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],l=Kr(R,l,f,v),-1<l&&(Ln(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=Qr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Kr(u,l,f,v)),(l=-1<i?u[i]:null)&&Hr(l))}function Hr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[xn])zr(u.i,i);else{var l=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(l,f,i.capture):u.detachEvent?u.detachEvent(Oi(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=Qr(u))?(zr(l,i),l.h==0&&(l.src=null,u[Wr]=null)):Ln(i)}}}function Oi(i){return i in Gr?Gr[i]:Gr[i]="on"+i}function Jc(i,u){if(i.da)i=!0;else{u=new Qe(u,this);var l=i.listener,f=i.ha||i.src;i.fa&&Hr(i),i=l.call(f,u)}return i}function Qr(i){return i=i[Wr],i instanceof Fn?i:null}var Yr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mi(i){return typeof i=="function"?i:(i[Yr]||(i[Yr]=function(u){return i.handleEvent(u)}),i[Yr])}function dt(){zt.call(this),this.i=new Fn(this),this.M=this,this.F=null}D(dt,zt),dt.prototype[xn]=!0,dt.prototype.removeEventListener=function(i,u,l,f){Ni(this,i,u,l,f)};function yt(i,u){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new ht(u,i);else if(u instanceof ht)u.target=u.target||i;else{var v=u;u=new ht(f,i),y(u,v)}if(v=!0,l)for(var R=l.length-1;0<=R;R--){var C=u.g=l[R];v=Un(C,f,!0,u)&&v}if(C=u.g=i,v=Un(C,f,!0,u)&&v,v=Un(C,f,!1,u)&&v,l)for(R=0;R<l.length;R++)C=u.g=l[R],v=Un(C,f,!1,u)&&v}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],f=0;f<l.length;f++)Ln(l[f]);delete i.g[u],i.h--}}this.F=null},dt.prototype.K=function(i,u,l,f){return this.i.add(String(i),u,!1,l,f)},dt.prototype.L=function(i,u,l,f){return this.i.add(String(i),u,!0,l,f)};function Un(i,u,l,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var v=!0,R=0;R<u.length;++R){var C=u[R];if(C&&!C.da&&C.capture==l){var G=C.listener,ot=C.ha||C.src;C.fa&&zr(i.i,C),v=G.call(ot,f)!==!1&&v}}return v&&!f.defaultPrevented}function xi(i,u,l){if(typeof i=="function")l&&(i=A(i,l));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function Li(i){i.g=xi(()=>{i.g=null,i.i&&(i.i=!1,Li(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Zc extends zt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Li(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(i){zt.call(this),this.h=i,this.g={}}D(Ye,zt);var Fi=[];function Ui(i){it(i.g,function(u,l){this.g.hasOwnProperty(l)&&Hr(u)},i),i.g={}}Ye.prototype.N=function(){Ye.aa.N.call(this),Ui(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xr=c.JSON.stringify,tl=c.JSON.parse,el=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Jr(){}Jr.prototype.h=null;function Bi(i){return i.h||(i.h=i.i())}function ji(){}var Xe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zr(){ht.call(this,"d")}D(Zr,ht);function ts(){ht.call(this,"c")}D(ts,ht);var se={},qi=null;function Bn(){return qi=qi||new dt}se.La="serverreachability";function $i(i){ht.call(this,se.La,i)}D($i,ht);function Je(i){const u=Bn();yt(u,new $i(u))}se.STAT_EVENT="statevent";function zi(i,u){ht.call(this,se.STAT_EVENT,i),this.stat=u}D(zi,ht);function Et(i){const u=Bn();yt(u,new zi(u,i))}se.Ma="timingevent";function Ki(i,u){ht.call(this,se.Ma,i),this.size=u}D(Ki,ht);function Ze(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function tn(){this.g=!0}tn.prototype.xa=function(){this.g=!1};function nl(i,u,l,f,v,R){i.info(function(){if(i.g)if(R)for(var C="",G=R.split("&"),ot=0;ot<G.length;ot++){var q=G[ot].split("=");if(1<q.length){var ft=q[0];q=q[1];var mt=ft.split("_");C=2<=mt.length&&mt[1]=="type"?C+(ft+"="+q+"&"):C+(ft+"=redacted&")}}else C=null;else C=R;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+u+`
`+l+`
`+C})}function rl(i,u,l,f,v,R,C){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+u+`
`+l+`
`+R+" "+C})}function Ie(i,u,l,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+il(i,l)+(f?" "+f:"")})}function sl(i,u){i.info(function(){return"TIMEOUT: "+u})}tn.prototype.info=function(){};function il(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var v=f[1];if(Array.isArray(v)&&!(1>v.length)){var R=v[0];if(R!="noop"&&R!="stop"&&R!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return Xr(l)}catch{return u}}var jn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},es;function qn(){}D(qn,Jr),qn.prototype.g=function(){return new XMLHttpRequest},qn.prototype.i=function(){return{}},es=new qn;function Kt(i,u,l,f){this.j=i,this.i=u,this.l=l,this.R=f||1,this.U=new Ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gi}function Gi(){this.i=null,this.g="",this.h=!1}var Hi={},ns={};function rs(i,u,l){i.L=1,i.v=Wn(Ft(u)),i.m=l,i.P=!0,Qi(i,null)}function Qi(i,u){i.F=Date.now(),$n(i),i.A=Ft(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),co(l.i,"t",f),i.C=0,l=i.j.J,i.h=new Gi,i.g=bo(i.j,l?u:null,!i.m),0<i.O&&(i.M=new Zc(A(i.Y,i,i.g),i.O)),u=i.U,l=i.g,f=i.ca;var v="readystatechange";Array.isArray(v)||(v&&(Fi[0]=v.toString()),v=Fi);for(var R=0;R<v.length;R++){var C=ki(l,v[R],f||u.handleEvent,!1,u.h||u);if(!C)break;u.g[C.key]=C}u=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),Je(),nl(i.i,i.u,i.A,i.l,i.R,i.m)}Kt.prototype.ca=function(i){i=i.target;const u=this.M;u&&Ut(i)==3?u.j():this.Y(i)},Kt.prototype.Y=function(i){try{if(i==this.g)t:{const mt=Ut(this.g);var u=this.g.Ba();const Re=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||_o(this.g)))){this.J||mt!=4||u==7||(u==8||0>=Re?Je(3):Je(2)),ss(this);var l=this.g.Z();this.X=l;e:if(Yi(this)){var f=_o(this.g);i="";var v=f.length,R=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ie(this),en(this);var C="";break e}this.h.i=new c.TextDecoder}for(u=0;u<v;u++)this.h.h=!0,i+=this.h.i.decode(f[u],{stream:!(R&&u==v-1)});f.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,rl(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var G,ot=this.g;if((G=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(G)){var q=G;break e}}q=null}if(l=q)Ie(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,is(this,l);else{this.o=!1,this.s=3,Et(12),ie(this),en(this);break t}}if(this.P){l=!0;let Pt;for(;!this.J&&this.C<C.length;)if(Pt=ol(this,C),Pt==ns){mt==4&&(this.s=4,Et(14),l=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==Hi){this.s=4,Et(15),Ie(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else Ie(this.i,this.l,Pt,null),is(this,Pt);if(Yi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||C.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)Ie(this.i,this.l,C,"[Invalid Chunked Response]"),ie(this),en(this);else if(0<C.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),hs(ft),ft.M=!0,Et(11))}}else Ie(this.i,this.l,C,null),is(this,C);mt==4&&ie(this),this.o&&!this.J&&(mt==4?Ao(this.j,this):(this.o=!1,$n(this)))}else wl(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ie(this),en(this)}}}catch{}finally{}};function Yi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function ol(i,u){var l=i.C,f=u.indexOf(`
`,l);return f==-1?ns:(l=Number(u.substring(l,f)),isNaN(l)?Hi:(f+=1,f+l>u.length?ns:(u=u.slice(f,f+l),i.C=f+l,u)))}Kt.prototype.cancel=function(){this.J=!0,ie(this)};function $n(i){i.S=Date.now()+i.I,Xi(i,i.I)}function Xi(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Ze(A(i.ba,i),u)}function ss(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Kt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(sl(this.i,this.A),this.L!=2&&(Je(),Et(17)),ie(this),this.s=2,en(this)):Xi(this,this.S-i)};function en(i){i.j.G==0||i.J||Ao(i.j,i)}function ie(i){ss(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,Ui(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function is(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||os(l.h,i))){if(!i.K&&os(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Jn(l),Yn(l);else break t;ls(l),Et(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Ze(A(l.Za,l),6e3));if(1>=to(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ae(l,11)}else if((i.K||l.g==i)&&Jn(l),!W(u))for(v=l.Da.g.parse(u),u=0;u<v.length;u++){let q=v[u];if(l.T=q[0],q=q[1],l.G==2)if(q[0]=="c"){l.K=q[1],l.ia=q[2];const ft=q[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const mt=q[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const Re=q[5];Re!=null&&typeof Re=="number"&&0<Re&&(f=1.5*Re,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Pt=i.g;if(Pt){const tr=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tr){var R=f.h;R.g||tr.indexOf("spdy")==-1&&tr.indexOf("quic")==-1&&tr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(as(R,R.h),R.h=null))}if(f.D){const ds=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;ds&&(f.ya=ds,Q(f.I,f.D,ds))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var C=i;if(f.qa=So(f,f.J?f.ia:null,f.W),C.K){eo(f.h,C);var G=C,ot=f.L;ot&&(G.I=ot),G.B&&(ss(G),$n(G)),f.g=C}else Io(f);0<l.i.length&&Xn(l)}else q[0]!="stop"&&q[0]!="close"||ae(l,7);else l.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?ae(l,7):cs(l):q[0]!="noop"&&l.l&&l.l.ta(q),l.v=0)}}Je(4)}catch{}}var al=class{constructor(i,u){this.g=i,this.map=u}};function Ji(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function to(i){return i.h?1:i.g?i.g.size:0}function os(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function as(i,u){i.g?i.g.add(u):i.h=u}function eo(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Ji.prototype.cancel=function(){if(this.i=no(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function no(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return N(i.i)}function ul(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,f=0;f<l;f++)u.push(i[f]);return u}u=[],l=0;for(f in i)u[l++]=i[f];return u}function cl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const f in i)u[l++]=f;return u}}}function ro(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=cl(i),f=ul(i),v=f.length,R=0;R<v;R++)u.call(void 0,f[R],l&&l[R],i)}var so=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ll(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),v=null;if(0<=f){var R=i[l].substring(0,f);v=i[l].substring(f+1)}else R=i[l];u(R,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function oe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof oe){this.h=i.h,zn(this,i.j),this.o=i.o,this.g=i.g,Kn(this,i.s),this.l=i.l;var u=i.i,l=new sn;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),io(this,l),this.m=i.m}else i&&(u=String(i).match(so))?(this.h=!1,zn(this,u[1]||"",!0),this.o=nn(u[2]||""),this.g=nn(u[3]||"",!0),Kn(this,u[4]),this.l=nn(u[5]||"",!0),io(this,u[6]||"",!0),this.m=nn(u[7]||"")):(this.h=!1,this.i=new sn(null,this.h))}oe.prototype.toString=function(){var i=[],u=this.j;u&&i.push(rn(u,oo,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(rn(u,oo,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(rn(l,l.charAt(0)=="/"?fl:dl,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",rn(l,pl)),i.join("")};function Ft(i){return new oe(i)}function zn(i,u,l){i.j=l?nn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Kn(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function io(i,u,l){u instanceof sn?(i.i=u,gl(i.i,i.h)):(l||(u=rn(u,ml)),i.i=new sn(u,i.h))}function Q(i,u,l){i.i.set(u,l)}function Wn(i){return Q(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function nn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function rn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,hl),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function hl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var oo=/[#\/\?@]/g,dl=/[#\?:]/g,fl=/[#\?]/g,ml=/[#\?@]/g,pl=/#/g;function sn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Wt(i){i.g||(i.g=new Map,i.h=0,i.i&&ll(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=sn.prototype,n.add=function(i,u){Wt(this),this.i=null,i=we(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function ao(i,u){Wt(i),u=we(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function uo(i,u){return Wt(i),u=we(i,u),i.g.has(u)}n.forEach=function(i,u){Wt(this),this.g.forEach(function(l,f){l.forEach(function(v){i.call(u,v,f,this)},this)},this)},n.na=function(){Wt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const v=i[f];for(let R=0;R<v.length;R++)l.push(u[f])}return l},n.V=function(i){Wt(this);let u=[];if(typeof i=="string")uo(this,i)&&(u=u.concat(this.g.get(we(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return Wt(this),this.i=null,i=we(this,i),uo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function co(i,u,l){ao(i,u),0<l.length&&(i.i=null,i.g.set(we(i,u),N(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const R=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var v=R;C[f]!==""&&(v+="="+encodeURIComponent(String(C[f]))),i.push(v)}}return this.i=i.join("&")};function we(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function gl(i,u){u&&!i.j&&(Wt(i),i.i=null,i.g.forEach(function(l,f){var v=f.toLowerCase();f!=v&&(ao(this,f),co(this,v,l))},i)),i.j=u}function _l(i,u){const l=new tn;if(c.Image){const f=new Image;f.onload=P(Gt,l,"TestLoadImage: loaded",!0,u,f),f.onerror=P(Gt,l,"TestLoadImage: error",!1,u,f),f.onabort=P(Gt,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=P(Gt,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function yl(i,u){const l=new tn,f=new AbortController,v=setTimeout(()=>{f.abort(),Gt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(v),R.ok?Gt(l,"TestPingServer: ok",!0,u):Gt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),Gt(l,"TestPingServer: error",!1,u)})}function Gt(i,u,l,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(l)}catch{}}function El(){this.g=new el}function Tl(i,u,l){const f=l||"";try{ro(i,function(v,R){let C=v;d(v)&&(C=Xr(v)),u.push(f+R+"="+encodeURIComponent(C))})}catch(v){throw u.push(f+"type="+encodeURIComponent("_badmap")),v}}function Gn(i){this.l=i.Ub||null,this.j=i.eb||!1}D(Gn,Jr),Gn.prototype.g=function(){return new Hn(this.l,this.j)},Gn.prototype.i=function(i){return function(){return i}}({});function Hn(i,u){dt.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Hn,dt),n=Hn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,an(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,on(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,an(this)),this.g&&(this.readyState=3,an(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function lo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?on(this):an(this),this.readyState==3&&lo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,on(this))},n.Qa=function(i){this.g&&(this.response=i,on(this))},n.ga=function(){this.g&&on(this)};function on(i){i.readyState=4,i.l=null,i.j=null,i.v=null,an(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function an(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Hn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ho(i){let u="";return it(i,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function us(i,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=ho(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):Q(i,u,l))}function X(i){dt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(X,dt);var vl=/^https?$/i,Il=["POST","PUT"];n=X.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():es.g(),this.v=this.o?Bi(this.o):Bi(es),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){fo(this,R);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)l.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),v=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Il,u,void 0))||f||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,C]of l)this.g.setRequestHeader(R,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{go(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){fo(this,R)}};function fo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,mo(i),Qn(i)}function mo(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,yt(this,"complete"),yt(this,"abort"),Qn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qn(this,!0)),X.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?po(this):this.bb())},n.bb=function(){po(this)};function po(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ut(i)!=4||i.Z()!=2)){if(i.u&&Ut(i)==4)xi(i.Ea,0,i);else if(yt(i,"readystatechange"),Ut(i)==4){i.h=!1;try{const C=i.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=C===0){var v=String(i.D).match(so)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),f=!vl.test(v?v.toLowerCase():"")}l=f}if(l)yt(i,"complete"),yt(i,"success");else{i.m=6;try{var R=2<Ut(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",mo(i)}}finally{Qn(i)}}}}function Qn(i,u){if(i.g){go(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||yt(i,"ready");try{l.onreadystatechange=f}catch{}}}function go(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ut(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),tl(u)}};function _o(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function wl(i){const u={};i=(i.g&&2<=Ut(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(W(i[f]))continue;var l=E(i[f]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[v]||[];u[v]=R,R.push(l)}T(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function un(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function yo(i){this.Aa=0,this.i=[],this.j=new tn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=un("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=un("baseRetryDelayMs",5e3,i),this.cb=un("retryDelaySeedMs",1e4,i),this.Wa=un("forwardChannelMaxRetries",2,i),this.wa=un("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ji(i&&i.concurrentRequestLimit),this.Da=new El,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=yo.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,f){Et(0),this.W=i,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=So(this,null,this.W),Xn(this)};function cs(i){if(Eo(i),i.G==3){var u=i.U++,l=Ft(i.I);if(Q(l,"SID",i.K),Q(l,"RID",u),Q(l,"TYPE","terminate"),cn(i,l),u=new Kt(i,i.j,u),u.L=2,u.v=Wn(Ft(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=bo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),$n(u)}Po(i)}function Yn(i){i.g&&(hs(i),i.g.cancel(),i.g=null)}function Eo(i){Yn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Jn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Xn(i){if(!Zi(i.h)&&!i.s){i.s=!0;var u=i.Ga;Ge||Di(),He||(Ge(),He=!0),$r.add(u,i),i.B=0}}function Al(i,u){return to(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Ze(A(i.Ga,i,u),Ro(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const v=new Kt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(v.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=vo(this,v,u),l=Ft(this.I),Q(l,"RID",i),Q(l,"CVER",22),this.D&&Q(l,"X-HTTP-Session-Id",this.D),cn(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(ho(R)))+"&"+u:this.m&&us(l,this.m,R)),as(this.h,v),this.Ua&&Q(l,"TYPE","init"),this.P?(Q(l,"$req",u),Q(l,"SID","null"),v.T=!0,rs(v,l,null)):rs(v,l,u),this.G=2}}else this.G==3&&(i?To(this,i):this.i.length==0||Zi(this.h)||To(this))};function To(i,u){var l;u?l=u.l:l=i.U++;const f=Ft(i.I);Q(f,"SID",i.K),Q(f,"RID",l),Q(f,"AID",i.T),cn(i,f),i.m&&i.o&&us(f,i.m,i.o),l=new Kt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=vo(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),as(i.h,l),rs(l,f,u)}function cn(i,u){i.H&&it(i.H,function(l,f){Q(u,f,l)}),i.l&&ro({},function(l,f){Q(u,f,l)})}function vo(i,u,l){l=Math.min(i.i.length,l);var f=i.l?A(i.l.Na,i.l,i):null;t:{var v=i.i;let R=-1;for(;;){const C=["count="+l];R==-1?0<l?(R=v[0].g,C.push("ofs="+R)):R=0:C.push("ofs="+R);let G=!0;for(let ot=0;ot<l;ot++){let q=v[ot].g;const ft=v[ot].map;if(q-=R,0>q)R=Math.max(0,v[ot].g-100),G=!1;else try{Tl(ft,C,"req"+q+"_")}catch{f&&f(ft)}}if(G){f=C.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,f}function Io(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;Ge||Di(),He||(Ge(),He=!0),$r.add(u,i),i.v=0}}function ls(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Ze(A(i.Fa,i),Ro(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,wo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Ze(A(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Yn(this),wo(this))};function hs(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function wo(i){i.g=new Kt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Ft(i.qa);Q(u,"RID","rpc"),Q(u,"SID",i.K),Q(u,"AID",i.T),Q(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&Q(u,"TO",i.ja),Q(u,"TYPE","xmlhttp"),cn(i,u),i.m&&i.o&&us(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Wn(Ft(u)),l.m=null,l.P=!0,Qi(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Yn(this),ls(this),Et(19))};function Jn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Ao(i,u){var l=null;if(i.g==u){Jn(i),hs(i),i.g=null;var f=2}else if(os(i.h,u))l=u.D,eo(i.h,u),f=1;else return;if(i.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var v=i.B;f=Bn(),yt(f,new Ki(f,l)),Xn(i)}else Io(i);else if(v=u.s,v==3||v==0&&0<u.X||!(f==1&&Al(i,u)||f==2&&ls(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),v){case 1:ae(i,5);break;case 4:ae(i,10);break;case 3:ae(i,6);break;default:ae(i,2)}}}function Ro(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function ae(i,u){if(i.j.info("Error code "+u),u==2){var l=A(i.fb,i),f=i.Xa;const v=!f;f=new oe(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||zn(f,"https"),Wn(f),v?_l(f.toString(),l):yl(f.toString(),l)}else Et(2);i.G=0,i.l&&i.l.sa(u),Po(i),Eo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Po(i){if(i.G=0,i.ka=[],i.l){const u=no(i.h);(u.length!=0||i.i.length!=0)&&(V(i.ka,u),V(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function So(i,u,l){var f=l instanceof oe?Ft(l):new oe(l);if(f.g!="")u&&(f.g=u+"."+f.g),Kn(f,f.s);else{var v=c.location;f=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;var R=new oe(null);f&&zn(R,f),u&&(R.g=u),v&&Kn(R,v),l&&(R.l=l),f=R}return l=i.D,u=i.ya,l&&u&&Q(f,l,u),Q(f,"VER",i.la),cn(i,f),f}function bo(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new X(new Gn({eb:l})):new X(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Co(){}n=Co.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zn(){}Zn.prototype.g=function(i,u){return new wt(i,u)};function wt(i,u){dt.call(this),this.g=new yo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!W(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!W(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ae(this)}D(wt,dt),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){cs(this.g)},wt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Xr(i),i=l);u.i.push(new al(u.Ya++,i)),u.G==3&&Xn(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,cs(this.g),delete this.g,wt.aa.N.call(this)};function Vo(i){Zr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}D(Vo,Zr);function Do(){ts.call(this),this.status=1}D(Do,ts);function Ae(i){this.g=i}D(Ae,Co),Ae.prototype.ua=function(){yt(this.g,"a")},Ae.prototype.ta=function(i){yt(this.g,new Vo(i))},Ae.prototype.sa=function(i){yt(this.g,new Do)},Ae.prototype.ra=function(){yt(this.g,"b")},Zn.prototype.createWebChannel=Zn.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Tu=function(){return new Zn},Eu=function(){return Bn()},yu=se,Vs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},jn.NO_ERROR=0,jn.TIMEOUT=8,jn.HTTP_ERROR=6,ir=jn,Wi.COMPLETE="complete",_u=Wi,ji.EventType=Xe,Xe.OPEN="a",Xe.CLOSE="b",Xe.ERROR="c",Xe.MESSAGE="d",dt.prototype.listen=dt.prototype.K,hn=ji,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,gu=X}).apply(typeof er<"u"?er:typeof self<"u"?self:typeof window<"u"?window:{});const Jo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new Gs("@firebase/firestore");function ln(){return pe.logLevel}function k(n,...t){if(pe.logLevel<=j.DEBUG){const e=t.map(ti);pe.debug(`Firestore (${qe}): ${n}`,...e)}}function qt(n,...t){if(pe.logLevel<=j.ERROR){const e=t.map(ti);pe.error(`Firestore (${qe}): ${n}`,...e)}}function ke(n,...t){if(pe.logLevel<=j.WARN){const e=t.map(ti);pe.warn(`Firestore (${qe}): ${n}`,...e)}}function ti(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const t=`FIRESTORE (${qe}) INTERNAL ASSERTION FAILED: `+n;throw qt(t),new Error(t)}function K(n,t){n||x()}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ne{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Af{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class Rf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Pf{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string"),new vu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string"),new gt(t)}}class Sf{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class bf{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Sf(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vf{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){K(this.o===void 0);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string"),this.R=e.token,new Cf(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Df(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function $(n,t){return n<t?-1:n>t?1:0}function Ne(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new nt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new nt(0,0))}static max(){return new L(new nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(),r===void 0?r=t.length-e:r>t.length-e&&x(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return vn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class J extends vn{construct(t,e,r){return new J(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new J(e)}static emptyPath(){return new J([])}}const kf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends vn{construct(t,e,r){return new ut(t,e,r)}static isValidIdentifier(t){return kf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new O(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new O(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new O(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(J.fromString(t))}static fromName(t){return new M(J.fromString(t).popFirst(5))}static empty(){return new M(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new J(t.slice()))}}function Nf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new nt(e+1,0):new nt(e,r));return new Zt(s,M.empty(),t)}function Of(n){return new Zt(n.readTime,n.key,-1)}class Zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Zt(L.min(),M.empty(),-1)}static max(){return new Zt(L.max(),M.empty(),-1)}}function Mf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==xf)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(s=>s?S.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(p=>{a[d]=p,++c,c===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new S((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Ff(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Cn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ei.oe=-1;function Sr(n){return n==null}function pr(n){return n===0&&1/n==-1/0}function Uf(n){return typeof n=="number"&&Number.isInteger(n)&&!pr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ye(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function wu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new nr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new nr(this.root,t,this.comparator,!1)}getReverseIterator(){return new nr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new nr(this.root,t,this.comparator,!0)}}class nr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new at(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,r,s,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ta(this.data.getIterator())}getIteratorFrom(t){return new ta(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ct(this.comparator);return e.data=t,e}}class ta{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new At([])}unionWith(t){let e=new ct(ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ne(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Au("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Bf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(n){if(K(!!n),typeof n=="string"){let t=0;const e=Bf.exec(n);if(K(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ge(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ri(n){const t=n.mapValue.fields.__previous_value__;return ni(t)?ri(t):t}function In(n){const t=te(n.mapValue.fields.__local_write_time__.timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t,e,r,s,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class wn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new wn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof wn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr={mapValue:{}};function _e(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ni(n)?4:$f(n)?9007199254740991:qf(n)?10:11:x()}function Ot(n,t){if(n===t)return!0;const e=_e(n);if(e!==_e(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return In(n).isEqual(In(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=te(s.timestampValue),c=te(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return ge(s.bytesValue).isEqual(ge(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Z(s.doubleValue),c=Z(o.doubleValue);return a===c?pr(a)===pr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Ne(n.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Zo(a)!==Zo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Ot(a[h],c[h])))return!1;return!0}(n,t);default:return x()}}function An(n,t){return(n.values||[]).find(e=>Ot(e,t))!==void 0}function Oe(n,t){if(n===t)return 0;const e=_e(n),r=_e(t);if(e!==r)return $(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=Z(o.integerValue||o.doubleValue),h=Z(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return ea(n.timestampValue,t.timestampValue);case 4:return ea(In(n),In(t));case 5:return $(n.stringValue,t.stringValue);case 6:return function(o,a){const c=ge(o),h=ge(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const p=$(c[d],h[d]);if(p!==0)return p}return $(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=$(Z(o.latitude),Z(a.latitude));return c!==0?c:$(Z(o.longitude),Z(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return na(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,p;const I=o.fields||{},A=a.fields||{},P=(c=I.value)===null||c===void 0?void 0:c.arrayValue,D=(h=A.value)===null||h===void 0?void 0:h.arrayValue,N=$(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((p=D==null?void 0:D.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:na(P,D)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===rr.mapValue&&a===rr.mapValue)return 0;if(o===rr.mapValue)return 1;if(a===rr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let I=0;I<h.length&&I<p.length;++I){const A=$(h[I],p[I]);if(A!==0)return A;const P=Oe(c[h[I]],d[p[I]]);if(P!==0)return P}return $(h.length,p.length)}(n.mapValue,t.mapValue);default:throw x()}}function ea(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=te(n),r=te(t),s=$(e.seconds,r.seconds);return s!==0?s:$(e.nanos,r.nanos)}function na(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Oe(e[s],r[s]);if(o)return o}return $(e.length,r.length)}function Me(n){return Ds(n)}function Ds(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=te(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ge(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ds(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ds(e.fields[a])}`;return s+"}"}(n.mapValue):x()}function ks(n){return!!n&&"integerValue"in n}function si(n){return!!n&&"arrayValue"in n}function ra(n){return!!n&&"nullValue"in n}function sa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function or(n){return!!n&&"mapValue"in n}function qf(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function gn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ye(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=gn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=gn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function $f(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.value=t}static empty(){return new Tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!or(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=gn(e)}setAll(t){let e=ut.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=gn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());or(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];or(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ye(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Tt(gn(this.value))}}function Ru(n){const t=[];return ye(n.fields,(e,r)=>{const s=new ut([e]);if(or(r)){const o=Ru(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new At(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),Tt.empty(),0)}static newFoundDocument(t,e,r,s){return new _t(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),Tt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),Tt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e){this.position=t,this.inclusive=e}}function ia(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=Oe(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function oa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ot(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e="asc"){this.field=t,this.dir=e}}function zf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{}class et extends Pu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Wf(t,e,r):e==="array-contains"?new Qf(t,r):e==="in"?new Yf(t,r):e==="not-in"?new Xf(t,r):e==="array-contains-any"?new Jf(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Gf(t,r):new Hf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Oe(e,this.value)):e!==null&&_e(this.value)===_e(e)&&this.matchesComparison(Oe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends Pu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Mt(t,e)}matches(t){return Su(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Su(n){return n.op==="and"}function bu(n){return Kf(n)&&Su(n)}function Kf(n){for(const t of n.filters)if(t instanceof Mt)return!1;return!0}function Ns(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+Me(n.value);if(bu(n))return n.filters.map(t=>Ns(t)).join(",");{const t=n.filters.map(e=>Ns(e)).join(",");return`${n.op}(${t})`}}function Cu(n,t){return n instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Ot(r.value,s.value)}(n,t):n instanceof Mt?function(r,s){return s instanceof Mt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Cu(a,s.filters[c]),!0):!1}(n,t):void x()}function Vu(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Me(e.value)}`}(n):n instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map(Vu).join(" ,")+"}"}(n):"Filter"}class Wf extends et{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Gf extends et{constructor(t,e){super(t,"in",e),this.keys=Du("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Hf extends et{constructor(t,e){super(t,"not-in",e),this.keys=Du("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Du(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class Qf extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return si(e)&&An(e.arrayValue,this.value)}}class Yf extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&An(this.value.arrayValue,e)}}class Xf extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(An(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!An(this.value.arrayValue,e)}}class Jf extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!si(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>An(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function aa(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Zf(n,t,e,r,s,o,a)}function ii(n){const t=F(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ns(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Sr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Me(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Me(r)).join(",")),t.ue=e}return t.ue}function oi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!zf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Cu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!oa(n.startAt,t.startAt)&&oa(n.endAt,t.endAt)}function Os(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tm(n,t,e,r,s,o,a,c){return new br(n,t,e,r,s,o,a,c)}function Cr(n){return new br(n)}function ua(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function em(n){return n.collectionGroup!==null}function _n(n){const t=F(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ct(ut.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new _r(o,r))}),e.has(ut.keyField().canonicalString())||t.ce.push(new _r(ut.keyField(),r))}return t.ce}function Ct(n){const t=F(n);return t.le||(t.le=nm(t,_n(n))),t.le}function nm(n,t){if(n.limitType==="F")return aa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new _r(s.field,o)});const e=n.endAt?new gr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new gr(n.startAt.position,n.startAt.inclusive):null;return aa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ms(n,t,e){return new br(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Vr(n,t){return oi(Ct(n),Ct(t))&&n.limitType===t.limitType}function ku(n){return`${ii(Ct(n))}|lt:${n.limitType}`}function Pe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Vu(s)).join(", ")}]`),Sr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Me(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Me(s)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function Dr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of _n(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=ia(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,_n(r),s)||r.endAt&&!function(a,c,h){const d=ia(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,_n(r),s))}(n,t)}function rm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Nu(n){return(t,e)=>{let r=!1;for(const s of _n(n)){const o=sm(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function sm(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Oe(h,d):x()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ye(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return wu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=new Y(M.comparator);function $t(){return im}const Ou=new Y(M.comparator);function dn(...n){let t=Ou;for(const e of n)t=t.insert(e.key,e);return t}function Mu(n){let t=Ou;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function le(){return yn()}function xu(){return yn()}function yn(){return new $e(n=>n.toString(),(n,t)=>n.isEqual(t))}const om=new Y(M.comparator),am=new ct(M.comparator);function U(...n){let t=am;for(const e of n)t=t.add(e);return t}const um=new ct($);function cm(){return um}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pr(t)?"-0":t}}function Lu(n){return{integerValue:""+n}}function lm(n,t){return Uf(t)?Lu(t):ai(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this._=void 0}}function hm(n,t,e){return n instanceof yr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ni(o)&&(o=ri(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof xe?Uu(n,t):n instanceof Le?Bu(n,t):function(s,o){const a=Fu(s,o),c=ca(a)+ca(s.Pe);return ks(a)&&ks(s.Pe)?Lu(c):ai(s.serializer,c)}(n,t)}function dm(n,t,e){return n instanceof xe?Uu(n,t):n instanceof Le?Bu(n,t):e}function Fu(n,t){return n instanceof Er?function(r){return ks(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class yr extends kr{}class xe extends kr{constructor(t){super(),this.elements=t}}function Uu(n,t){const e=ju(t);for(const r of n.elements)e.some(s=>Ot(s,r))||e.push(r);return{arrayValue:{values:e}}}class Le extends kr{constructor(t){super(),this.elements=t}}function Bu(n,t){let e=ju(t);for(const r of n.elements)e=e.filter(s=>!Ot(s,r));return{arrayValue:{values:e}}}class Er extends kr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ca(n){return Z(n.integerValue||n.doubleValue)}function ju(n){return si(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t,e){this.field=t,this.transform=e}}function fm(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof xe&&s instanceof xe||r instanceof Le&&s instanceof Le?Ne(r.elements,s.elements,Ot):r instanceof Er&&s instanceof Er?Ot(r.Pe,s.Pe):r instanceof yr&&s instanceof yr}(n.transform,t.transform)}class mm{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ar(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Nr{}function $u(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ku(n.key,Vt.none()):new Vn(n.key,n.data,Vt.none());{const e=n.data,r=Tt.empty();let s=new ct(ut.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new re(n.key,r,new At(s.toArray()),Vt.none())}}function pm(n,t,e){n instanceof Vn?function(s,o,a){const c=s.value.clone(),h=ha(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof re?function(s,o,a){if(!ar(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=ha(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(zu(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function En(n,t,e,r){return n instanceof Vn?function(o,a,c,h){if(!ar(o.precondition,a))return c;const d=o.value.clone(),p=da(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof re?function(o,a,c,h){if(!ar(o.precondition,a))return c;const d=da(o.fieldTransforms,h,a),p=a.data;return p.setAll(zu(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,t,e,r):function(o,a,c){return ar(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function gm(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Fu(r.transform,s||null);o!=null&&(e===null&&(e=Tt.empty()),e.set(r.field,o))}return e||null}function la(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ne(r,s,(o,a)=>fm(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Vn extends Nr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class re extends Nr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function zu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ha(n,t,e){const r=new Map;K(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,dm(a,c,e[s]))}return r}function da(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,hm(o,a,t))}return r}class Ku extends Nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _m extends Nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&pm(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=En(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=En(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=xu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=$u(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&Ne(this.mutations,t.mutations,(e,r)=>la(e,r))&&Ne(this.baseMutations,t.baseMutations,(e,r)=>la(e,r))}}class ui{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){K(t.mutations.length===r.length);let s=function(){return om}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ui(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,B;function vm(n){switch(n){default:return x();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Wu(n){if(n===void 0)return qt("GRPC error has no .code"),b.UNKNOWN;switch(n){case tt.OK:return b.OK;case tt.CANCELLED:return b.CANCELLED;case tt.UNKNOWN:return b.UNKNOWN;case tt.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case tt.INTERNAL:return b.INTERNAL;case tt.UNAVAILABLE:return b.UNAVAILABLE;case tt.UNAUTHENTICATED:return b.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case tt.NOT_FOUND:return b.NOT_FOUND;case tt.ALREADY_EXISTS:return b.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return b.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case tt.ABORTED:return b.ABORTED;case tt.OUT_OF_RANGE:return b.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return b.UNIMPLEMENTED;case tt.DATA_LOSS:return b.DATA_LOSS;default:return x()}}(B=tt||(tt={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new de([4294967295,4294967295],0);function fa(n){const t=Im().encode(n),e=new pu;return e.update(t),new Uint8Array(e.digest())}function ma(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new de([e,r],0),new de([s,o],0)]}class ci{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new fn(`Invalid padding: ${e}`);if(r<0)throw new fn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new fn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new fn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=de.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(de.fromNumber(r)));return s.compare(wm)===1&&(s=new de([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=fa(t),[r,s]=ma(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ci(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=fa(t),[r,s]=ma(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class fn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Dn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Or(L.min(),s,new Y($),$t(),U())}}class Dn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Dn(r,e,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Gu{constructor(t,e){this.targetId=t,this.me=e}}class Hu{constructor(t,e,r=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class pa{constructor(){this.fe=0,this.ge=_a(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=U(),e=U(),r=U();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:x()}}),new Dn(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=_a()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,K(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Am{constructor(t){this.Le=t,this.Be=new Map,this.ke=$t(),this.qe=ga(),this.Qe=new Y($)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:x()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Os(o))if(r===0){const a=new M(o.path);this.Ue(e,a,_t.newNoDocument(a,L.min()))}else K(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=ge(r).toUint8Array()}catch(h){if(h instanceof Au)return ke("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ci(a,s,o)}catch(h){return ke(h instanceof fn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&Os(c.target)){const h=new M(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,_t.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=U();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Or(t,e,this.Qe,this.ke,r);return this.ke=$t(),this.qe=ga(),this.Qe=new Y($),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new pa,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ct($),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new pa),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function ga(){return new Y(M.comparator)}function _a(){return new Y(M.comparator)}const Rm={asc:"ASCENDING",desc:"DESCENDING"},Pm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Sm={and:"AND",or:"OR"};class bm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function xs(n,t){return n.useProto3Json||Sr(t)?t:{value:t}}function Tr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Qu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Cm(n,t){return Tr(n,t.toTimestamp())}function Dt(n){return K(!!n),L.fromTimestamp(function(e){const r=te(e);return new nt(r.seconds,r.nanos)}(n))}function li(n,t){return Ls(n,t).canonicalString()}function Ls(n,t){const e=function(s){return new J(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Yu(n){const t=J.fromString(n);return K(ec(t)),t}function Fs(n,t){return li(n.databaseId,t.path)}function Ts(n,t){const e=Yu(t);if(e.get(1)!==n.databaseId.projectId)throw new O(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Ju(e))}function Xu(n,t){return li(n.databaseId,t)}function Vm(n){const t=Yu(n);return t.length===4?J.emptyPath():Ju(t)}function Us(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ju(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ya(n,t,e){return{name:Fs(n,t),fields:e.value.mapValue.fields}}function Dm(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(K(p===void 0||typeof p=="string"),lt.fromBase64String(p||"")):(K(p===void 0||p instanceof Buffer||p instanceof Uint8Array),lt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const p=d.code===void 0?b.UNKNOWN:Wu(d.code);return new O(p,d.message||"")}(a);e=new Hu(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ts(n,r.document.name),o=Dt(r.document.updateTime),a=r.document.createTime?Dt(r.document.createTime):L.min(),c=new Tt({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(s,o,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];e=new ur(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ts(n,r.document),o=r.readTime?Dt(r.readTime):L.min(),a=_t.newNoDocument(s,o),c=r.removedTargetIds||[];e=new ur([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ts(n,r.document),o=r.removedTargetIds||[];e=new ur([],o,s,null)}else{if(!("filter"in t))return x();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Tm(s,o),c=r.targetId;e=new Gu(c,a)}}return e}function km(n,t){let e;if(t instanceof Vn)e={update:ya(n,t.key,t.value)};else if(t instanceof Ku)e={delete:Fs(n,t.key)};else if(t instanceof re)e={update:ya(n,t.key,t.data),updateMask:jm(t.fieldMask)};else{if(!(t instanceof _m))return x();e={verify:Fs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof yr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof xe)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Le)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Er)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw x()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Cm(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,t.precondition)),e}function Nm(n,t){return n&&n.length>0?(K(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Dt(s.updateTime):Dt(o);return a.isEqual(L.min())&&(a=Dt(o)),new mm(a,s.transformResults||[])}(e,t))):[]}function Om(n,t){return{documents:[Xu(n,t.path)]}}function Mm(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Xu(n,s);const o=function(d){if(d.length!==0)return tc(Mt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:Se(A.field),direction:Fm(A.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=xs(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function xm(n){let t=Vm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){K(r===1);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(I){const A=Zu(I);return A instanceof Mt&&bu(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(I){return I.map(A=>function(D){return new _r(be(D.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(A))}(e.orderBy));let c=null;e.limit&&(c=function(I){let A;return A=typeof I=="object"?I.value:I,Sr(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(I){const A=!!I.before,P=I.values||[];return new gr(P,A)}(e.startAt));let d=null;return e.endAt&&(d=function(I){const A=!I.before,P=I.values||[];return new gr(P,A)}(e.endAt)),tm(t,s,a,o,c,"F",h,d)}function Lm(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Zu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=be(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=be(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=be(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=be(e.unaryFilter.field);return et.create(a,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return et.create(be(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(r=>Zu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function Fm(n){return Rm[n]}function Um(n){return Pm[n]}function Bm(n){return Sm[n]}function Se(n){return{fieldPath:n.canonicalString()}}function be(n){return ut.fromServerFormat(n.fieldPath)}function tc(n){return n instanceof et?function(e){if(e.op==="=="){if(sa(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NAN"}};if(ra(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(sa(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NAN"}};if(ra(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Se(e.field),op:Um(e.op),value:e.value}}}(n):n instanceof Mt?function(e){const r=e.getFilters().map(s=>tc(s));return r.length===1?r[0]:{compositeFilter:{op:Bm(e.op),filters:r}}}(n):x()}function jm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ec(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,r,s,o=L.min(),a=L.min(),c=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t){this.ct=t}}function $m(n){const t=xm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ms(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.un=new Km}addToCollectionParentIndex(t,e){return this.un.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(Zt.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Km{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ct(J.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ct(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Fe(0)}static kn(){return new Fe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.changes=new $e(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&En(r.mutation,s,At.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,e,r=U()){const s=le();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=dn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=le();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,U()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=$t();const a=yn(),c=function(){return yn()}();return e.forEach((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof re)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),En(p.mutation,d,p.mutation.getFieldMask(),nt.now())):a.set(d.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var I;return c.set(d,new Gm(p,(I=a.get(d))!==null&&I!==void 0?I:null))}),c))}recalculateAndSaveOverlays(t,e){const r=yn();let s=new Y((a,c)=>a-c),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||At.empty();p=c.applyToLocalView(d,p),r.set(h,p);const I=(s.get(c.batchId)||U()).add(h);s=s.insert(c.batchId,I)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,p=h.value,I=xu();p.forEach(A=>{if(!o.has(A)){const P=$u(e.get(A),r.get(A));P!==null&&I.set(A,P),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,I))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):em(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(le());let c=-1,h=o;return a.next(d=>S.forEach(d,(p,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(p)?S.resolve():this.remoteDocumentCache.getEntry(t,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,U())).next(p=>({batchId:c,changes:Mu(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=dn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=dn();return this.indexManager.getCollectionParents(t,o).next(c=>S.forEach(c,h=>{const d=function(I,A){return new br(A,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(p=>{p.forEach((I,A)=>{a=a.insert(I,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,_t.newInvalidDocument(p)))});let c=dn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&En(p.mutation,d,At.empty(),nt.now()),Dr(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return S.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Dt(s.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:$m(s.bundledQuery),readTime:Dt(s.readTime)}}(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.overlays=new Y(M.comparator),this.Ir=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=le();return S.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=le(),o=e.length+1,a=new M(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Y((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=le(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=le(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return S.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Em(e,r));let o=this.Ir.get(e);o===void 0&&(o=U(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.Tr=new ct(st.Er),this.dr=new ct(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new st(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new st(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new M(new J([])),r=new st(e,t),s=new st(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new M(new J([])),r=new st(e,t),s=new st(e,t+1);let o=U();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new st(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class st{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return M.comparator(t.key,e.key)||$(t.wr,e.wr)}static Ar(t,e){return $(t.wr,e.wr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ct(st.Er)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ym(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new st(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new st(e,0),s=new st(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);o.push(c)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ct($);return e.forEach(s=>{const o=new st(s,0),a=new st(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),S.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new st(new M(o),0);let c=new ct($);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.wr)),!0)},a),S.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){K(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return S.forEach(e.mutations,s=>{const o=new st(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new st(e,0),s=this.br.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(t){this.Mr=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=$t();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():_t.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=$t();const a=e.path,c=new M(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Mf(Of(p),r)<=0||(s.has(p.key)||Dr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){x()}Or(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new tp(this)}getSize(t){return S.resolve(this.size)}}class tp extends Wm{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t){this.persistence=t,this.Nr=new $e(e=>ii(e),oi),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hi,this.targetCount=0,this.kr=Fe.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),S.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Fe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Kn(e),S.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),S.waitFor(o).next(()=>s)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t,e){this.qr={},this.overlays={},this.Qr=new ei(0),this.Kr=!1,this.Kr=!0,this.$r=new Xm,this.referenceDelegate=t(this),this.Ur=new ep(this),this.indexManager=new zm,this.remoteDocumentCache=function(s){return new Zm(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new qm(e),this.Gr=new Qm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ym,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Jm(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const s=new rp(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return S.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class rp extends Lf{constructor(t){super(),this.currentSequenceNumber=t}}class di{constructor(t){this.persistence=t,this.Jr=new hi,this.Yr=null}static Zr(t){return new di(t)}get Xr(){if(this.Yr)return this.Yr;throw x()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),S.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,r=>{const s=M.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return S.or([()=>S.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=U(),s=U();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new fi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Bl()?8:Ff(Ll())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new sp;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(ln()<=j.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(ln()<=j.DEBUG&&k("QueryEngine","Query:",Pe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ln()<=j.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ct(e))):S.resolve())}Yi(t,e){if(ua(e))return S.resolve(null);let r=Ct(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Ms(e,null,"F"),r=Ct(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=U(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.ts(e,c);return this.ns(e,d,a,h.readTime)?this.Yi(t,Ms(e,null,"F")):this.rs(t,d,e,h)}))})))}Zi(t,e,r,s){return ua(e)||s.isEqual(L.min())?S.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?S.resolve(null):(ln()<=j.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pe(e)),this.rs(t,a,e,Nf(s,-1)).next(c=>c))})}ts(t,e){let r=new ct(Nu(t));return e.forEach((s,o)=>{Dr(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return ln()<=j.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Pe(e)),this.Ji.getDocumentsMatchingQuery(t,e,Zt.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new Y($),this._s=new $e(o=>ii(o),oi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Hm(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function ap(n,t,e,r){return new op(n,t,e,r)}async function nc(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=U();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){c.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:c}))})})}function up(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,p){const I=d.batch,A=I.keys();let P=S.resolve();return A.forEach(D=>{P=P.next(()=>p.getEntry(h,D)).next(N=>{const V=d.docVersions.get(D);K(V!==null),N.version.compareTo(V)<0&&(I.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(h,I))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=U();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function rc(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function cp(n,t){const e=F(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((p,I)=>{const A=s.get(I);if(!A)return;c.push(e.Ur.removeMatchingKeys(o,p.removedDocuments,I).next(()=>e.Ur.addMatchingKeys(o,p.addedDocuments,I)));let P=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?P=P.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),s=s.insert(I,P),function(N,V,z){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(A,P,p)&&c.push(e.Ur.updateTargetData(o,P))});let h=$t(),d=U();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(lp(o,a,t.documentUpdates).next(p=>{h=p.Ps,d=p.Is})),!r.isEqual(L.min())){const p=e.Ur.getLastRemoteSnapshotVersion(o).next(I=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(p)}return S.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.os=s,o))}function lp(n,t,e){let r=U(),s=U();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=$t();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):k("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function hp(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function dp(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,S.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new Ht(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Bs(n,t,e){const r=F(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Cn(a))throw a;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function Ea(n,t,e){const r=F(n);let s=L.min(),o=U();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const I=F(h),A=I._s.get(p);return A!==void 0?S.resolve(I.os.get(A)):I.Ur.getTargetData(d,p)}(r,a,Ct(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:U())).next(c=>(fp(r,rm(t),c),{documents:c,Ts:o})))}function fp(n,t,e){let r=n.us.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Ta{constructor(){this.activeTargetIds=cm()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mp{constructor(){this.so=new Ta,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ta,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr=null;function vs(){return sr===null?sr=function(){return 268435456+Math.round(2147483648*Math.random())}():sr++,"0x"+sr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class yp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const c=vs(),h=this.xo(e,r.toUriEncodedString());k("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,h,d,s).then(p=>(k("RestConnection",`Received RPC '${e}' ${c}: `,p),p),p=>{throw ke("RestConnection",`RPC '${e}' ${c} failed with error: `,p,"url: ",h,"request:",s),p})}Lo(e,r,s,o,a,c){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=gp[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=vs();return new Promise((a,c)=>{const h=new gu;h.setWithCredentials(!0),h.listenOnce(_u.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ir.NO_ERROR:const p=h.getResponseJson();k(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case ir.TIMEOUT:k(pt,`RPC '${t}' ${o} timed out`),c(new O(b.DEADLINE_EXCEEDED,"Request time out"));break;case ir.HTTP_ERROR:const I=h.getStatus();if(k(pt,`RPC '${t}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A==null?void 0:A.error;if(P&&P.status&&P.message){const D=function(V){const z=V.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(z)>=0?z:b.UNKNOWN}(P.status);c(new O(D,P.message))}else c(new O(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new O(b.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{k(pt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);k(pt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Bo(t,e,r){const s=vs(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Tu(),c=Eu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");k(pt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const I=a.createWebChannel(p,h);let A=!1,P=!1;const D=new _p({Io:V=>{P?k(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(A||(k(pt,`Opening RPC '${t}' stream ${s} transport.`),I.open(),A=!0),k(pt,`RPC '${t}' stream ${s} sending:`,V),I.send(V))},To:()=>I.close()}),N=(V,z,W)=>{V.listen(z,H=>{try{W(H)}catch(rt){setTimeout(()=>{throw rt},0)}})};return N(I,hn.EventType.OPEN,()=>{P||(k(pt,`RPC '${t}' stream ${s} transport opened.`),D.yo())}),N(I,hn.EventType.CLOSE,()=>{P||(P=!0,k(pt,`RPC '${t}' stream ${s} transport closed`),D.So())}),N(I,hn.EventType.ERROR,V=>{P||(P=!0,ke(pt,`RPC '${t}' stream ${s} transport errored:`,V),D.So(new O(b.UNAVAILABLE,"The operation could not be completed")))}),N(I,hn.EventType.MESSAGE,V=>{var z;if(!P){const W=V.data[0];K(!!W);const H=W,rt=H.error||((z=H[0])===null||z===void 0?void 0:z.error);if(rt){k(pt,`RPC '${t}' stream ${s} received error:`,rt);const xt=rt.status;let it=function(_){const y=tt[_];if(y!==void 0)return Wu(y)}(xt),T=rt.message;it===void 0&&(it=b.INTERNAL,T="Unknown error status: "+xt+" with message "+rt.message),P=!0,D.So(new O(it,T)),I.close()}else k(pt,`RPC '${t}' stream ${s} received:`,W),D.bo(W)}}),N(c,yu.STAT_EVENT,V=>{V.stat===Vs.PROXY?k(pt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===Vs.NOPROXY&&k(pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}function Is(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n){return new bm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,e,r,s,o,a,c,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new sc(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(qt(e.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new O(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ep extends ic{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Dm(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Dt(a.readTime):L.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Us(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Os(h)?{documents:Om(o,h)}:{query:Mm(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Qu(o,a.resumeToken);const d=xs(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=Tr(o,a.snapshotVersion.toTimestamp());const d=xs(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=Lm(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Us(this.serializer),e.removeTarget=t,this.a_(e)}}class Tp extends ic{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return K(!!t.streamToken),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){K(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Nm(t.writeResults,t.commitTime),r=Dt(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Us(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>km(this.serializer,r))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Ls(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(b.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,Ls(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(b.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ip{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(qt(e),this.D_=!1):k("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Ee(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=F(h);d.L_.add(4),await kn(d),d.q_.set("Unknown"),d.L_.delete(4),await xr(d)}(this))})}),this.q_=new Ip(r,s)}}async function xr(n){if(Ee(n))for(const t of n.B_)await t(!0)}async function kn(n){for(const t of n.B_)await t(!1)}function oc(n,t){const e=F(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),_i(e)?gi(e):ze(e).r_()&&pi(e,t))}function mi(n,t){const e=F(n),r=ze(e);e.N_.delete(t),r.r_()&&ac(e,t),e.N_.size===0&&(r.r_()?r.o_():Ee(e)&&e.q_.set("Unknown"))}function pi(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ze(n).A_(t)}function ac(n,t){n.Q_.xe(t),ze(n).R_(t)}function gi(n){n.Q_=new Am({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),ze(n).start(),n.q_.v_()}function _i(n){return Ee(n)&&!ze(n).n_()&&n.N_.size>0}function Ee(n){return F(n).L_.size===0}function uc(n){n.Q_=void 0}async function Ap(n){n.q_.set("Online")}async function Rp(n){n.N_.forEach((t,e)=>{pi(n,t)})}async function Pp(n,t){uc(n),_i(n)?(n.q_.M_(t),gi(n)):n.q_.set("Unknown")}async function Sp(n,t,e){if(n.q_.set("Online"),t instanceof Hu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,t)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await vr(n,r)}else if(t instanceof ur?n.Q_.Ke(t):t instanceof Gu?n.Q_.He(t):n.Q_.We(t),!e.isEqual(L.min()))try{const r=await rc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(lt.EMPTY_BYTE_STRING,p.snapshotVersion)),ac(o,h);const I=new Ht(p.target,h,d,p.sequenceNumber);pi(o,I)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await vr(n,r)}}async function vr(n,t,e){if(!Cn(t))throw t;n.L_.add(1),await kn(n),n.q_.set("Offline"),e||(e=()=>rc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await xr(n)})}function cc(n,t){return t().catch(e=>vr(n,e,t))}async function Lr(n){const t=F(n),e=ee(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;bp(t);)try{const s=await hp(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,Cp(t,s)}catch(s){await vr(t,s)}lc(t)&&hc(t)}function bp(n){return Ee(n)&&n.O_.length<10}function Cp(n,t){n.O_.push(t);const e=ee(n);e.r_()&&e.V_&&e.m_(t.mutations)}function lc(n){return Ee(n)&&!ee(n).n_()&&n.O_.length>0}function hc(n){ee(n).start()}async function Vp(n){ee(n).p_()}async function Dp(n){const t=ee(n);for(const e of n.O_)t.m_(e.mutations)}async function kp(n,t,e){const r=n.O_.shift(),s=ui.from(r,t,e);await cc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Lr(n)}async function Np(n,t){t&&ee(n).V_&&await async function(r,s){if(function(a){return vm(a)&&a!==b.ABORTED}(s.code)){const o=r.O_.shift();ee(r).s_(),await cc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Lr(r)}}(n,t),lc(n)&&hc(n)}async function Ia(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=Ee(e);e.L_.add(3),await kn(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await xr(e)}async function Op(n,t){const e=F(n);t?(e.L_.delete(2),await xr(e)):t||(e.L_.add(2),await kn(e),e.q_.set("Unknown"))}function ze(n){return n.K_||(n.K_=function(e,r,s){const o=F(e);return o.w_(),new Ep(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Ap.bind(null,n),Ro:Rp.bind(null,n),mo:Pp.bind(null,n),d_:Sp.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),_i(n)?gi(n):n.q_.set("Unknown")):(await n.K_.stop(),uc(n))})),n.K_}function ee(n){return n.U_||(n.U_=function(e,r,s){const o=F(e);return o.w_(),new Tp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Vp.bind(null,n),mo:Np.bind(null,n),f_:Dp.bind(null,n),g_:kp.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Lr(n)):(await n.U_.stop(),n.O_.length>0&&(k("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new yi(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ei(n,t){if(qt("AsyncQueue",`${t}: ${n}`),Cn(n))return new O(b.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=dn(),this.sortedSet=new Y(this.comparator)}static emptySet(t){return new Ce(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ce;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this.W_=new Y(M.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):x():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ue{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Ue(t,e,Ce.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Vr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class xp{constructor(){this.queries=Aa(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=Aa(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(r)})})(this,new O(b.ABORTED,"Firestore shutting down"))}}function Aa(){return new $e(n=>ku(n),Vr)}async function dc(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new Mp,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Ei(a,`Initialization of query '${Pe(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Ti(e)}async function fc(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Lp(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Ti(e)}function Fp(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function Ti(n){n.Y_.forEach(t=>{t.next()})}var js,Ra;(Ra=js||(js={})).ea="default",Ra.Cache="cache";class mc{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ue(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Ue.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==js.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t){this.key=t}}class gc{constructor(t){this.key=t}}class Up{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=U(),this.mutatedKeys=U(),this.Aa=Nu(t),this.Ra=new Ce(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new wa,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,I)=>{const A=s.get(p),P=Dr(this.query,I)?I:null,D=!!A&&this.mutatedKeys.has(A.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let V=!1;A&&P?A.data.isEqual(P.data)?D!==N&&(r.track({type:3,doc:P}),V=!0):this.ga(A,P)||(r.track({type:2,doc:P}),V=!0,(h&&this.Aa(P,h)>0||d&&this.Aa(P,d)<0)&&(c=!0)):!A&&P?(r.track({type:0,doc:P}),V=!0):A&&!P&&(r.track({type:1,doc:A}),V=!0,(h||d)&&(c=!0)),V&&(P?(a=a.add(P),o=N?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((p,I)=>function(P,D){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return N(P)-N(D)}(p.type,I.type)||this.Aa(p.doc,I.doc)),this.pa(r),s=s!=null&&s;const c=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Ue(this.query,t.Ra,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new wa,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=U(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new gc(r))}),this.da.forEach(r=>{t.has(r)||e.push(new pc(r))}),e}ba(t){this.Ta=t.Ts,this.da=U();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Ue.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Bp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class jp{constructor(t){this.key=t,this.va=!1}}class qp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new $e(c=>ku(c),Vr),this.Ma=new Map,this.xa=new Set,this.Oa=new Y(M.comparator),this.Na=new Map,this.La=new hi,this.Ba={},this.ka=new Map,this.qa=Fe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function $p(n,t,e=!0){const r=Ic(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await _c(r,t,e,!0),s}async function zp(n,t){const e=Ic(n);await _c(e,t,!0,!1)}async function _c(n,t,e,r){const s=await dp(n.localStore,Ct(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Kp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&oc(n.remoteStore,s),c}async function Kp(n,t,e,r,s){n.Ka=(I,A,P)=>async function(N,V,z,W){let H=V.view.ma(z);H.ns&&(H=await Ea(N.localStore,V.query,!1).then(({documents:T})=>V.view.ma(T,H)));const rt=W&&W.targetChanges.get(V.targetId),xt=W&&W.targetMismatches.get(V.targetId)!=null,it=V.view.applyChanges(H,N.isPrimaryClient,rt,xt);return Sa(N,V.targetId,it.wa),it.snapshot}(n,I,A,P);const o=await Ea(n.localStore,t,!0),a=new Up(t,o.Ts),c=a.ma(o.documents),h=Dn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);Sa(n,e,d.wa);const p=new Bp(t,e,a);return n.Fa.set(t,p),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),d.snapshot}async function Wp(n,t,e){const r=F(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Vr(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&mi(r.remoteStore,s.targetId),qs(r,s.targetId)}).catch(bn)):(qs(r,s.targetId),await Bs(r.localStore,s.targetId,!0))}async function Gp(n,t){const e=F(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),mi(e.remoteStore,r.targetId))}async function Hp(n,t,e){const r=eg(n);try{const s=await function(a,c){const h=F(a),d=nt.now(),p=c.reduce((P,D)=>P.add(D.key),U());let I,A;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let D=$t(),N=U();return h.cs.getEntries(P,p).next(V=>{D=V,D.forEach((z,W)=>{W.isValidDocument()||(N=N.add(z))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,D)).next(V=>{I=V;const z=[];for(const W of c){const H=gm(W,I.get(W.key).overlayedDocument);H!=null&&z.push(new re(W.key,H,Ru(H.value.mapValue),Vt.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,z,c)}).next(V=>{A=V;const z=V.applyToLocalDocumentSet(I,N);return h.documentOverlayCache.saveOverlays(P,V.batchId,z)})}).then(()=>({batchId:A.batchId,changes:Mu(I)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new Y($)),d=d.insert(c,h),a.Ba[a.currentUser.toKey()]=d}(r,s.batchId,e),await Nn(r,s.changes),await Lr(r.remoteStore)}catch(s){const o=Ei(s,"Failed to persist write");e.reject(o)}}async function yc(n,t){const e=F(n);try{const r=await cp(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?K(a.va):s.removedDocuments.size>0&&(K(a.va),a.va=!1))}),await Nn(e,r,t)}catch(r){await bn(r)}}function Pa(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=F(a);h.onlineState=c;let d=!1;h.queries.forEach((p,I)=>{for(const A of I.j_)A.Z_(c)&&(d=!0)}),d&&Ti(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Qp(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new Y(M.comparator);a=a.insert(o,_t.newNoDocument(o,L.min()));const c=U().add(o),h=new Or(L.min(),new Map,new Y($),a,c);await yc(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),vi(r)}else await Bs(r.localStore,t,!1).then(()=>qs(r,t,e)).catch(bn)}async function Yp(n,t){const e=F(n),r=t.batch.batchId;try{const s=await up(e.localStore,t);Tc(e,r,null),Ec(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Nn(e,s)}catch(s){await bn(s)}}async function Xp(n,t,e){const r=F(n);try{const s=await function(a,c){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,c).next(I=>(K(I!==null),p=I.keys(),h.mutationQueue.removeMutationBatch(d,I))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,t);Tc(r,t,e),Ec(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Nn(r,s)}catch(s){await bn(s)}}function Ec(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Tc(n,t,e){const r=F(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}function qs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||vc(n,r)})}function vc(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(mi(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),vi(n))}function Sa(n,t,e){for(const r of e)r instanceof pc?(n.La.addReference(r.key,t),Jp(n,r)):r instanceof gc?(k("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||vc(n,r.key)):x()}function Jp(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(k("SyncEngine","New document in limbo: "+e),n.xa.add(r),vi(n))}function vi(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new M(J.fromString(t)),r=n.qa.next();n.Na.set(r,new jp(e)),n.Oa=n.Oa.insert(e,r),oc(n.remoteStore,new Ht(Ct(Cr(e.path)),r,"TargetPurposeLimboResolution",ei.oe))}}async function Nn(n,t,e){const r=F(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,h)=>{a.push(r.Ka(h,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const I=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(d){s.push(d);const I=fi.Wi(h.targetId,d);o.push(I)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,d){const p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>S.forEach(d,A=>S.forEach(A.$i,P=>p.persistence.referenceDelegate.addReference(I,A.targetId,P)).next(()=>S.forEach(A.Ui,P=>p.persistence.referenceDelegate.removeReference(I,A.targetId,P)))))}catch(I){if(!Cn(I))throw I;k("LocalStore","Failed to update sequence numbers: "+I)}for(const I of d){const A=I.targetId;if(!I.fromCache){const P=p.os.get(A),D=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(D);p.os=p.os.insert(A,N)}}}(r.localStore,o))}async function Zp(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const r=await nc(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new O(b.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Nn(e,r.hs)}}function tg(n,t){const e=F(n),r=e.Na.get(t);if(r&&r.va)return U().add(r.key);{let s=U();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const c=e.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function Ic(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=yc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Qp.bind(null,t),t.Ca.d_=Lp.bind(null,t.eventManager),t.Ca.$a=Fp.bind(null,t.eventManager),t}function eg(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Yp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Xp.bind(null,t),t}class Ir{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Mr(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return ap(this.persistence,new ip,t.initialUser,this.serializer)}Ga(t){return new np(di.Zr,this.serializer)}Wa(t){return new mp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ir.provider={build:()=>new Ir};class $s{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zp.bind(null,this.syncEngine),await Op(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new xp}()}createDatastore(t){const e=Mr(t.databaseInfo.databaseId),r=function(o){return new yp(o)}(t.databaseInfo);return function(o,a,c,h){return new vp(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new wp(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Pa(this.syncEngine,e,0),function(){return va.D()?new va:new pp}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,p){const I=new qp(s,o,a,c,h,d);return p&&(I.Qa=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);k("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await kn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}$s.provider={build:()=>new $s};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):qt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=Iu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{k("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(k("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ei(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ws(n,t){n.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await nc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ba(n,t){n.asyncQueue.verifyOperationInProgress();const e=await rg(n);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ia(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ia(t.remoteStore,s)),n._onlineComponents=t}async function rg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await ws(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;ke("Error using user provided cache. Falling back to memory cache: "+e),await ws(n,new Ir)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await ws(n,new Ir);return n._offlineComponents}async function Ac(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await ba(n,n._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await ba(n,new $s))),n._onlineComponents}function sg(n){return Ac(n).then(t=>t.syncEngine)}async function zs(n){const t=await Ac(n),e=t.eventManager;return e.onListen=$p.bind(null,t.syncEngine),e.onUnlisten=Wp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=zp.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Gp.bind(null,t.syncEngine),e}function ig(n,t,e={}){const r=new Xt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const p=new wc({next:A=>{p.Za(),a.enqueueAndForget(()=>fc(o,I));const P=A.docs.has(c);!P&&A.fromCache?d.reject(new O(b.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&A.fromCache&&h&&h.source==="server"?d.reject(new O(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),I=new mc(Cr(c.path),p,{includeMetadataChanges:!0,_a:!0});return dc(o,I)}(await zs(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n,t,e){if(!e)throw new O(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function ag(n,t,e,r){if(t===!0&&r===!0)throw new O(b.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Va(n){if(!M.isDocumentKey(n))throw new O(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ii(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function kt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ii(n);throw new O(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ag("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class wi{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Da({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Da(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Af;switch(r.type){case"firstParty":return new bf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ca.get(e);r&&(k("ComponentProvider","Removing Datastore"),Ca.delete(e),r.terminate())}(this),Promise.resolve()}}function ug(n,t,e,r={}){var s;const o=(n=kt(n,wi))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ke("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=gt.MOCK_USER;else{c=xl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new O(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(d)}n._authCredentials=new Rf(new vu(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Fr(this.firestore,t,this._query)}}class It{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class Rn extends Fr{constructor(t,e,r){super(t,e,Cr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new M(t))}withConverter(t){return new Rn(this.firestore,t,this._path)}}function Te(n,t,...e){if(n=Nt(n),arguments.length===1&&(t=Iu.newId()),og("doc","path",t),n instanceof wi){const r=J.fromString(t,...e);return Va(r),new It(n,null,new M(r))}{if(!(n instanceof It||n instanceof Rn))throw new O(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(t,...e));return Va(r),new It(n.firestore,n instanceof Rn?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new sc(this,"async_queue_retry"),this.Vu=()=>{const r=Is();r&&k("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=Is();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Is();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Xt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Cn(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw qt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=yi.createAndSchedule(this,t,e,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&x()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Na(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Be extends wi{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new ka,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ka(t),this._firestoreClient=void 0,await t}}}function cg(n,t){const e=typeof n=="object"?n:za(),r=typeof n=="string"?n:"(default)",s=Sn(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Ol("firestore");o&&ug(s,...o)}return s}function Ai(n){if(n._terminated)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||lg(n),n._firestoreClient}function lg(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,d,p){return new jf(c,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Rc(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new ng(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this._byteString=t}static fromBase64String(t){try{return new je(lt.fromBase64String(t))}catch(e){throw new O(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new je(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=/^__.*__$/;class dg{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new re(t,this.data,this.fieldMask,e,this.fieldTransforms):new Vn(t,this.data,e,this.fieldTransforms)}}class Pc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new re(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Sc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Br{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Br(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return wr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Sc(this.Cu)&&hg.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class fg{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Mr(t)}Qu(t,e,r,s=!1){return new Br({Cu:t,methodName:e,qu:r,path:ut.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bc(n){const t=n._freezeSettings(),e=Mr(n._databaseId);return new fg(n._databaseId,!!t.ignoreUndefinedProperties,e)}function mg(n,t,e,r,s,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);Ci("Data must be an object, but it was:",a,r);const c=Vc(r,a);let h,d;if(o.merge)h=new At(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const I of o.mergeFields){const A=Ks(t,I,e);if(!a.contains(A))throw new O(b.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);kc(p,A)||p.push(A)}h=new At(p),d=a.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,d=a.fieldTransforms;return new dg(new Tt(c),h,d)}class jr extends On{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof jr}}function Cc(n,t,e){return new Br({Cu:3,qu:t.settings.qu,methodName:n._methodName,xu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Si extends On{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=Cc(this,t,!0),r=this.Ku.map(o=>Ke(o,e)),s=new xe(r);return new qu(t.path,s)}isEqual(t){return t instanceof Si&&De(this.Ku,t.Ku)}}class bi extends On{constructor(t,e){super(t),this.Ku=e}_toFieldTransform(t){const e=Cc(this,t,!0),r=this.Ku.map(o=>Ke(o,e)),s=new Le(r);return new qu(t.path,s)}isEqual(t){return t instanceof bi&&De(this.Ku,t.Ku)}}function pg(n,t,e,r){const s=n.Qu(1,t,e);Ci("Data must be an object, but it was:",s,r);const o=[],a=Tt.empty();ye(r,(h,d)=>{const p=Vi(t,h,e);d=Nt(d);const I=s.Nu(p);if(d instanceof jr)o.push(p);else{const A=Ke(d,I);A!=null&&(o.push(p),a.set(p,A))}});const c=new At(o);return new Pc(a,c,s.fieldTransforms)}function gg(n,t,e,r,s,o){const a=n.Qu(1,t,e),c=[Ks(t,r,e)],h=[s];if(o.length%2!=0)throw new O(b.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)c.push(Ks(t,o[A])),h.push(o[A+1]);const d=[],p=Tt.empty();for(let A=c.length-1;A>=0;--A)if(!kc(d,c[A])){const P=c[A];let D=h[A];D=Nt(D);const N=a.Nu(P);if(D instanceof jr)d.push(P);else{const V=Ke(D,N);V!=null&&(d.push(P),p.set(P,V))}}const I=new At(d);return new Pc(p,I,a.fieldTransforms)}function Ke(n,t){if(Dc(n=Nt(n)))return Ci("Unsupported field value:",t,n),Vc(n,t);if(n instanceof On)return function(r,s){if(!Sc(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=Ke(c,s.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lm(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:Tr(s.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tr(s.serializer,o)}}if(r instanceof Ri)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof je)return{bytesValue:Qu(s.serializer,r._byteString)};if(r instanceof It){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:li(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Pi)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return ai(c.serializer,h)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ii(r)}`)}(n,t)}function Vc(n,t){const e={};return wu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ye(n,(r,s)=>{const o=Ke(s,t.Mu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Dc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof Ri||n instanceof je||n instanceof It||n instanceof On||n instanceof Pi)}function Ci(n,t,e){if(!Dc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Ii(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}function Ks(n,t,e){if((t=Nt(t))instanceof Ur)return t._internalPath;if(typeof t=="string")return Vi(n,t);throw wr("Field path arguments must be of type string or ",n,!1,void 0,e)}const _g=new RegExp("[~\\*/\\[\\]]");function Vi(n,t,e){if(t.search(_g)>=0)throw wr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ur(...t.split("."))._internalPath}catch{throw wr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function wr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new O(b.INVALID_ARGUMENT,c+n+h)}function kc(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new yg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Oc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class yg extends Nc{data(){return super.data()}}function Oc(n,t){return typeof t=="string"?Vi(n,t):t instanceof Ur?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tg{convertValue(t,e="none"){switch(_e(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ge(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ye(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Z(a.doubleValue));return new Pi(o)}convertGeoPoint(t){return new Ri(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ri(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(In(t));default:return null}}convertTimestamp(t){const e=te(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=J.fromString(t);K(ec(r));const s=new wn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||qt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Mc extends Nc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Oc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class cr extends Mc{data(t={}){return super.data(t)}}class Ig{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new mn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new cr(this._firestore,this._userDataWriter,r.key,r,new mn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new cr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new cr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:wg(c.type),doc:h,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function wg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n){n=kt(n,It);const t=kt(n.firestore,Be);return ig(Ai(t),n._key).then(e=>Uc(t,n,e))}class Lc extends Tg{constructor(t){super(),this.firestore=t}convertBytes(t){return new je(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function Ag(n,t,e){n=kt(n,It);const r=kt(n.firestore,Be),s=vg(n.converter,t);return Fc(r,[mg(bc(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Vt.none())])}function qr(n,t,e,...r){n=kt(n,It);const s=kt(n.firestore,Be),o=bc(s);let a;return a=typeof(t=Nt(t))=="string"||t instanceof Ur?gg(o,"updateDoc",n._key,t,e,r):pg(o,"updateDoc",n._key,t),Fc(s,[a.toMutation(n._key,Vt.exists(!0))])}function Rg(n,...t){var e,r,s;n=Nt(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Na(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Na(t[a])){const I=t[a];t[a]=(e=I.next)===null||e===void 0?void 0:e.bind(I),t[a+1]=(r=I.error)===null||r===void 0?void 0:r.bind(I),t[a+2]=(s=I.complete)===null||s===void 0?void 0:s.bind(I)}let h,d,p;if(n instanceof It)d=kt(n.firestore,Be),p=Cr(n._key.path),h={next:I=>{t[a]&&t[a](Uc(d,n,I))},error:t[a+1],complete:t[a+2]};else{const I=kt(n,Fr);d=kt(I.firestore,Be),p=I._query;const A=new Lc(d);h={next:P=>{t[a]&&t[a](new Ig(d,A,I,P))},error:t[a+1],complete:t[a+2]},Eg(n._query)}return function(A,P,D,N){const V=new wc(N),z=new mc(P,V,D);return A.asyncQueue.enqueueAndForget(async()=>dc(await zs(A),z)),()=>{V.Za(),A.asyncQueue.enqueueAndForget(async()=>fc(await zs(A),z))}}(Ai(d),p,c,h)}function Fc(n,t){return function(r,s){const o=new Xt;return r.asyncQueue.enqueueAndForget(async()=>Hp(await sg(r),s,o)),o.promise}(Ai(n),t)}function Uc(n,t,e){const r=e.docs.get(t._key),s=new Lc(n);return new Mc(n,s,t._key,r,new mn(e.hasPendingWrites,e.fromCache),t.converter)}function Pg(...n){return new Si("arrayUnion",n)}function Sg(...n){return new bi("arrayRemove",n)}(function(t,e=!0){(function(s){qe=s})(Wh),Jt(new Bt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Be(new Pf(r.getProvider("auth-internal")),new Vf(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wn(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),bt(Jo,"4.7.3",t),bt(Jo,"4.7.3","esm2017")})();const bg={apiKey:"AIzaSyDD_hYmiYzuz_Ey05Dd0FJsAN0uvc3dCYI",authDomain:"random-haiku.firebaseapp.com",projectId:"random-haiku",storageBucket:"random-haiku.firebasestorage.app",messagingSenderId:"756353135184",appId:"1:756353135184:web:92f32d62026841a8c71755",measurementId:"G-8DM8TW6873"},Bc=$a(bg);Tf(Bc);const ve=cg(Bc);let jc=null,he=null;function qc(n){jc=n}function Mn(){return jc}async function Cg(n){const t=Te(ve,"rooms",n);return(await xc(t)).exists()||await Ag(t,{words:{5:[],7:[]},createdAt:new Date,lastUpdated:new Date}),t}async function $c(n){const t=Te(ve,"rooms",n),e=await xc(t);return e.exists()?e.data():null}async function Vg(n,t,e){const r=Te(ve,"rooms",n);try{return await qr(r,{[`words.${t}`]:Pg(e),lastUpdated:new Date}),!0}catch(s){return console.error("言葉の追加に失敗しました:",s),!1}}async function Dg(n,t,e){const r=Te(ve,"rooms",n);try{return await qr(r,{[`words.${t}`]:Sg(e),lastUpdated:new Date}),!0}catch(s){return console.error("言葉の削除に失敗しました:",s),!1}}function kg(n,t){he&&he();const e=Te(ve,"rooms",n);return he=Rg(e,r=>{r.exists()&&t(r.data())},r=>{console.error("ルームの監視エラー:",r)}),he}function Ng(){he&&(he(),he=null)}async function Og(n){const t=Te(ve,"rooms",n);try{return await qr(t,{"words.5":[],"words.7":[],lastUpdated:new Date}),!0}catch(e){return console.error("言葉のクリアに失敗しました:",e),!1}}async function Mg(n,t){const e=Te(ve,"rooms",n),r=await $c(n);if(!r)return!1;const s=[...new Set([...r.words[5],...t[5]])],o=[...new Set([...r.words[7],...t[7]])];try{return await qr(e,{"words.5":s,"words.7":o,lastUpdated:new Date}),!0}catch(a){return console.error("デフォルト言葉の追加に失敗しました:",a),!1}}const St={5:[],7:[]},Ve={5:[],7:[]};function xg(){return{5:["春の海","古池や","柿食えば","閑さや","夏草や","雪とけて","秋深き","名月や","のたりかな","水の音","法隆寺","蝉の声","夢の跡","子どもかな","人を訪はば","遠き山"],7:["ひねもすのたり","蛙飛び込む","鐘が鳴るなり","岩にしみ入る","兵どもが夢の跡","村一杯の子どもかな","隣は何をする人ぞ","池をめぐりて"]}}window.joinRoom=async function(){const t=document.getElementById("room-id-input").value.trim();if(!t){alert("ルーム番号を入力してください");return}if(!/^\d+$/.test(t)){alert("ルーム番号は数字のみで入力してください");return}try{await Cg(t),qc(t),document.getElementById("room-selector").style.display="none",document.getElementById("current-room-info").style.display="block",document.getElementById("current-room-number").textContent=t,kg(t,r=>{r&&r.words&&(St[5]=r.words[5]||[],St[7]=r.words[7]||[],Pn())});const e=await $c(t);e&&e.words&&(St[5]=e.words[5]||[],St[7]=e.words[7]||[],Pn())}catch(e){console.error("ルームへの参加に失敗しました:",e),alert("ルームへの参加に失敗しました。もう一度お試しください。")}};window.leaveRoom=function(){Ng(),qc(null),document.getElementById("room-selector").style.display="block",document.getElementById("current-room-info").style.display="none",document.getElementById("room-id-input").value="",St[5]=[],St[7]=[],Pn()};window.addDefaultWords=async function(){const n=Mn();if(!n){alert("先にルームに参加してください");return}const t=xg();await Mg(n,t)||alert("デフォルトの言葉の追加に失敗しました")};window.clearAllWords=async function(){const n=Mn();if(!n){alert("先にルームに参加してください");return}if(!confirm("すべての言葉を削除しますか？"))return;await Og(n)||alert("言葉の削除に失敗しました")};window.toggleWordLists=function(){const n=document.getElementById("words-5"),t=document.getElementById("words-7"),e=document.getElementById("toggle-btn");n.classList.contains("hidden")?(n.classList.remove("hidden"),t.classList.remove("hidden"),e.textContent="言葉リストを隠す"):(n.classList.add("hidden"),t.classList.add("hidden"),e.textContent="言葉リストを表示")};window.resetUsedWords=function(){Ve[5]=[],Ve[7]=[],Pn()};function Lg(n){return n.replace(/[、。!?・\s]/g,"").length}window.addWord=async function(){const n=Mn();if(!n){alert("先にルームに参加してください");return}const t=document.getElementById("word-input"),e=document.getElementById("syllable-type"),r=t.value.trim(),s=e.value;if(!r)return;if(St[s].includes(r)){alert("この言葉は既に登録されています"),t.value="",t.focus();return}await Vg(n,s,r)?(t.value="",t.focus()):alert("言葉の追加に失敗しました")};window.deleteWord=async function(n,t){const e=Mn();if(!e){alert("先にルームに参加してください");return}await Dg(e,n,t)||alert("言葉の削除に失敗しました")};function Oa(n){const t=`words-${n}`,e=document.getElementById(t);e.innerHTML="",St[n].forEach(s=>{const o=document.createElement("li"),a=Lg(s),c=Ve[n].includes(s);o.className=c?"used":"",o.innerHTML=`
            <span class="word-text">
                <span class="word-content">${s}</span>
            </span>
            <span class="char-count">
                <span class="word-content">(${a}文字)</span>
            </span>
            <button class="delete-btn" onclick="deleteWord('${n}', '${s}')">×</button>
        `,e.appendChild(o)});const r=document.createElement("div");r.className="word-count",r.textContent=`計 ${St[n].length} 件`,e.appendChild(r)}function Pn(){Oa("5"),Oa("7")}function lr(n){const t=St[n],e=t.filter(s=>!Ve[n].includes(s));if(e.length===0)return t.length===0?"―":(Ve[n]=[],lr(n));const r=e[Math.floor(Math.random()*e.length)];return Ve[n].push(r),r}window.generateHaiku=function(){if(!Mn()){alert("先にルームに参加してください");return}const t=lr("5"),e=lr("7"),r=lr("5");document.getElementById("line-1").textContent=t,document.getElementById("line-2").textContent=e,document.getElementById("line-3").textContent=r,Pn()};document.addEventListener("DOMContentLoaded",()=>{document.getElementById("room-id-input").addEventListener("keypress",n=>{n.key==="Enter"&&joinRoom()}),document.getElementById("word-input").addEventListener("keypress",n=>{n.key==="Enter"&&addWord()})});
