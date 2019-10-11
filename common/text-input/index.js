import textInput from './text-input.directive';

import './text-input.scss';

let textInputModule = angular.module('text-input', [])
textInputModule.directive('textInput', textInput);