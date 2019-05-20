function num_par(){
  var all_par = document.getElementsByTagName("p");
  var total_par = all_par.length;
  return total_par;
};

function num_atributos(atributo){
  var array_atributos = [];
  var all_elements = document.getElementsByTagName('*');
  for (var i = 0, n = all_elements.length; i < n; i++)
  {
    if (all_elements[i].getAttribute(atributo) !== null)
    {
      array_atributos.push(all_elements[i]);
    }
  }
  var total_atributos = array_atributos.length;
  return total_atributos;
}

function num_ul(){
	var all_ul = document.getElementsByTagName("ul");
	var total_ul = all_ul.length;
	return total_ul;
}

document.getElementById('info').innerHTML = ( "Número de párrafos: " + num_par() + "\n" + "Número de elementos ul: " + num_ul() + "\n" + "Número de enlaces: " + num_atributos('href') + "\n");