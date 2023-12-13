/*
  Warnings:

  - A unique constraint covering the columns `[card_id]` on the table `app_user_accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `card_id` to the `app_user_accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "app_user_accounts" ADD COLUMN     "card_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "app_user_accounts_card_id_key" ON "app_user_accounts"("card_id");

-- AddForeignKey
ALTER TABLE "app_user_accounts" ADD CONSTRAINT "app_user_accounts_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
