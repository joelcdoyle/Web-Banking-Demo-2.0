export default function progressCircle() {
  'ngInject';
  return {
    controller: ProgressCircle,
    templateUrl: './progress-circle.html',
    controllerAs: '$ctrl',
    scope: {
      percentage: "=",
      label: "="
    },
    bindToController: true,
    link: function(scope, elem, attr) {
      var circle = elem[0].querySelector("#progress-ring__circle");
      var radius = circle.r.baseVal.value;
      var circumference = radius * 2 * Math.PI;
    
      circle.style.strokeDasharray = `${circumference} ${circumference}`
      circle.style.strokeDashoffset = `${circumference}`;

      scope.$ctrl.circumference = circumference;
      scope.$ctrl.circle = circle;
    }
  }
}

class ProgressCircle {
  constructor($scope, $interval) {
    'ngInject';
    var $ctrl = this;
    $scope.$watch("$ctrl.percentage", function(newVal) {
      // console.log("Watched percentage", newVal);
      // console.log("Circumference: ", $ctrl.circumference);
      // console.log("Percent", $ctrl.percentage)
      // console.log("stroke-dashoffset", $ctrl.circumference - $ctrl.percentage / 100 * $ctrl.circumference)
      $ctrl.circle.style.strokeDashoffset =  $ctrl.circumference - $ctrl.percentage / 100 * $ctrl.circumference;
    });
  }
}