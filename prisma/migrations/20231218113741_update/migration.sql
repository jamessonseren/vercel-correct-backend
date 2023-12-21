/*
  Warnings:

  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category_name` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_user_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_correct_admin_id_fkey";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "category_name" TEXT NOT NULL,
ADD COLUMN     "company_user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "categories";

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_company_user_id_fkey" FOREIGN KEY ("company_user_id") REFERENCES "company_secondary_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
