import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from "next-sanity";
import { Experience } from "typings";
import { client, urlFor } from '../../client';

const query = groq`
    *[_type == "experience"]
`

type Data = {
    experiences: Experience[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const experiences: Experience[] = await client.fetch(query);
    
    res.status(200).json({ experiences })
}