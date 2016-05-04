$(function(){
var a=$('.dingwei-right-zi1');
var d=$('.yiloutop');
var clienth=document.documentElement.clientHeight;
var offT=[];
for(var i=0;i<d.length;i++){
  offT.push(d[i].offsetTop-40)//遍历一遍数组，将每层楼离顶的像素加入新数组。
  a[i].index=i;//创建一个下标，for循环结束后，下标建立完毕,并将其与按钮盒子关联起来
  a[i].onclick=function(){//按钮盒子点击事件，随着循环进行，i值不同，按钮不同 a[0] a[1] ...
  animate(document.body,{scrollTop:offT[this.index]},400)//this.index代表了当前a[i]下的距离
  animate(document.documentElement,{scrollTop:offT[this.index]},400)
}
}
window.onscroll=function(){
  var doc=document.body.scrollTop?document.body:document.documentElement;
  var stop=doc.scrollTop;
  for(var j=0;j<d.length;j++){
    if(stop>=offT[j]-clienth){
         var g=$('img',d[j]); //按需加载图片
         for(var k=0;k<g.length;k++){//按需加载图片
          g[k].src=g[k].getAttribute('asrc')//按需加载图片
         }
                
    }
  }
    
}
var zlmd11=$('.dingwei-right-zi1')[10];
zlmd11.onclick=function(){
  var doc=document.body.scrollTop?document.body:document.documentElement;
  animate(doc,{scrollTop:0},400)
}







      var tu=$(".f5-tu")[0];
      var tus=$(".banner",tu);
      var btn=$("li",$(".f5-anniu")[0]);
      var Lbtn=$(".f5-left")[0];
      var Rbtn=$(".f5-righta")[0];
      var beijing=$("li",$(".ay")[0]);
  // 轮播
      var index=0;
      var t=setInterval(move,2000);
      function move(){
          index++;
          if(index==tus.length){
          	  index=0;
          }
          if(index==-1){
              index=tus.length-1;
          }
          for(var i=0;i<tus.length;i++){
              animate(tus[i],{opacity:0});
              btn[i].style.background="";
              animate(beijing[i],{opacity:0});
          }
              animate(tus[index],{opacity:1});
              btn[index].style.background="#FF3C3C";
              animate(beijing[index],{opacity:1});
      }

// 移上事件
	tu.onmouseover=function(){
		clearInterval(t);
	};
	tu.onmouseout=function(){
		t=setInterval(move,2000);
	}
// 右按钮
   Rbtn.onclick=function(){
   	   move();
   }
//左按钮
   Lbtn.onclick=function(){
        move();
   	    index=index-2;
          /*if(index<0){
          	  index=tus.length-1;
          }*/
          /*for(var i=0;i<tus.length;i++){
              animate(tus[i],{opacity:0});
              btn[i].style.background="";
              animate(beijing[i],{opacity:0});
          }
              animate(tus[index],{opacity:1});
              btn[index].style.background="#FF3C3C";
              animate(beijing[index],{opacity:1});
          */
   }

   //小按钮
   for(var i=0;i<btn.length;i++){
	   	 btn[i].aa=i;
	   	 btn[i].onmouseover=function(){
            /*for(var j=0;j<btn.length;j++){
              	  animate(tus[j],{opacity:0});
                  btn[j].style.background="";
                  animate(beijing[j],{opacity:0});
              }
             animate(tus[this.aa],{opacity:1});
             this.style.background="#FF3C3C";
             animate(beijing[this.aa],{opacity:1});
             */
             index=this.aa-1;
             move();
	   	 }
   }
  


 var f7big=$(".f7-bottom2"); 
  // 循环下标 
   for(var i=0;i<f7big.length;i++){
        time(i); 
   }
  function time(s){
        var f7da=$(".f7-bottom-da")[s];
        var f7xiao=$("li",f7da);
        var ws=parseInt(getStyle(f7xiao[0],"width"));
        f7da.style.width=ws*f7xiao.length+"px";
        // console.log(f7da.style.width);
        var f7btns=$(".f7-btn1")[s];

        var f7div=$("div",f7btns);
        // alert(f7div.length)
        animate(f7div[0],{width:30},2600);
        var f7btn=$("li",f7btns);

        var index1=0;
        var t1=setInterval(move1,3000);
        function move1(){
             index1++;
             if(index1>f7xiao.length-1){
                 index1=0;
             }
             for(var i=0;i<f7btn.length;i++){  
                 f7div[i].style.width=0;
             }
             animate(f7da,{marginLeft:-ws*index1});
             animate(f7div[index1],{width:30},2600);
             f7div[index1].style.display="block";
        }

      // 悬停
         f7da.onmouseover=function(){
            clearInterval(t1);
         }
         f7da.onmouseout=function(){
            t1=setInterval(move1,3000);
         }

      // 小按钮
      for(var i=0;i<f7btn.length;i++){
          f7btn[i].aa=i;
          f7btn[i].onmouseover=function(){
              clearInterval(t1);
              for(var j=0;j<f7btn.length;j++){
                 f7div[j].style.width=0;
                 f7div[j].style.display="none";
               }
               f7div[this.aa].style.width=30+"px";
               animate(f7da,{marginLeft:-ws*this.aa});
               f7div[this.aa].style.display="block";
               index1=this.aa;
          }
         f7btn[i].onmouseout=function(){
              t1=setInterval(move1,3000);
         }
      }
  }








})