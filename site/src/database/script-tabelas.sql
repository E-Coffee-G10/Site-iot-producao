CREATE DATABASE Ecoffee;
USE Ecoffee;

create table empresa (idEmpresa int primary key IDENTITY(1,1),
nome_empresa varchar (40), 
 cnpj varchar (18),
 telefone varchar (11),
 cep varchar (10),
 cidade varchar (40),
 logradouro varchar(40),
 n_endereco VARCHAR (5),
 fk_matriz int,
 foreign key (fk_matriz) references empresa (idEmpresa)
 );
 
 
create table usuario ( idUsuario int primary key IDENTITY(1,1),
nome_usuario varchar (30),
funcao char (3), check (funcao = "adm" or funcao = "fun"),
email varchar (45),
senha varchar (45),
fk_supervisor int,
foreign key (fk_supervisor) references usuario (idUsuario),
fk_empresa int,
foreign key (fk_empresa) references empresa (idEmpresa)
) auto_increment = 100;


create table setor ( idSetor int primary key IDENTITY(1,1),
nome_area char (2),
qtd_sensores int,
fk_empresa int,
foreign key (fk_empresa) references empresa (idEmpresa));

create table sensor (idSensor int primary key auto_increment,
fk_setor int,
foreign key (fk_setor) references setor (idSetor) );

create table historico_monitoramento ( idMonitoramento int primary key IDENTITY(1,1),
data_hora datetime default current_timestamp,
temperatura decimal,
umidade decimal,
fk_sensor int,
foreign key (fk_sensor) references sensor (idSensor));