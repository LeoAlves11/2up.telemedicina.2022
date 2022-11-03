## Changelog
--------------------------------------------------------------------------------------------------------------------

## v0.2.2

/ ############### Adicionado ############### /

- Nova navbar para Desktop
- Adicionado usuários Gestores
- Novas Páginas (Estilo novo v0.2.2)
- Adicionado React Styled Components 
- Adicionado novos estilos globais ( functional component - GlobalStyle )
- Adicionado React Helmet ( funções Header/Head para React (Meta Description, Titulo, Links Canonicos) )
- Adicionado Model de Médicos
- Adicionado Model de Especialidades
- Adicionado Migration de Medicos
- Adicionado Migration de Especialidades
- Adicionado Migration para controle de nivel de conta
- Adicionado Sidebar
- Adicionado Rotas de Pacientes
- Adicionado novo logo televet

/ ############### Correção de Bugs / Alterações ############### /

- Changelog alterado para Readme na pasta raiz (retirado do frontend)
- Adicionado funções assíncronas para fetch de usuários e medicos
- Navbar mobile separado e desativado
- Alterado o cache de session para local Storage

/ ############### Removido ############### /

- Changelog.md
- Removido Migration de CRM / CRN na tabela de usuários

## v0.2.1

/ ############### Adicionado ############### /

- Organização de pastas client e server para o frontend
- Adicionado arquivo procfile ao server-side para rodar no Heroku

/ ############### Correção de Bugs / Alterações ############### /

- Correção server-side do node.js
- Alterações nos Actions de socket do Server Side

/ ############### Removido ############### /

- Removido servidor do client

## v0.2.0

/ ############### Adicionado ############### /

- Chamada de vídeo v1 completa

/ ############### Correção de Bugs / Alterações ############### /

- Correção de layout Login e Registro em versões Desktop
- Correção de layout Navbar pacientes em versões Desktop

/ ############### Removido ############### /

- Nada foi removido.

## v0.1.9

/ ############### Adicionado ############### /

- Login de médicos
- Adicionado página de chamada de vídeo instantânea
- Consultas de vídeo v1
- Mudança de tipo de autenticação ( Usuarios gerais )
- Organizado views por pastas ( Médicos / Pacientes )

/ ############### Correção de Bugs / Alterações ############### /

- Correção de login inválido da versão (v0.1.8)

/ ############### Removido ############### /

- Removido autenticações por tipo de tabela no banco (pacientes e medicos)

## v0.1.8

/ ############### Adicionado ############### /

- Pastas separadas por tipo de usuario (Médicos / Pacientes)
- Validações de CPF únicos no registro de pacientes
- Validações de senhas iguais para login
- Adicionados namespaces no back-end para controllers e rotas (Médicos / Pacientes)
- Separação de Controllers e Models por usuario (Médicos / Pacientes)
- Adicionado loading padrão(componente geral) nas páginas de Login e Registro

/ ############### Correção de Bugs / Alterações ############### /

- Correção bugs navbar/paciente
- Corrigido namespaces de pastas (Médicos / Pacientes)
- Correção de Loading não centralizado em dispositivos mobile
- Correção de navbar não centralizada em dispositivos mobile
- Aumentado tamanho dos textos para dispositivos mobile
- Corrigido botões de cadastrar-se e voltar para login quebrados em iOS

/ ############### Removido ############### /

- Pastas desorganizadas