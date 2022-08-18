///a closure is a function that binds together with its lexical environment
function z() {
    var c = 70;
    function x() {
        let a = 10;
        function y() {
            console.log(a, c);
        }
        y();
    }
    x();
}
// var zy = z();
// zy();
z()