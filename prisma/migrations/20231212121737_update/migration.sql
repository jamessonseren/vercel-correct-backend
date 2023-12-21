/*
  Warnings:

  - You are about to drop the column `app_user_data_id` on the `app_user_auth` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "app_user_auth" DROP CONSTRAINT "app_user_auth_app_user_data_id_fkey";

-- AlterTable
ALTER TABLE "app_user_auth" DROP COLUMN "app_user_data_id";
