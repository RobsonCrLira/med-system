## Desenvolver um sistema que faça a gestão de cadastros de médicos. O Sistema deve suportar as seguintes operações:

- [x] Insert
- [ ] Update
- [ ] Select
- [ ] Soft Delete

No cadastro do médico, devem ser cadastrados os seguintes itens:

- [x-1] Nome do médico com no máximo 120 caractéres
- [x-1] CRM: somente números com no máximo 7 caracteres
- [x-1] Telefone celular: somente números
- [x-1] CEP: somente números (Ao cadastrar o CEP, deve ser feita uma reqisição via XHR para a API dos correios e retornar todos os dados de endereço do cliente).
- [ ]Especialidade médica (mínimo de duas especialidades)

## Itens importantes:

- [ ] Criar mecanismo de busca por todos os campos do cadastro do médico, incluindo o endereço
- [x] Estar no padrão REST
- [ ] Utilizar ferramenta de validação (exemplo: YUP)
- [ ] Funções especialistas (Realizam somente uma operação)
- [ ] Para documentação e requisição utilizar o Postman, Insomnia ou Swagger (Enviar junto com o teste o workspace utilizado)
- [ ] Subir o código em repositório público do GitHub
- [ ] Criar arquivo docker compose para avaliação do teste
- [ ] Testes unitários
- [ ] Testes "end to end"

## Diferenciais

- Estrutura e implementação autênticos
- Testes de integração
- AWS (ECS, RDS)
- Estruturação de banco de dados MySQL
- Conhecimento em NoSQL
- Metodologias ágeis
- Filas (RabbitMQ ou SQS)

## Ferramentas para serem utilizadas no desenvolvimento (Escolha entre as duas linguagens citadas abaixo)

### Node.JS (Seguir as seguintes orientações)
- NestJS
- TypeScript
- Sequelize ou TypeORM
- Migrations e Seeds

### Java (Seguir as seguintes orientações)
- SpringBoot
- Hibernate

## No banco de dados devem estar cadastradas as seguintes especialidades:
- Alergologia
- Angiologia
- Buco maxilo
- Cardiologia clínca
- Cardiologia infantil
- Cirurgia cabeça e pescoço
- Cirurgia cardíaca
- Cirurgia de tórax

Ao finalizar a implementação, encaminhe no campo de resposta o link do repositório do GitHub onde foi feito o upload do código.

Para dúvidas entrar em contato através do endereço: nikolas.lencioni@gcbinvestimentos.com