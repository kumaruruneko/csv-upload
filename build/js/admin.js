jQuery(function ($) {
	if ($('.acf-tab-group li').eq(1).hasClass('active')) {
		$('.tb_box').show()
	} else {
		$('.tb_box').hide()
	}

	$('.acf-tab-group li').on('click', function () {
		var tb = $('.acf-tab-group li').index(this);
		if (tb == true) {
			$('.tb_box').show()
		} else {
			$('.tb_box').hide()
		}
	})


	post_name_set()
	$('.tb_box dl input').on('change', function () {
		post_name_set()

	})

	function post_name_set() {
		$('.tb_box dl').each(function () {
			var mc_name = $(this).find('dt').children('input').attr('data-base_val')
			var mc_value = $(this).find('dt').children('input').val()
			var mc = mc_name + '[' + mc_value + ']'
			$(this).find('dt').children('input').attr('name', mc)
			$(this).find('dd').children('input').attr('name', mc)
		})
	}

	$(document).on('click', '.del_mc', function () {
		$(this).parents('dl').fadeOut('fast').queue(function () {
			this.remove();
		});
	})
	$(document).on('click', '.add_mc', function () {
		var mc_val = $(this).parents('.tb_box').attr('data-set_val')
		var mc = $(
			'<div data-set_val="">' +
			'<span></span>' +
			'<dl>' +
			'<dt>機種名：<input required type="text" name="' + mc_val + '" value="" size="100" data-base_val="' + mc_val + '"></dt >' +
			'<dd>設置台数：<input required type="text" name="" value="" size="10"></dd >' +
			'<dd><button type="button" class="btn btn-primary btn-success del_mc">削除</button></dd>' +
			'</dl>' +
			'</div>'
		).hide().fadeIn(1000);
		$(this).parents('.tb_box').append(mc);


	})
	$(document).on('change', '.tb_box dl dt input', function () {
		var mc_base = $(this).attr('data-base_val')

		var mc_set = mc_base + "[" + $(this).val() + "]"
		$(this).attr('name', mc_set);
		if (mc_base == "") {
			var mc_base = $(this).attr('name')
			var mc_set = mc_base + "[" + $(this).val() + "]"
		}
		$(this).parent('dt').next('dd').children('input').attr('name', mc_set);
		console.log(mc_set);
	})

	$(document).on('click', '.add_rate', function () {
		var mc_rate = $(this).parents('.tb_box').children('div').attr('data-set_val')

		var mc = $(
			'<div data-set_val="" class="tb_box" id="tb_box-" style="display: block;">' +
			'<h3>レート別：<input required class="cs_rate" type="text" placeholder="4円パチンコ・5円スロットなど" name="" value="" size="50">' +

			'遊技台種別：' +
			'<label class="cs_type-p-l" for="pachi1" ><input class="cs_type-p" checked="" type="radio" id="pachi1" name="" value="pachinko">パチンコ</label>' +
			'<label class="cs_type-s-l" for="slot1"><input class="cs_type-s" type="radio" id="slot1" name="" value="slot">スロット</label>' +
			'<div class="btn_group">' +
			'<button type="button" class="btn btn-primary add_rate">レートを追加</button>' +
			'<button type="button" class="btn btn-primary add_mc">機種を追加</button>' +
			'<button type="button" class="btn btn-primary btn-success del_rate">レートを削除</button>' +
			'</div></h3>' +
			'<div>' +
			'<span></span>' +
			'<dl>' +
			'<dt>機種名：<input required type="text" name="" value="" size="100" data-base_val=""></dt >' +
			'<dd>設置台数：<input required type="text" name="" value="" size="10"></dd >' +
			'<dd><button type="button" class="btn btn-primary btn-success del_mc">削除</button></dd>' +
			'</dl>' +
			'</div>' +
			'</div>'
		).hide().fadeIn(1000);
		$('#custom_setting .inside').append(mc);
		var i = 0
		$('.tb_box').each(function () {
			if ($(this).attr('data-set_val') == "") {


				var cs = "cs['cs" + i + "'][レート別]"
				var cs_type = "cs['cs" + i + "'][遊技台種別]"
				var cs_type_p = "pachi" + i
				var cs_type_s = "slot" + i
				var cs_mc = "cs['cs" + i + "']"


				$(this).attr('id', 'box-' + i)
				$(this).attr('data-set_val', cs_mc)

				$(this).find('.cs_rate').attr('name', cs)
				$(this).find('.cs_type-p').attr('id', cs_type_p)
				$(this).find('.cs_type-p').attr('name', cs_type)
				$(this).find('.cs_type-s').attr('id', cs_type_s)
				$(this).find('.cs_type-s').attr('name', cs_type)
				$(this).find('.cs_type-p-l').attr('for', cs_type_p)
				$(this).find('.cs_type-s-l').attr('for', cs_type_s)
				$(this).find('dt input').attr('name', cs_mc)
				$(this).find('dt input').attr('data-base_val', cs_mc)

			}

			i++

		})
	})

	$(document).on('click', '.del_rate', function () {
		$(this).parents('.tb_box').fadeOut('fast').queue(function () {
			this.remove();
		});
	})


	$('#custom_setting dd input[type="text"]').each(function () {
		let value = $(this).val()
		if (!Number.isFinite(Number(value))) {
			let rate = $(this).closest('.tb_box').children('h3').children('input').val()
			let name = $(this).closest('dl').children('dt').children('input').val()
			$(this).attr('style', 'background-color:red')
			alert(rate + 'の' + name + 'の設置台数の入力にエラーがあります');
		} else {
			$(this).attr('style', 'background-color:white')
		}

	})
	$('#custom_setting dd input[type="text"]').on('blur', function () {
		let value = $(this).val()
		if (!Number.isFinite(Number(value))) {
			$(this).attr('style', 'background-color:red')
		} else {
			$(this).attr('style', 'background-color:white')
		}
	})

})