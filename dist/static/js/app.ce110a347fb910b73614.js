webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW");function a(){var t=document.getElementById("output_field").getContext("2d");t.beginPath();var e=t.createLinearGradient(0,410,0,1620);e.addColorStop(0,"#FD81A6"),e.addColorStop(1,"#FFFF83"),t.fillStyle=e,t.fillRect(0,0,2880,1620)}$(function(){a(),$("#enter").click(function(){(l=document.getElementById("output_field").getContext("2d")).clearRect(0,0,2880,1620),a(),l.font="250px sans-serif",l.textAlign="left";var t=$("#title_top").val(),e=$("#title_bottom").val();l.fillStyle="#5853A0",l.fillText(t,140,590),l.textAlign="right",l.fillText(e,2740,930);var i=$("#left_cap").val();l.textAlign="left",l.lineWidth=5,l.fillStyle="#FFF",l.font="90px cursive",l.fillText(i,400,1350),l.strokeStyle="gray",l.strokeText(i,400,1350);var s=$("#right_cap").val();l.textAlign="right",l.lineWidth=5,l.fillStyle="#FFF",l.font="90px cursive",l.fillText(s,2480,1350),l.strokeStyle="gray",l.strokeText(s,2480,1350);var l,n=(l=document.getElementById("output_field")).toDataURL();document.getElementById("output_image").src=n,$("#output").css("border","0"),$("#output_field").hide(),$("#output_image").show()})});var l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("header",[i("h1",[t._v(t._s(t.msg))])]),t._v(" "),i("h3",[t._v("上の段")]),t._v(" "),t._m(0),t._v(" "),i("h3",[t._v("下の段")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input_text"},[e("input",{staticClass:"form-control",attrs:{id:"title_top",value:"タイトル"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input_text"},[e("input",{staticClass:"form-control",attrs:{id:"title_bottom",value:"ジェネレーターだゾ"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("p",[this._v("左側")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"left_cap",value:"脚本 : フロント 太郎"}})]),this._v(" "),e("div",{staticClass:"col-sm-6"},[e("p",[this._v("左側")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"right_cap",value:"監督 : エンド 次郎"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"submit"},[e("button",{staticClass:"btn btn-success",attrs:{type:"button",id:"enter"}},[this._v("嵐を呼ぶ!")]),this._v(" "),e("button",{staticClass:"btn btn-success",attrs:{type:"button",id:"tweet"}},[this._v("嵐をシェアする!")]),this._v(" "),e("a",{staticClass:"twitter-hashtag-button",attrs:{href:"https://twitter.com/intent/tweet?&hashtags=嵐を呼ぶジェネレータ&url=https://afterschoolstudy.github.io/generator_of_call_a_storm/dist/","data-show-count":"false"}},[this._v("Tweet #嵐を呼ぶジェネレータ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"output"},[e("canvas",{attrs:{id:"output_field",width:"2880",height:"1620"}}),this._v(" "),e("img",{attrs:{id:"output_image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("poewred by ITCreateClub")])])}]};var n={name:"App",components:{HelloWorld:i("VU/8")({name:"HelloWorld",data:function(){return{msg:"嵐を呼ぶサブタイトルジェネレータ"}}},l,!1,function(t){i("gAVR")},"data-v-855350f0",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("HelloWorld")],1)},staticRenderFns:[]};var o=i("VU/8")(n,r,!1,function(t){i("cbuX")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:o},template:"<App/>"})},cbuX:function(t,e){},gAVR:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ce110a347fb910b73614.js.map