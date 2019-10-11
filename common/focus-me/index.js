import FocusMe from './focus-me.directive';

let focusMeModule = angular.module('common.focus-me', []);
focusMeModule.directive('focusMe', FocusMe);