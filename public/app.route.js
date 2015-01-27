angular.module('MailClient.route', ['MailClient.app.common.viewComponents.route'])

    .config(function ($stateProvider, ViewComponents) {

        $stateProvider
            .state('main', {
                url: '',
                views: {
                    'panel@': ViewComponents.panel
                }
            });
    });