'use strict';

App.factory('AppModel', function($resource) {
  return $resource('/apps/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  }); // Note the full endpoint address
});
