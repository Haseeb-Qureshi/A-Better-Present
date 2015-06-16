class CreateCharitySelections < ActiveRecord::Migration
  def change
    create_table :charity_selections do |t|
      t.references :card, index: true, foreign_key: true
      t.references :charity, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
