/**
 * Created by user on 2016-06-11.
 */
angular.module("phonebook.filter",[])
    .filter("genderFilter",function() {
        return function(input) {
            return input=="F" ? "여자":"남자";
        }
    });