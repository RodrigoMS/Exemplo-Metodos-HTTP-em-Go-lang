/* ---------------------------------------------------------------*/
/*                                                                */
/* Script exemplo de manipulação e envio de formulário assíncrono */ 
/* para o vídeo sobre methods HTTP com GO disponível no Youtube.  */
/* URL:https://youtu.be/lEAEUd4n-Yw                               */ 
/*                                                                */
/* Por: Rodrigo Messias.                                          */
/* Data: 29 de agosto de 2021.                                    */
/* Versão: 1.0                                                    */
/*                                                                */
/* ---------------------------------------------------------------*/

// Atribui a variável form, a Tag "form" e todo o seu conteúdo.  
var form = document.getElementsByTagName("form")[0];

// Executa a função assim que ocorre a seleção de uma 
// opção na Tag select.
form.text.addEventListener("change", alterMethod);
form.method.addEventListener("change", alterOption);

// Executa a função assim que o botão "Enviar" do formulário 
// é pressionado. Enviando o formulário em segundo plano.
form.addEventListener("submit", submitForm);

// Alterando o valor do select "method".
function alterMethod(){
	form.method.value = "GET";
}

// Alterando o valor do select "text" se for
// diferente de "GET".
function alterOption() {
	if (form.method.value != "GET") {
		form.text.value = "";
	}
}

// Monta a requisição e envia ao servidor.
function sendData(url, data, method, header, response) {
	// var - quando o script for executado é levado para o superior, permitindo
	//       ser acessada a qualquer momento em qualquer escopo. Fica na memória
	//       até o final da execução da aplicação.

	// let - mantém o escopo da variável dentro da função ou estrutura a qual 
	//       foi declarada sendo apagada da memória quando a função ou estrutura
	//       termina a sua execução.

	// Cria um objeto AJAX para solicitação assíncrona a um servidor WEB.
	// É uma forma de recuperar dados de um URL sem ter que fazer a 
	// atualização de página inteira. 

	// Isso permite que uma página da Web atualize apenas uma parte do conteúdo 
	// sem interromper o que o usuário esteja fazendo.
	let httpRequest = new XMLHttpRequest();

	// Inicializa uma nova requisição, ou reinicializa uma requisição já existente.
	httpRequest.open(method, url);

	httpRequest.onerror = () => {
		alert("Erro na comunicação com o servidor.");
	};

	// Define o tipo do cabeçalho de uma requisição HTTP.
	// Content-Type - É utilizado para indicar o tipo de arquivo do recurso.
	// X-Content-Type-Options - Exige que o conteúdo seja enviado por Content-Type.
	// Mine types - Indica a natureza e o formato de um documento, arquivo ou 
	// variedade de bytes.
	httpRequest.setRequestHeader("X-Content-Type-Options", header);

	// Envia a requisição para o servidor.
	httpRequest.send(data);

	// Dispara a função assim que a propriedade readyState é modificada.
	// A propriedade readyState retorna o status da solicitação.  
	httpRequest.onreadystatechange = response;

}

function submitForm() {

	event.preventDefault();

	// Declara uma variável que contém um objeto.
	let data = {
		"text": form.text.value
	};

	let uri = "./method";

	// Apresenta um único dado ou conjunto de dados.
	if(data.text == "show") {
		// O número 1 representa um ID.
		uri = "./method/id/1";
		alterMethod()
	
	} else if (data.text == "search") {
		// Representa uma pesquisa.
		uri = "./method/search?name=Rodrigo&date=06-07-2021";
		alterMethod()
	}

	sendData (
		uri,                  // URI.
		JSON.stringify(data), // Dados.
		form.method.value,    // Método HTTP.
		"application/json",   // Cabeçário.
		getResponse           // Função de retorno da resposta.
	);
}


function getResponse() {
	let response = document.getElementById('response');

	// Object literals - Design Pattern
	const status = {
		4: () => {
			// Ação a ocorrer assim que a  
			// operação for concluída. 
		},

		// Resposta quando o dado for atualizado,
		// ou um único recurso for apresentado, 
		// ou quando ocorrer uma burca/pesquisa.
		200: () => {
			// Para respostas em Form-Data.
			// response.innerHTML = this.responseText;

			/* Para respostas em JSON. */
			// Retorna um array.
			let data = JSON.parse(this.responseText);

			response.innerHTML = data.Method + data.Descrition;

			form.text.value = "";
		},

		// Resposta quando o dado form adicionado.
		201:() => {
			let data = JSON.parse(this.responseText);

			response.innerHTML = data.Method + data.Descrition;
		},

		// Como status 204 não deve retornar resposta.
		// Ele apresenta uma resposta definida no próprio JS. 
		204:() => {
			response.innerHTML = "DELETE - Recurso excluído.";
		},

		// Caso ocorra um acesso inválido ao servidor.
		404:() => { 
			response.innerHTML = "Acesso inválido ao servidor.";

		}
	};

    // https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/readyState
    // readyState -Indica que a operação foi concluída.

    // Verifica se a operação foi concluida.
	if(status[this.readyState]) {

		// Verifica se o status esperado existe no objeto status.
		if (status[this.status]) {

			// Executa a função do objeto "status".
			status[this.status]();
		}
	}
}
