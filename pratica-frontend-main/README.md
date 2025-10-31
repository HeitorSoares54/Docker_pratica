# Frontend - Timezone App em Angular

Este é o frontend da aplicação de consulta de timezones, desenvolvido em Angular com interface moderna e responsiva.

## 📋 Sobre a Aplicação

A interface web fornece:
- **Seleção de Timezone**: Dropdown com todos os timezones disponíveis
- **Consulta de Horário**: Botão para obter o horário atual do timezone selecionado
- **Exibição de Resultados**: Mostra timezone e data/hora formatados
- **Tratamento de Erros**: Feedback visual para erros de conexão

## 🔧 Versões e Dependências

### Versão do Node.js:
- **Node.js 18** ou superior (recomendado)

### Framework Principal:
- **Angular 17.0.0** - Framework web moderno

### Dependências de Build:
- `@angular/core ^17.0.0` - Core do Angular
- `@angular/common ^17.0.0` - Módulos comuns do Angular
- `@angular/forms ^17.0.0` - Formulários reativos
- `@angular/platform-browser ^17.0.0` - Suporte para navegador
- `@angular/router ^17.0.0` - Sistema de roteamento
- `rxjs ~7.8.0` - Biblioteca para programação reativa
- `typescript ~5.2.0` - Linguagem TypeScript
- `zone.js ~0.14.0` - Detecção de mudanças

### Dependências de Desenvolvimento:
- `@angular/cli ^17.0.0` - Interface de linha de comando
- `@angular-devkit/build-angular ^17.0.0` - Ferramentas de build
- `karma ~6.4.0` - Test runner
- `jasmine-core ~5.1.0` - Framework de testes

### Dependências de Runtime:
- **Servidor Web**: Nginx (para servir arquivos estáticos)
- **Porta**: 80 (configurada no nginx)
- **API Backend**: Conecta-se à API na porta 8080

## 🐳 Tarefa: Criar o Dockerfile

Sua tarefa é criar um `Dockerfile` do zero para containerizar esta aplicação Angular. Você deve criar o arquivo seguindo as instruções abaixo.

### Requisitos do Dockerfile:

1. **Imagem Base**: Use uma imagem oficial do Node.js para build

2. **Diretório de Trabalho**: Defina um diretório de trabalho dentro do container

3. **Dependências**: 
   - Gerencie as dependências do npm adequadamente
   - Otimize o processo de instalação

4. **Build da Aplicação**: 
   - Execute o build de produção do Angular
   - Gere os arquivos estáticos otimizados

5. **Servidor Web**: 
   - Use Nginx para servir os arquivos estáticos
   - Configure o proxy para a API backend

6. **Configuração**: 
   - Use o arquivo nginx.conf existente
   - A aplicação deve rodar na porta 80

7. **Multi-stage Build**: Considere usar build em múltiplas etapas para otimizar o tamanho

### 🔍 Dicas Importantes:

1. **Pesquise sobre**: Dockerfiles para aplicações Angular
2. **Considere**: Multi-stage builds para aplicações frontend
3. **Pense em**: Como otimizar o tamanho da imagem final
4. **Lembre-se**: Nginx precisa da configuração correta para SPAs

### 🧪 Como Testar:

Após criar o Dockerfile, você pode testá-lo com:

```bash
# Build da imagem
docker build -t frontend-app .

# Executar o container
docker run -p 80:80 frontend-app

# Testar a aplicação
curl http://localhost/
```

### ✅ Validação:

Seu Dockerfile está correto se:
- A aplicação Angular compila sem erros
- O Nginx serve os arquivos corretamente na porta 80
- A interface carrega no navegador
- A comunicação com a API backend funciona

### 📚 Recursos Úteis:

- [Documentação oficial do Docker](https://docs.docker.com/engine/reference/builder/)
- [Angular Deployment Guide](https://angular.io/guide/deployment)
- [Nginx Docker Official Image](https://hub.docker.com/_/nginx)
- [Multi-stage Builds](https://docs.docker.com/develop/dev-best-practices/)

### 🎯 Objetivos de Aprendizado:

- Entender como containerizar aplicações Angular
- Aprender sobre multi-stage builds
- Compreender a configuração do Nginx para SPAs
- Praticar otimização de imagens Docker
- Entender a separação entre build e runtime

Boa sorte! 🚀