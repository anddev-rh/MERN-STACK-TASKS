const mongoose = require('mongoose');
const { Schema } = mongoose;

//Cómo van a lucir los datos
const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

// primer parametro, como utilizarlo en la app
//segundo, apariencia de los datos, (definido arriba)


module.exports = mongoose.model('Task', TaskSchema);

