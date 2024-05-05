import mongoose from "mongoose";

const captiondataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: [
    {
      type: String,
    },
  ],
  data: {
    type: Object,
  },
  pagemeta: {
    type: Object,
    default: [],

  },
  
});

const Category = mongoose.model("category", captiondataSchema);

export  { Category };
