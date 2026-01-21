function inp()
{
   var textin = document.getElementById('texti')
   var fotin = document.getElementById('imgin')
   var instr = document.getElementById('instru')
    instr.innerHTML = `Dê <b>2 cliques</b> na <b>área abaixo</b>`
   textin.value = 'oque você sente?'
   textin.style.width = '280px'
    textin.style.background = 'white'
   fotin.src = 'emagi.png' 
   textin.style.color = 'black'
}

function txt()
{
    document.getElementById('texti').value = ''
    document.getElementById('instru').innerHTML = `Escreva oque <b>você está sentindo</b> e aperte em <b>pesquisar</b>`
    document.getElementById('instru').style.width = '50'
    document.getElementById('texti').removeAttribute('readonly')
    document.getElementById('texti').addEventListener("click", apagar)
    document.getElementById('texti').removeEventListener("dblclick", txt)
}    

function apagar()
{
    document.getElementById('texti').value = ''
    document.getElementById('instru').innerHTML = `Escreva oque <b>você está sentindo</b> e aperte em <b>pesquisar</b>`
}   

function pesq()
{
    

    if  (document.getElementById('texti').value == '')
    {
        window.alert('Digite oque você sente')
    }
    else
    {
        if (document.getElementById('texti').value == 'oque você sente?')
        {
            window.alert('Digite oque você sente')
            document.getElementById('texti').value = ''
        }
        else
        {
            doença()
            document.getElementById('texti').value = ''
            document.getElementById('instru').innerHTML = `aproveite sua <b>pesquisa</b> ou <b>faça um nova</b>`
            
        }
    }

    function doença()
    {
        var dor = document.getElementById('texti').value
        var consu = document.getElementById('res')
        
        switch (dor)
        {
            case "dor de cabeça":
                consu.innerText = 'cabeça doendo'
                break

            case "dor":
                consu.innerText = 'especifique um pouco mais'
                break
            
            case "dor nas costas":
                consu.innerText = 'costas doendo'
                break

            case "dor nos musculos":
                consu.innerText = 'musculo dolorido'
                break

            case "dor no pescoço":
                consu.innerText = 'pescoço doendo'
                break

            case "dor nas articulações":
                consu.innerText = 'articulações machucadas'
                break

            case "dor no abdomem":
                consu.innerText = 'abdomem machucado'
                break

            case "dor no peito":
                consu.innerText = 'peito doendo'
                break

            case "enjoo":
                consu.innerText = 'vontade de vomitar'
                break

          default: consu.innerText = 'desculpe, não tenho informações sobre isso'
        }
    }
}