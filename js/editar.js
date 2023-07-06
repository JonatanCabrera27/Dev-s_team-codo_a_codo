id=location.search.substr(4)

const { createApp } = Vue
createApp({
    data() {
      return {
     
      url:'http://valeriaaragon.pythonanywhere.com/noticias/'+id,
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
              this.id=data.id
              this.titulo=data.titulo
              this.descripcion=data.descripcion
              this.contenido=data.contenido
              this.imagen=data.imagen
                                                         
              //console.log(this.noticias)
           })
            .catch(error=>{
               alert("Ups... se produjo un error: "+ error);
               this.error=true
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
            method: 'PUT',
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

