angular.module('MailClient.app.emails.inbox.InboxCtrl', [])

	.controller('InboxCtrl', ['$scope', '$http',
		function ($scope, $http) {

			$scope.getEmails = function () {
				$http.get('/emails').success(function (res) {
					$scope.inbox = res;
<<<<<<< Updated upstream
					$scope.inbox.forEach(function(elem){elem.display=true})
=======
					//$scope.inbox.sort(function(a,b) { return parseFloat(b.received) - parseFloat(a.received); } );
					$scope.inbox.forEach(function(elem){
						elem.display=true;
					});
>>>>>>> Stashed changes
				});
			};
			$scope.getEmails();

	}]
);
