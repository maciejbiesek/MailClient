angular.module('MailClient.app.emails.inbox.InboxCtrl', [])

	.controller('InboxCtrl', ['$scope', '$http',
		function ($scope, $http) {

			$scope.getEmails = function () {
				$http.get('/emails').success(function (res) {
					$scope.inbox = res;
					$scope.inbox.forEach(function(elem){elem.display=true})
				});
			};
			$scope.getEmails();

	}]
);