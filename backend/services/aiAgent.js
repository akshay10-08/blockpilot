const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

module.exports = async function generateAction(message) {
    const prompt = `You are BlockPilot AI. Interpret this DeFi user instruction and suggest an Ethereum-compatible action:\n\n"${message}"`;

    const res = await openai.createCompletion({
        model: "gpt-4",
        prompt,
        max_tokens: 100,
    });

    return res.data.choices[0].text.trim();
};
