/* ---------------------------------------------------------------*/
/*                                                                */
/* Pacote que terá funções que atendem às solicitações de acordo  */
/* com o método HTTP e/ou parâmetros via URL.                     */
/*                                                                */
/* Veja a implementação no Youtube:                               */
/* URL:https://youtu.be/lEAEUd4n-Yw                               */ 
/*                                                                */
/* Por: Rodrigo Messias.                                          */
/* Data: 29 de agosto de 2021.                                    */
/* Versão: 1.0                                                    */
/*                                                                */
/* ---------------------------------------------------------------*/

package methods

import (
	"net/http"      // Implementa cliente/servidor HTTP.
	"encoding/json" // Codificação em JSON.
	"strings"       // Manipula strings codificadas em UTF-8.
)

// Métodos HTTP
// GET: Apresenta resultados de recursos (Busca/lista dados).
// POST: Cria um novo recurso (Cadastra dados).
// PUT: Atualiza um recurso (Atualiza dados).
// DELETE: Apaga um recurso (Deleta dados).

// Query Params: Parâmetros nomeados na rota após "?" (Filtro, paginação)
// Router Params: Parâmetros utilizados para identificar recursos. (/id , /name)
// Request Body: Corpo da requisição, utilizado para criar ou alterar recursos. ( enviar dados por POST e PUT)