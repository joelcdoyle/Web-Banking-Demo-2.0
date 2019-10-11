import angular from "angular";
import './enroll-progress.scss';
let progressModule = angular.module('enroll.progress', []);

// Components
import EnrollProgress from './enroll-progress.directive';
progressModule.directive('enrollmentProgress', EnrollProgress);