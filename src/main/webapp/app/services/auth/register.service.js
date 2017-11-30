(function () {
    'use strict';

    angular
        .module('jhipsterSampleApplicationGradleApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
