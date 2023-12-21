/*
  Warnings:

  - Added the required column `marital_status` to the `app_user_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "app_user_data" ADD COLUMN     "marital_status" TEXT NOT NULL;
