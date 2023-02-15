import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from "next-sanity";
import { Social } from "typings";
import { client, urlFor } from '../../client';

const query = groq`
    *[_type == "social"]
`

type Data = {
    socials: Social[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const socials: Social[] = await client.fetch(query);
    res.status(200).json({ socials })
}