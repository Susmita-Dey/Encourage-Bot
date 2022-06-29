const { SlashCommandsBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandsBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
};
