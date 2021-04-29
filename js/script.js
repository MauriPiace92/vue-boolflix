var root = new Vue(
    {
        el: '#root',
        data: {
            userInput:'',
            movies:[]
            
        },
        methods: {
            confirmSearch(){
                
            
                axios
                    .get('https://api.themoviedb.org/3/search/movie?api_key=413470a083cf4dbccd2f6ef0067cf80a',{

                        params:{
                            query:this.userInput
                        }
                    })
                    .then((response)=>{
                        const result = response.data;

                        console.log(result.results);
                        this.movies = result.results;
                    })
            }
                

        },
        mounted(){

        }
    }
)