angular.module('MailClient.app.emails.listDirective', [])

<<<<<<< Updated upstream
    .directive('listDirective', function () {
		return {            
			restrict: 'AE',
			replace: true,
			scope: {
				emails: '=',
				searchTerm: '='
			},
			template: '<ul id = "list"></ul>',
			link: function (scope, element, attrs) {
				var list = document.getElementById('list');
				scope.$watchGroup(['emails','searchTerm'], function(newValue) {
					list.innerHTML = "";
					console.log(newValue);
					var searchTerm = newValue[1];
					var searchBy = ["title", "content", "sender"];
					var display;
					var messageToDisplay;
					var reg = new RegExp("(" + searchTerm + ")","gim");
					if (newValue !== undefined) {
						newValue[0].forEach(function(message) {
							display = searchTerm==null;
							messageToDisplay = {};
							var li = document.createElement("li");
							if (message.read === false) {
								li.setAttribute("class", "unread");
							}
							for (var j in searchBy){
								var matches = reg.test(message[searchBy[j]]);
								console.log(matches)
								if (matches){
									display = true;
								}
								messageToDisplay[searchBy[j]] = message[searchBy[j]].replace(reg, '<strong>$1</strong>');
							}
							if (!display){
								li.classList.add("hidden");
							}
							li.innerHTML = messageToDisplay.title;
							list.appendChild(li);
						});
					}	
=======
.directive('listDirective', function () {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			emails: '=',
			searchTerm: '='
		},
		template: '<div id = "list"></div>',
		link: function (scope, element, attrs) {
			var list = document.getElementById('list');
			scope.mailsOnList = [];
			var mailsInModel = {};
			function getMessageByID(id){
				for (var i in scope.emails){
					if (scope.emails[i].id==id){
						return scope.emails[i];
					}
				}
			}
			function hashingFunction(message) {
				return message.id;
			}
			function createMessageHtml(message){
				var li = document.createElement("div");
				li.classList.add("ui", "secondary", "segment", "mail-item");
				var corespondent;
				if (message.sender !== undefined) {
					corespondent = message.sender;
				} else if (message.receivers !== undefined) {
					corespondent = message.receivers[0];
				}
				var message_html = '<a';
				if (message.sender !== undefined) {
					message_html += ' href="#/view/' + message.id + '"';
				}
				message_html+='><div class="email-preview">';

				if (message.read === false) {
					message_html += '<i class="mail-ico folder icon"></i>';
				} else {
					message_html += '<i class="mail-ico folder open outline icon"></i>';
				}
				message_html += '<a class="mail-sender">' + corespondent + '</a>' +
				'<a class="mail-vertical-separator"></a> <a ';
				if (message.sender !== undefined) {
					message_html += ' href="#/view/' + message.id + '"';
				}
				message_html += ' class="mail-title title">' + message.title + '</a>' +
				'<a> - </a>' ;
				if (message.sender !== undefined) {

					message_html += '<a class="mail_content content">'+ message.content + '</a>' +
					'<a href="#/delete/' + message.id + '" > <i class="trash icon float-right"></i></a></div></a>';
				}

				message_html+='</a>';
				li.innerHTML = message_html;
				li.setAttribute("messageID", message.id);
				return li;
			}
			scope.$watch('emails', function (newEmailsValue){
				newEmailsValue = newEmailsValue || [];
				//newEmailsValue.forEach(function(message){
				console.log(newEmailsValue)
				for(var i in newEmailsValue){
					message=newEmailsValue[i];
					console.log(message.sender);
					var hash = hashingFunction(message);
					if(!scope.mailsOnList[hash]){
						var MessageNode = createMessageHtml(message);
						list.insertBefore(MessageNode, list.childNodes[0]);
						scope.mailsOnList[hash] = MessageNode;
					}
				//});
				}
				Object.keys(scope.mailsOnList).forEach(function(messageID){
					var existsInModel = false;
					newEmailsValue.forEach(function(message){
						if(messageID == message.id){
							existsInModel = true;
						}
					});
					if(!existsInModel){
						list.removeChild(scope.mailsOnList[messageID]);
						//delete scope.mailsOnList[messageID];
					}
>>>>>>> Stashed changes
				});
			}
		};
			
	});
