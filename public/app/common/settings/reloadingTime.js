angular.module('MailClient.app.common.settings.reloadingTimeService', [])

	.service('reloadingTimeService', ['localStorageService',
        function (localStorageService) {

        var reloadingTime = 60000,
            values = {
                '60s' : true,
                '120s': false,
                '300s': false
            },
            labels = [
                {
                    'id': 1,
                    'time': '60s'
                },
                {
                    'id': 2,
                    'time': '120s'
                },
                {
                    'id': 3,
                    'time': '300s'
                }
            ],
            setTime = function (time) {
                localStorageService.set('reloadingTime', time);
                reloadingTime = time.substr(0, time.length - 1) * 1000;
                for(var t in values) { 
                    values[t] = false; 
                }
                values[time] = true;
            };

        if (localStorageService.get('reloadingTime') !== null) {
            setTime(localStorageService.get('reloadingTime'));
        }

	    return {
            labels: labels,
            setTime: setTime,
            get values() {
                return values;
            },
            get reloadingTime() {
                return reloadingTime;
            }
	    };

	}]);

