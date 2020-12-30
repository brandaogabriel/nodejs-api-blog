# 📝 API REST "My blog"

A api desenvolvida tem por finalidade exercitar meus conhecimentos a respeito de javascript, typescript e nodejs.

**Atenção:** Você precisa ter o NodeJS e o yarn instalado no seu computador.

Para subir o projeto no ar com o Postgres, copie o arquivo `.env_example` para `.env`.


Execute os comandos abaixo:

```
yarn
yarn sequelize db:migrate
yarn sequelize db:seed:all
yarn dev:server
```

Neste ponto sua API deverá está rodando no endereço http://localhost:3001/.

As **configurações** da base de dados **Postgres** ja estão **definidas** em `src/config/database.ts`. Você precisa definir a conexão em `.env`, como já citado acima.

As configurações começando com `process.env.` vem do arquivo `.env`.

Você pode verificar os usuários e os posts criados em `src/database/seeds`.

Você pode obter o token JWT na rota `/tokens`, passando os dados JSON:

```json
{
	"email": "admin@admin.com.br",
	"password": "123456"
}
```
# Endpoints

Os seguintes endpoints estão configurados:

## Home
**É necessário estar logado para realizar a ação**
- `/` - GET - Exibe todos os posts de forma simplificada (Titulo, tema e tags)

## Posts
**É necessário estar logado para realizar alguma ação**
- `/posts` - GET - Mostra todos os posts do blog
- `/posts/:id` - PUT - Atualiza o post (titulo ou assunto) a partir do ID informado (é necessário ser o autor do post para alterá-lo).
- `/posts` - POST - Cria o post
- `/posts/:id` - GET - Mostra um post específico a partir do ID informado
- `/posts/:id` - DELETE - Remove um post a partir do ID informado (é necessário ser o autor do post para removê-lo).

**Dados para posts (JSON)**
```json
  {
	"title": "Titulo válido",
	"theme": "Tema válido",
	"subject": "Algum assunto válido",
	"tags": "tags válidas"
  }
```


## Usuários (users)
- `/users` - POST - Cria um usuário

**Dados para usuários (JSON)**

```json
{
	"name": "nome válido",
	"email": "email_valido@email.com",
	"password": "senha válida"
}
```

## Tokens

- `/tokens` - POST - Obtém o token JWT

**Dados para tokens (JSON)**

```json
{
	"email": "admin@admin.com.br",
	"password": "123456"
}
```
## 🛠️ Ferramentas
1. typescript
2. express
3. pg
4. jsonwebtoken
5. sequelize
6. validator
7. bcryptjs
8. dotenv

## 🤖 Comandos

`build` - Compila e executa o projeto typescript para a pasta ./dist

`dev:server` - Executa o projeto typescript em modo de desenvolvimento.

`production:server` - Executa o projeto em modo de produção (./dist/server.js).
