const withDbConnection = require("../withDbConnection");
const FraseTa = require("../models/FraseTa");

withDbConnection(async () => {
  await FraseTa.collection.drop();
  await FraseTa.create([
    { taName: "Diego", taFrase: "Reutiliza las funciones" },
    { taName: "Alejandro", taFrase: "La clave privada no se comparte" },
    { taName: "Giorgio", taFrase: "Maaa quee cooosa!" },
    { taName: "Simon", taFrase: "Voostrap Mola" },
    { taName: "Marc", taFrase: "Undefined JODERRR LAS PUTAS FUNCIONES " }
  ]);
});
