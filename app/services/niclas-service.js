'use strict';

angular
  .module('myApp.services')
  .factory('NiclasService', function () {
    var approveList = {
      simple: 0,
      more: 3
    }

    var NService = {
      add: function (chosenVar) {
        approveList[chosenVar] += 1;
      },

      get: function (chosenVar) {
        return approveList[chosenVar];
      }
    };

    return NService;
  });
