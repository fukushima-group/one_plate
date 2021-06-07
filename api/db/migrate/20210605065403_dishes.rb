class CreateDishes < ActiveRecord::Migration[6.0]
  def change
    create_table :dishes do |t|
      t.string :name, null: false , comment: '料理名'
      t.text :description, null: false , comment: '説明文'
      t.integer :price, null: false , comment: '金額'
      t.string :tag, comment: 'タグ名'
      t.text :addexplain, comment: '補足説明'
      t.timestamps
    end
  end
end
