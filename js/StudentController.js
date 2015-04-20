studentRoster.controller('StudentCtrl', function StudentCtrl($scope) {
    $scope.students = [];
    $scope.addStudent = function() {
        $scope.students.push({ name: $scope.studentName , age: $scope.studentAge });
        $scope.studentName = null;
        $scope.studentAge = null;
    }
    $scope.deleteStudent = function(student) {
        var index = $scope.students.indexOf(student);
        $scope.students.splice(index, 1)
    }
});
