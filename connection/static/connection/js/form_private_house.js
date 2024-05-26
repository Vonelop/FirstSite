$(document).ready(function () {
	$('#post-form').submit(function () {
		$.ajax({
			data: $(this).serialize(),
			type: $(this).attr('method'),
			url: '/',
			success: function (response) {
				$('.js-overlay-thank-you').css("display", "flex").hide().fadeIn();
				$(this).find('input').val('');
				$('#post-form').trigger('reset');
			},
			error: function (response) {
				alert(response.responseJSON.errors);
				console.log(response.responseJSON.errors)
			}
		});
		return false;
	});

	$('#post-form-business').submit(function () {
		$.ajax({
			data: $(this).serialize(),
			type: $(this).attr('method'),
			url: '/business/',
			success: function (response) {
				$('.js-overlay-thank-you').css("display", "flex").hide().fadeIn();
				$(this).find('input').val('');
				$('#post-form-business').trigger('reset');
			},
			error: function (response) {
				alert(response.responseJSON.errors);
				console.log(response.responseJSON.errors)
			}
		});
		return false;
	});
})

function moveCaretToStart(inputObject) {
	if (inputObject.selectionStart) {
		inputObject.setSelectionRange(3,3);
		inputObject.focus();
	}
}

$(function($){
	moveCaretToStart('#number_for_bisnues');
	$('[name="number_for_bisnues"]').mask("+7(999)999-9999");
});

$(function($){
	moveCaretToStart('#phone_number');
	$('[name="phone_number"]').mask("+7(999)999-9999");
});

$('.js-close-thank-you').click(function() {
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) {
	var popup = $('.js-thank-you');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-thank-you').fadeOut();
	}
});