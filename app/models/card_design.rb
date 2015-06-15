# == Schema Information
#
# Table name: card_designs
#
#  id         :integer          not null, primary key
#  path       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CardDesign < ActiveRecord::Base
end
