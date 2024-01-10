/*
  Warnings:

  - Made the column `cnpj` on table `company_users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "company_users" ALTER COLUMN "cnpj" SET NOT NULL;
