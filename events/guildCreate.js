const Discord = require("discord.js"); 
const config = require("../config.json")
const fs = require("fs")

module.exports = async (guild) => {
    guild.owner.send("Thank you for inviting me! Please DM my owner if you have any questions!")
} 