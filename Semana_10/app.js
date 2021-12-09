let data_usuario


function compararDatas(){
	let dataAtual = new Date()
	dataAtual = `${dataAtual.getFullYear()}-${dataAtual.getMonth()+1}-${dataAtual.getDate()}`
	dataAtualCorte = dataAtual.split('-')
	dataUsuario = document.getElementById('dataInput').value
	dataUsuarioCorte = dataUsuario.split('-')

	console.log(`A diferença entre as datas é de ${retornaAnos(dataAtualCorte[0], dataUsuarioCorte[0])} ano(s), 
		${retornaMeses(dataAtualCorte[1], dataUsuarioCorte[1])} mês/meses,
		 e ${retornaDias(dataAtualCorte[2], dataUsuarioCorte[2])} dia(s)`)
}
function retornaAnos(atual,comp){
	return Math.abs(parseInt(atual) - parseInt(comp))
}
function retornaMeses(atual,comp){
	return Math.abs(parseInt(atual) - parseInt(comp))
}
function retornaDias(atual,comp){
	return Math.abs(parseInt(atual) - parseInt(comp))
}
