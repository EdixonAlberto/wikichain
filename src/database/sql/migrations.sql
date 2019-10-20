CREATE TABLE IF NOT EXISTS "concepts" (
    "id" VARCHAR(36) PRIMARY KEY,
    "title" VARCHAR(20) NOT NULL CHECK (title <> ''),
    "info" TEXT NOT NULL CHECK (title <> ''),
    "img" TEXT,
    "createdAt" TIMESTAMP NOT NULL,
    "updatedAt" TIMESTAMP NOT NULL
);
