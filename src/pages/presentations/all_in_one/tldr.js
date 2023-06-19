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
          # Any file in the project
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
            {`
              # config/initializers/convenient_service.rb
              require "convenient_service"
            `}
          </CodeBlock>
        </TabItem>
        <TabItem value="rails" label="Rails">
          <CodeBlock language="ruby">
            {`
              # config/initializers/convenient_service.rb
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
              # config/initializers/convenient_service.rb
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
              # app/services/application_service/config.rb
              module ApplicationService
                module Config
                  include ConvenientService::Concern
                  -
                  included do
                    include ConvenientService::Standard::Config
                  end
                end
              end
            `}
          </CodeBlock>
        </TabItem>
        <TabItem value="rails" label="Rails">
          <CodeBlock language="ruby">
            {`
              # app/services/rails_service/config.rb
              module RailsService
                module Config
                  include ConvenientService::Concern
                  -
                  included do
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
            `}
          </CodeBlock>
        </TabItem>
        <TabItem value="dry" label="Dry">
          <CodeBlock language="ruby">
            {`
              # app/services/dry_service/config.rb
              module DryService
                module Config
                  include ConvenientService::Concern
                  -
                  included do
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
            `}
          </CodeBlock>
        </TabItem>
      </Tabs>

      <Tabs groupId="config">
        <TabItem value="standard" label="Standard" default>
          <CodeBlock language="ruby">
            {`
              # app/services/assert_file_exist.rb
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
              # app/services/assert_file_exist.rb
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
              # app/services/assert_file_exist.rb
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
              # spec/services/assert_file_exists_spec.rb
              require "spec_helper"
              -
              RSpec.describe AssertFileExists do
                include ConvenientService::RSpec::Matchers::Results
                include ConvenientService::RSpec::Matchers::IncludeModule
                -
                let(:result) { described_class.result(path: path) }
                -
                example_group "modules" do
                  subject { described_class }
                  -
                  it { is_expected.to include_module(ApplicationService::Config) }
                end
                -
                example_group "class methods" do
                  describe ".result" do
                    context "when assertion that file exists is NOT successful" do
                      context "when \`path\` is NOT valid" do
                        context "when \`path\` is \`nil\`" do
                          let(:path) { nil }
                          -
                          it "returns \`failure\` with \`data\`" do
                            expect(result).to be_failure.with_data(path: "Path is \`nil\`").of_service(described_class).without_step
                          end
                        end
                        -
                        context "when \`path\` is empty" do
                          let(:path) { "" }
                          -
                          it "returns \`failure\` with \`data\`" do
                            expect(result).to be_failure.with_data(path: "Path is empty").of_service(described_class).without_step
                          end
                        end
                      end
                      -
                      context "when file with \`path\` does NOT exist" do
                        let(:path) { "non_existing_path" }
                        -
                        it "returns \`error\` with \`message\`" do
                          expect(result).to be_error.with_message("File with path \`#{path}\` does NOT exist").of_service(described_class).without_step
                        end
                      end
                    end
                    -
                    context "when assertion that file exists is successful" do
                      ##
                      # NOTE: Tempfile uses its own \`let\` in order to prevent its premature garbage collection.
                      #
                      let(:tempfile) { Tempfile.new }
                      let(:path) { tempfile.path }
                      -
                      it "returns \`success\`" do
                        expect(result).to be_success.of_service(described_class).without_step
                      end
                    end
                  end
                end
              end
            `}
          </CodeBlock>
        </TabItem>

        <TabItem value="rails" label="Rails" default>
          <CodeBlock language="ruby">
            {`
              # spec/services/assert_file_exists_spec.rb
              require "spec_helper"
              -
              RSpec.describe AssertFileExists do
                include ConvenientService::RSpec::Matchers::Results
                include ConvenientService::RSpec::Matchers::IncludeModule
                -
                let(:result) { described_class.result(path: path) }
                -
                example_group "modules" do
                  subject { described_class }
                  -
                  it { is_expected.to include_module(RailsService::Config) }
                end
                -
                example_group "class methods" do
                  describe ".result" do
                    context "when assertion that file exists is NOT successful" do
                      context "when \`path\` is NOT present" do
                        let(:path) { "" }
                        -
                        it "returns \`failure\` with \`data\`" do
                          expect(result).to be_failure.with_data(path: "can't be blank").of_service(described_class).without_step
                        end
                      end
                      -
                      context "when file with \`path\` does NOT exist" do
                        let(:path) { "non_existing_path" }
                        -
                        it "returns \`error\` with \`message\`" do
                          expect(result).to be_error.with_message("File with path \`#{path}\` does NOT exist").of_service(described_class).without_step
                        end
                      end
                    end
                    -
                    context "when assertion that file exists is successful" do
                      ##
                      # NOTE: Tempfile uses its own \`let\` in order to prevent its premature garbage collection.
                      #
                      let(:tempfile) { Tempfile.new }
                      let(:path) { tempfile.path }
                      -
                      it "returns \`success\`" do
                        expect(result).to be_success.without_data.of_service(described_class).without_step
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
              # spec/services/assert_file_exists_spec.rb
              require "spec_helper"
              -
              RSpec.describe AssertFileExists do
                include ConvenientService::RSpec::Matchers::Results
                include ConvenientService::RSpec::Matchers::IncludeModule
                -
                let(:result) { described_class.result(path: path) }
                -
                example_group "modules" do
                  subject { described_class }
                  -
                  it { is_expected.to include_module(DryService::Config) }
                end
                -
                example_group "class methods" do
                  describe ".result" do
                    context "when assertion that file exists is NOT successful" do
                      context "when \`path\` is NOT present" do
                        let(:path) { "" }
                        -
                        it "returns \`failure\` with \`data\`" do
                          expect(result).to be_failure.with_data(path: "must be filled").of_service(described_class).without_step
                        end
                      end
                      -
                      context "when file with \`path\` does NOT exist" do
                        let(:path) { "non_existing_path" }
                        -
                        it "returns \`error\` with \`message\`" do
                          expect(result).to be_error.with_message("File with path \`#{path}\` does NOT exist").of_service(described_class).without_step
                        end
                      end
                    end
                    -
                    context "when assertion that file exists is successful" do
                      ##
                      # NOTE: Tempfile uses its own \`let\` in order to prevent its premature garbage collection.
                      #
                      let(:tempfile) { Tempfile.new }
                      let(:path) { tempfile.path }
                      -
                      it "returns \`success\`" do
                        expect(result).to be_success.without_data.of_service(described_class).without_step
                      end
                    end
                  end
                end
              end
            `}
          </CodeBlock>
        </TabItem>
      </Tabs>

      <CodeBlock language="bash">
        {`bundle exec rspec spec/services/assert_file_exits_spec.rb`}
      </CodeBlock>

      <Tabs groupId="config">
        <TabItem value="standard" label="Standard" default>
          <CodeBlock language="ruby">
            {`
              # app/services/assert_file_not_empty.rb
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
              # app/services/assert_file_not_empty.rb
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
              # app/services/assert_file_not_empty.rb
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
              # spec/services/assert_file_not_empty_spec.rb
              require "spec_helper"
              -
              RSpec.describe AssertFileNotEmpty do
                include ConvenientService::RSpec::Matchers::Results
                include ConvenientService::RSpec::Matchers::IncludeModule
                -
                let(:result) { described_class.result(path: path) }
                -
                example_group "modules" do
                  subject { described_class }
                  -
                  it { is_expected.to include_module(ApplicationService::Config) }
                end
                -
                example_group "class methods" do
                  describe ".result" do
                    context "when assertion that file is NOT empty is NOT successful" do
                      context "when \`path\` is NOT valid" do
                        context "when \`path\` is \`nil\`" do
                          let(:path) { nil }
                          -
                          it "returns \`failure\` with \`data\`" do
                            expect(result).to be_failure.with_data(path: "Path is \`nil\`").of_service(described_class).without_step
                          end
                        end
                        -
                        context "when \`path\` is empty" do
                          let(:path) { "" }
                          -
                          it "returns \`failure\` with \`data\`" do
                            expect(result).to be_failure.with_data(path: "Path is empty").of_service(described_class).without_step
                          end
                        end
                      end
                      -
                      context "when file is empty" do
                        ##
                        # NOTE: Tempfile uses its own \`let\` in order to prevent its premature garbage collection.
                        #
                        let(:tempfile) { Tempfile.new }
                        let(:path) { tempfile.path }
                        -
                        it "returns \`error\` with \`message\`" do
                          expect(result).to be_error.with_message("File with path \`#{path}\` is empty").of_service(described_class).without_step
                        end
                      end
                    end
                    -
                    context "when assertion that file is NOT empty is successful" do
                      ##
                      # NOTE: Tempfile uses its own \`let\` in order to prevent its premature garbage collection.
                      #
                      let(:tempfile) { Tempfile.new.tap { |file| file.write("content") }.tap(&:close) }
                      let(:path) { tempfile.path }
                      -
                      it "returns \`success\`" do
                        expect(result).to be_success.of_service(described_class).without_step
                      end
                    end
                  end
                end
              end
            `}
          </CodeBlock>
        </TabItem>

        <TabItem value="rails" label="Rails">
          <CodeBlock language="ruby">
            {`
              # spec/services/assert_file_not_empty_spec.rb
              require "spec_helper"
              -
              RSpec.describe AssertFileNotEmpty do
                include ConvenientService::RSpec::Matchers::Results
                include ConvenientService::RSpec::Matchers::IncludeModule
                -
                let(:result) { described_class.result(path: path) }
                -
                example_group "modules" do
                  subject { described_class }
                  -
                  it { is_expected.to include_module(RailsService::Config) }
                end
                -
                example_group "class methods" do
                  describe ".result" do
                    context "when assertion that file is NOT empty is NOT successful" do
                      context "when \`path\` is NOT present" do
                        let(:path) { "" }
                        -
                        it "returns \`failure\` with \`data\`" do
                          expect(result).to be_failure.with_data(path: "can't be blank").of_service(described_class).without_step
                        end
                      end
                      -
                      context "when file is empty" do
                        ##
                        # NOTE: Tempfile uses its own \`let\` in order to prevent its premature garbage collection.
                        #
                        let(:tempfile) { Tempfile.new }
                        let(:path) { tempfile.path }
                        -
                        it "returns \`error\` with \`message\`" do
                          expect(result).to be_error.with_message("File with path \`#{path}\` is empty").of_service(described_class).without_step
                        end
                      end
                    end
                    -
                    context "when assertion that file is NOT empty is successful" do
                      ##
                      # NOTE: Tempfile uses its own \`let\` in order to prevent its premature garbage collection.
                      #
                      let(:tempfile) { Tempfile.new.tap { |file| file.write("content") }.tap(&:close) }
                      let(:path) { tempfile.path }
                      -
                      it "returns \`success\`" do
                        expect(result).to be_success.without_data.of_service(described_class).without_step
                      end
                    end
                  end
                end
              end
            `}
          </CodeBlock>
        </TabItem>

        <TabItem value="dry" label="Dry" default>
          <CodeBlock language="ruby">
            {`
              # spec/services/assert_file_not_empty_spec.rb
              require "spec_helper"
              -
              RSpec.describe AssertFileNotEmpty do
                include ConvenientService::RSpec::Matchers::Results
                include ConvenientService::RSpec::Matchers::IncludeModule
                -
                let(:result) { described_class.result(path: path) }
                -
                example_group "modules" do
                  subject { described_class }
                  -
                  it { is_expected.to include_module(DryService::Config) }
                end
                -
                example_group "class methods" do
                  describe ".result" do
                    context "when assertion that file is NOT empty is NOT successful" do
                      context "when \`path\` is NOT present" do
                        let(:path) { "" }
                        -
                        it "returns \`failure\` with \`data\`" do
                          expect(result).to be_failure.with_data(path: "must be filled").of_service(described_class).without_step
                        end
                      end
                      -
                      context "when file is empty" do
                        ##
                        # NOTE: Tempfile uses its own \`let\` in order to prevent its premature garbage collection.
                        #
                        let(:tempfile) { Tempfile.new }
                        let(:path) { tempfile.path }
                        -
                        it "returns \`error\` with \`message\`" do
                          expect(result).to be_error.with_message("File with path \`#{path}\` is empty").of_service(described_class).without_step
                        end
                      end
                    end
                    -
                    context "when assertion that file is NOT empty is successful" do
                      ##
                      # NOTE: Tempfile uses its own \`let\` in order to prevent its premature garbage collection.
                      #
                      let(:tempfile) { Tempfile.new.tap { |file| file.write("content") }.tap(&:close) }
                      let(:path) { tempfile.path }
                      -
                      it "returns \`success\`" do
                        expect(result).to be_success.without_data.of_service(described_class).without_step
                      end
                    end
                  end
                end
              end
            `}
          </CodeBlock>
        </TabItem>
      </Tabs>

      <CodeBlock language="bash">
        {`bundle exec rspec spec/services/assert_file_not_empty_spec.rb`}
      </CodeBlock>

      <Tabs groupId="config">
        <TabItem value="standard" label="Standard" default>
          <CodeBlock language="ruby">
            {`
              # app/services/read_file_content.rb
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
              # app/services/read_file_content.rb
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
              # app/services/read_file_content.rb
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
        {`
          result = ReadFileContent.result(path: "Gemfile")
          -
          if result.success?
            result.data[:content]
          else
            result.message
          end
        `}
      </CodeBlock>

      <Tabs groupId="config">
        <TabItem value="standard" label="Standard" default>
          <CodeBlock language="ruby">
            {`
              # spec/services/read_file_content.rb
              require "spec_helper"
              -
              RSpec.describe ReadFileContent do
                include ConvenientService::RSpec::Matchers::Results
                include ConvenientService::RSpec::Matchers::IncludeModule
                -
                let(:result) { described_class.result(path: path) }
                -
                example_group "modules" do
                  subject { described_class }
                  -
                  it { is_expected.to include_module(ApplicationService::Config) }
                end
                -
                example_group "class methods" do
                  describe ".result" do
                    context "when reading file content is NOT successful" do
                      context "when \`path\` is NOT valid" do
                        context "when \`path\` is \`nil\`" do
                          let(:path) { nil }
                          -
                          it "returns \`failure\` with \`data\`" do
                            expect(result).to be_failure.with_data(path: "Path is \`nil\`").of_service(described_class).of_step(:validate_path)
                          end
                        end
                        -
                        context "when \`path\` is empty" do
                          let(:path) { "" }
                          -
                          it "returns \`failure\` with \`data\`" do
                            expect(result).to be_failure.with_data(path: "Path is empty").of_service(described_class).of_step(:validate_path)
                          end
                        end
                      end
                      -
                      context "when assertion that file exists is NOT successful" do
                        let(:path) { "not_existing_path" }
                        -
                        it "returns intermediate step result" do
                          expect(result).to be_not_success.of_service(described_class).of_step(AssertFileExists)
                        end
                      end
                      -
                      context "when assertion that file is NOT empty is NOT successful" do
                        let(:temfile) { Tempfile.new }
                        let(:path) { temfile.path }
                        -
                        it "returns intermediate step result" do
                          expect(result).to be_not_success.of_service(described_class).of_step(AssertFileNotEmpty)
                        end
                      end
                    end
                    -
                    context "when reading file content is successful" do
                      let(:temfile) { Tempfile.new.tap { |tempfile| tempfile.write(content) }.tap(&:close) }
                      let(:path) { temfile.path }
                      let(:content) { "some content" }
                      -
                      it "returns \`success\` with content" do
                        expect(result).to be_success.with_data(content: content).of_service(described_class).of_step(:result)
                      end
                    end
                  end
                end
              end
            `}
          </CodeBlock>
        </TabItem>

        <TabItem value="rails" label="Rails">
          <CodeBlock language="ruby">
            {`
              # spec/services/read_file_content.rb
              require "spec_helper"
              -
              RSpec.describe ReadFileContent do
                include ConvenientService::RSpec::Matchers::Results
                include ConvenientService::RSpec::Matchers::IncludeModule
                -
                let(:result) { described_class.result(path: path) }
                -
                example_group "modules" do
                  subject { described_class }
                  -
                  it { is_expected.to include_module(RailsService::Config) }
                end
                -
                example_group "class methods" do
                  describe ".result" do
                    context "when reading file content is NOT successful" do
                      context "when path is NOT present" do
                        let(:path) { "" }
                        -
                        it "returns \`failure\` with \`data\`" do
                          expect(result).to be_failure.with_data(path: "can't be blank").without_step
                        end
                      end
                    end
                    -
                    context "when assertion that file exists is NOT successful" do
                      let(:path) { "not_existing_path" }
                      -
                      it "returns intermediate step result" do
                        expect(result).to be_not_success.of_service(described_class).of_step(AssertFileExists)
                      end
                    end
                    -
                    context "when assertion that file is NOT empty is NOT successful" do
                      let(:temfile) { Tempfile.new }
                      let(:path) { temfile.path }
                      -
                      it "returns intermediate step result" do
                        expect(result).to be_not_success.of_service(described_class).of_step(AssertFileNotEmpty)
                      end
                    end
                  end
                  -
                  context "when reading file content is successful" do
                    let(:temfile) { Tempfile.new.tap { |tempfile| tempfile.write(content) }.tap(&:close) }
                    let(:path) { temfile.path }
                    let(:content) { "some content" }
                    -
                    it "returns \`success\` with content" do
                      expect(result).to be_success.with_data(content: content).of_service(described_class).of_step(:result)
                    end
                  end
                end
              end
            `}
          </CodeBlock>
        </TabItem>

        <TabItem value="dry" label="Dry" default>
          <CodeBlock language="ruby">
            {`
              # spec/services/read_file_content.rb
              require "spec_helper"
              -
              RSpec.describe ReadFileContent do
                include ConvenientService::RSpec::Matchers::Results
                include ConvenientService::RSpec::Matchers::IncludeModule
                -
                let(:result) { described_class.result(path: path) }
                -
                example_group "modules" do
                  subject { described_class }
                  -
                  it { is_expected.to include_module(DryService::Config) }
                end
                -
                example_group "class methods" do
                  describe ".result" do
                    context "when reading file content is NOT successful" do
                      context "when \`path\` is NOT present" do
                        let(:path) { "" }
                        -
                        it "returns \`failure\` with \`data\`" do
                          expect(result).to be_failure.with_data(path: "must be filled").of_service(described_class).without_step
                        end
                      end
                    end
                    -
                    context "when assertion that file exists is NOT successful" do
                      let(:path) { "not_existing_path" }
                      -
                      it "returns intermediate step result" do
                        expect(result).to be_not_success.of_service(described_class).of_step(AssertFileExists)
                      end
                    end
                    -
                    context "when assertion that file is NOT empty is NOT successful" do
                      let(:temfile) { Tempfile.new }
                      let(:path) { temfile.path }
                      -
                      it "returns intermediate step result" do
                        expect(result).to be_not_success.of_service(described_class).of_step(AssertFileNotEmpty)
                      end
                    end
                  end
                  -
                  context "when reading file content is successful" do
                    let(:temfile) { Tempfile.new.tap { |tempfile| tempfile.write(content) }.tap(&:close) }
                    let(:path) { temfile.path }
                    let(:content) { "some content" }
                    -
                    it "returns \`success\` with content" do
                      expect(result).to be_success.with_data(content: content).of_service(described_class).of_step(:result)
                    end
                  end
                end
              end
            `}
          </CodeBlock>
        </TabItem>
      </Tabs>

      <CodeBlock language="bash">
        {`bundle exec rspec spec/services/read_file_content_spec.rb`}
      </CodeBlock>
    </LayoutProvider>
  );
}
