var root = new Vue(
    {
        el: '#root',
        data: {
            userInput:'',
            movies:[],
            tvShows:[]
            
        },
        methods: {
            confirmSearch(){
                
                // axios for sarching movies:
                axios
                    .get('https://api.themoviedb.org/3/search/movie?api_key=413470a083cf4dbccd2f6ef0067cf80a',{

                        params:{
                            query:this.userInput,
                            page:1

                        }
                    })
                    .then((response)=>{
                        const result = response.data;

                        console.log(result.results);
                        this.movies = result.results;
                    });

                // axios for searching tvshows: 
                axios
                    .get('https://api.themoviedb.org/3/search/tv?api_key=413470a083cf4dbccd2f6ef0067cf80a',{

                        params:{
                            query:this.userInput,
                            page:1

                        }
                    })
                    .then((response)=>{
                        const result = response.data;

                        console.log(result.results);
                        this.tvShows = result.results;
                    });                
            },

            voteInStar(vote){

                const voteStars = Math.ceil(vote / 2);
                return voteStars;
            }
                

        },
        mounted(){

        }
    }
)