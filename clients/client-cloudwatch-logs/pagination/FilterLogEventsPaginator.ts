import { CloudWatchLogs } from "../CloudWatchLogs";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  FilterLogEventsCommand,
  FilterLogEventsCommandInput,
  FilterLogEventsCommandOutput,
} from "../commands/FilterLogEventsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudWatchLogsClient,
  input: FilterLogEventsCommandInput,
  ...args: any
): Promise<FilterLogEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new FilterLogEventsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudWatchLogs,
  input: FilterLogEventsCommandInput,
  ...args: any
): Promise<FilterLogEventsCommandOutput> => {
  // @ts-ignore
  return await client.filterLogEvents(input, ...args);
};
export async function* filterLogEventsPaginate(
  config: CloudWatchLogsPaginationConfiguration,
  input: FilterLogEventsCommandInput,
  ...additionalArguments: any
): Paginator<FilterLogEventsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: FilterLogEventsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof CloudWatchLogs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudWatchLogsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
