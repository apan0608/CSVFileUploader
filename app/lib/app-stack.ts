import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda');
import dynamo = require('@aws-cdk/aws-dynamodb');

// todo lambda reference https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html


export class AppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // add lambda code here, lambda will read from a S3 bucket and insert rows to DynamoDB
    // todo maybe I can add a Queue to trigger a lambda instead of triggering directly from S3
    const readFile = new lambda.Function(this,  'DmaFileReader', {
        runtime: lambda.Runtime.NODEJS_8_10,
        code: lambda.Code.asset('lambda'),
        handler: 'dmaFileReader.handler'
    });

    // DynamoDB definition here. Dynamo will store files in each row, in the future will trigger another lambda to process each row upon creation
  }
}
