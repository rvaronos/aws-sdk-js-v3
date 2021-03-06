import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AuthorizeSecurityGroupEgressRequest } from "../models/index";
import {
  deserializeAws_ec2AuthorizeSecurityGroupEgressCommand,
  serializeAws_ec2AuthorizeSecurityGroupEgressCommand,
} from "../protocols/Aws_ec2";
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

export type AuthorizeSecurityGroupEgressCommandInput = AuthorizeSecurityGroupEgressRequest;
export type AuthorizeSecurityGroupEgressCommandOutput = __MetadataBearer;

export class AuthorizeSecurityGroupEgressCommand extends $Command<
  AuthorizeSecurityGroupEgressCommandInput,
  AuthorizeSecurityGroupEgressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AuthorizeSecurityGroupEgressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AuthorizeSecurityGroupEgressCommandInput, AuthorizeSecurityGroupEgressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AuthorizeSecurityGroupEgressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AuthorizeSecurityGroupEgressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AuthorizeSecurityGroupEgressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeSecurityGroupEgressCommandOutput> {
    return deserializeAws_ec2AuthorizeSecurityGroupEgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
