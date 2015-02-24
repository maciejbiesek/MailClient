angular.module('MailClient.app.emails.deleteService', [])

	.service('deleteService', ['$http', '$state',
		function ($http, $state) {
		
		var del = function (id) {
			$http.delete('/emails/' + id).success(function () {
				   $state.go('main.inbox');
                });
		};

	    return {
	    	del: del
	    };

	}]);

