const memeMaker = async (userPrompt) => {
    const { Configuration, OpenAIApi } = require("openai")

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration)

    const imageParameters = {
        model: 'image-alpha-001',
        prompt: userPrompt,
        n: 1,
        size: '512x512',
        response_format: 'url',
    }
    const response = await openai.createImage(imageParameters);
    const url = response.data.data[0].url;
    return url;
}

export { memeMaker };