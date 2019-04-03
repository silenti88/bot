const Discord = require("discord.js");
const config = require("../config.json");
const fs = require("fs")

module.exports = async (client,invites) => {
        // Runs when bot goes online
        console.log(`Logged in as ${client.user.username}!`);
        client.user.setActivity(`Prefix is "/" !`,{type:"PLAYING"});

        const fetchGuildInvites = async () => {
                for(const [guildKey,guild] of client.guilds){
                        await guild.fetchInvites()
                        .then((guildInvites) => {invites[guild.id] = guildInvites})
                        .catch(console.error);
                }    
        }    
        await fetchGuildInvites();        

}