
let box = document.querySelector(".box");
let box_top = box.offsetTop;
let nav = document.querySelector("#nav");
let n_bot = document.querySelector(".n_bot");
let m_menu = document.querySelector('.m_nav')



nav.style.backgroundColor = 'transparent'
m_menu.addEventListener('click', function(){
    if(nav.style.backgroundColor == 'transparent'){
        nav.style.backgroundColor = 'black';
    }else{
        nav.style.backgroundColor = 'transparent';
    }
    n_bot.classList.toggle('active');
});


$('.slider_wrap').slick({
    //dots: true,
    infinite: true,
    speed: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    //fade: true,
  });

  //let header = document.querySelector("#header");
  //console.log(header)

window.addEventListener('load',function(){
    let h_sum = document.querySelector('.h_sum');
    let h_opa = h_sum.getElementsByClassName('h_opa');
    let h_opa_a = h_sum.getElementsByTagName('a');
    let s_top = document.querySelector('html').scrollTop;
    if( h_sum.offsetTop < box_top*0.9 ){
        for(var i = 0; i<4; i++){
            h_opa[i].style.opacity = 1;
            h_opa_a[i].style.top = 0;
            h_opa[i].style.transitionDelay = '0.'+(i+1)+'s';
            h_opa_a[i].style.transitionDelay = '0.'+(i+1)+'s';
        }
    }
    
});
window.addEventListener('scroll',function(){
    let h_sum = document.querySelector('.h_sum');
    let h_opa = h_sum.getElementsByClassName('h_opa');
    let h_opa_a = h_sum.getElementsByTagName('a');
    let s_top = document.querySelector('html').scrollTop;
    if( h_sum.offsetTop < box_top*0.9 + s_top ){
        for(var i = 0; i<4; i++){
            h_opa[i].style.opacity = 1;
            h_opa_a[i].style.top = 0;
            h_opa[i].style.transitionDelay = '0.'+(i+1)+'s';
            h_opa_a[i].style.transitionDelay = '0.'+(i+1)+'s';
        }
    }
    
});


//스크롤 효과
let s1t_right = document.querySelector('.s01t_right')
let s1t_rigth_top = s1t_right.offsetTop,
s01_list = document.querySelector('.s01_list'),
list_li = s01_list.getElementsByTagName('li'),
s2_list = document.querySelector('.s2_list'),
sec02 = document.querySelector('#sec02'),
s2_list_li = s2_list.getElementsByTagName('li');
console.log(s2_list_li[0]);
window.addEventListener('scroll', function(){
    let s_top = document.querySelector('html').scrollTop;
    if( s1t_rigth_top < s_top + box_top/1.5 ){
        s1t_right.style.paddingTop = 0+'px';
        s1t_right.style.opacity = 1;
    }
    if(s01_list.offsetTop < s_top + box_top/1.1){
        for (var z = 0; z<4; z++){
            list_li[z].style.opacity = '1'
            list_li[z].style.transitionDelay = '0.'+ (z+1) + 's'
        }
    }
    if(sec02.offsetTop < s_top + box_top/1.7){
        for (var z = 0; z<3; z++){
            s2_list_li[z].querySelector('div').style.top = 0+'px';
            s2_list_li[z].querySelector('div').style.opacity = 1;
            s2_list_li[z].querySelector('div').style.transitionDelay = '0.'+(1+z)+'s';
        }
    }
    
});
