var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function(){
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  inicializaMarcadores();
  $("#botao-reiniciar").click(reiniciaJogo);
  atualizaPlacar();

  $('#usuarios').selectize({
    create: true,
    sortField: 'text'
  });

  $(".tooltip").tooltipster({
    trigger: "custom"
  });

});

function atualizaTamanhoFrase(){
  var frase = $(".frase").text();
  var numPalavras = frase.split(" ").length;//serve para separar os espaços das palavras da frase
  var tamanhoFrase = $("#tamanho-frase");

  tamanhoFrase.text(numPalavras);
}

function atualizaTempoInicial(tempo){
  tempoInicial = tempo;
  $("#tempo-digitacao").text(tempo);
}

function inicializaContadores(){
  campo.on("input", function(){
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    // o S+ é uma expressão regular que serve para procurar exatamente por um espaço vazio.+
    //+ Nesse caso é interessante já que, se deixar conteudo.split(" "), o JS conta cada+
    //+ espaço digitado do teclado como palavra. Ao usar o S+ - 1, esse problema é corrigido.
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
  });
}

function inicializaCronometro(){

  campo.one("focus",function(){//usa o .one para que o evento seja ouvido uma unica vez até fim. +
                                 //+ Para esse jogo, isso serve para que assim que o usario "focar" +
                                 // campo, a contagem comece até o fim.
     var tempoRestante = $("#tempo-digitacao").text();
     var desabilitaBotao = $("#botao-reiniciar");
     desabilitaBotao.attr("disabled", true);
      var cronometroID = setInterval(function(){
          tempoRestante--;
          $("#tempo-digitacao").text(tempoRestante);
          if(tempoRestante < 1){
            clearInterval(cronometroID);
            desabilitaBotao.attr("disabled", false);
            finalizaJogo();
          }
        },1000);
  });

}

function finalizaJogo(){
  campo.attr("disabled", true);
  campo.toggleClass("campo-desativado");
  inserePlacar();

}

function inicializaMarcadores(){
  campo.on("input", function(){
    var frase = $(".frase").text();
    var digitado = campo.val();
    var comparavel = frase.substr(0, digitado.length);
    if(digitado == comparavel){
      campo.addClass("borda-verde");
      campo.removeClass("borda-vermelha")
    }else{
      campo.addClass("borda-vermelha");
      campo.removeClass("borda-verde");
    }
  });
}

function reiniciaJogo(){
      campo.attr("disabled", false);
      campo.val("");
      $("#contador-palavras").text("0");
      $("#contador-caracteres").text("0");
      $("#tempo-digitacao").text(tempoInicial);
      inicializaCronometro();
      campo.toggleClass("campo-desativado");
      campo.removeClass("borda-vermelha");
      campo.removeClass("borda-verde");
};
