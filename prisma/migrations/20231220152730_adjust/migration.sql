/*
  Warnings:

  - You are about to drop the column `status` on the `company_admin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "company_admin" DROP COLUMN "status",
ADD COLUMN     "client_admin" BOOLEAN NOT NULL DEFAULT false;
