# Sistema de Gerenciamento de Eventos

Este é um sistema de gerenciamento de eventos desenvolvido com **TypeScript**, utilizando **functions** e **SQLite3** para armazenamento de dados. O projeto também conta com tratamento de erros para garantir a estabilidade e confiabilidade do sistema.

## Tecnologias Utilizadas

- **TypeScript**
- **SQLite3**
- **Tratamento de erros** para prevenção de falhas

## Dependências Utilizadas

As seguintes dependências são utilizadas no projeto:

```json
"dependencies": {
  "sqlite3": "^5.1.7",
  "ts-node": "^10.9.2",
  "tsc": "^2.0.4",
  "tsx": "^4.19.2",
  "typescript": "^5.7.3"
}
```

## Funcionalidades

- Criar, atualizar e deletar eventos
- Consultar eventos cadastrados
- Validação de entradas e tratamento de erros

## Instalação e Uso

1. Clone o repositório:
   ```bash
   git clone https://github.com/ArthurGomes11/atividade_ADS_GERENCIADOR_DE_EVENTOS.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd atividade_ADS_GERENCIADOR_DE_EVENTOS
   ```
3. Instale as dependências conforme descrito no `package.json`:
   ```bash
   npm install
   ```
4. Execute o arquivo principal utilizando `tsx`:
   ```bash
   npm run tsx
   ```

## Contribuição

Contribuições são bem-vindas! Para contribuir:
- Fork este repositório
- Crie uma nova branch com sua funcionalidade/correção: `git checkout -b minha-feature`
- Commit suas alterações: `git commit -m 'Adicionando nova funcionalidade'`
- Faça um push: `git push origin minha-feature`
- Abra um Pull Request

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

