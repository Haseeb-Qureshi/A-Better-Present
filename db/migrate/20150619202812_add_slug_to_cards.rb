class AddSlugToCards < ActiveRecord::Migration
  def change
    add_column :cards, :slug, :string
  end
end
