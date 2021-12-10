function alteraFoto(){
	
	if(document.getElementById('foto').getAttribute('src') == 'imagens/lampada_off.gif'){
		document.getElementById('foto').setAttribute('src', 'imagens/lampada_on.gif')
	} else{
		document.getElementById('foto').setAttribute('src', 'imagens/lampada_off.gif')
	}
}