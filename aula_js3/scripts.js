
function contar()
{
    var n1 = Number(document.getElementById('ini').value) // var inicio
    var n2 = Number(document.getElementById('fn').value) // var final
    var n3 = Number(document.getElementById('pl').value) // var passo
    var rs = document.getElementById('res') // var resposta
  

    if ( n1 == "" || n2 == "" || n3 == "") // condição caso campo sem valor
    {
        window.alert('ERRO: você possui valores faltando!!')
    }
    else
    {
        if (n3 < 0)
        {
            window.alert('ERRO: valor de pulo invalido!!')
        }
        else
        {
            if (n1 > n3) // contagem normal ou regressiva
            {
                rs.innerHTML = ''
                for (var rest = n1; rest >= n2; rest -= n3)
                rs.innerHTML += `${rest} \u{1F449} `
                rs.innerHTML += `\u{1F6A9}`
            }
            else
            {
                rs.innerHTML = ''
                for (var rest = n1; rest <= n2; rest += n3)
                rs.innerHTML += `${rest} \u{1F449}  `
                rs.innerHTML += `\u{1F6A9}`
            }
        } 
    }
    

    
    
}