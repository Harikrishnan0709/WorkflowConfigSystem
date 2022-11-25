CREATE TABLE [master].[activity]
(
	[id] INT NOT NULL PRIMARY KEY identity(1, 1),
	[name] nvarchar(250) not null,
	[caption] nvarchar(250) not null,
	[parentid] int null default 0,
	[isactive] bit default 1,
	[createdby] bigint,
	[createdon] datetime default getdate(),
	[modifiedby] bigint,
	[modifiedon] datetime default getdate()
)
