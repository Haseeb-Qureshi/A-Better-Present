# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(
  email: "dog@dog.com",
  password: "dogdogdog",
  password_confirmation: "dogdogdog",
)

Card.create(
  user_id: 1,
  sender_name: "Dog Doggy",
  recipient_name: "Mommy",
  pass: "Dog",
  amount: 50,
  message: "Thanks for everything Mom!",
  paid_at: 2.hours.ago,
  card_designs_id: 2,
)

Card.create(
  user_id: 1,
  sender_name: "Bim Bam",
  recipient_name: "Daddy",
  pass: "Bim",
  amount: 678,
  message: "I feel so alive.",
  paid_at: 8.hours.ago,
  card_designs_id: 2,
  slug: "CarBenchFactory"
)

charities = ["Giving What We Can", "The Life You Can Save", "Charity Science", "MIRI", "Future of Humanity Institute", "Animal Charity Evaluators", "The Humane League", "Against Malaria Foundation", "Schistosomiasis Control Initiative", "GiveDirectly"]

charities.each { |charity| Charity.create(name: charity) }

CharitySelection.create(card_id: 1, charity_id: 1)
CharitySelection.create(card_id: 1, charity_id: 2)
CharitySelection.create(card_id: 1, charity_id: 5)
