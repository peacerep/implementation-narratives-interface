"use strict";(self["webpackChunkimplementation_tracker"]=self["webpackChunkimplementation_tracker"]||[]).push([[757],{2973:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(6252),i=r(3577);const o={class:"inner-drawer"},s=["innerHTML"];function a(e,t,r,a,l,c){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("h1",null,(0,i.zw)(l.title),1),(0,n._)("div",{id:"doc",innerHTML:l.document},null,8,s)])}var l=-1,c={props:["id","docDrawerOpen","country","agtId","agtName"],data(){return{agt:"",title:"",document:document}},methods:{loadDocument(){this.agt=this.agtId,this.title=this.agtName;let e=this.country,t=e.replace(/\s+/g,"_").toLowerCase(),r=new XMLHttpRequest;const n="./docsHtml/"+t+"/agreements/"+this.agt+".html";r.open("GET",n,!1),r.setRequestHeader("Content-type","text/html"),r.send(),this.document=r.response},do_highlight(e){l=e;let t="div[id='doc'] a[id='"+l+"']",r=document.querySelector(`${t}`);r.style.background="yellow"},clear_highlight(){if(l>-1){let e="div[id='doc'] a[id='"+l+"']";document.querySelector(`${e}`).style.background="white",l=-1}},force_scrolling(e){setTimeout((function(){let t="div[id='doc'] a[id='"+e+"']",r=document.querySelector(`${t}`);r.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}),300)}},created(){this.loadDocument()},mounted(){this.do_highlight(this.id),this.force_scrolling(this.id)},watch:{docDrawerOpen:function(){1==this.docDrawerOpen&&(this.loadDocument(),this.$nextTick((()=>{this.clear_highlight(),this.do_highlight(this.id),this.force_scrolling(this.id)})))}}},p=r(3744);const d=(0,p.Z)(c,[["render",a]]);var m=d},6532:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(6252),i=r(3577),o=r(9963);const s={class:"report-head"},a={class:"switch-container"},l={class:"inner-drawer"},c=["innerHTML"];function p(e,t,r,p,d,m){const u=(0,n.up)("ArrowLeft"),g=(0,n.up)("el-icon"),h=(0,n.up)("el-button"),w=(0,n.up)("ArrowRight"),f=(0,n.up)("el-button-group");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",s,[(0,n._)("h2",null,(0,i.zw)(this.report.name),1),(0,n._)("div",a,[(0,n._)("p",null,(0,i.zw)(this.allIDs.length)+" segments highlighted ",1),(0,n.wy)((0,n.Wm)(f,{class:"button-wrapper"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{onClick:t[0]||(t[0]=e=>m.force_scrolling(-1))},{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u)])),_:1}),(0,n.Uk)("Previous")])),_:1}),(0,n.Wm)(h,{onClick:t[1]||(t[1]=e=>m.force_scrolling(1))},{default:(0,n.w5)((()=>[(0,n.Uk)("Next"),(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(w)])),_:1})])),_:1})])),_:1},512),[[o.F8,d.nextLineVisible]])])]),(0,n._)("div",l,[(0,n._)("div",{id:"repo",innerHTML:e.reportText},null,8,c)])],64)}r(7658);var d=r(5781);let m=0;var u={props:["report","allIDs","reportDrawerOpen","country"],components:{ArrowLeft:d.ArrowLeft},data(){return{tmpArr:[],currentIndex:0,nextLineVisible:!1,folderName:"",sortedIDs:[]}},methods:{do_highlight(e){this.tmpArr=e;for(let t of e){let e="div[id='repo'] a[id='"+t+"']",r=document.querySelector(`${e}`);r.style.background="yellow"}},force_scrolling(e){let t=this.allIDs.length,r=[],n=JSON.parse(JSON.stringify(this.allIDs));for(let a of n)a=parseInt(a),r.push(a);r.sort((function(e,t){return e-t})),m>=-1&&m<t-1?(m+=e,-1==e&&(m=0,this.$message("back to the top."))):(m=0,this.$message("back to the top."));let i=r[m],o="div[id='repo'] a[id='"+i+"']",s=document.querySelector(`${o}`);s.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},show(e){e.length>1?this.nextLineVisible=!0:this.nextLineVisible=!1},getReport(){let e=new XMLHttpRequest;const t="./docsHtml/"+this.folderName+"/reports/"+this.report.id+".html";e.open("GET",t,!1),e.setRequestHeader("Content-type","text/html"),e.send(),this.reportText=e.response},defaultScroll(){let e=[],t=JSON.parse(JSON.stringify(this.allIDs));for(let o of t)o=parseInt(o),e.push(o);e.sort((function(e,t){return e-t})),this.sortedIDs=e;let r=this.sortedIDs[0],n="div[id='repo'] a[id='"+r+"']",i=document.querySelector(`${n}`);setTimeout((function(){i.scrollIntoView({behavior:"auto",block:"center",inline:"nearest"})}),100)}},created(){let e=this.country,t=e.replace(/\s+/g,"_").toLowerCase();this.folderName=t,this.getReport(),this.show(this.allIDs)},mounted(){const e=this;setTimeout((function(){e.do_highlight(e.allIDs),e.defaultScroll()}),100)},watch:{reportDrawerOpen:function(){if(1==this.reportDrawerOpen){this.getReport(),this.show(this.allIDs),m=0;const e=this;setTimeout((function(){e.do_highlight(e.allIDs),e.defaultScroll()}),50)}}}},g=r(3744);const h=(0,g.Z)(u,[["render",p],["__scopeId","data-v-256faaff"]]);var w=h},5757:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var n=r(6252),i=r(3577);const o={class:"agt-head"},s={class:"breadcrumb"},a=(0,n._)("p",null,"Click agreement to explore implementation.",-1),l={class:"tracker"},c=["onClick"],p={class:"date-column"},d={class:"date-column-ddmm"},m={class:"date-column-yyyy"},u={class:"info-column"},g={class:"agt-in-topic"},h={key:0,class:"provision-container"},w=(0,n._)("h3",null,"Agreement Provisions",-1),f=(0,n._)("p",{class:"counters",style:{"font-style":"italic"}},"Click provision to view/fold",-1),y=(0,n._)("h3",null,"Implementation Instances",-1),_=(0,n._)("p",{class:"counters",style:{"font-style":"italic"}},"Since agreement signed",-1),v={class:"text-container"},k=["onClick"],D=(0,n._)("div",{id:"if-empty"},null,-1),b={class:"source-wrapper"},I={class:"repo-source"},x={class:"segment-text"},C={key:0},S={key:1},W={key:2};function A(e,t,r,A,T,O){const L=(0,n.up)("tracker-header"),U=(0,n.up)("el-link"),F=(0,n.up)("CaretRight"),P=(0,n.up)("el-icon"),z=(0,n.up)("el-divider"),M=(0,n.up)("el-col"),N=(0,n.up)("el-row"),E=(0,n.up)("el-button"),R=(0,n.up)("el-tag"),H=(0,n.up)("el-card"),V=(0,n.up)("el-timeline-item"),q=(0,n.up)("el-timeline"),$=(0,n.up)("el-scrollbar"),Y=(0,n.up)("docDrawerTopic"),Z=(0,n.up)("el-drawer"),J=(0,n.up)("reportDrawerTopic"),j=(0,n.up)("trackerFooter");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(L),(0,n._)("div",o,[(0,n._)("div",s,[(0,n.Wm)(U,{class:"country-title",onClick:O.home},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1},8,["onClick"]),(0,n.Wm)(P,null,{default:(0,n.w5)((()=>[(0,n.Wm)(F)])),_:1}),(0,n.Wm)(U,{id:"drawer",class:"country-title",onClick:t[0]||(t[0]=e=>O.toCountryView(this.countryName))},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(this.countryName)+" Topics",1)])),_:1}),(0,n.Wm)(P,null,{default:(0,n.w5)((()=>[(0,n.Wm)(F)])),_:1}),(0,n.Wm)(U,{class:"country-title current-page"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(this.topicCategory),1)])),_:1}),(0,n.Wm)(P,null,{default:(0,n.w5)((()=>[(0,n.Wm)(F)])),_:1}),(0,n.Wm)(U,{class:"country-title current-page"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(this.subCategory),1)])),_:1})]),(0,n._)("h1",null,(0,i.zw)(this.subCategory),1),a]),(0,n._)("div",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(O.sortedAgreements,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"section-wrapper",key:e.id},[(0,n._)("div",{onClick:t=>O.toggleAgreement(e),class:"agreement-container"},[(0,n._)("div",p,[(0,n._)("p",d,(0,i.zw)(O.formatDate(e.date).dayMonth),1),(0,n._)("p",m,(0,i.zw)(O.formatDate(e.date).year),1)]),(0,n._)("div",u,[(0,n._)("h2",g,(0,i.zw)(e.name),1),(0,n._)("p",null,(0,i.zw)(O.getPaxData(e.id).agtDescription),1)])],8,c),T.selectedAgreementId===e.id?((0,n.wg)(),(0,n.iD)("div",h,[(0,n.Wm)(z),(0,n.Wm)(N,{justify:"center",gutter:15,class:"section-wrapper"},{default:(0,n.w5)((()=>[(0,n.Wm)(M,{span:12},{default:(0,n.w5)((()=>[w,f])),_:1}),(0,n.Wm)(M,{span:12},{default:(0,n.w5)((()=>[y,_])),_:1})])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.provisions,((t,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"provision",key:t},[(0,n.Wm)(N,{justify:"center",gutter:15,class:"section-wrapper"},{default:(0,n.w5)((()=>[(0,n.Wm)(M,{span:12},{default:(0,n.w5)((()=>[(0,n._)("div",v,[(0,n._)("p",{class:(0,i.C_)(["agt-extracts-topic",{changeStyle:T.changeStyleIndex==r}]),onClick:e=>O.toggleProvision(t.number,t.reports)}," ..."+(0,i.zw)(t.text)+"... ",11,k),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.topicTexts,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"topic-container"},[(0,n._)("p",null,(0,i.zw)(e),1)])))),128))])])),_:2},1024),(0,n.Wm)(M,{span:12,style:{padding:"20px 0px"}},{default:(0,n.w5)((()=>[D,T.selectedProvisionNumber===t.number?((0,n.wg)(),(0,n.j4)($,{key:0,"max-height":"80vh"},{default:(0,n.w5)((()=>[(0,n.Wm)(q,{class:"timeline"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.reports,(t=>((0,n.wg)(),(0,n.j4)(V,{key:t,timestamp:O.computeTimeDif(t.date,e.date),placement:"top"},{default:(0,n.w5)((()=>[(0,n.Wm)(H,null,{default:(0,n.w5)((()=>[(0,n._)("h3",null,(0,i.zw)(t.name),1),(0,n._)("div",b,[(0,n._)("p",I,"Source: "+(0,i.zw)(t.organisation),1),(0,n.Wm)(E,{round:"",size:"small",style:{"margin-left":"10px"},onClick:e=>O.openReportDrawer(t.id,t)},{default:(0,n.w5)((()=>[(0,n.Uk)(" Open Full Report ")])),_:2},1032,["onClick"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.segments,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"segment-container"},[(0,n._)("div",null,[(0,n.Wm)(N,{class:"segment-wrapper"},{default:(0,n.w5)((()=>[(0,n.Wm)(M,{span:22},{default:(0,n.w5)((()=>[(0,n._)("p",x,(0,i.zw)(e.text),1)])),_:2},1024),(0,n.Wm)(M,{span:2},{default:(0,n.w5)((()=>[e.polarity>0?((0,n.wg)(),(0,n.iD)("div",C,[(0,n.Wm)(R,{effect:"plain",type:"success",size:"small",round:""},{default:(0,n.w5)((()=>[(0,n.Uk)(" positive ")])),_:1})])):e.polarity<0?((0,n.wg)(),(0,n.iD)("div",S,[(0,n.Wm)(R,{effect:"plain",type:"danger",size:"small",round:""},{default:(0,n.w5)((()=>[(0,n.Uk)(" negative ")])),_:1})])):((0,n.wg)(),(0,n.iD)("div",W,[(0,n.Wm)(R,{effect:"plain",type:"info",size:"small",round:""},{default:(0,n.w5)((()=>[(0,n.Uk)(" neutral ")])),_:1})]))])),_:2},1024)])),_:2},1024)])])))),128))])),_:2},1024)])),_:2},1032,["timestamp"])))),128))])),_:2},1024)])),_:2},1024)):(0,n.kq)("",!0)])),_:2},1024)])),_:2},1024)])))),128))])):(0,n.kq)("",!0)])))),128))]),(0,n.Wm)(Z,{modelValue:T.docDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=e=>T.docDrawerOpen=e),direction:T.direction,title:"Agreement full text",size:"45%"},{default:(0,n.w5)((()=>[(0,n.Wm)(Y,{ref:"docDrawer",agtId:this.selectedAgreementId,agtName:this.clickedAgt,id:this.segement_id,docDrawerOpen:T.docDrawerOpen,country:this.countryName},null,8,["agtId","agtName","id","docDrawerOpen","country"])])),_:1},8,["modelValue","direction"]),(0,n.Wm)(Z,{modelValue:T.reportDrawerOpen,"onUpdate:modelValue":t[2]||(t[2]=e=>T.reportDrawerOpen=e),title:"Report full text",size:"45%"},{default:(0,n.w5)((()=>[(0,n.Wm)(J,{report:this.selectedReport,reportDrawerOpen:T.reportDrawerOpen,allIDs:T.allIDs,country:this.countryName},null,8,["report","reportDrawerOpen","allIDs","country"])])),_:1},8,["modelValue"]),(0,n.Wm)(j)],64)}r(7658);var T=r(2201),O=r(8589),L=r(3746),U=r(2973),F=r(6532),P=r(1634),z=r(6672),M={components:{trackerHeader:O.Z,trackerFooter:L.Z,docDrawerTopic:U.Z,reportDrawerTopic:F.Z},data(){return{changeStyleIndex:"",provisionClicked:"",displayed:[],reportDate:"",reportCounter:0,selectedAgreementId:null,selectedProvisionNumber:null,hoveredReportID:null,buttonVisible:0,docDrawerOpen:!1,doc_id:0,segement_id:0,direction:"ltr",agt_id:0,clickedAgt:"",reportbuttonVisible:999,reportDrawerOpen:!1,selectedReport:[],allIDs:[]}},methods:{home(){this.$router.push("/")},toCountryView(e){this.$router.push({name:"country",query:{title:`${e}`}})},changeStyle(e){this.changeStyleIndex=e},toggleAgreement(e){this.selectedAgreementId===e.id?this.selectedAgreementId=null:this.selectedAgreementId=e.id},toggleProvision(e,t){let r=t.length;if(this.selectedProvisionNumber===e)this.selectedProvisionNumber=null;else{this.selectedProvisionNumber=e;const t=document.querySelector("#if-empty");t.innerHTML=0==r?"<p>We found no instances of implementation found for this provision topic.</p>":""}},formatDate(e){const t=String(e),r=t.substring(0,4),n=parseInt(t.substring(4,6),10)-1,i=t.substring(6,8),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=o[n];return{dayMonth:`${i} ${s}`,year:r}},getPaxData(e){let t="",r="";for(let n of z)if(e==n.agreementID){t=n.hyperlink_pax,r=n.description;break}return{paxLink:t,agtDescription:r}},computeTimeDif(e,t){const r=e=>{const t=String(e),r=t.substring(0,4),n=t.substring(4,6)-1,i=t.substring(6,8);return new Date(r,n,i)},n=r(e),i=r(t),o=n.getMonth()-i.getMonth(),s=n.getFullYear()-i.getFullYear(),a=o+12*s;let l,c,p,d="",m=0;if(p=Math.floor(a/12),d=1===p?p+" year ":p+" years ",m=a-12*p,c=1===m?m+" month ":0===m?"":m+" months ",a>=12)l=d+c+"after agreement";else if(a>0&&a<12)l=c+"after agreement";else{const e=n.getDate()-i.getDate();l=e+" days after agreement"}const u=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`,g=u+" | "+l;return g},openDrawer(e,t,r){this.docDrawerOpen=!0,this.segement_id=e,this.agt_id=t,this.clickedAgt=r},openReportDrawer(e,t){this.reportDrawerOpen=!0,this.selectedReport=t;var r=[];for(let n of this.selectedReport.segments)r.push(n.number);this.allIDs=r}},computed:{sortedAgreements(){return this.topicData.agreements.slice().sort(((e,t)=>t.date-e.date))}},setup(){const e=(0,T.yj)();let t=e.query.subCategory,r=e.query.country,n={};var i="",o=[];let s=new Map;for(let c of P.h)if(c.name==r){n=c;for(let e of n.topics)e.category.forEach((r=>{let n=r[0],a=r[1];t==a&&(i=n,e.agreements.forEach((t=>{s.has(t.id)||s.set(t.id,[]),s.get(t.id).push(e.text)})),e.agreements.forEach((e=>{o.some((t=>t.id===e.id))||o.push(e)})))}))}let a={};o.forEach((e=>{if(a[e.id]){let t=a[e.id].provisions,r=e.provisions,n=new Map(t.map((e=>[e.number,e])));r.forEach((e=>{n.has(e.number)||n.set(e.number,e)})),a[e.id].provisions=Array.from(n.values())}else a[e.id]={...e}}));for(const[c,p]of Object.entries(a))for(const e of p.provisions)e.topicTexts=s.get(c);let l={agreements:Object.values(a)};return{topicData:l,topicList:o,subCategory:t,countryName:r,topicCategory:i}}},N=r(3744);const E=(0,N.Z)(M,[["render",A]]);var R=E},6672:function(e){e.exports=JSON.parse('[{"agreementID":930,"version":1,"date_signed":"2014/6/20","country":"Ukraine","description":"Unilateral ceasefire declaration by Government of Ukraine under defined terms, aimed at creating conditions for the staged implementation of the Peace plan being discussed within the framework of Trilateral Contact Group. ","hyperlink_pdf":"https://www.peaceagreements.org/viewmasterdocument/930","hyperlink_pax":"https://www.peaceagreements.org/view/930","hyperlink_provision_export":"https://www.peaceagreements.org/viewmasterdocument/930","FIELD9":"https://www.peaceagreements.org/generateAgreementPDF/930"},{"agreementID":1362,"version":1,"date_signed":"2014/9/19","country":"Ukraine","description":"This short nine point agreement details plans for a bilateral ceasefire, in order to fulfill point 1 of the Protocol based on consultations of the trilateral contact group. It details that the ceasefire should begin on September 19 2015, bans on leathal weapons, heavy weapons, and mines and explosives, and the role of the OSCE monitoring mission. ","hyperlink_pdf":"https://www.peaceagreements.org/viewmasterdocument/1362","hyperlink_pax":"https://www.peaceagreements.org/view/1362","hyperlink_provision_export":"https://www.peaceagreements.org/viewmasterdocument/1362","FIELD9":"https://www.peaceagreements.org/generateAgreementPDF/1362"},{"agreementID":1363,"version":1,"date_signed":"2014/9/5","country":"Ukraine","description":"This protocol contains twelve steps for implementation, resulting from the Trilateral Contact Group consultations in Minsk, and the separate initiatives proposed by the President of Ukraine, Petro Poroshenko, and the President of Russia, Vladimir Putin. The steps include: an immediate ceasefire; decentralization of power; monitoring by the OSCE; prisoner release; an amnesty law and early local elections in Donetsk and Lugansk regions. ","hyperlink_pdf":"https://www.peaceagreements.org/viewmasterdocument/1363","hyperlink_pax":"https://www.peaceagreements.org/view/1363","hyperlink_provision_export":"https://www.peaceagreements.org/viewmasterdocument/1363","FIELD9":"https://www.peaceagreements.org/generateAgreementPDF/1363"},{"agreementID":1364,"version":1,"date_signed":"2015/2/12","country":"Ukraine","description":"Short agreement outlining the modalities for implementing the Minsk Agreement, including establishing a ceasefire, a OSCE-led monitoring mission, and a devolution of powers to the two regions of Donetsk and Luhansk.","hyperlink_pdf":"https://www.peaceagreements.org/viewmasterdocument/1364","hyperlink_pax":"https://www.peaceagreements.org/view/1364","hyperlink_provision_export":"https://www.peaceagreements.org/viewmasterdocument/1364","FIELD9":"https://www.peaceagreements.org/generateAgreementPDF/1364"},{"agreementID":2117,"version":2,"date_signed":"2018/3/2","country":"Ukraine","description":"The parties reaffirm commitment to ceasefire and Minsk agreements","hyperlink_pdf":"https://www.peaceagreements.org/viewmasterdocument/2117","hyperlink_pax":"https://www.peaceagreements.org/view/2117","hyperlink_provision_export":"https://www.peaceagreements.org/viewmasterdocument/2117","FIELD9":"https://www.peaceagreements.org/generateAgreementPDF/2117"},{"agreementID":2118,"version":2,"date_signed":"2018/3/26","country":"Ukraine","description":"In this agreement, the Trilateral Contact Group (Ukraine, Russia, OSCE) reaffirm commitment to a ceasefireand the implementation of the Minsk agreements","hyperlink_pdf":"https://www.peaceagreements.org/viewmasterdocument/2118","hyperlink_pax":"https://www.peaceagreements.org/view/2118","hyperlink_provision_export":"https://www.peaceagreements.org/viewmasterdocument/2118","FIELD9":"https://www.peaceagreements.org/generateAgreementPDF/2118"},{"agreementID":2236,"version":3,"date_signed":"2019/7/17","country":"Ukraine","description":"This agreement provides for a renewal of a ceasefire and reaffirms commitment to Minsk agreements.  ","hyperlink_pdf":"https://www.peaceagreements.org/viewmasterdocument/2236","hyperlink_pax":"https://www.peaceagreements.org/view/2236","hyperlink_provision_export":"https://www.peaceagreements.org/viewmasterdocument/2236","FIELD9":"https://www.peaceagreements.org/generateAgreementPDF/2236"},{"agreementID":2260,"version":3,"date_signed":"2019/12/9","country":"Ukraine","description":"The presidents of France, Russia, Ukraine, and the German Chancellor agree to measures to stabilize the conflict area in Ukraine, by implementing a ceasefire, engaging in demining, prisoner release, and provision of access to OSCE Special Monitoring Mission in Ukraine. They also consider it necessary that the \'Steinmeier formula\' (sequencing of agreement implementation) be incorporated in Ukrainian legislation. ","hyperlink_pdf":"https://www.peaceagreements.org/viewmasterdocument/2260","hyperlink_pax":"https://www.peaceagreements.org/view/2260","hyperlink_provision_export":"https://www.peaceagreements.org/viewmasterdocument/2260","FIELD9":"https://www.peaceagreements.org/generateAgreementPDF/2260"},{"agreementID":2440,"version":6,"date_signed":"2020/7/22","country":"Ukraine","description":"A short agreement to strengthen the ceasefire in the Donetsk and Luhansk regions of Ukraine. This includes banning the use of certain weapons and certain types of attacks, as well as laying rules for engagement such as retaliatory fire and discipline for members who break the rules of engagement.  This agreement appears on the source website as a news item, and embedded in what looks like a press release; however, the text appears complete and is included in PA-X on the basis of this assessment of completeness. ","hyperlink_pdf":"https://www.peaceagreements.org/viewmasterdocument/2440","hyperlink_pax":"https://www.peaceagreements.org/view/2440","hyperlink_provision_export":"https://www.peaceagreements.org/viewmasterdocument/2440","FIELD9":"https://www.peaceagreements.org/generateAgreementPDF/2440"},{"agreementID":2112,"version":2,"date_signed":"2018/9/12","country":"South Sudan","description":"A comprehensive agreement aiming to \'revitalise\' the earlier transitional agreement, which in-essence sets out a revised comprehensive framework for the transition from conflict. ","hyperlink_pdf":"https://www.peaceagreements.org/viewmasterdocument/2112","hyperlink_pax":"https://www.peaceagreements.org/view/2112","hyperlink_provision_export":"https://www.peaceagreements.org/viewmasterdocument/2112","FIELD9":"https://www.peaceagreements.org/generateAgreementPDF/2112"}]')}}]);
//# sourceMappingURL=757.040e8f84.js.map