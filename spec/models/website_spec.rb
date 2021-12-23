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

require "rails_helper"

RSpec.describe Website, type: :model do
  it { should validate_presence_of :domain}
  it { should validate_presence_of :url}
end
