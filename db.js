import mongoose from "mongoose";

const conn = () => { //* export edilmesi lazım cunku app.js de kullanmamamız lazım
    mongoose.connect(process.env.DB_URI, {
        dbName: "lenslight_tr",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the DB succesfully");
    })
    .catch((err) => {
        console.log(`DB connection err: ${err}`);
    });
};

export default conn;