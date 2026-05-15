

        module RailsService
          module Config
            include ConvenientService::Concern
            -
            included do
              include ConvenientService::Standard::Config
              -
              concerns do
                use ConvenientService::Plugins::Service::HasJSendResultParamsValidations::UsingActiveModelValidations::Concern
              end
              -
              middlewares :initialize do
                use ConvenientService::Plugins::Common::AssignsAttributesInConstructor::UsingActiveModelAttributeAssignment::Middleware
              end
              -
              middlewares :result do
                insert_before \\
                  ConvenientService::Plugins::Service::CanHaveConnectedSteps::Middleware,
                  ConvenientService::Plugins::Service::HasJSendResultParamsValidations::UsingActiveModelValidations::Middleware
              end
            end
          end
        end
