$('.pref li').hover(function () {
	var pref = $(this).attr('data-img_list')
	$('.img-box').children('.' + pref).addClass('active')
}, function () {
	$('.img-box img').removeClass('active')
})

// $('.drawer-link form').attr('id', 'searchform-dw')
// $('.drawer-link form input').attr('id', 'ss')

$('#mv').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
		$('header').removeClass('mv-in');
	} else {
		//表示領域から出た時
		$('header').addClass('mv-in');
	}
});

$('.recruit #mv').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
		$('header').removeClass('mv-in');
	} else {
		//表示領域から出た時
		$('header').removeClass('mv-in');
	}
});
$('#mv-recruit').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
		$('.mv-staff').removeClass('mv-in');
		$('header').removeClass('mv-in');
	} else {
		//表示領域から出た時
		$('.mv-staff').addClass('mv-in');
	}
});
$('.recruit header').removeClass('mv-in');

$('#recruit_01').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
		$('.recruit-frame ul').addClass('in');
	} else {
		//表示領域から出た時
		$('.recruit-frame ul').removeClass('in');
	}
});
$('#recruit_02').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
		$('.section-recruit_02 h3').addClass('in');
	} else {
		//表示領域から出た時
		$('.section-recruit_02 h3').removeClass('in');
	}
});
$('#recruit_03').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
		$('.section-recruit_03 h3').addClass('in');
	} else {
		//表示領域から出た時
		$('.section-recruit_03 h3').removeClass('in');
	}
});
$('#recruit_02_01').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
		$('.section-recruit_02 .movie-box').addClass('in');
	} else {
		//表示領域から出た時
		$('.section-recruit_02 .movie-box').removeClass('in');
	}
});
$('#recruit_03_01').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
		$('.section-recruit_03 .movie-box').addClass('in');
	} else {
		//表示領域から出た時
		$('.section-recruit_03 .movie-box').removeClass('in');
	}
});
$('.section-mv').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
		$('.topto').addClass('out');
		$('.recruitto').removeClass('in');
	} else {
		//表示領域から出た時
		$('.topto').removeClass('out');
		$('.recruitto').addClass('in');
	}
});
$('#recruit_04').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
	} else {
		//表示領域から出た時
		$('.section-recruit_04 .contents').removeClass('right-on left-on');
	}
});
$('#recruit_07').on('inview', function (event, isInView) {
	if (isInView) {
		//表示領域に入った時
		$('.section-recruit_07').addClass('out');
	} else {
		//表示領域から出た時
		$('.section-recruit_07').removeClass('out');
	}
});
$('.tgl-tb h4').on('click', function () {
	$(this).next('ul').toggle('fast')
	$(this).toggleClass('open')

})


$('.section-05 .item-area .item-box').each(function () {
	var pref = $(this).attr('data-pref')
	if ('pref-01' !== pref) {
		$(this).hide()
	} else {
		$(this).show()
	}
})

var start_pref = $('.section-05 main').attr('data-set_pref')
if (start_pref == '') {
	$('.section-05 .pref-list .pref-01').addClass('active')
} else {
	$('.' + start_pref).addClass('active')
	if (start_pref == 'new_store') {
		$('.section-05 .item-area .item-box').each(function () {
			var store = $(this).attr('data-new_store')
			if (store == 'true') {
				$(this).show()
			} else {
				$(this).hide()
			}
		})
	} else {
		$('.section-05 .item-area .item-box').each(function () {
			var pref = $(this).attr('data-pref')
			if (start_pref !== pref) {
				$(this).hide()
			} else {
				$(this).show()
			}
		})
	}
}
// $('.section-05 .item-area .item-box').each(function () {

// 	var pref = $(this).attr('data-pref')
// 	if (start_pref !== pref) {
// 		$(this).hide()
// 	} else {
// 		$(this).show()
// 	}

// })
$('.section-05 .pref-list li').on('click', function () {
	$('.section-05 .pref-list li').removeClass('active')

	var select_pref = $(this).attr('class')
	if (select_pref == 'new_store') {
		$('.section-05 .item-area .item-box').each(function () {
			var store = $(this).attr('data-new_store')
			if (store == 'true') {
				$(this).show()
			} else {
				$(this).hide()
			}
		})
		$(this).addClass('active')
	} else {
		$('.section-05 .item-area .item-box').each(function () {

			var pref = $(this).attr('data-pref')
			if (select_pref !== pref) {
				$(this).hide()
			} else {
				$(this).show()
			}

		})
		$(this).addClass('active')
	}
})


tab_check()
tab_paging()
$('.section-tab ul li').on('click', function () {
	$('.section-tab ul li').removeClass('active')

	$(this).children('li').addClass('active')
	$('.section-tab ul').removeClass('active')
	var click_tab = $(this).attr('class')
	$('.section-tab ul').attr('data-tab', click_tab)
	tab_check()
	tab_paging()

})
if ($('#mc-pachinko').find('section').length) {

} else {
	$('#mc-pachinko').children('p').remove()
	$('#mc-pachinko').append('<p>当店では取り扱っていません</p>')
}
$('.mc_select li').on('click', function () {
	$('.mc_select li').removeClass('active')
	$(this).addClass('active')
})
$('#mc-01').on('click', function () {
	$('#mc-pachinko').addClass('active')
	if ($('#mc-pachinko').find('section').length) {

	} else {
		$('#mc-pachinko').children('p').remove()
		$('#mc-pachinko').append('<p>当店では取り扱っていません</p>')
	}
	$('#mc-slot').removeClass('active')
})
$('#mc-02').on('click', function () {
	$('#mc-pachinko').removeClass('active')
	if ($('#mc-slot').find('section').length) {
	} else {
		$('#mc-slot').children('p').remove()
		$('#mc-slot').append('<p>当店では取り扱っていません</p>')
	}
	$('#mc-slot').addClass('active')
})


