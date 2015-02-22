angular.module('MailClient.app.emails.inbox.InboxCtrl', [])

	.controller('InboxCtrl', ['$scope', '$http', 'colorsService', 'reloadingTimeService',
		function ($scope, $http, colorsService, reloadingTimeService) {

			$scope.colorsService = colorsService;

			$scope.getEmails = function () {
				$http.get('/emails').success(function (res) {
					$scope.inbox = res;
					$scope.inbox.sort(function(a,b) { return parseFloat(b.received) - parseFloat(a.received); } );
					$scope.inbox.forEach(function(elem){
						elem.display=true;
					});
				});
			};
			
			$scope.getEmails();
			$scope.countUnread = function () {
				var counter = 0;
				if($scope.inbox !== undefined){
					$scope.inbox.forEach(function(message){
						if(message.read === false){
							counter++;
						}
					});
					return counter;
				}
			};
			
			setInterval(function () {
				$scope.getEmails();
			}, reloadingTimeService.reloadingTime);
			
		}]);