import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda');

export interface DmaFileReaderProps {
    // the function that will read the dma file 
    dmaFileReader: lambda.IFunction;
}

export class DmaFileReader extends cdk.Construct {
    constructor(scope: cdk.Construct, id: string, props: DmaFileReaderProps) {
        super(scope, id);
        // the actual method 
    }
}