
angular.module('webServiceApp', []);

angular.module('webServiceApp').controller('webServiceCtrl', function($scope, $http){

	$scope.nameApp = 'Web Service';

	$scope.ip = 'localhost:8080';
	$scope.servicoSalvar = '/Sorteio/ws/aposta/salvar';
	$scope.servicoSortear = '/Sorteio/ws/aposta/sortear';

	$scope.salvar = function(aposta) {
		aposta.numeros = $scope.numero1+','+$scope.numero2+','+$scope.numero3+','+$scope.numero4+','+$scope.numero5+','+$scope.numero6;
		$http.post('http://' + $scope.ip + $scope.servicoSalvar, aposta)
			.success(function(resultado) {
				delete aposta;
			});
	}

	$scope.sortear = function() {
		$http.get('http://' + $scope.ip + $scope.servicoLerArquivo, {params:{caminhoArquivo:arquivo}})
			.success(function(aposta) {
				$scope.ganhador = aposta.nome;
				$scope.numerosSorteados = aposta.numeros;
			});
	}
});
