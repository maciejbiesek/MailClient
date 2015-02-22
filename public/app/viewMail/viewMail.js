angular.module('MailClient.app.viewMail.viewMailCtrl', ["services"])


	.controller('ViewMailCtrl', ['$scope', '$http', '$location', '$state',
        function ($scope, $http, $location, $state) {

            var id = $location.url().substring(6);
            $scope.getMail = function () {
                $http.get('/emails/' + id).success(function (res) {
                    $scope.mail = res;
                }).error(function (res) {
                    $scope.mail = 'ERROR: ' + res;
					$state.go('main.sent');
                });

                $scope.markRead = function () {
                    $http.put('/emails/' + id, {
                        read: true
                    }).success(function (res) {
                        // nothing happen
                    });
                };
                /*
                 $http.get('/sent/' + id).success(function (res) {
                 $scope.mail.concat(res);
                 }).error(function (res) {
                 $scope.mail = 'ERROR: ' + res;
                 });
                 */
            };
            $scope.getMail();

            $scope.markRead();

        }]);
