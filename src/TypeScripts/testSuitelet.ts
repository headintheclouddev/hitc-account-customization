/**
 * testSuitelet.ts
 *
 * @NScriptName Test Suitelet
 * @NScriptType Suitelet
 * @NApiVersion 2.1
 */

import {EntryPoints} from "N/types";
import log = require('N/log');

export function onRequest(context: EntryPoints.Suitelet.onRequestContext) {
  log.audit(context.request.method, `Running at ${new Date()}.`);
}
