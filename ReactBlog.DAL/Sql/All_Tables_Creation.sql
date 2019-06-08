CREATE TABLE [dbo].[BlogUser] (
	[Id] INT IDENTITY (1, 1) NOT NULL,
	[CreationDateTime]  datetime,
    [Login] NVARCHAR (MAX),
    [Password] NVARCHAR (MAX),
	[IsAdmin] BIT,
    CONSTRAINT [PK_BlogUser] PRIMARY KEY CLUSTERED ([Id] ASC)
);

CREATE TABLE [dbo].[BlogPost] (
	[Id] INT IDENTITY (1, 1) NOT NULL,
	[CreationDateTime]  datetime,
    [Header] NVARCHAR (MAX),
    [Body] NVARCHAR (MAX),
    CONSTRAINT [PK_BlogPost] PRIMARY KEY CLUSTERED ([Id] ASC)
);

CREATE TABLE [dbo].[BlogComment] (
	[Id] INT IDENTITY (1, 1) NOT NULL,
	[CreationDateTime]  datetime,
    [Body] NVARCHAR (MAX),
	[AuthorId] INT,
	[PostId] INT,
    CONSTRAINT [PK_BlogComment] PRIMARY KEY CLUSTERED ([Id] ASC),
	CONSTRAINT [FK_Comment_User_AuthorId] FOREIGN KEY ([AuthorId]) REFERENCES [dbo].[BlogUser] ([Id]) ON DELETE CASCADE,
	CONSTRAINT [FK_Comment_Post_PostId] FOREIGN KEY ([PostId]) REFERENCES [dbo].[BlogPost] ([Id]) ON DELETE CASCADE
);

CREATE TABLE [dbo].[BlogTag] (
	[Id] INT IDENTITY (1, 1) NOT NULL,
	[CreationDateTime]  datetime,
    [Name] NVARCHAR (MAX),
	[PostId] INT,
    CONSTRAINT [PK_BlogTag] PRIMARY KEY CLUSTERED ([Id] ASC),
	CONSTRAINT [FK_Tag_Post_PostId] FOREIGN KEY ([PostId]) REFERENCES [dbo].[BlogPost] ([Id]) ON DELETE CASCADE
);

CREATE NONCLUSTERED INDEX [IX_Comment_AuthorId] ON [dbo].[BlogComment]([AuthorId] ASC);
CREATE NONCLUSTERED INDEX [IX_Comment_PostId] ON [dbo].[BlogComment]([PostId] ASC);

CREATE NONCLUSTERED INDEX [IX_Tag_PostId] ON [dbo].[BlogTag]([PostId] ASC);