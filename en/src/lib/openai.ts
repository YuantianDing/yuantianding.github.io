import OpenAI from 'openai';
import showdown from 'showdown';
import fs from 'fs';
import crypto from 'crypto';
import parse from 'html-react-parser';
import ReactDOM from 'react-dom/server';
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export async function generate_explanation(input: React.ReactNode) {
    const text: string = ReactDOM.renderToStaticMarkup(input);
    const sha256 = crypto.createHash('sha256').update(text).digest('hex');
    let html = "";
    if (!fs.existsSync(`./explanation/${sha256}.html`)) {
        const params: OpenAI.Chat.ChatCompletionCreateParams  = {
            messages: [{role: 'system', content: "Explain the phrase marked by <b> in the user-given sentence, and generate example sentences to explain other meanings of the phrase (if exists). "},
            { role: 'user', content: text }],
            model: 'gpt-4o',
        };
        const chatCompletion: OpenAI.Chat.ChatCompletion = await client.chat.completions.create(params) as any;
        const result = chatCompletion.choices[0].message.content ?? "";
        const convert = new showdown.Converter();
        html = convert.makeHtml(result);
        fs.writeFileSync(`./explanation/${sha256}.html`, html);
    } else {
        html = fs.readFileSync(`./explanation/${sha256}.html`).toString('utf-8');
    }
    return parse(html);
}
