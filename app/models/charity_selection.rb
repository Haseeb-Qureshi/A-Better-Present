# == Schema Information
#
# Table name: charity_selections
#
#  id         :integer          not null, primary key
#  card_id    :integer
#  charity_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CharitySelection < ActiveRecord::Base
  belongs_to :card
  belongs_to :charity
end
