angular.module('MailClient.app.emails.listDirective', [])

    .directive('listDirective', function () {
		return {            
			restrict: 'AE',
			replace: true,
			scope: {
				emails: '=',
			},
			template: '<ul id = "list"></ul>',
			link: function (scope, element, attrs) {
				var list = document.getElementById('list');
				scope.$watch('emails', function(newValue) {
					if (newValue !== undefined) {
						scope.emails.forEach(function(item) {
							var li = document.createElement("li");
							if (item.read === false) {
								li.setAttribute("class", "unread");
							}
							li.innerHTML = item.title;
							list.appendChild(li);
						});
					}	
				});
			}
		};
			
	});