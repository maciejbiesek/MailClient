angular.module('MailClient.app.newMail.CreateCtrl', [])

    .controller('CreateCtrl', function ($scope, $http, $state) {
    	$scope.receiver = '';
    	$scope.title = '';
        $scope.content = '';
        $scope.receivers = [];

        $scope.addReceiver = function (receiver) {
        	if (receiver) {
        		$scope.receivers.push(receiver);
        		$scope.receiver = '';
        	}
        };

        $scope.send = function () {
        	if ($scope.receiver) {
        		$scope.addReceiver($scope.receiver);
        	}
        	if($scope.receivers && $scope.title && $scope.content) {
        		$http.post('/sent', {
        			id: "" + Date.now(),
        			title: $scope.title,
        			content: $scope.content,
        			receivers: $scope.receivers,
        			sent: Date.now()
        		}).success(function (res) {
        			$state.go('main.sent');
        		});
        	}
        };
    });
