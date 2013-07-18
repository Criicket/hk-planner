'use strict';


describe('Json2D service', function () {
    beforeEach(module('hkp.services'));

    describe('Json2D init', function () {
        var Json2D;

        beforeEach(inject(function (_Json2D_) {
            Json2D = _Json2D_;
        }));

        it('should create 2d table from arrays with default values', function () {
            var arr1 = ["row1", "row2", "row3"];
            var arr2 = ["col1", "col2", "col3", "col4"];
            var json2d = Json2D.createJson2D(arr1, arr2);
            expect(json2d).toEqual(
                {"row1": {"col1": 0, "col2": 0, "col3": 0, "col4": 0},
                    "row2": {"col1": 0, "col2": 0, "col3": 0, "col4": 0},
                    "row3": {"col1": 0, "col2": 0, "col3": 0, "col4": 0}});
        });
    });

    describe('Json2D', function () {
        var Json2D;
        var data;

        beforeEach(inject(function (_Json2D_) {
            Json2D = _Json2D_;
            var arr1 = ["row1", "row2", "row3"];
            var arr2 = ["col1", "col2", "col3", "col4"];
            data = Json2D.createJson2D(arr1, arr2);
        }));

        it('should give row keys', function () {
            expect(Json2D.getRowKeys(data)).toEqual(["row1", "row2", "row3"]);
        });

        it('should give column keys', function () {
            expect(Json2D.getColumnKeys(data)).toEqual(["col1", "col2", "col3", "col4"]);
        });

        it('should remove column', function () {
            expect(Json2D.removeColumn(data, "col1")).toEqual(
                {"row1": {"col2": 0, "col3": 0, "col4": 0},
                    "row2": {"col2": 0, "col3": 0, "col4": 0},
                    "row3": {"col2": 0, "col3": 0, "col4": 0}}
            );
        });

        it('should get columns data in arrays', function () {
            expect(Json2D.getColumns(data)).toEqual(
                [
                    [ 0, 0, 0 ],
                    [ 0, 0, 0 ],
                    [ 0, 0, 0 ],
                    [ 0, 0, 0 ]
                ]
            );
        });

        var dataSort =
        {
            "row1": {"col1": 3, "col2": 3, "col3": 0, "col4": 0},
            "row2": {"col1": 1, "col2": 1, "col3": 0, "col4": 0},
            "row3": {"col1": 2, "col2": 2, "col3": 0, "col4": 0},
            "row4": {"col1": 0, "col2": 0, "col3": 0, "col4": 0}
        };

        it('should be sortable in ascended order by selected column', function () {
            expect(Json2D.sortByColumn(dataSort, "col1", 1)).toEqual(
                {
                    "row4": {"col1": 0, "col2": 0, "col3": 0, "col4": 0},
                    "row2": {"col1": 1, "col2": 1, "col3": 0, "col4": 0},
                    "row3": {"col1": 2, "col2": 2, "col3": 0, "col4": 0},
                    "row1": {"col1": 3, "col2": 3, "col3": 0, "col4": 0}
                }
            );
        });

        it('should be sortable in descended order by selected column', function () {
            expect(Json2D.sortByColumn(dataSort, "col2", -1)).toEqual(
                {
                    "row1": {"col1": 3, "col2": 3, "col3": 0, "col4": 0},
                    "row3": {"col1": 2, "col2": 2, "col3": 0, "col4": 0},
                    "row2": {"col1": 1, "col2": 1, "col3": 0, "col4": 0},
                    "row4": {"col1": 0, "col2": 0, "col3": 0, "col4": 0}
                }
            );
        });

        it('should be sortable in ascended order by key', function () {
            var dataSortKey =
            {
                "apple": {"col1": 3, "col2": 3, "col3": 0, "col4": 0},
                "onion": {"col1": 1, "col2": 1, "col3": 0, "col4": 0},
                "banana": {"col1": 2, "col2": 2, "col3": 0, "col4": 0},
                "turtle": {"col1": 0, "col2": 0, "col3": 0, "col4": 0}
            };
            expect(Json2D.sortByKey(dataSortKey, 1)).toEqual(
                {
                    "apple": {"col1": 3, "col2": 3, "col3": 0, "col4": 0},
                    "banana": {"col1": 2, "col2": 2, "col3": 0, "col4": 0},
                    "onion": {"col1": 1, "col2": 1, "col3": 0, "col4": 0},
                    "turtle": {"col1": 0, "col2": 0, "col3": 0, "col4": 0}
                }
            );
        });
    });
});
