/*
  Warnings:

  - Made the column `cnpj` on table `company_users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "company_users_cnpj_key";

-- AlterTable
ALTER TABLE "company_users" ALTER COLUMN "cnpj" SET NOT NULL;
