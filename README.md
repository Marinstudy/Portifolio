# Portfólio Acadêmico - Ensino Médio Técnico em Informática (SENAC)

Repositório oficial do portfólio acadêmico desenvolvido por Maria Clara de Lima Ferreira, estruturado com HTML5, CSS3, Bootstrap e JavaScript puro.

## Arquitetura de Armazenamento e CRUD (Etapa 02)
A aplicação foi projetada utilizando o armazenamento local do navegador através da API nativa **`localStorage`** em formato JSON. 
- **Iniciação Automática:** No primeiro acesso, o script verifica se o armazenamento local está vazio e injeta automaticamente **20 registos de teste** para validação imediata das funcionalidades de leitura e listagem.

## Automação e Notificações (Etapa 2.2)
O sistema prevê o encaminhamento de contactos e registo síncrono em JavaScript para garantir a persistência dos dados no cliente.

## Acesso aos Dados (CRUD)
Para testar o painel de gestão de dados localmente:
1. Abra a consola do navegador (F12 > Console).
2. Execute o comando `lerMensagens()` para visualizar todos os registos em JSON guardados.
