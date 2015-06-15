class Card < ActiveRecord::Base
  belongs_to :user
  # add state machine
end
