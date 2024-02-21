import AWS from "aws-sdk";
import { NextApiRequest, NextApiResponse } from "next";

const s3 = new AWS.S3({
  region: "eu-central-1",
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "eu-central-1:31ebe2ab-fc9d-4a2c-96a9-9dee9a9db8b9",
  }),
});

async function listFilesInDirectory(
  bucketName: string,
  prefix: string
): Promise<string[]> {
  const params = {
    Bucket: bucketName,
    Prefix: prefix,
  };

  const data: any = await s3.listObjectsV2(params).promise();
  return data.Contents.map((item: any) => item.Key);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bucketName = "dataspan.frontend-home-assignment";
  const categories = ["test", "train", "valid"];
  const contentTypes = ["images", "labels", "thumbnails"];

  try {
    const results: any = {};

    for (const category of categories) {
      results[category] = {};

      for (const contentType of contentTypes) {
        const prefix = `bone-fracture-detection/${category}/${contentType}/`;
        results[category][contentType] = await listFilesInDirectory(
          bucketName,
          prefix
        );
      }
    }

    res.status(200).json(results);
  } catch (error: any) {
    console.error("Error retrieving content:", error);
    res.status(500).json({
      error: "There was an error retrieving the content: " + error.message,
    });
  }
}
