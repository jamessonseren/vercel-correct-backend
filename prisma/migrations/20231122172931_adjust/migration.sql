/*
  Warnings:

  - You are about to drop the column `tipo` on the `company_type` table. All the data in the column will be lost.
  - Added the required column `type` to the `company_type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company_type" DROP COLUMN "tipo",
ADD COLUMN     "type" "CompanyTypeOptions" NOT NULL;
