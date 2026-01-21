 var n = []

    function aparecer()
{
    var ad = document.getElementById('adiciona')
    ad.style.visibility = "visible"
}



function addnum()
{
    var valor = document.getElementById('n').value
    var inp = document.getElementById('n')
    var num = Number(valor)
    var cri = document.createElement('option')

    if (num < 0 || num > 100)
    {
        window.alert('Número invalido; Tente nova mente')
        inp.value = null
    }
    else
    {
    if (num == "")
        {
            window.alert('sem número preenchido; Tente novamente')
            inp.value = null
        }
        else
        {

        var tam = document.getElementById('list')
        var bt = document.getElementById('btn')

           tam.style.width = "110px"
           tam.size = 10
           tam.style.visibility = "visible"
           bt.style.visibility = "visible"
          
           var sel = document.getElementById('list')
           var opt = document.createElement('option')
           opt.value = `${num}`
           opt.text = `${valor} adicionado`

            sel.appendChild(opt)

            n.push(num)

            inp.value = null

            var tx = document.getElementById('rp')
            tx.innerHTML = ''
            
        }
    }
}
function calc()
{
   var tx = document.getElementById('rp')
   tx.style.visibility = "visible"

  
   var tot = n.length
   var maior = n[0]
   var menor = n[0]
   var soma = 0
   

   for (let pos in n)
   {
        soma = soma + n[pos]

    if ( n[pos] > maior) { maior = n[pos]}

    if ( n[pos] < menor) { menor = n[pos]}
   }

    var par = soma%2 == 0? 'par': 'impar'

   tx.innerHTML =  `<p> você tem ${tot} elementos.</p>
                    <p>seu maior numero é ${maior}, sendo o menor ${menor} </p>
                    <p>e a soma de todos os elementos é ${soma}, sendo ${par} </p>`
}