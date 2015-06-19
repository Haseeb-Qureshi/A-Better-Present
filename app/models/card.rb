# == Schema Information
#
# Table name: cards
#
#  id              :integer          not null, primary key
#  user_id         :integer
#  card_designs_id :integer
#  sender_name     :string
#  recipient_name  :string
#  pass            :string
#  amount          :decimal(, )
#  message         :text
#  paid_at         :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Card < ActiveRecord::Base
  belongs_to :user
  belongs_to :card_design
  has_many :charity_selections
  has_many :charities, through: :charity_selections
  # add state machine
end
