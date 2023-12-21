/*
  Warnings:

  - You are about to drop the column `company_admin_id` on the `advertisements` table. All the data in the column will be lost.
  - You are about to drop the column `correct_admin_id` on the `app_user_data` table. All the data in the column will be lost.
  - You are about to drop the column `company_admin_id` on the `company_data` table. All the data in the column will be lost.
  - You are about to drop the column `company_admin_id` on the `company_type` table. All the data in the column will be lost.
  - You are about to drop the column `company_admin_id` on the `products` table. All the data in the column will be lost.
  - Added the required column `company_user_id` to the `advertisements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correct_user_id` to the `app_user_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_user_id` to the `company_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_user_id` to the `company_type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_user_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "advertisements" DROP CONSTRAINT "advertisements_company_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "app_user_data" DROP CONSTRAINT "app_user_data_correct_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "company_data" DROP CONSTRAINT "company_data_company_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "company_type" DROP CONSTRAINT "company_type_company_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_company_admin_id_fkey";

-- AlterTable
ALTER TABLE "advertisements" DROP COLUMN "company_admin_id",
ADD COLUMN     "company_user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "app_user_data" DROP COLUMN "correct_admin_id",
ADD COLUMN     "correct_user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "company_data" DROP COLUMN "company_admin_id",
ADD COLUMN     "company_user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "company_type" DROP COLUMN "company_admin_id",
ADD COLUMN     "company_user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "company_admin_id",
ADD COLUMN     "company_user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "company_data" ADD CONSTRAINT "company_data_company_user_id_fkey" FOREIGN KEY ("company_user_id") REFERENCES "company_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_type" ADD CONSTRAINT "company_type_company_user_id_fkey" FOREIGN KEY ("company_user_id") REFERENCES "company_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "app_user_data" ADD CONSTRAINT "app_user_data_correct_user_id_fkey" FOREIGN KEY ("correct_user_id") REFERENCES "correct_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_company_user_id_fkey" FOREIGN KEY ("company_user_id") REFERENCES "company_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "advertisements" ADD CONSTRAINT "advertisements_company_user_id_fkey" FOREIGN KEY ("company_user_id") REFERENCES "company_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
