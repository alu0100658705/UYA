(function(){
    
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBRwkE7Lj0K_nU11r2wfa9Hy3jfikBUnxQ",
        authDomain: "uya-g2.firebaseapp.com",
        databaseURL: "https://uya-g2.firebaseio.com",
        projectId: "uya-g2",
        storageBucket: "uya-g2.appspot.com",
        messagingSenderId: "98345995388"
    };
    firebase.initializeApp(config);
 
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