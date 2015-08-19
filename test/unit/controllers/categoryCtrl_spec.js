/*global angular */

'use strict';

describe('Unit: CategoryCtrl', function () {

  var ctrl, $q, $rootScope, $scope, CategoryServiceMock, categoryResponseMock, queryDeferred;
  
  // instantiate the app module
  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function (_$q_, _$rootScope_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));


  beforeEach(inject(function ($controller) {
    $scope = $rootScope.$new();
    CategoryServiceMock = {};

    CategoryServiceMock.Category = {
      findAll: function () {
        queryDeferred = $q.defer();
        return { $promise: queryDeferred.promise };
      },
      delete: function () {
        queryDeferred = $q.defer();
        return { $promise: queryDeferred.promise };
      },
      findParents: function () {
        queryDeferred = $q.defer();
        return { $promise: queryDeferred.promise };
      }
    };

    CategoryServiceMock.findTypes = function () {
      return ["POST", "RECIPE"];
    };
    
    CategoryServiceMock.loadGroups = function () {
      return [{id: 1, nome:'Test Parent'}];
    };
    
    spyOn(CategoryServiceMock.Category, 'findAll').andCallThrough();
    spyOn(CategoryServiceMock.Category, 'delete').andCallThrough();
    spyOn(CategoryServiceMock.Category, 'findParents').andCallThrough();
    spyOn(CategoryServiceMock, 'findTypes').andCallThrough();
    spyOn(CategoryServiceMock, 'loadGroups').andCallThrough();

    ctrl = $controller('CategoryCtrl', {
      'CategoryService': CategoryServiceMock
    });
  }));

  beforeEach(function () {
    queryDeferred.resolve(CategoryServiceMock);
    $rootScope.$apply();
  });

  it('should exist', function () {
    expect(ctrl).toBeDefined();
  });

  it('should have category groups populated', function () {
    expect(CategoryServiceMock.loadGroups).toHaveBeenCalled();
  });

  it('should have category types populated', function () {
    expect(CategoryServiceMock.findTypes).toHaveBeenCalled();
  });
  
  it('should find all existent categories', function () {
    expect(CategoryServiceMock.Category.findAll).toHaveBeenCalled();
  });
  
  it('should have an empty categry instance', function () {
    expect(JSON.stringify(ctrl.category)).toBe('{}');
  });
  
  it('should remove category and reload categories', function () {
    ctrl.removeCategory({id : 1});
    expect(CategoryServiceMock.Category.delete).toHaveBeenCalled();
    expect(CategoryServiceMock.Category.findAll).toHaveBeenCalled();
  });
  
});