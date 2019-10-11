function EnrollMembershipStepConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('enroll.steps.membership', {
    url: '/membership',
    controller: "EnrollMembershipStepCtrl",
    controllerAs: "$ctrl",
    templateUrl: "./membership-step.html",
    resolve: {
      membershipStep($q, EnrollmentService) {
        return EnrollmentService.getSteps().then((steps) => {
          let membershipStep = steps.find((step) => {
            return step.state == "membership";
          });
          return $q.resolve(membershipStep);
        })
      }
    }
  });

};

export default EnrollMembershipStepConfig;