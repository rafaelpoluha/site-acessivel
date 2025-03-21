document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuaFonteBotao = document.getElementById('aumentar-fonte');
    let tambemAumentarFonte  = 1;
    aumentaFonteBotao.addEventListener('click',function( ){
        tambemAumentarFonte += 0.1;
        document.body.style.fontSize = '${tamanhoAtualFonte}ren';
    });

    diminuaFonteBotao.addEventListener('click',function( ){
        tambemdiminuaFonte -= 0.1;
        document.body.style.fontSize = '${tamanhoAtualFonte}ren';
    });
});