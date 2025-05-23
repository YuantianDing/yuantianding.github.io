import OpenAI from 'openai';
import { marked } from 'marked';
import crypto from 'crypto';
import fs from 'fs';
import * as _ from 'lodash';
import parse from 'html-react-parser';
import ReactDOM from 'react-dom/server';
let client: OpenAI | null = null;

export function getTitle(text: string): string {
    const sha256 = crypto.createHash('sha256').update(text).digest('hex');
    return text.split("").filter(ch => /^[A-Za-z0-9]$/i.test(ch)).join("").substring(0, 30) + ':' + sha256.substring(0, 4);
}

export async function generate_explanation(dirname: string, input: React.ReactNode) {
    if (client === null) {
        client = new OpenAI({apiKey: process.env['OPENAI_API_KEY']})
    }
    const text: string = ReactDOM.renderToStaticMarkup(input);
    const title = getTitle(text);
    let md = "";
    if (!fs.existsSync(`${dirname}/${title}.md`)) {
        const mbyb = (text.match(/<b>(.*?)<\/b>/))? "用<b>标出的": "";
        const params: OpenAI.Chat.ChatCompletionCreateParams  = {
            messages: [{role: 'system', content: `用中文简要解释用户给出的${mbyb}短语，并给出英文例句。`},
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
