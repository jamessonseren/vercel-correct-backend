/*
  Warnings:

  - You are about to drop the column `company_user_id` on the `products` table. All the data in the column will be lost.
  - Added the required column `company_admin_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_company_user_id_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "company_user_id",
ADD COLUMN     "company_admin_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_company_admin_id_fkey" FOREIGN KEY ("company_admin_id") REFERENCES "company_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
