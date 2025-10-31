# Backend - API de Timezones em Go

Este é o backend da aplicação de consulta de timezones, desenvolvido em Go usando o framework Gorilla Mux.

## 📋 Sobre a Aplicação

A API fornece os seguintes endpoints:
- `GET /health` - Verifica se a API está funcionando
- `GET /timezones` - Lista todos os timezones disponíveis
- `GET /time/{timezone}` - Retorna a data/hora atual para um timezone específico

## 🔧 Versões e Dependências

### Versão do Go:
- **Go 1.21** ou superior

### Dependências de Build:
- `github.com/gorilla/mux v1.8.1` - Router HTTP para Go
- `github.com/rs/cors v1.10.1` - Middleware para CORS

### Dependências de Runtime:
- **Sistema Operacional**: Linux (recomendado para containers)
- **Porta**: 8080 (configurada na aplicação)
- **Timezone Data**: Utiliza o banco de dados de timezone do sistema operacional

## 🐳 Tarefa: Criar o Dockerfile

Sua tarefa é criar um `Dockerfile` do zero para containerizar esta aplicação Go. Você deve criar o arquivo seguindo as instruções abaixo.

### Requisitos do Dockerfile:

1. **Imagem Base**: Use uma imagem oficial do Go

2. **Diretório de Trabalho**: Defina um diretório de trabalho dentro do container

3. **Dependências**: 
   - Gerencie as dependências do Go adequadamente
   - Otimize o processo de build

4. **Código Fonte**: Disponibilize o código fonte no container

5. **Build**: Compile a aplicação Go

6. **Porta**: A aplicação roda na porta 8080

7. **Execução**: Defina como a aplicação deve ser executada

### 🔍 Dicas Importantes:

1. **Pesquise sobre**: Dockerfiles para aplicações Go
2. **Considere**: Otimização de camadas e cache do Docker
3. **Pense em**: Como gerenciar dependências eficientemente
4. **Lembre-se**: A aplicação precisa ser acessível na porta correta

### 🧪 Como Testar:

Após criar o Dockerfile, você pode testá-lo com:

```bash
# Build da imagem
docker build -t backend-app .

# Executar o container
docker run -p 8080:8080 backend-app

# Testar a API
curl http://localhost:8080/health
```

### ✅ Validação:

Seu Dockerfile está correto se:
- A aplicação compila sem erros
- O container inicia na porta 8080
- Os endpoints `/health`, `/timezones` e `/time/UTC` respondem corretamente

### 📚 Recursos Úteis:

- [Documentação oficial do Docker](https://docs.docker.com/engine/reference/builder/)
- [Go Modules](https://golang.org/ref/mod)
- [Dockerfile Best Practices](https://docs.docker.com/develop/dev-best-practices/)

### 🎯 Objetivos de Aprendizado:

- Entender como containerizar aplicações Go
- Aprender sobre camadas do Docker e cache
- Compreender a diferença entre COPY e ADD
- Praticar a exposição de portas em containers
- Entender o processo de build de aplicações Go

Boa sorte! 🚀