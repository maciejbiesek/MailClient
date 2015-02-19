angular.module('MailClient.app.emails.sent.SentCtrl', [])

    .controller('SentCtrl', ['$scope', '$http',
        function ($scope, $http) {

            $scope.getSent = function () {
                $http.get('/sent').success(function (res) {
                    $scope.sent = res;
					$scope.sent.sort(function(a,b) { return parseFloat(b.sent) - parseFloat(a.sent) } );
                }).error(function (res) {
                    $scope.sent = 'ERROR: ' + res;
                });
            };
            $scope.getSent();

    }]);