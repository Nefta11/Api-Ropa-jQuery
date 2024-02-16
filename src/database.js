import mongoose from "mongose";

mongoose.connect(process.env.DataBase_Conexion)
.then(db=> console.log("Conexión exitosa a la base de datos Siuuu"))
.catch(err=>console.error(err));

export default mongoose;