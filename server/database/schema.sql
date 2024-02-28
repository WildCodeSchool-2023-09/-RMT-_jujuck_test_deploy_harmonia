DROP Table if EXISTS drinks cascade;
DROP table if EXISTS category cascade;
DROP table if EXISTS users cascade;

DROP table if EXISTS user_cellar cascade;

DROP table if EXISTS tasting cascade;

create table users (
  id int primary key auto_increment not null,
  email varchar(255) unique not null,
  password varchar(255) not null
);
create table category (
  id int primary key auto_increment not null,
  name varchar(255) not null
);

create table drinks (
  id int primary key auto_increment not null,
  name varchar(255) not null,
  barcode VARCHAR(255) unique not null,
  category_id int not null,
  country varchar(255),
  degree int,
  description longtext,
  year int,
  producer varchar(255),
  foreign key(category_id) references category(id)
);

create table user_cellar (
  user_id int not null,
  drink_id int not null,
  foreign key(user_id) references users(id),
  foreign key(drink_id) references drinks(id),
  primary key(user_id, drink_id)
);

create Table tasting (
  id int primary key auto_increment not null,
  user_id int not null,
  drink_id int not null,
  note text,
  rating int,
  created_at timestamp default current_timestamp,
  foreign key(user_id) references users(id),
  foreign key(drink_id) references drinks(id)
);

