/*
  Warnings:

  - You are about to drop the `company_secondary_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "company_secondary_user" DROP CONSTRAINT "company_secondary_user_company_admin_id_fkey";

-- AlterTable
ALTER TABLE "company_admin" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "fullName" DROP NOT NULL,
ALTER COLUMN "function" DROP NOT NULL;

-- DropTable
DROP TABLE "company_secondary_user";
