let ChristmasMovies=require('./02. Christmas Movies_Resources');
let {assert}=require('chai');

describe ('ChristmasMovies', ()=> {
    it ('initialize', ()=>{
        let movies=new ChristmasMovies();
        assert.deepEqual(movies.movieCollection,[]);
        assert.deepEqual(movies.watched,{});
        assert.deepEqual(movies.actors,[]);
    })
    it ('buyMovie with valid movie and unique actors', ()=>{
        let movies=new ChristmasMovies();
        let result= movies.buyMovie('movie',['actor1','actor2','actor3']);
        assert.equal(result,`You just got movie to your collection in which actor1, actor2, actor3 are taking part!`);
        assert.deepEqual(movies.movieCollection[0],{ name: 'movie', actors: ['actor1','actor2','actor3'] })
    })
    it ('buyMovie with valid movie and non unique actors', ()=>{
        let movies=new ChristmasMovies();
        let result= movies.buyMovie('movie',['actor1','actor2','actor2','actor3']);
        assert.equal(result,`You just got movie to your collection in which actor1, actor2, actor3 are taking part!`);
        assert.deepEqual(movies.movieCollection[0],{ name: 'movie', actors: ['actor1','actor2','actor3'] })
    })
    it ('buyMovie with nonvalid movie', ()=>{
        let movies=new ChristmasMovies();
         movies.buyMovie('movie',['actor1','actor2','actor2','actor3']);
         
        assert.throw(()=>movies.buyMovie('movie',['actor1','actor2','actor2','actor3']),`You already own movie in your collection!`)
    })
    it ('discard movie with non existing movie', ()=>{
        let movies=new ChristmasMovies();
         movies.buyMovie('movie',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie2',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie3',['actor1','actor2','actor2','actor3']);
         
        assert.throw(()=>movies.discardMovie('movie4',['actor1','actor2','actor2','actor3']),`movie4 is not at your collection!`)
    })
    it ('discard movie with watched movie', ()=>{
        let movies=new ChristmasMovies();
         movies.buyMovie('movie',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie2',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie3',['actor1','actor2','actor2','actor3']);
         movies.watchMovie('movie');
         movies.watchMovie('movie2');
        
         let result=movies.discardMovie('movie');
         assert.equal(result,`You just threw away movie!`)
         assert.equal(movies.movieCollection.length,2);
         assert.isFalse(movies.watched.hasOwnProperty('movie'));
        
    })
    it ('discard movie with non watched movie', ()=>{
        let movies=new ChristmasMovies();
         movies.buyMovie('movie',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie2',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie3',['actor1','actor2','actor2','actor3']);
         movies.watchMovie('movie');
         movies.watchMovie('movie2');
        
         
         assert.throw(()=>movies.discardMovie('movie3'),`movie3 is not watched!`)
        
        
    })
    it ('watch movie for the first time', ()=>{
        let movies=new ChristmasMovies();
         movies.buyMovie('movie',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie2',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie3',['actor1','actor2','actor2','actor3']);
         movies.watchMovie('movie');         
         assert.equal(movies.watched['movie'],1);
         movies.watchMovie('movie2');    
         assert.equal(movies.watched['movie2'],1);       
    })
    it ('watch movie for second time', ()=>{
        let movies=new ChristmasMovies();
         movies.buyMovie('movie',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie2',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie3',['actor1','actor2','actor2','actor3']);
         movies.watchMovie('movie');         
         movies.watchMovie('movie');         
         assert.equal(movies.watched['movie'],2);
         movies.watchMovie('movie2');         
         movies.watchMovie('movie2');         
         movies.watchMovie('movie2');         
         assert.equal(movies.watched['movie2'],3);           
    })
    it ('watch non existing movie', ()=>{
        let movies=new ChristmasMovies();
         movies.buyMovie('movie',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie2',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie3',['actor1','actor2','actor2','actor3']);
      assert.throw(()=>movies.watchMovie('movie4'),'No such movie in your collection!')    ;     
    })
    it ('favourite', ()=>{
        let movies=new ChristmasMovies();
         movies.buyMovie('movie',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie2',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie3',['actor1','actor2','actor2','actor3']);
         movies.watchMovie('movie2');         
         movies.watchMovie('movie2');         
         movies.watchMovie('movie2');   
         movies.watchMovie('movie');   
         movies.watchMovie('movie');   
         movies.watchMovie('movie3');   
        assert.equal(movies.favouriteMovie(),`Your favourite movie is movie2 and you have watched it 3 times!`)
    })
    it ('favourite to throw', ()=>{
        let movies=new ChristmasMovies();
         movies.buyMovie('movie',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie2',['actor1','actor2','actor2','actor3']);
         movies.buyMovie('movie3',['actor1','actor2','actor2','actor3']);
         
        assert.throw(()=>movies.favouriteMovie(),'You have not watched a movie yet this year!');
    })
    it ('most starred actor', ()=>{
        let movies=new ChristmasMovies();
         movies.buyMovie('movie',['actor1','actor2','actor3']);
         movies.buyMovie('movie2',['actor1','actor4','actor5']);
         movies.buyMovie('movie3',['actor1','actor6','actor7']);
         
        assert.equal(movies.mostStarredActor(),`The most starred actor is actor1 and starred in 3 movies!`)
    })
    it ('most to throw', ()=>{
        let movies=new ChristmasMovies();
       
         
        assert.throw(()=>movies.mostStarredActor(),'You have not watched a movie yet this year!');
    })
})