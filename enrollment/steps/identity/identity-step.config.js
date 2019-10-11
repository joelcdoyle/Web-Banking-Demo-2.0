function IdentityStepConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('enroll.steps.identity', {
    url: '/identity',
    controller: 'IdentityStepCtrl',
    controllerAs: "$ctrl",
    templateUrl: "./identity-step.html",
    resolve: {
      identityStep($q, EnrollmentService) {
        return EnrollmentService.getSteps().then((steps) => {
          let identityStep = steps.find((step) => {
            return step.state == "identity";
          });
          return $q.resolve(identityStep);
        })
      }
    }
  });

}
export default IdentityStepConfig;