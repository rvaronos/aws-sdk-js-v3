import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateVpcPeeringConnectionInput, CreateVpcPeeringConnectionOutput } from "../models/index";
import {
  deserializeAws_json1_1CreateVpcPeeringConnectionCommand,
  serializeAws_json1_1CreateVpcPeeringConnectionCommand,
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

export type CreateVpcPeeringConnectionCommandInput = CreateVpcPeeringConnectionInput;
export type CreateVpcPeeringConnectionCommandOutput = CreateVpcPeeringConnectionOutput & __MetadataBearer;

export class CreateVpcPeeringConnectionCommand extends $Command<
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVpcPeeringConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVpcPeeringConnectionCommandInput, CreateVpcPeeringConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateVpcPeeringConnectionInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcPeeringConnectionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVpcPeeringConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateVpcPeeringConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcPeeringConnectionCommandOutput> {
    return deserializeAws_json1_1CreateVpcPeeringConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
