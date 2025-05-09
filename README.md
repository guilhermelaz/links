# LinkPage - Página de Links Personalizada

Uma página de links personalizada estilo LinkTree, com fundo de galáxia animado, criada apenas com HTML, CSS e JavaScript puro.

## Características

- Design responsivo para todos os dispositivos
- Fundo de galáxia animado com estrelas cintilantes e estrelas cadentes
- Botões personalizáveis com ícones
- Botão de compartilhamento
- Compatível com GitHub Pages

## Como Personalizar

### Arquivo de Configuração

A maneira mais fácil de personalizar a página é através do arquivo `js/config.js`. Nele você pode configurar:

- Seções com títulos personalizados
- Links e seus textos
- Cores dos botões
- Ícones
- Configurações do fundo animado

#### Adicionando Seções Personalizadas

Você pode adicionar quantas seções quiser, cada uma com seu próprio título e links:

```javascript
// Exemplo de uma nova seção
{
    id: "social_section", // ID único para a seção
    title: "Redes Sociais", // Título que aparecerá na página
    links: [
        // Lista de links desta seção
        {
            id: "social1",
            url: "https://twitter.com/seu_usuario",
            text: "Twitter",
            icon: "fab fa-twitter",
            color: "#1DA1F2" // Cor do Twitter
        },
        // Adicione mais links conforme necessário
    ]
}
```

Para adicionar uma nova seção, basta incluí-la no array `sections` no arquivo `js/config.js`.

### Personalização de Cores dos Botões

Você pode personalizar a cor de cada botão individualmente de duas maneiras:

1. **Pelo arquivo de configuração**: Edite a propriedade `color` de cada link no arquivo `js/config.js`

2. **Via JavaScript**: Use a função `customizeButtonById` no console do navegador ou em seu próprio script:

```javascript
// Exemplo: Mudar a cor do botão com ID 'github1' para vermelho
customizeButtonById('github1', '#ff0000');

// Exemplo: Mudar a cor do botão com ID 'vps1' para verde
customizeButtonById('vps1', '#00ff00');
```

### Imagem de Perfil

1. Substitua o arquivo `img/profile.jpg` pela sua própria imagem de perfil
2. Recomendado usar uma imagem quadrada para melhor resultado

### Ícones

Os ícones são do Font Awesome. Você pode escolher qualquer ícone disponível em [Font Awesome](https://fontawesome.com/icons) e usar o código correspondente no arquivo `js/config.js`:

```javascript
// Exemplos de ícones
"fab fa-github"    // Ícone do GitHub
"fas fa-server"    // Ícone de servidor
"fas fa-link"      // Ícone de link
"fab fa-twitter"   // Ícone do Twitter
"fab fa-instagram" // Ícone do Instagram
```

### Fundo Animado

Você pode personalizar o fundo de galáxia animado editando as configurações no arquivo `js/config.js`:

```javascript
// Configurações do fundo
const BACKGROUND_CONFIG = {
    smallStars: 150,     // Quantidade de estrelas pequenas
    mediumStars: 100,    // Quantidade de estrelas médias
    largeStars: 50,      // Quantidade de estrelas grandes
    shootingStars: 5,    // Quantidade de estrelas cadentes
    starDirection: "down", // Direção das estrelas: "down", "up", "left", "right"
    starSpeed: 50        // Velocidade das estrelas (quanto menor, mais rápido)
};
```

## Como Publicar no GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos deste projeto para o repositório
3. Vá para as configurações do repositório
4. Na seção "GitHub Pages", selecione a branch principal como fonte
5. Seu site estará disponível em `https://seu-username.github.io/nome-do-repositorio`

## Estrutura de Arquivos

```
LinkPage/
├── index.html          # Estrutura principal da página
├── css/
│   └── style.css       # Estilos da página
├── js/
│   └── script.js       # Funcionalidades JavaScript
└── img/
    └── profile.jpg     # Sua imagem de perfil
```

## Licença

Este projeto está disponível como código aberto sob os termos da [Licença MIT](https://opensource.org/licenses/MIT).