#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { RsawsBe24Stack } from '../lib/rsaws-be24-stack';

const app = new cdk.App();
new RsawsBe24Stack(app, 'RsawsBe24Stack');
