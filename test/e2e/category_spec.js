/*global browser, by */

'use strict';

describe('E2E: Category', function () {

  beforeEach(function () {
    browser.get('/category');
    browser.waitForAngular();
  });

  it('should route correctly', function () {
    expect(browser.getLocationAbsUrl()).toMatch('/category');
  });

  it('should show all filter fields', function () {
    expect(element(by.id('category-group-select')).isPresent()).toBe(true);
    expect(element(by.id('category-type-select')).isPresent()).toBe(true);
    expect(element(by.id('category-name-input')).isPresent()).toBe(true);
  });

  it('should open an empty modal when insert button is clicked', function () {
    element(by.id('add-category-btn')).click().then(function () {
      var categoryModal = element(by.id('category-modal'));
      expect(categoryModal.isPresent()).toBe(true);
      expect(categoryModal.$('.modal-header').getText()).toEqual('Nova Categoria');
      expect(categoryModal.$('#category-name-input').getText()).toEqual('');
    });
  });

  it('should add a new line in category grid', function () {
    element(by.id('add-category-btn')).click().then(function () {
      element(by.model('categoryModalCtrl.category.type')).$('option[label="RECIPE"]').click();
      element(by.id('category-modal')).$('#category-name-input').sendKeys('Recipe Test');
      element(by.id('save-category-btn')).click().then(function () {
        element.all(by.repeater('category in categoryCtrl.filteredCategories')).then(function (categories) {
          expect(categories.length > 0).toBeTruthy();
        });
      });
    });
  });

});