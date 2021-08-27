/* ---------------------------------------------------------------*/
/*                                                                */
/* Pacote solicitado quando a página inicial do aplicativo é      */
/* requerida.                                                     */
/*                                                                */
/* Youtube URL:                                                   */
/*                                                                */
/* Por: Rodrigo Messias.                                          */
/* Data: 07 de julho de 2021.                                     */
/* Versão: 1.0                                                    */
/*                                                                */
/* ---------------------------------------------------------------*/

package frontend

import (
	"net/http"
)

// Apresenta a interface gráfica para o usuário.
func GetHTML(w http.ResponseWriter, r *http.Request){

	// Servir um arquivo específico.
	// Parâmetros: Resposta, requisição e local do arquivo.
	http.ServeFile(w, r, "./pages/methods.html")
}