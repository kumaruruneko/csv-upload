$(".pref li").hover(function(){var t=$(this).attr("data-img_list");$(".img-box").children("."+t).addClass("active")},function(){$(".img-box img").removeClass("active")}),$("#mv").on("inview",function(t,e){e?$("header").removeClass("mv-in"):$("header").addClass("mv-in")}),$(".recruit #mv").on("inview",function(t,e){$("header").removeClass("mv-in")}),$("#mv-recruit").on("inview",function(t,e){e?($(".mv-staff").removeClass("mv-in"),$("header").removeClass("mv-in")):$(".mv-staff").addClass("mv-in")}),$(".recruit header").removeClass("mv-in"),$("#recruit_01").on("inview",function(t,e){e?$(".recruit-frame ul").addClass("in"):$(".recruit-frame ul").removeClass("in")}),$("#recruit_02").on("inview",function(t,e){e?$(".section-recruit_02 h3").addClass("in"):$(".section-recruit_02 h3").removeClass("in")}),$("#recruit_03").on("inview",function(t,e){e?$(".section-recruit_03 h3").addClass("in"):$(".section-recruit_03 h3").removeClass("in")}),$("#recruit_02_01").on("inview",function(t,e){e?$(".section-recruit_02 .movie-box").addClass("in"):$(".section-recruit_02 .movie-box").removeClass("in")}),$("#recruit_03_01").on("inview",function(t,e){e?$(".section-recruit_03 .movie-box").addClass("in"):$(".section-recruit_03 .movie-box").removeClass("in")}),$(".section-mv").on("inview",function(t,e){e?($(".topto").addClass("out"),$(".recruitto").removeClass("in")):($(".topto").removeClass("out"),$(".recruitto").addClass("in"))}),$("#recruit_04").on("inview",function(t,e){e||$(".section-recruit_04 .contents").removeClass("right-on left-on")}),$("#recruit_07").on("inview",function(t,e){e?$(".section-recruit_07").addClass("out"):$(".section-recruit_07").removeClass("out")}),$(".tgl-tb h4").on("click",function(){$(this).next("ul").toggle("fast"),$(this).toggleClass("open")}),$(".section-05 .item-area .item-box").each(function(){"pref-01"!==$(this).attr("data-pref")?$(this).hide():$(this).show()});var start_pref=$(".section-05 main").attr("data-set_pref");function tab_check(){var t=$(".section-tab ul").attr("data-tab");$(".section-tab ul li").each(function(){$(this).attr("class")==t&&$(this).addClass("active")})}function tab_paging(){var t=$(".section-tab ul").attr("data-tab");"tab-01"==t&&($("main > div").hide(),$(".detail-01").slideDown("fast")),"tab-02"==t&&($("main > div").hide(),$(".detail-02").slideDown("fast")),"tab-03"==t&&($("main > div").hide(),$(".detail-03").slideDown("fast")),"tab-04"==t&&($("main > div").hide(),$(".detail-04").slideDown("fast"))}""==start_pref?$(".section-05 .pref-list .pref-01").addClass("active"):($("."+start_pref).addClass("active"),"new_store"==start_pref?$(".section-05 .item-area .item-box").each(function(){"true"==$(this).attr("data-new_store")?$(this).show():$(this).hide()}):$(".section-05 .item-area .item-box").each(function(){var t=$(this).attr("data-pref");start_pref!==t?$(this).hide():$(this).show()})),$(".section-05 .pref-list li").on("click",function(){$(".section-05 .pref-list li").removeClass("active");var e=$(this).attr("class");"new_store"==e?$(".section-05 .item-area .item-box").each(function(){"true"==$(this).attr("data-new_store")?$(this).show():$(this).hide()}):$(".section-05 .item-area .item-box").each(function(){var t=$(this).attr("data-pref");e!==t?$(this).hide():$(this).show()}),$(this).addClass("active")}),tab_check(),tab_paging(),$(".section-tab ul li").on("click",function(){$(".section-tab ul li").removeClass("active"),$(this).children("li").addClass("active"),$(".section-tab ul").removeClass("active");var t=$(this).attr("class");$(".section-tab ul").attr("data-tab",t),tab_check(),tab_paging()}),$("#mc-pachinko").find("section").length||($("#mc-pachinko").children("p").remove(),$("#mc-pachinko").append("<p>当店では取り扱っていません</p>")),$(".mc_select li").on("click",function(){$(".mc_select li").removeClass("active"),$(this).addClass("active")}),$("#mc-01").on("click",function(){$("#mc-pachinko").addClass("active"),$("#mc-pachinko").find("section").length||($("#mc-pachinko").children("p").remove(),$("#mc-pachinko").append("<p>当店では取り扱っていません</p>")),$("#mc-slot").removeClass("active")}),$("#mc-02").on("click",function(){$("#mc-pachinko").removeClass("active"),$("#mc-slot").find("section").length||($("#mc-slot").children("p").remove(),$("#mc-slot").append("<p>当店では取り扱っていません</p>")),$("#mc-slot").addClass("active")}),$(".section-recruit_04 .left img").on("click",function(){$(".section-recruit_04 .contents").toggleClass("left-on")}),$(".section-recruit_04 .right img").on("click",function(){$(".section-recruit_04 .contents").toggleClass("right-on")}),$(window).scroll(function(t){$(".section-recruit_05 section").each(function(){var t=$(this).offset(),e=$(".ball").offset();$(this).attr("data-h",t.top),t.top<e.top+30&&(e=$(this).attr("data-work_no"),$(".ball").text(e))})}),$(".text_group").on("click",function(){var t=$(this).attr("data-text_type"),e=$(this).parents(".container");console.log(t),"q-1"==t&&(e.toggleClass("a-1"),setTimeout(function(){$(".qa-3 dd .text_group").toggleClass("on")},300)),"q-2"==t&&(e.toggleClass("a-2"),setTimeout(function(){$(".qa-4 dd .text_group").toggleClass("on")},300))});var a=$(".recruit-form").attr("data-recruit-a"),c=$(".recruit-form").attr("data-recruit-c"),s=$(".recruit-form").attr("data-recruit-s");"false"==a&&($('input[value="アルバイト"]').attr("disabled","disabled"),$('input[value="アルバイト"]').prop("checked",!1),$(".recruit-form").hide()),"false"==c&&($('input[value="キャリア"]').attr("disabled","disabled"),$('input[value="キャリア"]').prop("checked",!1)),"false"==s&&($('input[value="新卒"]').attr("disabled","disabled"),$('input[value="新卒"]').prop("checked",!1)),$(".application .section-tab ul li").on("click",function(){var t=$(".recruit-form").attr("data-recruit-a"),e=$(".recruit-form").attr("data-recruit-c"),i=$(".recruit-form").attr("data-recruit-s");$(".application .section-tab ul li").removeClass("active");var a=$(this).attr("class");$(this).addClass("active"),$(".recruit-form").show(),"tab-01"==a&&($('input[value="アルバイト"]').prop("checked",!0),"false"==t&&$(".recruit-form").hide()),"tab-02"==a&&($('input[value="キャリア"]').prop("checked",!0),"false"==e&&$(".recruit-form").hide()),"tab-03"==a&&($('input[value="新卒"]').prop("checked",!0),"false"==i&&$(".recruit-form").hide())}),$(function(){$(".movie-thumb").on("click",function(){var t,e;$(".sp-spacer").is(":visible")?window.open("https://www.youtube.com/embed/HYXKqR-7E7k?rel=0&autoplay=1","_blank"):(t="playVideo",e=$(this).prev("iframe"),$(e)[0].contentWindow.postMessage('{"event":"command","func":"'+t+'","args":""}',"*"),$(this).hide())})});