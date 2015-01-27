angular.module('MailClient.app.emails.content', [])

    .service('contentService', function () {

        var inbox  = [],
            sent = [],
            loadList = function (data, list) {
                switch (list) {
                    case 'inbox':
                        inbox = data;
                        console.log(inbox);
                        break;
                    case 'sent':
                        sent = data;
                        console.log(sent);
                        break;
                }
            };

        return {
            get inbox() {
                return inbox;
            },
            get sent() {
                return sent;
            },
            loadList: loadList
        };

    });
