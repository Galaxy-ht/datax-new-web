(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-989aaba4"],{"2b10":function(e,t,r){"use strict";r.d(t,"e",(function(){return n})),r.d(t,"j",(function(){return i})),r.d(t,"h",(function(){return o})),r.d(t,"i",(function(){return s})),r.d(t,"c",(function(){return c})),r.d(t,"k",(function(){return l})),r.d(t,"b",(function(){return u})),r.d(t,"g",(function(){return d})),r.d(t,"f",(function(){return f})),r.d(t,"d",(function(){return h})),r.d(t,"a",(function(){return m}));var a=r("b775");function n(e){return Object(a["a"])({url:"api/job/pageList",method:"get",params:e})}function i(e){return Object(a["a"])({url:"/api/job/trigger",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/api/job/start?id="+e,method:"post"})}function s(e){return Object(a["a"])({url:"/api/job/stop?id="+e,method:"post"})}function c(){return Object(a["a"])({url:"api/jobGroup/list",method:"get"})}function l(e){return Object(a["a"])({url:"/api/job/update",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/api/job/add/",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/api/job/remove/"+e,method:"post"})}function f(e){return Object(a["a"])({url:"/api/job/nextTriggerTime?cron="+e,method:"get"})}function h(e){return Object(a["a"])({url:"api/job/list",method:"get",params:e})}function m(e){return Object(a["a"])({url:"/api/job/batchAdd",method:"post",data:e})}},"2cbf":function(e,t,r){"use strict";r("653b")},"333d":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[r("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},n=[];r("c5f6");Math.easeInOutQuad=function(e,t,r,a){return e/=a/2,e<1?r/2*e*e+t:(e--,-r/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(e,t,r){var a=s(),n=e-a,c=20,l=0;t="undefined"===typeof t?500:t;var u=function e(){l+=c;var s=Math.easeInOutQuad(l,a,n,t);o(s),l<t?i(e):r&&"function"===typeof r&&r()};u()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&c(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&c(0,800)}}},u=l,d=(r("2cbf"),r("2877")),f=Object(d["a"])(u,a,n,!1,null,"6af373ef",null);t["a"]=f.exports},"3a8d":function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"f",(function(){return o})),r.d(t,"a",(function(){return s})),r.d(t,"e",(function(){return c})),r.d(t,"d",(function(){return l}));var a=r("b775");function n(e){return Object(a["a"])({url:"api/jobTemplate/pageList",method:"get",params:e})}function i(){return Object(a["a"])({url:"api/jobGroup/list",method:"get"})}function o(e){return Object(a["a"])({url:"/api/jobTemplate/update",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/api/jobTemplate/add/",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/api/jobTemplate/remove/"+e,method:"post"})}function l(e){return Object(a["a"])({url:"/api/jobTemplate/nextTriggerTime?cron="+e,method:"get"})}},"3b31":function(e,t,r){"use strict";r("9693")},"653b":function(e,t,r){},"6ee6":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"build-container"},[r("el-steps",{attrs:{active:e.active,"finish-status":"success"}},[r("el-step",{attrs:{title:"步骤 1",description:"构建reader"}},[e._v("1")]),e._v(" "),r("el-step",{attrs:{title:"步骤 2",description:"构建writer"}},[e._v("2")]),e._v(" "),r("el-step",{attrs:{title:"步骤 3",description:"表映射"}},[e._v("3")]),e._v(" "),r("el-step",{attrs:{title:"步骤 4",description:"批量创建"}},[e._v("4")])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1===e.active,expression:"active===1"}],staticClass:"step1"},[r("Reader",{ref:"reader"})],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:2===e.active,expression:"active===2"}],staticClass:"step2"},[r("Writer",{ref:"writer"})],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:3===e.active,expression:"active===3"}],staticClass:"step3"},[r("Mapper",{ref:"mapper"})],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:4===e.active,expression:"active===4"}],staticClass:"step4"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleJobTemplateSelectDrawer}},[e._v(e._s(e.jobTemplate?e.jobTemplate:"1.选择模板"))]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.createJob}},[e._v("2.批量创建任务")]),e._v("\n      (步骤：选择模板->批量创建任务)\n      "),r("el-drawer",{ref:"jobTemplateSelectDrawer",attrs:{title:"选择模板",visible:e.jobTemplateSelectDrawer,direction:"rtl",size:"50%"},on:{"update:visible":function(t){e.jobTemplateSelectDrawer=t}}},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","destroy-on-close":"true"},on:{"current-change":e.handleCurrentChange}},[r("el-table-column",{attrs:{align:"center",label:"任务ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"任务描述",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jobDesc))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"所属项目",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jobProject))]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"Cron",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.jobCron))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"路由策略",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.routeStrategies.find((function(e){return e.value===t.row.executorRouteStrategy})).label))]}}])})],1),e._v(" "),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}})],1),e._v(" "),r("div",{staticStyle:{"margin-bottom":"20px"}})],1),e._v(" "),r("div",{staticClass:"btn-group"},[r("el-button",{staticStyle:{"margin-top":"12px"},attrs:{disabled:1===e.active},on:{click:e.last}},[e._v("上一步")]),e._v(" "),r("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"primary"},on:{click:e.next}},[e._v("下一步")])],1)],1)])},n=[],i=r("3a8d"),o=r("2b10"),s=r("333d"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("TableReader",{ref:"tablereader",on:{selectDataSource:e.showDataSource}})],1)},l=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{attrs:{"label-position":"right","label-width":"120px",model:e.readerForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"数据库源：",prop:"datasourceId"}},[r("el-select",{staticStyle:{width:"300px"},attrs:{filterable:""},on:{change:e.rDsChange},model:{value:e.readerForm.datasourceId,callback:function(t){e.$set(e.readerForm,"datasourceId",t)},expression:"readerForm.datasourceId"}},e._l(e.rDsList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.datasourceName,value:e.id}})})),1)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"postgresql"===e.dataSource||"oracle"===e.dataSource||"sqlserver"===e.dataSource,expression:"dataSource==='postgresql' || dataSource==='oracle' ||dataSource==='sqlserver'"}],attrs:{label:"Schema："}},[r("el-select",{staticStyle:{width:"300px"},attrs:{filterable:""},on:{change:e.schemaChange},model:{value:e.readerForm.tableSchema,callback:function(t){e.$set(e.readerForm,"tableSchema",t)},expression:"readerForm.tableSchema"}},e._l(e.schemaList,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"切分字段："}},[r("el-input",{staticStyle:{width:"13%"},attrs:{placeholder:"切分主键"},model:{value:e.readerForm.splitPk,callback:function(t){e.$set(e.readerForm,"splitPk",t)},expression:"readerForm.splitPk"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"数据库表名："}},[r("el-checkbox",{attrs:{indeterminate:e.readerForm.isIndeterminate},on:{change:e.rHandleCheckAllChange},model:{value:e.readerForm.checkAll,callback:function(t){e.$set(e.readerForm,"checkAll",t)},expression:"readerForm.checkAll"}},[e._v("全选\n      ")]),e._v(" "),r("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),r("el-checkbox-group",{on:{change:e.rHandleCheckedChange},model:{value:e.readerForm.tables,callback:function(t){e.$set(e.readerForm,"tables",t)},expression:"readerForm.tables"}},e._l(e.rTbList,(function(t){return r("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)],1)},d=[],f=(r("7514"),r("f352")),h=r("7e39"),m=r("2b0e"),p=new m["default"]({data:function(){return{dataSourceId:""}}}),b={name:"TableReader",data:function(){return{jdbcDsQuery:{current:1,size:200,ascs:"datasource_name"},rDsList:[],rTbList:[],schemaList:[],loading:!1,active:1,customFields:"",customType:"",customValue:"",dataSource:"",readerForm:{datasourceId:void 0,tables:[],checkAll:!1,isIndeterminate:!0,splitPk:"",tableSchema:""},rules:{datasourceId:[{required:!0,message:"this is required",trigger:"change"}],tableName:[{required:!0,message:"this is required",trigger:"change"}]}}},watch:{"readerForm.datasourceId":function(e,t){"postgresql"===this.dataSource||"oracle"===this.dataSource||"sqlserver"===this.dataSource?this.getSchema():this.getTables("reader")}},created:function(){this.getJdbcDs()},methods:{getJdbcDs:function(){var e=this;this.loading=!0,Object(h["e"])(this.jdbcDsQuery).then((function(t){var r=t.records;e.rDsList=r,e.loading=!1}))},getTables:function(e){var t=this;if("reader"===e){var r={};r="postgresql"===this.dataSource||"oracle"===this.dataSource||"sqlserver"===this.dataSource?{datasourceId:this.readerForm.datasourceId,tableSchema:this.readerForm.tableSchema}:{datasourceId:this.readerForm.datasourceId},f["e"](r).then((function(e){e&&(t.rTbList=e)}))}},getSchema:function(){var e=this,t={datasourceId:this.readerForm.datasourceId};f["d"](t).then((function(t){e.schemaList=t}))},schemaChange:function(e){this.readerForm.tableSchema=e,this.getTables("reader")},rDsChange:function(e){var t=this;this.readerForm.tableName="",this.readerForm.datasourceId=e,this.rDsList.find((function(r){r.id===e&&(t.dataSource=r.datasource)})),p.dataSourceId=e,this.$emit("selectDataSource",this.dataSource),this.getTables("reader")},rHandleCheckAllChange:function(e){this.readerForm.tables=e?this.rTbList:[],this.readerForm.isIndeterminate=!1},rHandleCheckedChange:function(e){var t=e.length;this.readerForm.checkAll=t===this.rTbList.length,this.readerForm.isIndeterminate=t>0&&t<this.rTbList.length},getData:function(){return p.dataSourceId&&(this.readerForm.datasourceId=p.dataSourceId),this.readerForm}}},g=b,v=r("2877"),y=Object(v["a"])(g,u,d,!1,null,null,null),S=y.exports,w={name:"Reader",components:{TableReader:S},data:function(){return{dataSource:""}},methods:{getData:function(){return this.$refs.tablereader.getData()},showDataSource:function(e){this.dataSource=e,this.getData()}}},k=w,T=Object(v["a"])(k,c,l,!1,null,null,null),_=T.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("TableWriter",{ref:"tablewriter",on:{selectDataSource:e.showDataSource}})],1)},x=[],F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{attrs:{"label-position":"right","label-width":"150px",model:e.writerForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"数据库源：",prop:"datasourceId"}},[r("el-select",{staticStyle:{width:"300px"},attrs:{filterable:""},on:{change:e.wDsChange},model:{value:e.writerForm.datasourceId,callback:function(t){e.$set(e.writerForm,"datasourceId",t)},expression:"writerForm.datasourceId"}},e._l(e.wDsList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.datasourceName,value:e.id}})})),1)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"postgresql"===e.dataSource||"oracle"===e.dataSource||"sqlserver"===e.dataSource,expression:"dataSource==='postgresql' || dataSource==='oracle' ||dataSource==='sqlserver'"}],attrs:{label:"Schema："}},[r("el-select",{staticStyle:{width:"300px"},attrs:{filterable:""},on:{change:e.schemaChange},model:{value:e.writerForm.tableSchema,callback:function(t){e.$set(e.writerForm,"tableSchema",t)},expression:"writerForm.tableSchema"}},e._l(e.schemaList,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),e._v(" "),r("div",{staticStyle:{margin:"5px 0"}}),e._v(" "),r("el-form-item",{attrs:{label:"数据库表名："}},[r("el-checkbox",{attrs:{indeterminate:e.writerForm.isIndeterminate},on:{change:e.wHandleCheckAllChange},model:{value:e.writerForm.checkAll,callback:function(t){e.$set(e.writerForm,"checkAll",t)},expression:"writerForm.checkAll"}},[e._v("全选")]),e._v(" "),r("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),r("el-checkbox-group",{on:{change:e.wHandleCheckedChange},model:{value:e.writerForm.tables,callback:function(t){e.$set(e.writerForm,"tables",t)},expression:"writerForm.tables"}},e._l(e.wTbList,(function(t){return r("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)],1)},C=[],D=new m["default"]({data:function(){return{dataSourceId:""}}}),E={name:"TableWriter",data:function(){return{jdbcDsQuery:{current:1,size:200,ascs:"datasource_name"},wDsList:[],schemaList:[],fromTableName:"",wTbList:[],dataSource:"",createTableName:"",writerForm:{datasourceId:void 0,tables:[],checkAll:!1,isIndeterminate:!0,tableSchema:""},readerForm:this.getReaderData(),rules:{datasourceId:[{required:!0,message:"this is required",trigger:"change"}],tableName:[{required:!0,message:"this is required",trigger:"change"}]}}},watch:{"writerForm.datasourceId":function(e,t){"postgresql"===this.dataSource||"oracle"===this.dataSource||"sqlserver"===this.dataSource?this.getSchema():this.getTables("writer")}},created:function(){this.getJdbcDs()},methods:{getJdbcDs:function(){var e=this;this.loading=!0,Object(h["e"])(this.jdbcDsQuery).then((function(t){var r=t.records;e.wDsList=r,e.loading=!1}))},getTables:function(e){var t=this;if("writer"===e){var r={};r="postgresql"===this.dataSource||"oracle"===this.dataSource||"sqlserver"===this.dataSource?{datasourceId:this.writerForm.datasourceId,tableSchema:this.writerForm.tableSchema}:{datasourceId:this.writerForm.datasourceId},f["e"](r).then((function(e){t.wTbList=e}))}},getSchema:function(){var e=this,t={datasourceId:this.writerForm.datasourceId};f["d"](t).then((function(t){e.schemaList=t}))},schemaChange:function(e){this.writerForm.tableSchema=e,this.getTables("writer")},wDsChange:function(e){var t=this;this.writerForm.tableName="",this.writerForm.datasourceId=e,this.wDsList.find((function(r){r.id===e&&(t.dataSource=r.datasource)})),D.dataSourceId=e,this.$emit("selectDataSource",this.dataSource),this.getTables()},wHandleCheckAllChange:function(e){this.writerForm.tables=e?this.wTbList:[],this.writerForm.isIndeterminate=!1},wHandleCheckedChange:function(e){var t=e.length;this.writerForm.checkAll=t===this.wTbList.length,this.writerForm.isIndeterminate=t>0&&t<this.wTbList.length},getData:function(){return D.dataSourceId&&(this.writerForm.datasourceId=D.dataSourceId),this.writerForm},getReaderData:function(){return this.$parent.getReaderData()},getTableName:function(){return this.fromTableName},createTable:function(){var e=this,t={datasourceId:this.writerForm.datasourceId,tableName:this.createTableName};f["a"](t).then((function(t){e.$notify({title:"Success",message:"Create Table Successfully",type:"success",duration:2e3})})).catch((function(){return console.log("promise catch err")}))}}},I=E,L=Object(v["a"])(I,F,C,!1,null,null,null),A=L.exports,O={name:"Writer",components:{TableWriter:A},data:function(){return{dataSource:""}},methods:{getData:function(){return this.$refs.tablewriter.getData()},getTableName:function(){return this.$refs.tablewriter.getTableName()},getReaderData:function(){return this.$parent.getReaderData()},showDataSource:function(e){this.dataSource=e,this.getData()},sendTableNameAndColumns:function(e,t){this.$refs.hivewriter.fromTableName=e,this.$refs.hivewriter.fromColumnList=t}}},$=O,N=Object(v["a"])($,j,x,!1,null,null,null),R=N.exports,q=r("f71e"),H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("TableMapper",{ref:"mapper"})],1)},P=[],J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{attrs:{"label-position":"left","label-width":"80px",model:e.readerForm}},[r("el-form-item",{attrs:{label:"源端表"}},[r("el-checkbox",{attrs:{indeterminate:e.readerForm.isIndeterminate},on:{change:e.lHandleCheckAllChange},model:{value:e.readerForm.lcheckAll,callback:function(t){e.$set(e.readerForm,"lcheckAll",t)},expression:"readerForm.lcheckAll"}},[e._v("全选")]),e._v(" "),r("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),r("el-checkbox-group",{on:{change:e.lHandleCheckedChange},model:{value:e.readerForm.ltables,callback:function(t){e.$set(e.readerForm,"ltables",t)},expression:"readerForm.ltables"}},e._l(e.fromTablesList,(function(t){return r("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"目标表"}},[r("el-checkbox",{attrs:{indeterminate:e.readerForm.isIndeterminate},on:{change:e.rHandleCheckAllChange},model:{value:e.readerForm.rcheckAll,callback:function(t){e.$set(e.readerForm,"rcheckAll",t)},expression:"readerForm.rcheckAll"}},[e._v("全选")]),e._v(" "),r("div",{staticStyle:{margin:"20px 0"}}),e._v(" "),r("el-checkbox-group",{on:{change:e.rHandleCheckedChange},model:{value:e.readerForm.rtables,callback:function(t){e.$set(e.readerForm,"rtables",t)},expression:"readerForm.rtables"}},e._l(e.toTablesList,(function(t){return r("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)],1)},z=[],M={name:"TableMapper",data:function(){return{mapperJson:{},fromTablesList:[],toTablesList:[],readerForm:{ltables:[],rtables:[],lcheckAll:!1,rcheckAll:!1,isIndeterminate:!0}}},mounted:function(){},methods:{lHandleCheckAllChange:function(e){this.readerForm.ltables=e?this.fromTablesList:[],this.readerForm.isIndeterminate=!1},rHandleCheckAllChange:function(e){this.readerForm.rtables=e?this.toTablesList:[],this.readerForm.isIndeterminate=!1},lHandleCheckedChange:function(e){var t=e.length;this.readerForm.checkAll=t===this.fromTablesList.length,this.readerForm.isIndeterminate=t>0&&t<this.fromTablesList.length},rHandleCheckedChange:function(e){var t=e.length;this.readerForm.checkAll=t===this.toTablesList.length,this.readerForm.isIndeterminate=t>0&&t<this.toTablesList.length},getLTables:function(){return this.readerForm.ltables},getRTables:function(){return this.readerForm.rtables}}},Q=M,B=Object(v["a"])(Q,J,z,!1,null,null,null),U=B.exports,W={name:"Mapper",components:{TableMapper:U},methods:{sendTables:function(e,t){this.$refs.mapper.fromTablesList=e,this.$refs.mapper.toTablesList=t},getLTables:function(){return this.$refs.mapper.getLTables()},getRTables:function(){return this.$refs.mapper.getRTables()}}},Y=W,G=Object(v["a"])(Y,H,P,!1,null,null,null),V=G.exports,X={name:"JsonBuild",components:{Reader:_,Writer:R,Pagination:s["a"],Mapper:V},data:function(){return{configJson:"",active:1,jobTemplate:"",jobTemplateSelectDrawer:!1,list:null,currentRow:null,listLoading:!0,total:0,listQuery:{current:1,size:10,jobGroup:0,triggerStatus:-1,jobDesc:"",executorHandler:"",userId:0},blockStrategies:[{value:"SERIAL_EXECUTION",label:"单机串行"},{value:"DISCARD_LATER",label:"丢弃后续调度"},{value:"COVER_EARLY",label:"覆盖之前调度"}],routeStrategies:[{value:"FIRST",label:"第一个"},{value:"LAST",label:"最后一个"},{value:"ROUND",label:"轮询"},{value:"RANDOM",label:"随机"},{value:"CONSISTENT_HASH",label:"一致性HASH"},{value:"LEAST_FREQUENTLY_USED",label:"最不经常使用"},{value:"LEAST_RECENTLY_USED",label:"最近最久未使用"},{value:"FAILOVER",label:"故障转移"},{value:"BUSYOVER",label:"忙碌转移"}],triggerNextTimes:"",registerNode:[],jobJson:"",temp:{id:void 0,jobGroup:"",jobCron:"",jobDesc:"",executorRouteStrategy:"",executorBlockStrategy:"",childJobId:"",executorFailRetryCount:"",alarmEmail:"",executorTimeout:"",userId:0,jobConfigId:"",executorHandler:"executorJobHandler",glueType:"BEAN",jobJson:"",executorParam:"",replaceParam:"",jvmParam:"",incStartTime:"",templateId:0}}},created:function(){},methods:{next:function(){var e=this.$refs.reader.getData().tables,t=this.$refs.writer.getData().tables;1===this.active?this.active++:(2===this.active&&this.$refs.mapper.sendTables(e,t),4!==this.active&&this.active++)},last:function(){this.active>1&&this.active--},createJob:function(){var e=this,t=this.$refs.reader.getData(),r=this.$refs.writer.getData(),a=this.$refs.mapper.getLTables(),n=this.$refs.mapper.getRTables(),i={readerSplitPk:t.splitPk},s={},c={readerDatasourceId:t.datasourceId,readerTables:a,writerDatasourceId:r.datasourceId,writerTables:n,rdbmsReader:i,rdbmsWriter:s,templateId:this.temp.templateId};o["a"](c).then((function(t){e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3}),e.active=1}))},handleCopy:function(e,t){Object(q["a"])(this.configJson,t),this.$message({message:"copy success",type:"success"})},handleJobTemplateSelectDrawer:function(){this.jobTemplateSelectDrawer=!this.jobTemplateSelectDrawer,this.jobTemplateSelectDrawer&&(this.fetchData(),this.getExecutor())},getReaderData:function(){return this.$refs.reader.getData()},getExecutor:function(){var e=this;i["b"]().then((function(t){var r=t.content;e.executorList=r}))},fetchData:function(){var e=this;this.listLoading=!0,i["c"](this.listQuery).then((function(t){var r=t.content;e.total=r.recordsTotal,e.list=r.data,e.listLoading=!1}))},handleCurrentChange:function(e){this.temp=Object.assign({},e),this.temp.id=void 0,this.temp.jobDesc=this.getReaderData().tableName,this.$refs.jobTemplateSelectDrawer.closeDrawer(),this.jobTemplate=e.id+"("+e.jobDesc+")",this.temp.templateId=e.id}}},K=X,Z=(r("3b31"),Object(v["a"])(K,a,n,!1,null,"4030713e",null));t["default"]=Z.exports},7514:function(e,t,r){"use strict";var a=r("5ca1"),n=r("0a49")(5),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a(a.P+a.F*o,"Array",{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(i)},"7e39":function(e,t,r){"use strict";r.d(t,"e",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"g",(function(){return o})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c})),r.d(t,"f",(function(){return l})),r.d(t,"d",(function(){return u}));var a=r("b775");function n(e){return Object(a["a"])({url:"/api/jobJdbcDatasource",method:"get",params:e})}function i(e){return Object(a["a"])({url:"/api/jobJdbcDatasource/"+e,method:"get"})}function o(e){return Object(a["a"])({url:"/api/jobJdbcDatasource",method:"put",data:e})}function s(e){return Object(a["a"])({url:"/api/jobJdbcDatasource",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/api/jobJdbcDatasource",method:"delete",params:e})}function l(e){return Object(a["a"])({url:"/api/jobJdbcDatasource/test",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/api/jobJdbcDatasource/all",method:"get",params:e})}},9693:function(e,t,r){},b311:function(e,t,r){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(t,r){e.exports=r()})(0,(function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),i=r(1),o=d(i),s=r(3),c=d(s),l=r(4),u=d(l);function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=function(e){function t(e,r){f(this,t);var a=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.resolveOptions(r),a.listenClick(e),a}return m(t,e),n(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===a(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,u.default)(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new o.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return b("action",e)}},{key:"defaultTarget",value:function(e){var t=b("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return b("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,r=!!document.queryCommandSupported;return t.forEach((function(e){r=r&&!!document.queryCommandSupported(e)})),r}}]),t}(c.default);function b(e,t){var r="data-clipboard-"+e;if(t.hasAttribute(r))return t.getAttribute(r)}e.exports=p},function(e,t,r){"use strict";var a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),i=r(2),o=s(i);function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=function(){function e(t){c(this,e),this.resolveOptions(t),this.initSelection()}return n(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=r+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==("undefined"===typeof e?"undefined":a(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=l},function(e,t){function r(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var r=e.hasAttribute("readonly");r||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),r||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var a=window.getSelection(),n=document.createRange();n.selectNodeContents(e),a.removeAllRanges(),a.addRange(n),t=a.toString()}return t}e.exports=r},function(e,t){function r(){}r.prototype={on:function(e,t,r){var a=this.e||(this.e={});return(a[e]||(a[e]=[])).push({fn:t,ctx:r}),this},once:function(e,t,r){var a=this;function n(){a.off(e,n),t.apply(r,arguments)}return n._=t,this.on(e,n,r)},emit:function(e){var t=[].slice.call(arguments,1),r=((this.e||(this.e={}))[e]||[]).slice(),a=0,n=r.length;for(a;a<n;a++)r[a].fn.apply(r[a].ctx,t);return this},off:function(e,t){var r=this.e||(this.e={}),a=r[e],n=[];if(a&&t)for(var i=0,o=a.length;i<o;i++)a[i].fn!==t&&a[i].fn._!==t&&n.push(a[i]);return n.length?r[e]=n:delete r[e],this}},e.exports=r},function(e,t,r){var a=r(5),n=r(6);function i(e,t,r){if(!e&&!t&&!r)throw new Error("Missing required arguments");if(!a.string(t))throw new TypeError("Second argument must be a String");if(!a.fn(r))throw new TypeError("Third argument must be a Function");if(a.node(e))return o(e,t,r);if(a.nodeList(e))return s(e,t,r);if(a.string(e))return c(e,t,r);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,r){return e.addEventListener(t,r),{destroy:function(){e.removeEventListener(t,r)}}}function s(e,t,r){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,r)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,r)}))}}}function c(e,t,r){return n(document.body,e,t,r)}e.exports=i},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var r=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===r||"[object HTMLCollection]"===r)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},function(e,t,r){var a=r(7);function n(e,t,r,a,n){var i=o.apply(this,arguments);return e.addEventListener(r,i,n),{destroy:function(){e.removeEventListener(r,i,n)}}}function i(e,t,r,a,i){return"function"===typeof e.addEventListener?n.apply(null,arguments):"function"===typeof r?n.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return n(e,t,r,a,i)})))}function o(e,t,r,n){return function(r){r.delegateTarget=a(r.target,t),r.delegateTarget&&n.call(e,r)}}e.exports=i},function(e,t){var r=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var a=Element.prototype;a.matches=a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector}function n(e,t){while(e&&e.nodeType!==r){if("function"===typeof e.matches&&e.matches(t))return e;e=e.parentNode}}e.exports=n}])}))},f352:function(e,t,r){"use strict";r.d(t,"e",(function(){return n})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return c}));var a=r("b775");function n(e){return Object(a["a"])({url:"/api/metadata/getTables",method:"get",params:e})}function i(e){return Object(a["a"])({url:"/api/metadata/getDBSchema",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/api/metadata/getColumns",method:"get",params:e})}function s(e){return Object(a["a"])({url:"/api/metadata/getColumnsByQuerySql",method:"get",params:e})}function c(e){return Object(a["a"])({url:"/api/metadata/createTable",method:"post",params:e})}},f71e:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r("2b0e"),n=r("b311"),i=r.n(n);function o(){a["default"].prototype.$message({message:"Copy successfully",type:"success",duration:1500})}function s(){a["default"].prototype.$message({message:"Copy failed",type:"error"})}function c(e,t){var r=new i.a(t.target,{text:function(){return e}});r.on("success",(function(){o(),r.off("error"),r.off("success"),r.destroy()})),r.on("error",(function(){s(),r.off("error"),r.off("success"),r.destroy()})),r.onClick(t)}}}]);