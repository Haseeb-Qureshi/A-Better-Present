class CharitySelection < ActiveRecord::Base
  belongs_to :card
  belongs_to :charity
end
