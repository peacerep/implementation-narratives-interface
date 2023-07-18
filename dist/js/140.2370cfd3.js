"use strict";(self["webpackChunkimplementation_tracker"]=self["webpackChunkimplementation_tracker"]||[]).push([[140],{7140:function(e,t,i){i.r(t),i.d(t,{default:function(){return I}});var a=i(6252),s=i(3577);const l=e=>((0,a.dD)("data-v-3bee9151"),e=e(),(0,a.Cn)(),e),n={class:"country-layout"},o={class:"breadcrumb"},r={style:{display:"flex","flex-direction":"row","align-items":"center"}},d=l((()=>(0,a._)("p",{style:{padding:"0px 10px"}},"Sort by:",-1))),u={class:"paginationClass"};function p(e,t,i,l,p,c){const g=(0,a.up)("el-link"),m=(0,a.up)("CaretRight"),h=(0,a.up)("el-icon"),w=(0,a.up)("countryHeader"),y=(0,a.up)("el-header"),f=(0,a.up)("el-radio"),_=(0,a.up)("el-radio-group"),v=(0,a.up)("docList"),k=(0,a.up)("el-pagination"),D=(0,a.up)("el-main"),L=(0,a.up)("el-container");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a.Wm)(g,{class:"country-title",onClick:c.home},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1},8,["onClick"]),(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m)])),_:1}),(0,a.Wm)(g,{class:"country-title"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(this.title)+" Agreements",1)])),_:1})]),(0,a.Wm)(w,{title:p.title},null,8,["title"])])),_:1}),(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a._)("div",r,[d,(0,a.Wm)(_,{modelValue:p.reverse,"onUpdate:modelValue":t[0]||(t[0]=e=>p.reverse=e),onChange:t[1]||(t[1]=e=>c.reverseList()),class:"radio-group"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{label:"1"},{default:(0,a.w5)((()=>[(0,a.Uk)("Newest")])),_:1}),(0,a.Wm)(f,{label:"2"},{default:(0,a.w5)((()=>[(0,a.Uk)("Oldest")])),_:1})])),_:1},8,["modelValue"])]),(0,a.Wm)(v,{dataListDisplayed:p.dataListDisplayed.slice(p.sizePerPage*(p.currentPage-1),p.sizePerPage*p.currentPage),title:p.title},null,8,["dataListDisplayed","title"]),(0,a._)("div",u,[(0,a.Wm)(k,{"page-size":p.sizePerPage,total:this.dataListDisplayed.length,"hide-on-single-page":"",onCurrentChange:c.currentChange},null,8,["page-size","total","onCurrentChange"])])])),_:1})])),_:1})])),_:1})])}i(7658);var c=i(2201);const g=e=>((0,a.dD)("data-v-2f0e446a"),e=e(),(0,a.Cn)(),e),m={class:"country"},h=g((()=>(0,a._)("p",null,"Please select an agreement to explore reports on how different provisions and topics were implemented.",-1)));function w(e,t,i,l,n,o){return(0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("h1",null,"Implementation of Past "+(0,s.zw)(i.title)+" Agreements",1),h])}var y={props:["title"]},f=i(3744);const _=(0,f.Z)(y,[["render",w],["__scopeId","data-v-2f0e446a"]]);var v=_,k=i(9963);const D={class:"agt-time"},L={style:{"padding-left":"5px","font-weight":"800"}},C={class:"topic-box"};function W(e,t,i,l,n,o){const r=(0,a.up)("el-link"),d=(0,a.up)("ArrowUpBold"),u=(0,a.up)("el-icon"),p=(0,a.up)("ArrowDownBold"),c=(0,a.up)("el-button");return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.dataListDisplayed,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"doc-list",key:t},[(0,a.Wm)(r,{underline:!1,class:"agt-link",onClick:t=>o.toAgtView(e)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.agt),1)])),_:2},1032,["onClick"]),(0,a._)("p",D,"Signed date: "+(0,s.zw)(e.date),1),(0,a.Wm)(c,{text:"",class:"topic-button",onClick:e=>o.showTopics(t)},{default:(0,a.w5)((()=>[n.openedIndex===t?((0,a.wg)(),(0,a.j4)(u,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(d)])),_:1})):((0,a.wg)(),(0,a.j4)(u,{key:1},{default:(0,a.w5)((()=>[(0,a.Wm)(p)])),_:1})),(0,a._)("p",L,(0,s.zw)(e.topics.length)+" topics found",1)])),_:2},1032,["onClick"]),(0,a.wy)((0,a._)("div",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.topics,(t=>((0,a.wg)(),(0,a.j4)(r,{class:"topic-text",underline:!1,key:t,onClick:i=>o.toAgtView_topic(e,t)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(t),1)])),_:2},1032,["onClick"])))),128))],512),[[k.F8,n.openedIndex===t]])])))),128)}var b={props:["dataListDisplayed","title"],data(){return{country:this.title,openedIndex:-1}},methods:{toAgtView(e){this.$router.push({name:"agreement",query:{title:`${this.country}`,id:`${e.id}`,agtName:`${e.agt}`,agtDate:`${e.date}`,topic:`${e.topics[0]}`}})},toAgtView_topic(e,t){this.$router.push({name:"agreement",query:{title:`${this.country}`,id:`${e.id}`,agtName:`${e.agt}`,agtDate:`${e.date}`,topic:`${t}`}})},showTopics(e){this.openedIndex=this.openedIndex===e?-1:e}},mounted(){console.log(this.dataListDisplayed)}};const x=(0,f.Z)(b,[["render",W],["__scopeId","data-v-b4eb5f9c"]]);var P=x,$=i(1634),z={components:{countryHeader:v,docList:P},data(){return{title:this.countryName,dataListDisplayed:this.agreementList,allAgt:this.agreementList,allOptions:this.topicOptions,filterList:[{title:"agreements by topics",value:this.topicOptions},{title:"agreements by years",value:this.yearOptions}],sizePerPage:6,currentPage:1,reverse:"1"}},methods:{changeDisplayList(e){this.dataListDisplayed=e,console.log("displayed",this.dataListDisplayed)},currentChange(e){this.currentPage=e},home(){this.$router.push("/")},reverseList(){this.reverse&&(this.dataListDisplayed=this.dataListDisplayed.reverse())}},mounted(){this.reverseList()},setup(){const e=(0,c.yj)();let t=e.query.title,i={},a=[];for(let u of $.h)u.name==t&&(i=u);let s="",l=[],n="",o="",r=[],d=[];for(let u of i.topics){s=u.text,l.push(s);for(let e of u.agreements){n=e.name,o=e.id;let t="";if(0==d.includes(n)){d.push(n);let i=e.date.toString(),l=i.slice(0,4),u=i.slice(4,6),p=i.slice(6,8);t=l+"-"+u+"-"+p,0==r.includes(l)&&r.push(l),a.push({agt:n,id:o,date:t,year:l,topics:[s]})}else for(let e of a)e.agt==n&&e.topics.push(s)}}return a.sort((function(e,t){return new Date(e.date)-new Date(t.date)})),{countryName:t,data:i,agreementList:a,topicOptions:l,yearOptions:r}}};const A=(0,f.Z)(z,[["render",p],["__scopeId","data-v-3bee9151"]]);var I=A}}]);
//# sourceMappingURL=140.2370cfd3.js.map