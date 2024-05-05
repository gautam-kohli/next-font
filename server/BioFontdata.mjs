import mongoose from "mongoose";

const biofontdata = new mongoose.Schema({
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
    default: [],
  },
  pagemeta: {
    type: Object,
    default: [],

  },
});

const BioFont = mongoose.model("Biofont", biofontdata);

export { BioFont };
