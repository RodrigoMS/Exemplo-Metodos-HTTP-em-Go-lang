/* ---------------------------------------------------------------*/
/*                                                                */
/* Pacote que verifica a rota de solicitação e executa a função   */
/* correspondente.                                                */
/*                                                                */
/* URL:https://youtu.be/lEAEUd4n-Yw                               */ 
/*                                                                */
/* Por: Rodrigo Messias.                                          */
/* Data: 29 de agosto de 2021.                                    */
/* Versão: 1.0                                                    */
/*                                                                */
/* ---------------------------------------------------------------*/

package router

import(
	// Implementa cliente/servidor HTTP.
	"net/http"

	// Manipula strings codificadas em UTF-8.
	"strings" 

	// Referências a pacotes do projetos.
	frontend "localhost.com/frontend"
	methods "localhost.com/methods"
)

// Direciona a aplicação para o pacote da 
// funcionalidade conforme a requisição.
func HandleRoutes() {

	// Adiciona manipuladores ao servidor.
	// Parâmetros: Rota e função a ser executada.
	http.HandleFunc("/", frontend.GetHTML)
	http.HandleFunc("/method", handleMethods)
	http.HandleFunc("/method/", handleValue)
}

func handleMethods(w http.ResponseWriter, r *http.Request) {
	
}

func handleValue(w http.ResponseWriter, r *http.Request) {

}