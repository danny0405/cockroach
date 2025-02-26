// Copyright 2021 The Cockroach Authors.
//
// Use of this software is governed by the Business Source License
// included in the file licenses/BSL.txt.
//
// As of the Change Date specified in that file, in accordance with
// the Business Source License, use of this software will be governed
// by the Apache License, Version 2.0, included in the file
// licenses/APL.txt.

export const aggregationIntervalAttr = "aggregation_interval";
export const aggregatedTsAttr = "aggregated_ts";
export const appAttr = "app";
export const appNamesAttr = "appNames";
export const dashQueryString = "dash";
export const dashboardNameAttr = "dashboard_name";
export const databaseAttr = "database";
export const databaseNameAttr = "database_name";
export const fingerprintIDAttr = "fingerprint_id";
export const implicitTxnAttr = "implicitTxn";
export const nodeIDAttr = "node_id";
export const nodeQueryString = "node";
export const rangeIDAttr = "range_id";
export const statementAttr = "statement";
export const sessionAttr = "session";
export const tabAttr = "tab";
export const tableNameAttr = "table_name";
export const txnFingerprintIdAttr = "txn_fingerprint_id";

export const REMOTE_DEBUGGING_ERROR_TEXT =
  "This information is not available due to the current value of the 'server.remote_debugging.mode' setting.";

export const serverToClientErrorMessageMap = new Map([
  [
    "not allowed (due to the 'server.remote_debugging.mode' setting)",
    REMOTE_DEBUGGING_ERROR_TEXT,
  ],
]);
