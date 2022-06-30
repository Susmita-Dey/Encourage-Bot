// const { request } = require('undici');
// const catResult = await request('https://aws.random.cat/meow');
// const { file } = await getJSONResponse(catResult.body);

module.exports = {
    name: "interactionCreate",
    execute(interaction) {
        console.log(
            `${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`
        );

        // await interaction.deferReply();

    },
};
// const { commandName } = interaction;
// 	await interaction.deferReply();