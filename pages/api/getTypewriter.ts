// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Typewriter } from "../../typings";

const query = groq`
  *[_type == "typewriter"] | order(_createdAt asc)
`;

type Data = {
    typewriter: Typewriter[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const typewriter: Typewriter[] = await sanityClient.fetch(query);

    res.status(200).json({ typewriter });
}
