/// <reference path="../typings/index.d.ts"/>

// angular 1 Vendor Import
require('angular');

require('patternfly/dist/js/patternfly.min.js');
require('angular-ui-bootstrap/dist/ui-bootstrap.js');
require('angular-ui-bootstrap/dist/ui-bootstrap-tpls.js');
require('angular-patternfly/dist/angular-patternfly');
require('angular-ui-router/release/angular-ui-router');
require('lodash/lodash');

// import * as angular from 'angular';
import 'core-js/client/shim';
import 'zone.js/dist/zone';

import '@angular/common';
import 'rxjs';

import './index.scss';


// import polyfills
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// import angular2 dpes
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Router} from '@angular/router';

import {Ng1AppModule} from './ng1_app';
import {Ng2AppModule} from './ng2_app';

/**
 * We bootstrap the Angular 2 module first, and then, once it's done,
 * bootstrap the Angular 1 module.
 */
platformBrowserDynamic().bootstrapModule(Ng2AppModule).then(ref => {
  // bootstrap angular1
  (<any>ref.instance).upgrade.bootstrap(document.body, [Ng1AppModule.name]);

  // setTimeout is necessary because upgrade.bootstrap is async.
  setTimeout(() => {
    ref.injector.get(Router).initialNavigation();
  }, 0);
});
