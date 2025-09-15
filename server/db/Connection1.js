import mongoose from 'mongoose'

const connectWithMongoDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb+srv://codewithdevelpors:Qaimpur828@develpors-hub.zuflo2i.mongodb.net/?retryWrites=true&w=majority&appName=Develpors-hub')
        console.log("Mongo connection successfull!!...on host : " + connectionInstance.connection.host)
    } catch (error) {
        console.error("db :: connection :: error : " + error)
    }
}; 

export default connectWithMongoDB;