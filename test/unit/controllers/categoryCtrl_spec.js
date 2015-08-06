/*global angular */

'use strict';

describe('Unit: CategoryCtrl', function() {

  var ctrl, categoryServiceMock;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject(function($controller, CategoryService) {
      categoryServiceMock = CategoryService;
      spyOn(categoryServiceMock, 'findCategoryGroups').andCallThrough();
      ctrl = $controller('CategoryCtrl', {
        CategoryService : categoryServiceMock
      });
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });
  
  it('should have category groups populated', function() {
    expect(ctrl.categoryGroups).not.toBe(null);
    expect(ctrl.categoryGroups.length).toBe(2);
  });
  
  it('should have an empty categry instance', function() { 
    expect(JSON.stringify(ctrl.category)).toBe('{}');
  });
  
  

});