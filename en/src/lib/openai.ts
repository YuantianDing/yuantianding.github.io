import OpenAI from 'openai';
import { marked } from 'marked';
import crypto from 'crypto';
import fs from 'fs';
import * as _ from 'lodash';
import parse from 'html-react-parser';
import ReactDOM from 'react-dom/server';
let client: any = null;

export async function generate_explanation(dirname: string, input: React.ReactNode) {
    if (client === null) {
        client = new OpenAI({apiKey: process.env['OPENAI_API_KEY']})
    }
    const text: string = ReactDOM.renderToStaticMarkup(input);
    const sha256 = crypto.createHash('sha256').update(text).digest('hex');
    const title = text.split("").filter(ch => /^[A-Za-z0-9]$/i.test(ch)).join("").substring(0, 30) + ':' + sha256.substring(0, 4);
    let md = "";
    if (!fs.existsSync(`${dirname}/${title}.md`)) {
        const params: OpenAI.Chat.ChatCompletionCreateParams  = {
            messages: [{role: 'system', content: "Explain the phrase marked by <b> in the user-given sentence, and generate example sentences to explain other meanings of the phrase (if exists). "},
            { role: 'user', content: text }],
            model: 'gpt-4o',
        };
        const chatCompletion: OpenAI.Chat.ChatCompletion = await client.chat.completions.create(params) as any;
        md = chatCompletion.choices[0].message.content ?? "";
        fs.writeFileSync(`${dirname}/${title}.md`, md);
    } else {
        md = fs.readFileSync(`${dirname}/${title}.md`).toString('utf-8');
    }
    return parse(await marked.parse(md));
}
