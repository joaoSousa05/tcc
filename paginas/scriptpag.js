$(document).ready(function(){
    $("#alunos").click(function(){
      $("#principal").load("paginas/alunos.html");
    });

    $("#cadastroAlunos").click(function(){
      $("#principal").load("paginas/cadastroaluno.html");
    });

    $("#livros").click(function(){
      $("#principal").load("paginas/livros.html");
    });

    $("#cadastroLivros").click(function(){
      $("#principal").load("paginas/cadastrolivros.html");
    });
    $("#emprestimo").click(function(){
      $("#principal").load("paginas/emprestimo.html");
    });
  });
  

 
 
 