
angular.module('webServiceApp', []);

angular.module('webServiceApp').controller('webServiceCtrl', function($scope, $http){

	$scope.nameApp = 'Web Service';

	$scope.ip = 'localhost:8080';
	$scope.servicoSalvar = '/Sorteio/ws/aposta/salvar';
	$scope.servicoSortear = '/Sorteio/ws/aposta/sortear';
	$scope.servicoBuscarTodos = '/Sorteio/ws/aposta/buscarTodos';
	$scope.ganhadores = [];
	$scope.apostas = [];
	$scope.aposta = {};
	$scope.nenhumGanhador = {
		nome: 'Nenhum Ganhador',
		numeros: ''
	}

	$scope.salvar = function(aposta) {
		aposta.numeros = $scope.numero1+','+$scope.numero2+','+$scope.numero3+','+$scope.numero4+','+$scope.numero5+','+$scope.numero6;
		$http.post('http://' + $scope.ip + $scope.servicoSalvar, aposta)
			.success(function(resultado) {
				delete $scope.aposta;
			})
			.error(function(err) {
				alert(err);
			});
	}

	$scope.sortear = function() {
		$http.get('http://' + $scope.ip + $scope.servicoSortear)
			.success(function(resultado) {
				$scope.ganhadores = resultado;
				if ($scope.ganhadores.length == 0) {
					$scope.ganhadores.push($scope.nenhumGanhador);
				}
			})
			.error(function(err) {
				alert(err);
			});
	}

	$scope.buscarTodos = function() {
		$http.get('http://' + $scope.ip + $scope.servicoBuscarTodos)
			.success(function(resultado) {
				$scope.apostas = resultado;
			})
			.error(function(err) {
				alert(err);
			});
	}
});
