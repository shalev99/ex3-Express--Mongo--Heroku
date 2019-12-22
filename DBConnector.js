const mongoose  = require('mongoose'),
    Ninja   = require('./Ninja');
      
    

const options = {
        useNewUrlParser:    true,
        useCreateIndex:     true,
        useUnifiedTopology: true,
        //process.env.DB_PASS=’db_pass’
        //process.env.DB_USER=’db_usr’
        user:               'TAL_shalev',
        pass:               '100'
       
    };
    
    //process.env.MLAB_URL
mongoose.connect("mongodb+srv://talshalev:<password>@cluster0-r7yfm.mongodb.net/test?retryWrites=true&w=majority", options)
.then(
    () => {
        console.log("Connected");
    },
    err => {
        console.log(`Connection Error: ${err}`);
    }
);


module.exports = {

    //deleteNinja by id
    deleteNinja: async function(req, res){


        const {id=null} = req.query; 
        if(id==null){

            res.send("not found id");
            res.status(404);   
        }

        await Ninja.deleteOne({ id: id });


         res.send("delete Ninja was good");
         res.status(200);

    },


    //addNinja
    addNinja: async function(req, res){

        const {id=null,
            first_name=null,
            last_name=null,
            age=null,
            height=null,
            weight=null,
            score=null} = req.query; 


      await  Ninja.create({ 
            
            id:         id,
            first_name: first_name,
            last_name:  last_name,
            age:        age,
            height:     height,
            weight:     weight,
            score:      score

         });
         res.send("Successfully  Add ninja");
         res.status(200); 

    },


    /* Gets all Ninja */ 
    getAllNinja: async function(req, res){
        //console.log("hereee11111");
        const result = await Ninja.find({});

        if (result) 
            res.send(JSON.stringify(result));
        else res.status(404).send(`"Failure": "No Documents Were Found."`);
    },


    /* Updats ninja by  id. */
    updateNinja: async function(req, res){

        const {id=null,
            first_name=null,
            last_name=null,
            age=null,
            height=null,
            weight=null,
            score=null} = req.query; 

        await  Ninja.updateOne({ id: id }, 
            { $set: { first_name: first_name,
            last_name: last_name ,
            age: age,
            height: height,
            weight: weight,
            score: score,} })


        res.send("update Ninja was good");
        res.status(200);
    }
}