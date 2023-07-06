const { createApp } = Vue  //creo un objeto VUE llamdo createApp
 createApp({
   data() {  // define los datos de VUE
     return {
       url: 'http://mcerda.pythonanywhere.com/productos',
       datos: [],
     }
   },
   methods: {  // define los métodos o funciones
     fetchData(url) { 
       fetch(url)
         .then(response => response.json())
         .then(data => {
           console.log(data)
           this.datos=data
        })
         .catch(error=>alert("Ups... se produjo un error: "+ error))
     },
     
   },
   created() {  // llama a los métodos que se tienen que ejecutar al inicio
     this.fetchData(this.url)                                                      
   },
}).mount('#app')
