function validarFormulario(){

    //obtener los valores del formulario
    var nombre=document.getElementById("nombre").value.trim(); // con trim le corto todos los espacios en blanco que pudiesen haber al final y principio
    var apellido=document.getElementById("apellido").value.trim();
    var mail=document.getElementById("mail").value.trim();
    var mensaje=document.getElementById("mensaje").value.trim();

//verificar si algun campo está en blanco

if(nombre==="" || apellido==="" || mail==="" || mensaje===""){
    alert("Por favor complete todos los campos del Formulario");
    return false;
}

//verificar si el nombre contiene solo caracteres alfabéticos y espacios

for(var i=0; i<nombre.length; i++){
    var charCode=nombre.charCodeAt(i);
    if(!((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122) || charCode===32)){
        alert("El campo 'Nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
    }
}


//verificar si el apellido  contiene solo caracteres alfabéticos y espacios

for(var i=0; i<apellido.length; i++){
    var charCode2=apellido.charCodeAt(i);
    if(!((charCode2>=65 && charCode2<=90) || (charCode2>=97 && charCode2<=122) || charCode2===32)){
        alert("El campo 'Apellido' solo puede contener caracteres alfabéticos y espacios.");
        return false;
    }
}

 
var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
console.log("el mail a validar es" +mail);
	// Using test we can check if the text match the pattern
	if( validEmail.test(mail) ){
		//alert("La dirección de email " + mail + " es correcta.");
		return true;
	}else{
		alert('La dirección de email es incorrecta. Debe contener la forma: nombre usuario + @ + servidor + dominio');
		return false;
	}
} 
 