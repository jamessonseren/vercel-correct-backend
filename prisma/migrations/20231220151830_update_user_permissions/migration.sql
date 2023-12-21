/*
  Warnings:

  - A unique constraint covering the columns `[user_name]` on the table `company_admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_name` to the `company_admin` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CompanyPermissions" AS ENUM ('admin', 'ecommerce', 'sales');

-- AlterTable
ALTER TABLE "company_admin" ADD COLUMN     "permissions" "CompanyPermissions"[] DEFAULT ARRAY['admin']::"CompanyPermissions"[],
ADD COLUMN     "user_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "company_admin_user_name_key" ON "company_admin"("user_name");
