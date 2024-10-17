const mongoose = require("mongoose");

const Sema = mongoose.Schema;

const notSema = Sema(
  {
    baslik: {
      type: String,
      required: [true, "Başlık alanı boş bırakılamaz!!"],
    },
    aciklama: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Not", notSema);
