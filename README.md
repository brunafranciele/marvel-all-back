# Marvel App Back-End!

Este projeto é uma aplicação que permite consultar personagens e HQs da Marvel, além de possuir também a funcionalidade de favoritá-los e desfavoritá-los. :foguete:
Link API da Marvel: https://developer.marvel.com/
Link Aplicação:

---

# HABILIDADES TRABALHADAS

  - NodeJS para manipulação do Banco de Dados desenvolvido para esta aplicação
  - Requisições à API da Marvel para obtenção de informações externas utilizando o fetch
  - Uso de Banco de Dados relacional (MySQL)
  - Estrutura MVC para organização do código

---

## O QUE FOI DESENVOLVIDO

A aplicação conta com quatro rotas para manipulação de dados referentes aos usuários, personagens, HQs e favoritos.
 - Rota User: é possível cadastrar um usuário, fazer login na aplicação gerando um token de validação exclusivo para aquele acesso, e as informações dos usuários podem ser alteradas.
 - Rota Personagens e Comics: é feita uma consulta à API da Marvel através das chaves pṹblicas e privadas, e do hash, gerados para autorização. Isto é feito para limpar os endpoints e trazer a responsabilidade de requisição externa para o back-end, assim o usuário do front-end recebe as informações filtradas. Foram desenvolvidas rotas para efetuar consultas diretamente pelos nomes, e também pelos ids dos personagens e HQs.
 - Rota Favoritos: rota pela qual é possível favoritar e desfavoritar personagens e HQs, e acessar a lista de favoritos de cada usuário.
 Para construção dessas rotas, foram utilizados os métodos GET, POST, PUT e DELETE.

---

## LISTA DE ENDPOINTS

 - /user/register ~ rota para cadastro de um novo usuário
 - /user/login ~ rota para um usuário logar na aplicação
 - /user/update ~ rota para atualização de dados cadastrais de um usuário
 - /user/:id ~ rota para buscar os dados de um usuário através de seu id
 - /character/name/:name ~ rota para realizar consulta dos dados de um personagem na API da Marvel através de seu nome
 - /character/:id ~ rota para realizar consulta dos dados de um personagem na API da Marvel através de seu id
 - /comic/title/:title ~ rota para realizar consulta dos dados de uma HQ na API da Marvel através de seu título
 - /comic/:id ~ rota para realizar consulta dos dados de uma HQ na API da Marvel através de seu id
 - /favorite ~ rota para cadastrar uma HQ ou um personagem na lista de favoritos do usuário
 - /favorite/:id ~ rota para buscar a listagem de favoritos de um usuário com base em seu user_id
 - /favorite/delete ~ rota para deletar um favorito da listagem

---

## LINKS

 - Aplicação: https://marvel-bf.herokuapp.com/
 - API da Marvel: https://developer.marvel.com/
 - API exclusiva da Aplicação: https://marvel-back-bf.herokuapp.com/
