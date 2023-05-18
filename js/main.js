//consumir una api con Vue
const { createApp } = Vue
createApp({
    data() {
      return {
      noticias:[],
      url:"./js/datos.json",
      error:false
      }
    },
//en methods pongo todos los metodos que necesito para mi objeto vue
    methods: {
    
        fetchData(url) { 
           
           fetch(url)
            .then(response => response.json())
            .then(data => {
              console.log(data)
              this.noticias=data.articulos                                                              
              console.log(this.noticias)
           })
            .catch(error=>{
               alert("Ups... se produjo un error: "+ error);
               this.error=true
             })
        
        }
      },

      //en created pongo qué funcion se tiene que ejecutar cuando arranque vue
      created() {
        this.fetchData(this.url) //ejecutá la funcion data y pasale la url de la api
      }
    



  }).mount('#app')