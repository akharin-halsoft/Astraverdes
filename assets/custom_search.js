/*
         IMPORTANT NOTE:

         This file is the unminified JS that is used by the theme. This file is therefore not included into the "theme.liquid" Liquid. It is bundled only
         for developers who would like to add their own JavaScript or edit the existing JavaScript. Re-minifying the ile and make sure you include it into
         the "theme.liquid" is up to the developers responsibility.

         Because we are using WebPack internally to bundle our JavaScript code, even the unminified file can be quite hard to read or edit due to all the
         code added by WebPack.

         Please note that we do not provide any assistance for changes made here that may break the theme: it's at your own risk :).
      */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
  console.log(modules);
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 7);
  /******/
})(
    /************************************************************************/
    /******/[
      /* 0 DOM 0 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /**
         * Various DOM helper
         */

        var Dom = function () {
          function Dom() {
            _classCallCheck(this, Dom);
          }

          _createClass(Dom, null, [{
            key: 'getSiblings',

            /**
             * Get all the previous and next siblings, optionally filtered by a selector
             */
            value: function getSiblings(element, filter) {
              var includeSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

              var siblings = [];
              var currentElement = element;

              // Do the previous first
              while (currentElement = currentElement.previousElementSibling) {
                if (!filter || currentElement.matches(filter)) {
                  siblings.push(currentElement);
                }
              }

              if (includeSelf) {
                siblings.push(element);
              }

              // Then the next side
              currentElement = element;

              while (currentElement = currentElement.nextElementSibling) {
                if (!filter || currentElement.matches(filter)) {
                  siblings.push(currentElement);
                }
              }

              return siblings;
            }

            /**
             * By default, NodeList object are only iterable with forEach on newest browsers. To support it cross-browser,
             * we need to normalize it
             */

          }, {
            key: 'nodeListToArray',
            value: function nodeListToArray(nodeList, filter) {
              var items = [];

              for (var i = 0; i !== nodeList.length; ++i) {
                if (!filter || nodeList[i].matches(filter)) {
                  items.push(nodeList[i]);
                }
              }

              return items;
            }

            /**
             * Calculate an element width with its margin
             */

          }, {
            key: 'outerWidthWithMargin',
            value: function outerWidthWithMargin(element) {
              var width = element.offsetWidth,
                  style = getComputedStyle(element);

              width += parseInt(style.marginLeft) + parseInt(style.marginRight);

              return width;
            }

            /**
             * Calculate an element height with its margin
             */

          }, {
            key: 'outerHeightWithMargin',
            value: function outerHeightWithMargin(element) {
              var height = element.offsetHeight,
                  style = getComputedStyle(element);

              height += parseInt(style.marginTop) + parseInt(style.marginBottom);

              return height;
            }
          }]);

          return Dom;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = Dom;

        /***/
      },
      /* 5 Accessibility 1 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

        var Accessibility = function () {
          function Accessibility() {
            _classCallCheck(this, Accessibility);
          }

          _createClass(Accessibility, null, [{
            key: 'trapFocus',

            /**
             * Traps the focus in a particular container
             */
            value: function trapFocus(container, namespace) {
              this.listeners = this.listeners || {};

              // We check if there is an element with the attribute "autofocus"
              var elementToFocus = container.querySelector('[autofocus]') || container;

              container.setAttribute('tabindex', '-1');
              elementToFocus.focus();

              this.listeners[namespace] = function (event) {
                if (container !== event.target && !container.contains(event.target)) {
                  container.focus();
                }
              };

              document.addEventListener('focusin', this.listeners[namespace]);
            }

            /**
             * Removes the trap of focus in a particular container
             */

          }, {
            key: 'removeTrapFocus',
            value: function removeTrapFocus(container, namespace) {
              if (container) {
                container.removeAttribute('tabindex');
              }

              if (this.listeners && this.listeners[namespace]) {
                document.removeEventListener('focusin', this.listeners[namespace]);
              }
            }

            /**
             * Reset any previous trap focus
             */

          }, {
            key: 'clearTrapFocus',
            value: function clearTrapFocus() {
              for (var key in this.listeners) {
                if (this.listeners.hasOwnProperty(key)) {
                  document.removeEventListener('focusin', this.listeners[key]);
                }
              }

              this.listeners = {};
            }
          }]);

          return Accessibility;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = Accessibility;

        /***/
      },
      /* 21 2 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

        /* harmony import */var __WEBPACK_IMPORTED_MODULE_14__SearchBar__ = __webpack_require__(3);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "SearchBar", function () {
          return __WEBPACK_IMPORTED_MODULE_14__SearchBar__["default"];
        });

        /***/
      },
      /* 27 SearchBar 3 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__ = __webpack_require__(1);

        var SearchBar = function () {
          function SearchBar() {
            _classCallCheck(this, SearchBar);

            this.documentDelegate = new domDelegate.Delegate(document.body);

            this.searchElement = document.getElementById('Search');
            this.searchInputElement = this.searchElement.querySelector('[name="q"]');
            this.searchResultsElement = this.searchElement.querySelector('.Search__Results');
            this.queryMap = {};
            this.isOpen = false;

            // this.pageOverlayElement = document.querySelector('.PageOverlay');

            this._attachListeners();
          }

          _createClass(SearchBar, [{
            key: 'destroy',
            value: function destroy() {
              this.searchInputElement.removeEventListener('keydown', this._preventSubmissionListener);
              this.searchInputElement.removeEventListener('input', this._onInputListener);

              this.documentDelegate.off();
            }
          }, {
            key: '_attachListeners',
            value: function _attachListeners() {
              this._preventSubmissionListener = this._preventSubmission.bind(this);
              this._onInputListener = this._debounce(this._onInput.bind(this), 250);

              this.searchInputElement.addEventListener('keydown', this._preventSubmissionListener);
              this.searchInputElement.addEventListener('input', this._onInputListener);

              this.documentDelegate.on('click', '[data-action="toggle-search"]', this._toggleSearch.bind(this));
              this.documentDelegate.on('click', '[data-action="open-search"]', this._openSearch.bind(this));
              this.documentDelegate.on('click', '[data-action="close-search"]', this._closeSearch.bind(this));

              this.documentDelegate.on('search:close', this._closeSearch.bind(this)); // Allow for third-party elements to close the bar
            }

            /**
             * Toggle the search
             */

          }, {
            key: '_toggleSearch',
            value: function _toggleSearch(event) {
              if (this.isOpen) {
                this._closeSearch(event);
              } else {
                this._openSearch(event);
              }

              event.preventDefault();
            }

            /**
             * Open the search form and trap focus
             */

          }, {
            key: '_openSearch',
            value: function _openSearch() {
              var _this20 = this;

              this.searchElement.setAttribute('aria-hidden', 'false');

              document.documentElement.classList.add('no-scroll');
              __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__["default"].trapFocus(this.searchElement, 'search', this.searchElement.querySelector('[name="q"]'));

              var onFocusListener = function onFocusListener() {
                _this20.searchInputElement.focus();
                _this20.searchElement.removeEventListener('transitionend', onFocusListener);
              };

              this.searchElement.addEventListener('transitionend', onFocusListener);
              this.isOpen = true;

              // this.pageOverlayElement.classList.add('is-visible');
              document.querySelector('#shopify-section-header').style.zIndex = 10;
            }

            /**
             * Close the search form and clear focus
             */

          }, {
            key: '_closeSearch',
            value: function _closeSearch() {
              var _this21 = this;

              this.searchElement.setAttribute('aria-hidden', 'true');

              document.documentElement.classList.remove('no-scroll');
              __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__["default"].removeTrapFocus(this.searchElement, 'search');

              this.isOpen = false;

              var onTransitionEnd = function onTransitionEnd(event) {
                if (event.propertyName === 'visibility') {
                  document.querySelector('#shopify-section-header').style.zIndex = '';
                  // _this21.pageOverlayElement.removeEventListener('transitionend', onTransitionEnd);
                }
              };

              // this.pageOverlayElement.addEventListener('transitionend', onTransitionEnd);
              // this.pageOverlayElement.classList.remove('is-visible');
            }

            /**
             * In order to prevent an odd UX where hitting the enter always choose the product results, if the search is set to product + something else,
             * then we disable submission using enter key
             */

          }, {
            key: '_preventSubmission',
            value: function _preventSubmission(event) {
              if (event.keyCode === 13 && window.theme.searchMode !== 'product') {
                event.preventDefault();
              }
            }

            /**
             * This is called when the user has stopped typing (after debounce delay)
             */

          }, {
            key: '_onInput',
            value: function _onInput(event) {
              var _this22 = this;

              if (event.keyCode === 13) {
                return;
              }

              // Unfortunately, fetch does not support as of today cancelling a request. As a consequence what we do is that we manually
              // keep track of sent requests, and only use the results of the last one
              this.lastInputValue = event.target.value;

              if (this.lastInputValue === '') {
                this._resetSearch();
                return;
              }

              var queryOptions = { method: 'GET', credentials: 'same-origin' };

              var queries = [fetch(window.routes.searchUrl + '?view=ajax&q=' + encodeURIComponent(this.lastInputValue) + '*&type=product', queryOptions)];

              if (window.theme.searchMode !== 'product') {
                queries.push(fetch(window.routes.searchUrl + '?view=ajax&q=' + encodeURIComponent(this.lastInputValue) + '*&type=' + window.theme.searchMode.replace('product,', ''), queryOptions));
              }

              this.queryMap[this.lastInputValue] = true;

              document.dispatchEvent(new CustomEvent('theme:loading:start'));
              console.log('queries', queries);

              Promise.all(queries).then(function (responses) {
                // If we receive the result for a query that is not the last one, we simply do not process the result
                if (_this22.lastInputValue !== event.target.value) {
                  return;
                }

                delete _this22.queryMap[event.target.value];
                console.log('PROMISES', responses);

                Promise.all(responses.map(function (response) {
                  return response.text();
                })).then(function (contents) {
                  // If we have only one content then we only have product, otherwise we have products and articles
                  if (window.theme.searchMode === 'product') {
                    _this22.searchResultsElement.innerHTML = contents[0];
                  } else {
                    _this22.searchResultsElement.innerHTML = '<div class="PageLayout PageLayout--breakLap">\n              <div class="PageLayout__Section">' + contents[0] + '</div>\n              <div class="PageLayout__Section PageLayout__Section--secondary">' + contents[1] + '</div>\n            </div>';
                  }

                  _this22.searchResultsElement.setAttribute('aria-hidden', 'false');
                });

                document.dispatchEvent(new CustomEvent('theme:loading:end'));
              });
            }
          }, {
            key: '_resetSearch',
            value: function _resetSearch() {
              if (window.theme.searchMode === 'product') {
                this.searchResultsElement.innerHTML = '';
              } else {
                this.searchResultsElement.innerHTML = '<div class="PageLayout PageLayout--breakLap">\n              <div class="PageLayout__Section"></div>\n              <div class="PageLayout__Section PageLayout__Section--secondary"></div>\n            </div>';
              }

              this.searchResultsElement.setAttribute('aria-hidden', 'true');

              document.dispatchEvent(new CustomEvent('theme:loading:end')); // Just in case
            }

            /**
             * Simple function that allows to debounce
             */

          }, {
            key: '_debounce',
            value: function _debounce(fn, delay) {
              var _this23 = this;

              var timer = null;

              return function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                clearTimeout(timer);

                timer = setTimeout(function () {
                  fn.apply(_this23, args);
                }, delay);
              };
            }
          }]);

          return SearchBar;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = SearchBar;

        /***/
      },
      /* 40 HeaderSection 4 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        /* harmony import */

        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Dom__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(2);

        var HeaderSection = function () {
          function HeaderSection(container) {
            var _this47 = this;

            _classCallCheck(this, HeaderSection);

            this.element = container;
            this.delegateElement = new domDelegate.Delegate(this.element);
            this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
            this.lastScrollPosition = -1;
            this.isTouch = window.matchMedia('(-moz-touch-enabled: 1), (hover: none)').matches;

            if (this.options['isSticky']) {
              Stickyfill.addOne(this.element.parentNode);
            }

            // Set up the search bar
            this.searchBar = new __WEBPACK_IMPORTED_MODULE_3__components__["SearchBar"]();

            this._attachListeners();
            this._verifyNavigationOverlap();

            // We set again some CSS variables that are used for some calculations in CSS
            var mainLogo = this.element.querySelector('.Header__LogoImage--primary');

            if (mainLogo && !mainLogo.complete) {
              mainLogo.addEventListener('load', function () {
                fastdom.measure(function () {
                  document.documentElement.style.setProperty('--header-height', _this47.element.clientHeight + 'px');
                  document.documentElement.style.setProperty('--header-is-not-transparent', _this47.options['hasTransparentHeader'] ? 0 : 1);
                });
              });
            } else {
              fastdom.measure(function () {
                document.documentElement.style.setProperty('--header-height', _this47.element.clientHeight + 'px');
                document.documentElement.style.setProperty('--header-is-not-transparent', _this47.options['hasTransparentHeader'] ? 0 : 1);
              });
            }

            this._setupLocalizationPopovers();
          }

          _createClass(HeaderSection, [{
            key: 'onUnload',
            value: function onUnload() {
              this.element.removeEventListener('mouseleave', this._closeNavigationListener);
              this.element.removeEventListener('mouseenter', this._focusNavigationListener);
              this.element.removeEventListener('focusin', this._focusNavigationListener);

              this.delegateElement.off();

              window.removeEventListener('scroll', this._checkTransparentHeaderListener);
              window.removeEventListener('resize', this._verifyNavigationOverlapListener);

              if (this.options['isSticky']) {
                Stickyfill.removeOne(this.element.parentNode);
              }

              // this.searchBar.destroy();

              this.localizationPopovers.forEach(function (localizationPopover) {
                localizationPopover.destroy();
              });
            }
          }, {
            key: 'onSelect',
            value: function onSelect() {
              this._checkTransparentHeader();
            }
          }, {
            key: 'onBlockSelect',
            value: function onBlockSelect(event) {
              var _this48 = this;

              var listItem = event.target.closest('.HorizontalList__Item');

              fastdom.mutate(function () {
                event.target.setAttribute('aria-hidden', 'false');

                if (listItem) {
                  listItem.classList.add('is-expanded');

                  __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].getSiblings(listItem, '.is-expanded').forEach(function (item) {
                    item.classList.remove('is-expanded');
                  });
                }

                _this48.element.classList.remove('Header--transparent'); // This is needed to make sure everything is visible
              });
            }
          }, {
            key: 'onBlockDeselect',
            value: function onBlockDeselect(event) {
              var listItem = event.target.closest('.HorizontalList__Item');

              fastdom.mutate(function () {
                event.target.setAttribute('aria-hidden', 'true');

                if (listItem) {
                  listItem.classList.remove('is-expanded');
                }
              });

              this._checkTransparentHeader();
            }
          }, {
            key: '_attachListeners',
            value: function _attachListeners() {
              this._checkTransparentHeaderListener = this._checkTransparentHeader.bind(this);
              this._closeNavigationListener = this._closeNavigation.bind(this);
              this._focusNavigationListener = this._focusNavigation.bind(this);
              this._verifyNavigationOverlapListener = this._verifyNavigationOverlap.bind(this);

              this.element.addEventListener('mouseleave', this._closeNavigationListener);

              this.delegateElement.on('mouseenter', '.Header__MainNav .HorizontalList__Item, [aria-haspopup]', this._openMenu.bind(this), true);
              this.delegateElement.on('focusin', '[aria-haspopup]', this._openMenu.bind(this), true);
              this.delegateElement.on('focusout', '[aria-haspopup]', this._closeMenu.bind(this), false);
              this.delegateElement.on('click', '[data-action="toggle-search"]', this._closeNavigationListener);
              this.delegateElement.on('mouseleave', '.DropdownMenu [aria-haspopup]', this._closeMenu.bind(this), true);
              this.delegateElement.on('mouseenter', '.DropdownMenu [aria-haspopup]', this._adjustDropdownPosition.bind(this), true);

              if (this.isTouch) {
                this.delegateElement.on('click', '.Header__MainNav [aria-haspopup]', this._handleTouchMenu.bind(this));
              }

              if (this.options['hasTransparentHeader']) {
                this.element.addEventListener('mouseenter', this._focusNavigationListener);
                this.element.addEventListener('focusin', this._focusNavigationListener);
              }

              if (this.options['isSticky'] && this.options['hasTransparentHeader']) {
                window.addEventListener('scroll', this._checkTransparentHeaderListener);
              }

              if (this.options['navigationStyle'] === 'inline' || this.options['navigationStyle'] === 'logoLeft') {
                window.addEventListener('resize', this._verifyNavigationOverlapListener);
              }
            }
          }, {
            key: '_setupLocalizationPopovers',
            value: function _setupLocalizationPopovers() {
              // Prestige is an extremely complex theme, especially in the header due to the various layouts that power different
              // features. One issue that arises with this is that we output the localization elements twice in the DOM (with the
              // same ID as we're doing a capture in Liquid), and then depending on the screen size one layout is choosen. We therefore
              // have to de-duplicate the ID here. This is honestly not the cleanest code on earth, but I prefer handling this here
              // rather than duplicating too much Liquid
              this.localizationPopovers = [];

              __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].nodeListToArray(document.querySelectorAll('#header-locale-popover')).forEach(function (item, index) {
                item.id = item.id + '-' + index;
              });
              __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].nodeListToArray(document.querySelectorAll('[aria-controls="header-locale-popover"]')).forEach(function (item, index) {
                item.setAttribute('aria-controls', item.getAttribute('aria-controls') + '-' + index);
              });

              __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].nodeListToArray(document.querySelectorAll('#header-currency-popover')).forEach(function (item, index) {
                item.id = item.id + '-' + index;
              });
              __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].nodeListToArray(document.querySelectorAll('[aria-controls="header-currency-popover"]')).forEach(function (item, index) {
                item.setAttribute('aria-controls', item.getAttribute('aria-controls') + '-' + index);
              });
            }
          }, {
            key: '_focusNavigation',
            value: function _focusNavigation() {
              var _this49 = this;

            }
          }, {
            key: '_closeNavigation',
            value: function _closeNavigation() {
              var _this50 = this;

              fastdom.mutate(function () {
                __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].nodeListToArray(_this50.element.querySelectorAll('.is-expanded')).forEach(function (item) {
                  item.classList.remove('is-expanded');
                });

                __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].nodeListToArray(_this50.element.querySelectorAll('.Header__MainNav [aria-hidden="false"]')).forEach(function (item) {
                  item.setAttribute('aria-hidden', 'true');
                });
              });

              if (this.options['hasTransparentHeader']) {
                this._checkTransparentHeader();
              }
            }
          }, {
            key: '_openMenu',
            value: function _openMenu(event, target) {
              if (event.type === 'mouseenter' && target !== event.target) {
                return;
              }

              fastdom.mutate(function () {
                target.classList.add('is-expanded');
                __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].nodeListToArray(target.children, '.Header__MainNav [aria-hidden="true"]').forEach(function (item) {
                  item.setAttribute('aria-hidden', 'false');
                });

                __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].getSiblings(target, '.is-expanded').forEach(function (item) {
                  item.classList.remove('is-expanded');

                  __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].nodeListToArray(item.children, '.Header__MainNav [aria-hidden="false"]').forEach(function (item) {
                    item.setAttribute('aria-hidden', 'true');
                  });
                });
              });
            }
          }, {
            key: '_closeMenu',
            value: function _closeMenu(event, target) {
              if (event.type === 'mouseleave' && target !== event.target) {
                return;
              }

              fastdom.mutate(function () {
                target.classList.remove('is-expanded');

                __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].nodeListToArray(target.children, '.Header__MainNav [aria-hidden="false"]').forEach(function (item) {
                  item.setAttribute('aria-hidden', 'true');
                });
              });
            }
          }, {
            key: '_adjustDropdownPosition',
            value: function _adjustDropdownPosition(event, target) {
              var nestedMenus = __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].nodeListToArray(target.querySelectorAll('.DropdownMenu')),
                  shouldOpenLeft = false;

              fastdom.measure(function () {
                var windowWidth = window.innerWidth,
                    rightEdge = target.getBoundingClientRect().right;

                nestedMenus.forEach(function (item) {
                  if (rightEdge + item.offsetWidth > windowWidth) {
                    shouldOpenLeft = true;
                  }
                });
              });

              fastdom.mutate(function () {
                if (shouldOpenLeft) {
                  nestedMenus.forEach(function (item) {
                    item.classList.add('DropdownMenu--reversed');
                  });
                } else {
                  nestedMenus.forEach(function (item) {
                    item.classList.remove('DropdownMenu--reversed');
                  });
                }
              });
            }

            /**
             * On touch devices where we display the standard menu (like landscape iPad or Surface) we need to do additional code to properly
             * handle the opening of menu. Especially, what we do is that if an item has a sub-menu, a click does not follow the link but instead open
             * the sub-menu. If this link is clicked a second twice, then the menu is followed
             */

          }, {
            key: '_handleTouchMenu',
            value: function _handleTouchMenu(event, target) {
              if (!target.classList.contains('is-expanded')) {
                event.preventDefault();
              }
            }
          }, {
            key: '_verifyNavigationOverlap',
            value: function _verifyNavigationOverlap() {
              var _this51 = this;

              var isOverlapping = false;

              fastdom.measure(function () {
                // To detect if the navigation is overlapping, we take the height of a single item and check if its height is taller than the parent
                var mainTopMenu = _this51.element.querySelector('.Header__MainNav');

                if (mainTopMenu) {
                  // Get the first element
                  var firstNavElementHeight = __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].outerHeightWithMargin(mainTopMenu.querySelector('.HorizontalList__Item')),
                      mainNavHeight = mainTopMenu.scrollHeight;

                  if (mainNavHeight > firstNavElementHeight) {
                    isOverlapping = true;
                  }
                }
              });

              fastdom.mutate(function () {
                if (isOverlapping) {
                  // _this51.element.classList.remove('Header--' + _this51.options['navigationStyle']);
                  // _this51.element.classList.add('Header--center');
                } else {
                  _this51.element.classList.add('Header--' + _this51.options['navigationStyle']);
                  _this51.element.classList.remove('Header--center');
                }

                console.log('Header--initialized', _this51.element);
                _this51.element.classList.add('Header--initialized');

                fastdom.measure(function () {
                  document.documentElement.style.setProperty('--header-height', _this51.element.clientHeight + 'px');
                });
              });
            }

            /**
             * If the header mode is set to "transparent", we have to do extra work to automatically make it with fill colors when the
             * user starts scrolling. For performance we are using fastDOM to do that (which relies of requestAnimationFrame instead of
             * scroll listener)
             */

          }, {
            key: '_checkTransparentHeader',
            value: function _checkTransparentHeader() {
              var _this52 = this;

              if (!this.options['hasTransparentHeader']) {
                return;
              }

              var scrollThreshold = 10;

              fastdom.measure(function () {
                _this52.lastScrollPosition = window.pageYOffset;
              });

              fastdom.mutate(function () {
                if (_this52.lastScrollPosition <= scrollThreshold) {
                  _this52.element.classList.add('Header--transparent');
                } else {
                  _this52.element.classList.remove('Header--transparent');
                }
              });
            }
          }]);

          return HeaderSection;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = HeaderSection;
      },
      /* 49 SectionContainer 5 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Dom__ = __webpack_require__(0);

        /**
         * This code is extracted from Slate
         */

        var SectionContainer = function () {
          function SectionContainer() {
            _classCallCheck(this, SectionContainer);

            this.constructors = [];
            this.instances = [];

            this._attachListeners();
          }

          _createClass(SectionContainer, [{
            key: '_attachListeners',
            value: function _attachListeners() {
              document.addEventListener('shopify:section:load', this._onSectionLoad.bind(this));
              document.addEventListener('shopify:section:unload', this._onSectionUnload.bind(this));
              document.addEventListener('shopify:section:select', this._onSelect.bind(this));
              document.addEventListener('shopify:section:deselect', this._onDeselect.bind(this));
              document.addEventListener('shopify:section:reorder', this._onReorder.bind(this));
              document.addEventListener('shopify:block:select', this._onBlockSelect.bind(this));
              document.addEventListener('shopify:block:deselect', this._onBlockDeselect.bind(this));
            }
          }, {
            key: 'register',
            value: function register(type, constructor) {
              var _this63 = this;

              this.constructors[type] = constructor;

              __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].nodeListToArray(document.querySelectorAll('[data-section-type=' + type + ']')).forEach(function (container) {
                _this63._createInstance(container, constructor);
              });
            }

            /**
             * Return an object from an array of objects that matches the provided key and value
             */

          }, {
            key: '_findInstance',
            value: function _findInstance(array, key, value) {
              for (var i = 0; i < array.length; i++) {
                if (array[i][key] === value) {
                  return array[i];
                }
              }
            }

            /**
             * Remove an object from an array of objects by matching the provided key and value
             */

          }, {
            key: '_removeInstance',
            value: function _removeInstance(array, key, value) {
              var i = array.length;

              while (i--) {
                if (array[i][key] === value) {
                  array.splice(i, 1);
                  break;
                }
              }

              return array;
            }
          }, {
            key: '_onSectionLoad',
            value: function _onSectionLoad(event) {
              var container = event.target.querySelector('[data-section-id]');

              if (container) {
                this._createInstance(container);
              }
            }
          }, {
            key: '_onSectionUnload',
            value: function _onSectionUnload(event) {
              var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

              if (!instance) {
                return;
              }

              if (typeof instance.onUnload === 'function') {
                instance.onUnload(event);
              }

              this.instances = this._removeInstance(this.instances, 'id', event.detail.sectionId);
            }
          }, {
            key: '_onSelect',
            value: function _onSelect(event) {
              var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

              if (instance && typeof instance.onSelect === 'function') {
                instance.onSelect(event);
              }
            }
          }, {
            key: '_onDeselect',
            value: function _onDeselect(event) {
              var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

              if (instance && typeof instance.onDeselect === 'function') {
                instance.onDeselect(event);
              }
            }
          }, {
            key: '_onReorder',
            value: function _onReorder(event) {
              var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

              if (instance && typeof instance.onReorder === 'function') {
                instance.onReorder(event);
              }
            }
          }, {
            key: '_onBlockSelect',
            value: function _onBlockSelect(event) {
              var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

              if (instance && typeof instance.onBlockSelect === 'function') {
                instance.onBlockSelect(event);
              }
            }
          }, {
            key: '_onBlockDeselect',
            value: function _onBlockDeselect(event) {
              var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

              if (instance && typeof instance.onBlockDeselect === 'function') {
                instance.onBlockDeselect(event);
              }
            }
          }, {
            key: '_createInstance',
            value: function _createInstance(container, constructor) {
              var id = container.getAttribute('data-section-id'),
                  type = container.getAttribute('data-section-type');

              constructor = constructor || this.constructors[type];

              if (typeof constructor === 'undefined') {
                return;
              }

              var instance = Object.assign(new constructor(container), {
                id: id,
                type: type,
                container: container
              });

              this.instances.push(instance);
            }
          }]);

          return SectionContainer;
        }();
        /* harmony export (immutable) */

        __webpack_exports__["default"] = SectionContainer;

        /***/
      },
      /* 56 6 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__HeaderSection__ = __webpack_require__(4);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "HeaderSection", function () {
          return __WEBPACK_IMPORTED_MODULE_11__HeaderSection__["default"];
        });

        /* harmony import */var __WEBPACK_IMPORTED_MODULE_20__SectionContainer__ = __webpack_require__(5);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "SectionContainer", function () {
          return __WEBPACK_IMPORTED_MODULE_20__SectionContainer__["default"];
        });
        /***/
      },
      /* 57 7 */
      /***/function (module, exports, __webpack_require__) {

        __webpack_require__(0);
        __webpack_require__(1);
        __webpack_require__(2);
        __webpack_require__(3);
        __webpack_require__(5);
        __webpack_require__(6);
        __webpack_require__(7);

        module.exports = __webpack_require__(8);

      },
      /* 58 8 */
      /***/function (module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__sections__ = __webpack_require__(6);

        (function () {
          var sections = new __WEBPACK_IMPORTED_MODULE_2__sections__["SectionContainer"]();

          sections.register('header', __WEBPACK_IMPORTED_MODULE_2__sections__["HeaderSection"]);

          /**
           * ----------------------------------------------------------------------------
           * UTILS
           * ----------------------------------------------------------------------------
           */

          (function () {
            var windowWidth = window.innerWidth,
                headerSection = document.getElementById('shopify-section-header');

            window.addEventListener('resize', function () {
              var newWidth = -1;

              fastdom.measure(function () {
                newWidth = window.innerWidth;
              });

              fastdom.mutate(function () {
                if (newWidth === windowWidth) {
                  return;
                }

                windowWidth = newWidth;

                document.documentElement.style.setProperty('--window-height', window.innerHeight + 'px');

                if (headerSection) {
                  document.documentElement.style.setProperty('--header-height', headerSection.clientHeight + 'px');
                }
              });
            });
          })();

        })();

        /***/
      }
    ]
    /******/);
