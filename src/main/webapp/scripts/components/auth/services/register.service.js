'use strict';

angular.module('basketLeagueApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


