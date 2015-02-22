angular.module('MailClient.app.emails.listDirective', [])

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
                scope.$watchGroup(['emails', 'searchTerm'], function (newValue) {
                    list.innerHTML = "";
                    list.classList.add("ui", "segment");
                    //console.log(newValue);
                    //console.log(isEmpty(newValue));
                    var searchTerm = newValue[1];
                    var searchBy = ["title", "content"];
                    var display;
                    var messageToDisplay;
                    var reg = new RegExp("(" + searchTerm + ")", "gim");
                    if (newValue[0] !== undefined) {
                        newValue[0].forEach(function (message) {
                            display = searchTerm === undefined;
                            messageToDisplay = {};
                            var li = document.createElement("div");
                            li.classList.add("ui", "secondary", "segment", "mail-item");
                            for (var j in searchBy) {
                                var matches = reg.test(message[searchBy[j]]);

                                if (matches) {
                                    display = true;
                                }
                                messageToDisplay[searchBy[j]] = message[searchBy[j]].replace(reg, '<strong>$1</strong>');
                            }
                            if (!display) {
                                li.classList.add("hidden");
                            }
                            var corespondent;
                            if (message.sender !== undefined) {
                                corespondent = message.sender;
                            } else if (message.receivers !== undefined) {
                                corespondent = message.receivers[0];
                            }


                            console.log(message);
                            //console.log(messageToDisplay.title);
                            //console.log(corespondent);
                            //console.log(messageToDisplay.content);


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
                            message_html += ' class="mail-title">' + messageToDisplay.title + '</a>' +
                            '<a> - </a>' +
<<<<<<< HEAD
                            '<a class="mail_content">' + result.content + '</a>' +
                            '<a href="#/delete/' + message.id + '" > <i class="trash icon float-right"></i></a></div></a>';
=======
                            '<a class="mail_content">' + messageToDisplay.content + '</a>';
                            if (message.sender !== undefined) {
                                message_html += '<i class="trash icon float-right"></i></div></a>';
                            }
                            message_html+='</a>';

>>>>>>> origin/list
                            li.innerHTML = message_html;

                            list.appendChild(li);


                        });
                    }
                });

                //scope.getContentLength = function (content, title) {
                //    (content.length + title.length < 150) ? result = content : result = content.substring(0, 150 - title.length);
                //    return result;
                //};
                //
                //scope.getTitleLength = function (title) {
                //    (title.length > 26) ? result = title.substring(0, 26) + "..." : result = title;
                //    return result;
                //};
                //
                //scope.getCorespondentLength = function (corespondent) {
                //    (corespondent.length > 26) ? result = corespondent.substring(0, 26) + "..." : result = corespondent;
                //    return result;
                //};
                //
                //scope.adjustMail = function (corespondent, title, content) {
                //    var result = {};
                //    result.corespondent = scope.getCorespondentLength(corespondent);
                //    result.title = scope.getTitleLength(title);
                //    result.content = scope.getContentLength(content, result.title);
                //
                //    return result;
                //}


            }
        };

    });
