function EnrollmentConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('enroll', {
    url: '',
    controller: 'EnrollmentCtrl',
    controllerAs: '$ctrl',
    templateUrl: './enrollment.html',
    resolve: {
      enrollmentSteps(EnrollmentService) {
        return EnrollmentService.getSteps();
      }
    }
  })

};

export default EnrollmentConfig;