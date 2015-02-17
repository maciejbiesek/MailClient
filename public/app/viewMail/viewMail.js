angular.module('MailClient.app.emails.inbox.InboxCtrl', [])
	.controller('ViewMailCtrl', ['$scope', '$http',
        function ($scope, $http) {
            $scope.getMail = function () {
                $http.get('/mails/:mailId').success(function (res) {
                    $scope.mail = res;
                }).error(function (res) {
                    $scope.mail = 'ERROR: ' + res;
                });
            };
            $scope.getMail();

    }]);