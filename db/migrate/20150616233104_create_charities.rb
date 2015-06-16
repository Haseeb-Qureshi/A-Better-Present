class CreateCharities < ActiveRecord::Migration
  def change
    create_table :charities do |t|
      t.string :name, null: false
      t.text :description
      t.text :logo_path

      t.timestamps null: false
    end
  end
end
