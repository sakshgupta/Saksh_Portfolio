import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Skill } from "typings";
import { client, urlFor } from '../../client';

const query = groq`
    *[_type == "skill"]
`

type Data = {
    skills: Skill[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const skills: Skill[] = await client.fetch(query);
    res.status(200).json({ skills })
}