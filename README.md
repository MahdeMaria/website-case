# BackEnd

RegistrationAPI

Visão Geral
O RegistrationAPI é um projeto backend desenvolvido em C# com .NET, projetado para gerenciar operações relacionadas a registros de usuários ou entidades. Ele implementa uma arquitetura estruturada que separa responsabilidades entre camadas para garantir organização, manutenção e escalabilidade.

Estrutura do Projeto

- Controllers/: Contém os controladores responsáveis por gerenciar as rotas e lidar com as requisições HTTP.
- Data/: Inclui a configuração do contexto de banco de dados e implementações relacionadas ao Entity Framework Core.
- Migrations/: Armazena os scripts de migração gerados pelo Entity Framework para versionamento do banco de dados.
- Models/: Contém as classes de modelo que representam as entidades do domínio.
- Services/: Implementa a lógica de negócios e serviços auxiliares utilizados pelos controladores.
- appsettings.json: Contém as configurações do aplicativo, como strings de conexão e chaves de configuração.
- Program.cs: Configurações principais para inicializar e executar o aplicativo.
- RegistrationAPI.csproj: Arquivo de configuração do projeto, contendo metadados e dependências.
README.md: (Este arquivo) Contém a documentação do projeto.

# Configuração do Projeto

Pré-requisitos

.NET SDK: Certifique-se de ter o SDK do .NET instalado na máquina.
Banco de Dados: Configure uma instância de banco de dados compatível (ex.: SQL Server, MySQL).

Configuração Inicial

1 - Clone o repositório:

```bash
git clone https://github.com/MahdeMaria/website-case.git
```

2 - Instale as dependências:

```bash
cd RegistrationAPI
```
```bash
dotnet restore
```

3 - Configure o arquivo appsettings.json:

Adicione a string de conexão para o banco de dados:
```bash
{
  "ConnectionStrings": {
    "DefaultConnection": "Sua_String_De_Conexao"
  }
}
```

4 - Execute as migrações para criar o banco de dados:

```bash
dotnet ef database update
```