const express = require("express")
const pool = require("./db")
const { generateToken, verifyToken } = require("./auth")

const router = express.Router()

router.get("/", async (req, res) => {
  res.send("Hello les biocopains")
})

router.get("/api", async (req, res) => {
  res.send({message : "Connexion à l'API"})
})

router.get("/coco", async (req, res) => {
  res.send("Coucou")
})

router.post("/api/register", async (req, res) => {
  // Inscription de l'utilisateur
  res.send("Inscription")
})

router.post("/api/login", async (req, res) => {
  // Connexion de l'utilisateur
  res.send("Login")
})

router.get("/api/profile", async (req, res) => {
  // Obtenir le profil de l'utilisateur
  res.send("Profile Get")
})

router.put("/api/profile", async (req, res) => {
  // Mettre à jour le profil de l'utilisateur
  res.send("Profile Put")
})

module.exports = router
