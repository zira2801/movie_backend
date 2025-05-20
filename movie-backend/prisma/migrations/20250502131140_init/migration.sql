/*
  Warnings:

  - Added the required column `username` to the `TempUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TempUser" ADD COLUMN     "username" TEXT NOT NULL;
