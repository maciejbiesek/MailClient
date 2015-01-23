angular.module('MailClient.route', ['MailClient.pageComponents.common.viewComponents.route'])

    .config(function ($stateProvider, ViewComponents) {

        $stateProvider
            .state('main', {
                url: '',
                views: {
                    'panel@': ViewComponents.panel
                }
            });
    });