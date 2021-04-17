# README

## 導入方法
**①git cloneする**

```
% git clone https://github.com/fukushima-group/one_plate.git
% cd one_plate
```
  
**②api側のcredentials.yml.encを削除し再度作成**

```
one_plate % cd api/config
config % rm credentials.yml.enc
config % cd ..
api % EDITOR="vi" bin/rails credentials:edit
```

**③react側のnode_modulesをインストールする**

```
api % cd ../frontend
frontend % docker-compose run frontend npm install
```

**④下記コマンドを実行し、コンテナを起動**

```
frontend % cd ..
one_plate % docker-compose up -d
```

**⑤データベースを作成**

```
one_plate % docker exec one_plate_api_1 rails db:create
```

**⑥各ローカルホストにアクセスし、確認**

```
Rails→  http://localhost:3000/
React→  http://localhost:8000/
```

# one_plate DB設計

## usersテーブル
| Column          | Type       | Options           |
|-----------------|------------|-------------------|
| email           | string     | null: false       |
| password        | string     | null: false       |
| position_id     | integer    | null: false       |
| status_id       | integer    | null: false       |

### Association
- has_one :customer
- has_one :store

## customersテーブル
| Column          | Type       | Options           |
|-----------------|------------|-------------------|
| nickname        | string     | null: false       |
| first_name      | string     | null: false       |
| last_name       | string     | null: false       |
| first_name_kana | string     | null: false       |
| last_name_kana  | string     | null: false       |
| prefecture_id   | integer    | null: false       |
| phone_number    | string     | null: false       |
| birth_day       | date       | null: false       |
| user            | references | foreign_key: true |

### Association
- belongs_to :user, optional: true

## storesテーブル
| Column          | Type       | Options           |
|-----------------|------------|-------------------|
| name            | string     | null: false       |
| first_name      | string     | null: false       |
| last_name       | string     | null: false       |
| first_name_kana | string     | null: false       |
| last_name_kana  | string     | null: false       |
| postal_code     | string     | null: false       |
| prefecture_id   | integer    | null: false       |
| address         | string     | null: false       |
| city            | string     | null: false       |
| building        | string     |                   |
| phone_number    | string     | null: false       |
| user            | references | foreign_key: true |

### Association
- belongs_to :user, optional: true
