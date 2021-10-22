import $ from 'jquery'
const myJs = {
    // <script src="emect/style/js/jquery.cxslide.min.js"></script>
dosuba52395a: function() {
    try {
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf("msie 8") > -1) {
        window.external.AddToFavoritesBar(
          document.location.href,
          document.title,
          ""
        ); //IE8
      } else if (ua.toLowerCase().indexOf("rv:") > -1) {
        window.external.AddToFavoritesBar(
          document.location.href,
          document.title,
          ""
        ); //IE11+
      } else {
        if (document.all) {
          window.external.addFavorite(document.location.href, document.title);
        } else if (window.sidebar) {
          window.sidebar.addPanel(document.title, document.location.href, ""); //firefox
        } else {
          alert(hotKeysa52395a());
        }
      }
    } catch (e) {
        console.log("无法自动添加到收藏夹，请使用 Ctrl + d 手动添加");
    }
  },
hotKeysa52395a: function() {
    var ua = navigator.userAgent.toLowerCase();
    var str = "";
    var isWebkit = ua.indexOf("webkit") != -1;
    var isMac = ua.indexOf("mac") != -1;
    if (ua.indexOf("konqueror") != -1) {
      str = "CTRL + B"; // Konqueror
    } else if (window.home || isWebkit || isMac) {
      str = (isMac ? "Command/Cmd" : "CTRL") + " + D"; // Netscape, Safari, iCab, IE5/Mac
    }
    return str ? "无法自动添加到收藏夹，请使用" + str + "手动添加" : str;
  },
setHomepagea52395a: function() {
    var url = document.location.href;
    if (document.all) {
      document.body.style.behavior = "url(#default#homepage)";
      document.body.setHomePage(url);
    } else if (window.sidebar) {
      if (window.netscape) {
        try {
          netscape.security.PrivilegeManager.enablePrivilege(
            "UniversalXPConnect"
          );
        } catch (e) {
          alert(
            "该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true"
          );
        }
      }
      var prefs = Components.classes[
        "@mozilla.org/preferences-service;1"
      ].getService(Components.interfaces.nsIPrefBranch);
      prefs.setCharPref("browser.startup.homepage", url);
    } else {
        console.log("浏览器不支持自动设为首页，请手动设置");
    }
  },
slkdfj: function(demo1,marquePic1a) {
                  var speed=30
                  var  demo=''
                  var marquePic1=''
                  if(demo1==null) {
                    demo = document.getElementById("demo")
                    marquePic1=document.getElementById("marquePic1")
                  }else {
                    demo=demo1
                    marquePic1=marquePic1a
                  }
                  console.log(marquePic1);
                  var marquePic2=document.getElementById("marquePic2")
                 //marquePic2.innerHTML=marquePic1.innerHTML
                  function Marquee(){
                  if(demo.scrollLeft>=marquePic1.scrollWidth){ 
                  demo.scrollLeft=0 
                  }else{
                  demo.scrollLeft++ 
                  } 
                  }
                  var MyMar=setInterval(Marquee,speed) 
                  demo.onmouseover=function() {clearInterval(MyMar)} 
                  demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)} 
                  function location1(s)
                              {   var d = s.options[s.selectedIndex].value;
                                  window.open(d);
                                  s.selectedIndex=0;
                              }
                  function location2(s)
                      {
                              var d = s.options[s.selectedIndex].value;
                              s.selectedIndex=0;
                              window.top.location.href = d;
            }
          },
