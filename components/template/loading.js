$( document ).ready(function() {
    initloading();

    $('#btn_leermas').on('click',function(){
    	$('#contenido_details').click();
    })

    setTimeout(function(){
    	if ($('#btn_play').hasClass('bb-paused')) {
    		$('#btn_play').click();
    		$("#player").addClass('open');
    		$("#dropdownMenu1").attr('aria-expanded','true');	
    	}
    },10000);
});

function initloading() {
	let init = 0;
	let velocidad = 1700 / 100;
	let interval = setInterval(function(){
		if (init < 101 ) {
			$('#loading__text').html(init + '%');
			init++;	
		}else
		{
			$('#loading__text').addClass('load');
			clearInterval(interval);
		}
	}, velocidad);

}

function loadTrack(tracknumber){
	bbplayers[0].__proto__.loadTrack(tracknumber);
	setTimeout(function () {
		$("#player").addClass('open');
    	$("#dropdownMenu1").attr('aria-expanded','true');
	});
	return;
}