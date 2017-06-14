<?php include("cabecalho.php"); ?>
<?php

function insereProduto($conexao, $nome, $preco){
	$query = "insert into produtos (nome, preco) values ('{$nome}', {$preco})";
	return mysqli_query($conexao, $query);
}


$nome = $_GET["nome"];
$preco = $_GET["preco"];
$conexao = mysqli_connect('localhost', 'root', '', 'loja');


if(insereProduto($conexao, $nome, $preco)) { ?>
    <p class="text-success">Produto <?= $nome; ?>, <?= $preco; ?> adicionado com sucesso!</p>
<?php } else { ?>
	<?php $msg = mysqli_error($conexao);?>
    <p class="text-danger">Produto <?= $nome; ?> não foi adicionado: <?= $msg?></p>
<?php
} 
?>

<?php include("rodape.php"); ?>
