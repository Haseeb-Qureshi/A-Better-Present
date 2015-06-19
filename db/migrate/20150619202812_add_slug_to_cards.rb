class AddSlugToCards < ActiveRecord::Migration
  def change
    add_column :cards, :slug, :string, index: true, unique: true
  end
end
