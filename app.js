var Produtos = null;
var Produto = null;

function NewProduto() {
	return {
		Codigo: null,
		Descricao: ''
	};
}

function validarProduto(){
	if ($("#ovTXT_Codigo").val() === "") {
		$("#ovTXT_Codigo").focus();
		return false;
	}

	if ($("#ovTXT_Descricao").val() === "") {
		$("#ovTXT_Descricao").focus();
		return false;
	}

	return true;
}

//Aqui vai arrays.
function salvar(){
	if (!validarProduto())
		return;

	Produto.Codigo = $("#ovTXT_Codigo").val();
	Produto.Descricao = $("#ovTXT_Descricao").val();
	Produtos.push(Produto);

	$("#modal-cadastro").modal("hide");
	carregarProdutos();
}

//Pega objeto e add coisas na tag
function carregarProdutos(){
	$("#ovTR_Dados tbody").html("");
	Produtos.map(function (prod, index){
		let line = "<tr>" +
										"<td>" + prod.Codigo + "</td>" +
										"<td>" + prod.Descricao + "</td>" +
										"<td></td>" +
								"</tr>";

	$("#ovTR_Dados tbody").append(line);
	});

}

function addProduto(){
	Produto = NewProduto();
	$("#ovTXT_Codigo").val(Produto.Codigo);
	$("#ovTXT_Descricao").val(Produto.Descricao);
	$("#modal-cadastro").modal("show");
}

$(document).ready(function() {
	Produtos = [];

	$(document).on("click", "#ovBTN_Adicionar", addProduto);
	$(document).on("click", "#ovBTN_Salvar", salvar);
});
