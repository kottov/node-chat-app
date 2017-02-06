$.get("/rooms", function(rooms){
    var datalist = $('#rooms');
    rooms.forEach(function(room) {
        datalist.append($('<option></option>').text(room));
    });
});

