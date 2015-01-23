angular.module('MailClient.pageComponents.mailLists.sent.route', [])

    .config(function ($stateProvider) {

        $stateProvider
            .state('main.sent', {
                url: '/sent',
                views: {
                    'content@': {
                        templateUrl: 'pageComponents/mailLists/sent/sent.html',
                        controller: 'SentCtrl as SentCtrl'
                    }
                }
            });
    });