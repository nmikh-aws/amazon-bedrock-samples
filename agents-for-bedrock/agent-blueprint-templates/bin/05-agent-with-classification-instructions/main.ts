#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AgentWithSimpleClassificationStack } from '../../lib/stacks/05-agent-with-classification-instructions/agent-with-classification-instructions-stack';

const permissionObject = {
    /* If you don't specify 'env', this stack will be environment-agnostic.
     * Account/Region-dependent features and context lookups will not work,
     * but a single synthesized template can be deployed anywhere. */
    /* Uncomment the next line to specialize this stack for the AWS Account
    * and Region that are implied by the current CLI configuration. */
    // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
    /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
    env: { account: '', region: 'us-east-1' },
};

const app = new cdk.App();

// Create the BedrockAgentWithLambdaParserStack
new AgentWithSimpleClassificationStack(app, 'AgentWithSimpleClassificationStack', permissionObject);