angular.module("services", [])
    .factory("square", [function (arg) {
        return arg * arg;
    }]);

angular.module('MailClient.app.viewMail.viewMailCtrl', ["services"])


    .controller('ViewMailCtrl', ['$scope', '$http', '$location', 'square',
        function ($scope, $http, $location, square) {
            console.log(square);

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