function tab_check() {
	var tab_check = $('.section-tab ul').attr('data-tab')
	$('.section-tab ul li').each(function () {
		var this_tab = $(this).attr('class')
		if (this_tab == tab_check) {
			$(this).addClass('active')
		}
	})
}
function tab_paging() {
	var paging_tab = $('.section-tab ul').attr('data-tab')
	if (paging_tab == 'tab-01') {
		$('main > div').hide()
		$('.detail-01').slideDown('fast')
	}
	if (paging_tab == 'tab-02') {
		$('main > div').hide()
		$('.detail-02').slideDown('fast')
	}
	if (paging_tab == 'tab-03') {
		$('main > div').hide()
		$('.detail-03').slideDown('fast')
	}
	if (paging_tab == 'tab-04') {
		$('main > div').hide()
		$('.detail-04').slideDown('fast')
	}
}

$('.section-recruit_04 .left img').on('click', function () {
	// $('.section-recruit_04 .contents').removeClass('left-on right-on')
	$('.section-recruit_04 .contents').toggleClass('left-on')

})
$('.section-recruit_04 .right img').on('click', function () {
	// $('.section-recruit_04 .contents').removeClass('left-on right-on')
	$('.section-recruit_04 .contents').toggleClass('right-on')

})
// $('.section-recruit_04 .left-on .left img').on('click', function () {
// 	$('.section-recruit_04 .contents').removeClass('left-on right-on')

// })
// $('.section-recruit_04 .right-on .left img').on('click', function () {
// 	$('.section-recruit_04 .contents').removeClass('left-on right-on')

// })

$(window).scroll(function (e) {
	$('.section-recruit_05 section').each(function () {
		var pos = $(this).offset();
		var ball = $('.ball').offset();
		$(this).attr('data-h', pos.top)
		if (pos.top < ball.top + 30) {
			var ball_no = $(this).attr('data-work_no')
			$('.ball').text(ball_no)
		}
	})

});

$('.text_group').on('click', function () {
	var qa = $(this).attr('data-text_type')
	var ctr = $(this).parents('.container')
	console.log(qa);
	if (qa == 'q-1') {
		// ctr.removeClass('a-2')
		ctr.toggleClass('a-1')
		// $('.qa-3 dd .text_group').toggle('fast')
		setTimeout(function () {
			$('.qa-3 dd .text_group').toggleClass('on')
		}, 300);

	}
	if (qa == 'q-2') {
		// ctr.removeClass('a-1')
		ctr.toggleClass('a-2')
		// $('.qa-4 dd .text_group').toggle('fast')
		setTimeout(function () {
			$('.qa-4 dd .text_group').toggleClass('on')
		}, 300);
	}
})

var a = $('.recruit-form').attr('data-recruit-a')
var c = $('.recruit-form').attr('data-recruit-c')
var s = $('.recruit-form').attr('data-recruit-s')

if (a == 'false') {
	$('input[value="アルバイト"]').attr('disabled', 'disabled')
	$('input[value="アルバイト"]').prop('checked', false)

	$('.recruit-form').hide()
}
if (c == 'false') {
	$('input[value="キャリア"]').attr('disabled', 'disabled')
	$('input[value="キャリア"]').prop('checked', false)

}
if (s == 'false') {
	$('input[value="新卒"]').attr('disabled', 'disabled')
	$('input[value="新卒"]').prop('checked', false)

}
$('.application .section-tab ul li').on('click', function () {

	var a = $('.recruit-form').attr('data-recruit-a')
	var c = $('.recruit-form').attr('data-recruit-c')
	var s = $('.recruit-form').attr('data-recruit-s')
	$('.application .section-tab ul li').removeClass('active')
	var on_form = $(this).attr('class')
	$(this).addClass('active')
	$('.recruit-form').show()

	if (on_form == 'tab-01') {
		$('input[value="アルバイト"]').prop('checked', true)
		if (a == 'false') {
			$('.recruit-form').hide()

		}
	}
	if (on_form == 'tab-02') {
		$('input[value="キャリア"]').prop('checked', true)
		if (c == 'false') {
			$('.recruit-form').hide()

		}
	}
	if (on_form == 'tab-03') {
		$('input[value="新卒"]').prop('checked', true)
		if (s == 'false') {
			$('.recruit-form').hide()

		}
	}
})



$(function () {
	$(".movie-thumb").on("click", function () {
		if ($('.sp-spacer').is(':visible')) {
			window.open('https://www.youtube.com/embed/HYXKqR-7E7k?rel=0&autoplay=1', '_blank');
		} else {
			videoControl("playVideo", $(this).prev("iframe"));
			$(this).hide();
		}
	});
	function videoControl(action, tgt) {
		var $playerWindow = $(tgt)[0].contentWindow;
		$playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
	}
});