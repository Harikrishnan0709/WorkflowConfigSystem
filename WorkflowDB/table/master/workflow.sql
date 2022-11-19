CREATE TABLE [master].[workflow]
(
	[id] int not null primary key identity(1, 1),
	[name] nvarchar(max) not null,
	[description] nvarchar(max) null,
	[isactive] bit not null default 1,
	[type] bigint null,
	[createdby] bigint,
	[createdon] datetime default getdate(),
	[modifiedby] bigint,
	[modifiedon] datetime default getdate()
)
