-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "balance" REAL NOT NULL,
    "age" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "marital" TEXT NOT NULL,
    "residence" TEXT NOT NULL,
    "children" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "joined" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "index" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "guarantors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "relationship" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    CONSTRAINT "guarantors_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");
