# frozen_string_literal: true

require "active_model"

module CSDocs
  class NilValidator < ActiveModel::EachValidator
    def validate_each(record, attribute, value)
      record.errors.add(attribute, :nil, message: "can't be nil") if value.nil?
    end
  end
end
