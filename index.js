document.getElementById('form-dados').addEventListener('submit', function (e) {
    e.preventDefault()

    let checkboxes = document.getElementsByClassName("check");
    let noCheck = true;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            noCheck = false;
        }
    }

    if (noCheck) {
        alert('Ao menos uma área de interesse deve ser selecionada!');
        return;
    }

    let nome = document.getElementById('nome').value;
    let endereco = document.getElementById('endereco').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let cargo = document.querySelector('input[name="cargos"]:checked').value;
    let area = document.querySelectorAll('input[name="areas"]:checked');

    let areas = [];

    for (let i = 0; i < area.length; i++) {
        areas.push(area[i].value);

    }


    function salvaForm() {
        const pessoa = {
            nome: nome,
            endereço: endereco,
            cidade: cidade,
            estado: estado,
            cargo: cargo,
            area: areas
        }
        return pessoa;
    }

    console.log(salvaForm())
})

