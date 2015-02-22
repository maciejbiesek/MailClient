angular.module('MailClient.app.deleteMail.deleteMailCtrl', [])

	.controller('deleteMailCtrl', ['$scope', '$http', '$location', '$state',
        function ($scope, $http, $location, $state) {
            var id = $location.url().substring(8);
            $scope.deleteMail = function () {
                $http.delete('/emails/' + id).success(function () {
				   $state.go('main.inbox');
                }).error(function () {
                    //		
                });
            };
			
            $scope.deleteMail();

    }]);
