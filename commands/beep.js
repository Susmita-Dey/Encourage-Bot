const { SlashCommandsBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandsBuilder()
    .setName("beep")
    .setDescription("Replies with Boop!"),
  async execute(interaction) {
    await interaction.reply("Boop!");
  },
};
