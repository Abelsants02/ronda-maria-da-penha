
function formatarCPF(input) {
    // Remove caracteres não numéricos
    var cpf = input.value.replace(/\D/g, '');

    // Adiciona pontos e hífen conforme o formato do CPF
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    // Atualiza o valor do campo
    input.value = cpf;
}

document.getElementById('cpf').addEventListener('blur', function() {
    var cpf = this.value.replace(/\D/g, '');

    if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
        alert('CPF inválido. Verifique o formato.');
        this.value = '';
    }
});









function formatarTelefone(input) {
    var telefone = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (telefone.length === 11) {
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (telefone.length > 11) {
        // Limita a entrada a 11 dígitos
        telefone = telefone.slice(0, 11);
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
        // Não formatar se não atender ao formato esperado
        return;
    }

    
    input.value = telefone;
}

document.getElementById('telefone').addEventListener('input', function() {
    var telefone = this.value.replace(/\D/g, '');

    if (telefone.length > 11) {
        // Limita a entrada a 11 dígitos
        telefone = telefone.slice(0, 11);
    }

    this.value = telefone;
});




function formatarTelefone(input) {
    var telefone = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (telefone.length === 11) {
        telefone = telefone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4'); // Formato com DDD
    } else if (telefone.length === 10) {
        telefone = telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3'); // Formato sem DDD
    } else {
        // Não formatar se não atender ao formato esperado
        return;
    }

    input.value = telefone;
}


const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInput = document.querySelector("[data-input]");

const closeButton = document.querySelector("#close-mesage");

//validate CEP input
cepInput.addEventListener("keypress", (e) => {

    const onlyNumbers = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);


    // allow only numbers
    if (!onlyNumbers.test(key)) {
        e.preventDefault();
        return;
    }
});

// Get address event 
cepInput.addEventListener("keyup", (e) => {

    const inputValue = e.target.value 

    // Check if we have the corret length 
    if(inputValue.length === 8) {
        getAddress(inputValue)
    }
})

// Get customer address from API
const getAddress = async (cep) => {
    console.log(cep)
} 




function validateForm() {
    // Obtém o valor do campo RG
    var rgValue = document.getElementById("rg").value;

    // Define o número de dígitos desejado (ajuste conforme necessário)
    var desiredDigits = 9;

    // Verifica se o número de dígitos é igual ao desejado
    if (rgValue.length !== desiredDigits) {
        document.getElementById("rgError").innerText = "O RG deve ter " + desiredDigits + " dígitos.";
    } else {
        document.getElementById("rgError").innerText = ""; // Limpa a mensagem de erro
        // Submeta o formulário ou execute outras ações se a validação for bem-sucedida
    }
}




function carregarBairros() {
    var cidadeSelecionada = document.getElementById("estado").value;
    var bairrosSelect = document.getElementById("bairros");

    // Limpar as opções atuais
    bairrosSelect.innerHTML = "";

    // Adicionar opção padrão
    var defaultOption = document.createElement("option");
    defaultOption.text = "Selecione o Bairro";
    bairrosSelect.add(defaultOption);

    // Adicionar opções com base na cidade selecionada
    if (cidadeSelecionada === "Itaparica") {
        adicionarBairros(["Bairro1-Itaparica", "Bairro2-Itaparica", "Bairro3-Itaparica"]);
    } else if (cidadeSelecionada === "Salinas") {
        adicionarBairros(["BairroA-Salinas", "BairroB-Salinas", "BairroC-Salinas"]);
    } else if (cidadeSelecionada === "vera-cruz") {
        adicionarBairros(["BairroX-VeraCruz", "BairroY-VeraCruz", "BairroZ-VeraCruz"]);
    }
}

function adicionarBairros(bairros) {
    var bairrosSelect = document.getElementById("bairros");
    for (var i = 0; i < bairros.length; i++) {
        var option = document.createElement("option");
        option.value = bairros[i];
        option.text = bairros[i];
        bairrosSelect.add(option);
    }
}