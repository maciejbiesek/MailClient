angular.module('MailClient.app.settings.route', [])

    .config(function ($stateProvider) {

        $stateProvider
            .state('main.settings', {
                url: '/settings',
                views: {
                    'content@': {
                        templateUrl: 'app/settings/settings.html',
                        controller: 'SettingsCtrl as SettingsCtrl'
                    }
                }
            });
    });