# Dishesのデータを生成する
dish1 = Dish.create(:name => '料理１', 
                    :description => '説明1',
                    :price => 1000, :tag => "焼肉",
                    :addexplain => "数量限定",
                    )
dish1.images.attach(io: File.open(Rails.root.join('app/assets/images/yakiniku.jpeg')),filename: 'yakiniku.jpg')

# Dish.create(:name => '料理２', :description => '説明２', :price => 1100, :tag => "寿司", :addexplain => "" ,:images => "yakiniku.jpg")
# Dish.create(:name => '料理３', :description => '説明３', :price => 1200, :tag => "", :addexplain => "早めに行かないと並ぶので11時着は必須やで" ,:images => "yakiniku.jpg")