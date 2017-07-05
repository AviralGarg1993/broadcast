/**
 * Created by avi on 2017-07-04.
 */
var app = angular.module('test-directives', []);


app.directive('mapDiv', function(){
    return{
        restrict: 'E',
        templateUrl: 'map-div.html'
    };
});