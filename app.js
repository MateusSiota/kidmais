function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    const sectionResultados = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor do campo de pesquisa e converte para minúsculas para facilitar a comparação
    const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o campo de pesquisa está vazio
    if (!termoPesquisa) {
      sectionResultados.innerHTML = "<p>Nada foi encontrado. Por favor, digite uma história, brincadeira ou faixa-etária</p>";
      return; // Interrompe a função se não houver termo de pesquisa
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultadosHTML = "";
  
    // Itera sobre cada história na lista de dados
    for (const historia of dados) {
      // Converte todas as propriedades relevantes para minúsculas para facilitar a comparação
      const titulo = historia.titulo.toLowerCase();
      const descricao = historia.descricao.toLowerCase();
      const tags = historia.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente no título, descrição ou tags
      if (titulo.includes(termoPesquisa) || descricao.includes(termoPesquisa) || tags.includes(termoPesquisa)) {
        // Cria um novo elemento HTML para exibir a história encontrada
        resultadosHTML += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${historia.titulo}</a>
            </h2>
            <p class="descricao-meta">${historia.descricao}</p>
            <p class="descricao-meta">${historia.historiaCompleta}</p>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados
    if (!resultadosHTML) {
      resultadosHTML = "<p>Nenhum resultado encontrado para o termo: \"${termoPesquisa}\"</p>";
    }
  
    // Exibe os resultados na seção HTML
    sectionResultados.innerHTML = resultadosHTML;
  }