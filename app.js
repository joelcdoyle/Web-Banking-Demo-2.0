import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-ui-bootstrap';
import 'angular-animate';
import 'angular-sanitize';



// Import your app functionality
import './enrollment'

// Create and bootstrap application
const requires = [
  'ui.router',
  'ngAnimate',
  'ngSanitize',
  'ui.bootstrap',
  'enrollment'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);

// Import your app stylesheets
import './style.scss';