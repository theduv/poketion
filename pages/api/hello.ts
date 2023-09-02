// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import main from "../../database/connection";
import Kitten from "../../database/schema";
import schema from "../../database/schema";

type Data = {
  name: string;
};

export default function getCollection(req: any, res: any) {
  main().catch((e) => console.log(e));
  const create = new Kitten({ name: "speudal" });

  create.save().then(() => {
    res.status(200).json(create);
  });
}
