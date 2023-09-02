import mongoose from "mongoose";

const main = async () => {
  mongoose.connect(
    "mongodb+srv://speudal:HFTGcplqdCjhHN2N@cluster55064.tqjcutk.mongodb.net/?retryWrites=true&w=majority"
  );
};

export default main;
