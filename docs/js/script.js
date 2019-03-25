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

alert("Hay " + num_par() + " párrafos. \n" + "Hay " + num_ul() + " <ul> elementos. \n" + "Hay " + num_atributos('href') + " enlaces.");