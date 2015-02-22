angular.module('MailClient.app.viewMail.viewMailCtrl', [])

    .controller('ViewMailCtrl', ['$scope', '$http', '$location', 'colorsService',
        function ($scope, $http, $location, colorsService) {

            $scope.colorsService = colorsService;

            var id = $location.url().substring(6);
            $scope.getMail = function () {
                $http.get('/emails/' + id).success(function (res) {
                    $scope.mail = res;
                }).error(function (res) {
                    $scope.mail = 'ERROR: ' + res;
                });

                $scope.markRead = function () {
                    $http.put('/emails/' + id, {
                        read: true
                    }).success(function (res) {
                        // nothing happen
                    });
                };
            };
            $scope.getMail();
            $scope.markRead();

        }]);
