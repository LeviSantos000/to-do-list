# To-Do-List
Um mini projeto de **lista de tarefas (To-Do-List)** desenvolvido no curso de Formação Full Stack do Geração Tech.  
Foi utilizado HTML, CSS e JavaScript, junto com o JSON-Server simulando uma API RESTful para persistência de dados.

## Funcionalidades
* Cria tarefas com título e descrição.
* Exclui tarefas.
* Possui uma barra de pesquisa para buscar tarefas específicas por título ou descrição.
* Os dados são guardados em um arquivo `.json`, simulando um banco de dados.

## Tecnologias
* HTML5
* CSS3
* JavaScript (ES6)
* Node.js
* JSON-Server

## Como Executar?
**Pré-requisitos**
* É necessário ter o Node.js instalado no seu computador para rodar o JSON-Server.
1. Clone o repositório
```bash
git clone https://github.com/LeviSantos000/to-do-list.git
cd to-do-list
```
2. Instale o JSON-Server
```bash
npm i json-server
```
3. Inicie o servidor do JSON-Server
```bash
npx json-server api.json --watch --port 3000
```
4. Execute o arquivo index.html

**Abra o arquivo `index.html` no seu  navegador.**
