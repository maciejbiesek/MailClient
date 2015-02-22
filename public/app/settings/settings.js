angular.module('MailClient.app.settings.SettingsCtrl', [])

    .controller('SettingsCtrl', ['$scope', 'colorsService', 
        function ($scope, colorsService) {

            $scope.colorsService = colorsService;
            
    }]);
