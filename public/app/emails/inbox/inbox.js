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

			$scope.onSearch = function(){
				var searchIn = ["title", "content", "sender"];
				for (var i in $scope.inbox){
					var mail = $scope.inbox[i];
					var reg = new RegExp($scope.searchTerm,"gim");
					mail.display = false;
					for (var j in searchIn){
						var matches = reg.test(mail[searchIn[j]]);
						if (matches){
							mail.display = true;
							break;
						}
					}
				}
			}

		}])

	.filter('highlight', ["$sce", function($sce) {
		return function (input, query) {
			var r = RegExp('('+ query + ')', 'gim');
			var text = input.replace(r, '<strong>$1</strong>');
			return $sce.trustAsHtml(text);
		}
	}]
);