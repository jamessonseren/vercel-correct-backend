/*
  Warnings:

  - The `permissions` column on the `company_users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Permissions" AS ENUM ('none', 'sales', 'finances', 'marketing', 'benefits', 'transports', 'allPartners', 'allEmployers');

-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('all');

-- AlterTable
ALTER TABLE "company_users" DROP COLUMN "permissions",
ADD COLUMN     "permissions" "Permissions"[] DEFAULT ARRAY['none']::"Permissions"[];

-- DropEnum
DROP TYPE "PermissionEmployer";

-- DropEnum
DROP TYPE "PermissionsPartner";
