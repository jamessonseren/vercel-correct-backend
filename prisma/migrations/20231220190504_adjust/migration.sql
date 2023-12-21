/*
  Warnings:

  - You are about to drop the column `correct_user_id` on the `app_user_data` table. All the data in the column will be lost.
  - Added the required column `correct_admin_id` to the `app_user_data` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "app_user_data" DROP CONSTRAINT "app_user_data_correct_user_id_fkey";

-- AlterTable
ALTER TABLE "app_user_data" DROP COLUMN "correct_user_id",
ADD COLUMN     "correct_admin_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "app_user_data" ADD CONSTRAINT "app_user_data_correct_admin_id_fkey" FOREIGN KEY ("correct_admin_id") REFERENCES "correct_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
