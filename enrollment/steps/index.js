import "./membership";
import "./identity";
import "./funding";

let enrollStepsModule = angular.module("enroll.steps", ["enroll.steps.membership", "enroll.steps.identity", "enroll.steps.funding"]);

import StepsConfig from "./enroll-steps.config";
enrollStepsModule.config(StepsConfig);