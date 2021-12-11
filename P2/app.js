function calcularPreco(){
	let valor = 0
	let nome = document.getElementById('nome').value
	let telefone = document.getElementById('telefone').value
	let dataRet = document.getElementById('data-ret').value
	let dataEnt =  document.getElementById('data-ent').value
	let cidRet = document.getElementById('cidade-ret').value
	let cidEnt = document.getElementById('cidade-ent').value
	let carTipo = document.getElementById('car-type').value

	if(verificarElementos(nome,telefone, dataRet, dataEnt, cidRet, cidEnt, carTipo) == false){
		alert('Há campos não preenchidos')
		return
	} 
	if(compararDatas(dataRet, dataEnt) == false){
		alert('Há um erro com as datas!')
		return
	}
	if (verCidades(cidRet, cidEnt) !== true){
		valor += 300;
	}
	valor+= verCarro(carTipo);

	alert(`Solicitação feita no nome de ${nome}, de telefone ${telefone}, 
		com data de retirada marcada para ${dataRet}, e entrega para ${dataEnt},
		A cidade de retirada é ${cidRet}, e a de entrega é ${cidEnt},
		o tipo de carro é {carTipo}, e o valor total é de ${valor} reais`) 
}
function verificarElementos(n, t, dR, dE,cR, cE, cTP){
	let vet  = [n, t,  dR, dE, cR, cE, cTP]
	console.log(vet)
	for(let i = 0; i<vet.length; i++){
		if(vet[i] == ''){
			return false
		}
	}
	return true
}

function compararDatas(retirada, entrega){
	retCorte=retirada.split('-')
	entCorte=entrega.split('-')
	if(retCorte[0]> entCorte[0]){
		return false
	} else{
		if (retCorte[1] > entCorte[1]) {
			return false
		} else {
			if(retCorte[2] > entCorte[2]){
				return false
			}
			else{
				return true
			}
		}
	}

}

function verCidades(retirada, entrega){
	if(retirada.toUpperCase() == entrega.toUpperCase()){
		return true
	} else{
		return false
	}
}

function verCarro(carro){
	switch(carro){
		case 'B':
		return 119
		break;

		case 'B-Ar':
		return 199
		break;

		case 'Ex':
		return 299
		break;

		default:
		alert('Tipo inexistente!')
		return 0
	}
}