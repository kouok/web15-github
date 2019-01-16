// 固定顶部搜索栏
window.onload=function(){
	// console.log(111);
    var oHead=document.getElementById('head');
    var oBanner=document.getElementById('bannerBox');
    window.onscroll=function(){
    	if (document.documentElement.scrollTop>0) {
    		oHead.style.position="fixed";
    		oHead.style.top=0;
            oHead.style.zIndex=1;
    		oBanner.style.marginTop=oHead.offsetHeight+"px";
    	}else{
    		oHead.style.position="static";
    		oBanner.style.marginTop=0;
    	}
    }

    // 轮播图
    var x;
    var oimgList=document.getElementById('imgList');
   
    // 手指触摸时，触发的函数
    oBanner.addEventListener('touchstart',function(e){
        // 手指触摸屏幕时在屏幕上的位置
        x = e.touches[0].clientX;
        // console.log(x);
     }
    )
    
    // 手指移动时触发的函数
    oBanner.addEventListener('touchmove',function(e){
        //手指不断滑动时在屏幕上的位置
        var x1 = e.touches[0].clientX;
        //判断手指往左还是右
        var c = x1-x;
        // console.log(c);
     }
    )
    
    //自动轮播
    var timer;
    var num=1;//当前第几张图片
    var oImg=document.getElementById('imgList').children;
    // console.log(oImg);
    function left(){
        if (num==oImg.length-1) {
             oimgList.style.left=0;
             num=1;
        }else{
            num++;
            
        }
        oimgList.style.left=-3.75*num+'rem';
    }
    
    // function right(){
    //     if (num==) {}
    // }


    timer=setInterval(function(){
         left();
         
    },2000)
    
}


