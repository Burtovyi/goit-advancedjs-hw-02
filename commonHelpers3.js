import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i}from"./assets/vendor-651d7991.js";document.querySelector(".form").addEventListener("submit",v);function d(t,e){return new Promise((n,o)=>{setTimeout(()=>{Math.random()>.3?n({position:t,delay:e}):o({position:t,delay:e})},e)})}function v(t){t.preventDefault();const e=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),o=document.querySelector('input[name="amount"]'),a=parseInt(e.value),m=parseInt(n.value),c=parseInt(o.value);for(let s=0;s<c;s++){const l=s+1,p=a+s*m;d(l,p).then(({position:r,delay:u})=>{i.success({title:"OK",message:`✅ Fulfilled promise ${r} in ${u}ms`})}).catch(({position:r,delay:u})=>{i.error({title:"Error",message:`❌ Rejected promise ${r} in ${u}ms`})})}e.value="",n.value="",o.value=""}
//# sourceMappingURL=commonHelpers3.js.map