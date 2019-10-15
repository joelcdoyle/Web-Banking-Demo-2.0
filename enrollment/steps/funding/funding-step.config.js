function FundingStepConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('enroll.steps.funding', {
    url: '/funding',
    controller: "FundingStepCtrl",
    controllerAs: "$ctrl",
    templateUrl: "./funding-step.html",
    resolve: {
      fundingStep($q, EnrollmentService) {
        return EnrollmentService.getSteps().then((steps) => {
          let fundingStep = steps.find((step) => {
            return step.state == "funding";
          });
          return $q.resolve(fundingStep);
        })
      }
    }
  });

};

export default FundingStepConfig;