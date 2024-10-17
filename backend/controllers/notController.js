const NotModel = require("../models/notModel");
const mongoose = require("mongoose");

////////////////////////////////////// NOT OLUŞTUR

const notOlustur = async (req, res) => {
  const { baslik, aciklama } = req.body;
  try {
    const not = await NotModel.create({ baslik, aciklama });
    res.status(200).json(not);
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
};

//////////////////////////////////// BÜTÜN NOTLARI GETİR

const notlarGetir = async (req, res) => {
  try {
    const notlar = await NotModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "İşlem başarılı",
      notlar,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//////////////////////////////////// BİR NOT GETİR

const notGetir = async (req, res) => {
  const { id } = req.params;
  // db'Deki idlerle uyumlu mu kontrolü
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ hata: "ID geçersiz" });
  }

  const birNot = await NotModel.findById(id);

  if (!birNot) {
    return res.status(404).json({ hata: "Not Bulunamadı" });
  }
  res.status(200).json(birNot);
};

//////////////////////////////////// BİR NOT SİL

const notSil = async (req, res) => {
  const { id } = req.params;
  // db'Deki idlerle uyumlu mu kontrolü
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ hata: "ID geçersiz" });
  }

  const birNot = await NotModel.findByIdAndDelete(id);

  if (!birNot) {
    return res.status(404).json({ hata: "Not Bulunamadı" });
  }
  res.status(200).json(birNot);
};

//////////////////////////////////// BİR NOT Güncelle

const notGuncelle = async (req, res) => {
  const { id } = req.params;
  // db'Deki idlerle uyumlu mu kontrolü
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ hata: "ID geçersiz" });
  }

  const birNot = await NotModel.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );

  if (!birNot) {
    return res.status(404).json({ hata: "Not Bulunamadı" });
  }
  res.status(200).json(birNot);
};

module.exports = {
  notOlustur,
  notlarGetir,
  notGetir,
  notSil,
  notGuncelle,
};
