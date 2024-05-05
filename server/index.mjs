import express from "express";
import mongoose from "mongoose";
import { Category } from "./CategoryData.mjs";
import { BioFont } from "./BioFontdata.mjs";

import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const uri =
  "mongodb+srv://gautamkoli2002:gautamMongo98201@cluster1.eqewpjq.mongodb.net/allcaption?retryWrites=true&w=majority&appName=Cluster1";

app.post("/update", async (req, res) => {
  const {
    newtitle,
    newsubTitle,
    caption,
    oldcatnewsubtitle,
    gender,
    pagedescription,
    pagetitle,
  } = req.body;

  const CategoryData = await Category.find({ title: newtitle });

  if (CategoryData.length === 1) {
    try {
      if (oldcatnewsubtitle === "") {
        console.log("working");
        const CategoryData = await Category.updateOne(
          { title: newtitle },
          {
            $push: { [`data.${newsubTitle}.${gender}`]: caption },
            // $set: {
            //   [`pagemeta.${newsubTitle}.${gender}`]: {
            //     title: pagetitle,
            //     description: pagedescription,
            //   },
            // },
          }
        );
      } else {
        console.log("2nd");

        const CategoryData = await Category.updateOne(
          { title: newtitle },
          {
            $push: { subTitle: oldcatnewsubtitle },
            $set: {
              [`data.${oldcatnewsubtitle}`]: {
                [gender]: [caption],
              },
              [`pagemeta.${oldcatnewsubtitle}`]: {
                [gender]: {
                  title: pagetitle,
                  description: pagedescription,
                },
              },
            },
          }
        );
      }

      res.json({ message: "Data received successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error updating data" });
    }
  } else {
    const addNew = new Category({
      title: newtitle,
      subTitle: newsubTitle,
      data: {
        [newsubTitle]: {
          [gender]: [caption],
        },
      },
      pagemeta: {
        [newsubTitle]: {
          [gender]: {
            title: pagetitle,
            description: pagedescription,
          },
        },
      },
    });
    addNew.save();
  }
});

app.post("/updatebio", async (req, res) => {
  const {
    BioTitle,
    BioSubTitle,
    Newbio,
    oldcatebiosubtitle,
    biofontgender,
    biopagedescription,
    biopagetitle,
  } = req.body;

  const checkbiodata = await BioFont.find({ title: BioTitle });

  if (checkbiodata.length === 1) {
    try {
      if (oldcatebiosubtitle === "") {
        if (biopagetitle === "") {
          const checkbiodata = await BioFont.updateOne(
            { title: BioTitle },
            {
              $push: { [`data.${BioSubTitle}.${biofontgender}`]: Newbio },
            }
          );
        } else {
          const checkbiodata = await BioFont.updateOne(
            { title: BioTitle },
            {
              $push: { [`data.${BioSubTitle}.${biofontgender}`]: Newbio },
              $set: {
                [`pagemeta.${BioSubTitle}.${biofontgender}`]: {
                  title: biopagetitle,
                  description: biopagedescription,
                },
              },
            }
          );
        }
      } else {
        console.log("puii");
        const checkbiodata = await BioFont.updateOne(
          { title: BioTitle },
          {
            $push: {
              subTitle: oldcatebiosubtitle,
              [`data.${oldcatebiosubtitle}.${biofontgender}`]: Newbio,
            },
            $set: {
              [`pagemeta.${oldcatebiosubtitle}`]: {
                [biofontgender]: {
                  title: biopagetitle,
                  description: biopagedescription,
                },
              },
            },
          }
        );
      }

      res.json({ message: "Data received successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error updating data" });
    }
  } else {
    const addNew = new BioFont({
      title: BioTitle,
      subTitle: BioSubTitle,
      data: {
        [BioSubTitle]: {
          [biofontgender]: [Newbio],
        },
      },
      pagemeta: {
        [BioSubTitle]: {
          [biofontgender]: {
            title: biopagetitle,
            description: biopagedescription,
          },
        },
      },
    });
    addNew.save();
  }
});

app.get("/api/getData", async (req, res) => {
  try {
    await mongoose.connect(uri);
    const caption = await Category.find();
    const bioFont = await BioFont.find();

    const sendData = {
      captiondata: caption,
      biofontdata: bioFont,
    };
    res.send(sendData);
  } catch (err) {
    res.status(500).json({ message: "Error fdw data" });
  }
});

app.listen(5000, () => {});
