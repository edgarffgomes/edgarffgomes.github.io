function calcularPreco(){
	let valor = 0;
	let cidRet = document.getElementById('cidade-ret').value
	let cidEnt = document.getElementById('cidade-ent').value
	let carTipo = document.getElementById('car-type').value
	if (verCidades(cidRet, cidEnt) !== true){
		valor += 300;
	}
	valor+= verCarro(carTipo);

	alert(`Valor total: ${valor}`)
}

function verCidades(retirada, entrega){
	if(retirada.toUpperCase() == entrega.toUpperCase()){
		return true
	}
	else{
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