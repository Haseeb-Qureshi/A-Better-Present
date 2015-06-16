# == Schema Information
#
# Table name: charities
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  logo_path   :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Charity < ActiveRecord::Base
  has_many :charity_selections
  has_many :cards, through: :charity_selections
end
