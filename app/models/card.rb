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

  def generate_slug
    random_ids = nil
    until random_ids && random_ids.length = 3
      random_ids = [rand(2048), rand(2048), rand(2048)].uniq
    end
    i = 0
    slug = []
    File.open("lib/dict.txt") do |line|
      slug << line.strip.capitalize if random_ids.include?(i)
      i += 1
    end
    slug.join
  end
  # add state machine
end
