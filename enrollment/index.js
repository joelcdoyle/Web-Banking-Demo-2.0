import angular from 'angular';
import '../common/';
import './enrollment-progress';
import './steps'

import './enrollment.scss';

// Create the module where our functionality can attach to
let enrollmentModule = angular.module('enrollment', ['common', 'enroll.progress', 'enroll.steps']);

import EnrollmentService from './enrollment.service';
enrollmentModule.service("EnrollmentService", EnrollmentService);

// Include our UI-Router config settings
import EnrollmentConfig from './enrollment.config';
enrollmentModule.config(EnrollmentConfig);

// Controllers
import EnrollmentCtrl from './enrollment.controller';
enrollmentModule.controller('EnrollmentCtrl', EnrollmentCtrl);
