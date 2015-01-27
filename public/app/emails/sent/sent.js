angular.module('MailClient.app.emails.sent.SentCtrl', [])

    .controller('SentCtrl', ['httpService', 'contentService',
        function (httpService, contentService) {

            this.contentService = contentService;
            httpService.loadData('/sent', this, this.contentService.loadList, 'sent');

    }]);