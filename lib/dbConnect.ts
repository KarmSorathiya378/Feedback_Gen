import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}

const Connection: ConnectionObject = {};

async function dbConnect() {
    if(Connection.isConnected){
        console.log("Already connected to database");
        return 
    }

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || "" , {});

        Connection.isConnected = db.connections[0].readyState
    
        console.log("Successfully conneted to database");
       
    }catch(error){
        console.log("Failed to connect database", error);
        process.exit(1)      
    }
}

export default dbConnect;