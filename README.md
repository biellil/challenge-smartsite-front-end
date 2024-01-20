# Desafio Frontend - Smart Fit

![Smart Fit](./src/assets/images/logo.svg)

Este repositório contém a solução para o desafio de [Front-end da Smart Fit](https://github.com/bioritmo/front-end-code-challenge-smartsite/tree/master) Eu utilizei o framework React para desenvolver a aplicação

## 📖 Sobre o desafio

A Smart Fit, atuando no segmento de fitness, passou por várias mudanças durante a pandemia. Foi necessário desenvolver uma página para buscar unidades abertas ou fechadas para consulta e reserva. 

Neste desafio, foi implementado as seguintes funcionalidades de acordo com as regras de negócio definidas:

### Funcionalidades
[] Carrega unidades através do arquivo JSON [locations.json](https://test-frontend-developer.s3.amazonaws.com/data/locations.json) utilizando o método `GET`.
[] Busca por todas as unidades.
[] Busca por unidades com filtros.
[] Previsão do número de resultados encontrados.
[] Listagem das unidades encontradas após a busca.

 ### Regras de negócio
- Filtra unidades abertas ou fechadas.
- Filtra unidades por período de funcionamento.
- Exibe a mensagem "Nenhuma unidade encontrada" quando não há resultados.
- Valida e exibe os ícones corretos de acordo com o status da unidade. 

## 🎨 Layout

O layout da aplicação foi baseado nos materiais disponibilizados, incluindo designs para dispositivos móveis e desktop, cores, imagens e fontes. A fidelidade ao layout proposto foi mantida, e a aplicação é responsiva para dispositivos móveis, tablets e desktops.

## ⚙️ Como Executar

Para executar a aplicação localmente, siga os passos abaixo:

1. Clone este repositório:

```bash
 git clone https://github.com/biellil/challenge-smartsite-front-end.git
```
```bash
  cd challenge-smartsite-front-end

```

2. Instale as dependências

```bash
  npm ci
```

3. Inicie a aplicação

```bash
 turbo dev
```

