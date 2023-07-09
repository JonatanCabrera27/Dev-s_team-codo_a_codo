//consumir una api con Vue
const { createApp } = Vue
createApp({
    data() {
      return {
      noticias:[],
      url:"https://valeriaaragon.pythonanywhere.com/noticias",
      error:false,

       /*atributos para el guardar los valores del formulario */
       id:0,
       titulo:"", 
       descripcion:"",
       contenido:"",
       imagen:"",

      
      }
    },
//en methods pongo todos los metodos que necesito para mi objeto vue
    methods: {
    
        fetchData(url) { 
           
           fetch(url)
            .then(response => response.json())
            .then(data => {
              console.log(data)
              this.noticias=data                                                            
              console.log(this.noticias)
           })
            .catch(error=>{
               alert("Ups... se produjo un error: "+ error);
               this.error=true
             })
        
        },      
//eliminar y grabar
    eliminar(id) {
        const url = this.url+'/' + id;
        var options = {
            method: 'DELETE',
        }
        fetch(url, options)
            .then(res => res.text()) // or res.json()
            .then(res => {
   alert('Registro Eliminado')
                location.reload(); // recarga el json luego de eliminado el registro
            })
    },
    grabar(){
        let noticia = {
            titulo:this.titulo,
            descripcion: this.descripcion,
            contenido: this.contenido,
            imagen:this.imagen
        }
        var options = {
            body:JSON.stringify(noticia),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow'
        }
        fetch(this.url, options)
            .then(function () {
                alert("Registro grabado")

                window.location.href = "./noticiasAdministrador.html";  // recarga noticias.html
              })
              .catch(err => {
                  console.error(err);
                  alert("Error al Grabar")  // puedo mostrar el error tambien
              })   
            }   
  },
    
//en created pongo qué funcion se tiene que ejecutar cuando arranque vue
  created() {
      this.fetchData(this.url)
  },
}).mount('#app')


