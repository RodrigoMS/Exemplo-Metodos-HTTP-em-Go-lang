/* ---------------------------------------------------------------*/
/*                                                                */
/* Implementação do servidor GO para o exemplo do vídeo sobre     */ 
/* métodos HTTP com GO disponível no Youtube.                     */
/* URL:https://youtu.be/lEAEUd4n-Yw                               */ 
/*                                                                */
/* Por: Rodrigo Messias.                                          */
/* Data: 29 de agosto de 2021.                                    */
/* Versão: 1.0                                                    */
/*                                                                */
/* ---------------------------------------------------------------*/

// Nome do pacote.
package main

// Importação de bibliotecas.
import (
	// Pacote que implementa cliente/servidor HTTP.
	"net/http"

	// referência - importação do arquivo.
	router "localhost.com/router"
)

// Função inicial: 
// - Implementa o servidor;
// - Serve a pasta assets;
// - Solicita direcionamento de requisições.
func main() {

	// Solicita direcionamento de requisições.
	router.HandleRoutes()

	// Permite o acesso a pasta assets. 
	// Atendendo as solicitações com o conteúdo do sistema de arquivos.
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets"))))

	// Escutar e servir 
	// Parâmetros: Endereço/interface e manipulador.
	http.ListenAndServe(":8080", nil)
}