function EnrollmentStepsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('enroll.steps', {
    url: '/enroll/steps',
    templateUrl: "./enroll-steps.html",
    //controller: 'StepCtrl'
  });

};

export default EnrollmentStepsConfig;