angular.module('directives').directive('hkSideCell',function(){
    return {
        link: function(scope, element){
            var headerElement = angular.element('#hk-head-' + scope.$index);
            element.width(headerElement.width());

            var tableBody = angular.element('.hk-table-body');
            var sideBarWidth = headerElement.parent().width();
            tableBody.css('padding-left', sideBarWidth);

            var footerSideCells = angular.element('.hk-table-sidebar .hk-table-foot');
            footerSideCells.width(sideBarWidth-2);
        }
    }
});
angular.module('directives').directive('hkBodyCell',function(){
    return {
        link: function(scope, element){
            var headerElement = angular.element('#hk-head-' + scope.colFreeze + scope.$index);
            element.width(headerElement.width());
        }
    }
});

angular.module('directives').directive('hkTable', function ($window) {
    return function (element) {
        var table = angular.element('.hk-table');

        var setSpacePadding = function(){
            var tableHeight = angular.element('.hk-table').height(),
                rowsHeight = angular.element(".hk-table-data").height(),
                headHeight = $('.hk-table-head').height(),
                footHeight = $('.hk-table-foot').height(),
                footWidth = $('.hk-table-foot').width();
            var newHeight = tableHeight - headHeight - footHeight*3;

            if(rowsHeight < newHeight){
                angular.element('.hk-padder').height(newHeight - rowsHeight);
                angular.element('.hk-table-data-scroll').height(rowsHeight)
            }else{
                angular.element('.hk-padder').height(0);
                angular.element('.hk-table-data-scroll').height(newHeight)
            }

            var dataTableWidth = angular.element('.hk-table-trunk .hk-table-header').width()
            var trunkWidth = angular.element('.hk-table-trunk').width()
            angular.element('.hk-table-trunk .hk-padder').width(dataTableWidth-2);
            if(trunkWidth > dataTableWidth){
                angular.element('.hk-table-body .hk-table-data-scroll').width(dataTableWidth);
            }else{
                var trunkWidth = angular.element('.hk-table-trunk').width()
                var trunkScroll = angular.element(this).scrollLeft();
                angular.element('.hk-table-body .hk-table-data-scroll').width(trunkWidth + trunkScroll);
            }

        };

        angular.element('.hk-table-trunk').scroll(function(){
            var trunkWidth = angular.element('.hk-table-trunk').width()
            var trunkScroll = angular.element(this).scrollLeft();
            angular.element('.hk-table-body .hk-table-data-scroll').width(trunkWidth + trunkScroll);
        });

        angular.element('.hk-table-body .hk-table-data-scroll').scroll(function(){
            var scrollTop = angular.element(this).scrollTop();
            angular.element('.hk-table-sidebar .hk-table-data-scroll').scrollTop(scrollTop);
        });

        table.resize('resize', function () {
            setSpacePadding();
        });
        setSpacePadding();
    }
})
