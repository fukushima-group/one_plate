class CreateDishes < ActiveRecord::Migration[6.0]
  def change
    create_table :dishes do |t|
      t.string :name, null: false , default: '',comment: '料理名'
      t.text :description, null: false , comment: '説明文'
      t.integer :price, null: false , default: 0,comment: '金額'
      t.string :tag, default: '',comment: 'タグ名'
      t.text :addexplain, comment: '補足説明'
      t.timestamps
    end
  end
end
