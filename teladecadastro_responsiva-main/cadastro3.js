const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));

//CEP COM API para preenchimento automático


function preencherEndereco (v) {
    var cep = v.value;

    cep = cep.replace(/\D/g, '');

      // Monta a URL para consulta
    if (cep.length === 8 ){
        var url = 'https://viacep.com.br/ws/' + cep + '/json/';

        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (!data.erro) {
                document.getElementById('idRua').value = data.logradouro;
                document.getElementById('idBairro').value = data.bairro;
                document.getElementById('idUf').value = data.localidade + "-" + data.uf;
    
            }
        })

        .catch(function(error){
            console.log('Ocorreu um erro', error);

        })

    }


}

//CEP COM API DOS CORREIOS

//VALIDAÇÃO AUTOMÁTICA TELEFONE

function preencherNumeros (v) {
    //remove caracteres não numéricos
    v.value = v.value.replace(/\D/g, '');
  }

      // Monta a URL para consulta
function ajustaTelefone(v) {
    v.value = v.value.replace(/\D/g, '');
    //adiciona parênteses no DDD
    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
    //adiciona hífen no número do telefone
    v.value = v.value.replace(/(\d{5})(\d)/, "$1-$2");


}

// FIM VALIDAÇÃO AUTOMÁTICA TELEFONE
