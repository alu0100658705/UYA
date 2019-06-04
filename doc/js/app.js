(function(){ 
var database = firebase.database();
    database.ref().child('libros').once('value', function(snapshot){
        if(snapshot.exists()){
            var content = '';
            snapshot.forEach(function(data){
                var val = data.val();
                content +='<tr>';
                content += '<td>' + val.autor + '</td>';
                content += '<td>' + val.fecha + '</td>';
                content += '<td>' + val.genero + '</td>';
                content += '<td>' + val.titulo + '</td>';
                content += '</tr>';
            });
            $('#etiqueta').append(content);
        }
    });
}());