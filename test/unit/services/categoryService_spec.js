/*global angular */

'use strict';

describe('Unit: CategoryService', function() {

  var service;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the service
    angular.mock.inject(function(CategoryService) {
      service = CategoryService;
    });
  });

  it('should exist', function() {
    expect(service).toBeDefined();
  });

});