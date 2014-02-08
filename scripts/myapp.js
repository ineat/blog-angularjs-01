var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngTouch']);

app.directive("myDirective", function() {
    return {
        //template: "ma directive dit : Bonjour {{yourName}} !"
        templateUrl: 'my-directive.html'
    };
});
app.controller("MyController", function ($scope) {
    $scope.todolist = [];
    $scope.add = function (todo) {
        if (todo != null) {
            $scope.todolist.push({
                label:todo
            });
        }
    };
    $scope.sort = function() {
        $scope.todolist.sort($scope.compare);
    };
    $scope.del = function(index) {
        $scope.todolist.splice(index, 1);
    }
    $scope.compare = function (a,b){
        if (a.label < b.label)
            return -1;
        if (a.label> b.label)
            return 1;
        return 0;
    };
});
