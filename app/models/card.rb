# == Schema Information
#
# Table name: cards
#
#  id              :integer          not null, primary key
#  user_id         :integer
#  card_designs_id :integer
#  slug            :string
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

  validates_format_of :sender_name, with: /.*\w+.*/
  validates_format_of :recipient_name, with: /.*\w+.*/
  validates :amount, numericality: { greater_than_or_equal_to: 10 }
  validates :card_designs_id, numericality: true

  before_save :ensure_slug
  before_save :ensure_pass

  state_machine initial: :draft do
    # stuff goes here
  end

  private

  def ensure_pass
    self.pass ||= generate_pass
  end

  def ensure_slug
    self.slug ||= generate_slug
  end

  def generate_slug
    new_slug = ""
    begin
      random_ids = generate_ids
      dict = File.readlines(Rails.root + "lib/dict.txt")
      random_ids.each do |id|
        new_slug << dict[id].strip.capitalize
      end
    end unless Card.exists?(slug: new_slug)
    new_slug
  end

  def generate_ids
    random_ids = []
    until random_ids.length == 3
      random_ids = [rand(2048), rand(2048), rand(2048)].uniq
    end
    random_ids
  end

  def generate_pass
    self.pass = sender_name.strip.split.first if sender_name
  end

  # add state machine
end
