import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { ListEnabledProductsForImportRequest, ListEnabledProductsForImportResponse } from "../models/index";
import {
  deserializeAws_restJson1ListEnabledProductsForImportCommand,
  serializeAws_restJson1ListEnabledProductsForImportCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ListEnabledProductsForImportCommandInput = ListEnabledProductsForImportRequest;
export type ListEnabledProductsForImportCommandOutput = ListEnabledProductsForImportResponse & __MetadataBearer;

export class ListEnabledProductsForImportCommand extends $Command<
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEnabledProductsForImportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnabledProductsForImportCommandInput, ListEnabledProductsForImportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListEnabledProductsForImportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEnabledProductsForImportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEnabledProductsForImportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEnabledProductsForImportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEnabledProductsForImportCommandOutput> {
    return deserializeAws_restJson1ListEnabledProductsForImportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
