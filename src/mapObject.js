function mapObject(obj, transformer) {
    var result = {};
    var fields = Object.keys(obj);
    fields.forEach(function (key) {
        var fieldValue = obj[key];
        result[key] = transformer(fieldValue);
    });
    return result;
}
var grades = { "roma": 5, "vasya": 2 };
var results = mapObject(grades, function (x) { return x > 2; });
console.log(results);