lunbo: function(){
	function lunbo1(){
        //程序的最开始，复制3个li，追加到ul的最后
        //$(".lunbo .tutu .inner ul").append($(".lunbo .tutu .inner ul").children().eq(0));
        $(".content .xia .zuo .lunbo1 ul").children().eq(0).clone().appendTo($(".content .xia .zuo .lunbo1 ul"));
        $(".content .xia .zuo .lunbo1 ul").children().eq(1).clone().appendTo($(".content .xia .zuo .lunbo1 ul"));
        $(".content .xia .zuo .lunbo1 ul").children().eq(2).clone().appendTo($(".content .xia .zuo .lunbo1 ul"));
        $(".content .xia .zuo .lunbo1 ul").children().eq(3).clone().appendTo($(".content .xia .zuo .lunbo1 ul"));
        $(".content .xia .zuo .lunbo1 ul").children().eq(4).clone().appendTo($(".content .xia .zuo .lunbo1 ul"));
        var speed = 4000;
        var nowimg = 0;	//信号量，指示的是当前图片的编号。
        var mytimer;
        var size = $(".content .xia .zuo .lunbo1 ul").children().length;
        var liW = $(".content .xia .zuo .lunbo1 ul li").width();
        var totalW = 155*(size-5);//$(".lunbo .tutu .inner ul").width();
        
    
        //alert(totalW);
        function autoGUN(){
                nowimg++;
            //如果在最后一个
            if(((nowimg)*liW)<totalW){
            
                $(".content .xia .zuo .lunbo1 ul").animate({"left":-155 * nowimg},600);
            }else{
        
                $(".content .xia .zuo .lunbo1 ul").animate({"left":0},0);
                nowimg=0;
                autoGUN();
            }
            
        }
        //判断，如果无图片或图片数小于显示的图片数就不轮播
        if(size>3){
            mytimer = window.setInterval(autoGUN,speed);
        }
    
        //自动轮播
        //.lunbo .tutu .inner ui  ==1000
        //右按钮的监听，绑定的是一个有名函数youanniudongzuo，目的是为了定时器也方便调用
        $(".content .hqfc .bd .inner .lunbo .anniu .youanniu").click(function(){
            if(!$(".content .xia .zuo .lunbo1 ul li").is(":animated")){
                //图片的索引增加
                nowimg ++;
                if(((nowimg)*liW)<totalW){
                    //动画！
                    $(".content .xia .zuo .lunbo1 ul").animate({"left":-155 * nowimg},600);
                    //当点击到最后一张图时，让第一张拼接最后一张
                    if(nowimg+4==size){
                        nowimg=0;
                        $(".content .xia .zuo .lunbo1 ul").animate({"left":-155 * nowimg},0);
                    }
                    
                }else{
                    //当点击自动轮播到最后一张图时，让第一张拼接最后一张且滑动一张
                    nowimg=0;
                    $(".content .xia .zuo .lunbo1 ul").animate({"left":-155 * nowimg},0);
                    nowimg++;
                    $(".content .xia .zuo .lunbo1 ul").animate({"left":-155 * nowimg},600);
                }
            }
        });
        
        //右按钮动作函数
        //左按钮的监听
        // $(".content .hqfc .bd .inner .lunbo .anniu .zuoanniu").click(function(){
        // 	if(!$(".content .xia .zuo .lunbo1 ul li").is(":animated")){
        // 		if(nowimg > 0){
        // 			//还没有到第1张图的时候，所以正常执行动画
        // 			nowimg --;
        // 			//动画！
        // 			$(".content .xia .zuo .lunbo1 ul").animate({"left":-155 * nowimg},600);
                    
                    
        // 		}else{
        // 			if(nowimg==0){
        // 				nowimg =size-4;
        // 				$(".content .xia .zuo .lunbo1 ul").animate({"left":-155 * nowimg},0);
        // 				nowimg --;
        // 				$(".content .xia .zuo .lunbo1 ul").animate({"left":-155 * nowimg},600);
        // 			}
                    
                    
        // 			//alert(size);
        // 		}
                    
        // 	}
        // });
    
    
        $(".lunbo").mouseenter(
            function(){
                window.clearInterval(mytimer);
            }
        );
    
        $(".lunbo").mouseleave(
            function(){
                window.clearInterval(mytimer);
                //自动轮播
                mytimer = window.setInterval(autoGUN,speed);
            }
        );
    }
},
shiyan: function(){
	var nowimg = 0;	//信号量，指示的是当前图片的编号。
	var mytimer;
	var sum=0;
	
	
	$(".content .curriculum .youniu").click(youanniudongzuo);
	
	//右按钮动作函数
	$(".content .curriculum .liebiao .inner ul li").each(
		function(){
			sum = sum + $(this).outerWidth(true);
		}
	);

	var shu=parseInt(sum/824);
	
	function youanniudongzuo(){
		
			$(".content .curriculum .zuoniu").css("background","url(images/zuoniu.jpg) no-repeat 0px 0px");
			if(nowimg < shu){
				
				nowimg ++;

				
				//动画！
				$(".content .curriculum .liebiao .inner ul").animate({"left":-823 * nowimg},600);
				//alert(shu);
			}else{
				$(".content .curriculum .youniu").css("background","url(images/youniu.png) no-repeat 0px 0px");
			}
			
			
		
	}

	//左按钮的监听
	$(".content .curriculum .zuoniu").click(
		function(){
				$(".content .curriculum .youniu").css("background","url(images/youniu.jpg) no-repeat 0px 0px");
				if(nowimg > 0){
					
					nowimg --;
					
					
					//动画！
					$(".content .curriculum .liebiao .inner ul").animate({"left":-823 * nowimg},600);
				}else{
				nowimg = 0;
				
				$(".content .curriculum .liebiao .inner ul").animate({"left":-823 * nowimg},600);
				$(".content .curriculum .zuoniu").css("background","url(images/zuoniu.png) no-repeat 0px 0px");
			}
		}
	);
},
chadisplay: function(){
  var navdemo = document.getElementById("navbar")
  navdemo.onclick = function(){
    // navdemo.removeAttribute("show")
    // console.log("asd");
    
  }
}
}
export default myJs
