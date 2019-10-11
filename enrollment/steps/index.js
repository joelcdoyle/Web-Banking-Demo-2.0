import "./membership";
import "./identity";

let enrollStepsModule = angular.module("enroll.steps", ["enroll.steps.membership", "enroll.steps.identity"]);

import StepsConfig from "./enroll-steps.config";
enrollStepsModule.config(StepsConfig);