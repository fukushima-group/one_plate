# README

## 導入方法

**①git clone する**

```
% git clone https://github.com/fukushima-group/one_plate.git
% cd one_plate
```

**②api 側の credentials.yml.enc を削除し再度作成**

```
one_plate % cd api/config
config % rm credentials.yml.enc
config % cd ..
api % EDITOR="vi" bin/rails credentials:edit
```

**③react 側の node_modules をインストールする**

```
api % cd ../frontend
frontend % docker-compose run frontend npm install
```

**④ 下記コマンドを実行し、コンテナを起動**

```
frontend % cd ..
one_plate % docker-compose up -d
```

**⑤ データベースを作成**

```
one_plate % docker exec one_plate_api_1 rails db:create
```

※失敗した場合、コンテナ内にログインし、データベースを作成する

```
one_plate % docker exec -it one_plate_api_1 bash
root@コンテナID:/one_plate/api# bundle install
root@コンテナID:/one_plate/api# bundle exec rails db:create
root@コンテナID:/one_plate/api# exit
```

**※下記のエラーが出た時の対処法**

Plugin caching_sha2_password could not be loaded〜

原因：Mysql 8 以降、認証プラグインの仕様が変わったため。

対処：ユーザーのプラグインを mysql_native_password に変更する。

**mysqlのコンテナIDを確認する**

```
one_plate % docker ps
CONTAINER ID   IMAGE
195495c6e68f   one_plate_frontend
f0c0dcf4a93e   one_plate_api
498ef88da181   mysql:8.0
```

**コンテナにログインし、mysqlにログインする（パスワード→password）**

```
one_plate % docker exec -it 498ef88da181 bash
root@498ef88da181:/# mysql -u root -p
```

**下記コマンドを実行し、現在のプラグインを確認する**

```
mysql> SELECT user, host, plugin FROM mysql.user;
+------------------+-----------+-----------------------+
| user             | host      | plugin                |
+------------------+-----------+-----------------------+
| root             | %         | caching_sha2_password |
| mysql.infoschema | localhost | caching_sha2_password |
| mysql.session    | localhost | caching_sha2_password |
| mysql.sys        | localhost | caching_sha2_password |
| root             | localhost | caching_sha2_password |
+------------------+-----------+-----------------------+
5 rows in set (0.02 sec)
```

**caching_sha2_passwordをmysql_native_passwordに変更する**

```
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
mysql> ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
```

**変更できたか確認する（下記のようになっていればOK）**

```
mysql> SELECT user, host, plugin FROM mysql.user;
+------------------+-----------+-----------------------+
| user             | host      | plugin                |
+------------------+-----------+-----------------------+
| root             | %         | mysql_native_password |
| mysql.infoschema | localhost | caching_sha2_password |
| mysql.session    | localhost | caching_sha2_password |
| mysql.sys        | localhost | caching_sha2_password |
| root             | localhost | mysql_native_password |
+------------------+-----------+-----------------------+
5 rows in set (0.02 sec)
```

**⑥ 各ローカルホストにアクセスし、確認**

```

Rails→ http://localhost:3000/
React→ http://localhost:8000/

```

# one_plate DB 設計

## users テーブル

| Column      | Type    | Options     |
| ----------- | ------- | ----------- |
| email       | string  | null: false |
| password    | string  | null: false |
| position_id | integer | null: false |
| status_id   | integer | null: false |

### Association

- has_one :customer
- has_one :store

## customers テーブル

| Column          | Type       | Options           |
| --------------- | ---------- | ----------------- |
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

## stores テーブル

| Column          | Type       | Options           |
| --------------- | ---------- | ----------------- |
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

```

```
