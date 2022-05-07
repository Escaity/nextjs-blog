import { createClient } from "microcms-js-sdk";

const serviceDomain = process.env.SERVICE_ID;
const apiKey = process.env.API_KEY;

if (serviceDomain === undefined)
  throw Error(".envファイルに`NEXT_PUBLIC_SERVICE_ID`を設定してください。");
if (apiKey === undefined)
  throw Error(".envファイルに`NEXT_PUBLIC_API_KEY`を設定してください。");

export const client = createClient({
  serviceDomain,
  apiKey,
});
