class Dishes < ActiveRecord::Migration[6.0]
  def change
    create_table :dishes do |t|
      t.string :name, null: false , comment: '料理名'
      t.text :description, null: false , comment: '説明文'
      t.integer :price, null: false , comment: '金額'

      t.timestamps

# 写真
# タグ
    end
  end
end
