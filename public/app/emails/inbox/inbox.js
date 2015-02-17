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
			$scope.countUnread = function () {
				var counter = 0;
				$scope.inbox.forEach(function(message){
					if(message.read == false){
						counter++;
					}
				})
				return counter;
			}
		}]
	);