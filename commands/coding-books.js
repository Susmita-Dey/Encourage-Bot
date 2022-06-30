const { request } = require('undici');
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("coding-books")
        .setDescription("Gets a list of coding-help books!"),
    async execute(interaction) {
        await interaction.deferReply();
        // await interaction.reply("Boop!");
        async function getJSONResponse(body) {
            let fullBody = '';

            for await (const data of body) {
                fullBody += data.toString();
            }

            return JSON.parse(fullBody);
        }

        if (commandName === 'coding-books') {
            const bookResult = await request('https://openlibrary.org/subjects/coding.json');
            // const { file } = await getJSONResponse(catResult.body);
            const { list } = await getJSONResponse(bookResult.body);

            if (!list.length) {
                return interaction.editReply("No results found");
            }

            // const [answer] = list;

            // const embed = new MessageEmbed()
            // 	.setColor('#EFFF00')
            // 	.setTitle(answer.word)
            // 	.setURL(answer.permalink)
            // 	.addFields(
            // 		{ name: 'Definition', value: trim(answer.definition, 1024) },
            // 		{ name: 'Example', value: trim(answer.example, 1024) },
            // 		{
            // 			name: 'Rating',
            // 			value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`,
            // 		},
            // 	);
            interaction.editReply({ lists: [list] });
        }
    },
};
