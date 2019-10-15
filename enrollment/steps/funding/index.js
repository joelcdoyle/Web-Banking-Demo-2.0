import "./funding-step.scss";

let fundingStepModule = angular.module("enroll.steps.funding", ["common"]);

import FundingStepCtrl from "./funding-step.controller";
fundingStepModule.controller("FundingStepCtrl", FundingStepCtrl);

import FundingStepConfig from "./funding-step.config";
fundingStepModule.config(FundingStepConfig);