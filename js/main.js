// Próximo ID para adicionar um novo livro
let _nextId = 1;
// ID do livro que está sendo editado
let _activeId = 0;

const BOOK_FORM = $("#book-form");
const BOOK_TABLE = $("#bookTable");

function handleBookEdit() {
    const row = $(this).parents("tr");
    const cols = row.children("td");

    _activeId = $($(cols[6]).children("button")[0]).data("id");

    bookForm.setData($(cols[0]).text(), $(cols[1]).text(), $(cols[2]).text(), $(cols[3]).text(), $(cols[4]).text(), $(cols[5]).text());

    bookForm.setSubmitButtonText("Actualizar");
}

function handleBookDeleteClick() {
    $(this).parents("tr").remove();
}

function handleBookSubmission(e) {
    e.preventDefault();

    if (bookForm.hasErrors()) {
        return;
    }

    if (bookForm.getSubmitButtonText() === "Actualizar") {
        bookTable.updateInTable(_activeId);
        bookForm.setSubmitButtonText("Adicionar Livro");
    } else {
        bookTable.addToTable(_activeId);
        _nextId += 1;
    }

    bookForm.clear();
}

BOOK_TABLE.on('click', '.book-edit', handleBookEdit);
BOOK_TABLE.on('click', '.book-delete', handleBookDeleteClick);
BOOK_FORM.on('submit', handleBookSubmission);


$("#updateButton").click(function(){
    $('#updateButton').html(getDataHora());
   return false;
 });
 
 
 function getDataHora() {
   // variáveis
   var data = new Date();
   var hora = data.getHours();
   var minutos = data.getMinutes();
   var segundos = data.getSeconds(); 
   var mes = data.getMonth()+1;
   var dia = data.getDate();
   
   // zero à esquerda se necessário
   dia = dia < 10 ? '0' + dia :  dia;
   mes = mes < 10 ? '0' + mes: mes;
   hora =  hora < 10 ? '0' + hora: hora;
   minutos = minutos < 10 ? '0' + minutos : minutos;
   segundos = segundos  < 10 ? '0' + segundos : segundos;
   
   
   // monta resultado
   var resultado = dia + "/" + mes + "/" + data.getFullYear() + " " + hora + ':' + minutos + ':' + segundos;
   
   
   return resultado;
 }
