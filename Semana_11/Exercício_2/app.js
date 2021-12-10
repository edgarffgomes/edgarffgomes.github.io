function adicionaItem(){
	let no = document.createElement('li')
	let text = document.getElementById('items').value
	let textno = document.createTextNode(text)
	no.appendChild(textno)
	document.getElementById('lista-menu').appendChild(no)
}