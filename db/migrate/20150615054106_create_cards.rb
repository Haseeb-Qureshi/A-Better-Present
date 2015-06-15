class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.references :user, index: true, foreign_key: true
      t.integer :design
      t.string :sender_name
      t.string :recipient_name
      t.string :pass
      t.decimal :amount
      t.text :message
      t.datetime :paid_at

      t.timestamps null: false
    end
  end
end
