CREATE TABLE [master].[users]
(
	[id] int NOT NULL PRIMARY KEY identity(1, 1),
	[name] nvarchar(max) not null,
	[password] nvarchar(max) not null,
	[isactive] bit default 1,
	[createdby] bigint,
	[createdon] datetime default getdate(),
	[modifiedby] bigint,
	[modifiedon] datetime default getdate()
)
