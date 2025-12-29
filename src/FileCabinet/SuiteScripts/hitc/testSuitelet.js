/**
 * testSuitelet.ts
 *
 * @NScriptName Test Suitelet
 * @NScriptType Suitelet
 * @NApiVersion 2.1
 */
define(["require", "exports", "N/log"], function (require, exports, log) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onRequest = onRequest;
    function onRequest(context) {
        log.audit(context.request.method, `Running at ${new Date()}.`);
    }
});
