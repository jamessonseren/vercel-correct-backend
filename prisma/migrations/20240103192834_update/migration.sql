/*
  Warnings:

  - The required column `user_code` was added to the `company_users` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "company_users" ADD COLUMN     "user_code" TEXT NOT NULL;
