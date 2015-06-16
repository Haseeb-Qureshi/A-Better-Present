# == Schema Information
#
# Table name: cards
#
#  id              :integer          not null, primary key
#  user_id         :integer
#  sender_name     :string
#  recipient_name  :string
#  pass            :string
#  amount          :decimal(, )
#  message         :text
#  paid_at         :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  card_designs_id :integer
#

class Card < ActiveRecord::Base
  belongs_to :user
  belongs_to :card_design
  # add state machine
end
