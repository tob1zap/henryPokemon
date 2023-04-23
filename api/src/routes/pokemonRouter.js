const { Router } = require("express");
const pokeRouter = Router();

const {
  createPokemonHandler,
  getPokemonHandler,
  getPokemonByIdHandler,
  deletePokemonHandler,
  updatePokemonHandler,
} = require("../handlers/pokemonHandler");
const { validate } = require("../handlers/validate");

pokeRouter.post("/", validate, createPokemonHandler);
pokeRouter.get("/", getPokemonHandler);
pokeRouter.get("/:id", getPokemonByIdHandler);
pokeRouter.delete("/:id", deletePokemonHandler);
pokeRouter.put("/:id", updatePokemonHandler);

module.exports = pokeRouter;
