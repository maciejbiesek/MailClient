angular.module('MailClient.app.common.http', [])

    .service('httpService', function () {

        var loadData = function (url, context, callback, type) {
                var httpRequest = new XMLHttpRequest();
                httpRequest.onreadystatechange = function() {
                    if (httpRequest.readyState !== 4) {
                        return;
                    }
                    if (httpRequest.status !== 200) {
                        throw new Error('Request failed');
                    }
                    var data = JSON.parse(httpRequest.responseText);
                    callback.call(context, data, type);
                };
                httpRequest.open('GET', url);
                httpRequest.send();
            };

        return {
            loadData: loadData
        };

    });
