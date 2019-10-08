var connect = "wss://test.mosquitto.org:8081/mqtt";
client = mqtt.connect(connect);

$(document).ready(function () {
    $('#1').click(function () {
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        var topic = 'jude/fan/status';
        var payload = 'Turned 1: ' + time
        client.publish(topic, payload);
        $("#status").html("The fan is currently turned 1");
    });
    $('#2').click(function () {
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        var topic = 'jude/fan/status';
        var payload = 'Turned 2: ' + time
        client.publish(topic, payload);
        $("#status").html("The fan is currently turned 2");
    });
    $('#3').click(function () {
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        var topic = 'jude/fan/status';
        var payload = 'Turned 3: ' + time
        client.publish(topic, payload);
        $("#status").html("The fan is currently turned 3");
    });
    $("#off").click(function (e) {
        e.preventDefault();
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        var topic = 'jude/fan/status';
        var payload = 'Turned Off: ' + time
        client.publish(topic, payload);
        $("#status").html("The fan is currently turned off");
    })
})