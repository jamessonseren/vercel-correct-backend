/*
  Warnings:

  - You are about to drop the column `correct_admin_id` on the `partner_cards` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "partner_cards" DROP CONSTRAINT "partner_cards_correct_admin_id_fkey";

-- AlterTable
ALTER TABLE "partner_cards" DROP COLUMN "correct_admin_id";
