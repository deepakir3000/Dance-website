const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/deepakshope', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log("I am Bat-Man")
// });

const kittySchema = new mongoose.Schema({    //Schema//
    name: String
});

kittySchema.methods.speak = function () {
    const greeting = "My name is " + this.name;    //Methods//
    console.log(greeting);
}

const Kitten = mongoose.model('DeepakKitty', kittySchema);   //Model// //creat only file name and it go to the mongo collections//

const DeepakKitty = new Kitten({ name: 'Deepak Kumar' }); //Object//

const DeepakKitty2 = new Kitten({ name: 'I AM IRON MAN' });
// console.log(DeepakKitty.name);

// DeepakKitty.speak();

DeepakKitty.save(function (err, DeepakKitty) {
    if (err) return console.error(err);
    // DeepakKitty.speak();
});

DeepakKitty2.save(function (err, Deepak) {
    if (err) return console.error(err);
    // Deepak.speak();
});
//(err,Deepak) in this case Deepak is just a name  and u can choose different name one thing u remember that same argument pass for Deepak.speak()  ;//


Kitten.find({name:"Deepak Kumar"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })
