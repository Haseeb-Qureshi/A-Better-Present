class CreateCardDesigns < ActiveRecord::Migration
  def change
    create_table :card_designs do |t|
      t.text :path, null: false

      t.timestamps null: false
    end
    remove_column :cards, :design
    change_table :cards do |t|
      t.references :card_designs, index: true
    end
  end
end
