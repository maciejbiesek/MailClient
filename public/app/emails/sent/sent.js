angular.module('MailClient.app.emails.sent.SentCtrl', [])

    .controller('SentCtrl', ['$scope', '$http',
        function ($scope, $http) {

            $scope.getSent = function () {
                $http.get('/sent').success(function (res) {
                    $scope.sent = res;
                }).error(function (res) {
                    $scope.sent = 'ERROR: ' + res;
                });
            };
            $scope.getSent();

    }]);