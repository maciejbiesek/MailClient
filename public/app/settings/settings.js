angular.module('MailClient.app.settings.SettingsCtrl', [])

    .controller('SettingsCtrl', ['$scope', 'colorsService', 'reloadingTimeService',
        function ($scope, colorsService, reloadingTimeService) {

            $scope.colorsService = colorsService;
            $scope.reloadingTimeService = reloadingTimeService;
            
    }]);
