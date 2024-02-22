import AWS from "aws-sdk";

// Настройка AWS S3
const albumBucketName = "dataspan.frontend-home-assignment";
const region = "eu-central-1";
const IdentityPoolId = "eu-central-1:31ebe2ab-fc9d-4a2c-96a9-9dee9a9db8b9";

AWS.config.update({
  region,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId,
  }),
});

const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName },
});

export default async function handler(req: any, res: any) {
  const { directory } = req.query;

  const params = {
    Bucket: "dataspan.frontend-home-assignment",
    Prefix: `bone-fracture-detection/${
      directory !== "/" ? decodeURIComponent(directory) : ""
    }`,
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching data from S3" });
  }
}
