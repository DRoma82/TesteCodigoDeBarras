$(function () {
    
});

function fnLer()
{
    var scanner = cordova.require("com.phonegap.plugins.barcodescanner.BarcodeScanner");
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