# README
# one_plate DB設計

## positionsテーブル
| Column          | Type       | Options           |
|-----------------|------------|-------------------|
| admin           | string     | null: false       |
| store           | string     | null: false       |
| customer        | string     | null: false       |

### Association
- has_one :user

## usersテーブル
| Column          | Type       | Options           |
|-----------------|------------|-------------------|
| nickname        | string     | null: false       |
| first_name      | string     | null: false       |
| last_name       | string     | null: false       |
| first_name_kana | string     | null: false       |
| last_name_kana  | string     | null: false       |
| position        | references | foreign_key: true |

### Association
- has_one :customer
- has_one :store
- belongs_to :position

## customersテーブル
| Column          | Type       | Options           |
|-----------------|------------|-------------------|
| birth_day       | string     | null: false       |
| prefecture_id   | integer    | null: false       |
| phone_number    | string     | null: false       |
| user            | references | foreign_key: true |

### Association
- belongs_to :user, optional: true

## storesテーブル
| Column          | Type       | Options           |
|-----------------|------------|-------------------|
| open_day        | string     | null: false       |
| postal_code     | string     | null: false       |
| prefecture_id   | integer    | null: false       |
| address         | string     | null: false       |
| city            | string     | null: false       |
| building        | string     |                   |
| phone_number    | string     | null: false       |
| user            | references | foreign_key: true |

### Association
- belongs_to :user, optional: true