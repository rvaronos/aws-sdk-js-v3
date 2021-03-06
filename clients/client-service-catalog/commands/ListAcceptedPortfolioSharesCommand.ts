import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListAcceptedPortfolioSharesInput, ListAcceptedPortfolioSharesOutput } from "../models/index";
import {
  deserializeAws_json1_1ListAcceptedPortfolioSharesCommand,
  serializeAws_json1_1ListAcceptedPortfolioSharesCommand,
} from "../protocols/Aws_json1_1";
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

export type ListAcceptedPortfolioSharesCommandInput = ListAcceptedPortfolioSharesInput;
export type ListAcceptedPortfolioSharesCommandOutput = ListAcceptedPortfolioSharesOutput & __MetadataBearer;

export class ListAcceptedPortfolioSharesCommand extends $Command<
  ListAcceptedPortfolioSharesCommandInput,
  ListAcceptedPortfolioSharesCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAcceptedPortfolioSharesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAcceptedPortfolioSharesCommandInput, ListAcceptedPortfolioSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListAcceptedPortfolioSharesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListAcceptedPortfolioSharesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAcceptedPortfolioSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAcceptedPortfolioSharesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAcceptedPortfolioSharesCommandOutput> {
    return deserializeAws_json1_1ListAcceptedPortfolioSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
