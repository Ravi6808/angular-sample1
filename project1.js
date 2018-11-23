//script.js
var app = angular
                .module("myApp",[])
                .controller("myCont1",function($scope,$rootScope){
                  $rootScope.rootScope="Iam the RootScope"; 
                  $scope. name="";
                })
                .controller("myCont2",function($scope){
                    $scope.name1="";
                })