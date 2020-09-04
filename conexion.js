var mongoose=require('mongoose');
var connection=mongoose.connect('mongodb+srv://gaoneiz:Gaoneiz0986206.@cluster0.rl5iq.mongodb.net/Basenode?retryWrites=true&w=majority');
mongoose.connection.on('open',(ref)=>{
console.log("Conectado a Mongo Cloud");
})