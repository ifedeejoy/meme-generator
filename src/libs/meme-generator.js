const memeMaker = async (userPrompt, imageQuantity) => {
    const { Configuration, OpenAIApi } = require("openai")

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration)

    const imageParameters = {
        model: 'image-alpha-001',
        prompt: userPrompt,
        n: parseInt(imageQuantity),
        size: '512x512',
        response_format: 'url',
    }
    const response = await openai.createImage(imageParameters);
    const url = response.data.data;
    return url;
}

export { memeMaker };