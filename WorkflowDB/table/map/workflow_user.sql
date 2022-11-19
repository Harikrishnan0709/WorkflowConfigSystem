CREATE TABLE [map].[workflow_user]
(
	[id] int NOT NULL PRIMARY KEY identity(1, 1),
	[workflowid] int,
	[userid] int,
	[createdby] bigint,
	[createdon] datetime default getdate(),
	[modifiedby] bigint,
	[modifiedon] datetime default getdate()
)
