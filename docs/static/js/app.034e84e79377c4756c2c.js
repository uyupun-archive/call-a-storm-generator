webpackJsonp([1],{"5+dH":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={name:"Generator",data:function(){return{appName:"嵐を呼ぶサブタイトルジェネレータ",titleTop:"タイトル",titleBottom:"ジェネレーターだゾ",leftCap:"脚本 : フロント 太郎",rightCap:"監督 : エンド 次郎",src:"",isGenerated:!1}},mounted:function(){this.generate()},methods:{generate:function(){var t=document.getElementById("output_field").getContext("2d");this.drawBg(t),this.drawTitle(t),this.drawCaption(t,this.leftCap,"left",{x:400,y:1350}),this.drawCaption(t,this.rightCap,"right",{x:2480,y:1350}),t=document.getElementById("output_field"),this.isGenerated=!0,this.src=t.toDataURL()},drawTitle:function(t){t.font="250px sans-serif",t.textAlign="left",t.fillStyle="#5853A0",t.fillText(this.titleTop,140,590),t.textAlign="right",t.fillText(this.titleBottom,2740,930)},drawCaption:function(t,e,i,a){t.textAlign=i,t.lineWidth=5,t.fillStyle="#FFF",t.font="90px cursive",t.fillText(e,a.x,a.y),t.strokeStyle="gray",t.strokeText(e,a.x,a.y)},drawBg:function(t){t.beginPath();var e=t.createLinearGradient(0,410,0,1620);e.addColorStop(0,"#FD81A6"),e.addColorStop(1,"#FFFF83"),t.fillStyle=e,t.fillRect(0,0,2880,1620)}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header",{staticClass:"mt-2 mr-1 ml-1"},[i("h1",[t._v(t._s(t.appName))])]),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"mb-2"},[i("div",{staticClass:"row mb-2 mr-1 ml-1"},[i("div",{staticClass:"col-md-1"},[t._v("上の段")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.titleTop,expression:"titleTop"}],staticClass:"form-control d-inline col-md-11",attrs:{autofocus:""},domProps:{value:t.titleTop},on:{input:function(e){e.target.composing||(t.titleTop=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"row mb-2 mr-1 ml-1"},[i("div",{staticClass:"col-md-1"},[t._v("下の段")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.titleBottom,expression:"titleBottom"}],staticClass:"form-control d-inline col-md-11",domProps:{value:t.titleBottom},on:{input:function(e){e.target.composing||(t.titleBottom=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"row mb-2 mr-1 ml-1"},[i("div",{staticClass:"col-md-1"},[t._v("左側")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.leftCap,expression:"leftCap"}],staticClass:"form-control d-inline col-md-11",domProps:{value:t.leftCap},on:{input:function(e){e.target.composing||(t.leftCap=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"row mb-2 mr-1 ml-1"},[i("div",{staticClass:"col-md-1"},[t._v("右側")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.rightCap,expression:"rightCap"}],staticClass:"form-control d-inline col-md-11",domProps:{value:t.rightCap},on:{input:function(e){e.target.composing||(t.rightCap=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"row mb-2 mr-1 ml-1"},[i("button",{staticClass:"col-md-6 btn btn-success",attrs:{type:"button"},on:{click:t.generate}},[t._v("嵐を呼ぶ！")]),t._v(" "),i("a",{staticClass:"col-md-6 btn btn-primary",attrs:{href:"https://twitter.com/intent/tweet?&hashtags=嵐を呼ぶジェネレータ&url=https://afterschoolstudy.github.io/generator_of_call_a_storm"}},[t._v("嵐をシェアする！")])]),t._v(" "),i("div",{staticClass:"mb-4"},[i("canvas",{directives:[{name:"show",rawName:"v-show",value:!t.isGenerated,expression:"!isGenerated"}],attrs:{id:"output_field",width:"2880",height:"1620"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:t.isGenerated,expression:"isGenerated"}],staticClass:"output_image",attrs:{src:t.src}})])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"border-top pt-3"},[e("p",[this._v("Powered by "),e("a",{attrs:{href:"https://itc.moe/",target:"_blank"}},[this._v("IT Create Club")])])])}]};var r={name:"App",components:{Generator:i("VU/8")(s,o,!1,function(t){i("Xi9k")},"data-v-1c1c2693",null).exports}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Generator")],1)},staticRenderFns:[]};var l=i("VU/8")(r,n,!1,function(t){i("5+dH")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:l},template:"<App/>"})},Xi9k:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.034e84e79377c4756c2c.js.map