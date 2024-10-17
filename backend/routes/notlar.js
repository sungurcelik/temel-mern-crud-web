const express = require("express");
const router = express.Router();
const {
  notOlustur,
  notlarGetir,
  notGetir,
  notSil,
  notGuncelle,
} = require("../controllers/notController.js");

router.get("/", notlarGetir);

router.get("/:id", notGetir);

router.post("/", notOlustur);

router.delete("/:id", notSil);

router.patch("/:id", notGuncelle);

module.exports = router;
