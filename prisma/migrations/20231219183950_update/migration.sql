/*
  Warnings:

  - Added the required column `company_admin_id` to the `advertisements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "advertisements" ADD COLUMN     "company_admin_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "advertisements" ADD CONSTRAINT "advertisements_company_admin_id_fkey" FOREIGN KEY ("company_admin_id") REFERENCES "company_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
