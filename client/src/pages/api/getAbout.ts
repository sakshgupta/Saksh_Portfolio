import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from "next-sanity";
import { About } from "typings";
import { client, urlFor } from '../../client';

const query = groq`
    *[_type == "about"]
`

type Data = {
    abouts: About[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const abouts: About[] = await client.fetch(query);
    res.status(200).json({ abouts })
}