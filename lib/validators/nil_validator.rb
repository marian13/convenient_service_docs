# frozen_string_literal: true

class NilValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    record.errors.add(attribute, :nil, message: "can't be nil") if value.nil?
  end
end
