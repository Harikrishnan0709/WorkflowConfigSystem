CREATE TABLE [master].[workflow]
(
	[Id] uniqueidentifier not null primary key default newid(),
	[name] nvarchar(max) not null,
	[isactive] bit not null default 1,
	[type] bigint null,
	[createdby] bigint,
	[createdon] datetime default getdate(),
	[modifiedby] bigint,
	[modifiedon] datetime default getdate()
)
