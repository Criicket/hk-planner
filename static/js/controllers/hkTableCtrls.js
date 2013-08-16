angular.module('hkp.controllers')
    .controller('HkTableCtrl', function ($scope, openerpService) {
    $scope.colFreeze = 2;
    $scope.header = ["Freeze1","Freeze2","Table head1","Table head2","Table head3","Table head4","Table head5","Table head6"];
    $scope.table = [
        {"Freeze1":"Freeze cell1","Freeze2":"Freeze cell2","Table head1":"10000","Table head2":"10000","Table head3":"10000","Table head4":"10000","Table head5":"10000","Table head6":"10000"},
        {"Freeze1":"Freeze cell1","Freeze2":"Freeze cell2","Table head1":"10000","Table head2":"10000","Table head3":"10000","Table head4":"10000","Table head5":"10000","Table head6":"10000"},
        {"Freeze1":"Freeze cell1","Freeze2":"Freeze cell2","Table head1":"10000","Table head2":"10000","Table head3":"10000","Table head4":"10000","Table head5":"10000","Table head6":"10000"},
        {"Freeze1":"Freeze cell1","Freeze2":"Freeze cell2","Table head1":"10000","Table head2":"10000","Table head3":"10000","Table head4":"10000","Table head5":"10000","Table head6":"10000"},
        {"Freeze1":"Freeze cell1","Freeze2":"Freeze cell2","Table head1":"10000","Table head2":"10000","Table head3":"10000","Table head4":"10000","Table head5":"10000","Table head6":"10000"},
        {"Freeze1":"Freeze cell1","Freeze2":"Freeze cell2","Table head1":"10000","Table head2":"10000","Table head3":"10000","Table head4":"10000","Table head5":"10000","Table head6":"10000"},
        {"Freeze1":"Freeze cell1","Freeze2":"Freeze cell2","Table head1":"10000","Table head2":"10000","Table head3":"10000","Table head4":"10000","Table head5":"10000","Table head6":"10000"},
        {"Freeze1":"Freeze cell1","Freeze2":"Freeze cell2","Table head1":"10000","Table head2":"10000","Table head3":"10000","Table head4":"10000","Table head5":"10000","Table head6":"10000"}
    ];
    $scope.footer = [
        {'name':"Op 1","operation":"sumColumns"}
//                {'name':"Operation 2","operation":$scope.operationFunc1}
    ];

    $scope.call = function(func){
        return this[func]();
    };

    $scope.sumColumns = function(){
        var ret = [];
        for (var col = $scope.colFreeze; col<$scope.header.length; col++){
            var colSum = 0;
            for (var row = 0; row<$scope.table.length; row++){
                colSum += parseInt($scope.table[row][$scope.header[col]]);
            }
            ret.push(colSum);
        }
        return ret;
    };
});