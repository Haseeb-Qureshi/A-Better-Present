class Charity < ActiveRecord::Base
  has_many :charity_selections
  has_many :cards, through: :charity_selections
end
