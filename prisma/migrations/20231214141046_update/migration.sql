/*
  Warnings:

  - Added the required column `user_type` to the `company_secondary_user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('sales', 'ecommerce_admin');

-- AlterTable
ALTER TABLE "company_secondary_user" ADD COLUMN     "user_type" "UserType" NOT NULL;
