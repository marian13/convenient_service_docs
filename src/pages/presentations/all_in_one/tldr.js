import React from 'react';
import LayoutProvider from '@theme/Layout/Provider';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

export default function TLDR() {
  return (
    <LayoutProvider>
      <CodeBlock language="ruby">
        {`
          def read_file_content(path)
            result = ReadFileContent.result(path: path)
            -
            content = result.success? ? result.data[:content] : ""
            -
            puts result.message unless result.success?
            -
            content
          end
        `}
      </CodeBlock>

      <Tabs groupId="config">
        <TabItem value="standard" label="Standard" default>
          <CodeBlock language="ruby">
            {`require "convenient_service"`}
          </CodeBlock>
        </TabItem>
        <TabItem value="rails" label="Rails">
          <CodeBlock language="ruby">
            {`
              require "active_model" # NOTE: Minimal \`active_model\` version - \`5.2.0\`.
              -
              require "convenient_service"
              -
              ConvenientService::Dependencies.require_assigns_attributes_in_constructor_using_active_model_attribute_assignment
              ConvenientService::Dependencies.require_has_attributes_using_active_model_attributes
              ConvenientService::Dependencies.require_has_result_params_validations_using_active_model_validations
            `}
          </CodeBlock>
        </TabItem>
        <TabItem value="dry" label="Dry">
          <CodeBlock language="ruby">
            {`
              require "dry-initializer" # NOTE: Minimal \`dry-initializer\` version - \`3.0.0\`.
              require "dry-validation" # NOTE: Minimal \`dry-validation\` version - \`1.5.0\`.
              -
              require "convenient_service"
              -
              ConvenientService::Dependencies.require_assigns_attributes_in_constructor_using_dry_initializer
              ConvenientService::Dependencies.require_has_result_params_validations_using_dry_validation
            `}
          </CodeBlock>
        </TabItem>
      </Tabs>

      <Tabs groupId="config">
        <TabItem value="standard" label="Standard" default>
          <CodeBlock language="ruby">
            {`
              module ApplicationService
                module Config
                  include ConvenientService::Concern
                  -
                  included do |service_class|
                    service_class.include ConvenientService::Standard::Config
                  end
                end
              end
            `}
          </CodeBlock>
        </TabItem>
        <TabItem value="rails" label="Rails">
          <CodeBlock language="ruby">
            {`
              module RailsService
                module Config
                  include ConvenientService::Concern
                  -
                  included do |service_class|
                    service_class.class_exec do
                      include ConvenientService::Standard::Config
                      -
                      concerns do
                        use ConvenientService::Plugins::Common::AssignsAttributesInConstructor::UsingActiveModelAttributeAssignment::Concern
                        use ConvenientService::Plugins::Common::HasAttributes::UsingActiveModelAttributes::Concern
                        use ConvenientService::Plugins::Service::HasResultParamsValidations::UsingActiveModelValidations::Concern
                      end
                      -
                      middlewares :initialize do
                        use ConvenientService::Plugins::Common::AssignsAttributesInConstructor::UsingActiveModelAttributeAssignment::Middleware
                      end
                      -
                      middlewares :result do
                        insert_before \\
                          ConvenientService::Plugins::Service::HasResultSteps::Middleware,
                          ConvenientService::Plugins::Service::HasResultParamsValidations::UsingActiveModelValidations::Middleware
                      end
                    end
                  end
                end
              end
            `}
          </CodeBlock>
        </TabItem>
        <TabItem value="dry" label="Dry">
          <CodeBlock language="ruby">
            {`
              module DryService
                module Config
                  include ConvenientService::Concern
                  -
                  included do |service_class|
                    service_class.class_exec do
                      include ConvenientService::Standard::Config
                      -
                      concerns do
                        use ConvenientService::Plugins::Common::AssignsAttributesInConstructor::UsingDryInitializer::Concern
                        use ConvenientService::Plugins::Service::HasResultParamsValidations::UsingDryValidation::Concern
                      end
                      -
                      middlewares :result do
                        insert_before \\
                          ConvenientService::Plugins::Service::HasResultSteps::Middleware,
                          ConvenientService::Plugins::Service::HasResultParamsValidations::UsingDryValidation::Middleware
                      end
                    end
                  end
                end
              end
            `}
          </CodeBlock>
        </TabItem>
      </Tabs>

      <Tabs groupId="config">
        <TabItem value="standard" label="Standard" default>
          <CodeBlock language="ruby">
            {`
              class AssertFileExists
                include ApplicationService::Config
                -
                attr_reader :path
                -
                def initialize(path:)
                  @path = path
                end
                -
                def result
                  return failure(path: "Path is \`nil\`") if path.nil?
                  return failure(path: "Path is empty") if path.empty?
                  -
                  return error("File does not exist at path \`#{path}\`") unless ::File.exist?(path)
                  -
                  success
                end
              end
            `}
          </CodeBlock>
        </TabItem>
        <TabItem value="rails" label="Rails">
          <CodeBlock language="ruby">
            {`
              class AssertFileExists
                include RailsService::Config
                -
                attribute :path, :string
                -
                validates :path, presence: true
                -
                def result
                  return error("File does not exist at path \`#{path}\`") unless ::File.exist?(path)
                  -
                  success
                end
              end
            `}
          </CodeBlock>
        </TabItem>
        <TabItem value="dry" label="Dry">
          <CodeBlock language="ruby">
            {`
              class AssertFileExists
                include DryService::Config
                -
                option :path
                -
                contract do
                  schema do
                    required(:path).value(:string)
                  end
                end
                -
                def result
                  return error("File does not exist at path \`#{path}\`") unless ::File.exist?(path)
                  -
                  success
                end
              end
            `}
          </CodeBlock>
        </TabItem>
      </Tabs>

      <CodeBlock language="ruby">
        {`result = AssertFileExists.result(path: "Gemfile")`}
      </CodeBlock>

      <Tabs groupId="config">
        <TabItem value="standard" label="Standard" default>
          <CodeBlock language="ruby">
            {`
              class AssertFileNotEmpty
                include ApplicationService::Config
                -
                attr_accessor :path
                -
                def initialize(path:)
                  @path = path
                end
                -
                def result
                  return failure(path: "Path is \`nil\`") if path.nil?
                  return failure(path: "Path is empty") if path.empty?
                  -
                  return error("File is empty at path \`#{path}\`") if ::File.zero?(path)
                  -
                  success
                end
              end
            `}
          </CodeBlock>
        </TabItem>
        <TabItem value="rails" label="Rails">
          <CodeBlock language="ruby">
            {`
              class AssertFileNotEmpty
                include RailsService::Config
                -
                attribute :path, :string
                -
                validates :path, presence: true
                -
                def result
                  return error("File is empty at path \`#{path}\`") if ::File.zero?(path)
                  -
                  success
                end
              end
            `}
          </CodeBlock>
        </TabItem>
        <TabItem value="dry" label="Dry">
          <CodeBlock language="ruby">
            {`
              class AssertFileNotEmpty
                include DryService::Config
                -
                option :path
                -
                contract do
                  schema do
                    required(:path).value(:string)
                  end
                end
                -
                def result
                  return error("File is empty at path \`#{path}\`") if ::File.zero?(path)
                  -
                  success
                end
              end
            `}
          </CodeBlock>
        </TabItem>
      </Tabs>

      <CodeBlock language="ruby">
        {`result = AssertFileNotEmpty.result(path: "Gemfile")`}
      </CodeBlock>

      <Tabs groupId="config">
        <TabItem value="standard" label="Standard" default>
          <CodeBlock language="ruby">
            {`
              class ReadFileContent
                include ApplicationService::Config
                -
                attr_reader :path
                -
                step :validate_path
                step AssertFileExists, in: :path
                step AssertFileNotEmpty, in: :path
                step :result, in: :path, out: :content
                -
                def initialize(path:)
                  @path = path
                end
                -
                def result
                  success(content: ::File.read(path))
                end
                -
                private
                -
                def validate_path
                  return failure(path: "Path is \`nil\`") if path.nil?
                  return failure(path: "Path is empty") if path.empty?
                  -
                  success
                end
              end
            `}
          </CodeBlock>
        </TabItem>
        <TabItem value="rails" label="Rails">
          <CodeBlock language="ruby">
            {`
              class ReadFileContent
                include RailsService::Config
                -
                attribute :path, :string
                -
                validates :path, presence: true
                -
                step AssertFileExists, in: :path
                step AssertFileNotEmpty, in: :path
                step :result, in: :path, out: :content
                -
                def result
                  success(content: ::File.read(path))
                end
              end
            `}
          </CodeBlock>
        </TabItem>
        <TabItem value="dry" label="Dry">
          <CodeBlock language="ruby">
            {`
              class ReadFileContent
                include DryService::Config
                -
                option :path
                -
                contract do
                  schema do
                    required(:path).value(:string)
                  end
                end
                -
                step AssertFileExists, in: :path
                step AssertFileNotEmpty, in: :path
                step :result, in: :path, out: :content
                -
                def result
                  success(content: ::File.read(path))
                end
              end
            `}
          </CodeBlock>
        </TabItem>
      </Tabs>

      <CodeBlock language="ruby">
        {`result = ReadFileContent.result(path: "Gemfile")`}
      </CodeBlock>
    </LayoutProvider>
  );
}
