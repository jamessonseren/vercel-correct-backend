/*
  Warnings:

  - You are about to drop the column `company_owner` on the `app_user_auth` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "app_user_auth" DROP COLUMN "company_owner";

-- AlterTable
ALTER TABLE "app_user_data" ADD COLUMN     "company_owner" BOOLEAN NOT NULL DEFAULT false;
