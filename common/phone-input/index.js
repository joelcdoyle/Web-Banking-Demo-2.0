import phoneInput from './phone-input.directive';

import './phone-input.scss';

let phoneInputModule = angular.module('common.phone-input', []);
phoneInputModule.directive('phoneInput', phoneInput);