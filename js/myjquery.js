$(document).ready(function(){

// 功能選單下拉式設定
  $(".drop_list").hide();
  $(".drop_btn").click(function(){
    $(".drop_list").fadeToggle(300);
    $(".drop_btn .fas").toggleClass("fa-caret-down").toggleClass("fa-caret-up");
  });

// 畫面下滑頭部選單設定
  $(function(){
    $(window).scroll(function(){
      if($(this).scrollTop() > 30){
        $('.top').css("top","0");
        $('.m_menu_left').css("top","14px");
        $('.m_menu_right').css("top","14px");
      } else {
        $('.top').css("top","36px");
        $('.m_menu_left').css("top","50px");
        $('.m_menu_right').css("top","50px");
      }
    })
  });

// 手機選單按鈕 > 左
  $(".left_menu_btn").click(function(){
    $(".left_menu_btn .fas").toggleClass("fa-bars").toggleClass("fa-times");
    $(".left_menu_list").toggleClass("hide").toggleClass("show");
    $(".right_menu_list").removeClass("show").addClass("hide");
    $(".right_menu_btn .fas").removeClass("fa-times").addClass("fa-th-large");
  });
// 手機選單按鈕 > 右
  $(".right_menu_btn").click(function(){
    $(".right_menu_btn .fas").toggleClass("fa-th-large").toggleClass("fa-times");
    $(".right_menu_list").toggleClass("hide").toggleClass("show");
    $(".left_menu_list").removeClass("show").addClass("hide");
    $(".left_menu_btn .fas").removeClass("fa-times").addClass("fa-bars");
  });

});
