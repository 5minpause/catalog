# == Schema Information
#
# Table name: websites
#
#  id         :integer          not null, primary key
#  domain     :string
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

# frozen_string_literal: true

class Website < ApplicationRecord
  validates_presence_of :domain, :url
end
