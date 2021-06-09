class Dish < ApplicationRecord
  # アソシエーション
  # 【!TODO】Store(お店側)モデル実装後に記載する

  # ActiveStorage @複数枚投稿
  has_many_attached :images

  # バリデーション
  with_options presence: true do
      validates :name, length: { maximum: 39 }# 料理名
      validates :description, length: { maximum: 999 } # 説明文
      validates :price, numericality: { in: 100..999999 } # 金額
  end

  validates :addexplain, length: { maximum: 999 } #補足説明

  #　以下の設定だとエラーを吐き出す
  # validates :images, attached_file_number: { maximum: 5 } #画像
end
