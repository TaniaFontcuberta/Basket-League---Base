 'use strict';

angular.module('basketLeagueApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-basketLeagueApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-basketLeagueApp-params')});
                }
                return response;
            }
        };
    });
