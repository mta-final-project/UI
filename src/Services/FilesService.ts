// import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";


// // TODO check why after changing CORS it crashes
// export const getS3Objects = async () => {
//   const client = new S3Client({
//     region: "us-east-1",
//     credentials: {
//       accessKeyId: '',
//       secretAccessKey: '',
//       sessionToken: ''
//     }
//   });

//   let objects = [];
//   let isTruncated = true;
//   let command = new ListObjectsV2Command({
//     Bucket: "academease"
//   });

//   while (isTruncated) {
//     const { Contents, IsTruncated, NextContinuationToken } = await client.send(command);
//     objects = [...objects, ...Contents];
//     isTruncated = IsTruncated;
//     command.input.ContinuationToken = NextContinuationToken;
//   }

//   return objects;

//   //const command = new ListObjectsV2Command({ Bucket: "academease" });
//   //return client.send(command);
// };