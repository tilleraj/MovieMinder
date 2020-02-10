-- Create a new database called 'MovieMinder'
USE master
GO
DECLARE @dbname NVARCHAR(15)
SET @dbname = N'MovieMinder'

IF (EXISTS (SELECT name
FROM master.dbo.sysdatabases
WHERE ('[' + name + ']' = @dbname 
OR name = @dbname)))
BEGIN
ALTER DATABASE MovieMinder SET SINGLE_USER WITH ROLLBACK IMMEDIATE
DROP DATABASE MovieMinder
END
GO

CREATE DATABASE MovieMinder
GO



USE MovieMinder
-- Create a new table called '[User]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[User]', 'U') IS NOT NULL
DROP TABLE [dbo].[User]
GO

CREATE TABLE [dbo].[User]
(
    [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [FirebaseUid] NVARCHAR(30) NOT NULL,
    [Username] NVARCHAR(50) NOT NULL,
    [Email] NVARCHAR(320) NOT NULL,
    [Zip] NVARCHAR (12) NOT NULL
)
GO

-- Insert rows into table 'User' in schema '[dbo]'
INSERT INTO [dbo].[User]
    ( -- Columns to insert data into
    [FirebaseUid], [Username], [Email], [Zip]
    )
VALUES
    ( -- First row: values for the columns in the list above
        '000000000000000001', 'LunaLovegood', 'luna@lovegood.com', '67890'
),
    ( -- Second row: values for the columns in the list above
        '000000000000000002', 'SpongebobSquarepants', 'spongebob@squarepants.com', '23456'
),
    ( -- Third row: values for the columns in the list above
        '000000000000000003', 'PepperPotts', 'pepper@starkindustries.com', '34567'
),
    ( -- Fourth row: values for the columns in the list above
        '000000000000000004', 'TimmyTurner', 'timmy@turner.com', '45678'
),
    (
        'olH2Wu8yfqTdroLWRz3bBHgPHR33', 'tilleraj', 'tiller.andrew@gmail.com', '37205'
)
GO


-- Create a new table called '[Movie]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Movie]', 'U') IS NOT NULL
DROP TABLE [dbo].[Movie]
GO

CREATE TABLE [dbo].[Movie]
(
    [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [Title] NVARCHAR(100) NOT NULL,
    [ReleaseDate] DATE NOT NULL,
    [LeftTheaters] BIT NOT NULL default(0),
    [RetireDate] DATE,
    [PosterURL] NVARCHAR (300)
)
GO

-- Insert rows into table 'Movie' in schema '[dbo]'
INSERT INTO [dbo].[Movie]
    ( -- Columns to insert data into
    [Title], [ReleaseDate], [PosterURL]
    )
VALUES
    ( -- First row: values for the columns in the list above
        'Bad Boys for Life', '2020-01-16', 'https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
),
    ( -- Second row: values for the columns in the list above
        'Star Wars: The Rise of Skywalker', '2019-12-18', 'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg'
),
    ( -- Third row: values for the columns in the list above
        'Frozen II', '2019-11-20', 'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg'
),
    ( -- Fourth row: values for the columns in the list above
        '1917', '2019-01-23', 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX182_CR0,0,182,268_AL_.jpg'
),
    (
        'Jojo Rabbit', '2019-01-16', 'https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg'
)
GO


-- Create a new table called '[UserMovie]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[UserMovie]', 'U') IS NOT NULL
DROP TABLE [dbo].[UserMovie]
GO

CREATE TABLE [dbo].[UserMovie]
(
    [Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [UserId] INT NOT NULL
        FOREIGN KEY
        REFERENCES [User] (Id),
    [MovieId] INT NOT NULL
        FOREIGN KEY
        REFERENCES [Movie] (Id),
    [WatchList] BIT NOT NULL default(1),
    [SeenList] BIT NOT NULL default(0),
    [ShameList] BIT NOT NULL default(0)
);
GO

INSERT INTO [dbo].[UserMovie]
    (
    [UserId], [MovieId], [WatchList], [SeenList], [ShameList]
    )
VALUES
    (
        1, 4, 1, 0, 0
),
    (
        1, 3, 0, 1, 0
),
    (
        2, 1, 0, 0, 1
),
    (
        2, 2, 0, 1, 0
),
    (
        3, 1, 0, 0, 1
),
    (
        5, 1, 1, 0, 0
),
    (
        5, 2, 0, 1, 0
),
    (
        5, 3, 1, 0, 0
),
    (
        5, 4, 0, 0, 1
),
    (
        5, 5, 0, 0, 1
)
GO