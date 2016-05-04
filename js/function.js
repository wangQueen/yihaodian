// 浏览器兼容问题；
//1、获取类名的兼容函数；
//解决IE浏览器不支持通过类名获取的问题
function getClass(classname,obj){
	  var obj=obj||document;
      if(document.getElementsByClassName){
      	  //  console.log("支持")
          return obj.getElementsByClassName(classname);
      }else{
      	  // console.log("不支持")
      	  var arr=[];
          var all=obj.getElementsByTagName('*');
          for (var i = 0; i < all.length; i++) {
          	if(checkClass(all[i].className,classname)){
                arr.push(all[i]);
          	}
          };
          return arr;
      }
}
// 2.解决一个标签名中匹配到多个类名的时候
function checkClass(newclass,oldclass){
      var flag=false; 
      var arr=newclass.split(" ");
      for(var i=0;i<arr.length;i++){
            if(arr[i]==oldclass){
                 flag=true;
              }
      }
      return flag;
}

// 3.解决获取文本的兼容问题
function getText(obj,val){
  if(val==undefined){
     if(typeof obj.textContent=="string"){
           return obj.textContent;
     }else{
           return obj.innerHTML;
     }
  }else{
       if(typeof obj.textContent=="string"){
           obj.textContent=val;
       }else{
           obj.innerHTML=val;
     }
  }
     
}

//4.解决IE在行内样式获取
function getStyle(obj,attr){
  if(!obj.currentStyle){
     //chrome firefix  ie6-11
    return getComputedStyle(obj,null)[attr];
  }else{
    return  obj.currentStyle[attr];
  }
}


// $
function $(selector,obj){document.getElementById
      if(typeof selector==="string"){
        var obj=obj||document
             if(selector.charAt(0)=="."){
                    return getClass(selector.substring(1),obj);
             }else if(selector.charAt(0)=="#"){
                    return obj.getElementById(selector.substring(1));
             }else if(/^[a-z][a-z1-9]{0,9}$/g.test(selector)){
                    return obj.getElementsByTagName(selector);
             }else if(/^<[a-z][a-z1-6]{0,9}>$/g.test(selector)){
                    return document.createElement(selector.slice(1,-1))
             }
      }else if(typeof selector=="function"){
              window.onload=function(){
                    selector();
              }
      }
}
// 解决获取节点问题
function getChild(parent,t){
      var t=t||false;    //true  就需要文字
      var childs=parent.childNodes;
      var arr=[];
      if(t==true){
           for(var i=0;i<childs.length;i++){
              if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s+|\s+$/g,"")!='')){
                    arr.push(childs[i]);
                  }
               } 
      }else if(t==false){
              for(var i=0;i<childs.length;i++){
                if(childs[i].nodeType==1){
                      arr.push(childs[i]);
                 }
              }
      }
      return arr;
}


// 获取第一个子节点
  function getFirst(obj){
       return getChild(obj)[0];
  }

//获取最后一个子节点
   function getLast(obj){
       var last=getChild(obj);
       return last[last.length-1]
  }
// 获取任何一个
function getNum(obj,num){
    return getChild(obj)[num];
}

// 获取下一个兄弟节点
  function getNext(obj){
      var next=obj.nextSibling;
      if(next==null){
         return  false;
      }
      while(next.nodeType==8||(next.nodeType==3&&next.nodeValue.replace(/^\s+|\s+$/g,"")=="")){
            next=next.nextSibling;
            if(next==null){
                  return false;
            }
       }
      return next;
       
  }
  // 获取上一个兄弟节点
  function getUp(obj){
    var Up=obj.previousSibling;
    if(Up==null){
      return  false;
    }
    while(Up.nodeType==8||(Up.nodeType==3&&Up.nodeValue.replace(/^\s+|\s+$/g,"")=="")){
      Up=Up.previousSibling;
      if(Up==null){
        return false;
      }
    }
    return Up;
  }


  // 插入之前
  /*
     obj1:要插入的对象   obj2：之前的对象
  // */ 
  function insertBefore(obj1,obj2){
    var parentNode=obj2.parentNode;
    parentNode.insertBefore(obj1,obj2);
  }


  // 插入之后的对象
function insertAfter(obj1,obj2){
    var next=getNext(obj2);
    insertBefore(obj1,next);
  }