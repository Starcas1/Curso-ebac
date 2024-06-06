$(document).ready(function() {
    $('#form-tarefa').submit(function(event) {
      event.preventDefault(); 
      var novaTarefa = $('#input-tarefa').val();
      if (novaTarefa !== '') {
        $('#lista-tarefas').append('<li><input type="checkbox" class="complete-checkbox"><span>' + novaTarefa + '</span><button class="btn-remover">Remover</button></li>'); // Adiciona a nova tarefa à lista com um checkbox e botão de remover
        $('#input-tarefa').val('');
      }
    });
  
    $('#lista-tarefas').on('click', '.complete-checkbox', function() {
      $(this).parent().toggleClass('completed');
    });
  
    $('#lista-tarefas').on('click', '.btn-remover', function() {
      $(this).parent().remove();
    });
  });
  