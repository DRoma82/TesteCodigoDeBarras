$(function () {
    
});

function fnLer()
{
    alert(cordova.require);
    var scanner = cordova.require("cordova/plugin/BarcodeScanner");
    alert(scanner);

    scanner.scan(function (result) {
        alert("We got a barcode\n" +
        "Result: " + result.text + "\n" +
        "Format: " + result.format + "\n" +
        "Cancelled: " + result.cancelled);
    }, function (error) {
        alert("Scanning failed: ", error);
    });
}