//jQuery time




$(document).ready(function(){
	$.mask.definitions['x'] = ["A-Za-z0.9"];
  $('#CNPJ').mask('00.000.000.0000-00');
  
  $('#tel').mask('(00) 00000-0000');

});

$(".send").click(function(){
	$("#codigo").each(function() {
            if ($(this).attr('disabled')) {
                $(this).removeAttr('disabled');
                //$(this).attr('placeholder', 'Digite o código de verificacao aqui')
            }
            else {
                $(this).attr({
                    
                });
            }
        });
});






