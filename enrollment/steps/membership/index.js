import "./membership-step.scss";
let membershipModule = angular.module("enroll.steps.membership", []);

import MembershipConfig from "./membership-step.config";
membershipModule.config(MembershipConfig);

import EnrollMembershipStepCtrl from "./membership-step.controller";
membershipModule.controller("EnrollMembershipStepCtrl", EnrollMembershipStepCtrl)