class Dish < ApplicationRecord
    # アソシエーション
    # 【!TODO】Store(お店側)モデル実装後に記載する


    # バリデーション
    with_options presence: true do
        validates :name # 料理名
        validates :description # 説明文
        validates :price , numericality: { in: 100..999999 }# 金額
    end
end
