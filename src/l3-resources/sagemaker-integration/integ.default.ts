// Copyright 2023 MongoDB Inc
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as cdk from "aws-cdk-lib";
import { SageMakerIntegration } from "./index";
import { AtlasBasic } from "../atlas-basic";
const app = new cdk.App();
const stack = new cdk.Stack(app, "sagemaker-cdk-default", {
  env: {
    region: process.env.CDK_DEFAULT_REGION ?? "us-east-1",
    account: process.env.CDK_DEFAULT_ACCOUNT ?? "711489243244",
  },
});

new SageMakerIntegration(stack, "sagemaker-integration", {
  appId: "<appId>",
  collectionName: "sagemaker-coll",
  databaseName: "sagemaker-db",
  mongoDBEndpoint:
    "mongodb+srv://<username>:<pwd>@clusternEndpoint/?retryWrites=true&w=majority",
  profile: "default",
  projectID: "<projectId>",
  pullLambdaImageRepo: "process-mdb-change-event",
  pushLambdaImageRepo: "process-result",
  sagemakerInstanceType: "ml.c5.large",
  sagemakerModelS3URI: "<s3ModelUrl>",
  sagemakerModelImageURL:
    "683313688378.dkr.ecr.us-east-1.amazonaws.com/sagemaker-scikit-learn:0.23-1-cpu-py3", // you can change the model image url to your own
  serviceId: "<serviceId>",
});
